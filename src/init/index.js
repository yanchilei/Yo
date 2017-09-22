import Observe from '../observe'
import initData from './initData'
import initMethods from './initMethods'
import _proxy from './proxy'
import initDirective from '../directive'

let uid = 0

var _initMixin = function(Yo){

  initData(Yo)
  initMethods(Yo)
  _proxy(Yo)
  initDirective(Yo)

  Yo.prototype._init = function(options){
    this.uid = uid++
    this.$el = options.el
  	this.$data = options.data
  	this.$methods = options.methods
    this.$template = options.template

  	new Observe(this.$data)

    this.initData()
    this.initMethods()
    this.initDirective()
  }


}

export default _initMixin
