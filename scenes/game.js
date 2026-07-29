class Game extends Phaser.Scene {
    constructor() {
        super('Game');

        this.LAYOUT_PORTRAIT = {
            card_ace_screen_0_table: { x: 540, y: 960, scale: 0.85, angle: 90, depth: 2 },
            clock_bg: { x: 250, y: 330, scale: 0.95, depth: 10 },
            diamond: { x: 354, y: 980, scale: 0.9, depth: 81 },
            icon_02_1: { x: 576, y: 270, scale: 1, depth: 81 },
            icon_02_2: { x: 826, y: 936, scale: 1, depth: 81 },
            icon_02_3: { x: 576, y: 1510, scale: 1, depth: 81 },
            icon_02_4: { x: 168, y: 982, scale: 1, depth: 81 },
            no_bg_0_big_01: { x: 240, y: 980, scale: 1, angle: 90, depth: 79 },
            no_bg_0_big_02: { x: 898, y: 936, scale: 1, angle: 90, depth: 79 },
            no_bg_01: { x: 550, y: 434, scale: 1, depth: 80 },
            no_bg_02: { x: 550, y: 270, scale: 1, depth: 80 },
            no_bg_03: { x: 550, y: 1674, scale: 1, depth: 80 },
            no_bg_04: { x: 550, y: 1510, scale: 1, depth: 80 },
            robot_user_01: { x: 550, y: 1580, scale: 0.8, depth: 80 },
            robot_user_02: { x: 898, y: 960, scale: 0.8, depth: 80 },
            robot_user_03: { x: 550, y: 340, scale: 0.8, depth: 80 },
            user_02: { x: 240, y: 960, scale: 0.8, depth: 80 },
            clubs_01: { x: 240, y: 1381, scale: 0.33, angle: 90, depth: 3 },
            clubs_02: { x: 240, y: 541, scale: 0.33, angle: 90, depth: 3 },
            clubs_03: { x: 240, y: 611, scale: 0.33, angle: 90, depth: 3 },
            clubs_04: { x: 240, y: 681, scale: 0.33, angle: 90, depth: 3 },
            clubs_05: { x: 240, y: 751, scale: 0.33, angle: 90, depth: 3 },
            clubs_06: { x: 240, y: 820, scale: 0.33, angle: 90, depth: 3 },
            clubs_07: { x: 240, y: 890, scale: 0.33, angle: 90, depth: 3 },
            clubs_08: { x: 240, y: 960, scale: 0.33, angle: 90, depth: 3 },
            clubs_09: { x: 240, y: 1030, scale: 0.33, angle: 90, depth: 3 },
            clubs_10: { x: 240, y: 1100, scale: 0.33, angle: 90, depth: 3 },
            clubs_j: { x: 240, y: 1169, scale: 0.33, angle: 90, depth: 3 },
            clubs_q: { x: 240, y: 1239, scale: 0.33, angle: 90, depth: 3 },
            clubs_k: { x: 240, y: 1309, scale: 0.33, angle: 90, depth: 3 },
            diamonds_01: { x: 585, y: 1509, scale: 0.33, angle: 78.541, depth: 14 },
            diamonds_02: { x: 491, y: 1525, scale: 0.33, angle: -18.862, depth: 3 },
            diamonds_03: { x: 496, y: 1514, scale: 0.33, angle: -13.132, depth: 3 },
            diamonds_04: { x: 502, y: 1510, scale: 0.33, angle: -4.538, depth: 3 },
            diamonds_05: { x: 510, y: 1509, scale: 0.33, angle: 4.056, depth: 3 },
            diamonds_06: { x: 519, y: 1506, scale: 0.33, angle: 12.651, depth: 3 },
            diamonds_07: { x: 527, y: 1504, scale: 0.33, angle: 21.245, depth: 5 },
            diamonds_08: { x: 536, y: 1503, scale: 0.33, angle: 29.839, depth: 6 },
            diamonds_09: { x: 547, y: 1502, scale: 0.33, angle: 35.569, depth: 8 },
            diamonds_10: { x: 556, y: 1500, scale: 0.33, angle: 44.163, depth: 10 },
            diamonds_j: { x: 566, y: 1499, scale: 0.33, angle: 52.758, depth: 12 },
            diamonds_q: { x: 574, y: 1501, scale: 0.33, angle: 61.352, depth: 12 },
            diamonds_k: { x: 580, y: 1505, scale: 0.33, angle: 69.946, depth: 13 },
            hearts_01: { x: 588, y: 413, scale: 0.33, angle: 98.594, depth: 14 },
            hearts_02: { x: 481, y: 392, scale: 0.33, angle: -175.462, depth: 3 },
            hearts_03: { x: 486, y: 397, scale: 0.33, angle: 175.944, depth: 3 },
            hearts_04: { x: 494, y: 405, scale: 0.33, angle: 167.349, depth: 3 },
            hearts_05: { x: 500, y: 411, scale: 0.33, angle: 155.89, depth: 3 },
            hearts_06: { x: 507, y: 414, scale: 0.33, angle: 147.296, depth: 3 },
            hearts_07: { x: 518, y: 418, scale: 0.33, angle: 141.566, depth: 5 },
            hearts_08: { x: 527, y: 422, scale: 0.33, angle: 132.972, depth: 6 },
            hearts_09: { x: 536, y: 424, scale: 0.33, angle: 124.377, depth: 8 },
            hearts_10: { x: 548, y: 425, scale: 0.33, angle: 118.648, depth: 10 },
            hearts_j: { x: 560, y: 424, scale: 0.33, angle: 112.918, depth: 12 },
            hearts_q: { x: 572, y: 422, scale: 0.33, angle: 110.054, depth: 12 },
            hearts_k: { x: 582, y: 418, scale: 0.33, angle: 104.324, depth: 13 },
            spades_01: { x: 854, y: 911, scale: 0.33, angle: -178.327, depth: 14 },
            spades_02: { x: 809, y: 1032, scale: 0.33, angle: 101.459, depth: 3 },
            spades_03: { x: 806, y: 1021, scale: 0.33, angle: 110.054, depth: 3 },
            spades_04: { x: 803, y: 1005, scale: 0.33, angle: 112.918, depth: 3 },
            spades_05: { x: 803, y: 997, scale: 0.33, angle: 124.377, depth: 3 },
            spades_06: { x: 804, y: 988, scale: 0.33, angle: 138.701, depth: 3 },
            spades_07: { x: 804, y: 979, scale: 0.33, angle: 147.296, depth: 5 },
            spades_08: { x: 809, y: 967, scale: 0.33, angle: 153.025, depth: 6 },
            spades_09: { x: 813, y: 956, scale: 0.33, angle: -21.727, depth: 8 },
            spades_10: { x: 819, y: 948, scale: 0.33, angle: 164.485, depth: 10 },
            spades_j: { x: 825, y: 940, scale: 0.33, angle: -10.268, depth: 12 },
            spades_q: { x: 835, y: 933, scale: 0.33, angle: -7.403, depth: 12 },
            spades_k: { x: 845, y: 919, scale: 0.33, angle: -4.538, depth: 13 },
            minus_icon: { x: 370, y: 880, scale: 1, depth: 104 },
            plus_icon: { x: 370, y: 1040, scale: 1, depth: 105 },
            progress_bar_background: { x: 440, y: 960, scale: 1, angle: 90, depth: 103 },
            progress_bar_box_01: { x: 420, y: 1280, scale: 1, angle: 90, depth: 106 },
            progress_bar_line_01: { x: 420, y: 960, scale: 1, angle: 90, depth: 105 },
            progress_bar_line_02: { x: 420, y: 960, scale: 1, angle: 90, depth: 104 },
            tick_01: { x: 370, y: 1240, scale: 1, depth: 105 },
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
        this.uiEditor = new UIEditor(this, {
            enabled: true,
            keys: this.getEditorKeys(),
            gridSize: 10,
            fileName: 'game.js'
        });
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
                if (angle !== undefined) {
                    this[key].setAngle(angle);
                } else {
                    this[key].setAngle(0);
                }
                if (depth !== undefined) this[key].setDepth(depth);
            }
        }
    }
}
