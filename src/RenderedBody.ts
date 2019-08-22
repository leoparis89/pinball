import { World } from 'matter-js'
import * as PIXI from 'pixi.js'
import { world } from './matterService'
import { pixiApp } from './pixiService'

export class RenderedBody {
  image
  body

  constructor(x, y, body) {
    World.add(world, body)
    this.body = body

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

export const makeImage = input => {
  const g = new PIXI.Graphics()
  g.beginFill(0x9966ff)
    .drawPolygon(input)
    .endFill()

  pixiApp.stage.addChild(g)

  return g as PIXI.Graphics
}

function radToDeg(radians) {
  const pi = Math.PI
  return radians * (180 / pi)
}
