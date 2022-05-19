import $ from 'jquery'

const buttonPrototype = {}

const buttonClasses = 'inline-block m-2 py-2 px-4 text-white font-bold bg-sky-700 hover:bg-sky-600 rounded'

function create (_args) {
  const args = Object.assign({
    text: 'Button',
    click: () => false
  }, _args)

  const element = $('<a></a>').attr('href', '#').text(args.text).addClass(buttonClasses)

  const newButton = Object.assign(
    Object.create(buttonPrototype), {
      args,
      element
    }
  )

  element.on('click', e => {
    e.preventDefault()
    newButton.args.click(e)
  })

  return newButton
}

const button = {
  create
}

export { button }
