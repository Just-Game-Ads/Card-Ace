class Start extends Phaser.Scene {
    constructor() {
        super('Start');

        this.LAYOUT_PORTRAIT = {
            card_ace_screen_0_table: { x: 540, y: 960, scale: 0.6, depth: 2 },
            card_logo: { x: 540, y: 884, scale: 0.8, depth: 3 },
            hand_pointer: { x: 538, y: 1223, scale: 0.7, depth: 4 },
            play_button: { x: 540, y: 1116, scale: 1, depth: 3 },
        };

        this.LAYOUT_LANDSCAPE = {
            card_ace_screen_0_table: { x: 960, y: 540, scale: 1, depth: 2 },
            card_logo: { x: 960, y: 392, scale: 1, depth: 3 },
            hand_pointer: { x: 958, y: 779, scale: 0.7, depth: 4 },
            play_button: { x: 960, y: 670, scale: 1, depth: 3 },
        };
    }

    preload() {
        this.loadAllTheAssets();
    }

    create() {
        // this.scene.start('Game');
        // this.scene.start('End');
        this.createUI();
        this.onOrientationChange();
        // this.uiEditor = new UIEditor(this, {
        //     enabled: true,
        //     keys: this.getEditorKeys(),
        //     gridSize: 10,
        //     fileName: 'start.js'
        // });
    }

    getEditorKeys() {
        return [
            'card_ace_screen_0_table',
            'card_ace_screen_01_bg',
            'card_logo',
            'hand_pointer',
            'play_button',
        ];
    }

    createUI() {
        this.card_ace_screen_0_table = this.add.image(0, 0, 'card_ace_screen_0_table').setOrigin(0.5);
        this.card_ace_screen_01_bg = this.add.image(0, 0, 'card_ace_screen_01_bg').setOrigin(0.5);
        this.card_logo = this.add.image(0, 0, 'card_logo').setOrigin(0.5);
        this.hand_pointer = this.add.image(0, 0, 'hand_pointer').setOrigin(0.5);
        this.play_button = this.add.image(0, 0, 'play_button').setOrigin(0.5);

        this.startUIContainer = this.add.container(0, 0);
        this.startUIContainer.add([
            this.card_ace_screen_0_table, 
            this.card_logo, 
            this.play_button,
            this.hand_pointer, 
        ]);

    }

    onOrientationChange() {
        this.reflowForResize({ width: this.scale.width, height: this.scale.height });
        this.scale.on('resize', this.reflowForResize, this);
    }

    reflowForResize(gameSize = { width: this.scale.width, height: this.scale.height }) {
        const isLandscape = gameSize.width > gameSize.height;
        const layout = isLandscape ? this.LAYOUT_LANDSCAPE : this.LAYOUT_PORTRAIT;
        const baseW = isLandscape ? 1920 : 1080;
        const baseH = isLandscape ? 1080 : 1920;
        const gameW = gameSize.width;
        const gameH = gameSize.height;
        const centerX = gameSize.width / 2;
        const centerY = gameSize.height / 2;
        const scaleX = gameSize.width / baseW;
        const scaleY = gameSize.height / baseH;

        if (!this.card_ace_screen_01_bg) return;

        const bgScale = Math.max(gameW / this.card_ace_screen_01_bg.width, gameH / this.card_ace_screen_01_bg.height);
        this.card_ace_screen_01_bg.setPosition(centerX, centerY).setScale(bgScale);

        const startUIScale = Math.min(scaleX, scaleY);
        this.startUIContainer.setPosition(centerX, centerY).setScale(startUIScale);

        for (const key in layout) {
            if (this[key] && layout.hasOwnProperty(key)) {
                const { x, y, scale } = layout[key];
                const posX = x - baseW / 2;
                const posY = y - baseH / 2;
                this[key].setPosition(posX, posY).setScale(scale);
                this[key].baseScale = scale;
            }
        }
    }

    loadAllTheAssets() {
        const assets = [
            { key: 'card_ace_screen_0_table', path: 'assets/common/card-ace-screen-0-table.webp' },
            { key: 'card_ace_screen_01_bg', path: 'assets/common/card-ace-screen-01-bg.webp' },
            { key: 'card_logo', path: 'assets/common/card-logo.webp' },
            { key: 'hand_pointer', path: 'assets/common/hand-pointer.webp' },
            { key: 'card_ace_screen_01_mockup', path: 'assets/start/card-ace-screen-01-mockup.webp' },
            { key: 'play_button', path: 'assets/start/play-button.webp' },
            { key: 'card_ace_screen_03_2_mockup', path: 'assets/game/card-ace-screen-03-2-mockup.webp' },
            { key: 'clock_bg', path: 'assets/game/clock-bg.webp' },
            { key: 'd_circle', path: 'assets/game/d-circle.webp' },
            { key: 'diamond', path: 'assets/game/diamond.webp' },
            { key: 'icon_01', path: 'assets/game/icon-01.webp' },
            { key: 'icon_02', path: 'assets/game/icon-02.webp' },
            { key: 'icon_a', path: 'assets/game/icon-a.webp' },
            { key: 'icon_b', path: 'assets/game/icon-b.webp' },
            { key: 'icon_c', path: 'assets/game/icon-c.webp' },
            { key: 'icon_d', path: 'assets/game/icon-d.webp' },
            { key: 'no_bg_0_big_01', path: 'assets/game/no-bg-0-big-01.webp' },
            { key: 'no_bg_01', path: 'assets/game/no-bg-01.webp' },
            { key: 'robot_user_01', path: 'assets/game/robot-user-01.webp' },
            { key: 'user_02', path: 'assets/game/user-02.webp' },
            { key: 'clubs_01', path: 'assets/game/all-cards/clubs-01.webp' },
            { key: 'clubs_02', path: 'assets/game/all-cards/clubs-02.webp' },
            { key: 'clubs_03', path: 'assets/game/all-cards/clubs-03.webp' },
            { key: 'clubs_04', path: 'assets/game/all-cards/clubs-04.webp' },
            { key: 'clubs_05', path: 'assets/game/all-cards/clubs-05.webp' },
            { key: 'clubs_06', path: 'assets/game/all-cards/clubs-06.webp' },
            { key: 'clubs_07', path: 'assets/game/all-cards/clubs-07.webp' },
            { key: 'clubs_08', path: 'assets/game/all-cards/clubs-08.webp' },
            { key: 'clubs_09', path: 'assets/game/all-cards/clubs-09.webp' },
            { key: 'clubs_10', path: 'assets/game/all-cards/clubs-10.webp' },
            { key: 'clubs_j', path: 'assets/game/all-cards/clubs-j.webp' },
            { key: 'clubs_k', path: 'assets/game/all-cards/clubs-k.webp' },
            { key: 'clubs_q', path: 'assets/game/all-cards/clubs-q.webp' },
            { key: 'diamonds_01', path: 'assets/game/all-cards/diamonds-01.webp' },
            { key: 'diamonds_02', path: 'assets/game/all-cards/diamonds-02.webp' },
            { key: 'diamonds_03', path: 'assets/game/all-cards/diamonds-03.webp' },
            { key: 'diamonds_04', path: 'assets/game/all-cards/diamonds-04.webp' },
            { key: 'diamonds_05', path: 'assets/game/all-cards/diamonds-05.webp' },
            { key: 'diamonds_06', path: 'assets/game/all-cards/diamonds-06.webp' },
            { key: 'diamonds_07', path: 'assets/game/all-cards/diamonds-07.webp' },
            { key: 'diamonds_08', path: 'assets/game/all-cards/diamonds-08.webp' },
            { key: 'diamonds_09', path: 'assets/game/all-cards/diamonds-09.webp' },
            { key: 'diamonds_10', path: 'assets/game/all-cards/diamonds-10.webp' },
            { key: 'diamonds_j', path: 'assets/game/all-cards/diamonds-j.webp' },
            { key: 'diamonds_joker', path: 'assets/game/all-cards/diamonds-joker.webp' },
            { key: 'diamonds_k', path: 'assets/game/all-cards/diamonds-k.webp' },
            { key: 'diamonds_q', path: 'assets/game/all-cards/diamonds-q.webp' },
            { key: 'hearts_01', path: 'assets/game/all-cards/hearts-01.webp' },
            { key: 'hearts_02', path: 'assets/game/all-cards/hearts-02.webp' },
            { key: 'hearts_03', path: 'assets/game/all-cards/hearts-03.webp' },
            { key: 'hearts_04', path: 'assets/game/all-cards/hearts-04.webp' },
            { key: 'hearts_05', path: 'assets/game/all-cards/hearts-05.webp' },
            { key: 'hearts_06', path: 'assets/game/all-cards/hearts-06.webp' },
            { key: 'hearts_07', path: 'assets/game/all-cards/hearts-07.webp' },
            { key: 'hearts_08', path: 'assets/game/all-cards/hearts-08.webp' },
            { key: 'hearts_09', path: 'assets/game/all-cards/hearts-09.webp' },
            { key: 'hearts_10', path: 'assets/game/all-cards/hearts-10.webp' },
            { key: 'hearts_j', path: 'assets/game/all-cards/hearts-j.webp' },
            { key: 'hearts_k', path: 'assets/game/all-cards/hearts-k.webp' },
            { key: 'hearts_q', path: 'assets/game/all-cards/hearts-q.webp' },
            { key: 'spades_01', path: 'assets/game/all-cards/spades-01.webp' },
            { key: 'spades_02', path: 'assets/game/all-cards/spades-02.webp' },
            { key: 'spades_03', path: 'assets/game/all-cards/spades-03.webp' },
            { key: 'spades_04', path: 'assets/game/all-cards/spades-04.webp' },
            { key: 'spades_05', path: 'assets/game/all-cards/spades-05.webp' },
            { key: 'spades_06', path: 'assets/game/all-cards/spades-06.webp' },
            { key: 'spades_07', path: 'assets/game/all-cards/spades-07.webp' },
            { key: 'spades_08', path: 'assets/game/all-cards/spades-08.webp' },
            { key: 'spades_09', path: 'assets/game/all-cards/spades-09.webp' },
            { key: 'spades_10', path: 'assets/game/all-cards/spades-10.webp' },
            { key: 'spades_j', path: 'assets/game/all-cards/spades-j.webp' },
            { key: 'spades_k', path: 'assets/game/all-cards/spades-k.webp' },
            { key: 'spades_q', path: 'assets/game/all-cards/spades-q.webp' },
            { key: 'minus_icon', path: 'assets/game/progress-bar/minus-icon.webp' },
            { key: 'plus_icon', path: 'assets/game/progress-bar/plus-icon.webp' },
            { key: 'progress_bar_background', path: 'assets/game/progress-bar/progress-bar-background.webp' },
            { key: 'progress_bar_box_01', path: 'assets/game/progress-bar/progress-bar-box-01.webp' },
            { key: 'progress_bar_line_01', path: 'assets/game/progress-bar/progress-bar-line-01.webp' },
            { key: 'progress_bar_line_02', path: 'assets/game/progress-bar/progress-bar-line-02.webp' },
            { key: 'progress_bar_mockup', path: 'assets/game/progress-bar/progress-bar-mockup.webp' },
            { key: 'tick_01', path: 'assets/game/progress-bar/tick-01.webp' },
        ];

        const sfxs = [
            // No audio assets found
        ];

        for (const asset of assets) {
            this.load.image(asset.key, asset.path);
        }

        for (const sfx of sfxs) {
            this.load.audio(sfx.key, sfx.path);
        }
    }
}
