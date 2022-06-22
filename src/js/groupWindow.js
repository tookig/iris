import { window } from './window'
import { inputDialog } from './inputDialog'
import { section } from './section'
import { column } from './column'
import { button } from './button'
import $ from 'jquery'

const groupWindowClasses = 'shadow-md'

const buttonsRowClasses = 'hidden flex gap-2 justify-center items-center'
const groupContentClasses = 'bg-zinc-100 text-black rounded h-full'

const groupRowClasses = 'relative flex flex-col'
const groupFreeClasses = 'absolute'

const newSectionHtml = `
<a href='#' class='p-1 inline-block m-2 border border-transparent rounded hover:border-gray-400 hover:bg-gray-500'>
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-8 h-8" viewBox="0 0 16 16">
    <path d="M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7z"/>
    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
  </svg>
</a>
`

const menuHtml = `
<div class='absolute top-1 right-4' x-data='{ open: false }' @click.outside="open = false" @close.stop="open = false">
  <div @click="open = ! open">
    <svg xmlns="http://www.w3.org/2000/svg" class='w-4 h-4 sm:w-8 sm:h-8 hover:text-scoreboard-blue text-white' fill="currentColor" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
    </svg>
  </div>

  <div x-show="open"
      x-transition:enter="transition ease-out duration-200"
      x-transition:enter-start="transform opacity-0 scale-95"
      x-transition:enter-end="transform opacity-100 scale-100"
      x-transition:leave="transition ease-in duration-75"
      x-transition:leave-start="transform opacity-100 scale-100"
      x-transition:leave-end="transform opacity-0 scale-95"
      class="absolute z-50 mt-2 w-60 rounded-md shadow-lg origin-top-right right-0"
      style="display: none;"
      @click="open = false">
    <div class="rounded-md ring-1 ring-black ring-opacity-5">
      <a href='#' class='edit-button block flex gap-2 align-center text-2xl lg:text-sm lg:px-4 lg:py-2 leading-5 text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-5 h-5" viewBox="0 0 16 16">
          <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
        </svg>
        Börja ändra
      </a>
      <a href='#' class='row-button block flex gap-2 align-center  text-2xl lg:text-sm lg:px-4 lg:py-2 leading-5 text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-5 h-5" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
        </svg>
        Visa som rader
      </a>
      <a href='#' class='free-button block flex gap-2 align-center  text-2xl lg:text-sm lg:px-4 lg:py-2 leading-5 text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-5 h-5" viewBox="0 0 16 16">
          <path d="M6 1v3H1V1h5zM1 0a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H1zm14 12v3h-5v-3h5zm-5-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5zM6 8v7H1V8h5zM1 7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H1zm14-6v7h-5V1h5zm-5-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1h-5z"/>
        </svg>
        Visa som celler
      </a>
    </div>
  </div>

</div>
`

const formatButtons = [
  {
    text: 'Normal',
    buttonClasses:
      'inline-block m-2 py-1 px-2 field-normal hover:bg-gray-200 rounded',
    click: () => sendFieldFormat('field-normal')
  },
  {
    text: 'Fetstil',
    buttonClasses:
      'inline-block m-2 py-1 px-2 field-bold bg-white hover:bg-gray-200 rounded',
    click: () => sendFieldFormat('field-bold')
  },
  {
    text: 'Grön',
    buttonClasses:
      'inline-block m-2 py-1 px-2 field-green hover:bg-green-500 rounded',
    click: () => sendFieldFormat('field-green')
  },
  {
    text: 'Röd',
    buttonClasses:
      'inline-block m-2 py-1 px-2 field-red hover:bg-gray-200 rounded',
    click: () => sendFieldFormat('field-red')
  },
  {
    text: 'Överstruken',
    buttonClasses:
      'inline-block m-2 py-1 px-2 field-disabled hover:bg-gray-200 rounded',
    click: () => sendFieldFormat('field-disabled')
  }
]

function create (_args) {
  const newWindow = window.create(_args)
  newWindow.element.addClass(groupWindowClasses)

  const newSection = $(newSectionHtml).on('click', onAddSection.bind(newWindow))
  const buttonsRow = $('<div></div>').addClass(buttonsRowClasses)
  buttonsRow.append(newSection)
  formatButtons.forEach(fb => {
    buttonsRow.append(button.create(fb).element)
  })

  const menuButton = $(
    menuHtml
  )

  const rowButton = menuButton.find('a.row-button').addClass('hidden')
  const freeButton = menuButton.find('a.free-button')
  const editButton = menuButton.find('a.edit-button')

  rowButton.on('click', e => {
    e.preventDefault()
    newWindow.element.addClass(groupRowClasses).removeClass(groupFreeClasses)
    newWindow.args.childWindows.forEach(child => child.makeRow())
    rowButton.addClass('hidden')
    freeButton.removeClass('hidden')
  })

  freeButton.on('click', e => {
    e.preventDefault()
    newWindow.element.addClass(groupFreeClasses).removeClass(groupRowClasses)
    newWindow.args.childWindows.forEach(child => child.makeFree())
    rowButton.removeClass('hidden')
    freeButton.addClass('hidden')
  })

  let isEditing = false
  editButton.on('click', e => {
    e.preventDefault()
    if (isEditing) {
      newWindow.element.find('.iris-section, .iris-column, .iris-field').trigger('disableEditing')
      newSection.addClass('hidden')
      buttonsRow.addClass('hidden')
    } else {
      newWindow.element.find('.iris-section, .iris-column, .iris-field').trigger('enableEditing')
      newSection.removeClass('hidden')
      buttonsRow.removeClass('hidden')
    }
    isEditing = !isEditing
  })

  newWindow.header.append([menuButton, buttonsRow])

  newWindow.content
    .removeClass()
    .addClass(groupContentClasses)
    .addClass(groupRowClasses)

  return newWindow
}

function onAddSection (e) {
  e.preventDefault()
  inputDialog
    .create({
      title: 'Lägg till sektion',
      message: 'Sektionsrubrik:'
    })
    .show()
    .then(dialogResult => {
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
  $('.iris-field, .iris-column').trigger('fieldFormat', format)
}

const groupWindow = {
  create
}

export { groupWindow }
