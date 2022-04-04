// type
// Number string boolean array object
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
// advantage
// More Robust
// easily spot bugs
// more Readabilty
// disadvantage
//  we have to learn
// not true static typing
//Basic Types
// let id: number = 3;
// class Person {
//   generate() {
//     console.log('this is a generate function from person');
//   }
// }
// let p = new Person();
// p.generate();
// let num: number = 5;
// let course: string = 'angular course';
// let isPublish: boolean = true;
// //arrays
// let ids: number[] = [1, 23, 45, 7];
// let arr: any = [1, true, 'Angular course'];
// //Typles
// let person: [number, boolean, string] = [1, true, 'Angular course'];
// let employee: [number, string][];
// employee = [[1, 'typescript'], [1, 'typescript'], [1, 'typescript']];
// // Union
// let pid : string | number = 101;
// pid = '101'
// enum Direction {
//   up = 1,
//   down,
//   left,
//   right,
// }
// console.log(Direction.down);
//objects
// type User = {
//   id: number;
//   name?: string;
// };
// const user: User = {
//   id: 1,
//   // name: 'Job'
// };
//Type Asserton
// let cid: any = 1;
// let customerId = cid as number
// let customerId = <number>cid
//function
// function addNum(x: number, y?: number, xx : string) : number {
//   return x + y;
// }
// console.log(addNum(10));
// function addNums() : void {
//   console.log('this is a add funtcion');
// }
// interface UserInterface {
//   readonly id: number;
//   name?: string;
// }
// const users: UserInterface = {
//   id: 101,
//   name: 'brad',
// };
// users.id = 5
//classess
var Person = /** @class */ (function () {
    //200      brad
    function Person(id, name) {
        this.id = id;
        this.name = name;
    }
    Person.prototype.generate = function () {
        console.log('Hi this is from person class');
    };
    return Person;
}());
var p1 = new Person(100, 'John');
console.log(p1.id);
p1.generate();
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id, name, position) {
        return _super.call(this, id, name) || this;
    }
    return Employee;
}(Person));
var e1 = new Employee(200, 'brad', 'developer');
e1.generate();
