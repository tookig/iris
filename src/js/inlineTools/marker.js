import './marker.css'

class MarkerTool {
  static get isInline () {
    return true
  }

  get state () {
    return this._state
  }

  set state (state) {
    this._state = state

    this.button.classList.toggle(this.api.styles.inlineToolButtonActive, state)
  }

  constructor ({ api, config }) {
    this.api = api
    this.config = config
    this.button = null
    this._state = false

    this.tag = 'SPAN'
    this.class = this.config.classes
  }

  render () {
    this.button = document.createElement('button')
    this.button.type = 'button'
    this.button.innerHTML =
      this.config.svg ||
      '<svg width="20" height="18"><path d="M10.458 12.04l2.919 1.686-.781 1.417-.984-.03-.974 1.687H8.674l1.49-2.583-.508-.775.802-1.401zm.546-.952l3.624-6.327a1.597 1.597 0 0 1 2.182-.59 1.632 1.632 0 0 1 .615 2.201l-3.519 6.391-2.902-1.675zm-7.73 3.467h3.465a1.123 1.123 0 1 1 0 2.247H3.273a1.123 1.123 0 1 1 0-2.247z"/></svg>'
    this.button.classList.add(this.api.styles.inlineToolButton)
    if (this.config.buttonClass) {
      this.config.buttonClass
        .split(' ')
        .forEach(c => this.button.classList.add(c))
    }

    return this.button
  }

  static get sanitize () {
    return {
      span: {
        class: [
          'field-red', 'field-green', 'field-normal', 'field-bold', 'field-disabled'
        ]
      }
    }
  }

  surround (range) {
    console.log('surround', this.state)
    /*
    if (this.state) {
      this.unwrap(range)
      return
    }
    */
    this.wrap(range)
  }

  wrap (range) {
    console.log('wrap')

    let mark = this.api.selection.findParentTag(this.tag)
    // const selectedText = range.extractContents()
    const selectedText = mark ? new Text(mark.innerText) : range.extractContents()

    if (mark?.classList.contains(this.class)) {
      // Remove span
      mark.remove()
      range.insertNode(selectedText)
      return
    }

    if (mark) {
      mark.remove()
    }
    mark = document.createElement(this.tag)

    // this.class.split(' ').forEach(c => mark.classList.add(c))
    mark.classList.add(this.class)
    mark.appendChild(selectedText)
    range.insertNode(new Text(' '))
    range.insertNode(mark)

    this.api.selection.expandToTag(mark)
  }

  /*
  unwrap (range) {
    console.log('unwrap')

    const mark = this.api.selection.findParentTag(this.tag)
    const text = range.extractContents()

    mark.remove()

    range.insertNode(text)
  }
  */

  checkState () {
    const mark = this.api.selection.findParentTag(this.tag)

    console.log(this.api.selection)

    this.state = !!mark
    console.log('checkState', this.state)
  }
}

export { MarkerTool }
