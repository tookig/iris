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
    title: 'Exempel 89',
    position: { x: 40, y: 150 },
    width: 700,
    height: 900,
    factory: groupWindow,
    content: '',
    children: [
      {
        title: 'MIL',
        factory: section,
        children: [
          {
            factory: column,
            children: [
              { factory: field, text: 'M2 VSB', format: 'field-red' }
            ]
          }
        ]
      },
      {
        title: 'EKDK',
        factory: section,
        children: [
          {
            factory: column,
            children: [
              { factory: field, text: 'EXIT PTS DK', format: 'field-green' },
              { factory: field, text: 'VALKO', format: 'field-green' },
              { factory: field, text: 'ARTIP', format: 'field-green' },
              { factory: field, text: 'SUSET', format: 'field-green' },
            ]
          },
          {
            factory: column,
            children: [
              { factory: field, text: 'WOODY', format: 'field-green' },
              { factory: field, text: 'EEL', format: 'field-green' },
              { factory: field, text: 'SURAT', format: 'field-green' }
            ]
          },
          {
            factory: column,
            children: [
              { factory: field, text: 'ALAMI', format: '' },
              { factory: field, text: 'VEDEN', format: '' }
            ]
          },
          {
            factory: column,
            children: [
              { factory: field, text: 'A/C:', format: 'field-bold' },
              { factory: field, text: 'EPGD: OGDAV', format: '' }
            ]
          }
        ]
      },
      {
        title: 'L',
        factory: section,
        children: [
          {
            factory: column,
            children: [
              { factory: field, text: 'ESMS', format: 'field-bold' },
              { factory: field, text: '17:', format: '' },
              { factory: field, text: 'MS546', format: 'field-green' },
              { factory: field, text: '35:', format: '' },
              { factory: field, text: 'MS612 (EKRAL)', format: 'field-green' },
              { factory: field, text: 'MS611 (ROE)', format: 'field-green' }
            ]
          },
          {
            factory: column,
            children: [
              { factory: field, text: 'EKCH', format: 'field-bold' },
              { factory: field, text: 'LAMOX', format: 'field-green' }
            ]
          },
          {
            factory: column,
            children: [
              { factory: field, text: 'SE EPWW', format: 'field-normal' }
            ]
          }
        ]
      },
      {
        title: '2/3',
        factory: section,
        children: [
          {
            factory: column,
            children: [
              { factory: field, text: 'ESGG', format: 'field-bold' },
              { factory: field, text: '21:', format: '' },
              { factory: field, text: 'GG550', format: 'field-green' },
              { factory: field, text: '03:', format: '' },
              { factory: field, text: 'GG630 (EKRAL)', format: 'field-green' }
            ]
          },
          {
            factory: column,
            children: [
              { factory: field, text: 'LUNIP', format: 'field-green' }
            ]
          },
          {
            factory: column,
            children: [
              { factory: field, text: 'EKDK', format: 'field-bold' },
              { factory: field, text: 'EXIT PTS', format: 'field-green' },
              { factory: field, text: 'VALKO', format: 'field-green' },
              { factory: field, text: 'ARTIP', format: 'field-green' },
              { factory: field, text: 'SUSET', format: 'field-green' },
              { factory: field, text: 'WOODY', format: 'field-green' },
              { factory: field, text: 'EEL', format: 'field-green' },
              { factory: field, text: 'SURAT', format: 'field-green' }
            ]
          },
          {
            factory: column,
            children: [
              { factory: field, text: 'EKDK V/UV', format: 'field-bold' },
              { factory: field, text: 'GUNPA', format: 'field-green' },
              { factory: field, text: 'RIVEX', format: 'field-green' },
              { factory: field, text: 'AMSEV', format: 'field-green' },
              { factory: field, text: 'VALDI', format: 'field-green' }
            ]
          },
          {
            factory: column,
            children: [
              { factory: field, text: 'SE EDUU', format: 'field-normal' },
              { factory: field, text: 'SE EDWW', format: 'field-normal' }
            ]
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
