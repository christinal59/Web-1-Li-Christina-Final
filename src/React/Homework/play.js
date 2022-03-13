console.log('Hello');

/* Variables ---------------------------*/
const MY_CONSTANT = 'Shound Not Change';
let myLet = 'Timbuktu';
const myString= 'I went to the park yesterday';
const myNumber = 2;

console.log('A Const Variable', MY_CONSTANT);

myLet = 'Something Else';

console.log('A Const Variable', myLet);

/* Functions ---------------------------*/
const myFunctions = ({myNum}) => {
    const addMeUp = 3 + myNum;
    console.log('addMeUp', addMeUp);
}

myFunctions({ myNum: 4 });
myFunctions({ myNum: 7 });
myFunctions({ myNum: 16 });


/* Data Types ---------------------------*/
const aString = 'I went to the park.';
const aTemplateString = `${aString} yesterday`;
console.log('Strings', aTemplateString);

const aNum = 123;
console.log('aNum', aNum);

const aObject ={
    name: 'Christina Li',
    email: 'christinalee.is@gmail.com',
    age: 27,
}

console.log('aObject', aObject);

const myArray = [
    'this is my string',
    { make: "Honda", Model: "CRV" },
    1234,
];

console.log('myArray', myArray);
