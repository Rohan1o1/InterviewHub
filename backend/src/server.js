import express from 'express';
import {ENV} from './lib/env.js';
import path from 'path';
import { connectDB } from './lib/db.js';

const app = express();


  const __dirname= path.resolve();

app.get ("/health", (req, res) => {
    res.status(200).json({ message: "Success from back2" })
});

app.get ("/books", (req, res) => {
    res.status(200).json({ message: "Success from back2" })
});

// make our app  ready for deployment
if(ENV.NODE_ENV ==="production"){
    app.use(express.static(path.join(__dirname,"../frontend/dist")));
    app.get("/{*any}", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend","dist","index.html"));
});
}

 app.listen(ENV.PORT,()=>{
console.log("Server running on port 3000",ENV.port)
connectDB();
 } );