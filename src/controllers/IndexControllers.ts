import {Router, Request, Response} from 'express';
    /**
    * Author: Willian Andres Moreno Prieto
    * Date:02/06/2024
    * Update Date:02/06/2024
    * Description:Clase enccargada de manejar los proceso ejecutados desde el index que es la pagina predeterminada del aplicativo
    */

 export class IndexControllers {

    /**
     * Metodo encardado de rederizar la plantilla index para enviarla como respuesta al cliente
     * @param res Se utiliza el parametro res.render para renderizar la vista index.
     * @returns Devuelve la respuesta al cliente seguin el metodo GET /index
     */
    public static async renderIndex(req: Request, res: Response): Promise<void>{
        res.render("index");
    }
 }
