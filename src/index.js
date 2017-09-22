import Observe from './observe'
import _initMixin from './init'
import activeArray from './observe/active-array'

import compile from './compile'
import ctx from './compile/ctx'

var Yo = function(options){
	this._init(options)
}

_initMixin(Yo)

var app = new Yo({
	el:'body',
	data:{
		name:'YcC',
		outterlook:'handsome',
		long:[1, 3, 5],
		more:{
			love:'dengziqi',
			hate:'papper'
		}
	},
	methods:{
		state:function(){
			console.log('My name is ', this.name)
		}
	},
	template:`
		<div>Hello World</div>
	`
})


window.app = app
window.activeArray = activeArray
window.compile = compile
window.ctx = ctx

console.log('编译成功啦')
console.log(app)
