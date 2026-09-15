// 1. Know how to declare the variables and using of console.
// Declare the variables, use let or var to declare.
let firstName; 
firstName = 'lian';
let lastName;
lastName = 'Cruspero'

console.log(lastName); // This one is like a printf() in C.

// 2. Know how the const work.
const christmas_2026 = '12.25.2026'; // you const if you want uour var not to change.
console.log(christmas_2026);

// 3. JavaScript have two categories
// Primitive types and Reference types

// There eight basic data types in JS.

// Primitive types refer to simple fundamental data examoples icludes.
// Primitive values can only contain a single thing wheter it be a number or a string.
// string, number, Biglnt, boolean, undefined, null, Symbol, object => reference.

// boolean use to true or false
// null we want to explicity clear the value of a variable.
// Symbols which used to create unique identifiers and objects.
// reference data type => objects
// objects can more complex sturcture and they hold key values pairs this enable us to store more than one variable.

let favoriteAnime = 'Naruto';
let favoriteProgrammingLanguage = 'C';

let numberOfDonuts = 5;
let pi = 3.14;

let veryLargeNumber = 1234556776859n

let lovesCoding = true; // boolean true or false.

let favoriteColor;
console.log(favoriteColor); // It's going to undifined.

favoriteFood = null; // we want explicity clear the value of a variable.

const uniqueKey = Symbol(); // symbols which used to create unique identifiers and objects.

let course = {
    name: 'JavaScript for Beginners', // This is a object structure.
    hours: 3
};

// 4. DYANAMIC TYPING => referes to the ability to initialize a variable to one data type.
// example a string can a assign it to any other data types.

let animalName = 'Pig'; // This is a string.
console.log(animalName);

animalName = 100; // This is a number. 
console.log(animalName);

animalName = true; // This is a boolean.
console.log(animalName);

/*5. OBJECT are noun (person, place, or thing) => represent state
and behavior enabling to group together related values and make our code cleaner 
syntax uses curly braces*/ 

let language = {
    name: 'Typescript',
    days: 12
};
console.log(language); // It will display {name: 'Typescript' days: 12}.
console.log(language.name); // It will display TypeScript.

language.name = 'JavaScript Fundamentals'; /*It will display Typescrip \n JavaScript Fundamentals*/
console.log(language.name); 

console.log(language['name']); /* It indacates the name in the language variables, it will display a 
TypeScript. this a do notation*/ 

language['name'] = 404;
console.log(language['name']); /*This a bracket notation in the case you dont know which target
propety you want to access until run time*/

let property = 'hours';
console.log( language[property] ); /*It wil display the key of hours which is 3*/

/*name referred to a key
and the "Typescript" referes to a value*/

/*6. Arrays */ 

let productColors = ['blue', 'green'];

console.log(productColors); // It will display ['blue', 'green'].
console.log[productColors[0]]; // It will display the only blue becuz we start counting from zero.

productColors[0] = 42; //It will only display 42.
console.log(productColors.length); // It will display 2, becuz it only shows how many in array.

/*7. FUNCTION => buildings blocks of appliations it allows us
to group together statemets perform task or calculate*/

function sayHi() {
    console.log('Hi!'); 
}
sayHi(); // This kind only dispay the 'Hi'

function sayHi(name){
    console.log("Hi! " + name );
}
sayHi('Lian');// It display Hi! Lian.

/*8. Types of function*/

function multiply(num1, num2) {
    return num1 * num2;
}

console.log( multiply(3, 3));

/*8. Using of the operation of javascript*/

let num1 = 24;
let num2 = 10;

const isLiangwapo = num1 > num2;

console.log( isLiangwapo ); // It will print or display True

let sub1 = 24;
let sub2 = 34;

const howIsyourDay = sub1 <= sub2;

console.log( howIsyourDay );

/*9. Equality Operatos in JS*/

let a = 2;
let b = '2';

console.log (a == b);
// This a truthy dili strict.

console.log (a === b);
// This a strict.

console.log(1 == '1');

console.log(true == '1');

/*10. Ternary Operator*/

let age = 18;

const canDrive = age >= 18 ? true : false;
console.log(canDrive); // This will display a True.

let money = 110;

const typeCustomer = money > 100 ? 'Gold' : 'silver';
console.log(typeCustomer); // It will display a Gold.

/*11. Logical Operator*/ // ||, &&, !, ??
console.log(true || true); // True.
console.log(false || true );// True.
console.log(false || false); // false.

let unserChosenColor = 'red';
let defaultColor = 'pink';

const currentWebsite = userChosenColor || defaultColor;

console.log(currentWebsite); // It will display red. || if only the chosen has '' the display wil be pink.

/*12. Operator precedence*/

let elsa = 5 + 5 * 8;
console.log(elsa); // It display 45

/*13. If else in JS*/

let priceOfPizza = 78.9;
let amountMoney = 90;

const canBuyorNahh = amountMoney >= priceOfPizza;

if (canBuyorNahh) {
    console.log('Enjoy your Food');
} else {
    console.log('You have no money'); 
} // It will display Enjoy your food

/*14. switch statement*/

let job = 'Software Developer';

switch (jog) {
    case 'Software Developer':
        console.log('Writes Code');
        break;

    case 'Software Engineer':
        console.log('Maintain the Software');
        break;
    default:
        console.log('WITwew');        
}        

/*15. For Loops*/

let numbers = [1, 2, 3, 4, 5,];

for (let idx = 0; idx < numbers.length; idx++) {
    console.log(numbers[idx]);
}

for (let num1 = 0; num1 < 100; num1++) {
    console.log(num1); // It display 1 to 100.
}

/*16. While loops*/

let hays = ['lian', 'angelo'];

let idx = 0;
while (idx < hays.length) {
    console.log(hays[idx]);

    idx++; 
}
/*17. do while loops*/

let i = 0;

do {
    console.log(i);
    i++;
} while (i < 10);

/*17. The for in loop*/ // USING 'in'

let heavy = {
    rock: 'wow',
    min: 2,
    day: 4
};

for (let key in heavy) {
    console.log(course[key]); // It will display the wow, 2, and 4.
}

/*18. The for-of loop*/  // USING 'of'

let quiz = ['math', 'english', 'science'];

for (let subject of quiz) {
    console.log(quiz);
}