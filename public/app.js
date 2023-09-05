// Interfaces with Classes
import Invoice from "./classes/Invoice.js";
import Payment from "./classes/Payment.js";
const form = document.querySelector('.new-item-form');
//inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amounts = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amounts.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amounts.valueAsNumber);
    }
    console.log(doc);
});
