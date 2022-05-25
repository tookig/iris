import { window } from './window'
import { inputDialog } from './inputDialog'
import { section } from './section'
import { column } from './column'
import { button } from './button'
import $ from 'jquery'

const buttonsRowClasses = 'hidden'
const groupContentClasses = 'flex flex-col bg-white text-black rounded h-full'
const editPenClasses = 'bg-amber-200 hover:bg-amber-300 text-amber-500'

const newSectionHtml = `
<a href='#' class='p-1 absolute hidden right-10 top-1 border border-transparent rounded hover:border-gray-400 hover:bg-gray-500'>
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-5 h-5" viewBox="0 0 16 16">
    <path d="M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7z"/>
    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
  </svg>
</a>
`
const editHtml = `
<a href='#' class='p-1 absolute right-1 top-1 border border-transparent rounded hover:border-gray-400 hover:bg-gray-500'>
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-5 h-5" viewBox="0 0 16 16">
    <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
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
}, {
  text: 'Överstruken',
  buttonClasses: 'inline-block m-2 py-1 px-2 field-disabled hover:bg-gray-200 rounded',
  click: () => sendFieldFormat('field-disabled')
}]

function create (_args) {
  const newWindow = window.create(_args)

  const newSection = $(newSectionHtml).on('click', onAddSection.bind(newWindow))

  const buttonsRow = $('<div></div>').addClass(buttonsRowClasses)
  formatButtons.forEach(fb => {
    buttonsRow.append(button.create(fb).element)
  })

  let isEditing = false
  const editButton = $(editHtml).on('click', e => {
    e.preventDefault()
    if (isEditing) {
      editButton.removeClass(editPenClasses)
      newWindow.element.find('.iris-section, .iris-column, .iris-field').trigger('disableEditing')
      newSection.addClass('hidden')
      buttonsRow.addClass('hidden')
    } else {
      editButton.addClass(editPenClasses)
      newWindow.element.find('.iris-section, .iris-column, .iris-field').trigger('enableEditing')
      newSection.removeClass('hidden')
      buttonsRow.removeClass('hidden')
    }
    isEditing = !isEditing
  })

  newWindow.header.append([
    editButton,
    newSection,
    buttonsRow
  ])

  newWindow.content.removeClass().addClass(groupContentClasses)

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
