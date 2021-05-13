const fs = require("fs");
let tareas =  JSON.parse(fs.readFileSync('./tareas.json' , "utf-8"))
console.log(tareas); 

