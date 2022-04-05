let age: any = 28;

age = true;
console.log(age);
age = "Hello";
console.log(age);
age = {
    name: "John",
}
console.log(age);

let mixedArray: any = [];
mixedArray.push(5);
mixedArray.push("Peter");
mixedArray.push(false);

console.log(mixedArray);

let mixedObject: {
    name: any,
    age: any,
    country: any,
};

mixedObject = {
    name: 'Peter',
    age: 25,
    country: 'United States',
}

console.log(mixedObject);

mixedObject = {
    name: true,
    age: "Bob",
    country: 25,
}

console.log(mixedObject);





