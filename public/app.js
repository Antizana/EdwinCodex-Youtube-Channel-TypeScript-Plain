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
    let values;
    values = [toFrom.value, details.value, amount.valueAsNumber];
    let document;
    if (type.value === 'invoice') {
        document = new Invoice(...values);
    }
    else {
        document = new Payment(...values);
    }
    list.render(document, type.value, 'end');
});
// TUPLES
let array = ["John", 25, true];
array[0] = false;
array[1] = "Pete";
array = [100, false, "John"];
let myTuple;
myTuple = ["John", 25, true];
// myTuple = [40, "Mary", true];
// myTuple[0] = false;
myTuple[0] = "Pete";
// myTuple[1] = "Pete";
myTuple[1] = 30;
let student;
student = ["John", 25];
// student = [20, "Mary"];
