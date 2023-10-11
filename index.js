// gfdhsjkl

const students = [
  {
    name: "arun",
    gender: "Male",
    physics: 88,
    maths: 87,
    english: 78,
  },
  {
    name: "rajesh",
    gender: "Male",
    physics: 96,
    maths: 100,
    english: 95,
  },
  {
    name: "moorthy",
    gender: "Male",
    physics: 89,
    maths: 90,
    english: 70,
  },
  {
    name: "raja",
    gender: "Male",
    physics: 30,
    maths: 25,
    english: 40,
  },
  {
    name: "usha",
    gender: "Female",
    physics: 67,
    maths: 45,
    english: 78,
  },
  {
    name: "priya",
    gender: "Female",
    physics: 56,
    maths: 46,
    english: 78,
  },
  {
    name: "Sundar",
    gender: "Male",
    physics: 12,
    maths: 67,
    english: 67,
  },
  {
    name: "Kavitha",
    gender: "Female",
    physics: 78,
    maths: 71,
    english: 67,
  },
  {
    name: "Dinesh",
    gender: "Male",
    physics: 56,
    maths: 45,
    english: 67,
  },
  {
    name: "Hema",
    gender: "Female",
    physics: 71,
    maths: 90,
    english: 23,
  },
  {
    name: "Gowri",
    gender: "Female",
    physics: 100,
    maths: 100,
    english: 100,
  },
  {
    name: "Ram",
    gender: "Male",
    physics: 78,
    maths: 55,
    english: 47,
  },
  {
    name: "Murugan",
    gender: "Male",
    physics: 34,
    maths: 89,
    english: 78,
  },
  {
    name: "Jenifer",
    gender: "Female",
    physics: 67,
    maths: 88,
    english: 90,
  },
];

const studentsData = students.map((student) => {
  student.average = (student.physics + student.maths + student.english) / 3;
  // console.log(student.average);
  return student;
});

const excellentStudents = studentsData
  .filter((item) => {
    return item.average >= 100;
  })
  .map((item) => item.name);

const maleStudents = studentsData.filter((item) => item.gender === "Male");
const femaleStudents = studentsData.filter((item) => item.gender === "Female");

console.log(studentsData);
console.log(excellentStudents);
console.log(maleStudents);
console.log(femaleStudents);

// // Create an array to store JAMB student objects
// const students = [];

// // Define JAMB student objects for 5 students
// const student1 = {
//   firstName: "John",
//   lastName: "Doe",
//   email: "john.doe@example.com",
//   phone: "555-555-5555",
//   address: "123 Main Street, City, Country",
//   age: 20,
//   score: 79,
// };

// const student2 = {
//   firstName: "Jane",
//   lastName: "Smith",
//   email: "jane.smith@example.com",
//   phone: "555-555-5556",
//   address: "456 Elm Street, City, Country",
//   age: 21,
//   score: 69,
// };

// const student3 = {
//   firstName: "David",
//   lastName: "Johnson",
//   email: "david.johnson@example.com",
//   phone: "555-555-5557",
//   address: "789 Oak Street, City, Country",
//   age: 19,
//   score: 59,
// };

// const student4 = {
//   firstName: "Sarah",
//   lastName: "Brown",
//   email: "sarah.brown@example.com",
//   phone: "555-555-5558",
//   address: "101 Pine Street, City, Country",
//   age: 22,
//   score: 89,
// };

// const student5 = {
//   firstName: "Michael",
//   lastName: "Lee",
//   email: "michael.lee@example.com",
//   phone: "555-555-5559",
//   address: "222 Maple Street, City, Country",
//   age: 20,
//   score: 49,
// };

// // Push each student object into the array
// students.push(student1);
// students.push(student2);
// students.push(student3);
// students.push(student4);
// students.push(student5);

// console.log(students);

// const arrOffifteenItems = [];
// arrOffifteenItems.push("shpe");
// arrOffifteenItems.push("FALL");
// arrOffifteenItems.push("yarn");
// arrOffifteenItems.push("npm");
// arrOffifteenItems.push(6789);
// arrOffifteenItems.push(567);
// arrOffifteenItems.push(567);
// arrOffifteenItems.push(567);
// arrOffifteenItems.push("sudo");
// arrOffifteenItems.push("sharp");
// arrOffifteenItems.push("take");
// arrOffifteenItems.push("sip");
// arrOffifteenItems.push("stroll");
// arrOffifteenItems.push("eyre");
// arrOffifteenItems.push("shore");
// console.log(arrOffifteenItems);

// if (students[4].score >= 70) {
//   console.log(
//     `${students[4].firstName} ${students[4].lastName} has passed excellently`
//   );
// } else if (students[4].score < 70 && students[4] > 60) {
//   console.log(
//     `${students[4].firstName} ${students[4].lastName} has passed very well`
//   );
// } else if (students[4].score > 49 && students[4].score < 59) {
//   console.log(`${students[4].firstName} ${students[4].lastName} has passed`);
// } else if (students[4].score < 50) {
//   console.log(`${students[4].firstName} ${students[4].lastName} has failed`);
// }

// Assignment

// const ebube = {
//   name: "Ebube Nwanze",
//   Age: 17,
//   payments: true,
// };
// const chika = {
//   name: "Chikadibia",
//   Age: 13,
//   payments: false,
// };

// const gradeChecker = (person) => {
//   if (person.payments && person.Age > 16 && person.name.includes("a")) {
//     console.log(`${person.name} is in Grade A`);
//   } else if (
//     (person.payments && person.Age > 16) ||
//     person.name.includes("a")
//   ) {
//     console.log(`${person.name} is in Grade B`);
//   } else if (
//     person.payments ||
//     (person.Age > 16 && person.name.includes("a"))
//   ) {
//     console.log(`${person.name} is in Grade C`);
//   }
// };

// gradeChecker(ebube);
// gradeChecker(chika);
