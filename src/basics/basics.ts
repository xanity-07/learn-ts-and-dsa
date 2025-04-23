// // *  --- This is type anotation
// // when we manually asign a data type to a variable
// // let username: string;
// // here we declared username to type string and did not asign it a value
// // username = 'xanity';
// // here we asigned a string to username and if we tried to asign another value that is not a string this would yield an error

// // // * --- Type inferance
// // // typescriipt will infer the type of a variable when we asign a value to it

// // let favNumber = 4;

// // // if we try to asign a string or any other data type we will get an error
// // console.log(typeof favNumber); // number

// // // * --- WHERE ESLE CAN WE ASIGN TYPES ****
// // //  We can asign types to function parameters

// // const add = (x: number, y: number) => {
// //   return x + y;
// // };

// // add(2, 3); // output: 5
// // // Doing this ensures that we pass in the correct parameters to out functions

// // // * ---

// // // * ---

// // // * --- Union type

// // let something: string | number;
// // something = 1;
// // something = 'hello';
// // // we can tell ts hey this variable will be a string or number

// // // * ---

// // // * ---

// // // * --- ARRAY

// // // when we create arrays and assign a value to them typescript infers the type
// // // Example
// // const hobbies = ['Coding', 'Gym', 'Jiu-Jitsu'];
// // console.log(hobbies);
// // // this is an array of strings if we tried to push a number or a boolean it will get sad and give us an error
// // // console logging to avoid ts un used variable error it will cry LOL

// // // We can manually asign it too
// // let typedHobbies: string[];
// // typedHobbies = ['Coding', 'Gym', 'Jiu-Jitsu'];
// // // This is the same when we gave our variables a type

// // // We can also do this
// // let things: (string | number)[]; // were using union type here
// // // Make suure to wrap union types in ()
// // things = ['random', 43];

// // // * --- WE CAN ALSO DO THIS ( GENERIC TYPES ) Later we'll dive deaper ;) LMAO ill stop now
// // // This is what it looks like
// // let users: Array<string | number>;
// // users = ['name', 4];

// // // * --- Tuples ARRAY of Fixed length
// // // we can tell ts yo can you hook me up with an array that has 2 nums in it
// // let numbers: [number, number];
// // numbers = [1, 3];
// // // numbers = [1, 3, 4]; This will give an error
// // // Play around with this and maybe tou want the first value to be nums and the second to be a boolean try that shit out

// // // * ---

// // // * ---

// // // * --- Objects

// // // So when dealing with object asigning types looks a lil crazy but its okay

// // // const user: {} we gave it a type of object we havent asigned properties yet
// // const user: {
// //   name: string;
// //   age: number;
// //   hobbies: (string | number)[];
// //   status: {
// //     hasGirlfriend: boolean;
// //     id: number;
// //   };
// // } = {
// //   name: 'Xanity',
// //   age: 24,
// //   hobbies: ['Coding', 'Gym', 4],
// //   status: {
// //     hasGirlfriend: !true,
// //     id: 4,
// //   },
// // };

// // console.log(user.status.hasGirlfriend); // :')

// // // Told you it looks crazy but if you notice all were doing is declaring all the properties and their data type that were going to use
// // // * Type your own object and add some other properties and maybe throw a tuple in there

// // // Also
// // let somethingElse: {} = '';
// // // All this means is that we expect any value thats not undefined or null
// // somethingElse = '';
// // somethingElse = 4;
// // somethingElse = {};
// // somethingElse = '243243';

// // // This syntax is not related to object types

// // // HOW TO DECLARE A OBJECT WHEN YOU DONT KNOW WHAT KEYS AND VALUES THEY WILL HAVE

// // let data: Record<string, number | string>; // Record is a generic type

// // // *** This is saying hey this is a object with strings as keys and the values can be of type number or strings
// // data = {
// //   ligma: 'insert joke here',
// //   favNumber: 4,
// // };

// // // * ---

// // // * ---

// // // * --- ENUMS
// // // This is a list of allowed values basically
// // enum Role {
// //   Admin,
// //   User,
// //   Guest,
// // }
// // // they are in 0, 1, 2 format so if we said userRoles: Role = 0 // Admin
// // // We can change this to strings but then change all of them to string
// // let userRole: Role = Role.Admin;
// // userRole = Role.Guest;

// // // * Popular alternative to enums LITERAL TYPES

// // let userRole2: 'admin' = 'admin';
// // console.log(userRole2);
// // // This is basically saying yo your time is 'admin' like actually lol
// // // id i said userRole2 = 'guest' i would get an errror
// // // type 'guest' is not assignable to type 'admin'
// // // now think about this and use the union type on it so
// // let userRole3: 'admin' | 'guest' | 'user' = 'guest';
// // console.log(userRole3);

// // // WE CAN DO THIS WITH TUPLES SO
// // let posResults: [1 | -1, number];
// // posResults = [-1, 5];

// // // * --- Type alias and Custom types
// // // we can do the same using the type keyword in ts
// // type Roles = 'admin' | 'guest' | 'defaultUser' | 'proUser';

// // // we can also nest types
// // type User = {
// //   username: 'string';
// //   role: Roles;
// //   online: boolean;
// //   password: string;
// //   permisions: string[];
// // };

// // // * --- FUNCTIONS AND RETURN VALUE

// // // We can tell ts yo this function returns a number
// // const addFunc = (a: number, b: number): number => {
// //   return a + b;
// // };

// // console.log(addFunc(2, 3));

// // //  If we have a funiction that doesnt retuern anything
// // // what we want to do is give it a return type of void

// // const randomFunction = (joke: string): void => {
// //   console.log(joke, ':) HIHIHIHIHI');
// // };
// // randomFunction('insert joke');

// // // This way we never accidently use this function because of the never keyword
// // const errorMessage = (message: string): never => {
// //   console.log(message);
// //   throw new Error(message);
// // };

// // // * --- FUNCTIONS AS TYPES
// // // Lets say we have a helper function that has a callback we can assign
// // //  a type to the callback parameter by sating parameter name: () => void
// // // We are not creating a new function we are just assigning a type
// // // the function  can have parameters too so
// // // parameter name (a: number, b: number) => void
// // const solveProblem = (callback: (m: string) => void) => {
// //   callback('get me a job pls');
// // };

// // solveProblem(randomFunction);

// // // We can do this when creating a type (useful in react when passing state to another component )
// // type SomeUsers = {
// //   name: string;
// //   role: Roles;
// //   greet: (name: string) => string;
// // };

// // let someUser: SomeUsers = {
// //   name: 'Xanity',
// //   role: 'admin',
// //   greet(name) {
// //     return `Hi my name is ${name}`;
// //   },
// // };
// // someUser.greet(someUser.name);

// // // * --- SPECIAL TYPES

// // let nothing: null;
// // nothing = null;
// // let moreNothing: undefined;
// // moreNothing = undefined;

// // // * ! and ?
// // // If we are selecting a html element ts the getElement or querySelector function will return a html element or null
// // // so we will get an error we can say
// // const input = document.getElementById('input') as HTMLInputElement | null;

// // console.log(input!.value);
// // // input is possibly null unless we put a ? on it to optional chain and check if it exists
// // // or ! when we can tell typescript 'trust me bro its there'
// // // we can also make an if check and ts will be smart and remove the first error because now value might not exist
// // // using as we tell ts its going to return a html input element

// // // * --- OPTIONAL PARAMS

// // const a = (a?: string) => {
// //   console.log('yo whats up');
// // };

// // // * --- NULLISH Coalesing

// // let check = ''; // falsy value
// // const runCheck = check ?? null;
// // // this will check for the value to be null we will output an empty string
// // // because we are not checking for falsy values we are checking for null

// // * --- CLASSES IN TS

// class User1 {
//   username;
//   role;
//   password;
//   age;

//   constructor(username: string, role: string, password: string, age: number) {
//     this.username = username;
//     this.role = role;
//     this.password = password;
//     this.age = age;
//   }
// }

// // // We can also do this instead
// class User {
//   constructor(
//     public username: string,
//     public role: string,
//     public age: number
//   ) {
//     this.username = username;
//     this.role = role;
//     this.age = age;
//   }
// }
// // // This tells ts yo can you imediately create these props the same name as the parameters
// const xanity = new User('Xanity', 'Admin', 24);

// // * --- INTERFACES

// interface Authention {
//   email: string;
//   password: string;

//   login(): void;

//   logout(): void;
// }

// let user: Authention = {
//   email: 'test@example.com',
//   password: '123abc',

//   login() {
//     // Login
//   },

//   logout() {
//     // Logout
//   },
// };

// user.email;

// // *--- GENERICS

// type Data<T> = {
//   [key: string]: T;
// };

// const namesData: Data<string> = {
//   name1: 'John',
// };

// namesData.name2 = 'Jerry';

// // * FUNCTIONS

// const combine = <T>(a: T, b: T) => {
//   return [a, b];
// };

// combine(2, 3);
// let combined = combine<number>(2, 4);
// console.log(combined);

// const merge = <T extends object, U extends object>(a: T, b: U) => {
//   return { ...a, ...b };
// };

// console.log(merge({ username: 'Xanity' }, { age: 24 }));
