class Game extends Phaser.Scene {
    constructor() {
        super('Game');

        this.LAYOUT_PORTRAIT = {
            card_ace_screen_0_table: { x: 540, y: 960, scale: 0.6, depth: 2 },
            clock_bg: { x: 86, y: 776, scale: 0.95, depth: 10 },
            diamond: { x: 654, y: 1180, scale: 0.9, depth: 81 },
            icon_02_1: { x: 116, y: 880, scale: 1, depth: 81 },
            icon_02_2: { x: 468, y: 748, scale: 1, depth: 81 },
            icon_02_3: { x: 1016, y: 880, scale: 1, depth: 81 },
            icon_02_4: { x: 468, y: 1182, scale: 1, depth: 81 },
            no_bg_0_big_01: { x: 540, y: 1180, scale: 1, depth: 79 },
            no_bg_0_big_02: { x: 540, y: 748, scale: 1, depth: 79 },
            no_bg_01: { x: 90, y: 1044, scale: 1, depth: 80 },
            no_bg_02: { x: 90, y: 880, scale: 1, depth: 80 },
            no_bg_03: { x: 990, y: 1044, scale: 1, depth: 80 },
            no_bg_04: { x: 990, y: 880, scale: 1, depth: 80 },
            robot_user_01: { x: 990, y: 950, scale: 0.8, depth: 80 },
            robot_user_02: { x: 540, y: 772, scale: 0.8, depth: 80 },
            robot_user_03: { x: 90, y: 950, scale: 0.8, depth: 80 },
            user_02: { x: 540, y: 1160, scale: 0.8, depth: 80 },
            clubs_01: { x: 961, y: 1160, scale: 0.33, depth: 3 },
            clubs_02: { x: 121, y: 1160, scale: 0.33, depth: 3 },
            clubs_03: { x: 191, y: 1160, scale: 0.33, depth: 3 },
            clubs_04: { x: 261, y: 1160, scale: 0.33, depth: 3 },
            clubs_05: { x: 331, y: 1160, scale: 0.33, depth: 3 },
            clubs_06: { x: 400, y: 1160, scale: 0.33, depth: 3 },
            clubs_07: { x: 470, y: 1160, scale: 0.33, depth: 3 },
            clubs_08: { x: 540, y: 1160, scale: 0.33, depth: 3 },
            clubs_09: { x: 610, y: 1160, scale: 0.33, depth: 3 },
            clubs_10: { x: 680, y: 1160, scale: 0.33, depth: 3 },
            clubs_j: { x: 749, y: 1160, scale: 0.33, depth: 3 },
            clubs_q: { x: 819, y: 1160, scale: 0.33, depth: 3 },
            clubs_k: { x: 889, y: 1160, scale: 0.33, depth: 3 },
            diamonds_01: { x: 919, y: 915, scale: 0.33, angle: -11.459, depth: 14 },
            diamonds_02: { x: 935, y: 1009, scale: 0.33, angle: -108.862, depth: 3 },
            diamonds_03: { x: 924, y: 1004, scale: 0.33, angle: -103.132, depth: 3 },
            diamonds_04: { x: 920, y: 998, scale: 0.33, angle: -94.538, depth: 3 },
            diamonds_05: { x: 919, y: 990, scale: 0.33, angle: -85.944, depth: 3 },
            diamonds_06: { x: 916, y: 981, scale: 0.33, angle: -77.349, depth: 3 },
            diamonds_07: { x: 914, y: 973, scale: 0.33, angle: -68.755, depth: 5 },
            diamonds_08: { x: 913, y: 964, scale: 0.33, angle: -60.161, depth: 6 },
            diamonds_09: { x: 912, y: 953, scale: 0.33, angle: -54.431, depth: 8 },
            diamonds_10: { x: 910, y: 944, scale: 0.33, angle: -45.837, depth: 10 },
            diamonds_j: { x: 909, y: 934, scale: 0.33, angle: -37.242, depth: 12 },
            diamonds_q: { x: 911, y: 926, scale: 0.33, angle: -28.648, depth: 12 },
            diamonds_k: { x: 915, y: 920, scale: 0.33, angle: -20.054, depth: 13 },
            hearts_01: { x: 163, y: 912, scale: 0.33, angle: 8.594, depth: 14 },
            hearts_02: { x: 142, y: 1019, scale: 0.33, angle: 94.538, depth: 3 },
            hearts_03: { x: 147, y: 1014, scale: 0.33, angle: 85.944, depth: 3 },
            hearts_04: { x: 155, y: 1006, scale: 0.33, angle: 77.349, depth: 3 },
            hearts_05: { x: 161, y: 1000, scale: 0.33, angle: 65.89, depth: 3 },
            hearts_06: { x: 164, y: 993, scale: 0.33, angle: 57.296, depth: 3 },
            hearts_07: { x: 168, y: 982, scale: 0.33, angle: 51.566, depth: 5 },
            hearts_08: { x: 172, y: 973, scale: 0.33, angle: 42.972, depth: 6 },
            hearts_09: { x: 174, y: 964, scale: 0.33, angle: 34.377, depth: 8 },
            hearts_10: { x: 175, y: 952, scale: 0.33, angle: 28.648, depth: 10 },
            hearts_j: { x: 174, y: 940, scale: 0.33, angle: 22.918, depth: 12 },
            hearts_q: { x: 172, y: 928, scale: 0.33, angle: 20.054, depth: 12 },
            hearts_k: { x: 168, y: 918, scale: 0.33, angle: 14.324, depth: 13 },
            spades_01: { x: 491, y: 816, scale: 0.33, angle: 91.673, depth: 14 },
            spades_02: { x: 612, y: 861, scale: 0.33, angle: 11.459, depth: 3 },
            spades_03: { x: 601, y: 864, scale: 0.33, angle: 20.054, depth: 3 },
            spades_04: { x: 585, y: 867, scale: 0.33, angle: 22.918, depth: 3 },
            spades_05: { x: 577, y: 867, scale: 0.33, angle: 34.377, depth: 3 },
            spades_06: { x: 568, y: 866, scale: 0.33, angle: 48.701, depth: 3 },
            spades_07: { x: 559, y: 866, scale: 0.33, angle: 57.296, depth: 5 },
            spades_08: { x: 547, y: 861, scale: 0.33, angle: 63.025, depth: 6 },
            spades_09: { x: 536, y: 857, scale: 0.33, angle: -111.727, depth: 8 },
            spades_10: { x: 528, y: 851, scale: 0.33, angle: 74.485, depth: 10 },
            spades_j: { x: 520, y: 845, scale: 0.33, angle: -100.268, depth: 12 },
            spades_q: { x: 513, y: 835, scale: 0.33, angle: -97.403, depth: 12 },
            spades_k: { x: 499, y: 825, scale: 0.33, angle: -94.538, depth: 13 },
            minus_icon: { x: 460, y: 1030, scale: 1, depth: 104 },
            plus_icon: { x: 620, y: 1030, scale: 1, depth: 105 },
            progress_bar_background: { x: 540, y: 960, scale: 1, depth: 103 },
            progress_bar_box_01: { x: 860, y: 980, scale: 1, depth: 106 },
            progress_bar_line_01: { x: 540, y: 980, scale: 1, depth: 105 },
            progress_bar_line_02: { x: 540, y: 980, scale: 1, depth: 104 },
            tick_01: { x: 820, y: 1030, scale: 1, depth: 105 },
        };

        this.LAYOUT_LANDSCAPE = {
            card_ace_screen_0_table: { x: 960, y: 540, scale: 1, depth: 2 },
            clock_bg: { x: 174, y: 216, scale: 1.1, depth: 10 },
            diamond: { x: 1074, y: 922, scale: 0.9, depth: 81 },
            icon_01: { x: 0, y: 0, scale: 1, depth: 1 },
            icon_02_1: { x: 196, y: 460, scale: 1, depth: 81 },
            icon_02_2: { x: 888, y: 174, scale: 1, depth: 81 },
            icon_02_3: { x: 1778, y: 460, scale: 1, depth: 81 },
            icon_02_4: { x: 888, y: 922, scale: 1, depth: 81 },
            no_bg_0_big_01: { x: 960, y: 922, scale: 1, depth: 79 },
            no_bg_0_big_02: { x: 960, y: 174, scale: 1, depth: 79 },
            no_bg_01: { x: 170, y: 670, scale: 1, depth: 80 },
            no_bg_02: { x: 170, y: 460, scale: 1, depth: 80 },
            no_bg_03: { x: 1750, y: 670, scale: 1, depth: 80 },
            no_bg_04: { x: 1750, y: 460, scale: 1, depth: 80 },
            robot_user_01: { x: 1748, y: 540, scale: 1, depth: 80 },
            robot_user_02: { x: 960, y: 206, scale: 1, depth: 80 },
            robot_user_03: { x: 170, y: 540, scale: 1, depth: 80 },
            user_02: { x: 960, y: 890, scale: 1, depth: 80 },
            clubs_01: { x: 1704, y: 880, scale: 0.55, depth: 3 },
            clubs_02: { x: 216, y: 880, scale: 0.55, depth: 3 },
            clubs_03: { x: 340, y: 880, scale: 0.55, depth: 3 },
            clubs_04: { x: 464, y: 880, scale: 0.55, depth: 3 },
            clubs_05: { x: 588, y: 880, scale: 0.55, depth: 3 },
            clubs_06: { x: 712, y: 880, scale: 0.55, depth: 3 },
            clubs_07: { x: 836, y: 880, scale: 0.55, depth: 3 },
            clubs_08: { x: 960, y: 880, scale: 0.55, depth: 3 },
            clubs_09: { x: 1084, y: 880, scale: 0.55, depth: 3 },
            clubs_10: { x: 1208, y: 880, scale: 0.55, depth: 3 },
            clubs_j: { x: 1332, y: 880, scale: 0.55, depth: 3 },
            clubs_k: { x: 1580, y: 880, scale: 0.55, depth: 3 },
            clubs_q: { x: 1456, y: 880, scale: 0.55, depth: 3 },
            diamonds_01: { x: 1674, y: 490, scale: 0.55, angle: -11.459, depth: 14 },
            diamonds_02: { x: 1647, y: 609, scale: 0.55, angle: -108.862, depth: 3 },
            diamonds_03: { x: 1632, y: 599, scale: 0.55, angle: -103.132, depth: 3 },
            diamonds_04: { x: 1631, y: 591, scale: 0.55, angle: -94.538, depth: 3 },
            diamonds_05: { x: 1632, y: 582, scale: 0.55, angle: -85.944, depth: 3 },
            diamonds_06: { x: 1632, y: 570, scale: 0.55, angle: -77.349, depth: 3 },
            diamonds_07: { x: 1634, y: 561, scale: 0.55, angle: -68.755, depth: 5 },
            diamonds_08: { x: 1635, y: 550, scale: 0.55, angle: -60.161, depth: 6 },
            diamonds_09: { x: 1636, y: 537, scale: 0.55, angle: -54.431, depth: 8 },
            diamonds_10: { x: 1641, y: 528, scale: 0.55, angle: -45.837, depth: 10 },
            diamonds_j: { x: 1648, y: 520, scale: 0.55, angle: -37.242, depth: 12 },
            diamonds_k: { x: 1665, y: 498, scale: 0.55, angle: -20.054, depth: 13 },
            diamonds_q: { x: 1654, y: 508, scale: 0.55, angle: -28.648, depth: 12 },
            hearts_01: { x: 256, y: 491, scale: 0.55, angle: 8.594, depth: 14 },
            hearts_02: { x: 275, y: 625, scale: 0.55, angle: 94.538, depth: 3 },
            hearts_03: { x: 276, y: 614, scale: 0.55, angle: 85.944, depth: 3 },
            hearts_04: { x: 281, y: 604, scale: 0.55, angle: 77.349, depth: 3 },
            hearts_05: { x: 282, y: 598, scale: 0.55, angle: 65.89, depth: 3 },
            hearts_06: { x: 286, y: 587, scale: 0.55, angle: 57.296, depth: 3 },
            hearts_07: { x: 291, y: 572, scale: 0.55, angle: 51.566, depth: 5 },
            hearts_08: { x: 293, y: 563, scale: 0.55, angle: 42.972, depth: 6 },
            hearts_09: { x: 293, y: 552, scale: 0.55, angle: 34.377, depth: 8 },
            hearts_10: { x: 291, y: 540, scale: 0.55, angle: 28.648, depth: 10 },
            hearts_j: { x: 287, y: 526, scale: 0.55, angle: 22.918, depth: 12 },
            hearts_k: { x: 269, y: 502, scale: 0.55, angle: 14.324, depth: 13 },
            hearts_q: { x: 278, y: 514, scale: 0.55, angle: 20.054, depth: 12 },
            spades_01: { x: 874, y: 267, scale: 0.55, angle: 91.673, depth: 14 },
            spades_02: { x: 1007, y: 319, scale: 0.55, angle: 11.459, depth: 3 },
            spades_03: { x: 993, y: 318, scale: 0.55, angle: 20.054, depth: 3 },
            spades_04: { x: 976, y: 320, scale: 0.55, angle: 22.918, depth: 3 },
            spades_05: { x: 969, y: 319, scale: 0.55, angle: 34.377, depth: 3 },
            spades_06: { x: 949, y: 320, scale: 0.55, angle: 40.107, depth: 3 },
            spades_07: { x: 947, y: 320, scale: 0.55, angle: 57.296, depth: 5 },
            spades_08: { x: 930, y: 316, scale: 0.55, angle: 63.025, depth: 6 },
            spades_09: { x: 920, y: 307, scale: 0.55, angle: -111.727, depth: 8 },
            spades_10: { x: 907, y: 305, scale: 0.55, angle: 74.485, depth: 10 },
            spades_j: { x: 897, y: 296, scale: 0.55, angle: -100.268, depth: 12 },
            spades_k: { x: 878, y: 276, scale: 0.55, angle: -94.538, depth: 13 },
            spades_q: { x: 885, y: 287, scale: 0.55, angle: -97.403, depth: 12 },
            minus_icon: { x: 880, y: 610, scale: 1, depth: 104 },
            plus_icon: { x: 1040, y: 610, scale: 1, depth: 105 },
            progress_bar_background: { x: 960, y: 540, scale: 1, depth: 103 },
            progress_bar_box_01: { x: 1280, y: 560, scale: 1, depth: 106 },
            progress_bar_line_01: { x: 960, y: 560, scale: 1, depth: 105 },
            progress_bar_line_02: { x: 960, y: 560, scale: 1, depth: 104 },
            tick_01: { x: 1240, y: 610, scale: 1, depth: 105 },
        };
    }

    create() {
        this.createGameUI();
        this.onOrientationChange();
        // this.uiEditor = new UIEditor(this, {
        //     enabled: true,
        //     keys: this.getEditorKeys(),
        //     gridSize: 10,
        //     fileName: 'game.js'
        // });
    }

    getEditorKeys() {
        return [
            // 'card_ace_screen_0_table',
            // 'card_ace_screen_01_bg',
            // 'card_logo',
            // 'clock_bg',
            // 'diamond',
            // 'icon_02_1',
            // 'icon_02_2',
            // 'icon_02_3',
            // 'icon_02_4',
            // 'no_bg_0_big_01',
            // 'no_bg_0_big_02',
            // 'no_bg_01',
            // 'no_bg_02',
            // 'no_bg_03',
            // 'no_bg_04',
            // 'robot_user_01',
            // 'robot_user_02',
            // 'robot_user_03',
            // 'user_02',
            // 'clubs_01',
            // 'clubs_02',
            // 'clubs_03',
            // 'clubs_04',
            // 'clubs_05',
            // 'clubs_06',
            // 'clubs_07',
            // 'clubs_08',
            // 'clubs_09',
            // 'clubs_10',
            // 'clubs_j',
            // 'clubs_k',
            // 'clubs_q',
            // 'diamonds_01',
            // 'diamonds_02',
            // 'diamonds_03',
            // 'diamonds_04',
            // 'diamonds_05',
            // 'diamonds_06',
            // 'diamonds_07',
            // 'diamonds_08',
            // 'diamonds_09',
            // 'diamonds_10',
            // 'diamonds_j',
            // 'diamonds_k',
            // 'diamonds_q',
            // 'hearts_01',
            // 'hearts_02',
            // 'hearts_03',
            // 'hearts_04',
            // 'hearts_05',
            // 'hearts_06',
            // 'hearts_07',
            // 'hearts_08',
            // 'hearts_09',
            // 'hearts_10',
            // 'hearts_j',
            // 'hearts_k',
            // 'hearts_q',
            // 'spades_01',
            // 'spades_02',
            // 'spades_03',
            // 'spades_04',
            // 'spades_05',
            // 'spades_06',
            // 'spades_07',
            // 'spades_08',
            // 'spades_09',
            // 'spades_10',
            // 'spades_j',
            // 'spades_k',
            // 'spades_q',
            // 'minus_icon',
            // 'plus_icon',
            // 'progress_bar_background',
            // 'progress_bar_box_01',
            // 'progress_bar_line_01',
            // 'progress_bar_line_02',
            // 'tick_01',
        ];
    }

    createGameUI() {
        this.card_ace_screen_0_table = this.add.image(0, 0, 'card_ace_screen_0_table').setOrigin(0.5);
        this.card_ace_screen_01_bg = this.add.image(0, 0, 'card_ace_screen_01_bg').setOrigin(0.5);

        this.clock_bg = this.add.image(0, 0, 'clock_bg').setOrigin(0.5);

        this.diamond = this.add.image(0, 0, 'diamond').setOrigin(0.5);
        this.icon_02_1 = this.add.image(0, 0, 'icon_02').setOrigin(0.5);
        this.icon_02_2 = this.add.image(0, 0, 'icon_02').setOrigin(0.5);
        this.icon_02_3 = this.add.image(0, 0, 'icon_02').setOrigin(0.5);
        this.icon_02_4 = this.add.image(0, 0, 'icon_02').setOrigin(0.5);

        this.no_bg_0_big_01 = this.add.image(0, 0, 'no_bg_0_big_01').setOrigin(0.5);
        this.no_bg_0_big_02 = this.add.image(0, 0, 'no_bg_0_big_01').setOrigin(0.5);

        this.no_bg_01 = this.add.image(0, 0, 'no_bg_01').setOrigin(0.5);
        this.no_bg_02 = this.add.image(0, 0, 'no_bg_01').setOrigin(0.5);
        this.no_bg_03 = this.add.image(0, 0, 'no_bg_01').setOrigin(0.5);
        this.no_bg_04 = this.add.image(0, 0, 'no_bg_01').setOrigin(0.5);

        this.robot_user_01 = this.add.image(0, 0, 'robot_user_01').setOrigin(0.5);
        this.robot_user_02 = this.add.image(0, 0, 'robot_user_01').setOrigin(0.5);
        this.robot_user_03 = this.add.image(0, 0, 'robot_user_01').setOrigin(0.5);

        this.user_02 = this.add.image(0, 0, 'user_02').setOrigin(0.5);

        this.clubs_01 = this.add.image(0, 0, 'clubs_01').setOrigin(0.5);
        this.clubs_02 = this.add.image(0, 0, 'clubs_02').setOrigin(0.5);
        this.clubs_03 = this.add.image(0, 0, 'clubs_03').setOrigin(0.5);
        this.clubs_04 = this.add.image(0, 0, 'clubs_04').setOrigin(0.5);
        this.clubs_05 = this.add.image(0, 0, 'clubs_05').setOrigin(0.5);
        this.clubs_06 = this.add.image(0, 0, 'clubs_06').setOrigin(0.5);
        this.clubs_07 = this.add.image(0, 0, 'clubs_07').setOrigin(0.5);
        this.clubs_08 = this.add.image(0, 0, 'clubs_08').setOrigin(0.5);
        this.clubs_09 = this.add.image(0, 0, 'clubs_09').setOrigin(0.5);
        this.clubs_10 = this.add.image(0, 0, 'clubs_10').setOrigin(0.5);
        this.clubs_j = this.add.image(0, 0, 'clubs_j').setOrigin(0.5);
        this.clubs_k = this.add.image(0, 0, 'clubs_k').setOrigin(0.5);
        this.clubs_q = this.add.image(0, 0, 'clubs_q').setOrigin(0.5);

        this.diamonds_01 = this.add.image(0, 0, 'diamonds_01').setOrigin(0.5);
        this.diamonds_02 = this.add.image(0, 0, 'diamonds_02').setOrigin(0.5);
        this.diamonds_03 = this.add.image(0, 0, 'diamonds_03').setOrigin(0.5);
        this.diamonds_04 = this.add.image(0, 0, 'diamonds_04').setOrigin(0.5);
        this.diamonds_05 = this.add.image(0, 0, 'diamonds_05').setOrigin(0.5);
        this.diamonds_06 = this.add.image(0, 0, 'diamonds_06').setOrigin(0.5);
        this.diamonds_07 = this.add.image(0, 0, 'diamonds_07').setOrigin(0.5);
        this.diamonds_08 = this.add.image(0, 0, 'diamonds_08').setOrigin(0.5);
        this.diamonds_09 = this.add.image(0, 0, 'diamonds_09').setOrigin(0.5);
        this.diamonds_10 = this.add.image(0, 0, 'diamonds_10').setOrigin(0.5);
        this.diamonds_j = this.add.image(0, 0, 'diamonds_j').setOrigin(0.5);
        this.diamonds_k = this.add.image(0, 0, 'diamonds_k').setOrigin(0.5);
        this.diamonds_q = this.add.image(0, 0, 'diamonds_q').setOrigin(0.5);

        this.hearts_01 = this.add.image(0, 0, 'hearts_01').setOrigin(0.5);
        this.hearts_02 = this.add.image(0, 0, 'hearts_02').setOrigin(0.5);
        this.hearts_03 = this.add.image(0, 0, 'hearts_03').setOrigin(0.5);
        this.hearts_04 = this.add.image(0, 0, 'hearts_04').setOrigin(0.5);
        this.hearts_05 = this.add.image(0, 0, 'hearts_05').setOrigin(0.5);
        this.hearts_06 = this.add.image(0, 0, 'hearts_06').setOrigin(0.5);
        this.hearts_07 = this.add.image(0, 0, 'hearts_07').setOrigin(0.5);
        this.hearts_08 = this.add.image(0, 0, 'hearts_08').setOrigin(0.5);
        this.hearts_09 = this.add.image(0, 0, 'hearts_09').setOrigin(0.5);
        this.hearts_10 = this.add.image(0, 0, 'hearts_10').setOrigin(0.5);
        this.hearts_j = this.add.image(0, 0, 'hearts_j').setOrigin(0.5);
        this.hearts_k = this.add.image(0, 0, 'hearts_k').setOrigin(0.5);
        this.hearts_q = this.add.image(0, 0, 'hearts_q').setOrigin(0.5);

        this.spades_01 = this.add.image(0, 0, 'spades_01').setOrigin(0.5);
        this.spades_02 = this.add.image(0, 0, 'spades_02').setOrigin(0.5);
        this.spades_03 = this.add.image(0, 0, 'spades_03').setOrigin(0.5);
        this.spades_04 = this.add.image(0, 0, 'spades_04').setOrigin(0.5);
        this.spades_05 = this.add.image(0, 0, 'spades_05').setOrigin(0.5);
        this.spades_06 = this.add.image(0, 0, 'spades_06').setOrigin(0.5);
        this.spades_07 = this.add.image(0, 0, 'spades_07').setOrigin(0.5);
        this.spades_08 = this.add.image(0, 0, 'spades_08').setOrigin(0.5);
        this.spades_09 = this.add.image(0, 0, 'spades_09').setOrigin(0.5);
        this.spades_10 = this.add.image(0, 0, 'spades_10').setOrigin(0.5);
        this.spades_j = this.add.image(0, 0, 'spades_j').setOrigin(0.5);
        this.spades_k = this.add.image(0, 0, 'spades_k').setOrigin(0.5);
        this.spades_q = this.add.image(0, 0, 'spades_q').setOrigin(0.5);

        this.minus_icon = this.add.image(0, 0, 'minus_icon').setOrigin(0.5);
        this.plus_icon = this.add.image(0, 0, 'plus_icon').setOrigin(0.5);
        this.progress_bar_background = this.add.image(0, 0, 'progress_bar_background').setOrigin(0.5);
        this.progress_bar_box_01 = this.add.image(0, 0, 'progress_bar_box_01').setOrigin(0.5);
        this.progress_bar_line_01 = this.add.image(0, 0, 'progress_bar_line_01').setOrigin(0.5);
        this.progress_bar_line_02 = this.add.image(0, 0, 'progress_bar_line_02').setOrigin(0.5);
        this.tick_01 = this.add.image(0, 0, 'tick_01').setOrigin(0.5);


        this.gameUIContainer = this.add.container(0, 0);

        this.gameUIContainer.add([

            this.card_ace_screen_0_table,

            this.clubs_01,
            this.clubs_02,
            this.clubs_03,
            this.clubs_04,
            this.clubs_05,
            this.clubs_06,
            this.clubs_07,
            this.clubs_08,
            this.clubs_09,
            this.clubs_10,
            this.clubs_j,
            this.clubs_q,
            this.clubs_k,

            this.diamonds_02,
            this.diamonds_03,
            this.diamonds_04,
            this.diamonds_05,
            this.diamonds_06,

            this.hearts_02,
            this.hearts_03,
            this.hearts_04,
            this.hearts_05,
            this.hearts_06,

            this.spades_02,
            this.spades_03,
            this.spades_04,
            this.spades_05,
            this.spades_06,

            this.diamonds_07,
            this.hearts_07,
            this.spades_07,

            this.diamonds_08,
            this.hearts_08,
            this.spades_08,

            this.diamonds_09,
            this.hearts_09,

            this.spades_09,

            this.clock_bg,

            this.diamonds_10,
            this.hearts_10,
            this.spades_10,

            this.diamonds_j,
            this.diamonds_q,
            this.hearts_j,
            this.hearts_q,
            this.spades_j,
            this.spades_q,

            this.diamonds_k,
            this.hearts_k,
            this.spades_k,

            this.diamonds_01,
            this.hearts_01,
            this.spades_01,

            this.no_bg_0_big_01,
            this.no_bg_0_big_02,

            this.no_bg_01,
            this.no_bg_02,
            this.no_bg_03,
            this.no_bg_04,

            this.robot_user_01,
            this.robot_user_02,
            this.robot_user_03,
            this.user_02,

            this.diamond,
            this.icon_02_1,
            this.icon_02_2,
            this.icon_02_3,
            this.icon_02_4,

            this.progress_bar_background,
            this.minus_icon,
            this.plus_icon,
            this.progress_bar_line_02,
            this.progress_bar_line_01,
            this.tick_01,
            this.progress_bar_box_01,

        ]);

        this.card_logo = this.add.image(0, 0, 'card_logo').setOrigin(0.5);
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

        const gameUIScale = Math.min(scaleX, scaleY);
        this.gameUIContainer.setPosition(centerX, centerY).setScale(gameUIScale);

        // Dynamic screen-dependent positions
        const safePadding = 30 * gameUIScale;

        // Logo (Top Right)
        const cardLogoScale = gameUIScale * 0.4;
        this.card_logo.setScale(cardLogoScale);
        this.card_logo.setPosition(gameW - safePadding - (this.card_logo.width * cardLogoScale) / 2, safePadding + (this.card_logo.height * cardLogoScale) / 2);

        for (const key in layout) {
            if (this[key] && layout.hasOwnProperty(key)) {
                const { x, y, scale, angle, depth } = layout[key];
                const posX = x - baseW / 2;
                const posY = y - baseH / 2;
                this[key].setPosition(posX, posY).setScale(scale);
                if (angle !== undefined) this[key].setAngle(angle);
                if (depth !== undefined) this[key].setDepth(depth);
            }
        }
    }
}
