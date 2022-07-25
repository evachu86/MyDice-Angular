export class Dice {
  side = 1
  name = 'side 1'

  rollDice() {
    this.side = Math.floor(1 + Math.random()*6)
    this.name = `side ${this.side}`
  }

  get ImgStr(): string {
    return `assets/img/dice/dice-${this.side}.png`
  }

  public static getImgStr(side:number=1):string {
    return `assets/img/dice/dice-${side}.png`
  }
}
