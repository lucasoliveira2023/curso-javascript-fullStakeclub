class Person {
    constructor (firstName, LastName, age) {
        this.firstName = firstName;
        this.LastName = LastName;
        this.age = age;
    }

    getFullName() {
        console.log(`${this.firstName} ${this.lastName}`);
    }

    speak() {
        console.log("ola mundo!");
    }
}

const person = new Person('Jane', 'Doe', 40);
console.log(person);

person.speak();