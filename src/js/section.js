import { window } from './window'
import { column } from './column'
import $ from 'jquery'

const sectionHeaderClasses =
  'relative px-4 py-1 bg-gray-300 text-black text-center cursor-default'
const sectionWindowClasses =
  'iris-window iris-section block z-10 overflow-hidden'

const sectionRowClasses = 'relative'
const sectionFreeClasses = 'absolute'

const sectionContentClasses = 'p-2 bg-white text-black flex gap-1 h-full'

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
  const newWindow = window.create(
    Object.assign(
      {
        freePos: {
          x: 0,
          y: 0,
          w: 100,
          h: 100
        }
      },
      _args,
      {
        dragable: false,
        sizeable: false
      }
    )
  )

  newWindow.initSizeable()
  newWindow.initDragable()

  newWindow.makeFree = makeFree.bind(newWindow)
  newWindow.makeRow = makeRow.bind(newWindow)

  newWindow.element
    .removeClass()
    .addClass(sectionWindowClasses)
    .addClass(sectionRowClasses)
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
  newWindow.element.on('endEdit', () => {})

  const createGroup = $(newGroupHtml).on('click', () => {
    newWindow.append(column.create())
  })
  const removeGroup = $(removeGroupHtml).on('click', () => {
    lastEditField?.element.parents('.iris-column').remove()
  })
  newWindow.header.append(createGroup, removeGroup)

  newWindow.element
    .on('enableEditing', () => {
      createGroup.removeClass('hidden')
      removeGroup.removeClass('hidden')
    })
    .on('disableEditing', () => {
      createGroup.addClass('hidden')
      removeGroup.addClass('hidden')
    })
    .on('endDrag', (e, pos) => {
      newWindow.args.freePos.x = pos.x
      newWindow.args.freePos.y = pos.y
    })
    .on('endSize', (e, size) => {
      newWindow.args.freePos.w = size.width
      newWindow.args.freePos.h = size.height
    })

  return newWindow
}

function makeFree () {
  this.element.addClass(sectionFreeClasses).removeClass(sectionRowClasses)
  this.args.dragable = true
  this.args.sizeable = true
  this.move(this.args.freePos.x, this.args.freePos.y)
  this.setSize(this.args.freePos.w, this.args.freePos.h)
}

function makeRow () {
  this.element.addClass(sectionRowClasses).removeClass(sectionFreeClasses)
  this.args.dragable = false
  this.args.sizeable = false
  this.element.css({
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '',
    height: ''
  })
}

const section = {
  create
}

export { section }
