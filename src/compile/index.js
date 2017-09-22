import ctx from './ctx'

var compile = function(html){
  this.html = html
  this.ctx = new ctx()
  this.compile()
}

compile.prototype.compile = function(){
  for(let i=0,l=this.html.length; i<l; i++){
    this.ctx.read(this.html[i])
  }
  return this.ctx.vdom
}




export default compile
