let greet: Function;

greet = () => console.log('hello');

// default value :
const add = (a: number, b: number, c: number|string = 10) => {
  console.log(a + b);
  console.log(c);
  
}

add(2, 3);