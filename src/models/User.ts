import bcrypt from "bcrypt";
import  mongoose from 'mongoose';
const { Schema } = mongoose;

/**
 * Author: Willian Andres Moreno Prieto
 * Date:31/05/2024
 * Update Date:31/05/2024
 * Description: Este es el esquema de los datos que va a tener el usuario que se registre al aplicativo
 */


interface UserDocument extends Document {
    name: string;
    email: string;
    password: string;
    created_at: Date;
    encryptPassword: (password: string) => Promise<string>;
    matchPassword: (password: string) => Promise<boolean>;

}


const UserSchema = new Schema<UserDocument>({
    name:{type:String, required:true},
    email:{type:String, required:true},
    password:{type:String, required:true},
    created_at:{type:Date, default:Date.now}
});

/**
 * Metodo encargado de cifrar/encriptar la contraseña con un Hash utilizndo el metodo Bcrypt
 * @param password se recibe la contraseña que se tiene en la base de datos, se encripta y guarda en la constante hash
 * @returns Se retorna la clave hast aplicando la cantidad de algoritmo almacenado de (10) segun la promesa.
 */
UserSchema.methods.encryptPassword = async (password: String): Promise<string> => {
    const Salt = await bcrypt.genSalt(10);
    const hash = bcrypt.hash(password.toString(), Salt);
    return hash;
}; 


/**
 * Metodo el cual compara la constraseña recibida por el usuario al logearse con la de la base de datos para evitar conflicto con el hash
 * @param password se recibe parametro contraseña y antes de ser en
 * @returns se retorna true si la promesa se cumple y las contraseñas son las mismas
 */
UserSchema.methods.matchPassword = async function(password: String): Promise<boolean>{ 
    return await bcrypt.compare(password.toString(), this.password);
};

//Utilizamos el esquema y le asignamos el nombre User
export default  mongoose.model<UserDocument>("User", UserSchema);