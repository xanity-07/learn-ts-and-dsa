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

### PUSH METHOD { time complexity O(1) }

So think about how we want to push a node to the list
is the list empty? or does it have values

if the list is empty we want to make the head and the tail that node we are pushing to the linked list

else we want to make the tail.next = to that node then make the tail to be the node so tail = node

then ourside the if else we want to increase the length by one and return the list so
// this.length++ and return this because this is a reference to LinkedList :)

### POP METHOD { time complexity O(n) }

Think about how pop work for arrays we delete the last element and return it
and if we keep pop on an empty array then we get undefined so lets get into it
ask your self is the list empty if so what do you want to do?
we want to have these edge cases
pop () {} // no params

if list is empty so this.head = null, !this.head also works as a check
we want to retuen undefined

the way we pop a node off the list is creating some pointers temp and pre
so we say temp is equal to this.head and pre equals this.head

we want to loop while temp.next if not null
and we want to make pre equal to temp and temp to temp.next
this way pre will always be the node before temp when temp is out of bounds

then out side of the loop we want to make pre the tail
this.tail = pre
this.tail.next we want to make that null

if our list has one item and we pop we want to set the head and the tail to null
this.head = null
this.tail = null
decrease the length and then return temp which is the node we popped off

### SEARCH METHOD { time complexity O(n) }

// we want to search for a value in our list so we need a search method
// this method has a parameter (value) if we find the value we want to return true otherwise we want to retuen false

so lets check if our list is empty because it doesnt make sense searching an empty list so we want to return false if the list is empty
lets make this some what performant so if the head or the tail is the value return true
then we want to make out pointer temp
while temp is not equal to null and temp.next is not null
if temp.value equals value return true
temp equals temp.next;
out side of the loop just return false because the value is not there

### CHALLENGE

# Create a method that rums all the nodes on the linked list

Name the method what ever you want totla sumALl anything
// Hint similar to search
return the total at the end
