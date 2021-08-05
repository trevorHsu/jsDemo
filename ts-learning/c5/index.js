// public 公共属性，默认的修饰符
// private 私有属性，只能在类内部修改
// protected 受保护的属性  只能在当前类及其子类中访问
var Person = /** @class */ (function () {
    function Person(_name, _age) {
        this._name = _name;
        this._age = _age;
        this._id = Math.floor(Math.random() * 1000);
    }
    // get name() {
    //   console.log('you are getting name')
    //   return this._name
    // }
    // set name(newVal: string) {
    //   this._name = newVal
    // }
    Person.prototype.sayHello = function () {
        console.log('hello ' + this._name);
    };
    return Person;
}());
var trevor = new Person('trevor', 14);
// console.log('name', trevor.name)
trevor.sayHello();
