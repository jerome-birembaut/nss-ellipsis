class NSSEllipsis {
  static update(element, lineMax = 2, _precision = ' ', _text = null) {
    if (_precision !== NSSEllipsis.WORD_PRECISION && _precision !== NSSEllipsis.LETTER_PRECISION) {
      _precision = NSSEllipsis.WORD_PRECISION
    }
    _text =  (_text != null) ? _text : element.innerHTML
    const txt = _text.replace(/(\r\n\t|\n|\r\t)/gm," ").replace(/  +/g, ' ').split(_precision)
    if (element.textInit == undefined) {
      element.textInit = txt
    }
    element.innerHTML = 'a'
    const lineHeight = element.getBoundingClientRect().height
    element.innerHTML = ''
    let changeCount = 0
    let index = 0
    let lastHeight = 0
    let currHeight
    let prevText = ''
    let tempText = ''
    while (changeCount < lineMax + 1) {
      prevText = element.innerHTML
      element.innerHTML += element.textInit[index] + _precision
      //console.log(element.innerHTML)
      tempText = element.innerHTML
      element.innerHTML = tempText.substring(0, tempText.length-1)
      element.innerHTML = element.innerHTML.replace(/\s+$/, '') + '...'
      currHeight = element.getBoundingClientRect().height

      element.innerHTML = tempText
      if (currHeight !== lastHeight) {
        lastHeight = currHeight
        changeCount = parseInt(currHeight / lineHeight)
        if (changeCount > lineMax) {
          element.innerHTML = prevText.substring(0, prevText.length-1)
          element.innerHTML = element.innerHTML.replace(/\s+$/, '') + '...'
          lastHeight = currHeight
          currHeight = element.getBoundingClientRect().height
          // if adding ... add a new line
          if(currHeight !== lastHeight) {
            const ar = prevText.split(_precision)
            element.innerHTML= ''
            let changeCount2 = 0
            lastHeight = 0
            for(let i = 0; i < ar.length-1; i++) {
              prevText = element.innerHTML
              element.innerHTML += ar[i] + _precision
              currHeight = element.getBoundingClientRect().height
              if (currHeight !== lastHeight) {
                changeCount2 ++
              }
              lastHeight = currHeight
              if (changeCount2 > lineMax+1) {
                element.innerHTML = prevText
              }
            }
            prevText = element.innerHTML
            currHeight = element.getBoundingClientRect().height
            element.innerHTML = prevText.substring(0, prevText.length-1)
            element.innerHTML = element.innerHTML.replace(/\s+$/, '') + '...'
            if (currHeight !== element.getBoundingClientRect().height && changeCount2 > lineMax-1) {
              element.innerHTML = prevText
            }
          }
        }
      }
      index ++
      if (index > element.textInit.length-1) {
        changeCount = lineMax + 2
      }
    }
  }
}
NSSEllipsis.WORD_PRECISION = ' '
NSSEllipsis.LETTER_PRECISION = ''
export default NSSEllipsis