

var Yo = function(options){

	this.$el = options.el

	this.$data = options.data

	this.$methods = options.methods

}

Yo.prototype.observeData = function(){
	this.walk(this.$data)
}

Yo.prototype.walk = function(obj){
	console.log("walk: ", obj)
	let val
	for(let key in obj){
		if(obj.hasOwnProperty(key)){
			val = obj[key]
			if(typeof val === 'object'){
				this.walk(val)
			}else{
				this.convert.apply(obj, [key, val])
			}
		}
	}
}

Yo.prototype.convert = function(key, val){
	console.log("convert ", key, ' ', val)
	Object.defineProperty(this, key, {
		enumerable:true,
		configurable:true,
		get:function(){
			console.log("访问",key," : ",val)
			return val
		},
		set:function(newVal){
			if(newVal === val) return
			console.log('设置新的'+key+' : '+newVal)
			val = newVal
		}
	})
}

var app = new Yo({
	el:'#app',
	data:{
		name:'YcC',
		outterlook:'handsome',
		more:{
			love:'linzhiling',
			hate:'papper'
		}
	}
})

app.observeData()

window.app = app

console.log('编译成功啦')
console.log(app)
