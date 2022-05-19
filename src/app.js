import './app.css'
import { window } from './js/window'
import { desktop } from './js/desktop'
import { button } from './js/button'
import { newWindowDialog } from './js/newWindowDialog'

const defaultWindows = [{
  title: '',
  position: { x: 10, y: 10 },
  width: 600,
  height: 100,
  content: [
    '<div>Exempel på hur man skulle kunna göra en \'Whiteboard\' i IRIS.</div>',
    button.create({ text: 'Nytt fönster ', click: addWindow }).element
  ]
}]

function addWindow () {
  newWindowDialog.create().show()
}

document.addEventListener('DOMContentLoaded', () => {
  const main = desktop.create()
  main.element.appendTo('body')

  defaultWindows.forEach(w => {
    const newWindow = window.create(w)
    main.append(newWindow)
  })
})
