const sum = 1 + 2;

if (sum === 2) {
    console.log("Sum is 2!");
} else if (sum === 3) {
    console.log("sum is 3!");
} else {
    console.log("Sum is not 2!");
}

////
// && e ||

const sum1 = 2 + 2;
const sum2 = 3 + 3;

if (sum1 === 4 && sum2 === 6) {
    console.log("Sum is 4 and sum2 is 6!");
}

if (sum1 === 4 || sum2 ===6) {
    console.log("sum1 is 4 or sum2 is 6!");
}


//swtch

const car = 'Mercedes';

switch (car) {
    case 'Mercedes':
        console.log("Mercedes is beautiful!");
        break;
    case 'Ferrari':
        console.log("Ferrari is very red!");
        break;
    case 'Tesla':
        console.log("tesla is very smart!");
}