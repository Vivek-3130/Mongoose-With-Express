import mongoose from "mongoose";
// Here we are creating schema, we can add as many schema we want
const TodoSchema = new mongoose.Schema({
    // we can use schema as object also, search on documentation
    title: String,
    desc: String,
    isDone: Boolean,
    days: Number
});

export const Todo = mongoose.model('Todo',TodoSchema);

