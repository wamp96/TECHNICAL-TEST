import {Application} from './app';
import {connectdb} from './database';


/**
 * Funcion main encargada de iniciar primero y ejecutar al funcion para que inicialmente realice la conexion a la base de datos
 * Se ejecuta de la clase Aplications el metodo Start para que inicie el servidor con el puerto asignado y por ultimo se llama la funcion.
 */
async function main(){
    await connectdb();    
    require ('./config/passport');  
    const app = new Application();
    app.start();
      
}

main();