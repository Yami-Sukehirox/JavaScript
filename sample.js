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