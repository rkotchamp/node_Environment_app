require("dotenv").config();
const port = process.env.SERVER_PORT;

console.log(
  `I am ${process.env.MY_NAME}, wilder in ${process.env.MY_CITY} and I love ${process.env.MY_LANGUAGE}`
);
