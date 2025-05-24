// Wtrite code to get a array of the names from the given user array of objects.
type Users = {
  id: number;
  name: string;
  isActive: boolean;
  age: number;
};
const users: Users[] = [
  {
    id: 1,
    name: 'Jack',
    isActive: true,
    age: 20,
  },
  {
    id: 2,
    name: 'John',
    isActive: true,
    age: 18,
  },
  {
    id: 3,
    name: 'Mike',
    isActive: false,
    age: 30,
  },
];

const names = users
  .filter((user) => user.isActive === true)
  .map((user) => user.name);
console.log(names);

const descending: string[] = users
  .sort((user1, user2) => (user1.age > user2.age ? 1 : -1))
  .filter((user) => user.isActive)
  .map((user) => user.name);

console.log(descending);
