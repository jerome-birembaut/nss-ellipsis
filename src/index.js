export default class NSSEllipsis {
  static update(element, lineMax = 2, _text = null) {
    const txt =  (_text != null) ? _text.split(' ') : element.innerText.split(' ')
    if (element.textInit == undefined) {
      element.textInit = txt
    }
    element.innerHTML = ''
    let changeCount = 0
    let index = 0
    let lastHeight = 0
    let currHeight
    let prevText = ''
    let tempText = ''
    while (changeCount < lineMax + 1) {
      prevText = element.innerHTML
      element.innerHTML += element.textInit[index] + ' '
      tempText = element.innerHTML
      element.innerHTML += '...'
      currHeight = element.getBoundingClientRect().height
      element.innerHTML = tempText
      if (currHeight !== lastHeight) {
        lastHeight = currHeight
        changeCount ++
        if (changeCount > lineMax) {
          element.innerHTML = prevText + '...'
        }
      }
      index ++
      if (index > element.textInit.length-1) {
        changeCount = lineMax + 2
      }
    }
  }
}
