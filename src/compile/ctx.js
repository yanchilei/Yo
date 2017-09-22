import state from './state'

var ctx = function(){
  this.context = []
  this.stateMachine = ''
  this.dom = document
  this.vdom
  this.position
  this.root = true
}

ctx.prototype.read = function(sig){
  //开始收集标签名
  if(sig === '<'){
    //或填充节点
    if(this.stateMachine === 'node'){
      this.position.innerText = this.context.join('')
    }
    this.setStateMachine('tagName')
    this.context = []
  }

  //创造元素
  else if(this.stateMachine === 'tagName' && (sig === ' ' || sig === '>')){
    this.grow(this.context.join(''))
    if(this.root){
      this.vdom = this.position
      this.root = false
    }
    this.context = []
    this.setStateMachine('node')
  }

  //跳出元素
  else if(this.stateMachine === 'closeTag' && sig === '>'){
    this.jumpOut()
  }

  //准备跳出元素
  else if(sig === '/'){
    this.setStateMachine('closeTag')
  }

  //日常遍历
  else{
    this.context.push(sig)
  }
}

ctx.prototype.grow = function(tag){
  if(!this.position){
    this.position = this.dom.createElement(tag)
  }else{
    var el = this.dom.createElement(tag)
    this.position = this.position.appendChild(el)
  }
}

ctx.prototype.jumpOut = function(){
  if(this.position.parentNode){
    this.position = this.position.parentNode
  }
}

ctx.prototype.setStateMachine = function(state){
  this.stateMachine = state
}


export default ctx
