import express from 'express';
import morgan from 'morgan';
import {engine} from 'express-handlebars';
import path from 'path';
import {DB_PORT} from "./database"


/**
 * Author: Willian Andres Moreno Prieto
 * Date:31/05/2024
 * Update Date:31/05/2024
 * Description: Esta clase sera la encargada de tener la aplicacion
 */

export class Application {

    //Craemos la propiedad app la cual sera una instancia de la aplicacion de Express
    app: express.Application;

    //Creamos el constructor de la clase Application
    constructor() {
        //Creamos la propiedad app la cual sera una instancia de la aplicacion de Express
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    /**
     * 
     * 
     */
    settings(){   
        const DB_PORT = process.env.DB_PORT || 3000;
        this.app.set('views', path.join(__dirname, 'views'));    
        this.app.engine('.hbs', engine(
            {
                layoutsDir: path.join(this.app.get('views'), 'layouts'),
                partialsDir: path.join(this.app.get('views'), 'partials'),
                defaultLayout: 'main',
                extname: '.hbs',
            }
        ));
        this.app.set('view engine', '.hbs');
    }

    //Creamos el metodo start que sera el encargado de iniciar la aplicacion y dentro ejecutamos el metodo listen de la propiedad app que empezara a ejecutar el servidor local.  
    start(): void{
        //Se crea el servidor y se genera el puerto segun lo envio recibido desde el metodo setting 
        this.app.listen(DB_PORT, ()=>{
            console.log('Server running ',DB_PORT);
        });
    }

    //Creamos el metodo routes que sera el encargado de cargar las rutas de la aplicacion
    routes(){


    }


    //Creamos el metodo middlewares que sera el encargado de cargar los middlewares de la aplicacion
    middlewares(){
        this.app.use(morgan('dev'));
    }


}

