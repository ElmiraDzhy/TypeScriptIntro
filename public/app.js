import Invoice from "./classes/Invoice.js";
import Payment from "./classes/Payment.js";
import ListTemplate from './classes/ListTemplate.js';
const form = document.querySelector('.new-item-form');
//inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amounts = document.querySelector('#amount');
//list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amounts.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amounts.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
// Generics
// generics allows to create reusable blocks of code
// which could be use with different types
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 1000);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'Lola', age: 25 });
// console.log(docOne.name); if i try to access a property - we get an error
// this property 'name' does not exist on type {uid: number}
// why ? - when we passing the object into function 'addUID'
// we not spesify exactly what this obj should be
//we can combat this by using a generic:
const addUID_2 = (obj) => {
    let uid = Math.floor(Math.random() * 1000);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docTwo = addUID_2({ name: 'lola', age: 30 });
console.log(docTwo.name); // no error
const docThree = {
    uid: 1,
    resourceName: 'person',
    data: 'str',
};
const docFour = {
    uid: 1,
    resourceName: 'person',
    data: [{ name: 'shaun' }],
};
