import { bodies } from './gameLoop'
import { addToWorld } from './matterService'
import { makeImage } from './pixiService'

export class RenderedBody {
  image
  body

  constructor(x, y, body) {
    addToWorld(body)
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

function radToDeg(radians) {
  const pi = Math.PI
  return radians * (180 / pi)
}

export const renderBody = body => {
  bodies.push(new RenderedBody(body.position.x, body.position.y, body))
}
