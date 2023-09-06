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
//ENUMS
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["FILM"] = 1] = "FILM";
    ResourceType[ResourceType["PERSON"] = 2] = "PERSON";
})(ResourceType || (ResourceType = {})); //0, 1, 2
const docOne = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: 'name of the wind',
};
const docTwo = {
    uid: 7,
    resourceType: ResourceType.PERSON,
    data: { name: 'michael' },
};
console.log(docOne, docTwo);
/**
 * data: "name of the wind"
 * resourceType: 0
 * uid: 1
 */
