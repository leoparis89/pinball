import { Bodies, World } from 'matter-js'
import * as PIXI from 'pixi.js'
import { world } from './matterService'
import { pixiApp } from './pixiService'

const makeBody = (x, y, h, w, isStatic?) => {
  const body = Bodies.rectangle(x, y, h, w, { isStatic })
  World.add(world, body)
  return body
}

const makeImage = (x, y, h, w) => {
  const image = new PIXI.Graphics()
  image.beginFill(0x9966ff)
  image.drawRect(0, 0, h, w)
  image.endFill()
  // const image = new PIXI.Sprite(loader.resources['assets/cat.png'].texture)
  pixiApp.stage.addChild(image)
  return image
}

export class Box {
  image
  body

  constructor(x, y, h, w) {
    this.image = makeImage(x, y, h, w)
    this.body = makeBody(x, y, h, w)
  }
  refresh() {
    this.image.x = this.body.position.x
    this.image.y = this.body.position.y
  }
}
