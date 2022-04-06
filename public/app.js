import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
const form = document.querySelector(".new-item-form");
//Inputs 
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let document;
    if (type.value === 'invoice') {
        document = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        document = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    console.log(document);
});
