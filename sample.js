let items = ['coin', 'potion', 'key', 'map'];

    for (let key of items) {
        if (key.slice(0)) {
            continue;
        }
        console.log(key);
    }