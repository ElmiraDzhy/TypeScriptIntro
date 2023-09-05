// DOM Interaction & Typecasting

// we add '!' for show typescript that we know exactly this element exist
const anchor = document.querySelector('a')!;

console.log(anchor.href);

// const form = document.querySelector('form')!; // typescript says it's a HTMLFormElement
// const form = document.querySelector('.new-item-form')!; // typescript says it's an Element
/**
 * when we use 'a' or 'form' tag, typescript knows what tag we grabbing
 * 
 * in another case we use class and class could be apply to any element in the page
 * 
 * we need to use typecasting:
 */

const form = document.querySelector('.new-item-form') as HTMLFormElement;

// console.log(form.children);

//inputs

const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amounts = document.querySelector('#amount') as HTMLInputElement;


form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  console.log(
    type.value,
    toFrom.value,
    details.value,
    // convert string to number, example:  '200' ->>  200
    amounts.valueAsNumber
  );
  
});

