class Game extends Phaser.Scene {
    constructor() {
        super('Game');

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

    create() {
        this.createGameUI();
        this.onOrientationChange();
        this.uiEditor = new UIEditor(this, {
            enabled: true,
            keys: this.getEditorKeys(),
            gridSize: 10,
            fileName: 'game.js'
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

    createGameUI() {
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
}
