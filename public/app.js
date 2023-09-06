// Rendering an HTML Template
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
