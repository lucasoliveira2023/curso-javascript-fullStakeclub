
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

const toDoJson = JSON.stringify(toDo);

console.log(toDoJson);