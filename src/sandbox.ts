let greet: Function;

greet = () => console.log('hello');

// default value :
const add = (a: number, b: number, c: number|string = 10): void => {
  console.log(a + b);
  console.log(c);
}

add(2, 3);

const minus = (a: number, b: number): number => {
  return a - b;
}

let result = minus(10, 7);

// result = 'string' ->> error

