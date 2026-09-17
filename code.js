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
  console.log("=========STUDENT PROFILE========\n");
  console.log("Name: " + student.name + " " + student.lastName);
  console.log("Course: " + student.course);
  console.log("\n==============================\n");
  if (student.course === "BSIT" || student.course === "BSCS") {
    console.log("IT-related student");
  }
  console.log("\n==============YEAR LEVEL===============\n");

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

  console.log("\n=======================\n");
  switch (student.lovesCoding) {
    case true:
      console.log("Loves Coding: YES!");
      break;
    case false:
      console.log("Loves Coding: NO");
      break;
  }
  console.log("\n===============================");
  if (student.course === "BSIT" && student.lovesCoding === true) {
    console.log("Interested in IT and Coding");
  }

  console.log("\n===========LANGUAGES==============\n");

  console.log("Programming Languages:");

  let languagesIndex = 0;
  while (languagesIndex < programmingLanguages.length) {
    console.log(
      "Language " +
        (languagesIndex + 1) + ": " +
        programmingLanguages[languagesIndex],
    );

    languagesIndex++;
  }
  console.log("\n======STUDENT GRADE SUBJECTS========\n");

  console.log("Subject MATHEMATICS: " + student.mathematics);
  console.log("Subject PROGRAMMING: " + student.programming);
  console.log("Subject ALGORITHM: " + student.algorithm);

  const average = (student.mathematics + student.programming + student.algorithm) / 3;

  console.log("\nAverage: " + average);

  function grades(average) {
    if (average >= 90) 
      return "\nStatus: Excellent\n";
    else if (average >= 75) 
      return "\nStatus: Passed\n";
    else 
      return "\nStatus: Failed\n";
  }

  console.log(grades(average));

  if (average >= 90 && student.lovesCoding === true) {
    console.log("\nExcellent student who loves coding!");
  }
  console.log("\n========CONGRATSSS========\n");
  if (student.course === "BSIT" && student.yearLevel === 1) {
    console.log("You are a great First Year Student!");
  } else {
    console.log("You are not a First Year student.");
  }
}
showStudentInfo();
