const student = {
  name: "Lian",
  lastName: "Cruspero",
  course: "BSIT",
  yearLevel: 1,
  lovesCoding: true,
  mathematics: 98,
  programming: 97,
  algorithm: 95,
};

let programmingLanguages = ["C", "C++", "JavaScript"];

function showStudentInfo() {
  console.log("====STUDENT PROFILE====");
  console.log("Name: " + student.name + " " + student.lastName);
  console.log("Course: " + student.course);
  console.log("===================================");
  if (student.course === "BSIT" || student.course === "BSCS") {
    console.log("IT-related student");
  }
  console.log("========================YEAR LEVEL==========================");

  switch (student.yearLevel) {
    case 1:
      console.log("Year Level: First Year");
      break;
    case 2:
      console.log("Year Level: Second Year");
      break;
    case 3:
      console.log("Year Level: Third Year");
      break;
    case 4:
      console.log("Year Level: Fourth Year");
      break;
    default:
      console.log("You are not a student");
  }

  console.log("============================");
  switch (student.lovesCoding) {
    case true:
      console.log("Loves Coding: YES!");
      break;
    case false:
      console.log("Loves Coding: NO");
      break;
  }
  console.log("=======================================");
  if (student.course === "BSIT" && student.lovesCoding === true) {
    console.log("Interested in IT and Coding");
  }

  console.log("===============LANGUAGES====================");

  console.log("Programming Languages:");

  for (let idx = 0; idx < programmingLanguages.length; idx++) {
    console.log(programmingLanguages[idx]);
  }
  console.log("======STUDENT GRADE SUBJECTS==========");

  console.log("Subject MATHEMATICS: " + student.mathematics);
  console.log("Subject PROGRAMMING: " + student.programming);
  console.log("Subject ALGORITHM: " + student.algorithm);

  const average =
    (student.mathematics + student.programming + student.algorithm) / 3;

  console.log("Average: " + average);

  if (average >= 90) {
    console.log("Status: Excellent!");
  } else if (average >= 75) {
    console.log("Status: Passed");
  } else {
    console.log("Status: Failed");
  }

  if (average >= 90 && student.lovesCoding === true) {
    console.log("Excellent student who loves coding!");
  }
  console.log("========CONGRATSSS========");
  if (student.course === "BSIT" && student.yearLevel === 1) {
    console.log("You are a great First Year Student!");
  } else {
    console.log("You are not a First Year student.");
  }
}

showStudentInfo();
