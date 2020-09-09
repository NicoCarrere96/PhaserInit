const game = new Phaser.Game(1136, 640, Phaser.CANVAS);

GamePlayManager = {
  init: () => {
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
   },
  preload: () => {
    game.load.image("background", "assets/imgs/background.png");
  },
  create: () => {
    game.add.sprite(0, 0, "background");
  },
  update: () => {
    console.log("update");
  },
};

game.state.add("gameplay", GamePlayManager);
game.state.start("gameplay");
