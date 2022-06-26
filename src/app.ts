import Express, { Request, Response } from "express";
import mongoose from "mongoose";
import { router } from "./routes/routes";
import dotenv from "dotenv";

const app = Express();
app.use(Express.urlencoded({extended: false}))
app.use(Express.json())

dotenv.config();
mongoose.connect(
  process.env.MONGODB_URL as string,
  // {
  //   useUnifiedTopology: true,
  //   useNewUrlParser: true
  // }
  () => {
    console.log("db conn....");
    
  }
)




app.use('/',router)


app.listen(8000, () => {
  console.log("serber running");
});
