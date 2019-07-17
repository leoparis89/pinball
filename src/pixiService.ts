import * as PIXI from 'pixi.js'
import settings from './settings'

createPixiFrame()

const app = new PIXI.Application({
  width: settings.screenW,
  height: settings.screenH,
})

function createPixiFrame() {
  const pixiFrame = document.createElement('div')
  pixiFrame.id = 'pixi-frame'
  pixiFrame.style.position = 'fixed'
  pixiFrame.innerText = 'bar'
  document.body.appendChild(pixiFrame)
}
