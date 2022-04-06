import {Invoice} from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import {Payment} from "./classes/Payment.js";
import {HasFormatter} from "./Interfaces/HasFormatter.js";

const form = document.querySelector(".new-item-form") as HTMLFormElement;

//Inputs 
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    let values: [string, string, number];
    values = [toFrom.value, details.value, amount.valueAsNumber]

    let document: HasFormatter;
    if (type.value === 'invoice') {
        document = new Invoice(...values);
    } else {
        document = new Payment(...values);
    }

    list.render(document, type.value, 'end');
    
})

// TUPLES

let array = ["John", 25, true];
array[0] = false;
array[1] = "Pete";
array = [100, false, "John"];

let myTuple: [string, number, boolean];
myTuple = ["John", 25, true];
// myTuple = [40, "Mary", true];
// myTuple[0] = false;
myTuple[0] = "Pete";
// myTuple[1] = "Pete";
myTuple[1] = 30;

let student: [string, number]
student = ["John", 25];
// student = [20, "Mary"];