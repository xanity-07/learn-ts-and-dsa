```This is where we start the course on how to learn program to build.
    This is a very detailed guide on how to program not only learn the language of typescript but also learn how to use code to build software and web applications by learning the foundations of data structures and algorithms.
```

```Intro
    Lets start with this in typescript(super set of javascript) if you don't know what   that means don't worry about it right now. If you do know what that means you might ask yourself why not teach js instead of ts. My reasoning is learning to program with a   language that uses types is more beneficial for you so im gonna give you the 'Trust me  bro' HAHAHAHA ill explain this later though.
```

```What are variables and what are data type?
    ### UNDERSTAND THIS FIRST
    When i say variable this means I declared a variable with the let keyword
    When i say constant this is me declaring a variable with const keyword
    The name of the varible is not a container to hold the value its kinda true what it really is it's a reference in memory that points to the value you assined it. PLEASE THINK ABOUT VARIABLES AND CONSTANTS LIKE THIS draw this mental model in your brain that when you declare something its a reference in memory this will yield exponential growth as a programmer later on.

    Declaring a variable with a let keyword allows you to change the pointer thats refrencing that value so we can make it point something else.

    With a const you can never change the that pointer that contstant will always point to the value that was assigned.

    The way we declare a variable is by using this keyword called let
    we can say let myFavNumber;

    Typing this in our ts file will initialize the variable called myFavNumber
    you might think well we didnt give it a value and you are correct what happens is whenever we initialize a variable with the let keyword and not give it a value it will be assigned to undefined by default. Undefined is a primitive data type
    (well cover this later )
```

```Let's give it a data type and assign it a value
    The way we do that in ts is like this we take our initialized variable and we add this
    let myFavNumber: number = 4;
    we can also reassign a variable myFavNumber = 10
    dont use the let keyword to reassign the variable just the name and the value you want. I also want to say this the = operator is not equal its called assignment operator please make sure in your brain you associate = to assignment.

    So in ts were basically saying putting a : after a variable means assign it a data type so were saying myFavNumber can be any posible number. Once you do this you cannot say myFavNumber = 'Hello' ('Hello') is a string data type that let's you assign text to variables

    A type is the concept of us the coder describing the value can be passed to functionss assigned to properties, and assigned to variables

    You have no idea what that means but thats okay you will soon !

    So what we just did is called type annotation

```

### Primitive Types

- number [ all numbers 42, 3.14, 0xFF]
- string [ text characters 'hello' ]
- boolean [ true or false only these values ]
- bigInt [ big boy numbers 9007199254740991n ]
- undefined [ value hasn't been assigned ]
- null [ empty ]
- symbol [ unique identifiers ]

## We will work with the first 3 the most for now the other ones ill explain as we go

```Strings & Numbers
    BEFORE WE START if you want to print something to the console do this.
    console.log('any string you want'); // will print the string to the console
    console.log(myFavNumber); // will print the value of the variable to the console

    Let's start with strings:
     * there's 3 ways to create a string well 4 but we only really use 3
     * The first one is '' anything withon those quotes will be considered a string
       anything inside of
     * "" will also be considered a string as well you can't match quotes though so you can't do this 'hello my name is xanity" this will yeild a error so make sure you are only using one

    You might ask what about this 'I can't go there yet' this will also give you a error
    because you are ending the string at n and starting a string after yet so everything in between is invalid typescript you can do this to avoid it 'I can\'t go there yet'
    This will make it work and also you can do this "I cant't go there yet" and this will also work because anything inside the "" is consider a string even the single '.

    This is how we declare them let myName: string = 'Xanity'

    Numbers:
     * With numbers you can do math operations these are the operators for simple math
     * [add - ] [ subtract - ] [ multiply * ] [ divide / ] [ remainder/modulo % ]

     so we can do math like this
     * let a: number = 4;
     * let b: number = 2;
     * let result: number = a + b; // 6
     * result = a - b; 2;
     * result = a * b; // 8
     * result = a / b; // 2
     * result = a % b; // 0

```

```Booleans
     This type can only be one of two values true or false
     true and false are special keywords we in ts

     We can compare this like is 10 > 4 // this will return true;
     also is 10 < 4 // this will return false;

     Remember when i said = is the assignment operator we also have
      * > greater than operator
      * < less than operator
      * >= greater than or equal to
      * <= less than or equal to
      * == loose equal check
      * === strict equal check

     The difference between double = and triple =
      * Double = will only check for value so 10 == '10' // true but we know '10' is a string

      * Triple = will check for value and data type so the previous check will be false
```

# TODOS

Try To not look at the code try to recall what we just went over THIS IS IMPORTANT

[] Create 5 variables of type string
[] Create a string using single quotes and usign this \
[] Create a string using double quotes
[] Create 5 variables of type number and do the all operations we just did
[] Create a number variable and compare it to another number with all comparison operators
[] Guess the output before running the code on the console
