"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
/**
 * Author: Willian Andres Moreno Prieto
 * Date:31/05/2024
 * Update Date:31/05/2024
 * Description: Este es el esquema de los datos que va a tener el usuario que se registre al aplicativo
 */
const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    created_at: { type: Date, default: Date.now }
});
/**
 * Metodo encargado de cifrar/encriptar la contraseña con un Hash utilizndo el metodo Bcrypt
 * @param password se recibe la contraseña que se tiene en la base de datos, se encripta y guarda en la constante hash
 * @returns Se retorna la clave hast aplicando la cantidad de algoritmo almacenado de (10) segun la promesa.
 */
UserSchema.methods.encryptPassword = (password) => __awaiter(void 0, void 0, void 0, function* () {
    const Salt = yield bcrypt_1.default.genSalt(10);
    const hash = bcrypt_1.default.hash(password, Salt);
    return hash;
});
/**
 * Metodo el cual compara la constraseña recibida por el usuario al logearse con la de la base de datos para evitar conflicto con el hash
 * @param password se recibe parametro contraseña y antes de ser en
 * @returns se retorna true si la promesa se cumple y las contraseñas son las mismas
 */
UserSchema.methods.matchPassword = function (password) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield bcrypt_1.default.compare(password, this.password);
    });
};
//Utilizamos el esquema y le asignamos el nombre User
module.exports = mongoose_1.default.model('User', UserSchema);
