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
    readonly client : string;
    private details: string;
    public amount: number;

  
    constructor(c: string, d: string, a: number){
        this.client = c;
        this.details = d;
        this.amount = a;
    }

    format() : string { 
        // this.client = "Microsoft"; // this does not work because it is a readonly property client
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}

const invoice1 = new Invoice('Google', 'Web Development', 500);
const invoice2 = new Invoice('Max', 'Computer', 200);

let invoices: Invoice[] = [];
invoices.push(invoice1);
invoices.push(invoice2);

// invoices.forEach((invoice) => {
//     console.log(invoice.client, invoice.details, invoice.amount, invoice.format()); //does not work because of private property details
// });

invoices.forEach((invoice) => {
    // invoice.client = 'Facebook'; // can't assign a value because it's readonly
    console.log(invoice.client, invoice.amount, invoice.format());
});


class OtherInvoice {

    constructor(
        readonly client: string,
        private details: string,
        public amount: number,
    ){}

    //Without modifiers this won't work
    // constructor(
    //     client: string,
    //     details: string,
    //     amount: number,
    // ){}

    format() : string {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}

const otherInvoice1 = new OtherInvoice('Google', 'Web Development', 500);
const otherInvoice2 = new OtherInvoice('Microsoft', 'Computer', 200);

console.log(otherInvoice1.format(), otherInvoice2.format());
