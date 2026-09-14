const student = {
    Name: 'Lian',
    LastName: 'Cruspero',
    Course: 'BSIT',
    YearLevel: 1,
    LovesCoding: true
};

console.log(typeof(student.Name));
const programmingLanguages = ['C ', 'c++ ', 'JavaScript'];

function showStudentInfo() {
console.log('====STUDENT PROFILE====');
console.log('Name: ' + student.Name + '' +student.LastName);
console.log('Course:' + student.Course);
console.log('Year Leve:'+ student.YearLevel);
console.log('Love Coding:'+ student.LovesCoding);


console.log('Programming Languages:' );

console.log(programmingLanguages[0]);
console.log(programmingLanguages[1]);
console.log(programmingLanguages[2]);
}
showStudentInfo();