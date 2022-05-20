import './app.css'
import { window } from './js/window'
import { groupWindow } from './js/groupWindow'
import { desktop } from './js/desktop'
import { button } from './js/button'
import { inputDialog } from './js/inputDialog'
import { section } from './js/section'
import { column } from './js/column'
import { field } from './js/field'

const mainDesktop = desktop.create()

const defaultWindows = [
  {
    title: '',
    position: { x: 10, y: 10 },
    width: 600,
    height: 100,
    factory: window,
    content: [
      "<div>Exempel på hur man skulle kunna göra en 'Whiteboard' i IRIS.</div>",
      button.create({ text: 'Nytt fönster ', click: addWindow }).element
    ]
  },
  {
    title: 'Exempel 1',
    position: { x: 40, y: 150 },
    width: 500,
    height: 600,
    factory: groupWindow,
    content: '',
    children: [
      {
        title: 'Sektion 1',
        factory: section,
        children: [
          {
            factory: column,
            children: [
              { factory: field, text: 'ABC123' },
              { factory: field, text: 'XXXXXX', format: 'field-red' },
              { factory: field, text: 'kja aksdj akj dajd lka' },
              { factory: field, text: 'asdasd' },
              { factory: field, text: 'AAWWDSD' }
            ]
          }
        ]
      },
      {
        title: 'Sektion 2',
        factory: section,
        children: [
          {
            factory: column
          },
          {
            factory: column
          }
        ]
      },
      {
        title: 'Sektion 3',
        factory: section,
        children: [
          {
            factory: column
          },
          {
            factory: column
          },
          {
            factory: column
          }
        ]
      }
    ]
  }
]

function addWindow () {
  inputDialog
    .create({
      message: 'Fönsterrubrik:'
    })
    .show()
    .then(dialogResult => {
      if (dialogResult.button === 'ok') {
        const newWindow = groupWindow.create({
          title: dialogResult.result
        })
        mainDesktop.append(newWindow)
      }
    })
}

function defaultCreate (w, parent) {
  const newWindow = w.factory.create(w)
  parent.append(newWindow)
  w?.children?.forEach(ww => defaultCreate(ww, newWindow))
}

document.addEventListener('DOMContentLoaded', () => {
  mainDesktop.element.appendTo('body')

  defaultWindows.forEach(w => defaultCreate(w, mainDesktop))
})
