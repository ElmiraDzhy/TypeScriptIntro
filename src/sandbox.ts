let greet: Function;

greet = () => console.log('hello');

// optional params :
const add = (a: number, b: number, c?: number|string) => {
  console.log(a + b);
  
}

add(2, 3);