import {Application} from './app';
import {connectdb} from './database';
//import {passport} from './config/passport.js';


async function main(){
    await connectdb();    
    const app = new Application();
    app.start();
    // passport();    
}

main();