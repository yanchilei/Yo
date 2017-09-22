var _proxy = function(Yo){
  Yo.prototype._proxy = function(key, obj){
    Object.defineProperty(this, key, {
      enumerable:true,
      configurable:true,
      get:function(){
        return this[obj][key]
      },
      set:function(newVal){
        this[obj][key] = newVal
      }
    })
  }
}

export default _proxy
