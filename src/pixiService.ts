import * as PIXI from 'pixi.js'
import { gameLoop } from './gameLoop'
import settings from './settings'

createPixiFrame()

const app = new PIXI.Application({
  width: settings.screenW,
  height: settings.screenH,
})

document.getElementById('pixi-frame')!.appendChild(app.view)

function createPixiFrame() {
  const pixiFrame = document.createElement('div')
  pixiFrame.id = 'pixi-frame'
  pixiFrame.style.position = 'fixed'
  document.body.appendChild(pixiFrame)
}

export const loader = new PIXI.Loader()

loader.load(() => {
  app.ticker.add(delta => gameLoop(delta))
  // console.log(app)
  // const ground = Bodies.rectangle(WIDTH / 2, HEIGHT, WIDTH, 20, {
  //   isStatic: true,
  // })
  // World.add(world, ground)
})
