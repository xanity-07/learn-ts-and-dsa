// Not using Generics
const printString = (item: string, defaultValue: string): [string, string] => [
  item,
  defaultValue,
];
const printNumber = (item: number, defaultValue: number): [number, number] => [
  item,
  defaultValue,
];
const printBoolean = (
  item: boolean,
  defaultValue: boolean
): [boolean, boolean] => [item, defaultValue];

console.log(printString('Yo what up', 'Yurr'));
console.log(printNumber(3, 5));
console.log(printBoolean(true, false));

console.log('-----------------');

// Using Generics
// Allows uo to use one function for all 3 data types
const print = <T>(value: T, defaultValue: T): [T, T] => {
  return [value, defaultValue];
};

console.log(print<string>("Yo it's me", 'Hi again'));
console.log(print<number>(4, 8));
console.log(print<boolean>(false, true));

const uniqueDataType = <T>(defaultValue: T, value?: T) => {
  if (value === undefined) {
    return defaultValue;
  }
  return [value, defaultValue];
};

interface Dog {
  name: string;
  breed: string;
}

const dog = uniqueDataType<Dog>({ name: 'none', breed: 'unknown' });

console.log(dog);

const getRandomKeyValuePair = <T>(obj: {
  [keys: string]: T;
}): { keys: string; value: T } => {
  const keys = Object.keys(obj);
  const randomKey = keys[Math.floor(Math.random() * keys.length)];
  return { keys: randomKey, value: obj[randomKey] };
};

const stringObject = { a: 'apples', b: 'bananas', c: 'coconut' };
const res = getRandomKeyValuePair<string>(stringObject);
console.log(res);

const numberObject = { one: 1, two: 2, three: 3 };
const randomNumberKey = getRandomKeyValuePair<number>(numberObject);
console.log(randomNumberKey);

const filterArray = <T>(array: T[], condition: (item: T) => boolean): T[] => {
  return array.filter((items) => condition(items));
};
const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNums = filterArray<number>(arr, (num) => num % 2 === 0);
console.log(evenNums);

interface Fruits {
  name: string;
  color: string;
}

const fruitArray: Fruits[] = [
  { name: 'Apple', color: 'Red' },
  { name: 'Pineaple', color: 'Yellow' },
  { name: 'Cherry', color: 'Red' },
  { name: 'Grapes', color: 'Purple' },
  { name: 'Orange', color: 'Orange' },
];

const redFruits = filterArray<Fruits>(
  fruitArray,
  (fruit) => fruit.color === 'Red'
);

for (let fruit of redFruits) {
  console.log(fruit.name);
}
