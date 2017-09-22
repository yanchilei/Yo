import Observe from '../observe'
import initData from './initData'
import initMethods from './initMethods'
import _proxy from './proxy'

let uid = 0

var _initMixin = function(Yo){

  initData(Yo)
  initMethods(Yo)
  _proxy(Yo)

  Yo.prototype._init = function(options){
    this.uid = uid++
    this.$el = options.el
  	this.$data = options.data
  	this.$methods = options.methods

  	new Observe(this.$data)

    this.initData()
    this.initMethods()
  }


}

export default _initMixin
