import express from 'express';
import morgan from 'morgan';
import path from 'path';
import { create } from "express-handlebars";

export const session = require('express-session');
export const methodOverride = require('method-override');
export const DB_PORT = process.env.DB_PORT || 4000;
/**
 * Author: Willian Andres Moreno Prieto
 * Date:31/05/2024
 * Update Date:01/06/2024
 * Description: Esta clase sera la encargada de tener la aplicacion
 */


import indexRoutes from "./routes/IndexRoutes";
import tasksRoutes from "./routes/TaskRoutes";
import authRoutes from "./routes/AuthRoutes";


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
        this.app.set("views", path.join(__dirname, "views")); 
        this.app.engine('.hbs', create({
            layoutsDir: path.join(this.app.get("views"), "layouts"),
            partialsDir: path.join(this.app.get("views"), "partials"),
            defaultLayout: "main",
            extname: ".hbs",
            //helpers: require('helpers')
        }).engine
        );
        this.app.set('view engine','.hbs');
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
        this.app.use(indexRoutes);
        this.app.use(tasksRoutes);
        this.app.use(authRoutes);
        this.app.use(express.static(path.join(__dirname, "public")));

    }


    //Creamos el metodo middlewares que sera el encargado de cargar los middlewares de la aplicacion
    middlewares(){
        this.app.use(morgan('dev'));
        this.app.use(express.urlencoded({extended: false}));
        this.app.use(methodOverride('__method__'));
        this.app.use(session({ 
            secret: 'Secretapp',
            resave: true,
            saveUninitialized: true
        }));
    }


}

