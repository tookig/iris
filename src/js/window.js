import $ from 'jquery'
import { sizeable } from './sizeable'
import { draggable } from './draggable'

const windowClasses = 'absolute border border-slate-600 rounded overflow-hidden'
const headerClasses = 'px-4 py-2 bg-slate-600 text-white text-center cursor-default'
const contentClasses = 'relative p-2 bg-white text-black rounded h-full'

const windowPrototype = {
  append,
  init,
  move,
  setTitle
}

function create (_args) {
  const args = Object.assign({
    title: 'Window title',
    width: 200,
    height: 200,
    position: { x: 0, y: 0 }
  }, _args)

  const header = $('<header></header').addClass(headerClasses)
  const content = $('<div></div>').addClass(contentClasses)
  const element = $('<div></div>').append([header, content]).addClass(windowClasses)

  const newWindow = Object.assign(Object.create(Object.assign(windowPrototype, sizeable, draggable)), {
    args,
    header,
    content,
    element
  })

  return newWindow.init()
}

function append (childWindow) {
  this.content.append(childWindow.element)
  return this
}

function init () {
  this.setSize(this.args.width, this.args.height)
  this.move(this.args.position.x, this.args.position.y)
  this.setTitle(this.args.title)
  this.content.append(this.args.content)
  return this.initDraggable().initSizeable()
}

function move (x, y) {
  this.element.css({
    left: x,
    top: y
  })
  return this
}

function setTitle (titleText) {
  if (titleText) {
    this.header.text(titleText).removeClass('hidden')
  } else {
    this.header.text('').addClass('hidden')
  }
  this.args.title = titleText
  return this
}

const window = {
  create
}

export { window }
