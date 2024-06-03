import passport from 'passport';
import User from '../models/User';

const LocalStrategy = require('passport-local').Strategy


passport.use(new LocalStrategy({ usernameField: 'email'},async (email: string,password: string, done: any)=>{
    try{
    
    const user = await User.findOne({email: email});

    if(!user){
        return done(null, false,{message: 'User not found'});
    }
        const match = await user.matchPassword(password);
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
        User.findById(id,(err: any,user: any)=>{
            done(err, user.id);
        })    
});

export { passport };
