import {
  detectCollisionBrick,
  detectCollisionPaddle
} from "/src/collisionDetection";
import { GAMESTATE } from "/src/game";

export default class Ball {
  constructor(game) {
    this.image = document.getElementById("img_ball");
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    this.size = 40;
    this.game = game;
    this.reset();
  }

  reset() {
    this.speed = {
      x: 8,
      y: -4
    };
    this.position = { x: Math.floor(Math.random() * 700) + 10, y: 500 };
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.size,
      this.size
    );
  }

  update(deltaTime) {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

    if (this.position.x > this.gameWidth - this.size || this.position.x < 0)
      this.speed.x = -this.speed.x;

    if (this.position.y < 0) this.speed.y = -this.speed.y;

    if (this.position.y > this.gameHeight - this.size) {
      this.game.sound.setCurrent(this.game.sound.dead);
      this.game.sound.current.play();
      this.game.lives--;
      this.reset();
      this.game.gamestate = GAMESTATE.PAUSED;
      this.game.sound.current.onended = () =>
        (this.game.gamestate = GAMESTATE.RUNNING);
    }

    if (this.position.y > this.gameHeight - 100) {
      let collisionPart = detectCollisionPaddle(this, this.game.paddle);
      if (collisionPart === "middle") {
        this.speed.y = -this.speed.y;
        this.position.y = this.game.paddle.position.y - this.size;
      } else if (collisionPart === "left") {
        this.speed.y = -this.speed.y;
        this.speed.x = this.speed.x - 5;
      } else if (collisionPart === "right") {
        this.speed.y = -this.speed.y;
        this.speed.x = this.speed.x + 5;
      }
    }
  }
}
