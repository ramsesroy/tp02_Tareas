const fs = require("fs");
module.exports = {

leerJson : function() {
 return JSON.parse(fs.readFileSync('./db/tareas.json' , "utf-8"))
 }, 


 listarTareas: function () {
    let tareas = this.leerJson();
for (let i = 0; i < tareas.length; i++) {
    console.log(tareas[i]);
}

}}
