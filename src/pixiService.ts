import * as PIXI from 'pixi.js'
import settings from './settings'

const app = new PIXI.Application({
  width: settings.screenW,
  height: settings.screenH,
})
