import $ from 'jquery'

const fieldClasses = 'iris-field inline-block mx-2 px-1 iris-field rounded-sm'
const inputClasses = 'px-2 border border-gray-200 rounded w-full'

const formatClasses = 'field-normal field-bold field-green field-red'

const fieldPrototype = {}

function create (_args) {
  const args = Object.assign(
    {
      text: 'Exempel!',
      format: 'field-normal',
      removeWhenEmpty: true
    },
    _args
  )

  const newField = Object.assign(Object.create(fieldPrototype), {
    args
  })

  newField.element = $('<div></div>')
    .text(newField.args.text)
    .addClass(fieldClasses)
    .addClass(args.format)

  newField.element.on('click', beginEdit.bind(newField))

  newField.element.on('fieldFormat', (e, format) => {
    if (newField.isEditing) {
      newField.element.removeClass(formatClasses).addClass(format)
      newField.element
        .find('input')
        .removeClass(formatClasses)
        .addClass(format)
    }
  })

  newField.element.on('enableEditing', () => {
    newField.canEdit = true
  })

  newField.element.on('disableEditing', () => {
    newField.canEdit = false
  })

  return newField
}

function beginEdit () {
  if (this.isEditing || !this.canEdit) return
  this.isEditing = true
  const currentText = this.element.text()
  this.element.text('')
  const input = $('<input></input>')
    .val(currentText)
    .addClass(inputClasses)
    .appendTo(this.element)
    .trigger('focus')
  input
    .on('keypress', e => {
      if (e.key === 'Enter') {
        e.preventDefault()
        endEdit.call(this)
      }
    })
    .on('blur', endEdit.bind(this))

  this.element.addClass('iris-field-edit')
  this.element.parents('.iris-section').trigger('beginEdit', this)
}

function endEdit () {
  const input = this.element.find('input')
  const newText = input.val()
  input.remove()
  this.element.text(newText)
  if (!newText && this.args.removeWhenEmpty) {
    this.element.remove()
  }
  this.isEditing = false
  this.element.removeClass('iris-field-edit')
  this.element.trigger('endEdit')
  this.element.parents('.iris-section').trigger('endEdit', this)
}

const field = {
  create
}

export { field }
