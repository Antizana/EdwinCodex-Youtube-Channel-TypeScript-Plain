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
// ENUMS
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 1] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 2] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 3] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 4] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 5] = "PERSON";
})(ResourceType || (ResourceType = {}));
const document1 = {
    uid: 1,
    resourceType: 3,
    data: { title: 'name of the wind' }
};
const document2 = {
    uid: 2,
    resourceType: 4,
    data: { name: 'John Doe' }
};
const resource3 = {
    uid: 3,
    resourceType: ResourceType.BOOK,
    data: { title: 'The Final Empire' }
};
const resource4 = {
    uid: 4,
    resourceType: ResourceType.PERSON,
    data: { name: 'John Doe' }
};
console.log(document1, document2, resource3, resource4);
