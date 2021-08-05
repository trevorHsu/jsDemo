console.log('hello')
// ts 基本类型

let a: number

function add(a:number, b:number):number {
  return a + b
}

let result = add(1, 2)

let b: 10

// 联合类型
let v: number | string
let v2: number & string // 即是number 又是string
let v3: {name: string} & {age: number}

v3 = { name: 'tt', age: 11 }


// any
let a1: any
let a2: string

a1 = 6
a2 = a1
//

// unkown类型的赋值 //////////////////////
let a3: unknown
let a4: string

a3 = 'aa'

// 法1 typeof
if (typeof a3 === 'string') {
  a4 = a3
}
// 法2 类型断言
a4 = a3 as string
a4 = <string>a3

//////////////////////////////////

// void: 空值    never: 不能有任何值，用于抛出错误
function fn1(): void {
  return null
}

function fn2(): never {
  throw new Error()
}



// object
let obj1: object
let obj2: {name: string, age?: number}
let obj3: {name: string, [prop: string]: any} // prop可以取为任意名字

obj2 = {name: 'test name', age: 12}
obj2 = {name: 'test name'}

obj3 = { name: 'test', gender: 'male' }


// 函数变量声明
let fn: (a: number, b: number) => number

fn = function(n1: number, n2: number) {
  return n1 + n2
}

// 数组声明 ////////////////
let arr: string[]
arr = ['a', 'b']

let arr2: Array<number|string>
arr2 = [1, 2, 'a']
//////////////////////////


// 元组类型：固定长度的数组
let tuple1: [string, string]
tuple1 = ['a', 'b']


// 枚举类型
enum Gender{
  male, female
}

let person: {name: string, gender: Gender}

person = { name: 'ttt', gender: Gender.male }


// 类型别名
type myType = 1|2|3|4

let k: myType
k = 4



