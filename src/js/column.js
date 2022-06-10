import { window as irisWindow } from './window'
import $ from 'jquery'
import EditorJS from '@editorjs/editorjs'
import { MarkerTool } from './inlineTools/marker'
import { Saver } from './inlineTools/saver'

const columnWindowClasses =
  'iris-window iris-column relative block z-10'
const columnContentClasses =
  'border-r border-slate-300  min-w-[50px] min-h-[50px] pt-1 pb-1'
const editAreaClass = 'w-full'

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

  newWindow.editArea = $('<div></div>').addClass(editAreaClass)
  newWindow.content.append(newWindow.editArea)

  newWindow.editor = new EditorJS({
    holder: newWindow.editArea.get(0),
    tools: {
      italic: {
        inlineToolbar: false
      },
      link: {
        inlineToolbar: false
      },
      normal: {
        class: MarkerTool,
        inlineToolbar: true,
        config: {
          classes: 'field-normal',
          svg: `
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
            <path d="m2.244 13.081.943-2.803H6.66l.944 2.803H8.86L5.54 3.75H4.322L1 13.081h1.244zm2.7-7.923L6.34 9.314H3.51l1.4-4.156h.034zm9.146 7.027h.035v.896h1.128V8.125c0-1.51-1.114-2.345-2.646-2.345-1.736 0-2.59.916-2.666 2.174h1.108c.068-.718.595-1.19 1.517-1.19.971 0 1.518.52 1.518 1.464v.731H12.19c-1.647.007-2.522.8-2.522 2.058 0 1.319.957 2.18 2.345 2.18 1.06 0 1.716-.43 2.078-1.011zm-1.763.035c-.752 0-1.456-.397-1.456-1.244 0-.65.424-1.115 1.408-1.115h1.805v.834c0 .896-.752 1.525-1.757 1.525z"/>
          </svg>`
        }
      },
      bold: {
        class: MarkerTool,
        inlineToolbar: true,
        config: {
          classes: 'field-bold',
          svg: `
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-type-bold" viewBox="0 0 16 16">
            <path d="M8.21 13c2.106 0 3.412-1.087 3.412-2.823 0-1.306-.984-2.283-2.324-2.386v-.055a2.176 2.176 0 0 0 1.852-2.14c0-1.51-1.162-2.46-3.014-2.46H3.843V13H8.21zM5.908 4.674h1.696c.963 0 1.517.451 1.517 1.244 0 .834-.629 1.32-1.73 1.32H5.908V4.673zm0 6.788V8.598h1.73c1.217 0 1.88.492 1.88 1.415 0 .943-.643 1.449-1.832 1.449H5.907z"/>
          </svg>`
        }
      },
      green: {
        class: MarkerTool,
        inlineToolbar: true,
        config: {
          classes: 'field-green',
          svg: `
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
            <path d="m2.244 13.081.943-2.803H6.66l.944 2.803H8.86L5.54 3.75H4.322L1 13.081h1.244zm2.7-7.923L6.34 9.314H3.51l1.4-4.156h.034zm9.146 7.027h.035v.896h1.128V8.125c0-1.51-1.114-2.345-2.646-2.345-1.736 0-2.59.916-2.666 2.174h1.108c.068-.718.595-1.19 1.517-1.19.971 0 1.518.52 1.518 1.464v.731H12.19c-1.647.007-2.522.8-2.522 2.058 0 1.319.957 2.18 2.345 2.18 1.06 0 1.716-.43 2.078-1.011zm-1.763.035c-.752 0-1.456-.397-1.456-1.244 0-.65.424-1.115 1.408-1.115h1.805v.834c0 .896-.752 1.525-1.757 1.525z"/>
          </svg>`,
          buttonClass: 'bg-green-600 text-white'
        }
      },
      red: {
        class: MarkerTool,
        inlineToolbar: true,
        config: {
          classes: 'field-red',
          svg: `
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
            <path d="m2.244 13.081.943-2.803H6.66l.944 2.803H8.86L5.54 3.75H4.322L1 13.081h1.244zm2.7-7.923L6.34 9.314H3.51l1.4-4.156h.034zm9.146 7.027h.035v.896h1.128V8.125c0-1.51-1.114-2.345-2.646-2.345-1.736 0-2.59.916-2.666 2.174h1.108c.068-.718.595-1.19 1.517-1.19.971 0 1.518.52 1.518 1.464v.731H12.19c-1.647.007-2.522.8-2.522 2.058 0 1.319.957 2.18 2.345 2.18 1.06 0 1.716-.43 2.078-1.011zm-1.763.035c-.752 0-1.456-.397-1.456-1.244 0-.65.424-1.115 1.408-1.115h1.805v.834c0 .896-.752 1.525-1.757 1.525z"/>
          </svg>
          `,
          buttonClass: 'bg-red-600 text-white'
        }
      },
      disabled: {
        class: MarkerTool,
        inlineToolbar: true,
        config: {
          classes: 'field-disabled',
          svg: `
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-type-strikethrough" viewBox="0 0 16 16">
            <path d="M6.333 5.686c0 .31.083.581.27.814H5.166a2.776 2.776 0 0 1-.099-.76c0-1.627 1.436-2.768 3.48-2.768 1.969 0 3.39 1.175 3.445 2.85h-1.23c-.11-1.08-.964-1.743-2.25-1.743-1.23 0-2.18.602-2.18 1.607zm2.194 7.478c-2.153 0-3.589-1.107-3.705-2.81h1.23c.144 1.06 1.129 1.703 2.544 1.703 1.34 0 2.31-.705 2.31-1.675 0-.827-.547-1.374-1.914-1.675L8.046 8.5H1v-1h14v1h-3.504c.468.437.675.994.675 1.697 0 1.826-1.436 2.967-3.644 2.967z"/>
          </svg>
          `
        }
      },
      save: {
        class: Saver,
        inlineToolbar: true
      }
    },
    data: _args?.content || {}
  })

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
