import './app.css'
import { window } from './js/window'
import { groupWindow } from './js/groupWindow'
import { desktop } from './js/desktop'
import { button } from './js/button'
import { inputDialog } from './js/inputDialog'
import { section } from './js/section'
import { column } from './js/column'
import Alpine from 'alpinejs'

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
    width: 600,
    height: 900,
    factory: groupWindow,
    content: '',
    children: [
      {
        title: 'MIL',
        factory: section,
        freePos: { x: 360, y: 350, w: 410, h: 150 },
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
        freePos: { x: 2, y: 230, w: 340, h: 280 },
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
                    text: 'EPGD: OGDAV'
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
        freePos: { x: 2, y: 2, w: 360, h: 220 },
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
        freePos: { x: 380, y: 2, w: 570, h: 340 },
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
                    text: 'SE EPWW'
                  }
                }
              ],
              version: '2.24.3'
            }
          }
        ]
      }
    ]
  },
  {
    title: 'Exempel TMA',
    position: { x: 700, y: 150 },
    width: 400,
    height: 900,
    factory: groupWindow,
    content: '',
    children: [
      {
        title: 'ESSA',
        factory: section,
        freePos: { x: 260, y: 2, w: 220, h: 170 },
        children: [
          {
            factory: column,
            content: {
              time: 1654844759898,
              blocks: [
                {
                  id: 'YDGwK1IFk3',
                  type: 'paragraph',
                  data: {
                    text: '2.5/3.5'
                  }
                }
              ],
              version: '2.24.3'
            }
          }
        ]
      },
      {
        title: 'ESSB',
        factory: section,
        freePos: { x: 260, y: 180, w: 220, h: 160 },
        children: [
          {
            factory: column,
            content: {
              time: 1654844794814,
              blocks: [
                {
                  id: 'jgBhoGFRQ2',
                  type: 'paragraph',
                  data: {
                    text: 'TRS SID<br>'
                  }
                }
              ],
              version: '2.24.3'
            }
          }
        ]
      },
      {
        title: 'Sektorer',
        factory: section,
        freePos: { x: 2, y: 2, w: 250, h: 190 },
        children: [
          {
            factory: column,
            content: {
              time: 1654844409678,
              blocks: [
                {
                  id: 'kMgr5k4j17',
                  type: 'paragraph',
                  data: {
                    text:
                      '<span class="field-bold">2:</span>  <br><span class="field-bold">4:</span>  EÖH<br><span class="field-bold">6:</span> <br><span class="field-bold">8:</span> '
                  }
                }
              ],
              version: '2.24.3'
            }
          }
        ]
      },
      {
        title: 'Vind',
        factory: section,
        freePos: { x: 2, y: 200, w: 250, h: 140 },
        children: [
          {
            factory: column,
            content: {
              time: 1654844100603,
              blocks: [
                {
                  id: 'E23G-duMF1',
                  type: 'paragraph',
                  data: {
                    text: '5.0: 210/35<br>2.5: 230/20<br>1.5: 235/5<br>'
                  }
                }
              ],
              version: '2.24.3'
            }
          }
        ]
      },
      {
        title: 'Övrigt',
        factory: section,
        freePos: { x: 2, y: 350, w: 480, h: 120 },
        children: [
          {
            factory: column,
            content: {}
          }
        ]
      }
    ]
  },
  {
    title: 'Exempel Y',
    position: { x: 1150, y: 150 },
    width: 400,
    height: 800,
    factory: groupWindow,
    content: '',
    children: [
      {
        title: '1',
        factory: section,
        children: [
          {
            factory: column,
            content: {
              time: 1654844934072,
              blocks: [
                {
                  id: 'YDGwK1IFk3',
                  type: 'paragraph',
                  data: {
                    text: 'MICOS ALS<br>DEMIR fr ÖKC 285+<br>'
                  }
                }
              ],
              version: '2.24.3'
            }
          }
        ]
      },
      {
        title: '2',
        factory: section,
        children: [
          {
            factory: column,
            content: {}
          }
        ]
      },
      {
        title: '6',
        factory: section,
        children: [
          {
            factory: column,
            content: {
              time: 1654845084811,
              blocks: [
                {
                  id: 'ecVfhjKLVX',
                  type: 'paragraph',
                  data: {
                    text: 'ERNOV MICOS ALS DEMIR<br>SV M1<br>'
                  }
                }
              ],
              version: '2.24.3'
            }
          }
        ]
      },
      {
        title: '7',
        factory: section,
        children: [
          {
            factory: column,
            content: {
              time: 1654845097149,
              blocks: [
                {
                  id: 'GQ9KdTuyt-',
                  type: 'paragraph',
                  data: {
                    text: 'MICOS NORVI/MS500 285+<br>'
                  }
                }
              ],
              version: '2.24.3'
            }
          }
        ]
      },
      {
        title: '9',
        factory: section,
        children: [
          {
            factory: column,
            content: {}
          }
        ]
      },
      {
        title: 'Övrigt',
        factory: section,
        children: [
          {
            factory: column,
            content: {
              time: 1654845107768,
              blocks: [
                {
                  id: 'zEF1nu31jr',
                  type: 'paragraph',
                  data: {
                    text: 'ATIS ESSA U/R<br>'
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
  window.Alpine = Alpine
  Alpine.start()

  mainDesktop.element.appendTo('body')
  defaultWindows.forEach(w => defaultCreate(w, mainDesktop))
})
