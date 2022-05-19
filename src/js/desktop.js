import { window } from './window'

function create (_args) {
  const desktopWindow = window.create(Object.assign(_args || {}, {
    width: null,
    height: null
  }))

  desktopWindow.element.removeClass().addClass('absolute left-0 top-0 right-0 bottom-0')
  desktopWindow.header.addClass('hidden')
  desktopWindow.content.removeClass().addClass('bg-zinc-200 w-full h-full')

  return desktopWindow
}

const desktop = {
  create
}

export { desktop }
