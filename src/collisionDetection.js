export function detectCollisionBrick(ball, gameObject) {
  let bottomOfBall = ball.position.y + ball.size;
  let topOfBall = ball.position.y;
  let topOfObject = gameObject.position.y;
  let leftSideOfObject = gameObject.position.x;
  let rightSideOfObject = gameObject.position.x + gameObject.width;
  let bottomOfObject = gameObject.position.y + gameObject.height;

  if (
    bottomOfBall >= topOfObject &&
    topOfBall <= bottomOfObject &&
    ball.position.x >= leftSideOfObject &&
    ball.position.x + ball.size <= rightSideOfObject
  ) {
    return true;
  } else {
    return false;
  }
}

export function detectCollisionPaddle(ball, paddle) {
  let bottomOfBall = ball.position.y + ball.size;
  let topOfBall = ball.position.y;
  let topBorder = paddle.position.y;
  let leftBorder = paddle.position.x;
  let rightBorder = paddle.position.x + paddle.width;
  let bottomBorder = paddle.position.y + paddle.height;
  let leftPart = leftBorder + paddle.width / 3;
  let rightPart = rightBorder - paddle.width / 3;

  if (bottomOfBall >= topBorder && topOfBall <= bottomBorder) {
    if (ball.position.x >= leftBorder && ball.position.x <= leftPart) {
      return "left";
    } else if (ball.position.x >= rightPart && ball.position.x <= rightBorder) {
      return "right";
    } else if (ball.position.x > leftPart && ball.position.x < rightPart) {
      return "middle";
    }
  }
}
