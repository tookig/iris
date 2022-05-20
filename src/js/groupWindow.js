import { window } from './window'
import { inputDialog } from './inputDialog'
import { section } from './section'
import { column } from './column'
import { button } from './button'
import $ from 'jquery'

const newSectionHtml = `
<a href='#' class='p-1 absolute right-1 top-1 border border-transparent rounded hover:border-gray-400 hover:bg-gray-500'>
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-5 h-5" viewBox="0 0 16 16">
    <path d="M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7z"/>
    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
  </svg>
</a>
`

const formatButtons = [{
  text: 'Normal',
  buttonClasses: 'inline-block m-2 py-1 px-2 field-normal hover:bg-gray-200 rounded',
  click: () => sendFieldFormat('field-normal')
}, {
  text: 'Fetstil',
  buttonClasses: 'inline-block m-2 py-1 px-2 field-bold bg-white hover:bg-gray-200 rounded',
  click: () => sendFieldFormat('field-bold')
}, {
  text: 'Grön',
  buttonClasses: 'inline-block m-2 py-1 px-2 field-green hover:bg-green-500 rounded',
  click: () => sendFieldFormat('field-green')
}, {
  text: 'Röd',
  buttonClasses: 'inline-block m-2 py-1 px-2 field-red hover:bg-gray-200 rounded',
  click: () => sendFieldFormat('field-red')
}]

function create (_args) {
  const newWindow = window.create(_args)

  const buttonsRow = $('<div></div>')
  formatButtons.forEach(fb => {
    buttonsRow.append(button.create(fb).element)
  })

  newWindow.header.append([
    $(newSectionHtml).on('click', onAddSection.bind(newWindow)),
    buttonsRow
  ])

  newWindow.content.removeClass().addClass(
    'flex flex-col bg-white text-black rounded h-full'
  )

  return newWindow
}

function onAddSection (e) {
  e.preventDefault()
  inputDialog.create({
    title: 'Lägg till sektion',
    message: 'Sektionsrubrik:'
  }).show().then(dialogResult => {
    if (dialogResult.button === 'ok') {
      const newSection = section.create({
        title: dialogResult.result
      })
      this.append(newSection)

      const newColumn = column.create()
      newSection.append(newColumn)
    }
  })
}

function sendFieldFormat (format) {
  $('.iris-field').trigger('fieldFormat', format)
}

const groupWindow = {
  create
}

export { groupWindow }
