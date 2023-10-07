// Create an array to store JAMB student objects
const students = [];

// Define JAMB student objects for 5 students
const student1 = {
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
  phone: "555-555-5555",
  address: "123 Main Street, City, Country",
  age: 20,
  score: 79,
};

const student2 = {
  firstName: "Jane",
  lastName: "Smith",
  email: "jane.smith@example.com",
  phone: "555-555-5556",
  address: "456 Elm Street, City, Country",
  age: 21,
  score: 69,
};

const student3 = {
  firstName: "David",
  lastName: "Johnson",
  email: "david.johnson@example.com",
  phone: "555-555-5557",
  address: "789 Oak Street, City, Country",
  age: 19,
  score: 59,
};

const student4 = {
  firstName: "Sarah",
  lastName: "Brown",
  email: "sarah.brown@example.com",
  phone: "555-555-5558",
  address: "101 Pine Street, City, Country",
  age: 22,
  score: 89,
};

const student5 = {
  firstName: "Michael",
  lastName: "Lee",
  email: "michael.lee@example.com",
  phone: "555-555-5559",
  address: "222 Maple Street, City, Country",
  age: 20,
  score: 49,
};

// Push each student object into the array
students.push(student1);
students.push(student2);
students.push(student3);
students.push(student4);
students.push(student5);

console.log(students);

const arrOf15Items = [];
arrOffifteenItems.push("shpe");
arrOffifteenItems.push("FALL");
arrOffifteenItems.push("yarn");
arrOffifteenItems.push("npm");
arrOffifteenItems.push(6789);
arrOffifteenItems.push(567);
arrOffifteenItems.push(567);
arrOffifteenItems.push(567);
arrOffifteenItems.push("sudo");
arrOffifteenItems.push("sharp");
arrOffifteenItems.push("take");
arrOffifteenItems.push("sip");
arrOffifteenItems.push("stroll");
arrOffifteenItems.push("eyre");
arrOffifteenItems.push("shore");
console.log(arrOf15Items);

if (students[3].score >= 70) {
  console.log(
    `${students[2].firstName} ${students[2].lastName} has passed excellently`
  );
} else if (students[2].score < 70) {
  console.log(
    `${students[2].firstName} ${students[2].lastName} has passed very well`
  );
} else if (students[2].score > 49 && students[2].score < 59) {
  console.log(`${students[2].firstName} ${students[2].lastName} has passed`);
} else if (students[2].score < 50) {
  console.log(`${students[2].firstName} ${students[2].lastName} has failed`);
}
