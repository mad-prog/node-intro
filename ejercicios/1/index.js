const fs = require("fs");

const tempText = fs.readFileSync("input.txt");

const transformedText = tempText.toString("utf-8").toUpperCase();

fs.writeFileSync("./output.txt", transformedText);



