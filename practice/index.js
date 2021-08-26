// require("./app/index");

const fs = require("fs");

/* 
User
age: number
password: string
sex: 'MALE' | 'FEMALE'
profile:{
    userName: string,
    firstName: string,
    lastName: string,
    dateOfBirth: Date
}
email: string
isMarried: boolean
children:[
    User
]
 */
const USER_COUNT = 22;
const SEX = { MALE: "MALE", FEMALE: "FEMALE" };
const names = [
  "Harry",
  "Ross",
  "Bruce",
  "Cook",
  "Carolyn",
  "Morgan",
  "Albert",
  "Walker",
  "Randy",
  "Reed",
  "Larry",
  "Barnes",
  "Lois",
  "Wilson",
  "Jesse",
  "Campbell",
  "Ernest",
  "Rogers",
  "Theresa",
  "Patterson",
  "Henry",
  "Simmons",
  "Michelle",
  "Perry",
  "Frank",
  "Butler",
  "Shirley",
];
const lastName = [
  "Debra",
  "Allen",
  "Gerald",
  "Harris",
  "Raymond",
  "Carter",
  "Jacqueline",
  "Torres",
  "Joseph",
  "Nelson",
  "Carlos",
  "Sanchez",
  "Ralph",
  "Clark",
  "Jean",
  "Alexander",
  "Stephen",
  "Roberts",
  "Eric",
  "Long",
  "Amanda",
  "Scott",
  "Teresa",
  "Diaz",
  "Wanda",
  "Thomas",
];
const getName = () => names[Math.floor(Math.random() * (names.length - 1))];
const getLastName = () =>
  lastName[Math.floor(Math.random() * (lastName.length - 1))];
const generateAge = () => Math.floor(Math.random() * (40 - 1)) + 1;

const getMale = () => (Math.random() > 0.5 ? SEX.MALE : SEX.FEMALE);
const getString = () => (Math.random() + 1).toString(36).substring(7);
const getMarried = () => Math.random() > 0.5;
const getProfile = () => ({
  userName: getName() + " " + getLastName(),
  firstName: getName(),
  lastName: getLastName(),
  dateOfBirth: new Date(),
});
const getUser = () => ({
  age: generateAge(),
  profile: getProfile(),
  sex: getMale(),
  isMarried: getMarried(),
  email: getString(),
  password: getString(),
});

const arr = Array.from({ length: USER_COUNT }, () => getUser());
console.log(arr);

// fs.writeFileSync("users.json", JSON.stringify(arr, null, 8), "utf8", () => {});
fs.writeFileSync("users.json", JSON.stringify(arr, null, 8), "utf8", () => {});
