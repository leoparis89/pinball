import * as PIXI from 'pixi.js'
import { gameLoop } from './gameLoop'
import settings from './settings'

createPixiFrame()

export const pixiApp = new PIXI.Application({
  width: settings.screenW,
  height: settings.screenH,
})
document.getElementById('pixi-frame')!.appendChild(pixiApp.view)

function createPixiFrame() {
  const pixiFrame = document.createElement('div')
  pixiFrame.style.display = 'inline-block'
  pixiFrame.id = 'pixi-frame'
  document.body.appendChild(pixiFrame)
}

export const loader = new PIXI.Loader()

loader.load(() => {
  pixiApp.ticker.add(delta => gameLoop(delta))
  // console.log(app)
  // const ground = Bodies.rectangle(WIDTH / 2, HEIGHT, WIDTH, 20, {
  //   isStatic: true,
  // })
  // World.add(world, ground)
})

export const makeImage = input => {
  const g = new PIXI.Graphics()
  g.beginFill(0x9966ff)
    .drawPolygon(input)
    .endFill()

  pixiApp.stage.addChild(g)

  return g as PIXI.Graphics
}
