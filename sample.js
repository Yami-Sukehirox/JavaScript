let x = 25;
let y = 15;

console.log('Coordinte x,y');

if (x > 0 && y > 0) {
    console.log('Quadrant 1, (+, +)');
} else if (x < 0 && y > o) {
    console.log('Quadrant 2, (-, +)');
} else if (x < 0 && y < 0) {
    console.log('Quadrant 3, (-, -)');
} else if (x > 0 && y < 0) {
    console.log('Quadrant 4, (+, -)');
} else if (x != 0 && y == 0) {
    console.log('X-AXIS');
} else if (x == 0 && y != 0) {
    console.log('Y-AXIS');
} else (x == 0 && y == 0) 
    console.log('ORIGIN');