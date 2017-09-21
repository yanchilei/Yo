import activeArray from './active-array'

var Observe = function(data){
  this.observeData(data)
}

Observe.prototype.observeData = function(data){
	this.walk(data)
}

Observe.prototype.walk = function(obj){
	console.log("walk: ", obj)
	let val
	for(let key in obj){
		if(obj.hasOwnProperty(key)){
			val = obj[key]
			if(typeof val === 'object'){
        if(Object.prototype.toString.call(val) === '[object Array]'){
          //如果是数组，则为其挂载变异的数组方法
          if(val.__proto__){val.__proto__ = activeArray}
          else{
            for(let method in activeArray){
              val[method] = activeArray.method
            }
          }
        }
				this.walk(val)
			}else{
				this.convert(obj, key, val)
			}
		}
	}
}

Observe.prototype.convert = function(ctx, key, val){
	Object.defineProperty(ctx, key, {
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

export default Observe
