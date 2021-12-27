const express = require('express');
const app = express();
const cors = require('cors');
const {config} = require('./config');
const PORT = config.port;
const objectStore = require('./config/db');
const db = objectStore.client;
//const Contenedor = require('./components/apiService');


//Middleware
app.use(cors(config.cors));

//Setting
app.use(express.json())
app.use(express.urlencoded({extended: true}));

(async () => {
    
        try{
            let hastable = await db.schema.hasTable('productos');
            if(!hastable){
            await db.schema.createTable('productos', table => {
                table.increments('id');
                table.string('nombre');
                table.string('descripcion');
                table.decimal('precio');
                table.string('imagen');
            });
            console.log('Tabla creada', hastable);
            }
        }catch(error){
            console.log(error);
        }
    
    
    
})();





app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

