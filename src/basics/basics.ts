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

// * ARRAY
