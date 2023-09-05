// function types (signatures)

// let greet: Function;

//exp 1

let greet: (a: string, b: string) => void;

greet = (name: string, greeting: string) => {
  console.log(`${greeting} ${name}!`); 
}

//exp 2

let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
  if(action === 'add'){
    return numOne + numTwo;
  } else {
    return numOne - numTwo;
  }
}

//exp3

let logDetails: (obj: {name: string, age: number}) => void;

type person = {name: string, age: number};

logDetails = (user: person) => {
  console.log(`${user.name} is ${user.age} years old`);
}