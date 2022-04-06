import {Invoice} from "./classes/Invoice.js";
import {Payment} from "./classes/Payment.js";
import {HasFormatter} from "./Interfaces/HasFormatter.js";

const form = document.querySelector(".new-item-form") as HTMLFormElement;

//Inputs 
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let document: HasFormatter;
    if (type.value === 'invoice') {
        document = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    } else {
        document = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }

    console.log(document);
    
})

