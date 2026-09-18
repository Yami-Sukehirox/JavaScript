// DAY 4 => STRING
// A String is text with a single or double qoutes
let name1 = 'Lian'

// ==> Using .length ==> It tells how many character are in a string
console.log(name1.length); // The OUTPUT is ==> 4 becuz 'Lian' has have a 4 characters and also space is also a part of character

// ==> using .Accessing Chracters[] ==> you can acces a character using index
console.log(name1[2]); //The OUTPUT is ==> i becuz 2 represnt a 2 characters

//==> Using toUpperCase() ==> It changes the charcters to uppercase
console.log(name1.toUpperCase()); // ==> The OUTPUT will be LIAN.

//==> Using toLowercase() ==> It change tthe char to lowecase
let name ='LIAN'
console.log(name.toLowerCase());// ==> The OUTPUT will be lian

// ==> using includes() ==> Checks whether a string contains something.
let lang = 'I love JavaScript'
console.log(lang.includes('JavaScript')); // ==> The OUPUT will be true, thi is like boolean.

// ==> Using startsWith() ==> Checks whether a string starts with something.
let user = 'LianAngelo'
console.log(user.startsWith('Lian')); // => THE OUTPUT will be true

// ==> endsWith() ==> Checks whether a string ends with something.
let username = 'games.jv' 
console.log(username.endsWith('.jv')); // ==> OUTPUT true

// ==> slice() ==> It takes part of a string.
let prog = 'JavaScript'
console.log(prog.slice(0, 4)); // ==> OUTPUT will be Java

// ==> trim() ==> removes space in the beggining and the end.
let last = '   lian   '
console.log(last.trim()); // ==> OUTPUT will be lian

// ==> replace() ==> 
let first = 'I like C'
console.log(first.replace('C', 'JavaScript')) // ==> OUTPUT will be I like JavaScript

// ==> split() ==> turns a string into a array
let language = 'c,c++,JavaScript'
console.log(language.split(',')); // ==> OUTPUT will be ['C', C++, 'JaveScript']

// SAMPLE STRING PROBLEM
// THIS IS A CHECK POINT EXAMPLE USING STRING
let use = ' LiAn_CrUspeRo_2008 ';

const cleanUser = use.trim();
const lowerUser = cleanUser.toLowerCase();


console.log('======CHECK POINT=======')
console.log('User Name: ' + cleanUser);


if (lowerUser.includes('lian') && lowerUser.includes('cruspero') &&
    cleanUser.includes('_') && cleanUser.endsWith('2008')) {
        console.log('User Name Valid!');
    } else {
        console.log('Invalid User Name:');
    }

console.log('User Name: ' + cleanUser.length);
console.log('User Name Contains Lian: ' + lowerUser.includes('lian'));

console.log('User contains _: ' + cleanUserincludes('_'));
console.log('Birth Year: ' + cleanUser.slice(14));
console.log('==============================');

//================================================
// THIS A EXAMPLE OF USER INVESTIGATOR
let us = ' LiAn_CrUspeRo_2008 ';

const cleanUse = user.trim();
const lowerCase = cleanUse.toLowerCase();

console.log('======USERNAME INVESTIGATOR=======\n');

console.log('Username: ' + cleanUse);
console.log('Length: ' + cleanUse.length);

console.log('\nContains "Lian": ' + lowerCase.includes('lian'));
console.log('contains "_": ' + lowerCase.includes('_'));

console.log('\nFirst Character: ' + user[2]);
console.log('Last Character: ' + lowerCase.slice(17));

console.log('\nBirth Year: ' + cleanUse.slice(14));

if (lowerCase.includes('lian') && cleanUse.includes('_') && lowerCase.includes('2008')) {
    console.log('\nStatus: VALID!\n');
} else {
    console.log('\nStatus: INVALID');
}

// STRONG PASSWORD
let passWord = '  Dragon_2008  ';

const bello = passWord.trim();
const lowLife = bello.toLowerCase();

console.log('=======STRONG PASSWORD=======\n');

if (bello.includes('_') && lowLife.startsWith('dragon') && lowLife.endsWith('2008') ) {
    console.log('\nPassword Status: STRONG');
} else {
    console.log('\nPassword Status: WEAK');
} 

console.log('PassWord: ' + bello);
console.log('Length: ' + bello.length);
console.log('Contains underscore: ' + lowLife.includes('_'));
console.log('Contains Dragon: ' + lowLife.startsWith('dragon'));
console.log('Last Character: ' + bello.slice(7));


let usernamer = ' LiAn_CrUsPeRo_2008 ';

const userr = usernamer.trim();
const userrser = user.toLowerCase();

console.log('=========USERNAME VALIDATOR=======\n');

console.log('Username: ' + user);
console.log('Length: ' + user.length);

console.log('\nContains Lian: ' + lowerCase.startsWith('lian'));
console.log('Constains underscore: ' + lowerCase.includes('_'));
console.log('Ends with year: ' + user.slice(14));

if (lowerCase.includes('_') && 
    lowerCase.startsWith('lian') &&
    lowerCase.endsWith('2008') &&
    lowerCase.length >= 15) {
        console.log('\nStatus: VALID!');
    } else {
        console.log('\nStatus: INVALID');
    }

// DAY 5 ARRAYS

let languages = [
    'C',
    'Java',
    'Python'            //changing the variables
];

console.log([languages[0], languages[1]='JavaScript', languages[3]='C++']);

// USING PUSH() ==> push() put some new items
let games = ['Minecraft', 'Roblox'];

games.push('Mobile legends');

console.log(games);
//=====================================================================
let subjects = ['Programming', 'Mathematics',];

subjects.push('English', 'Science', 'Database');

console.log(subjects);

//USING POP() ===> It removes the last item

let items = ['Sword', 'Shield', 'Potion', 'Bow'];

items.pop();

console.log(items);
console.log(items.length); 
//===============================================
//unshift ==> adds item in the beginnig
//shift ==> removes the first item
let inventory = ['Potion', 'Sword', 'Shield'];

inventory.unshift('Bow');
inventory.pop();
console.log(inventory);
console.log(inventory.length);

// COMBINE ARRAYS AND CONDTION
let inventor = ['Potion', 'Sword', 'Shield'];

if (inventor.includes('Potion')) {
    console.log('Items Found');
} else {
    console.log('Item not found');
}

// indexOf ==> you want to knnow where is it
let kinds = ['Potion', 'Sword', 'Shiled', 'Bow'];

console.log(kinds.indexOf('Sword'));

// The for of loop + arrays
let names = ['lian', 'lai', 'leester'];

for (let name of names) {
    console.log(name);
} 
//================================
let lastName = ['Cruspero', 'Hinaut', 'Booc'];

for (let lastname of lastName) {

    if (lastname === 'Hinaut') {
        console.log('lastname found!');
    } 
}
//===================================
let numero = [10, 90, 44,];
let count = 0;

for (let num of numero) {
    if (num >= 10 ) {       //It wiil display 3
        count++;
    }
}
console.log(count);
//=========================================
let keys = ['Lian', 'Angelo', 'Lian', 'Cruspero'];
let way = 0;

for (let yawi of keys) {
    if(yawi === 'Lian') {   // It will display 2
        way++;
    }
}
console.log(way);

// Array + Loop + function
// THE OUTPUT WILL BE ====> 4
let elements = [
    'potion',
    'sword',
    'potion', 
    'shield',
    'potion',
    'bow',
    'potion'
];

function countpotion(elements) {
    let me = 0;

    for (let hays of elements) {
        if (hays === 'potion') {
            me++;
        }
    }
    return me;
}
console.log(countpotion(elements));


