"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const express_handlebars_1 = require("express-handlebars");
const path_1 = __importDefault(require("path"));
/**
 * Author: Willian Andres Moreno Prieto
 * Date:31/05/2024
 * Update Date:31/05/2024
 * Description: Esta clase sera la encargada de tener la aplicacion
 */
class Application {
    //Creamos el constructor de la clase Application
    constructor() {
        //Creamos la propiedad app la cual sera una instancia de la aplicacion de Express
        this.app = (0, express_1.default)();
        this.settings();
        this.middlewares();
        this.routes();
        this.start();
    }
    /**
     *
     *
     */
    settings() {
        this.app.set('port', 3000);
        this.app.set('views', path_1.default.join(__dirname, 'views'));
        this.app.engine('.hbs', (0, express_handlebars_1.engine)({
            layoutsDir: path_1.default.join(this.app.get('views'), 'layouts'),
            partialsDir: path_1.default.join(this.app.get('views'), 'partials'),
            defaultLayout: 'main',
            extname: '.hbs',
        }));
        this.app.set('view engine', '.hbs');
    }
    //Creamos el metodo start que sera el encargado de iniciar la aplicacion y dentro ejecutamos el metodo listen de la propiedad app que empezara a ejecutar el servidor local.  
    start() {
        //Se crea el servidor y se genera el puerto segun lo envio recibido desde el metodo setting 
        this.app.listen(this.app.get('port'), () => {
            console.log('Server running');
        });
    }
    //Creamos el metodo routes que sera el encargado de cargar las rutas de la aplicacion
    routes() {
    }
    //Creamos el metodo middlewares que sera el encargado de cargar los middlewares de la aplicacion
    middlewares() {
        this.app.use((0, morgan_1.default)('dev'));
    }
}
exports.default = Application;
