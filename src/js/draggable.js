import $ from 'jquery'

let current

function initDraggable () {
  this.header.on('mousedown', e => beginDrag(this, e))
  return this
}

function beginDrag (window, e) {
  e.preventDefault()
  $('body').on('mouseup', endDrag)
  $('body').on('mouseleave', endDrag)
  $('body').on('mousemove', drag)
  current = {
    window,
    x: e.pageX,
    y: e.pageY
  }
}

function endDrag (e) {
  e.preventDefault()
  $('body').off('mouseup', endDrag).off('mouseleave', endDrag).off('mousemove', drag)
  current = null
}

function drag (e) {
  const dX = e.pageX - current.x
  const dY = e.pageY - current.y
  current.y = e.pageY
  current.x = e.pageX

  const position = current.window.element.position()

  current.window.element.css({
    top: position.top + dY,
    left: position.left + dX
  })

  e.preventDefault()
}

const draggable = {
  initDraggable
}

export { draggable }
