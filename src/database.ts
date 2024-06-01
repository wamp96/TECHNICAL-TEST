import {config} from "dotenv";
import mongoose, {connect, connection} from 'mongoose';


config ();

export const DB_PORT = process.env.DB_PORT || 3000;

export const DB_URI = process.env.DB_URI || "mongodb://localhost/technical-test";


export async function connectdb(){
    try {
        await mongoose.connect(DB_URI);
        console.log('DB is connected',connection.db.databaseName);
    } catch (error) {
        console.error('DB not connected:',error);
    }
}

mongoose.connection.on("connected",() => {
    console.log("Mongodb connected to:", connection.db.databaseName);
});

mongoose.connection.on("error",(error) => {
    console.log("Mongodb connected to:", connection.db.databaseName);
});

mongoose.connection.on("connected",() => {
    console.log("Mongodb connected to:", connection.db.databaseName);
});