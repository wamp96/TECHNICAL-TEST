import {Application} from './app';
import {connectdb} from './database';


async function main(){
    await connectdb();
    const app = new Application();
    app.start();
}

main();