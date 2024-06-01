"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const TaskSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    dateExpiration: { type: Date, required: true, default: Date.now() + 5 }
});
module.exports = mongoose_1.default.model('Task', TaskSchema);
