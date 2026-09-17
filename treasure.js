console.log('============THE LOST TREASURE===========')

const player = {
    name: 'Lian',
    health: 56,
    coins: 90,
    haskey: true,
};

function showsPlayerInfo() {
    console.log('========PLAYER PROFILE======');
    console.log('Name: ' + player.name);
    console.log('Health: ' + player.health);
    console.log('My coins: ' + player.coins);


    console.log('==========CHOOSE YOUR PATH==========')

    let choice = 2;
    let heath = 56;

    function checkHealth(health) {
        if (health >= 50)
            return 'You are strong enough';
        else {
            return 'You are too weak';
        }
    }

    switch (choice) {
        case 1:
            console.log('Foreset');
            console.log('You entered the forest');
            break;
        case 2:
            console.log('Cave');
            console.log('You entered the cave');
            break;
        case 3: 
            console.log('Mountain');
            console.log('You entered tge mountain');
            break;
        default:
            console.log('Invalid Path');    
    }

    console.log(checkHealth(health));

    console.log('=========FIND THE KEY========');

    let items = ['coin', 'potion', 'key', 'map'];

    for (let item of items) {

        if (!item.startsWith("c")) {
            continue;
        }
    }

    const stopPart = items.slice(1);

    console.log(` Items: ${stopPart} ` )




















}
showsPlayerInfo();
