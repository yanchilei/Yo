var ctx = function(){
  this.context = []
  this.stateMachine = ''
  this.dom = document
  this.vdom
  this.position
  this.root = true
}

ctx.prototype.read = function(sig){

  //编译停止
  if(this.stateMachine === 'stop'){
    this.context = []
    return
  }

  //开始收集标签名
  else if(sig === '<'){
    //或填充节点
    if(this.stateMachine === 'node'){
      this.position.innerText = this.context.join('').replace(/\n/g,'')
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
    this.context = []
  }

  //准备跳出元素
  else if(sig === '/'){
    this.setStateMachine('closeTag')
    this.context = []
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
  }else{
    this.setStateMachine('stop')
  }
}

ctx.prototype.setStateMachine = function(state){
  this.stateMachine = state
}


export default ctx
