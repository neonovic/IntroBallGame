export default class Brick {
  constructor(game, position) {
    this.image = document.getElementById("img_brick");
    this.position = position;
    this.game = game;
    this.width = Brick.width;
    this.height = Brick.height;
  }

  static get width() {
    return 80;
  }

  static get height() {
    return 40;
  }

  update() {}

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
