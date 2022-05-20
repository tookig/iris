import { window } from './window'
import $ from 'jquery'

const dialogPrototype = {
  show,
  close
}

const modalOverlay = $('<div></div>').addClass('fixed left-0 right-0 top-0 bottom-0 bg-overlay z-40')

function create (_args) {
  const newDialog = Object.assign(window.create(_args), dialogPrototype)
  newDialog.element.css({ top: '', left: '' })
  newDialog.element.removeClass('z-10').addClass('fixed mx-auto hidden z-50 top-1/2 left-1/2').css({
    'margin-left': -(_args.width / 2),
    'margin-top': -(_args.height / 2)

  })
  const buttonContainer = $('<div></div>').addClass('flex gap-0 justify-end items-center absolute left-0 right-0 bottom-0 h-16 mb-12')
  newDialog.content.append(buttonContainer)

  if (Array.isArray(_args.buttons)) {
    _args.buttons.forEach(button => buttonContainer.append(button.element))
  }

  newDialog.promise = new Promise((resolve, reject) => {
    newDialog.resolve = resolve
  })

  return newDialog
}

function show () {
  $('body').append(this.element).append(modalOverlay)
  this.element.removeClass('hidden')
  return this.promise
}

function close (dialogResult) {
  this.element.remove()
  modalOverlay.remove()
  this.element.addClass('hidden')

  this?.resolve(dialogResult)
  this.resolve = null
  this.promise = null
}

const dialog = {
  create
}

export { dialog }
