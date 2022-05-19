import { dialog } from './dialog'
import { button } from './button'

const newWindowDialogPrototype = {}

function create (_args) {
  _args = Object.assign(_args || {}, {
    title: 'Nytt fönster',
    width: 300,
    height: 200,
    buttons: [
      button.create({ text: 'Avbryt', click: closeDialog }),
      button.create({ text: 'OK ' })
    ]
  })

  const newDialog = Object.assign(dialog.create(_args), newWindowDialogPrototype)

  function closeDialog () {
    newDialog.close()
  }

  return newDialog
}

const newWindowDialog = {
  create
}

export { newWindowDialog }
