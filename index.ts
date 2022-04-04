// type
// Number string boolean array object

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

class Person {
  id: number;
  name: string;
  //200      brad
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  generate() {
    console.log('Hi this is from person class');
  }
}

const p1 = new Person(100, 'John');
console.log(p1.id);
p1.generate();

class Employee extends Person {
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
  }
}

const e1 = new Employee(200, 'brad', 'developer');
e1.generate();
