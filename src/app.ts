import express from 'express';

/**
 * Author: Willian Andres Moreno Prieto
 * Date:31/05/2024
 * Update Date:31/05/2024
 * Description: Esta clase sera la encargada de tener la aplicacion
 */

class Application {

    //Craemos la propiedad app la cual sera una instancia de la aplicacion de Express
    app: express.Application;

    //Creamos el constructor de la clase Application
    constructor() {
        //Creamos la propiedad app la cual sera una instancia de la aplicacion de Express
        this.app = express();
    }

    //Creamos el metodo start que sera el encargado de iniciar la aplicacion y dentro ejecutamos el metodo listen de la propiedad app que empezara a ejecutar el servidor local.  
    start(){
       try {
        this.app.listen(3000, ()=>{
            console.log('Server running');
        });
       } catch (error) {
        console.log(error);
       }

    }
}


export default Application;