import { NextFunction, Request , Response } from "express";
import User from '../models/User';
import bcrypt from 'bcrypt';
import passport from 'passport';



/**
 * Author: Willian Andres Moreno Prieto
 * Date:02/06/2024
 * Update Date:02/06/2024
 * Description: Esta clase es la encarga de validar la autenticacion al momento de ingresar con un usuario ya creado
 */

export class AuthController{
    private passport: passport.PassportStatic;

    constructor(passportInstance: passport.PassportStatic) {
        this.passport = passportInstance;
    }
    /**Metodo utilizado para renderizar la vista y enviar la respuesta al cliente segun la consulta HTTP realizada
     * @param res Se renderiza la vista con res.render lo cual permite tener como respuesta la vista signup
     */
    public static rendersignupForm(req:Request,res:Response): void {
        res.render("auth/signup");    
    };

    /**
     * Metodo utilizado para manejar el proceso de registro de un nuevo usuario, permitiendo validar los datos enviados por el usuario 
     * durante el proceso de registro, si los datos son validos, crea el usuario en la base de datos, 
     * adicional a esto redirige al usuario la pagina inicio de sesion
     * @param req Contiene toda la informacion enviada por el usuario para el registro 
     * @param res Realiza la respuesta al cliente esto renderizando la vista, adicional renderizandola con los errores predeterminados
     * @returns 
     * 
     */
    public static async signup(req:Request,res:Response): Promise<void> {
        let error = [];

        const {name, email, password, confirm_password} = req.body;

        //Validaciones
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
            newUser.password = await newUser.encryptPassword(newUser.password);
            await newUser.save();
            req.flash("success_msg", "Usuario Registrado");
            return res.redirect("/auth/signin");
        }        
    };

    
    public static signin(req: Request, res: Response, next: NextFunction): void {
        // Eliminar temporalmente el middleware de autenticación
        // this.passport.authenticate('local', {
        //     successRedirect: '/dashboard',
        //     failureRedirect: '/signin',
        //     failureFlash: true
        // })(req, res, next);
        
        // Lógica de autenticación simulada para fines de prueba
        const { username, password } = req.body;
        if (username === 'email' && password === 'password') {
            res.redirect('/task/list');
        } else {

            res.redirect('/auth/signin');
        }
    }






    public static rendersigninForm(req: Request, res: Response): void {
        res.render("auth/signin");
    };

    public static async logout(req: Request, res: Response, next: NextFunction): Promise<void> {
        await req.logout((err)=>{
            if (err) return next(err);
            req.flash("success_msg", "Usuario Registrado");
        return res.redirect("/auth/signin");
        });  
    };
}

