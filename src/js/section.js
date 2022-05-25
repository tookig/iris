import { window } from './window'
import { column } from './column'
import $ from 'jquery'

const sectionHeaderClasses = 'relative px-4 py-1 bg-gray-300 text-black text-center cursor-default'
const sectionWindowClasses = 'iris-window iris-section relative block overflow-hidden z-10'
const sectionContentClasses = 'p-2 bg-white text-black flex gap-1'

const newGroupHtml = `
<a href='#' class='absolute hidden right-1 top-1 border border-transparent rounded hover:border-gray-100 hover:bg-gray-200'>
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6" viewBox="0 0 16 16">
    <path d="M2 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h5.5a.5.5 0 0 1 0 1H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v4a.5.5 0 0 1-1 0V4a1 1 0 0 0-1-1H2Z"/>
    <path d="M3.146 5.146a.5.5 0 0 1 .708 0L5.177 6.47a.75.75 0 0 1 0 1.06L3.854 8.854a.5.5 0 1 1-.708-.708L4.293 7 3.146 5.854a.5.5 0 0 1 0-.708ZM5.5 9a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5ZM16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-3.5-2a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1v-1a.5.5 0 0 0-.5-.5Z"/>
  </svg>
</a>
`

const removeGroupHtml = `
<a href='#' class='absolute hidden right-10 top-1 border border-transparent rounded hover:border-gray-100 hover:bg-gray-200'>
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6" viewBox="0 0 16 16">
    <path d="M2 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h5.5a.5.5 0 0 1 0 1H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v4a.5.5 0 0 1-1 0V4a1 1 0 0 0-1-1H2Z"/>
    <path d="M3.146 5.146a.5.5 0 0 1 .708 0L5.177 6.47a.75.75 0 0 1 0 1.06L3.854 8.854a.5.5 0 1 1-.708-.708L4.293 7 3.146 5.854a.5.5 0 0 1 0-.708ZM5.5 9a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5ZM16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-5.5 0a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5Z"/>
  </svg>
</a>
`

function create (_args) {
  const newWindow = window.create(Object.assign(_args || {}, {
    sizeable: false,
    dragable: false
  }))

  newWindow.element.removeClass().addClass(sectionWindowClasses)
  newWindow.header.removeClass().addClass(sectionHeaderClasses)
  newWindow.content.removeClass().addClass(sectionContentClasses)

  newWindow.element.css({
    width: '',
    height: '',
    left: '',
    top: ''
  })

  let lastEditField
  newWindow.element.on('beginEdit', (action, field) => {
    lastEditField = field
  })
  newWindow.element.on('endEdit', () => {
  })

  const createGroup = $(newGroupHtml).on('click', () => {
    newWindow.append(column.create())
  })
  const removeGroup = $(removeGroupHtml).on('click', () => {
    lastEditField?.element.parents('.iris-column').remove()
  })
  newWindow.header.append(createGroup, removeGroup)

  newWindow.element.on('enableEditing', () => {
    createGroup.removeClass('hidden')
    removeGroup.removeClass('hidden')
  }).on('disableEditing', () => {
    createGroup.addClass('hidden')
    removeGroup.addClass('hidden')
  })

  return newWindow
}

const section = {
  create
}

export { section }
