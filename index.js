#!/usr/bin/env node

import boxen from "boxen";
import chalk from "chalk";

const y = chalk.yellow;
const g = chalk.green;
const b = chalk.bold;
const i = chalk.italic;
const u = chalk.underline;

console.log(chalk.blue("Welcome to my home!"));

const cardOptions = {
  title: `${b("Ravi Raj Bhardwaj")} - ${i("SDE")}`,
  titleAlignment: "left",
  borderColor: "blue",
  borderStyle: "bold",
  width: 85,
  height: 18,
  padding: 1,
  margin: 1,
};

const content = `
${b(`A self taught software engineer, part time cook and a lover of all things tech⚒️ 
I mainly work with ${i("JavaScript")}, ${i("Python")} and ${i(
  "Rust"
)} on a daily basis`)}

${b("Socil Link -")}
${y("Twitter")}            ${g(`${u("https://x.com/ravirajbhrdwaj")}`)}
${y("GitHub")}             ${g(`${u("https://github.com/ravirajbhardwaj")}`)}
${y("Website")}            ${g(`${u("https://ravirajbhardwaj.vercel.app")}`)}

${b("Project Link -")}
${y("Authentication")}     ${g(
  `${u("https://github.com/ravirajbhardwaj/authentication")}`
)}
${y("Trackist")}            ${g(
  `${u("https://github.com/ravirajbhardwaj/trackist")}`
)}
${y("Leetlab")}             ${g(
  `${u("https://github.com/ravirajbhardwaj/leetlab")}`
)}
`;

console.log(boxen(content, cardOptions));
