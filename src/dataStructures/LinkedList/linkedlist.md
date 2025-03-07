### LINKED LIST

So in a liked list looks like this a->b->c->d->null
where the a is a node and the arrow is a pointer to the next node
if you notice d points to null that meand that is the end of the list
we can say that a is the head of the linked list and d is the tail

so to construct our node we need a node class to make nodes to add values to our linked list this class would look like this

### Node Class

class Node {
// adding a value prop here if type number
// adding a next prop here with a type or Node or null

// a constructor function with one parameter called value type number
// then this.value asigned to value
// and this.next assigned to null
}

### LinkedList Class

class LinkedList {
// here we want some properties a head tail and length
// head and tail of type Node or null
// length of type number

// constructor function no params
// this.head = null
// this.tail = null
// this.length = 0
}

### Why this structure

We create a node class to push values to the linked list
We construct out linked list as a empty list so that the first value we add is from out push method let do that now

### PUSH METHOD

So think about how we want to push a node to the list
is the list empty? or does it have values

if the list is empty we want to make the head and the tail that node we are pushing to the linked list

else we want to make the tail.next = to that node then make the tail to be the node so tail = node

then ourside the if else we want to increase the length by one and return the list so
// this.length++ and return this because this is a reference to LinkedList :)
