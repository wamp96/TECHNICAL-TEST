import {config} from "dotenv";
import {connect, connection} from "mongoose";

config ();

export async function connectdb(){
    try {
        await connect("mongodb://127.0.0.1:27017/project_db");
    } catch (error) {
        console.error('DB not connected:',error);
    }
}

connection.on("connected",() => {
    console.log("Mongodb connected to:", connection.db.databaseName);
});

connection.on("error",(error) => {
    console.log("error", error);
});

connection.on("disconnected",() => {
    console.log("Mongodb disconnected");
 });