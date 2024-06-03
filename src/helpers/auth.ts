import { Request, Response, NextFunction} from 'express';

export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
    if(req.isAuthenticated ()){
        return next();
    }    
    req.flash('error_msg', 'No Autorizado');
    res.redirect('/auth/signin');
};