import compile from '../compile'

var initDirective = function(Yo){

  Yo.prototype.initDirective = function(){
    this._doc = document
    this._root = document.querySelector(this.$el)
    if(!this._root){
      console.error("no bind");
    }
    var c = new compile(this.$template)
    this._root.appendChild(c.ctx.vdom)
  }

}

export default initDirective
