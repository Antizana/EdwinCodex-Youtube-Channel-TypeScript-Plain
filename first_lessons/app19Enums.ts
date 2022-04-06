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

    let document: HasFormatter;
    if (type.value === 'invoice') {
        document = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    } else {
        document = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }

    list.render(document, type.value, 'end');
    
})

// ENUMS
enum ResourceType {
    BOOK = 1,
    AUTHOR = 2,
    FILM = 3,
    DIRECTOR = 4,
    PERSON = 5,
}

interface Resource<T> {
    uid: number;
    resourceType: number;
    data: T;
}

const document1: Resource<object> = {
    uid: 1,
    resourceType: 3,
    data: { title: 'name of the wind'}
}

const document2: Resource<object> = {
    uid: 2,
    resourceType: 4,
    data: { name: 'John Doe'}
}

const resource3: Resource<object> = {
    uid: 3,
    resourceType: ResourceType.BOOK,
    data: { title: 'The Final Empire'}
}

const resource4: Resource<object> = {
    uid: 4,
    resourceType: ResourceType.PERSON,
    data: { name: 'John Doe'}
}

console.log(document1, document2, resource3, resource4);

