var state = function(element){
  this.currentPosition = element
  this.focusDic = ['meta', 'content']
}

state.prototype.setCurrentPosition = function(element){
  this.currentPosition = element
}

state.prototype.setFocus = function(flag){
  if(flag in this.focusDic){
    this.focus = flag
  }else{
    console.error("no such state")
  }
}

export default state
