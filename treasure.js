console.log('\n============THE LOST TREASURE===========\n')

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


    console.log('\n==========CHOOSE==========\n')

    console.log('Choose your path:\n');
    console.log('1. Cave');
    console.log('2. Forest');
    console.log('3. Mountain\n');
    
    let choice = 2;
    let health = 56;

    function checkHealth(health) {
        if (health >= 50)
            return 'You are strong enough\n';
        else {
            return 'You are too weak\n';
        }
    }

    switch (choice) {
        case 1:
            console.log('Foreset\n');
            console.log('You entered the forest\n');
            break;
        case 2:
            console.log('Cave\n');
            console.log('You entered the cave\n');
            break;
        case 3: 
            console.log('Mountain\n');
            console.log('You entered tge mountain\n');
            break;
        default:
            console.log('Invalid Path\n');    
    }

    console.log(checkHealth(health));

    console.log('=========YOU FOUND SOME ITEMS========\n');

    let items = ['coin ', 'potion ', 'key ', 'map '];

    for (let item of items) {

        if (!item.startsWith("c")) {
            continue;
        }
    }

    const stopPart = items.slice(1);

    console.log(` Items: ${stopPart} ` )

    console.log('\n=======FIND THE TREASURE==========');

   let treasure = {
        location: 'cave',
        coins: 100,
        guarded: true
   };

   for (let wow in treasure) {
    
        console.log(treasure[wow]);
        
   }

        if (treasure.guarded) {
            console.log('\nThe treasure is guarded!');
        } else {
            console.log('Take the treasure');
        }
   
    




















}
showsPlayerInfo();
