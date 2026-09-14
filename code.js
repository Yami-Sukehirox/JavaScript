const student = {
    name: 'Lian',
    lastName: 'Cruspero',
    course: 'BSIT',
    yearLevel: 1,
    lovesCoding: true,
    average: 98
};

const programmingLanguages = ['C', 'C++', 'JavaScript'];

function showStudentInfo() {
console.log('====STUDENT PROFILE====');
console.log('Name: ' + student.name + ' ' +student.lastName);
console.log('Course: ' + student.course);
console.log('===================================')
if (student.course === 'BSIT' || student.course === 'BSCS' ){
    console.log('IT-related student');
}
console.log('========================YEAR LEVEL==========================')
if (student.course === 'BSIT' && student.yearLevel === 1) {
    console.log('Level: First Year BSIT STUDENT');
} else if (student.course === 'BSIT' && student.yearLevel === 2) {
    console.log('Level: Second Year BSIT STUDENT');
    } else if (student.course === 'BSIT' && student.yearLevel === 3) {
        console.log('Level: Third Year BSIT STUDENT');
} else {
    console.log('Level: Fourth Year BSIT STUDENT');
}
console.log('===========================')
if (student.lovesCoding === true) {
    console.log('Loves Coding: Yes!');
} else {
    console.log('Loves Coding: No!');
}
console.log('======================================')
if (student.course === 'BSIT' && student.lovesCoding === true) {
    console.log('Interested in IT and Coding');
}

console.log('===============LANGUAGES====================')

console.log('Programming Languages:' );

console.log(programmingLanguages[0]);
console.log(programmingLanguages[1]);
console.log(programmingLanguages[2]);

console.log('======STUDENT AVERAGE=========')
console.log('Average: ' + student.average);

if (student.average >= 90) {
    console.log('Status: Excellent!');
} else if (student.average >= 75) {
    console.log('Status: Passed!');
} else {
    console.log('Status: Failed!');
}

if (student.average >= 90 && student.lovesCoding === true) {
    console.log('Excellent student who loves coding.');
}
console.log('======CONGRATSSS========');
if (student.course === 'BSIT' && student.yearLevel === 1){
    console.log('You are a great First Year Student!');
} else {
    console.log('You are not a First Year student.')
}

}

showStudentInfo();
