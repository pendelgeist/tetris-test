class Piece {
  constructor (ctx) {
    this.ctx = ctx;
    this.color = 'blue';
    this.shape = [
      [2, 0, 0],
      [2, 2, 2],
      [0, 0, 0],
    ]

    this.x = 3;
    this.y = 0;
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.shape.forEach((row, y) => {
      row.forEach((value, x) => {
        //this.x, this.y -- left-upper position
        //this.x + x -- block position on board
        if (value > 0 ) { //don't draw it if not on the board
          this.ctx.fillRect(this.x + x, this.y + y, 1, 1)
        }
      })
    })
  }
}

//ctx.fillStyle = "red";
//ctx.fillRect(0, 0, 10, 10);
