"""
Card-Ace template mediator.

Use this app.py with the Card-Ace Phaser template.
The playable template reads all configurable gameplay values from
window.CARD_ACE_SETTINGS in index.html.

conversation.py / backend can call:
    apply_changes(dest_prefix, s3_list, s3_read, s3_write, patch_key="timer_duration", patch_value=45)

Backwards compatible:
- It accepts image/audio patch keys for templates that use marker comments.
- It returns (all_ok, results).
"""

import json
import re
from copy import deepcopy


DEFAULT_SETTINGS = {
    "editor": {"uiEditorEnabled": False},
    "design": {"width": 1080, "height": 1920},
    "gameplay": {
        "totalRounds": 1,
        "callbreakRules": True,
    },
    "timer": {"enabled": True, "duration": 60, "showText": True},
    "audio": {
        "enabled": True,
        "music": True,
        "sfx": True,
        "musicVolume": 0.3,
    },
    "text": {
        "startButtonLabel": "",
        "scorePrefix": "Score",
        "winScoreText": "Score",
    },
}

CONFIG = {
    "ui_editor_enabled": {"type": "config", "label": "Enable UI Editor", "path": ["editor", "uiEditorEnabled"], "value_type": "bool", "aliases": ["ui editor", "editor"]},
    "total_rounds": {"type": "config", "label": "Change total rounds", "path": ["gameplay", "totalRounds"], "value_type": "int", "min": 1, "max": 10, "aliases": ["rounds", "total rounds"]},
    "callbreak_rules": {"type": "config", "label": "Enable strict Callbreak rules", "path": ["gameplay", "callbreakRules"], "value_type": "bool", "aliases": ["callbreak", "strict rules"]},
    "timer_enabled": {"type": "config", "label": "Enable or disable timer", "path": ["timer", "enabled"], "value_type": "bool", "aliases": ["timer", "disable timer", "enable timer"]},
    "timer_duration": {"type": "config", "label": "Change timer duration", "path": ["timer", "duration"], "value_type": "int", "min": 1, "max": 999, "aliases": ["timer duration", "time duration", "seconds"]},
    "show_timer_text": {"type": "config", "label": "Show or hide timer number", "path": ["timer", "showText"], "value_type": "bool", "aliases": ["timer text", "timer number"]},
    "audio_enabled": {"type": "config", "label": "Enable or disable all audio", "path": ["audio", "enabled"], "value_type": "bool", "aliases": ["audio", "sound", "mute"]},
    "music_enabled": {"type": "config", "label": "Enable or disable background music", "path": ["audio", "music"], "value_type": "bool", "aliases": ["music", "background music"]},
    "sfx_enabled": {"type": "config", "label": "Enable or disable SFX", "path": ["audio", "sfx"], "value_type": "bool", "aliases": ["sfx", "sound effects"]},
}

SCENE_CATALOG = {
    "Start.js": {
        "label": "Start Scene",
        "description": "Opening screen with background, logo and play button.",
        "functionality_groups": [
            {"key": "start_effects", "label": "Start effects", "items": ["audio_enabled", "sfx_enabled"]},
        ],
    },
    "Game.js": {
        "label": "Game Scene",
        "description": "Main card gameplay screen.",
        "functionality_groups": [
            {"key": "game_rules", "label": "Game rules", "items": ["total_rounds", "callbreak_rules"]},
            {"key": "timer_rules", "label": "Timer rules", "items": ["timer_enabled", "timer_duration", "show_timer_text"]},
            {"key": "audio_rules", "label": "Audio", "items": ["audio_enabled", "music_enabled", "sfx_enabled"]},
        ],
    },
    "End.js": {
        "label": "End Scene",
        "description": "Win/loss screen with score and restart button.",
        "functionality_groups": [
            {"key": "end_effects", "label": "End effects", "items": ["audio_enabled", "sfx_enabled"]},
        ],
    },
}


def _safe_s3_read(s3_read, key):
    content = s3_read(key)
    if isinstance(content, bytes):
        return content.decode("utf-8")
    return content


def _safe_s3_write(s3_write, key, content, is_binary=False):
    if is_binary:
        s3_write(key, content)
        return
    if isinstance(content, bytes):
        content = content.decode("utf-8")
    s3_write(key, content)


def _find_index_key(dest_prefix, s3_list):
    keys = s3_list(dest_prefix)
    for key in keys:
        if key.endswith("index.html"):
            return key
    raise FileNotFoundError("index.html not found in destination prefix")


def _extract_settings(index_html):
    pattern = r"window\.CARD_ACE_SETTINGS\s*=\s*(\{.*?\})\s*;"
    match = re.search(pattern, index_html, re.S)
    if not match:
        return deepcopy(DEFAULT_SETTINGS)
    block = match.group(1)
    try:
        return json.loads(_js_object_to_json(block))
    except Exception:
        return deepcopy(DEFAULT_SETTINGS)


def _js_object_to_json(block):
    text = re.sub(r"//.*", "", block)
    text = re.sub(r"/\*.*?\*/", "", text, flags=re.S)
    text = re.sub(r"(\{|,|\s)([A-Za-z_$][\w$]*)\s*:", r'\1"\2":', text)
    text = text.replace("'", '"')
    text = re.sub(r",\s*([}\]])", r"\1", text)
    return text


def _to_js(value, indent=12):
    return json.dumps(value, indent=4).replace('"', '"')


def _replace_settings(index_html, settings):
    pretty = json.dumps(settings, indent=12)
    pretty = re.sub(r"^            ", "        ", pretty, flags=re.M)
    replacement = "window.CARD_ACE_SETTINGS = " + pretty + ";"
    pattern = r"window\.CARD_ACE_SETTINGS\s*=\s*\{.*?\}\s*;"
    if re.search(pattern, index_html, re.S):
        return re.sub(pattern, replacement, index_html, count=1, flags=re.S)
    insert = f"\n    <script>\n        {replacement}\n    </script>\n"
    return index_html.replace("</head>", insert + "</head>")


def _set_path(settings, path, value):
    current = settings
    for key in path[:-1]:
        current = current.setdefault(key, {})
    current[path[-1]] = value


def _coerce_value(raw, spec):
    value_type = spec.get("value_type")
    if value_type == "bool":
        if isinstance(raw, str):
            return raw.strip().lower() in {"true", "1", "yes", "on", "enable", "enabled", "show"}
        return bool(raw)
    if value_type == "int":
        value = int(float(raw))
        if "min" in spec:
            value = max(spec["min"], value)
        if "max" in spec:
            value = min(spec["max"], value)
        return value
    if value_type == "float":
        value = float(raw)
        if "min" in spec:
            value = max(spec["min"], value)
        if "max" in spec:
            value = min(spec["max"], value)
        return value
    if value_type == "list":
        if isinstance(raw, list):
            return raw
        return [item.strip() for item in str(raw).split(",") if item.strip()]
    return raw


def _apply_config_patch(index_html, patch_key, patch_value):
    if patch_key not in CONFIG:
        return index_html, False, f"Unknown patch_key: {patch_key}"
    spec = CONFIG[patch_key]
    if spec.get("type") != "config":
        return index_html, False, f"Patch key {patch_key} is not a config patch"
    settings = _extract_settings(index_html)
    value = _coerce_value(patch_value, spec)
    _set_path(settings, spec["path"], value)
    return _replace_settings(index_html, settings), True, f"Updated {patch_key} to {value}"


def _replace_between_markers(content, start_marker, end_marker, replacement):
    start = content.find(start_marker)
    end = content.find(end_marker)
    if start == -1 or end == -1 or end < start:
        return content, False
    end += len(end_marker)
    return content[:start] + start_marker + "\n" + replacement + "\n" + end_marker + content[end:], True


def apply_changes(dest_prefix, s3_list, s3_read, s3_write, patch_key=None, patch_value=None, **kwargs):
    results = []
    all_ok = True

    if not patch_key and kwargs:
        for key, value in kwargs.items():
            if key in CONFIG:
                patch_key, patch_value = key, value
                break

    if not patch_key:
        return False, [{"ok": False, "message": "No patch_key supplied"}]

    try:
        index_key = _find_index_key(dest_prefix, s3_list)
        index_html = _safe_s3_read(s3_read, index_key)

        if CONFIG.get(patch_key, {}).get("type") == "config":
            updated, ok, message = _apply_config_patch(index_html, patch_key, patch_value)
            if ok:
                _safe_s3_write(s3_write, index_key, updated)
            else:
                all_ok = False
            results.append({"ok": ok, "file": index_key, "message": message})
            return all_ok, results

        all_ok = False
        results.append({"ok": False, "message": f"Patch key {patch_key} is not supported for direct config update"})
        return all_ok, results

    except Exception as exc:
        return False, [{"ok": False, "message": str(exc)}]


def get_config_catalog():
    return deepcopy(CONFIG)


def get_scene_catalog():
    return deepcopy(SCENE_CATALOG)
