import { Bodies, World } from 'matter-js'
import * as PIXI from 'pixi.js'
import { world } from './matterService'
import { pixiApp } from './pixiService'

const makeBody = (x, y, h, w, isStatic?) => {
  const body = Bodies.rectangle(x, y, 40, 40)
  World.add(world, body)
  return body
}

export const makeImage = input => {
  const g = new PIXI.Graphics()
  g.beginFill(0x9966ff)
    .drawPolygon(input)
    .endFill()

  pixiApp.stage.addChild(g)

  return g as PIXI.Graphics
}

export class Box {
  image
  body

  constructor(x, y, h, w, isStatic?) {
    this.body = makeBody(x, y, h, w, isStatic)

    const xOffset = x,
      yOffset = y

    const vert = this.body.vertices
    const input = vert
      .map(({ x, y }) => [x, y])
      .map(el => [el[0] - xOffset, el[1] - yOffset])
      .reduce((acc, curr) => {
        acc = [...acc, ...curr]
        return acc
      }, [])

    this.image = makeImage(input)
  }
  refresh() {
    this.image.x = this.body.position.x
    this.image.y = this.body.position.y
    this.image.angle = radToDeg(this.body.angle)
  }
}

function radToDeg(radians) {
  const pi = Math.PI
  return radians * (180 / pi)
}
