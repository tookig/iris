import { window } from './window'
import { field } from './field'

const columnWindowClasses = 'iris-window relative block overflow-hidden z-10'
const columnContentClasses = 'flex flex-col items-start gap-1 border-r border-slate-300 min-w-[100px] h-full min-h-[80px] pt-1 pb-8'
const dummyClasses = 'absolute left-0 bottom-1 right-1 h-6 w-full'

function create (_args) {
  const newWindow = window.create(Object.assign(_args || {}, {
    sizeable: false,
    dragable: false,
    title: ''
  }))

  newWindow.append = addField.call(newWindow, newWindow.append)

  newWindow.element.removeClass().addClass(columnWindowClasses)
  newWindow.content.removeClass().addClass(columnContentClasses)

  newWindow.element.css({
    width: '',
    height: '',
    left: '',
    top: ''
  })

  newWindow.append(createDummyField.call(newWindow))

  return newWindow
}

function addField (baseFunction) {
  return (field) => {
    baseFunction.call(this, field)
  }
}

function createDummyField () {
  const dummy = field.create({
    text: '',
    removeWhenEmpty: false
  })
  dummy.element.addClass(dummyClasses)
  dummy.element.on('endEdit', () => {
    console.log('Dummy end edit')
    dummy.args.removeWhenEmpty = true
    dummy.element.removeClass(dummyClasses)
    dummy.element.off('endEdit')
    this.append(dummy)
    this.append(createDummyField.call(this))
  })
  return dummy
}

const column = {
  create
}

export { column }
