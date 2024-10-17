const names = ["lucas", "larissa", 11, false];

const lucas = names[1];

names.push("pedro");

console.log(names);

names.unshift("Fernanda");
names.pop();

console.log(names.indexOf("Felipe"));

console.log(names);

const indexOfFelipe = names.indexOf("Felipe");

const sortedNames = names.sort();

const namesIsArray = Array.isArray(names);

console.log(names);
console.log(sortedNames);
console.log(namesIsArray);