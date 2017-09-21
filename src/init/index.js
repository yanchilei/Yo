import Observe from '../observe'

var _initMixin = function(Yo){

  Yo.prototype._init = function(options){
    this.$el = options.el
  	this.$data = options.data
  	this.$methods = options.methods

  	new Observe(this.$data)
  }

}

export default _initMixin
