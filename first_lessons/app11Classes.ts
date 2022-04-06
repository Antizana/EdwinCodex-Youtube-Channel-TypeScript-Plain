const button = document.querySelector("button");

console.log(button);

// console.log(button.innerText);

if(button){
    console.log(button.innerText);
}

console.log(button?.innerText);

const button2 = document.querySelector("button")!;
console.log(button2.innerText);

const form = document.querySelector("form")!;

const form2 = document.querySelector(".new-item-form")!;

const form3 = document.querySelector(".new-item-form") as HTMLFormElement;

console.log(form3.children);

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

class Invoice {
    client : string;
    details: string;
    amount: number;

    constructor(c: string, d: string, a: number){
        this.client = c;
        this.details = d;
        this.amount = a;
    }

    format() : string { 
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}

const invoice1 = new Invoice('Google', 'Web Development', 500);
const invoice2 = new Invoice('Max', 'Computer', 200);
console.log(invoice1, invoice2);

let invoices: Invoice[] = [];
// invoices.push({name: "John"});
invoices.push(invoice1);
invoices.push(invoice2);
console.log(invoices);

invoice1.client = 'Facebook';
invoice2.amount = 250;
// invoice2.amount = "Mary"

console.log(invoice1, invoice2);

