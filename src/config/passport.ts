import passport from 'passport';
import User from '../models/User';
import { Strategy as LocalStrategy } from 'passport-local';



passport.use(new LocalStrategy({
    usernameField: 'email'
},async (email: string,password: string, done: any)=>{
    const user = await User.findOne({email: email});
    if(!user){
        return done(null, false,{message: 'User not found'});
    }else{
        const match = await user.matchPassword(password);
        if(match){
            return done(null, user);
        }else{
            return done(null, false,{message: 'Contraseña Incorrecta'});
        }
    }
}));

passport.serializeUser((user: any, done)=>{
    done(null, user.id);
});

passport.deserializeUser(async (id: string, done)=>{
    const user = await User.findById(id);
    done(null, user);
});