let user = ' LiAn_CrUspeRo_2008 ';
console.log('======CHECK POINT=======')
console.log(user.trim());



if (user.toLowerCase() === user.toLowerCase()
     && user.toUpperCase() === user.toUpperCase() && user.includes('_') && 
    user.endsWith('2008')) {
    console.log('Status: Valid!');
} else {
    console.log('Status: Invalid');
}

console.log('User Name: ' + user.trim().length);
console.log('User Name Contains Lian: ' + user.toLowerCase().includes('lian'));

console.log('User contains _: ' + user.includes('_'));
console.log('Birth Year: ' + user.trim().slice(14));
console.log('==============================');