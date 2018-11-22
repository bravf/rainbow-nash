var getParent = (instance, ctorTag) => {
  while ( (instance = instance.$parent) ) {
    if (instance.$options._componentTag === ctorTag){
      return instance
    }
  }

  return null
}

export {
  getParent
}