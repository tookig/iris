import { window as irisWindow } from './window'
import $ from 'jquery'

const columnWindowClasses =
  'iris-window iris-column relative block overflow-hidden z-10'
const columnContentClasses =
  'border-r border-slate-300  min-w-[100px] h-full min-h-[80px] pt-1 pb-1'

const editArea = `
  <div contenteditable class='column-editable w-full h-full'></div>
`

function create (_args) {
  const newWindow = irisWindow.create(
    Object.assign(_args || {}, {
      sizeable: false,
      dragable: false,
      title: ''
    })
  )

  newWindow.append = addField.call(newWindow, newWindow.append)

  newWindow.element.removeClass().addClass(columnWindowClasses)
  newWindow.content.removeClass().addClass(columnContentClasses)

  newWindow.editArea = $(editArea)
  newWindow.content.append(newWindow.editArea)

  newWindow.element.on('fieldFormat', setFormat.bind(newWindow))

  newWindow.element.css({
    width: '',
    height: '',
    left: '',
    top: ''
  })

  return newWindow
}

function setFormat (e, format) {
  const selection = window.getSelection()
  if (
    !selection.anchorNode ||
    this.element.has(selection.anchorNode).length < 1 ||
    selection.type !== 'Range'
  ) {
    return
  }

  const range = selection.getRangeAt(0)
  const offset = range.startOffset
  const node = range.startContainer
  // console.log(range)
  const fragment = range.extractContents()
  console.log(fragment)
  const items = []
  fragment.childNodes.forEach(f => items.push(f.innerText || f.textContent))
  items.filter(i => i).forEach(i => node.parentNode.insertBefore(
    $('<span></span>').text(i).addClass(format).get(0),
    node.childNodes[offset]
  ))
  console.log(offset)
  // $('<span></span>').append(fragment).addClass(format).appendTo(this.editArea)

  // const extracted = selection.getRangeAt(0).extractContent()

  // console.log(selection.getRangeAt(0))
}

function addField (baseFunction) {
  return field => {}
}

function getSelectionHtml () {
  let html = ''
  if (typeof window.getSelection !== 'undefined') {
    const sel = window.getSelection()
    if (sel.rangeCount) {
      const container = document.createElement('div')
      for (var i = 0, len = sel.rangeCount; i < len; ++i) {
        container.appendChild(sel.getRangeAt(i).cloneContents())
      }
      html = container.innerHTML
    }
  } else if (typeof document.selection != 'undefined') {
    if (document.selection.type == 'Text') {
      html = document.selection.createRange().htmlText
    }
  }
  return html
}

function getCaretIndex (element) {
  let position = 0
  const isSupported = typeof window.getSelection !== 'undefined'
  if (isSupported) {
    const selection = window.getSelection()
    if (selection.rangeCount !== 0) {
      const range = window.getSelection().getRangeAt(0)
      const preCaretRange = range.cloneRange()
      preCaretRange.selectNodeContents(element)
      preCaretRange.setEnd(range.endContainer, range.endOffset)
      position = preCaretRange.toString().length
    }
  }
  return position
}

const column = {
  create
}

export { column }
