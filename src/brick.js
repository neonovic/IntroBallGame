import { detectCollisionBrick } from "/src/collisionDetection";

export default class Brick {
  constructor(game, position) {
    this.image = document.getElementById("img_brick");
    this.position = position;
    this.game = game;
    this.width = Brick.width;
    this.height = Brick.height;
    this.markedForDeletion = false;
  }

  static get width() {
    return 80;
  }

  static get height() {
    return 67;
  }

  update() {
    if (detectCollisionBrick(this.game.ball, this)) {
      this.game.ball.speed.y = -this.game.ball.speed.y;
      this.game.sound.setCurrent(this.game.sound.hit).play();
      this.markedForDeletion = true;
    }
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
}
