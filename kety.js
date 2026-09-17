  console.log('=========FIND THE KEY========');

    let items = ['coin', 'potion', 'key', 'map'];

    for (let item of items) {

        if (!item.startsWith("c")) {
            continue;
        }
    }

    const stopPart = items.slice(1);

    console.log(` Items: ${stopPart} ` )