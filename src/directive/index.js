import compile from '../compile'

var initDirective = function(Yo){

  Yo.prototype.initDirective = function(){
    this._doc = document
    this._root = document.querySelector(this.el)
    if(!this._root){
      conosle.error("no bind");
    }
    var vdom = compile(this.templa)
    vdom = vdom.vdom
  }

}
