const student = {
    name: 'Lian',
    lastName: 'Cruspero',
    course: 'BSIT',
    yearLevel: 1,
    lovesCoding: true
};

const programmingLanguages = ['C', 'c++', 'JavaScript'];

function showStudentInfo() {
console.log('====STUDENT PROFILE====');
console.log('Name: ' + student.name + ' ' +student.lastName);
console.log('Course: ' + student.course);

if (student.course === 'BSIT' || student.course === 'BSCS' ){
    console.log('IT-related student');
}

if (student.course === 'BSIT' && student.yearLevel === 1) {
    console.log('Level: First Year BSIT STUDENT');
} else if (student.course === 'BSIT' && student.yearLevel === 2) {
    console.log('Level: Second Year BSIT STUDENT');
    } else if (student.course === 'BSIT' && student.yearLevel === 3) {
        console.log('Level: Third Year BSIT STUDENT');
} else {
    console.log('Level: Fourth Year BSIT STUDENT');
}
    
if (student.lovesCoding === true) {
    console.log('Loves Coding: Yes!');
} else {
    console.log('Loves Coding: No!');
}

if (student.course === 'BSIT' && student.lovesCoding === true) {
    console.log('Interested in IT and Coding');
}

console.log('Programming Languages:' );

console.log(programmingLanguages[0]);
console.log(programmingLanguages[1]);
console.log(programmingLanguages[2]);
}

showStudentInfo();