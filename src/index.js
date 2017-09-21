import Observe from './observe'
import _initMixin from './init'
import activeArray from './observe/active-array'

var Yo = function(options){
	this._init(options)
}

_initMixin(Yo)

var app = new Yo({
	el:'#app',
	data:{
		name:'YcC',
		outterlook:'handsome',
		long:[1, 3, 5]
	}
})

window.app = app
window.activeArray = activeArray

console.log('编译成功啦')
console.log(app)
