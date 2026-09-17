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

