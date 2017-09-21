const aryMethods = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse']
const activeArray = []

aryMethods.forEach(method => {

  //原生的Array方法
  let original = Array.prototype[method]

  //将上述Array方法封装在activeArray对象里
  activeArray[method] = function(){
    console.log('触发'+method+'方法')
    return original.apply(this, arguments)
  }
})


export default activeArray
