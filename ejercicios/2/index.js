const os = require("os");
const fs = require("fs");

const freemem = os.freemem();
//free memory

const dirhome = os.homedir();
//string path of homedirectory

const cpus = os.cpus();
//array of objects of each CPU core

const platform = os.platform();
//string operating system

const arch = os.arch();
//returns architecture of CPUs operating system

const  version = os.version();
//string of kernel version

const loadavg = os.loadavg();
//returns array of 1.5 and 15mintue loading averages

const total = "free memory: " + freemem + " Architecture of CPU: " + arch + " Version: " + version;

fs.writeFileSync("./output.txt", total);

console.log("Segundo ejercicio");


