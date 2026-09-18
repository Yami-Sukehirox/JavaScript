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