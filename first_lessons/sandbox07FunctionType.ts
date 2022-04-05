let greeting = () => {
    console.log("Hello world");
}

// greeting = "Hello";

let greeting2: Function; 

greeting2 = () => {
    console.log("Hello world again");
    
}

const add = (a: number, b: number) => {
    console.log(a + b);
}

add(10, 5);

// add(7, "10");
// add(7, 10, 5);


const add2 = (a: number, b: number, c?: number | string) => {
    console.log(a + b)
    console.log(c); 
}

add2(7, 10); //prints c as undefined

const add3 = (a: number, b: number, c: number | string = 10) => {
    console.log(a + b)
    console.log(c); 
}

add3(7, 10);
add3(7, 10, 15);
add3(7, 10, "15");

const minus = (a: number, b: number) =>{
    return a - b;
}

let result = minus(10, 7);
// result = "Subtracting"

const minus2 = (a: number, b: number): number => {
    return a - b;
}

const add4 = (a: number, b: number): void => {
    console.log(a + b);
}
