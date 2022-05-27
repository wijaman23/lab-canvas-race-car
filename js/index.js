window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {

    const canvas = document.querySelector("canvas")
    const ctx = canvas.getContext("2d")

    class Game {
      constructor(ctx) {
          this.ctx = ctx
          this.bg = new Background(ctx)
          this.car = new Car(ctx)

          this.interval = null
      }

      start() {
        this.interval
          this.interval = setInterval(() => {
            this.clear()
            this.draw()
            this.move()
        }, 1000 / 60)
      }

      clear() {
        this.ctx.clearRect(
          0,
          0,
          this.ctx.canvas.width,
          this.ctx.canvas.height
        )
      }

      draw() {
        this.bg.draw()
        this.car.draw()
      }
    
      move() {
        this.bg.move()
      }
    }

    class Background {
      constructor(ctx) {
        this.ctx = ctx
        this.x = 0
        this.y = 0
        this.vy = -3
    
        this.w = this.ctx.canvas.width
        this.h = this.ctx.canvas.height
    
        this.img = new Image()
        this.img.src = '../images/road.png'
      }
    
      draw() {
        this.ctx.drawImage(
          this.img,
          this.x,
          this.y,
          this.w,
          this.h
        )
    
        this.ctx.drawImage(
          this.img,
          this.x,
          this.y + this.ctx.canvas.height,
          this.w,
          this.h
        )
      }
    
      move() {
        this.y += this.vy

        if (this.y < -this.ctx.canvas.height) {
          this.y = 0
        }
      }
    }

    class Car {
      constructor(ctx) {
        this.ctx = ctx
        this.x = 200
        this.y = 530
        this.w = 100
        this.h = 100
    
        this.img = new Image()
        this.img.src = '../images/car.png'
      }

      draw() {
        this.ctx.drawImage(
        this.img,
        this.x,
        this.y,
        this.w,
        this.h
        )
      }
    }

    const game = new Game(ctx)
  
    game.start()
  }
} 
