import {Invoice} from "./classes/Invoice.js";

const button = document.querySelector("button");

const button2 = document.querySelector("button")!;

const form = document.querySelector("form")!;

const form2 = document.querySelector(".new-item-form")!;

const form3 = document.querySelector(".new-item-form") as HTMLFormElement;


//Inputs 
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    console.log(
        type.value,
        toFrom.value,
        details.value,
        amount.value,
        amount.valueAsNumber,
    );
    
})

// Classes

const invoice1 = new Invoice('Google', 'Web Development', 500);
const invoice2 = new Invoice('Max', 'Computer', 200);

let invoices: Invoice[] = [];
invoices.push(invoice1);
invoices.push(invoice2);

invoices.forEach((invoice) => {
    // invoice.client = 'Facebook'; // can't assign a value because it's readonly
    console.log(invoice.client, invoice.amount, invoice.format());
});

// Interfaces
interface IsPerson{
    name: string;
    age: number;

    speak(a: string): void;
    spend(a: number): number;
}

const me: IsPerson = {
    name: 'Max',
    age: 30,
    speak(text: string): void {
        console.log(text);
    },  
    spend(amount: number): number {
        console.log('I spent', amount);
        return amount;
    }
    // skills: [],
}

console.log(me);

let someone: IsPerson;

const greetPerson = (person: IsPerson) => {
    console.log('Hello,', person.name);
}

greetPerson(me);

