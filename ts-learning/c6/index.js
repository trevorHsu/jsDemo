// 泛型 
// 在定义函数或是类时，若遇到类型不明确时，可使用泛型
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
function fn(a) {
    return a;
}
var a1 = fn(10);
var a2 = fn('a2');
var a3 = fn('a3'); // 指定泛型：当类型推断过程太复杂，ts推断不出时，可直接指定
console.log(a1, a2, a3);
function setPerson(a) {
    return a.name;
}
var p = setPerson({ name: 'trevor' });
console.log(p);
var MyCls = /** @class */ (function () {
    function MyCls(name) {
        this.name = name;
    }
    return MyCls;
}());
// 接口 //
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super.call(this) || this;
    }
    return Dog;
}(Animal));
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var obj = {};
var dog = new Dog();
var animal = new Animal();
obj[100] = animal;
obj['200'] = dog;
console.log(obj);
var add = function (a, b) {
    return a + b;
};
var compound = function (a, b) {
    return 'A';
};
var res = compound('a', 1);
var o = {
    prop1: 1,
    prop2: 'a'
};
