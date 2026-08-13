class Game extends Phaser.Scene {
    constructor() {
        super('Game');

        this.LAYOUT_PORTRAIT = {
            card_ace_screen_0_table: { x: 540, y: 960, scale: 1, angle: 90, depth: 2 },
            clock_bg: { x: 250, y: 330, scale: 0.95, depth: 10 },
            timer_text: { x: 250, y: 330, scale: 1, depth: 11 },
            diamond: { x: 240, y: 1020, scale: 0.9, depth: 81 },
            icon_02_1: { x: 576, y: 270, scale: 1, depth: 81 },
            icon_02_2: { x: 878, y: 864, scale: 1, depth: 81 },
            icon_02_3: { x: 576, y: 1510, scale: 1, depth: 81 },
            icon_02_4: { x: 240, y: 908, scale: 1, depth: 81 },
            no_bg_0_big_01: { x: 240, y: 980, scale: 1, angle: 90, depth: 79 },
            no_bg_0_big_02: { x: 878, y: 936, scale: 1, angle: 90, depth: 79 },
            no_bg_01: { x: 550, y: 434, scale: 1, depth: 80 },
            no_bg_02: { x: 550, y: 270, scale: 1, depth: 80 },
            no_bg_03: { x: 550, y: 1674, scale: 1, depth: 80 },
            no_bg_04: { x: 550, y: 1510, scale: 1, depth: 80 },
            robot_user_01: { x: 550, y: 1580, scale: 0.8, depth: 80 },
            robot_user_02: { x: 878, y: 960, scale: 0.8, depth: 80 },
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
            spades_01: { x: 834, y: 911, scale: 0.33, angle: -178.327, depth: 14 },
            spades_02: { x: 789, y: 1032, scale: 0.33, angle: 101.459, depth: 3 },
            spades_03: { x: 786, y: 1021, scale: 0.33, angle: 110.054, depth: 3 },
            spades_04: { x: 783, y: 1005, scale: 0.33, angle: 112.918, depth: 3 },
            spades_05: { x: 783, y: 997, scale: 0.33, angle: 124.377, depth: 3 },
            spades_06: { x: 784, y: 988, scale: 0.33, angle: 138.701, depth: 3 },
            spades_07: { x: 784, y: 979, scale: 0.33, angle: 147.296, depth: 5 },
            spades_08: { x: 789, y: 967, scale: 0.33, angle: 153.025, depth: 6 },
            spades_09: { x: 793, y: 956, scale: 0.33, angle: -21.727, depth: 8 },
            spades_10: { x: 799, y: 948, scale: 0.33, angle: 164.485, depth: 10 },
            spades_j: { x: 805, y: 940, scale: 0.33, angle: -10.268, depth: 12 },
            spades_q: { x: 815, y: 933, scale: 0.33, angle: -7.403, depth: 12 },
            spades_k: { x: 825, y: 919, scale: 0.33, angle: -4.538, depth: 13 },
            minus_icon: { x: 360, y: 770, scale: 1, angle: 0, depth: 101 },
            bid_text_value: { x: 360, y: 870, scale: 1.8, angle: 0, depth: 110 },
            plus_icon: { x: 360, y: 970, scale: 1, angle: 0, depth: 102 },
            progress_bar_background: { x: 420, y: 960, scale: 1, angle: 90, depth: 103 },
            progress_bar_box_01: { x: 420, y: 1280, scale: 1, angle: 90, depth: 106 },
            progress_bar_line_01: { x: 420, y: 960, scale: 1, angle: 90, depth: 105 },
            progress_bar_line_02: { x: 420, y: 960, scale: 1, angle: 90, depth: 104 },
            tick_01: { x: 360, y: 1170, scale: 1, angle: 0, depth: 115 },
            name_text_p1: { x: 240, y: 840, scale: 1, angle: 90, depth: 110 },
            bid_text_p1: { x: 240, y: 1080, scale: 1, angle: 90, depth: 110 },
            name_text_p2: { x: 535, y: 1510, scale: 1, angle: 0, depth: 110 },
            bid_text_p2: { x: 545, y: 1674, scale: 1, angle: 0, depth: 110 },
            name_text_p3: { x: 878, y: 816, scale: 1, angle: 90, depth: 110 },
            bid_text_p3: { x: 878, y: 1056, scale: 1, angle: 90, depth: 110 },
            name_text_p4: { x: 535, y: 270, scale: 1, angle: 0, depth: 110 },
            bid_text_p4: { x: 545, y: 434, scale: 1, angle: 0, depth: 110 },
            played_player1: { x: 480, y: 960, scale: 0.55, angle: 90, depth: 200 },
            played_player2: { x: 540, y: 1020, scale: 0.55, angle: 0, depth: 200 },
            played_player3: { x: 600, y: 960, scale: 0.55, angle: 90, depth: 200 },
            played_player4: { x: 540, y: 900, scale: 0.55, angle: 0, depth: 200 },
        };

        this.LAYOUT_LANDSCAPE = {
            card_ace_screen_0_table: { x: 960, y: 540, scale: 1, depth: 2 },
            clock_bg: { x: 174, y: 216, scale: 1.1, depth: 10 },
            timer_text: { x: 174, y: 216, scale: 1, depth: 11 },
            diamond: { x: 1020, y: 922, scale: 0.9, depth: 81 },
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
            clubs_01: { x: 1560, y: 880, scale: 0.45, depth: 3 },
            clubs_02: { x: 360, y: 880, scale: 0.45, depth: 3 },
            clubs_03: { x: 460, y: 880, scale: 0.45, depth: 3 },
            clubs_04: { x: 560, y: 880, scale: 0.45, depth: 3 },
            clubs_05: { x: 660, y: 880, scale: 0.45, depth: 3 },
            clubs_06: { x: 760, y: 880, scale: 0.45, depth: 3 },
            clubs_07: { x: 860, y: 880, scale: 0.45, depth: 3 },
            clubs_08: { x: 960, y: 880, scale: 0.45, depth: 3 },
            clubs_09: { x: 1060, y: 880, scale: 0.45, depth: 3 },
            clubs_10: { x: 1160, y: 880, scale: 0.45, depth: 3 },
            clubs_j: { x: 1260, y: 880, scale: 0.45, depth: 3 },
            clubs_k: { x: 1460, y: 880, scale: 0.45, depth: 3 },
            clubs_q: { x: 1360, y: 880, scale: 0.45, depth: 3 },
            diamonds_01: { x: 1674, y: 490, scale: 0.45, angle: -11.459, depth: 14 },
            diamonds_02: { x: 1647, y: 609, scale: 0.45, angle: -108.862, depth: 3 },
            diamonds_03: { x: 1632, y: 599, scale: 0.45, angle: -103.132, depth: 3 },
            diamonds_04: { x: 1631, y: 591, scale: 0.45, angle: -94.538, depth: 3 },
            diamonds_05: { x: 1632, y: 582, scale: 0.45, angle: -85.944, depth: 3 },
            diamonds_06: { x: 1632, y: 570, scale: 0.45, angle: -77.349, depth: 3 },
            diamonds_07: { x: 1634, y: 561, scale: 0.45, angle: -68.755, depth: 5 },
            diamonds_08: { x: 1635, y: 550, scale: 0.45, angle: -60.161, depth: 6 },
            diamonds_09: { x: 1636, y: 537, scale: 0.45, angle: -54.431, depth: 8 },
            diamonds_10: { x: 1641, y: 528, scale: 0.45, angle: -45.837, depth: 10 },
            diamonds_j: { x: 1648, y: 520, scale: 0.45, angle: -37.242, depth: 12 },
            diamonds_k: { x: 1665, y: 498, scale: 0.45, angle: -20.054, depth: 13 },
            diamonds_q: { x: 1654, y: 508, scale: 0.45, angle: -28.648, depth: 12 },
            hearts_01: { x: 256, y: 491, scale: 0.45, angle: 8.594, depth: 14 },
            hearts_02: { x: 275, y: 625, scale: 0.45, angle: 94.538, depth: 3 },
            hearts_03: { x: 276, y: 614, scale: 0.45, angle: 85.944, depth: 3 },
            hearts_04: { x: 281, y: 604, scale: 0.45, angle: 77.349, depth: 3 },
            hearts_05: { x: 282, y: 598, scale: 0.45, angle: 65.89, depth: 3 },
            hearts_06: { x: 286, y: 587, scale: 0.45, angle: 57.296, depth: 3 },
            hearts_07: { x: 291, y: 572, scale: 0.45, angle: 51.566, depth: 5 },
            hearts_08: { x: 293, y: 563, scale: 0.45, angle: 42.972, depth: 6 },
            hearts_09: { x: 293, y: 552, scale: 0.45, angle: 34.377, depth: 8 },
            hearts_10: { x: 291, y: 540, scale: 0.45, angle: 28.648, depth: 10 },
            hearts_j: { x: 287, y: 526, scale: 0.45, angle: 22.918, depth: 12 },
            hearts_k: { x: 269, y: 502, scale: 0.45, angle: 14.324, depth: 13 },
            hearts_q: { x: 278, y: 514, scale: 0.45, angle: 20.054, depth: 12 },
            spades_01: { x: 874, y: 267, scale: 0.45, angle: 91.673, depth: 14 },
            spades_02: { x: 1007, y: 319, scale: 0.45, angle: 11.459, depth: 3 },
            spades_03: { x: 993, y: 318, scale: 0.45, angle: 20.054, depth: 3 },
            spades_04: { x: 976, y: 320, scale: 0.45, angle: 22.918, depth: 3 },
            spades_05: { x: 969, y: 319, scale: 0.45, angle: 34.377, depth: 3 },
            spades_06: { x: 949, y: 320, scale: 0.45, angle: 40.107, depth: 3 },
            spades_07: { x: 947, y: 320, scale: 0.45, angle: 57.296, depth: 5 },
            spades_08: { x: 930, y: 316, scale: 0.45, angle: 63.025, depth: 6 },
            spades_09: { x: 920, y: 307, scale: 0.45, angle: -111.727, depth: 8 },
            spades_10: { x: 907, y: 305, scale: 0.45, angle: 74.485, depth: 10 },
            spades_j: { x: 897, y: 296, scale: 0.45, angle: -100.268, depth: 12 },
            spades_k: { x: 878, y: 276, scale: 0.45, angle: -94.538, depth: 13 },
            spades_q: { x: 885, y: 287, scale: 0.45, angle: -97.403, depth: 12 },
            minus_icon: { x: 880, y: 610, scale: 1, depth: 104 },
            plus_icon: { x: 1040, y: 610, scale: 1, depth: 105 },
            tick_01: { x: 1200, y: 610, scale: 1, depth: 115 },
            progress_bar_background: { x: 960, y: 540, scale: 1, depth: 103 },
            progress_bar_box_01: { x: 1280, y: 560, scale: 1, depth: 106 },
            progress_bar_line_01: { x: 960, y: 560, scale: 1, depth: 105 },
            progress_bar_line_02: { x: 960, y: 560, scale: 1, depth: 104 },
            bid_text_value: { x: 960, y: 610, scale: 1.8, depth: 105 },
            name_text_p1: { x: 830, y: 922, scale: 1, depth: 110 },
            bid_text_p1: { x: 1090, y: 922, scale: 1, depth: 110 },
            name_text_p2: { x: 1725, y: 460, scale: 1, depth: 110 },
            bid_text_p2: { x: 1750, y: 670, scale: 1, depth: 110 },
            name_text_p3: { x: 830, y: 174, scale: 1, depth: 110 },
            bid_text_p3: { x: 1075, y: 174, scale: 1, depth: 110 },
            name_text_p4: { x: 145, y: 460, scale: 1, depth: 110 },
            bid_text_p4: { x: 170, y: 670, scale: 1, depth: 110 },
            played_player1: { x: 960, y: 680, scale: 0.45, depth: 200 },
            played_player2: { x: 1060, y: 580, scale: 0.45, angle: 90, depth: 200 },
            played_player3: { x: 960, y: 480, scale: 0.45, depth: 200 },
            played_player4: { x: 860, y: 580, scale: 0.45, angle: 90, depth: 200 },
        };
    }

    init(data) {
        this.currentRound = data.currentRound || 1;
        this.scores = data.scores || { player1: 0, player2: 0, player3: 0, player4: 0 };
        this.scoreHistory = data.scoreHistory || { player1: [], player2: [], player3: [], player4: [] };
        this.timeRemaining = data.timeRemaining !== undefined ? data.timeRemaining : (window.CARD_ACE_SETTINGS?.timer?.duration || 60);
    }

    create() {
        this.cameras.main.fadeIn(300, 0, 0, 0);
        
        const settings = window.CARD_ACE_SETTINGS || {};
        const audioSettings = settings.audio || { enabled: true };
        this.sound.mute = !audioSettings.enabled;

        this.gameState = 'DEALING';
        this.currentTrickCards = [];
        this.ledSuit = null;
        this.dealer = Phaser.Utils.Array.GetRandom(['player1', 'player2', 'player3', 'player4']);
        const turnOrder = ['player1', 'player4', 'player3', 'player2'];
        const dealerIdx = turnOrder.indexOf(this.dealer);
        this.currentPlayerTurn = turnOrder[(dealerIdx + 1) % 4];
        this.tricksWon = { player1: 0, player2: 0, player3: 0, player4: 0 };
        this.bids = { player1: 0, player2: 0, player3: 0, player4: 0 };
        this.playerHands = { player1: [], player2: [], player3: [], player4: [] };
        
        this.createGameUI();
        this.onOrientationChange();
        
        this.uiEditor = new UIEditor(this, {
            enabled: !!(window.CARD_ACE_SETTINGS?.editor?.uiEditorEnabled),
            keys: this.getEditorKeys(),
            gridSize: 10,
            fileName: 'game.js'
        });

        // Wait 0.3s for the fade-in to complete before splitting cards
        this.time.delayedCall(300, () => {
            this.dealCards();
        });
    }

    getEditorKeys() {
        return [
            'card_ace_screen_0_table',
            'card_ace_screen_01_bg',
            'card_logo',
            'clock_bg',
            'diamond',
            'icon_02_1',
            'icon_02_2',
            'icon_02_3',
            'icon_02_4',
            'no_bg_0_big_01',
            'no_bg_0_big_02',
            'no_bg_01',
            'no_bg_02',
            'no_bg_03',
            'no_bg_04',
            'robot_user_01',
            'robot_user_02',
            'robot_user_03',
            'user_02',
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

        const settings = window.CARD_ACE_SETTINGS || {};
        const timerSettings = settings.timer || { enabled: true, duration: 60, showText: true };
        
        this.clock_bg = this.add.image(0, 0, 'clock_bg').setOrigin(0.5);
        this.timer_text = this.add.text(0, 0, this.timeRemaining.toString(), { fontSize: '26px', fontFamily: 'Arial', color: '#ffffff', fontStyle: 'bold' }).setOrigin(0.5);
        
        if (!timerSettings.showText) {
            this.clock_bg.setVisible(false);
            this.timer_text.setVisible(false);
        }

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

        const textStyle = { fontSize: '20px', fontFamily: 'Arial', color: '#ffd700', fontStyle: 'bold', align: 'center' };
        this.bid_text_value = this.add.text(0, 0, '1', { ...textStyle, color: '#000000' }).setOrigin(0.5);
        this.name_text_p1 = this.add.text(0, 0, 'You', textStyle).setOrigin(0.5);
        this.bid_text_p1 = this.add.text(0, 0, 'Bid: 0 / 0', textStyle).setOrigin(0.5);
        this.name_text_p2 = this.add.text(0, 0, 'Bot 3', textStyle).setOrigin(0.5);
        this.bid_text_p2 = this.add.text(0, 0, 'Bid: 0 / 0', textStyle).setOrigin(0.5);
        this.name_text_p3 = this.add.text(0, 0, 'Bot 2', textStyle).setOrigin(0.5);
        this.bid_text_p3 = this.add.text(0, 0, 'Bid: 0 / 0', textStyle).setOrigin(0.5);
        this.name_text_p4 = this.add.text(0, 0, 'Bot 1', textStyle).setOrigin(0.5);
        this.bid_text_p4 = this.add.text(0, 0, 'Bid: 0 / 0', textStyle).setOrigin(0.5);

        this.gameUIContainer = this.add.container(0, 0);

        this.biddingUIElements = [];
        this.bidNumberTexts = [];
        for (let i = 1; i <= 13; i++) {
            const numText = this.add.text(0, 0, i.toString(), { fontSize: '28px', fontFamily: 'Arial', color: '#000000', fontStyle: 'bold' }).setOrigin(0.5).setVisible(false).setDepth(110);
            this.bidNumberTexts.push(numText);
            this.biddingUIElements.push(numText);
        }

        this.biddingUIElements.push(
            this.minus_icon, this.plus_icon, this.progress_bar_background, 
            this.progress_bar_box_01, this.progress_bar_line_01, 
            this.progress_bar_line_02, this.tick_01, this.bid_text_value
        );
        this.biddingUIElements.forEach(el => el.setVisible(false));

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
            this.timer_text,

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
            this.progress_bar_box_01,

            this.bid_text_value,
            this.name_text_p1,
            this.bid_text_p1,
            this.name_text_p2,
            this.bid_text_p2,
            this.name_text_p3,
            this.bid_text_p3,
            this.name_text_p4,
            this.bid_text_p4,
            this.tick_01,
            ...this.bidNumberTexts
        ]);

        this.countdownText = this.add.text(0, 150, '3', { 
            fontSize: '120px', 
            fontFamily: 'Arial', 
            color: '#ff0000', 
            fontStyle: 'bold',
            stroke: '#000000',
            strokeThickness: 8
        }).setOrigin(0.5).setVisible(false);
        this.gameUIContainer.add(this.countdownText);

        this.card_logo = this.add.image(0, 0, 'card_logo').setOrigin(0.5);

        this.cardKeys = {
            player1: ['clubs_02', 'clubs_03', 'clubs_04', 'clubs_05', 'clubs_06', 'clubs_07', 'clubs_08', 'clubs_09', 'clubs_10', 'clubs_j', 'clubs_q', 'clubs_k', 'clubs_01'],
            player2: ['diamonds_02', 'diamonds_03', 'diamonds_04', 'diamonds_05', 'diamonds_06', 'diamonds_07', 'diamonds_08', 'diamonds_09', 'diamonds_10', 'diamonds_j', 'diamonds_q', 'diamonds_k', 'diamonds_01'],
            player3: ['hearts_02', 'hearts_03', 'hearts_04', 'hearts_05', 'hearts_06', 'hearts_07', 'hearts_08', 'hearts_09', 'hearts_10', 'hearts_j', 'hearts_q', 'hearts_k', 'hearts_01'],
            player4: ['spades_02', 'spades_03', 'spades_04', 'spades_05', 'spades_06', 'spades_07', 'spades_08', 'spades_09', 'spades_10', 'spades_j', 'spades_q', 'spades_k', 'spades_01']
        };
        this.allCardKeys = [...this.cardKeys.player1, ...this.cardKeys.player2, ...this.cardKeys.player3, ...this.cardKeys.player4];

        // Generate card_back texture
        const refCard = this.textures.get('clubs_01').getSourceImage();
        const cardWidth = refCard.width || 120;
        const cardHeight = refCard.height || 160;

        const graphics = this.make.graphics({ x: 0, y: 0, add: false });
        graphics.fillStyle(0x1a365d, 1);
        graphics.fillRoundedRect(0, 0, cardWidth, cardHeight, 15);
        graphics.lineStyle(6, 0xffffff, 1);
        graphics.strokeRoundedRect(6, 6, cardWidth - 12, cardHeight - 12, 10);
        graphics.generateTexture('card_back', cardWidth, cardHeight);
    }

    calculateRoundScores() {
        ['player1', 'player2', 'player3', 'player4'].forEach(playerKey => {
            const bid = this.bids[playerKey];
            const won = this.tricksWon[playerKey];
            let roundScore = 0;
            
            if (won < bid) {
                roundScore = -bid; // Busted
            } else {
                roundScore = bid + (won - bid) * 0.1; // Success
            }
            
            this.scores[playerKey] += roundScore;
            this.scoreHistory[playerKey].push(roundScore);
        });
    }

    showScoreboard() {
        this.gameState = 'SCOREBOARD';
        
        const sbContainer = this.add.container(0, 0);
        this.gameUIContainer.add(sbContainer);
        
        // Progress bar background as scoreboard panel
        // Scaling X to 1.6 and Y to 2.8 so it is tall enough to fit the title and totals
        const panel = this.add.image(0, 0, 'progress_bar_background').setScale(1.6, 2.8).setDepth(300);
        sbContainer.add(panel);
        
        const textStyle = { fontSize: '42px', fontFamily: 'Arial', color: '#ffffff', fontStyle: 'bold' };
        
        const totalRounds = window.CARD_ACE_SETTINGS?.gameplay?.totalRounds || 1;
        const isGameOver = this.currentRound >= totalRounds;
        const titleText = isGameOver ? 'Game Over' : `Round ${this.currentRound} of ${totalRounds}`;
        
        const title = this.add.text(0, -170, titleText, { fontSize: '56px', fontFamily: 'Arial', color: '#000000', fontStyle: 'bold' }).setOrigin(0.5).setDepth(301);
        sbContainer.add(title);
        
        let maxScore = -Infinity;
        let winners = [];
        if (isGameOver) {
            ['player1', 'player2', 'player3', 'player4'].forEach(p => {
                if (this.scores[p] > maxScore) {
                    maxScore = this.scores[p];
                    winners = [p];
                } else if (this.scores[p] === maxScore) {
                    winners.push(p);
                }
            });
        }
        
        const players = [
            { key: 'player1', name: 'You', x: -300 },
            { key: 'player4', name: 'Bot 1', x: -100 },
            { key: 'player3', name: 'Bot 2', x: 100 },
            { key: 'player2', name: 'Bot 3', x: 300 }
        ];
        
        const startY = -40;
        const rowHeight = 60;
        
        players.forEach(p => {
            // Name at the top
            const nameText = this.add.text(p.x, -100, p.name, { ...textStyle, color: '#000000' }).setOrigin(0.5).setDepth(301);
            sbContainer.add(nameText);
            
            // Loop through scoreHistory for this player to render rows
            this.scoreHistory[p.key].forEach((score, index) => {
                const scoreY = startY + index * rowHeight;
                const scoreStr = score.toFixed(1);
                
                if (score < 0) {
                    const circle = this.add.circle(p.x, scoreY, 25, 0xff0000).setDepth(301);
                    const scoreText = this.add.text(p.x, scoreY, scoreStr, { ...textStyle, fontSize: '32px' }).setOrigin(0.5).setDepth(302);
                    sbContainer.add([circle, scoreText]);
                } else {
                    const scoreText = this.add.text(p.x, scoreY, `+${scoreStr}`, { ...textStyle, fontSize: '32px', color: '#006400' }).setOrigin(0.5).setDepth(301);
                    sbContainer.add(scoreText);
                }
            });
            
            // Render Total at the bottom
            const totalY = 160;
            const totalScoreText = this.add.text(p.x, totalY, this.scores[p.key].toFixed(1), { ...textStyle, fontSize: '44px', color: '#000000' }).setOrigin(0.5).setDepth(301);
            sbContainer.add(totalScoreText);

            if (isGameOver) {
                const higherScoresCount = ['player1', 'player2', 'player3', 'player4'].filter(other => this.scores[other] > this.scores[p.key]).length;
                const rankNum = higherScoresCount + 1;
                const rankText = rankNum === 1 ? '1st' : rankNum === 2 ? '2nd' : rankNum === 3 ? '3rd' : '4th';
                const rankColor = rankNum === 1 ? '#006400' : '#000000';
                
                const resText = this.add.text(p.x, totalY + 45, rankText, { ...textStyle, fontSize: '32px', color: rankColor }).setOrigin(0.5).setDepth(301);
                sbContainer.add(resText);
            }
        });

        const divider = this.add.rectangle(0, 120, 800, 4, 0xffffff).setDepth(301);
        sbContainer.add(divider);

        // Auto continue after 3 seconds
        this.time.delayedCall(3000, () => {
            const totalRounds = window.CARD_ACE_SETTINGS?.gameplay?.totalRounds || 1;
            if (this.currentRound >= totalRounds) {
                // End Game
                const userWon = winners.includes('player1');
                this.sound.stopAll();
                this.scene.start('End', { didWin: userWon });
            } else {
                // Next Round
                this.scene.start('Game', { 
                    currentRound: this.currentRound + 1, 
                    scores: this.scores,
                    scoreHistory: this.scoreHistory,
                    timeRemaining: this.timeRemaining
                });
            }
        });
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
                
                if (this.gameState === 'PLAYING') {
                    const isCardInHand = ['player1', 'player2', 'player3', 'player4'].some(p => this.playerHands[p].includes(this[key]));
                    const isCardInTrick = this.currentTrickCards.some(play => play.card === this[key]);
                    
                    if (isCardInHand || isCardInTrick) {
                        this[key].setScale(scale);
                        if (depth !== undefined) this[key].setDepth(depth);
                        continue;
                    }
                }
                
                if (this.isDealing && this.allCardKeys && this.allCardKeys.includes(key)) {
                    // Do not snap position/angle while dealing to prevent jitter
                    this[key].setScale(scale);
                    if (depth !== undefined) this[key].setDepth(depth);
                } else {
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
        
        if (this.tickZone && this.tick_01) {
            this.tickZone.setPosition(this.tick_01.x, this.tick_01.y);
        }

        if (this.gameState === 'PLAYING') {
            ['player1', 'player2', 'player3', 'player4'].forEach(p => this.repositionHand(p, false));
            this.repositionTrick(false);
        } else if (this.gameState === 'BIDDING') {
            this.updateSliderVisually();
        }
    }

    dealCards() {
        this.isDealing = true;

        // Store original textures and gather deck
        const deck = [];
        this.allCardKeys.forEach(key => {
            if (this[key]) {
                this[key].originalTexture = key;
                deck.push(this[key]);
            }
        });

        // Sort each player's 13-card hand so suits are grouped together
        const suitOrder = { 'clubs': 1, 'diamonds': 2, 'hearts': 3, 'spades': 4 };
        const rankOrder = { '02': 2, '03': 3, '04': 4, '05': 5, '06': 6, '07': 7, '08': 8, '09': 9, '10': 10, 'j': 11, 'q': 12, 'k': 13, '01': 14 };

        const sortCards = (a, b) => {
            const [suitA, rankA] = a.originalTexture.split('_');
            const [suitB, rankB] = b.originalTexture.split('_');
            if (suitOrder[suitA] !== suitOrder[suitB]) {
                return suitOrder[suitA] - suitOrder[suitB];
            }
            return rankOrder[rankA] - rankOrder[rankB];
        };

        let p1Hand, p2Hand, p3Hand, p4Hand;
        let isValidDeal = false;

        while (!isValidDeal) {
            // Shuffle the deck
            Phaser.Utils.Array.Shuffle(deck);

            p1Hand = deck.slice(0, 13).sort(sortCards);
            p2Hand = deck.slice(13, 26).sort(sortCards);
            p3Hand = deck.slice(26, 39).sort(sortCards);
            p4Hand = deck.slice(39, 52).sort(sortCards);

            // In Callbreak, it is a misdeal if any player receives 0 Spades.
            const hasSpades = (hand) => hand.some(card => card.originalTexture.split('_')[0] === 'spades');
            
            if (hasSpades(p1Hand) && hasSpades(p2Hand) && hasSpades(p3Hand) && hasSpades(p4Hand)) {
                isValidDeal = true;
            } else {
                console.log("Misdeal detected (player with no spades). Reshuffling...");
            }
        }
        
        const sortedDeck = [...p1Hand, ...p2Hand, ...p3Hand, ...p4Hand];

        const isLandscape = this.scale.width > this.scale.height;
        const layout = isLandscape ? this.LAYOUT_LANDSCAPE : this.LAYOUT_PORTRAIT;
        const baseW = isLandscape ? 1920 : 1080;
        const baseH = isLandscape ? 1080 : 1920;
        
        const dealerAvatarKey = this.dealer === 'player1' ? 'user_02'
                              : this.dealer === 'player2' ? 'robot_user_01'
                              : this.dealer === 'player3' ? 'robot_user_02'
                              : 'robot_user_03';
        
        const dealerAvatar = layout[dealerAvatarKey];
        const startX = dealerAvatar ? dealerAvatar.x - baseW / 2 : 0;
        const startY = dealerAvatar ? dealerAvatar.y - baseH / 2 : 0;

        let idx = 0;
        this.playerHands = { player1: [], player2: [], player3: [], player4: [] };
        
        this.allCardKeys.forEach(key => {
            const card = sortedDeck[idx];
            this[key] = card; // Remap the layout slot to the new random card
            
            // If the slot key is for user (player 1, clubs), face up. Otherwise bots face down.
            if (key.startsWith('clubs')) {
                card.setTexture(card.originalTexture);
                card.playerKey = 'player1';
                this.playerHands.player1.push(card);
            } else {
                card.setTexture('card_back');
                if (key.startsWith('diamonds')) { card.playerKey = 'player2'; this.playerHands.player2.push(card); }
                else if (key.startsWith('spades')) { card.playerKey = 'player3'; this.playerHands.player3.push(card); }
                else if (key.startsWith('hearts')) { card.playerKey = 'player4'; this.playerHands.player4.push(card); }
            }
            
            // Start from dealer
            card.setPosition(startX, startY);
            card.setAlpha(0);
            
            idx++;
        });

        const dealDelay = 80; // ms between each card dealt
        let currentDelay = 0;
        
        const turnOrder = ['player1', 'player4', 'player3', 'player2'];
        const dealerIdx = turnOrder.indexOf(this.dealer);
        const dealOrder = [
            turnOrder[(dealerIdx + 1) % 4],
            turnOrder[(dealerIdx + 2) % 4],
            turnOrder[(dealerIdx + 3) % 4],
            turnOrder[(dealerIdx + 4) % 4]
        ];

        this.dealSfx = this.sound.add('sfx_deal', { loop: true });
        this.dealSfx.play();

        for (let round = 0; round < 13; round++) {
            dealOrder.forEach(playerKey => {
                const cardKey = this.cardKeys[playerKey][round];
                const card = this[cardKey];
                
                if (card) {
                    const layoutData = layout[cardKey];
                    if (layoutData) {
                        this.time.delayedCall(currentDelay, () => {
                            const isLandscapeNow = this.scale.width > this.scale.height;
                            const layoutNow = isLandscapeNow ? this.LAYOUT_LANDSCAPE : this.LAYOUT_PORTRAIT;
                            const baseWNow = isLandscapeNow ? 1920 : 1080;
                            const baseHNow = isLandscapeNow ? 1080 : 1920;
                            const dataNow = layoutNow[cardKey];
                            
                            const targetX = dataNow.x - baseWNow / 2;
                            const targetY = dataNow.y - baseHNow / 2;
                            const targetAngle = dataNow.angle !== undefined ? dataNow.angle : 0;

                            card.setAlpha(1);
                            card.setAngle(0); // Start unrotated
                            
                            this.tweens.add({
                                targets: card,
                                x: targetX,
                                y: targetY,
                                angle: targetAngle,
                                duration: 400,
                                ease: 'Power2'
                            });
                        });
                        
                        currentDelay += dealDelay;
                    }
                }
            });
        }

        // After all dealing is done, reset flag
        this.time.delayedCall(currentDelay + 200, () => {
            if (this.dealSfx) {
                this.dealSfx.stop();
                this.dealSfx = null;
            }
            this.isDealing = false;
            // Force a reflow to ensure everything is perfectly aligned
            this.reflowForResize();
            this.startBiddingPhase();
        });

        // Start BGM 0.5s after dealing animation finishes
        this.time.delayedCall(currentDelay + 200 + 500, () => {
            if (!this.bgm) {
                this.bgm = this.sound.add('sfx_bgm', { loop: true, volume: 0.5 });
                this.bgm.play();
            }
        });
    }

    updateSliderVisually() {
        const isLandscape = this.scale.width > this.scale.height;
        const line = this.progress_bar_line_01;
        const padding = 20;

        if (isLandscape) {
            const minX = line.x - line.displayWidth / 2 + padding;
            const maxX = line.x + line.displayWidth / 2 - padding;
            
            // Snap thumb to position
            const percentage = (this.currentBid - 1) / 12;
            this.progress_bar_box_01.setX(minX + percentage * (maxX - minX));
            this.progress_bar_box_01.setY(line.y);

            // Update crop for the orange line fill
            const cropWidth = padding + percentage * (maxX - minX);
            const texH = line.texture.getSourceImage().height;
            line.setCrop(0, 0, cropWidth, texH);

            // Position numbers above the line
            this.bidNumberTexts.forEach((text, index) => {
                text.setPosition(minX + (index / 12) * (maxX - minX), line.y - 60);
                text.setAngle(0);
            });
        } else {
            const minY = line.y - line.displayWidth / 2 + padding;
            const maxY = line.y + line.displayWidth / 2 - padding;
            
            const percentage = (this.currentBid - 1) / 12;
            this.progress_bar_box_01.setY(minY + percentage * (maxY - minY));
            this.progress_bar_box_01.setX(line.x);

            const cropLength = padding + percentage * (maxY - minY);
            const texH = line.texture.getSourceImage().height;
            line.setCrop(0, 0, cropLength, texH);

            this.bidNumberTexts.forEach((text, index) => {
                text.setPosition(line.x + 60, minY + (index / 12) * (maxY - minY));
                text.setAngle(0);
            });
        }
    }

    calculateSuggestedBid(hand) {
        let suggestedBid = 0;
        let spadesCount = 0;

        hand.forEach(card => {
            const parts = card.originalTexture.split('_');
            const suit = parts[0];
            const rank = parts[1];

            if (suit === 'spades') {
                spadesCount++;
            }

            if (rank === '01') { // Ace
                suggestedBid += 1;
            } else if (rank === 'k') { // King
                suggestedBid += 0.5;
            } else if (rank === 'q') { // Queen
                suggestedBid += 0.25;
            }
        });

        // Extra points for having many spades (trumps)
        if (spadesCount >= 4) {
            suggestedBid += (spadesCount - 3);
        }

        let finalBid = Math.round(suggestedBid);
        if (finalBid < 1) finalBid = 1;
        if (finalBid > 13) finalBid = 13;

        return finalBid;
    }

    startBiddingPhase() {
        this.gameState = 'BIDDING';
        this.bids = {};
        this.bidsReceived = 0;
        
        const turnOrder = ['player1', 'player4', 'player3', 'player2'];
        const dealerIdx = turnOrder.indexOf(this.dealer);
        this.currentBiddingPlayerTurnIndex = (dealerIdx + 1) % 4;
        
        // Hide all bidding UI initially
        this.biddingUIElements.forEach(el => el.setVisible(false));
        
        this.processBiddingTurn();
    }

    processBiddingTurn() {
        const turnOrder = ['player1', 'player4', 'player3', 'player2'];
        const playerKey = turnOrder[this.currentBiddingPlayerTurnIndex];

        if (playerKey === 'player1') {
            this.currentBid = this.calculateSuggestedBid(this.playerHands.player1);
            this.bid_text_value.setText(this.currentBid);
            this.biddingUIElements.forEach(el => el.setVisible(true));
            this.setupUserBiddingInteractivity();
            this.updateSliderVisually();
        } else {
            // Hide all bidding UI for bots
            this.biddingUIElements.forEach(el => el.setVisible(false));
            
            this.time.delayedCall(800, () => {
                const botBid = this.calculateSuggestedBid(this.playerHands[playerKey]);
                this.time.delayedCall(800, () => {
                    this.submitSingleBid(playerKey, botBid);
                });
            });
        }
    }

    setupUserBiddingInteractivity() {
        // Setup click on background to set bid
        if (!this.progress_bar_background.input) {
            this.progress_bar_background.setInteractive();
            this.progress_bar_background.on('pointerdown', (pointer) => {
                if (this.gameState !== 'BIDDING') return;
                const isLandscape = this.scale.width > this.scale.height;
                const line = this.progress_bar_line_01;
                const padding = 20;
                
                const containerPoint = this.gameUIContainer.pointToContainer({ x: pointer.x, y: pointer.y });
                
                if (isLandscape) {
                    const minX = line.x - line.displayWidth / 2 + padding;
                    const maxX = line.x + line.displayWidth / 2 - padding;
                    let newX = Phaser.Math.Clamp(containerPoint.x, minX, maxX);
                    let percentage = (newX - minX) / (maxX - minX);
                    this.currentBid = Math.round(1 + percentage * 12);
                } else {
                    const minY = line.y - line.displayWidth / 2 + padding;
                    const maxY = line.y + line.displayWidth / 2 - padding;
                    let newY = Phaser.Math.Clamp(containerPoint.y, minY, maxY);
                    let percentage = (newY - minY) / (maxY - minY);
                    this.currentBid = Math.round(1 + percentage * 12);
                }
                
                this.bid_text_value.setText(this.currentBid);
                this.updateSliderVisually();
            });
        } else {
            this.progress_bar_background.setInteractive();
        }

        // Setup slider thumb dragging
        if (!this.progress_bar_box_01.input) {
            this.progress_bar_box_01.setInteractive({ draggable: true });
            this.progress_bar_box_01.on('drag', (pointer, dragX, dragY) => {
                if (this.gameState !== 'BIDDING') return;
                const isLandscape = this.scale.width > this.scale.height;
                const line = this.progress_bar_line_01;
                const padding = 20;

                if (isLandscape) {
                    const minX = line.x - line.displayWidth / 2 + padding;
                    const maxX = line.x + line.displayWidth / 2 - padding;
                    let newX = Phaser.Math.Clamp(dragX, minX, maxX);
                    let percentage = (newX - minX) / (maxX - minX);
                    this.currentBid = Math.round(1 + percentage * 12);
                } else {
                    const minY = line.y - line.displayWidth / 2 + padding;
                    const maxY = line.y + line.displayWidth / 2 - padding;
                    let newY = Phaser.Math.Clamp(dragY, minY, maxY);
                    let percentage = (newY - minY) / (maxY - minY);
                    this.currentBid = Math.round(1 + percentage * 12);
                }

                this.bid_text_value.setText(this.currentBid);
                this.updateSliderVisually();
            });
        } else {
            this.progress_bar_box_01.setInteractive({ draggable: true });
        }

        // Make numbers interactive
        this.bidNumberTexts.forEach((text, index) => {
            if (!text.input) {
                text.setInteractive({ useHandCursor: true });
                text.on('pointerdown', () => {
                    if (this.gameState !== 'BIDDING') return;
                    this.currentBid = index + 1;
                    this.bid_text_value.setText(this.currentBid);
                    this.updateSliderVisually();
                });
            } else {
                text.setInteractive({ useHandCursor: true });
            }
        });

        if (!this.minus_icon.input) {
            this.minus_icon.setInteractive({ useHandCursor: true });
            this.minus_icon.on('pointerdown', () => {
                if (this.gameState !== 'BIDDING') return;
                this.currentBid = Math.max(1, this.currentBid - 1);
                this.bid_text_value.setText(this.currentBid);
                this.updateSliderVisually();
            });
        } else {
            this.minus_icon.setInteractive({ useHandCursor: true });
        }

        if (!this.plus_icon.input) {
            this.plus_icon.setInteractive({ useHandCursor: true });
            this.plus_icon.on('pointerdown', () => {
                if (this.gameState !== 'BIDDING') return;
                this.currentBid = Math.min(13, this.currentBid + 1);
                this.bid_text_value.setText(this.currentBid);
                this.updateSliderVisually();
            });
        } else {
            this.plus_icon.setInteractive({ useHandCursor: true });
        }

        if (!this.tick_01.input) {
            this.tick_01.setInteractive({ useHandCursor: true });
            this.tick_01.on('pointerdown', () => {
                if (this.gameState !== 'BIDDING') return;
                this.submitSingleBid('player1', this.currentBid);
            });
        } else {
            this.tick_01.setInteractive({ useHandCursor: true });
        }
    }

    submitSingleBid(playerKey, bidAmount) {
        // Hide bidding UI
        this.biddingUIElements.forEach(el => el.setVisible(false));
        
        // Remove interactivity for user elements
        this.minus_icon.disableInteractive();
        this.plus_icon.disableInteractive();
        this.tick_01.disableInteractive();
        this.progress_bar_background.disableInteractive();
        this.progress_bar_box_01.disableInteractive();
        this.bidNumberTexts.forEach(text => text.disableInteractive());

        this.bids[playerKey] = bidAmount;
        
        // Display bid next to avatar
        if (playerKey === 'player1') {
            this.name_text_p1.setText('You');
            this.bid_text_p1.setText(`Bid: ${bidAmount} / 0`);
        } else if (playerKey === 'player2') {
            this.name_text_p2.setText('Bot 3');
            this.bid_text_p2.setText(`Bid: ${bidAmount} / 0`);
        } else if (playerKey === 'player3') {
            this.name_text_p3.setText('Bot 2');
            this.bid_text_p3.setText(`Bid: ${bidAmount} / 0`);
        } else if (playerKey === 'player4') {
            this.name_text_p4.setText('Bot 1');
            this.bid_text_p4.setText(`Bid: ${bidAmount} / 0`);
        }
        
        this.bidsReceived++;
        if (this.bidsReceived === 4) {
            this.gameState = 'PLAYING';
            this.startPlayPhase();
        } else {
            this.currentBiddingPlayerTurnIndex = (this.currentBiddingPlayerTurnIndex + 1) % 4;
            // Short delay before next player's bid
            this.time.delayedCall(400, () => {
                this.processBiddingTurn();
            });
        }
    }

    startPlayPhase() {
        if (this.gameTimer) this.gameTimer.remove();
        
        const settings = window.CARD_ACE_SETTINGS || {};
        const timerSettings = settings.timer || { enabled: true };
        
        if (timerSettings.enabled) {
            this.gameTimer = this.time.addEvent({
                delay: 1000,
                callback: () => {
                    if (this.timeRemaining > 0 && this.gameState !== 'SCOREBOARD' && this.gameState !== 'ROUND_END') {
                        this.timeRemaining--;
                        this.timer_text.setText(this.timeRemaining);
                        if (this.timeRemaining === 0) {
                            this.scene.start('End', { didWin: false });
                        }
                    }
                },
                loop: true
            });
        }

        // Make user cards interactive
        this.playerHands.player1.forEach(card => {
            card.setInteractive().on('pointerdown', () => {
                if (this.currentPlayerTurn === 'player1' && this.gameState === 'PLAYING' && !this.isProcessingPlay) {
                    if (this.isValidPlay(card, this.playerHands.player1)) {
                        this.isProcessingPlay = true; // Prevent double play
                        this.playCard('player1', card);
                    } else {
                        // Shake card to indicate invalid play
                        this.tweens.add({
                            targets: card,
                            x: card.x + 10,
                            yoyo: true,
                            duration: 50,
                            repeat: 3
                        });
                    }
                }
            });
        });

        this.updateUserCardTints();

        this.processTurn();
    }
    
    repositionHand(playerKey, animated = true) {
        const hand = this.playerHands[playerKey];
        if (!hand || hand.length === 0) return;

        const isLandscape = this.scale.width > this.scale.height;
        const layout = isLandscape ? this.LAYOUT_LANDSCAPE : this.LAYOUT_PORTRAIT;
        const baseW = isLandscape ? 1920 : 1080;
        const baseH = isLandscape ? 1080 : 1920;
        
        const layoutPrefix = playerKey === 'player1' ? 'clubs' : playerKey === 'player2' ? 'diamonds' : playerKey === 'player3' ? 'spades' : 'hearts';
        
        // In the layout, _02 is physically the first slot and _01 (Ace) is the last slot
        const firstSlot = layout[`${layoutPrefix}_02`];
        const lastSlot = layout[`${layoutPrefix}_01`];
        if (!firstSlot || !lastSlot) return;

        const centerX = (firstSlot.x + lastSlot.x) / 2 - baseW / 2;
        const centerY = (firstSlot.y + lastSlot.y) / 2 - baseH / 2;
        
        const totalCards = hand.length;
        const spreadX = (lastSlot.x - firstSlot.x) / 12;
        const spreadY = (lastSlot.y - firstSlot.y) / 12;
        
        const startX = centerX - ((totalCards - 1) / 2) * spreadX;
        const startY = centerY - ((totalCards - 1) / 2) * spreadY;
        
        const angle1 = firstSlot.angle || 0;
        const angle2 = lastSlot.angle || 0;
        const spreadAngle = (angle2 - angle1) / 12;
        
        hand.forEach((card, index) => {
            const rawX = startX + index * spreadX;
            const rawY = startY + index * spreadY;
            const rawAngle = angle1 + ((13 - totalCards) / 2 + index) * spreadAngle;
            
            if (animated) {
                this.tweens.add({ targets: card, x: rawX, y: rawY, angle: rawAngle, duration: 300, ease: 'Power2' });
            } else {
                card.setPosition(rawX, rawY);
                card.setAngle(rawAngle);
            }
        });
    }

    repositionTrick(animated = false) {
        if (!this.currentTrickCards) return;
        const isLandscape = this.scale.width > this.scale.height;
        const layout = isLandscape ? this.LAYOUT_LANDSCAPE : this.LAYOUT_PORTRAIT;
        const baseW = isLandscape ? 1920 : 1080;
        const baseH = isLandscape ? 1080 : 1920;
        
        this.currentTrickCards.forEach(play => {
            const targetLayout = layout[`played_${play.player}`];
            if (!targetLayout) return;
            const targetX = targetLayout.x - baseW / 2;
            const targetY = targetLayout.y - baseH / 2;
            
            if (animated) {
                this.tweens.add({ targets: play.card, x: targetX, y: targetY, angle: targetLayout.angle || 0, duration: 300, ease: 'Power2' });
            } else {
                play.card.setPosition(targetX, targetY);
                play.card.setAngle(targetLayout.angle || 0);
            }
        });
    }

    isValidPlay(card, hand) {
        if (!this.ledSuit) return true; // Can lead any card

        const rankValue = { '02': 2, '03': 3, '04': 4, '05': 5, '06': 6, '07': 7, '08': 8, '09': 9, '10': 10, 'j': 11, 'q': 12, 'k': 13, '01': 14 };
        const getRank = (c) => rankValue[c.originalTexture.split('_')[1]];
        const getSuit = (c) => c.originalTexture.split('_')[0];

        // Determine current winning card
        let winningCard = null;
        if (this.currentTrickCards.length > 0) {
            winningCard = this.currentTrickCards[0].card;
            for (let i = 1; i < this.currentTrickCards.length; i++) {
                const playCardObj = this.currentTrickCards[i].card;
                if (getSuit(playCardObj) === 'spades' && getSuit(winningCard) !== 'spades') {
                    winningCard = playCardObj;
                } else if (getSuit(playCardObj) === getSuit(winningCard)) {
                    if (getRank(playCardObj) > getRank(winningCard)) {
                        winningCard = playCardObj;
                    }
                }
            }
        }

        const cardSuit = getSuit(card);
        const hasLedSuit = hand.some(c => getSuit(c) === this.ledSuit);
        const isTrumped = winningCard && getSuit(winningCard) === 'spades' && this.ledSuit !== 'spades';
        const currentHighestLedRank = winningCard && getSuit(winningCard) === this.ledSuit ? getRank(winningCard) : 0;

        if (hasLedSuit) {
            if (cardSuit !== this.ledSuit) return false; // Must follow suit

            // If we have cards of led suit that can beat the current winning card (and it's not trumped), we MUST play one of them
            if (!isTrumped) {
                const canBeat = hand.some(c => getSuit(c) === this.ledSuit && getRank(c) > currentHighestLedRank);
                if (canBeat) {
                    if (getRank(card) <= currentHighestLedRank) return false;
                }
            }
            return true;
        } else {
            // We don't have the led suit
            const hasSpades = hand.some(c => getSuit(c) === 'spades');
            
            if (hasSpades) {
                if (cardSuit !== 'spades') return false; // Must play spade if available
                
                const currentHighestSpadeRank = winningCard && getSuit(winningCard) === 'spades' ? getRank(winningCard) : 0;
                const canBeatSpade = hand.some(c => getSuit(c) === 'spades' && getRank(c) > currentHighestSpadeRank);
                
                if (canBeatSpade) {
                    if (getRank(card) <= currentHighestSpadeRank) return false;
                }
                return true;
            }
            
            return true; // No led suit, no spades -> can play anything
        }
    }

    updateUserCardTints() {
        if (!this.playerHands || !this.playerHands.player1) return;
        this.playerHands.player1.forEach(card => {
            if (this.currentPlayerTurn !== 'player1') {
                card.setTint(0xffffff); // Clear overlay if it's not their turn
            } else {
                if (this.isValidPlay(card, this.playerHands.player1)) {
                    card.setTint(0xffffff);
                } else {
                    card.setTint(0x777777); // Darken invalid cards
                }
            }
        });
    }

    playCard(playerKey, card) {
        this.isProcessingPlay = true; // Lock any other plays while this card is being processed

        if (playerKey === 'player1') {
            this.sound.play('sfx_play_user');
            if (this.userAutoPlayTimer) {
                this.userAutoPlayTimer.remove();
                this.userAutoPlayTimer = null;
            }
            if (this.countdownText) {
                this.countdownText.setVisible(false);
            }
        } else {
            this.sound.play('sfx_play_bot');
        }

        // Remove from hand
        this.playerHands[playerKey] = this.playerHands[playerKey].filter(c => c !== card);
        card.disableInteractive();

        // Dynamically slide remaining cards in hand to fill gap
        this.repositionHand(playerKey, true);

        // Reveal bot cards
        if (playerKey !== 'player1') {
            card.setTexture(card.originalTexture);
        }

        const suit = card.originalTexture.split('_')[0];
        const rank = card.originalTexture.split('_')[1];
        
        if (this.currentTrickCards.length === 0) {
            this.ledSuit = suit;
            this.updateUserCardTints();
        }

        this.currentTrickCards.push({ player: playerKey, card: card, suit: suit, rank: rank });

        // Animate to center
        const isLandscape = this.scale.width > this.scale.height;
        const layout = isLandscape ? this.LAYOUT_LANDSCAPE : this.LAYOUT_PORTRAIT;
        const baseW = isLandscape ? 1920 : 1080;
        const baseH = isLandscape ? 1080 : 1920;
        
        const targetLayout = layout[`played_${playerKey}`];
        if (!targetLayout) return;

        const targetX = targetLayout.x - baseW / 2;
        const targetY = targetLayout.y - baseH / 2;

        this.tweens.add({
            targets: card,
            x: targetX,
            y: targetY,
            angle: targetLayout.angle || 0,
            depth: targetLayout.depth,
            duration: 200,
            ease: 'Power2',
            onComplete: () => {
                if (this.currentTrickCards.length === 4) {
                    this.time.delayedCall(400, () => this.resolveTrick());
                } else {
                    this.nextTurn();
                }
            }
        });
    }

    nextTurn() {
        const order = ['player1', 'player4', 'player3', 'player2'];
        const currentIndex = order.indexOf(this.currentPlayerTurn);
        this.currentPlayerTurn = order[(currentIndex + 1) % 4];
        this.processTurn();
    }

    processTurn() {
        if (this.gameState !== 'PLAYING') return;
        this.isProcessingPlay = false;

        this.updateUserCardTints();

        if (this.userAutoPlayTimer) {
            this.userAutoPlayTimer.remove();
            this.userAutoPlayTimer = null;
        }
        if (this.countdownText) {
            this.countdownText.setVisible(false);
        }

        if (this.currentPlayerTurn !== 'player1') {
            // Add a small delay for bot thinking
            this.time.delayedCall(400, () => this.botPlayCard(this.currentPlayerTurn));
        } else {
            // If the user only has 1 card left, play it automatically fast
            if (this.playerHands.player1.length === 1) {
                this.time.delayedCall(200, () => {
                    if (this.gameState === 'PLAYING' && this.playerHands.player1.length === 1) {
                        this.playCard('player1', this.playerHands.player1[0]);
                    }
                });
            } else {
                let countdownValue = 3;
                if (this.countdownText) {
                    this.countdownText.setText(countdownValue.toString());
                    this.countdownText.setVisible(true);
                }

                // Set a 3-second timer to auto-play an appropriate card if the user takes too long
                this.userAutoPlayTimer = this.time.addEvent({
                    delay: 1000,
                    repeat: 2,
                    callback: () => {
                        countdownValue--;
                        if (countdownValue > 0) {
                            if (this.countdownText) {
                                this.countdownText.setText(countdownValue.toString());
                            }
                        } else {
                            if (this.countdownText) {
                                this.countdownText.setVisible(false);
                            }
                            if (this.gameState === 'PLAYING' && this.currentPlayerTurn === 'player1') {
                                this.botPlayCard('player1');
                            }
                        }
                    }
                });
            }
        }
    }

    botPlayCard(playerKey) {
        if (this.gameState !== 'PLAYING') return;
        const hand = this.playerHands[playerKey];
        if (hand.length === 0) return;

        let validCards = hand.filter(card => this.isValidPlay(card, hand));
        
        // Save bigger cards: sort valid cards by rank ascending
        const rankValue = { '02': 2, '03': 3, '04': 4, '05': 5, '06': 6, '07': 7, '08': 8, '09': 9, '10': 10, 'j': 11, 'q': 12, 'k': 13, '01': 14 };
        validCards.sort((a, b) => {
            const rankA = rankValue[a.originalTexture.split('_')[1]];
            const rankB = rankValue[b.originalTexture.split('_')[1]];
            return rankA - rankB;
        });

        // Default: play the lowest valid card (saves bigger cards)
        let cardToPlay = validCards[0];
        
        // If leading the trick, play the highest card to try to win the turn
        if (this.currentTrickCards.length === 0) {
            cardToPlay = validCards[validCards.length - 1];
        }

        this.playCard(playerKey, cardToPlay);
    }

    resolveTrick() {
        const rankValue = { '02': 2, '03': 3, '04': 4, '05': 5, '06': 6, '07': 7, '08': 8, '09': 9, '10': 10, 'j': 11, 'q': 12, 'k': 13, '01': 14 };
        
        let winningPlay = this.currentTrickCards[0];
        
        for (let i = 1; i < 4; i++) {
            const play = this.currentTrickCards[i];
            const isTrump = play.suit === 'spades';
            const winningIsTrump = winningPlay.suit === 'spades';

            if (isTrump && !winningIsTrump) {
                winningPlay = play;
            } else if (isTrump && winningIsTrump) {
                if (rankValue[play.rank] > rankValue[winningPlay.rank]) {
                    winningPlay = play;
                }
            } else if (play.suit === this.ledSuit && !winningIsTrump) {
                if (rankValue[play.rank] > rankValue[winningPlay.rank]) {
                    winningPlay = play;
                }
            }
        }

        const winner = winningPlay.player;
        this.tricksWon[winner]++;
        
        // Update bid text to show trick count with Bot numbering
        if (winner === 'player1') this.bid_text_p1.setText(`Bid: ${this.bids.player1} / ${this.tricksWon.player1}`);
        if (winner === 'player4') this.bid_text_p4.setText(`Bid: ${this.bids.player4} / ${this.tricksWon.player4}`);
        if (winner === 'player3') this.bid_text_p3.setText(`Bid: ${this.bids.player3} / ${this.tricksWon.player3}`);
        if (winner === 'player2') this.bid_text_p2.setText(`Bid: ${this.bids.player2} / ${this.tricksWon.player2}`);

        // Animate trick cards to the winner
        const isLandscape = this.scale.width > this.scale.height;
        const layout = isLandscape ? this.LAYOUT_LANDSCAPE : this.LAYOUT_PORTRAIT;
        const baseW = isLandscape ? 1920 : 1080;
        const baseH = isLandscape ? 1080 : 1920;
        
        // Target the avatar of the winner
        const slotKey = winner === 'player1' ? 'user_02' 
                      : winner === 'player2' ? 'robot_user_01' 
                      : winner === 'player3' ? 'robot_user_02' 
                      : 'robot_user_03';
                      
        const targetLayout = layout[slotKey];
        if (!targetLayout) return;

        const targetX = targetLayout.x - baseW / 2;
        const targetY = targetLayout.y - baseH / 2;

        this.currentTrickCards.forEach(play => {
            this.tweens.add({
                targets: play.card,
                x: targetX,
                y: targetY,
                alpha: 0,
                duration: 250,
                ease: 'Power2'
            });
        });

        this.time.delayedCall(300, () => {
            // Remove cards from trick layout
            this.currentTrickCards.forEach(play => {
                play.card.setVisible(false);
            });
            this.currentTrickCards = [];
            this.ledSuit = null;
            this.updateUserCardTints();
            this.currentPlayerTurn = winner; // Trick winner leads next trick

            if (this.playerHands.player1.length === 0) {
                this.gameState = 'ROUND_END';
                this.time.delayedCall(800, () => {
                    this.calculateRoundScores();
                    this.showScoreboard();
                });
            } else {
                this.processTurn();
            }
        });
    }
}
