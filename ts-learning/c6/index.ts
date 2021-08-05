// 泛型 
// 在定义函数或是类时，若遇到类型不明确时，可使用泛型


function  fn<T, K>(a: T): T {
  return a
}

let a1 = fn(10)
let a2 = fn('a2')
let a3 = fn<string, number>('a3') // 指定泛型：当类型推断过程太复杂，ts推断不出时，可直接指定

console.log(a1, a2, a3)


/////////////////////////////////
interface Inter {
  name: string
}

function setPerson<T extends Inter>(a: T): string {
  return a.name
}

let p = setPerson({ name: 'trevor' })
console.log(p)


class MyCls<T> {
  constructor(public name: T) {

  }
}






// 接口 //


class Animal {
  name: string
}

class Dog extends Animal {
  name: string
  constructor() {
    super()
  }
}

class Person {
  name: string
}

interface notOkay {
  [x:number]: Animal
  [x:string]: Dog
}

let obj:notOkay = {}

let dog = new Dog()
let animal = new Animal()

obj[100] = animal
obj['200'] = dog

console.log(obj)





// 函数接口
interface addInter {
  (a: number, b:number): number
}

const add:addInter = function(a:number, b:number) {
  return a + b
}


// 类接口
interface ClockInterface {
  currentTime: Date
}


// 泛型接口
interface Compound { // 函数泛型接口
  <T, V>(a: T, b: V): string
}

const compound:Compound = function<T, V> (a: T, b: V) {
  return 'A'
}
let res:string = compound('a', 1)


interface Compound2<T, V> {
  prop1: T,
  prop2: V
}

let o:Compound2<number, string> = {
  prop1: 1,
  prop2: 'a'
}
