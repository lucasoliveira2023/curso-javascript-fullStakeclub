for(let index =0; index < 10; index++) {
    console.log(index);
}


const cars = ["ferrari", "tesla", "Mercedes"];

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

for (let car of cars) {
    console.log(car); //mesma coisa de cima so que mais simples
}

cars.forEach(function (car, index) {
    console.log(index);
    console.log(car);
});

//while

let index = 0;

while (index <10) {
    console.log("index e menor que 10!");
    index = index + 1;
    //ou index++ ou index +=1
}


const person = {
    name: "jane",
    age: 21,
};

for (property in person) { //ps esse loop nao e muito performatico
    console.log(person[property]);
}


