const logDetails = (uid: string | number, item: string) => {
    console.log(`${item} has a uid of ${uid}`);
}

const greeting = (user: {name: string, uid: string | number}) => {
    console.log(`${user.name} says hello`);
}

const greetingAgain = (user: {name: string, uid: string | number}) => {
    console.log(`${user.name} says hello`);
}

type StringOrNumber = string | number;

const logDetails2 = (uid: StringOrNumber, item: string) => {
    console.log(`${item} has a uid of ${uid}`);
}

type objectWithName = { name: String, uid: StringOrNumber};

const greeting2 = (user: objectWithName) => {
    console.log(`${user.name} says hello`);
}

const greetingAgain2 = (user: objectWithName) => {
    console.log(`${user.name} says hello`);
}
