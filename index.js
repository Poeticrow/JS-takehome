const blogPost = [
  {
    imgUrl:
      "https://www.naijaloaded.com.ng/wp-content/uploads/2021/03/black-camaru-thinking-funny-laughing.jpg",
    post: "ENGLISH STUDENTS!!! None Of You All Can Win This Challenge - Prove Me Wrong",
  },
  {
    imgUrl:
      "https://www.naijaloaded.com.ng/wp-content/uploads/2023/01/davido-wizkid.jpg",
    post: "If You're To Suggest A Cute Twins Name For Davido's New Babies - What Names Will You Drop",
  },
  {
    imgUrl:
      "https://www.naijaloaded.com.ng/wp-content/uploads/2023/03/Zinoleesky-1-e1685548421802.jpg",
    post: "LET'S TALK!! If Zinoleesky Drop a Song Today, Will You Jam It Or He Remains Cancelled In Your Book?",
  },
  {
    imgUrl:
      "https://www.naijaloaded.com.ng/wp-content/uploads/2023/10/Love-Damini-vs-I-Told-Them.jpg",
    post: "MUSIC LOVERS!! Which Is A Better Album - “Love,Damini” Or “I Told Them”?",
  },
  {
    imgUrl:
      "https://www.naijaloaded.com.ng/wp-content/uploads/2023/10/Untitled-collage-3-e1530261995213.jpg",
    post: "LET's TALK!!! Drake Vs Ronaldo - Who Do You Think Is More Famous",
  },
  {
    imgUrl:
      "https://www.naijaloaded.com.ng/wp-content/uploads/2023/04/praying-nigeria-1-717x472_c.jpg",
    post: "BE SINCERE!!! How Desperate Are You To Get Rich? - Can You Say Amen To This Prayer?",
  },
  {
    imgUrl:
      "https://www.naijaloaded.com.ng/wp-content/uploads/2023/10/Arm-wrestling.jpg",
    post: "TELL US!! Between Rambo And Arnold Schwarzenegger - Who Wins This Arm Wrestling Match?",
  },
  {
    imgUrl:
      "https://www.naijaloaded.com.ng/wp-content/uploads/2023/10/Wizkid.jpg",
    post: "PARTY OF THE YEAR!! Money Rains As Tiwa, Kwam 1, Tony Elumelu, Oba Elegushi, Other Celebs Storm Wizkid's Mother's Grand Burial [WATCH]",
  },
  {
    imgUrl:
      "https://www.naijaloaded.com.ng/wp-content/uploads/2023/10/83511.jpg",
    post: "TELL US! What Is That One Thing You Need Right Now That Can Make You Very Happy?",
  },
  {
    imgUrl:
      "https://www.naijaloaded.com.ng/wp-content/uploads/2023/10/angry.jpg",
    post: "TELL US! What Calms You Down When You're Angry?",
  },
  {
    imgUrl:
      "https://www.naijaloaded.com.ng/wp-content/uploads/2023/10/100-Dollar-daily-by-Makinde-Azeez.jpg",
    post: "Discover My 2 Amazing Scopes Of Earning $100 (₦100,000) Daily and a Total of $2,000 (2 Milion Naira) Monthly",
  },
  {
    imgUrl:
      "https://www.naijaloaded.com.ng/wp-content/uploads/2020/06/man-looking-carefully-closely.jpg",
    post: "How Good Are Your Eyes? Oya You Spot The Pussy Cat In This Photo ",
  },
];
const mybody = document.querySelector("body");
const button = document.querySelector(".btn");
const blogs = document.querySelector(".blog-posts");
const cards = document.querySelector(".cards");

const toggleDarkMode = () => {
  mybody.classList.toggle("dark");
};

button.addEventListener("click", toggleDarkMode);

blogPost.forEach((blog) => {
  blogs.innerHTML += `
    <div class="blog">
            <img src="${blog.imgUrl}" alt="alt">
        <p>${blog.post}</p>
    </div>
    `;
});

const button2 = document.getElementById("bbtn");

const handleForm = (e) => {
  // console.log(e);
  e.preventDefault();
  const email = document.getElementById("i1").value;
  const password = document.getElementById("i2").value;

  const errorOne = document.getElementById("error1");
  const errortwo = document.getElementById("error2");

  if (!email) {
    errorOne.textContent = "Please enter an email";
  }

  if (!password) {
    errortwo.textContent = "Input Password";
  }
  console.log({ email, password });
};
button2.addEventListener("click", handleForm);

const fetchUrlAndDisplay = async () => {
  try {
    const ships = await fetch("https://swapi.dev/api/starships/")
      .then((res) => res.json())
      .then((data) => data.results);
    console.log(ships);
    ships.forEach((ship) => {
      cards.innerHTML += `<div class="card">
      <h2>${ship.name}</h2>
      <div class="info">
        <span>Model : ${ship.model}</span>
        <span>price : $${ship.cost_in_credits}</span>
        <span>passengers : ${ship.passengers} people</span>
        <span>crew : ${ship.crew} personnel</span>
        <span>capacity : ${ship.cargo_capacity} load</span>
        <span>Top speed : ${ship.max_atmosphering_speed} km/s</span>
        <span>Classification : ${ship.starship_class}</span>
      </div>
    </div>`;
    });
  } catch (err) {
    console.error(err.message);
  }
};
fetchUrlAndDisplay();

// fetch("https://jsonplaceholder.typicode.com/comments")
//   .then((response) => response.json())
//   .then((data) => console.log(data));
// const students = [
//   {
//     name: "arun",
//     gender: "Male",
//     physics: 88,
//     maths: 87,
//     english: 78,
//   },
//   {
//     name: "rajesh",
//     gender: "Male",
//     physics: 96,
//     maths: 100,
//     english: 95,
//   },
//   {
//     name: "moorthy",
//     gender: "Male",
//     physics: 89,
//     maths: 90,
//     english: 70,
//   },
//   {
//     name: "raja",
//     gender: "Male",
//     physics: 30,
//     maths: 25,
//     english: 40,
//   },
//   {
//     name: "usha",
//     gender: "Female",
//     physics: 67,
//     maths: 45,
//     english: 78,
//   },
//   {
//     name: "priya",
//     gender: "Female",
//     physics: 56,
//     maths: 46,
//     english: 78,
//   },
//   {
//     name: "Sundar",
//     gender: "Male",
//     physics: 12,
//     maths: 67,
//     english: 67,
//   },
//   {
//     name: "Kavitha",
//     gender: "Female",
//     physics: 78,
//     maths: 71,
//     english: 67,
//   },
//   {
//     name: "Dinesh",
//     gender: "Male",
//     physics: 56,
//     maths: 45,
//     english: 67,
//   },
//   {
//     name: "Hema",
//     gender: "Female",
//     physics: 71,
//     maths: 90,
//     english: 23,
//   },
//   {
//     name: "Gowri",
//     gender: "Female",
//     physics: 100,
//     maths: 100,
//     english: 100,
//   },
//   {
//     name: "Ram",
//     gender: "Male",
//     physics: 78,
//     maths: 55,
//     english: 47,
//   },
//   {
//     name: "Murugan",
//     gender: "Male",
//     physics: 34,
//     maths: 89,
//     english: 78,
//   },
//   {
//     name: "Jenifer",
//     gender: "Female",
//     physics: 67,
//     maths: 88,
//     english: 90,
//   },
// ];

// const studentsData = students.map((student) => {
//   student.average = (student.physics + student.maths + student.english) / 3;
//   // console.log(student.average);
//   return student;
// });

// const excellentStudents = studentsData
//   .filter((item) => {
//     return item.average >= 100;
//   })
//   .map((item) => item.name);

// const maleStudents = studentsData.filter((item) => item.gender === "Male");
// const femaleStudents = studentsData.filter((item) => item.gender === "Female");

// console.log(studentsData);
// console.log(excellentStudents);
// console.log(maleStudents);
// console.log(femaleStudents);

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
