import  mongoose from 'mongoose';
const { Schema } = mongoose;

const TaskSchema = new Schema({
    title:{ type: String, required:true },
    description:{type: String, required:true },
    dateExpiration:{type : Date, required:true},
    statusTask:{ type: String, required:true },
})





export default  mongoose.model("Task", TaskSchema);