var initMethods = function(Yo){
  Yo.prototype.initMethods = function(){
    var methods = this.$methods
    var keys = Object.keys(methods)
    var i,key
    i = keys.length
    while(i--){
      key = keys[i]
      this._proxy(key, '$methods')
    }
  }
}

export default initMethods
