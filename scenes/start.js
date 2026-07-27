class Start extends Phaser.Scene {
    constructor() {
        super('Start');

        this.LAYOUT_PORTRAIT = {
            card_ace_screen_0_table: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            card_ace_screen_01_bg: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            card_logo: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            hand_pointer: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            card_ace_screen_01_mockup: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            play_button: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            card_ace_screen_03_2_mockup: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            clock_bg: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            d_circle: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            diamond: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            icon_01: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            icon_02: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            icon_a: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            icon_b: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            icon_c: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            icon_d: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            no_bg_0_big_01: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            no_bg_01: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            robot_user_01: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            user_02: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            clubs_01: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            clubs_02: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            clubs_03: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            clubs_04: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            clubs_05: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            clubs_06: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            clubs_07: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            clubs_08: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            clubs_09: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            clubs_10: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            clubs_j: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            clubs_k: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            clubs_q: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            diamonds_01: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            diamonds_02: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            diamonds_03: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            diamonds_04: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            diamonds_05: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            diamonds_06: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            diamonds_07: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            diamonds_08: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            diamonds_09: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            diamonds_10: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            diamonds_j: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            diamonds_joker: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            diamonds_k: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            diamonds_q: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            hearts_01: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            hearts_02: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            hearts_03: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            hearts_04: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            hearts_05: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            hearts_06: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            hearts_07: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            hearts_08: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            hearts_09: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            hearts_10: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            hearts_j: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            hearts_k: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            hearts_q: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            spades_01: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            spades_02: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            spades_03: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            spades_04: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            spades_05: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            spades_06: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            spades_07: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            spades_08: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            spades_09: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            spades_10: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            spades_j: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            spades_k: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            spades_q: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            minus_icon: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            plus_icon: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            progress_bar_background: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            progress_bar_box_01: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            progress_bar_line_01: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            progress_bar_line_02: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            progress_bar_mockup: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            tick_01: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
        };

        this.LAYOUT_LANDSCAPE = {
            card_ace_screen_0_table: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            card_ace_screen_01_bg: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            card_logo: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            hand_pointer: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            card_ace_screen_01_mockup: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            play_button: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            card_ace_screen_03_2_mockup: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            clock_bg: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            d_circle: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            diamond: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            icon_01: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            icon_02: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            icon_a: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            icon_b: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            icon_c: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            icon_d: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            no_bg_0_big_01: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            no_bg_01: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            robot_user_01: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            user_02: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            clubs_01: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            clubs_02: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            clubs_03: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            clubs_04: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            clubs_05: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            clubs_06: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            clubs_07: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            clubs_08: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            clubs_09: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            clubs_10: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            clubs_j: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            clubs_k: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            clubs_q: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            diamonds_01: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            diamonds_02: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            diamonds_03: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            diamonds_04: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            diamonds_05: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            diamonds_06: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            diamonds_07: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            diamonds_08: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            diamonds_09: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            diamonds_10: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            diamonds_j: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            diamonds_joker: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            diamonds_k: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            diamonds_q: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            hearts_01: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            hearts_02: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            hearts_03: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            hearts_04: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            hearts_05: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            hearts_06: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            hearts_07: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            hearts_08: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            hearts_09: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            hearts_10: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            hearts_j: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            hearts_k: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            hearts_q: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            spades_01: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            spades_02: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            spades_03: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            spades_04: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            spades_05: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            spades_06: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            spades_07: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            spades_08: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            spades_09: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            spades_10: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            spades_j: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            spades_k: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            spades_q: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            minus_icon: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            plus_icon: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            progress_bar_background: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            progress_bar_box_01: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            progress_bar_line_01: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            progress_bar_line_02: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            progress_bar_mockup: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            tick_01: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
        };
    }

    preload() {
        this.loadAllTheAssets();
    }

    create() {
        this.createUI();
        this.onOrientationChange();
        this.uiEditor = new UIEditor(this, {
            enabled: true,
            keys: this.getEditorKeys(),
            gridSize: 10,
            fileName: 'start.js'
        });
    }

    getEditorKeys() {
        return [
            'card_ace_screen_0_table',
            'card_ace_screen_01_bg',
            'card_logo',
            'hand_pointer',
            'card_ace_screen_01_mockup',
            'play_button',
            'card_ace_screen_03_2_mockup',
            'clock_bg',
            'd_circle',
            'diamond',
            'icon_01',
            'icon_02',
            'icon_a',
            'icon_b',
            'icon_c',
            'icon_d',
            'no_bg_0_big_01',
            'no_bg_01',
            'robot_user_01',
            'user_02',
            'clubs_01',
            'clubs_02',
            'clubs_03',
            'clubs_04',
            'clubs_05',
            'clubs_06',
            'clubs_07',
            'clubs_08',
            'clubs_09',
            'clubs_10',
            'clubs_j',
            'clubs_k',
            'clubs_q',
            'diamonds_01',
            'diamonds_02',
            'diamonds_03',
            'diamonds_04',
            'diamonds_05',
            'diamonds_06',
            'diamonds_07',
            'diamonds_08',
            'diamonds_09',
            'diamonds_10',
            'diamonds_j',
            'diamonds_joker',
            'diamonds_k',
            'diamonds_q',
            'hearts_01',
            'hearts_02',
            'hearts_03',
            'hearts_04',
            'hearts_05',
            'hearts_06',
            'hearts_07',
            'hearts_08',
            'hearts_09',
            'hearts_10',
            'hearts_j',
            'hearts_k',
            'hearts_q',
            'spades_01',
            'spades_02',
            'spades_03',
            'spades_04',
            'spades_05',
            'spades_06',
            'spades_07',
            'spades_08',
            'spades_09',
            'spades_10',
            'spades_j',
            'spades_k',
            'spades_q',
            'minus_icon',
            'plus_icon',
            'progress_bar_background',
            'progress_bar_box_01',
            'progress_bar_line_01',
            'progress_bar_line_02',
            'progress_bar_mockup',
            'tick_01',
        ];
    }

    createUI() {
        this.card_ace_screen_0_table = this.add.image(0, 0, 'card_ace_screen_0_table').setOrigin(0.5).setAlpha(0);
        this.card_ace_screen_01_bg = this.add.image(0, 0, 'card_ace_screen_01_bg').setOrigin(0.5).setAlpha(0);
        this.card_logo = this.add.image(0, 0, 'card_logo').setOrigin(0.5).setAlpha(0);
        this.hand_pointer = this.add.image(0, 0, 'hand_pointer').setOrigin(0.5).setAlpha(0);
        this.card_ace_screen_01_mockup = this.add.image(0, 0, 'card_ace_screen_01_mockup').setOrigin(0.5).setAlpha(0);
        this.play_button = this.add.image(0, 0, 'play_button').setOrigin(0.5).setAlpha(0);
        this.card_ace_screen_03_2_mockup = this.add.image(0, 0, 'card_ace_screen_03_2_mockup').setOrigin(0.5).setAlpha(0);
        this.clock_bg = this.add.image(0, 0, 'clock_bg').setOrigin(0.5).setAlpha(0);
        this.d_circle = this.add.image(0, 0, 'd_circle').setOrigin(0.5).setAlpha(0);
        this.diamond = this.add.image(0, 0, 'diamond').setOrigin(0.5).setAlpha(0);
        this.icon_01 = this.add.image(0, 0, 'icon_01').setOrigin(0.5).setAlpha(0);
        this.icon_02 = this.add.image(0, 0, 'icon_02').setOrigin(0.5).setAlpha(0);
        this.icon_a = this.add.image(0, 0, 'icon_a').setOrigin(0.5).setAlpha(0);
        this.icon_b = this.add.image(0, 0, 'icon_b').setOrigin(0.5).setAlpha(0);
        this.icon_c = this.add.image(0, 0, 'icon_c').setOrigin(0.5).setAlpha(0);
        this.icon_d = this.add.image(0, 0, 'icon_d').setOrigin(0.5).setAlpha(0);
        this.no_bg_0_big_01 = this.add.image(0, 0, 'no_bg_0_big_01').setOrigin(0.5).setAlpha(0);
        this.no_bg_01 = this.add.image(0, 0, 'no_bg_01').setOrigin(0.5).setAlpha(0);
        this.robot_user_01 = this.add.image(0, 0, 'robot_user_01').setOrigin(0.5).setAlpha(0);
        this.user_02 = this.add.image(0, 0, 'user_02').setOrigin(0.5).setAlpha(0);
        this.clubs_01 = this.add.image(0, 0, 'clubs_01').setOrigin(0.5).setAlpha(0);
        this.clubs_02 = this.add.image(0, 0, 'clubs_02').setOrigin(0.5).setAlpha(0);
        this.clubs_03 = this.add.image(0, 0, 'clubs_03').setOrigin(0.5).setAlpha(0);
        this.clubs_04 = this.add.image(0, 0, 'clubs_04').setOrigin(0.5).setAlpha(0);
        this.clubs_05 = this.add.image(0, 0, 'clubs_05').setOrigin(0.5).setAlpha(0);
        this.clubs_06 = this.add.image(0, 0, 'clubs_06').setOrigin(0.5).setAlpha(0);
        this.clubs_07 = this.add.image(0, 0, 'clubs_07').setOrigin(0.5).setAlpha(0);
        this.clubs_08 = this.add.image(0, 0, 'clubs_08').setOrigin(0.5).setAlpha(0);
        this.clubs_09 = this.add.image(0, 0, 'clubs_09').setOrigin(0.5).setAlpha(0);
        this.clubs_10 = this.add.image(0, 0, 'clubs_10').setOrigin(0.5).setAlpha(0);
        this.clubs_j = this.add.image(0, 0, 'clubs_j').setOrigin(0.5).setAlpha(0);
        this.clubs_k = this.add.image(0, 0, 'clubs_k').setOrigin(0.5).setAlpha(0);
        this.clubs_q = this.add.image(0, 0, 'clubs_q').setOrigin(0.5).setAlpha(0);
        this.diamonds_01 = this.add.image(0, 0, 'diamonds_01').setOrigin(0.5).setAlpha(0);
        this.diamonds_02 = this.add.image(0, 0, 'diamonds_02').setOrigin(0.5).setAlpha(0);
        this.diamonds_03 = this.add.image(0, 0, 'diamonds_03').setOrigin(0.5).setAlpha(0);
        this.diamonds_04 = this.add.image(0, 0, 'diamonds_04').setOrigin(0.5).setAlpha(0);
        this.diamonds_05 = this.add.image(0, 0, 'diamonds_05').setOrigin(0.5).setAlpha(0);
        this.diamonds_06 = this.add.image(0, 0, 'diamonds_06').setOrigin(0.5).setAlpha(0);
        this.diamonds_07 = this.add.image(0, 0, 'diamonds_07').setOrigin(0.5).setAlpha(0);
        this.diamonds_08 = this.add.image(0, 0, 'diamonds_08').setOrigin(0.5).setAlpha(0);
        this.diamonds_09 = this.add.image(0, 0, 'diamonds_09').setOrigin(0.5).setAlpha(0);
        this.diamonds_10 = this.add.image(0, 0, 'diamonds_10').setOrigin(0.5).setAlpha(0);
        this.diamonds_j = this.add.image(0, 0, 'diamonds_j').setOrigin(0.5).setAlpha(0);
        this.diamonds_joker = this.add.image(0, 0, 'diamonds_joker').setOrigin(0.5).setAlpha(0);
        this.diamonds_k = this.add.image(0, 0, 'diamonds_k').setOrigin(0.5).setAlpha(0);
        this.diamonds_q = this.add.image(0, 0, 'diamonds_q').setOrigin(0.5).setAlpha(0);
        this.hearts_01 = this.add.image(0, 0, 'hearts_01').setOrigin(0.5).setAlpha(0);
        this.hearts_02 = this.add.image(0, 0, 'hearts_02').setOrigin(0.5).setAlpha(0);
        this.hearts_03 = this.add.image(0, 0, 'hearts_03').setOrigin(0.5).setAlpha(0);
        this.hearts_04 = this.add.image(0, 0, 'hearts_04').setOrigin(0.5).setAlpha(0);
        this.hearts_05 = this.add.image(0, 0, 'hearts_05').setOrigin(0.5).setAlpha(0);
        this.hearts_06 = this.add.image(0, 0, 'hearts_06').setOrigin(0.5).setAlpha(0);
        this.hearts_07 = this.add.image(0, 0, 'hearts_07').setOrigin(0.5).setAlpha(0);
        this.hearts_08 = this.add.image(0, 0, 'hearts_08').setOrigin(0.5).setAlpha(0);
        this.hearts_09 = this.add.image(0, 0, 'hearts_09').setOrigin(0.5).setAlpha(0);
        this.hearts_10 = this.add.image(0, 0, 'hearts_10').setOrigin(0.5).setAlpha(0);
        this.hearts_j = this.add.image(0, 0, 'hearts_j').setOrigin(0.5).setAlpha(0);
        this.hearts_k = this.add.image(0, 0, 'hearts_k').setOrigin(0.5).setAlpha(0);
        this.hearts_q = this.add.image(0, 0, 'hearts_q').setOrigin(0.5).setAlpha(0);
        this.spades_01 = this.add.image(0, 0, 'spades_01').setOrigin(0.5).setAlpha(0);
        this.spades_02 = this.add.image(0, 0, 'spades_02').setOrigin(0.5).setAlpha(0);
        this.spades_03 = this.add.image(0, 0, 'spades_03').setOrigin(0.5).setAlpha(0);
        this.spades_04 = this.add.image(0, 0, 'spades_04').setOrigin(0.5).setAlpha(0);
        this.spades_05 = this.add.image(0, 0, 'spades_05').setOrigin(0.5).setAlpha(0);
        this.spades_06 = this.add.image(0, 0, 'spades_06').setOrigin(0.5).setAlpha(0);
        this.spades_07 = this.add.image(0, 0, 'spades_07').setOrigin(0.5).setAlpha(0);
        this.spades_08 = this.add.image(0, 0, 'spades_08').setOrigin(0.5).setAlpha(0);
        this.spades_09 = this.add.image(0, 0, 'spades_09').setOrigin(0.5).setAlpha(0);
        this.spades_10 = this.add.image(0, 0, 'spades_10').setOrigin(0.5).setAlpha(0);
        this.spades_j = this.add.image(0, 0, 'spades_j').setOrigin(0.5).setAlpha(0);
        this.spades_k = this.add.image(0, 0, 'spades_k').setOrigin(0.5).setAlpha(0);
        this.spades_q = this.add.image(0, 0, 'spades_q').setOrigin(0.5).setAlpha(0);
        this.minus_icon = this.add.image(0, 0, 'minus_icon').setOrigin(0.5).setAlpha(0);
        this.plus_icon = this.add.image(0, 0, 'plus_icon').setOrigin(0.5).setAlpha(0);
        this.progress_bar_background = this.add.image(0, 0, 'progress_bar_background').setOrigin(0.5).setAlpha(0);
        this.progress_bar_box_01 = this.add.image(0, 0, 'progress_bar_box_01').setOrigin(0.5).setAlpha(0);
        this.progress_bar_line_01 = this.add.image(0, 0, 'progress_bar_line_01').setOrigin(0.5).setAlpha(0);
        this.progress_bar_line_02 = this.add.image(0, 0, 'progress_bar_line_02').setOrigin(0.5).setAlpha(0);
        this.progress_bar_mockup = this.add.image(0, 0, 'progress_bar_mockup').setOrigin(0.5).setAlpha(0);
        this.tick_01 = this.add.image(0, 0, 'tick_01').setOrigin(0.5).setAlpha(0);
    }

    onOrientationChange() {
        this.reflowForResize({ width: this.scale.width, height: this.scale.height });
        this.scale.on('resize', this.reflowForResize, this);
    }

    reflowForResize(gameSize = { width: this.scale.width, height: this.scale.height }) {
        const isLandscape = gameSize.width > gameSize.height;
        const layout = isLandscape ? this.LAYOUT_LANDSCAPE : this.LAYOUT_PORTRAIT;

        for (const key in layout) {
            if (this[key] && layout.hasOwnProperty(key)) {
                const { x, y, scale, alpha, depth, angle, r } = layout[key];
                this[key].setPosition(x, y);
                if (angle !== undefined) this[key].setAngle(angle);
                else if (r !== undefined) this[key].setRotation(r);
                if (scale) this[key].setScale(scale);
                if (alpha !== undefined) this[key].setAlpha(alpha);
                if (depth !== undefined) this[key].setDepth(depth);
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
