// *  --- This is type anotation
// when we manually asign a data type to a variable
let username: string;
// here we declared username to type string and did not asign it a value
username = 'xanity';
// here we asigned a string to username and if we tried to asign another value that is not a string this would yield an error

// * --- Type inferance
// typescriipt will infer the type of a variable when we asign a value to it

let favNumber = 4;

// if we try to asign a string or any other data type we will get an error
console.log(typeof favNumber); // number

// * --- WHERE ESLE CAN WE ASIGN TYPES ****
//  We can asign types to function parameters

const add = (x: number, y: number) => {
  return x + y;
};

add(2, 3); // output: 5
// Doing this ensures that we pass in the correct parameters to out functions

// * ---

// * ---

// * --- Union type

let something: string | number;
something = 1;
something = 'hello';
// we can tell ts hey this variable will be a string or number

// * ---

// * ---

// * --- ARRAY

// when we create arrays and assign a value to them typescript infers the type
// Example
const hobbies = ['Coding', 'Gym', 'Jiu-Jitsu'];
console.log(hobbies);
// this is an array of strings if we tried to push a number or a boolean it will get sad and give us an error
// console logging to avoid ts un used variable error it will cry LOL

// We can manually asign it too
let typedHobbies: string[];
typedHobbies = ['Coding', 'Gym', 'Jiu-Jitsu'];
// This is the same when we gave our variables a type

// We can also do this
let things: (string | number)[]; // were using union type here
// Make suure to wrap union types in ()
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

// * ---

// * ---

// * --- Objects

// So when dealing with object asigning types looks a lil crazy but its okay

// const user: {} we gave it a type of object we havent asigned properties yet
const user: {
  name: string;
  age: number;
  hobbies: (string | number)[];
  status: {
    hasGirlfriend: boolean;
    id: number;
  };
} = {
  name: 'Xanity',
  age: 24,
  hobbies: ['Coding', 'Gym', 4],
  status: {
    hasGirlfriend: !true,
    id: 4,
  },
};

console.log(user.status.hasGirlfriend); // :')

// Told you it looks crazy but if you notice all were doing is declaring all the properties and their data type that were going to use
// * Type your own object and add some other properties and maybe throw a tuple in there

// Also
let somethingElse: {} = '';
// All this means is that we expect any value thats not undefined or null
somethingElse = '';
somethingElse = 4;
somethingElse = {};
somethingElse = '243243';

// This syntax is not related to object types

// HOW TO DECLARE A OBJECT WHEN YOU DONT KNOW WHAT KEYS AND VALUES THEY WILL HAVE

let data: Record<string, number | string>; // Record is a generic type

// *** This is saying hey this is a object with strings as keys and the values can be of type number or strings
data = {
  ligma: 'insert joke here',
  favNumber: 4,
};

// * ---

// * ---

// * --- ENUMS
