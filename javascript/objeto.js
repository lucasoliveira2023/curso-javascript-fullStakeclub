const person = {
    firstName: 'filipe',
    lastName: 'Rocha',
    age: 21,
    hobbies: ["Assistir f1", "jogar futebol", "Ler"],
};

const firstName = person.firstName;
const lastName = person.lastName;
const age = person.age;
const hobbies = person.hobbies;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(hobbies[2]);


const toDo = [
    {
        id:1,
        description: 'Estudar programacao',
        isCompleted: false,
    },
    {
        id:2,
        description:'Ler',
        isCompleted: false,
    },
    {
        id:3,
        description: 'treinar',
        isCompleted: true,
    },
];

const descriptionOfLastTodo = todos[2].description;

console.log (descriptionOfLastTodo);
