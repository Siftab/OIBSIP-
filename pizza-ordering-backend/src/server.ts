import { Server } from "http";
import app from "./app"
import config from "./app/config"
import mongoose from "mongoose";

// const port =5000

 let server:Server
async function pizzaHUB() {
    try {
      await mongoose.connect(config.database_Url as string);
  
      server = app.listen(config.port, () => {
        console.log(`app is listening on port ${config.port}`);
      });
    } catch (err) {
      console.log(err);
    }
  }
  
  pizzaHUB();


