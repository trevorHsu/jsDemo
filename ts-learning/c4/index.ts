// 静态属性 静态方法
class Person {
  readonly name: string = 'person name'
  age: number
  static clsType: string = 'person'

  constructor(age: number) {
    this.age = age
  }


  static sayMyCls() {
    return Person.clsType
  }

  getAge() {
    return this.age
  }
}

class Male extends Person {
  constructor(age: number) {
    super(age)
  }
  static gender: string = 'male'
}

let p1 = new Male(14)

console.log(p1.getAge())
console.log(Male.gender)



// 抽象类
abstract class Animal {
  name: string

  constructor(name: string) {
    this.name = name
  }

  abstract say(): void
}

class Cat extends Animal {
  constructor(name) {
    super(name)
    this.name = name
  }

  say() {
    console.log('i am a cat called kitty')
  }
}

let kitty = new Cat('kitty')
kitty.say()



// 接口
interface myInterface { // 可重复声明
  name: string,
  age: number
}

interface myInterface {
  gender: string
}

let obj:myInterface

obj = {
  name: 'trevor',
  age: 12,
  gender: 'male'
}


interface myInterface2 {
  name: string,
  sayHello(): void
}

class MyInterfaceCls implements myInterface2 {
  name: string
  constructor(name: string) {
    this.name = name
  }

  sayHello() {
    console.log('hello ' + this.name)
  }
}

let myInter = new MyInterfaceCls('trevor')
myInter.sayHello()



