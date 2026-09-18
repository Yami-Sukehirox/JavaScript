
let treasure = [
    'Sword',
    'Potion',
    'Shield',
    'Bow'
];

function checkItem(treasure, item) {
    let yes = false;

    for (let mine of treasure) {
        if (mine === item) {
            yes = true;
        }
    }

    if (yes) {
        console.log('ITem found');  
    } else {
        console.log('Item not found');
    }
}
    


console.log(checkItem(treasure, 'Sword'));
console.log(checkItem(treasure, 'wand'));