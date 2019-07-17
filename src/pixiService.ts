import * as PIXI from 'pixi.js'
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
