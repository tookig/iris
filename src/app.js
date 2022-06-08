import './app.css'
import { window } from './js/window'
import { groupWindow } from './js/groupWindow'
import { desktop } from './js/desktop'
import { button } from './js/button'
import { inputDialog } from './js/inputDialog'
import { section } from './js/section'
import { column } from './js/column'
import { field } from './js/field'

const mainDesktop = desktop.create()

const defaultWindows = [
  {
    title: '',
    position: { x: 10, y: 10 },
    width: 600,
    height: 100,
    factory: window,
    content: [
      "<div>Exempel på hur man skulle kunna göra en 'Whiteboard' i IRIS.</div>",
      button.create({ text: 'Nytt fönster ', click: addWindow }).element
    ]
  },
  {
    title: 'Exempel 89',
    position: { x: 40, y: 150 },
    width: 700,
    height: 900,
    factory: groupWindow,
    content: '',
    children: [
      {
        title: 'MIL',
        factory: section,
        children: [
          {
            factory: column,
            content: {
              time: 1654721838641,
              blocks: [
                {
                  id: 'N1hs93gt63',
                  type: 'paragraph',
                  data: {
                    text: '<span class="field-red">M2 VSB</span><br>'
                  }
                }
              ],
              version: '2.24.3'
            }
          }
        ]
      },
      {
        title: 'EKDK',
        factory: section,
        children: [
          {
            factory: column,
            content: {
              time: 1654722186853,
              blocks: [
                {
                  id: 'iqOGr_ZrA7',
                  type: 'paragraph',
                  data: {
                    text: '<span class="field-green">EXIT PTS DK</span>'
                  }
                },
                {
                  id: '1bBV8H1qUR',
                  type: 'paragraph',
                  data: {
                    text:
                      '<span class="field-green">VALKO</span> <span class="field-green">ARTIP</span>'
                  }
                }
              ],
              version: '2.24.3'
            }
          },
          {
            factory: column,
            content: {
              time: 1654722245481,
              blocks: [
                {
                  id: 'CRw6wZdrSs',
                  type: 'paragraph',
                  data: {
                    text: '<span class="field-green">WOODY <br></span>'
                  }
                },
                {
                  id: 'zP43dbXVGG',
                  type: 'paragraph',
                  data: {
                    text:
                      '<span class="field-green">EEL</span> <span class="field-green">SURAT</span>'
                  }
                }
              ],
              version: '2.24.3'
            }
          },
          {
            factory: column,
            content: {
              time: 1654722281167,
              blocks: [
                {
                  id: 'p6NaWXnmIM',
                  type: 'paragraph',
                  data: {
                    text: 'ALAMI'
                  }
                },
                {
                  id: '-o_zlMeyRj',
                  type: 'paragraph',
                  data: {
                    text: 'VEDEN'
                  }
                }
              ],
              version: '2.24.3'
            }
          },
          {
            factory: column,
            content: {
              time: 1654722306179,
              blocks: [
                {
                  id: '5G1nLicbHv',
                  type: 'paragraph',
                  data: {
                    text: '<span class="field-bold">A/C:</span>'
                  }
                },
                {
                  id: '08EawMct2L',
                  type: 'paragraph',
                  data: {
                    text: 'EPGD: OGDAV<br>'
                  }
                }
              ],
              version: '2.24.3'
            }
          }
        ]
      },
      {
        title: 'L',
        factory: section,
        children: [
          {
            factory: column,
            content: {
              time: 1654723345020,
              blocks: [
                {
                  id: 'jHjNEzpDO8',
                  type: 'paragraph',
                  data: {
                    text: '<span class="field-bold">ESMS:</span> '
                  }
                },
                {
                  id: 'LxlFm61xk3',
                  type: 'paragraph',
                  data: {
                    text:
                      '17: <span class="field-green">MS546</span> <br>35: <span class="field-green">MS612</span>  (EKRAL)<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span class="field-green">MS611</span>  (ROE)'
                  }
                }
              ],
              version: '2.24.3'
            }
          },
          {
            factory: column,
            content: {
              time: 1654723425620,
              blocks: [
                {
                  id: '9wkdIXPsz3',
                  type: 'paragraph',
                  data: {
                    text: '<span class="field-bold">EKCH:</span> '
                  }
                },
                {
                  id: 's4KL_V6UAs',
                  type: 'paragraph',
                  data: {
                    text: '<span class="field-green">LAMOX</span> <br>'
                  }
                }
              ],
              version: '2.24.3'
            }
          },
          {
            factory: column,
            content: {
              time: 1654723459106,
              blocks: [
                {
                  id: 'WLvyn0cToY',
                  type: 'paragraph',
                  data: {
                    text: 'SE EPWW<br>'
                  }
                }
              ],
              version: '2.24.3'
            }
          }
        ]
      },
      {
        title: '2/3',
        factory: section,
        children: [
          {
            factory: column,
            content: {
              time: 1654723753581,
              blocks: [
                {
                  id: 'WG9Oyri8KK',
                  type: 'paragraph',
                  data: {
                    text: '<span class="field-bold">ESGG</span> '
                  }
                },
                {
                  id: 'fQI6UUxbnw',
                  type: 'paragraph',
                  data: {
                    text: '21: <span class="field-green">GG550</span> '
                  }
                },
                {
                  id: '01-bLYPhMk',
                  type: 'paragraph',
                  data: {
                    text: '03: <span class="field-green">GG630</span> <br>'
                  }
                }
              ],
              version: '2.24.3'
            }
          },
          {
            factory: column,
            content: {
              time: 1654723971084,
              blocks: [
                {
                  id: 'qRNMZuoyM2',
                  type: 'paragraph',
                  data: {
                    text: ' '
                  }
                },
                {
                  id: 'qRNMZuoyM0',
                  type: 'paragraph',
                  data: {
                    text: '<span class="field-green">LUNIP</span> '
                  }
                }
              ],
              version: '2.24.3'
            }
          },
          {
            factory: column,
            content: {
              time: 1654724007869,
              blocks: [
                {
                  id: 'WOYDBDSctf',
                  type: 'paragraph',
                  data: {
                    text: '<span class="field-bold">EKDK</span> '
                  }
                },
                {
                  id: 'mYEUbcCNzd',
                  type: 'paragraph',
                  data: {
                    text: '<span class="field-green">EXIT PTS</span> '
                  }
                },
                {
                  id: 'i0YHRcHL8u',
                  type: 'paragraph',
                  data: {
                    text:
                      '<span class="field-green">VALKO</span>  <span class="field-green">ARTIP</span> '
                  }
                },
                {
                  id: 'otK_8RRyJf',
                  type: 'paragraph',
                  data: {
                    text:
                      '<span class="field-green">SUSET</span>  <span class="field-green">WOODY</span> '
                  }
                },
                {
                  id: 'aC_MxGYN1F',
                  type: 'paragraph',
                  data: {
                    text:
                      '<span class="field-green">EEL</span>  <span class="field-green">SURAT</span> '
                  }
                }
              ],
              version: '2.24.3'
            }
          },
          {
            factory: column,
            content: {
              time: 1654724080849,
              blocks: [
                {
                  id: '9RpgDRgrXU',
                  type: 'paragraph',
                  data: {
                    text: '<span class="field-bold">EKDK V/UV</span> '
                  }
                },
                {
                  id: 'I4EC6M3mt9',
                  type: 'paragraph',
                  data: {
                    text:
                      '<span class="field-green">GUNPA</span>  <span class="field-green">RIVEX</span> '
                  }
                },
                {
                  id: 'vNX4O06fey',
                  type: 'paragraph',
                  data: {
                    text:
                      '<span class="field-green">AMSEV</span>  <span class="field-green">VALDI</span> '
                  }
                }
              ],
              version: '2.24.3'
            }
          },
          {
            factory: column,
            content: {
              time: 1654724165038,
              blocks: [
                {
                  id: 'jMClBSWIWb',
                  type: 'paragraph',
                  data: {
                    text: 'SE EDUU'
                  }
                },
                {
                  id: 'VzX0ttWRgc',
                  type: 'paragraph',
                  data: {
                    text: 'SE EDWW'
                  }
                }
              ],
              version: '2.24.3'
            }
          }
        ]
      }
    ]
  }
]

function addWindow () {
  inputDialog
    .create({
      message: 'Fönsterrubrik:'
    })
    .show()
    .then(dialogResult => {
      if (dialogResult.button === 'ok') {
        const newWindow = groupWindow.create({
          title: dialogResult.result
        })
        mainDesktop.append(newWindow)
      }
    })
}

function defaultCreate (w, parent) {
  const newWindow = w.factory.create(w)
  parent.append(newWindow)
  w?.children?.forEach(ww => defaultCreate(ww, newWindow))
}

document.addEventListener('DOMContentLoaded', () => {
  mainDesktop.element.appendTo('body')

  defaultWindows.forEach(w => defaultCreate(w, mainDesktop))
})
