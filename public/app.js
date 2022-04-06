import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
const form = document.querySelector(".new-item-form");
//Inputs 
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let document;
    if (type.value === 'invoice') {
        document = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        document = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    list.render(document, type.value, 'end');
});
// GENERICS
// const addUID = (object: object) => {
// const addUID = <T>(object: T) => {
// const addUID = <T extends object>(object: T) => {
const addUID = (object) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, object), { uid });
};
let document1 = addUID({ name: 'Max', age: 28 });
// let document2 = addUID({name: 10, age: 28});
// let document2 = addUID("Hello");
console.log(document1);
console.log(document1.name);
const document3 = {
    uid: 1,
    resourceName: 'Resource',
    data: { name: 'Max' }
};
// const document4 : Resource2 ={
//     uid: 1,
//     resourceName: 'Resource',
//     data: 'Max'
// }
const document5 = {
    uid: 1,
    resourceName: 'Resource',
    data: 'Max'
};
const document6 = {
    uid: 1,
    resourceName: 'Resource',
    data: { name: 'Max' }
};
const document7 = {
    uid: 1,
    resourceName: 'Resource',
    data: ['Max', 'Anna']
};
console.log(document6, document7);
