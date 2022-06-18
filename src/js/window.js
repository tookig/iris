import $ from 'jquery'
import { sizeable } from './sizeable'
import { dragable } from './dragable'

const windowClasses =
  'iris-window absolute border border-slate-600 rounded z-10 overflow-x-hidden overflow-y-hidden bg-zinc-100'
const headerClasses =
  'relative px-4 py-2 bg-slate-600 text-white text-center cursor-default'
const contentClasses = 'relative p-2 bg-white text-black rounded h-full'

const windowPrototype = {
  append,
  init,
  move,
  setTitle,
  focus
}

function create (_args) {
  const args = Object.assign(
    {
      title: 'Window title',
      width: 200,
      height: 200,
      position: { x: 0, y: 0 },
      sizeable: true,
      dragable: true,
      childWindows: []
    },
    _args
  )

  const header = $('<header></header').addClass(headerClasses)
  const content = $('<div></div>').addClass(contentClasses)
  const element = $('<div></div>')
    .append([header, content])
    .addClass(windowClasses)

  const newWindow = Object.assign(
    Object.create(
      Object.assign(
        windowPrototype,
        sizeable,
        dragable
      )
    ),
    {
      args,
      header,
      content,
      element
    }
  )

  return newWindow.init()
}

function append (childWindow) {
  this.content.append(childWindow.element)
  this.args.childWindows.push(childWindow)
  return this
}

function init () {
  this.setTitle(this.args.title)
  this.content.append(this.args.content)
  this.header.on('mousedown', focus.bind(this))
  if (this.args.sizeable) {
    this.initSizeable()
  }
  if (this.args.dragable) {
    this.initDragable()
  }
  return this
}

function focus () {
  $('.iris-window')
    .removeClass('z-20')
    .addClass('z-10')
  this.element.removeClass('z-10').addClass('z-20')
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
