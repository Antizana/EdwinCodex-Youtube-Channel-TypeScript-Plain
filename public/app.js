import { Invoice } from "./classes/Invoice.js";
const button = document.querySelector("button");
const button2 = document.querySelector("button");
const form = document.querySelector("form");
const form2 = document.querySelector(".new-item-form");
const form3 = document.querySelector(".new-item-form");
//Inputs 
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.value, amount.valueAsNumber);
});
// Classes
const invoice1 = new Invoice('Google', 'Web Development', 500);
const invoice2 = new Invoice('Max', 'Computer', 200);
let invoices = [];
invoices.push(invoice1);
invoices.push(invoice2);
invoices.forEach((invoice) => {
    // invoice.client = 'Facebook'; // can't assign a value because it's readonly
    console.log(invoice.client, invoice.amount, invoice.format());
});
