// * TEST THEM HERE IMPORT THE ONES FROM YOUR FILE NOT SOLUTION CHECK CONSOLE

import { LinkedList } from './dataStructures/linkedlistSolution/solution';

// Push
const myLinkedList = new LinkedList();
myLinkedList.push(2);
myLinkedList.push(4);
myLinkedList.push(6);
myLinkedList.push(8);
// console.log(myLinkedList);

// Pop
// console.log(myLinkedList.pop()); // 8
// console.log(myLinkedList.pop()); // 6
// console.log(myLinkedList.pop()); // 4
// console.log(myLinkedList.pop()); // 2
// console.log(myLinkedList.pop()); // undefined

// Search
// console.log(myLinkedList.search(2)); // true
// console.log(myLinkedList.search(4)); // true
// console.log(myLinkedList.search(6)); // true
// console.log(myLinkedList.search(8)); // true
// console.log(myLinkedList.search(12)); // fasle
// console.log(myLinkedList.search(7)); // false

// SUM ALL NODES
console.log(myLinkedList.total());
