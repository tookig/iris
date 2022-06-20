import $ from 'jquery'

let current

function initDragable () {
  this.header.on('mousedown', e => beginDrag(this, e))
  this.move(this.args.position.x, this.args.position.y)
  return this
}

function beginDrag (window, e) {
  if (!window.args.dragable) return

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
  const pos = current.window.element.position()
  current.window.element.trigger('endDrag', {
    x: pos.left,
    y: pos.top
  })
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

const dragable = {
  initDragable
}

export { dragable }
