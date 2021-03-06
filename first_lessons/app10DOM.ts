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