export function detectCollision(ball, gameObject) {
  // collision with paddle
  let bottomOfBall = this.position.y + this.size;
  let topOfBall = this.position.y;
  let topOfPaddle = this.game.paddle.position.y;
  let leftSideOfPaddle = this.game.paddle.position.x;
  let rightSideOfPaddle = this.game.paddle.position.x + this.game.paddle.width;

  if (
    bottomOfBall >= topOfPaddle &&
    this.position.x >= leftSideOfPaddle &&
    this.position.x + this.size <= rightSideOfPaddle
  ) {
    this.speed.y = -this.speed.y;
    this.position.y = this.game.paddle.position.y - this.size;
  }
}
