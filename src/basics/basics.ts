// *  --- This is type anotation
// when we manually asign a data type to a variable
let username: string;
// here we declared username to type string and did not asign it a value
username = 'xanity';
// here we asigned a string to username and if we tried to asign another value that is not a string this would yield an error

// * --- Type inferance
// typescriipt will infer the type of a variable when we asign a value to it

let favNumber = 4;

// id we try to asign a string or anyother data type we will get an error
console.log(typeof favNumber); // number

// * --- WHERE ESLE CAN WE ASIGN TYPES ****
//  We can asign types to function parameters

const add = (x: number, y: number) => {
  return x + y;
};

add(2, 3); // output: 5

// Doing this ensures that we pass in the correct parameters to out functions

// * --- Union type
let something: string | number;
something = 1;
something = 'hello';
// we can tell ts hey this variable will be a string or number

// * --- ARRAY
// when we create arrays and assign a value to them typescript infers the type
// Example
const hobbies = ['Coding', 'Gym', 'Jiu-Jitsu'];
console.log(hobbies);
// this is an array of strings if we tried to push a number or a boolean
// console logging to avoid ts used variable error LMAO

// we will get an error because its basically saying
let typedHobbies: string[];
typedHobbies = ['Coding', 'Gym', 'Jiu-Jitsu'];
// This is the same when we gave our variables a type

// We can also do this
let things: (string | number)[]; // were using union type here
things = ['random', 43];

// * --- WE CAN ALSO DO THIS ( GENERIC TYPES ) Later we'll dive deaper ;) LMAO ill stop now
// This is what it looks like
let users: Array<string | number>;
users = ['name', 4];

// * --- Tuples ARRAY of Fixed length
// we can tell ts yo can you hook me up with an array that has 2 nums in it
let numbers: [number, number];
numbers = [1, 3];
// numbers = [1, 3, 4]; This will give an error
// Play around with this and maybe tou want the first value to be nums and the second to be a boolean try that shit out
