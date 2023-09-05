"use strict";
// access modifiers
class Invoice {
    constructor(
    // in constructor modifiers are required
    client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
const inv = new Invoice('mario', 'work', 200);
const inv2 = new Invoice('tom', 'work', 150);
let invoices = [];
invoices.push(inv);
invoices.push(inv2);
invoices.forEach(inv => {
    console.log(inv.format());
});
//
const form = document.querySelector('.new-item-form');
//inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amounts = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, 
    // convert string to number, example:  '200' ->>  200
    amounts.valueAsNumber);
});
