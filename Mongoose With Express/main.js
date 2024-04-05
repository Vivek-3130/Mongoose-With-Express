// Learn about the mongodb module and connection of it using express
// https://www.npmjs.com/package/mongodb

//---------------------------------------Mongoose Connection----------------------------------
import mongoose from "mongoose";
import express from 'express';
import { Todo } from "./models/Todo.js";

const app = express();
const port = 3000;

// Connection building
mongoose.connect("mongodb://localhost:27017/");

app.get('/', async (req, res) => {
    try {
        // Create and save the first todo
        const todo1 = new Todo({ title: "Hey first todo", desc: "description of this todo", isDone: false, days:Math.floor(Math.random()*45 + 5 * Math.random()) });
        await todo1.save();

        // Create and save one more todo
        const todo2 = new Todo({ title: "Second todo", desc: "description of the second todo", isDone: true , days:Math.floor(Math.random()*55 + 15 * Math.random())});
        await todo2.save();

        console.log(Todo.findOne({_id: "66071f04c84e478d1ed2c785"}))

        res.send('Two todos added successfully');
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Internal Server Error");
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
