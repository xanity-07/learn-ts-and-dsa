- Lecture 1: VARIABLES IN TYPESCRIPT

// let num = 100;
// const str = 'Hello ';
// var hi;

// TYPE ASSIGNMENT & TYPE INFERNCE
// const sum = (num1: number, num2: number): number => {
// return num1 + num2;
// };
// console.log(sum(2, 1));

// OBJECT TYPE
// let person: {
// name: string;
// age: number;
// address: { city: string; country: string };
// } = {
// name: 'john',
// age: 30,
// address: {
// city: '',
// country: '',
// },
// };
// console.log(person);

// person = {
// name: 'mark',
// age: 24,
// address: { city: 'Paterson', country: 'US' },
// };
// console.log(person);

// let person = ['john', 23, 'male', 1000]; // Type number | string
// let person: (string | number)[] = ['john', 23, 'male', 1000]; // Declare Type

// let names = ['josh', 'mark', 'steve']; // Type of string
// let names: string[] = ['josh', 'mark', 'steve']; // declare the Type

// let ages = [1998, 1999, 2000]; // Type of numbers
// let years: number[] = [1998, 1999, 2000]; // Type of numbers

// TUPLES
// - TS tuple is a fixed length ordered collection
// of elements where each element has a specific type
// ---- Fixed Length
// ---- Ordered
// ---- Typed
// let employee = [123, 'john', 2000, true];
// let employee: [number, string, number, boolean] = [123, 'john', 2000, true];
// console.log(employee);

// Enums

// enum Roles {
// ADMIN,
// READ_ONLY,
// WRITE_ONLY,
// READ_WRITE,
// }

// let user = {
// name: 'John',
// age: 20,
// gender: 'male',
// role: Roles.ADMIN,
// };

// if (user.role === Roles.ADMIN) {
// console.log('This user is and admin');
// }

// Union Type
// let user: {
// name: string;
// age: number;
// } | null = null;

// const getUser = () => {
// const username = 'John';
// const userAge = 28;
// user = { name: username, age: userAge };
// return user;
// };

// console.log(getUser());

// const printStatus = (msg: string, code: string | number) => {
// if (typeof code === 'string') {
// console.log(`${msg}. Status code: ${code.trim()}`);
// } else {
// console.log(`${msg}. Status code: ${code}`);
// }
// };

// printStatus('Request was sucessful', 200);
// printStatus('Resource was not found', '404');

// Literal type
// const str = 'Hello, world';
// let one: 'one' = 'one';

// const roleMessage = (role: 'admin' | 'read') => {
// switch (role) {
// case 'admin':
// console.log('User is admin');
// break;
// case 'read':
// console.log('This user has read only permision');
// break;
// default:
// console.log('unknown user permission');
// }
// };

// roleMessage('read');

// Type Alias
// type StringType = string;
// let str: StringType = 'hello';

// type StrOrNum = string | number;

// const printStatus = (msg: string, code: StrOrNum) => {
// if (typeof code === 'string') {
// console.log(`${msg}. Status code: ${code.trim()}`);
// } else {
// console.log(`${msg}. Status code: ${code}`);
// }
// };

// printStatus('Request was sucessful', 200);
// printStatus('Resource was not found', '404');

// type Roles = 'admin' | 'read';

// const roleMessage = (role: Roles) => {
// switch (role) {
// case 'admin':
// console.log('User is admin');
// break;
// case 'read':
// console.log('This user has read only permision');
// break;
// default:
// console.log('unknown user permission');
// }
// };
// type User = {
// firstName: string;
// lastName: string;
// age: number;
// };

// const getFullName = (user: User) => {
// return user.firstName + ' ' + user.lastName;
// };

// const isEligibleForVoting = (user: User) => {
// return user.age >= 18;
// };
// const jake: User = {
// firstName: 'Jake',
// lastName: 'Smith',
// age: 18,
// };
// console.log(getFullName(jake));
// console.log(isEligibleForVoting(jake));

// const add = (x: number, y: number): number => {
// return x + y;
// };

// type User = {
// name: string;
// age: number;
// };
// const intro = (user: User) => {
// console.log(user.name);
// };

// const isEligible = (user: User) => {
// console.log(user.age >= 18);
// };

// let greet: (usr: User) => void;

// greet = intro;

// greet({ name: 'john', age: 20 });

// const btn = document.getElementById('btn')!;
// btn?.addEventListener('click', () => {
// alert('yurr');
// });

// const persons = ['John', 'Smith', 'Kyle'];

// const [john, smith, kyle] = persons;

// console.log(john, smith, kyle);

// class User {
// name: string;
// age: number;
// gender: string;

// constructor(n: string, a: number, g: string) {
// this.name = n;
// this.age = a;
// this.gender = g;
// }
// greetUser(salutation: string) {
// const msg = ` Hello ${salutation} ${this.name}`;
// return msg;
// }
// }

// const user1 = new User('John', 28, 'male');
// const user2 = new User('Jay', 34, 'female');
// const user3 = new User('Mark', 42, 'male');

// console.log(user1, user2, user3);
// console.log(user1.greetUser('Mr'));
// console.log(user2.greetUser('Ms'));
// console.log(user3.greetUser('Mr'));

class Employee {
empName: string;
salary: number;
baseLocation: string;
isEligible: boolean;
hikePercent: number;

constructor(
name: string,
sal: number,
loc: string,
isEligible: boolean,
hike: number
) {
this.empName = name;
this.salary = sal;
this.baseLocation = loc;
this.isEligible = isEligible;
this.hikePercent = hike;
}
}

const employee = new Employee('John Smith', 10000, 'TX', true, 20);

console.log(employee);
