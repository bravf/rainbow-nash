function isArray (o){
  return Object.prototype.toString.call(o) === '[object Array]'
}
function isObject (o) {
  return Object.prototype.toString.call(o) === '[object Object]'
}

function hasChildren(obj){
  return isArray(obj.children) && obj.children.length > 0
}

function isChildren(obj){
  return isArray(obj) && obj.length > 0
}

function inArray(obj, objList){
  if (!Array.isArray(objList)){
    return false
  }
  return objList.indexOf(obj) !== -1
}

function idxArray(val, key, objList){
  for (var i=0; i<objList.length; i++){
    if (objList[i][key] === val){
      return i
    }
  }
  return -1
}

function deepClone(obj) {
  if (obj === undefined){
    return undefined
  }
  return JSON.parse(JSON.stringify(obj))
}

function getScrollWidth(){
  var outer = document.createElement("div")
  outer.style.visibility = "hidden"
  outer.style.width = "100px"
  outer.style.msOverflowStyle = "scrollbar" // needed for WinJS apps

  document.body.appendChild(outer)

  var widthNoScroll = outer.offsetWidth
  // force scrollbars
  outer.style.overflow = "scroll"

  // add innerdiv
  var inner = document.createElement("div")
  inner.style.width = "100%"
  outer.appendChild(inner)

  var widthWithScroll = inner.offsetWidth

  // remove divs
  outer.parentNode.removeChild(outer)
  return widthNoScroll - widthWithScroll
}

function globalClick(exclude, callback){
  var func = _=>{
    var $$target = _.target
    
    while ($$target.parentNode != null){
      $$target = $$target.parentNode

      if ($$target === exclude){
        return false
      }
    }

    try{
      callback()
    }
    catch (ex){
      console.error(ex)
    }
  }

  // pc 端
  window.addEventListener('click', _=>{
    func(_)
  })
}

function getTextWidth(text, font){
  var canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"))
  var context = canvas.getContext("2d")
  context.font = font
  var metrics = context.measureText(text)
  return metrics.width
}

function paddingZero(me, len){
  me = me.toString()

  if (me.length >= len){
    return me 
  }

  var arr = []
  arr.length = len - me.length + 1

  return arr.join('0') + me
}

function isdef(o){
  return o !== undefined
}

function isVueNodeType (node, ctorTag) {
  if (node && node.$options && (node.$options._componentTag === ctorTag) ){
    return true
  }
  return false
}

export {
  isArray,
  isObject,
  hasChildren,
  isChildren,
  inArray,
  idxArray,
  getScrollWidth,
  globalClick,
  getTextWidth,
  paddingZero,
  deepClone,
  isdef,
  isVueNodeType,
}