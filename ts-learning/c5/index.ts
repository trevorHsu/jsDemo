// public 公共属性，默认的修饰符
// private 私有属性，只能在类内部修改
// protected 受保护的属性  只能在当前类及其子类中访问
class Person {
  protected _id: number = Math.floor(Math.random() * 1000)

  constructor(private _name: string, private _age: number) {}

  // get name() {
  //   console.log('you are getting name')
  //   return this._name
  // }
  // set name(newVal: string) {
  //   this._name = newVal
  // }

  sayHello() {
    console.log('hello ' + this._name)
  }
}

let trevor = new Person('trevor', 14)

// console.log('name', trevor.name)
trevor.sayHello()
