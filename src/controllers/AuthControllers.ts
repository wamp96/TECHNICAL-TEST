import passport from "passport";
import { NextFunction, Request , Response } from "express";
import User from '../models/User';
import * as passportConfig from '../config/passport';


/**
 * Author: Willian Andres Moreno Prieto
 * Date:02/06/2024
 * Update Date:02/06/2024
 * Description: Esta clase es la encarga de validar la autenticacion al momento de ingresar con un usuario ya creado
 */

export class AuthController{

    public static rendersignupForm(req:Request,res:Response): void {
        res.render("auth/signup");    
    };

    public static async signup(req:Request,res:Response): Promise<void> {
        let error = [];
        const {name, email, password, confirm_password} = req.body;
        if(password!=confirm_password){
            error.push({text: "Las contraseñas no coinciden"});
        }
        if(password.length<4){
            error.push({text: "La contraseña debe tener al menos 4 caracteres"});
        }
        if(error.length>0){
            res.render("auth/signup",{
                error,
                name,
                email,
                password,
                confirm_password
            });
        }else{         
            const userFound = await User.findOne({email:email});
                if (userFound){
                    req.flash("error_msg", "El correo ingresado esta en uso");
                    return res.redirect("/auth/signup");
                }
            const newUser = new User({name, email, password});
            newUser.password = await newUser.encryptPassword('password');
            await newUser.save();
            req.flash("success_msg", "Usuario Registrado");
            return res.redirect("/auth/signin");
        }        
    };

    public static rendersigninForm(req: Request, res: Response): void {
        res.render("auth/signin");
    };

    public static async signin(req:Request,res:Response,  next: NextFunction): Promise<void>{
       passport.authenticate('local'),(err: any,user: Express.User,info: any)=>{

        if (!user) {
            req.flash('error_msg', 'Usuario o contraseña incorrectos');
            return res.redirect('/auth/signin');
         }
             req.logIn(user, (err) => {
             if (err) { return next(err); }
             return res.redirect('/tasks/list');
         }
        );
         
    //     successRedirect: "/tasks/list",
        
    //     failureRedirect: "/auth/signin",
    //     failureFlash: true,
        };
    };

    public static async logout(req: Request, res: Response, next: NextFunction): Promise<void> {
        await req.logout((err)=>{
            if (err) return next(err);
            req.flash("success_msg", "Usuario Registrado");
        return res.redirect("/auth/signin");
        });  
    };
}

passportConfig; 