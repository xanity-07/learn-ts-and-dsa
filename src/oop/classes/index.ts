// // class Employee {
// //   constructor(
// //     public empName: string,
// //     private salary: number,
// //     public location: string,
// //     private isEligeble: boolean,
// //     private bonus: number,
// //     public readonly empId: number
// //   ) {}
// //   public getSalary() {
// //     return (this.salary = this.calcSalary());
// //   }

// //   private calcSalary() {
// //     if (this.isEligeble) {
// //       return this.salary + (this.salary * this.bonus) / 100;
// //     } else {
// //       return this.salary;
// //     }
// //   }
// // }

// // const xanity = new Employee('Xanity', 50000, 'US', true, 10, 102);

// // console.log(xanity);
// // console.log(xanity.getSalary());
// // console.log(xanity.empId);

// // class Person {
// //   constructor(
// //     public name: string,
// //     public gender: 'Male' | 'Female',
// //     public dob: string
// //   ) {}
// //   protected calcAge() {
// //     return new Date().getFullYear() - new Date(this.dob).getFullYear();
// //   }
// // }

// // class Employee extends Person {
// //   age = this.calcAge();
// //   constructor(
// //     public salary: number,
// //     public bonus: number,
// //     name: string,
// //     dob: string,
// //     gender: 'Male' | 'Female'
// //   ) {
// //     super(name, gender, dob);
// //   }
// //   calcSalary() {
// //     return this.salary + this.bonus;
// //   }
// // }

// // const emp101 = new Employee(50000, 2000, 'Xanity', '09-04-2000', 'Male');
// // console.log(emp101);
// // console.log(emp101.calcSalary());

// class Department {
//   private _name: string;
//   private _count: number;

//   constructor(deptName: string, deptCount: number) {
//     this._name = deptName;
//     this._count = deptCount;
//   }
//   get name() {
//     return this._name;
//   }
//   get count() {
//     return this._count;
//   }
//   set count(value: number) {
//     this._count = value;
//   }
//   displayInformation() {
//     return `This is the ${this._name} department. And has a count of ${this._count}.`;
//   }
//   incrementCount(addedCount: number) {
//     return (this._count = this._count + addedCount);
//   }
// }

// class ITDepartment extends Department {
//   displayInformation(): string {
//     return `This is the ${this.name} department we have ${this.count} employees.`;
//   }
// }

// const itDept = new ITDepartment('IT', 14);

// console.log(itDept.incrementCount(3));
// console.log(itDept.displayInformation());

const stairs = (n: number): string => {
  let result = '';
  for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= row; col++) {
      result += '* ';
    }
    result += '\n';
  }
  return result;
};

const block = (n: number): string => {
  let result = '';
  for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= n; col++) {
      result += '* ';
    }
    result += '\n';
  }
  return result;
};

const reverseStairs = (n: number): string => {
  let result = '';
  for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= n + 1 - row; col++) {
      result += '* ';
    }
    result += '\n';
  }
  return result;
};

const numRows = (n: number): string => {
  let result = '';
  for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= row; col++) {
      result += col + ' ';
    }
    result += '\n';
  }
  return result;
};

// const doubleStairs = (n: number): string => {
//   let stairOne = '';
//   let stairTwo = '';

//   for (let rowOne = 1; rowOne <= n; rowOne++) {
//     for (let colOne = 1; colOne <= rowOne; colOne++) {
//       stairOne += '*';
//     }
//     stairOne += '\n';
//   }

//   for (let rowTwo = 1; rowTwo <= n - 1; rowTwo++) {
//     for (let colTwo = 1; colTwo <= n - rowTwo; colTwo++) {
//       stairTwo += '*';
//     }
//     stairTwo += '\n';
//   }
//   let output = stairOne + stairTwo;
//   return output;
// };

const doubleStairs = (n: number): string => {
  let result = '';
  for (let row = 0; row < 2 * n; row++) {
    let totalColsInRow = row > n ? 2 * n - row : row;
    for (let col = 0; col < totalColsInRow; col++) {
      result += '* ';
    }
    result += '\n';
  }
  return result;
};

console.log(stairs(4));
console.log(block(4));
console.log(reverseStairs(4));
console.log(numRows(4));
console.log(doubleStairs(5));
