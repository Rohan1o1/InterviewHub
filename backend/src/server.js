import express from 'express';
import {ENV} from './lib/env.js';
import path from 'path';
import { connectDB } from './lib/db.js';
import cors from 'cors';
import { inngest, functions } from './lib/inngest.js';
import { serve } from 'inngest/express'; 
import { clerkMiddleware } from '@clerk/express'
 import chatRoutes from './routes/chatRoutes.js';




const app = express();


  const __dirname= path.resolve();

  // middlewares
  app.use(express.json());
    app.use(cors({origin:ENV.CLIENT_URL,credentials:true}));
    // credentiala:true meaning ??=> allow cookies to be sent along with requests from the client
    app.use(clerkMiddleware());// this add auth fields to req object:req auth

    app.use("/api/inngest",serve({client:inngest,functions}))
    app.use("/api/chat",chatRoutes);

    


app.get ("/health", (req, res) => {
    res.status(200).json({ message: "Success from back2" })
});



// when we pass an array of middlewares to express , it automatically executes them in sequence one after the other



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