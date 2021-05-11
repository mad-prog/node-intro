const cowsay = require("cowsay");
const fs = require("fs");
const cowtalk = cowsay.say({
	text : "Codehouse Academy",
	e : "oO",
	T : "U "
});

fs.writeFileSync("./output.txt", cowtalk);

console.log("Tercer ejercicio");
