import 'babel-polyfill'

let func = () => {}
const NUM = 45
let arr = [1,23,4,4]
let b = arr.map(x => x * 2)
let c = [...new Set(b)]
console.log(c)

function* g() {
  yield 'hello g func'
}

const gnext = g()
console.log('from generator->', gnext.next())
