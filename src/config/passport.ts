import bcrypt from "bcrypt";
import passport from 'passport';
import User from '../models/User';


import {Strategy as LocalStrategy}  from 'passport-local';


passport.use(new LocalStrategy({ usernameField: 'email'},async (email: string,password: string, done: any)=>{
    try{
    
    const user = await User.findOne({email});

    if(!user){
        return done(null, false,{message: 'User not found'});
    }
        const match = await bcrypt.compare(password, user.password); ;
        if(match){
            return done(null, user);
        }else{
            return done(null, false,{message: 'Contraseña Incorrecta'});            
        }
    }catch(err){
            return done(null, false,{message: 'Error al iniciar sesion'});        
    }    
    }));

passport.serializeUser((user: any, done)=>{
    done(null, user.id);
});

passport.deserializeUser(async (id: String, done)=>{
    try {
        const user = await User.findById(id).exec(); 
    } catch (error) {
        done(error);
    } 
});

