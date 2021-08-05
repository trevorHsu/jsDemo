var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 静态属性 静态方法
var Person = /** @class */ (function () {
    function Person(age) {
        this.name = 'person name';
        this.age = age;
    }
    Person.sayMyCls = function () {
        return Person.clsType;
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    Person.clsType = 'person';
    return Person;
}());
var Male = /** @class */ (function (_super) {
    __extends(Male, _super);
    function Male(age) {
        return _super.call(this, age) || this;
    }
    Male.gender = 'male';
    return Male;
}(Person));
var p1 = new Male(14);
console.log(p1.getAge());
console.log(Male.gender);
// 抽象类
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        return _this;
    }
    Cat.prototype.say = function () {
        console.log('i am a cat called kitty');
    };
    return Cat;
}(Animal));
var kitty = new Cat('kitty');
kitty.say();
var obj;
obj = {
    name: 'trevor',
    age: 12,
    gender: 'male'
};
var MyInterfaceCls = /** @class */ (function () {
    function MyInterfaceCls(name) {
        this.name = name;
    }
    MyInterfaceCls.prototype.sayHello = function () {
        console.log('hello ' + this.name);
    };
    return MyInterfaceCls;
}());
var myInter = new MyInterfaceCls('trevor');
myInter.sayHello();
