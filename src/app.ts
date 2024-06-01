import express from 'express';
import morgan from 'morgan';
import {engine} from 'express-handlebars';
import path from 'path';

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
        this.settings();
        this.middlewares();
        this.routes();
        this.start();
    }

    settings(){
        //Puerto que se desea enviar para la conexion al servidor
        this.app.set('port',5000);
        //
        this.app.set('views', path.join(__dirname, 'views'));
        //
        this.app.engine('.hbs', engine(
            {
                layoutsDir: path.join(this.app.get('views'), 'layouts'),
                partialsDir: path.join(this.app.get('views'), 'partials'),
                defaultLayout: 'main',
                extname: '.hbs',
            }
        ));
    }

    //Creamos el metodo start que sera el encargado de iniciar la aplicacion y dentro ejecutamos el metodo listen de la propiedad app que empezara a ejecutar el servidor local.  
    start(){
       try {
        //Se crea el servidor y se genera el puerto segun lo envio recibido desde el metodo setting 
        this.app.listen(this.app.get('port'), ()=>{
            console.log('Server running', this.app.get('port'));
        });
       } catch (error) {
        console.log(error);
       }
    }

    //Creamos el metodo routes que sera el encargado de cargar las rutas de la aplicacion
    routes(){


    }


    //Creamos el metodo middlewares que sera el encargado de cargar los middlewares de la aplicacion
    middlewares(){
        this.app.use(morgan('dev'));
    }


}


export default Application;