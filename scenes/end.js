class End extends Phaser.Scene {
    constructor() {
        super('End');
        this.LAYOUT_PORTRAIT = {
            card_ace_screen_0_table: { x: 540, y: 960, scale: 0.6, depth: 2 },
            card_logo: { x: 966, y: 104, scale: 0.45, depth: 10 },
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
        };

        this.LAYOUT_LANDSCAPE = {
            card_ace_screen_0_table: { x: 960, y: 540, scale: 1, depth: 2 },
            card_logo: { x: 1804, y: 98, scale: 0.45, depth: 10 },
            clock_bg: { x: 174, y: 216, scale: 1.1, depth: 10 },
            diamond: { x: 1074, y: 922, scale: 0.9, depth: 81 },
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
        };
    }

    create() {
        this.createEndUI();
        this.onOrientationChange();
        // this.uiEditor = new UIEditor(this, {
        //     enabled: true,
        //     keys: this.getEditorKeys(),
        //     gridSize: 10,
        //     fileName: 'end.js'
        // });
    }

    getEditorKeys() {
        return [
            // 'card_ace_screen_0_table',
            // 'card_ace_screen_01_bg',
            // 'card_logo',
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
        ];
    }

    createEndUI() {
        this.card_ace_screen_0_table = this.add.image(0, 0, 'card_ace_screen_0_table').setOrigin(0.5);
        this.card_ace_screen_01_bg = this.add.image(0, 0, 'card_ace_screen_01_bg').setOrigin(0.5);
        this.card_logo = this.add.image(0, 0, 'card_logo').setOrigin(0.5);

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

        this.endUIContainer = this.add.container(0, 0);
        this.endUIContainer.add([
            this.card_ace_screen_0_table,

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

        const endUIScale = Math.min(scaleX, scaleY);
        this.endUIContainer.setPosition(centerX, centerY).setScale(endUIScale);

        // Dynamic screen-dependent positions
        const safePadding = 30 * endUIScale;

        // Logo (Top Right)
        const cardLogoScale = endUIScale * 0.4;
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
