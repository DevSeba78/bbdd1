const {config} = require('../config');
const objectStore = require('../config/db');
const db = objectStore.client;

class Contenedor {
    
async createTable(){
    try{
        await db.schema.createTable('productos', table => {
            table.increments('id');
            table.string('nombre');
            table.string('descripcion');
            table.decimal('precio');
            table.string('imagen');
        });
        console.log('Tabla creada', createTable);
    }catch(error){
        console.log(error);
    }


}
}

module.exports = new Contenedor();