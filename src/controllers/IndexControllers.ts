import {Router, Request, Response} from 'express';

 export class IndexControllers {
    public static async renderIndex(req: Request, res: Response): Promise<void>{
        res.render("index");
    }

 }
