import { dialog } from './dialog'
import { button } from './button'
import $ from 'jquery'

const inputDialogPrototype = {}

function create (_args) {
  const newDialog = {}
  const args = Object.assign({
    title: 'Nytt fönster',
    message: 'Input text:',
    defaultInput: '',
    width: 400,
    height: 200,
    buttons: [
      button.create({ text: 'Avbryt', click: cancelDialog(newDialog) }),
      button.create({ text: 'OK ', click: okDialog(newDialog) })
    ]
  }, _args)

  newDialog.dialog = Object.assign(dialog.create(args), inputDialogPrototype)

  const inputContent = $('<div></div>').append(
    $('<label></label>').text(args.message)
  ).append(
    $('<input></input>').addClass('block border border-slate-300 rounded p-2 my-2 w-full').val(args.defaultInput)
  ).addClass('w-56 mx-auto')

  newDialog.dialog.content.prepend(inputContent)

  return newDialog.dialog
}

function cancelDialog (newDialog) {
  return function () {
    newDialog.dialog.close({
      button: 'cancel'
    })
  }
}

function okDialog (newDialog) {
  return function () {
    const userInput = newDialog.dialog.content.find('input').val()
    if (!userInput) {
      console.log('No empty input') // TODO
      return
    }
    newDialog.dialog.close({
      result: userInput,
      button: 'ok'
    })
  }
}

const inputDialog = {
  create
}

export { inputDialog }
