var initData = function(Yo){
  Yo.prototype.initData = function(){
    var data = this.$data
    var keys = Object.keys(data)
    var i, key
    i = keys.length
    while(i--){
      key = keys[i]
      this._proxy(key, '$data')
    }
  }
}

export default initData
