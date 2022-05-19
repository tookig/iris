import $ from 'jquery'

let current

function initSizeable () {
  const corners = {
    tl: $('<div></div>').addClass('absolute w-2 h-2 bg-transparent left-0 top-0 z-50 cursor-nw-resize'),
    tr: $('<div></div>').addClass('absolute w-2 h-2 bg-transparent right-0 top-0 z-50 cursor-ne-resize'),
    bl: $('<div></div>').addClass('absolute w-2 h-2 bg-transparent left-0 bottom-0 z-50 cursor-sw-resize'),
    br: $('<div></div>').addClass('absolute w-2 h-2 bg-transparent right-0 bottom-0 z-50 cursor-se-resize')
  }

  this.element.append([corners.bl, corners.br, corners.tl, corners.tr])
  this.corners = corners

  corners.bl.on('mousedown', e => beginDrag(e, this, 'bl'))
  corners.br.on('mousedown', e => beginDrag(e, this, 'br'))
  corners.tl.on('mousedown', e => beginDrag(e, this, 'tl'))
  corners.tr.on('mousedown', e => beginDrag(e, this, 'tr'))

  return this
}

function setSize (width, height) {
  this.setHeight(height).setWidth(width)
  return this
}

function setHeight (height) {
  this.element.height(height)
  return this
}

function setWidth (height) {
  this.element.width(height)
  return this
}

function beginDrag (e, window, corner) {
  e.preventDefault()

  current = {
    window,
    corner,
    x: e.pageX,
    y: e.pageY
  }
  $('body').on('mouseup', endDrag).on('mouseleave', endDrag).on('mousemove', drag)
}

function endDrag (e) {
  e.preventDefault()

  current = null
  $('body').off('mouseup', endDrag).off('mouseleave', endDrag).off('mousemove', drag)
}

function drag (e) {
  e.preventDefault()

  const dX = e.pageX - current.x
  const dY = e.pageY - current.y
  current.y = e.pageY
  current.x = e.pageX

  const position = current.window.element.position()
  const width = current.window.element.outerWidth()
  const height = current.window.element.outerHeight()

  if (current.corner.endsWith('l')) {
    current.window.element.css({
      left: position.left + dX,
      width: width - dX
    })
  } else if (current.corner.endsWith('r')) {
    current.window.element.css({
      width: width + dX
    })
  }

  if (current.corner.startsWith('t')) {
    current.window.element.css({
      top: position.top + dY,
      height: height - dY
    })
  } else if (current.corner.startsWith('b')) {
    current.window.element.css({
      height: height + dY
    })
  }
}

const sizeable = {
  initSizeable, setSize, setHeight, setWidth
}

export { sizeable }
