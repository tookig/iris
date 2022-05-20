import { window } from './window'
import { column } from './column'
import $ from 'jquery'

const sectionHeaderClasses = 'relative px-4 py-1 bg-gray-300 text-black text-center cursor-default'
const sectionWindowClasses = 'iris-window relative block overflow-hidden z-10'
const sectionContentClasses = 'p-2 bg-white text-black flex gap-1'

const newGroupHtml = `
<a href='#' class='p-1 absolute right-1 top-1 border border-transparent rounded hover:border-gray-100 hover:bg-gray-200'>
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-4 h-4" viewBox="0 0 16 16">
    <path d="M0 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3zm8.5-1v12H14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H8.5zm-1 0H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h5.5V2z"/>  
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

  newWindow.header.append(
    $(newGroupHtml).on('click', () => {
      newWindow.append(column.create())
    })
  )
  newWindow.element.css({
    width: '',
    height: '',
    left: '',
    top: ''
  })

  return newWindow
}

const section = {
  create
}

export { section }
