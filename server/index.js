import Express from "express";
import dotenv from "dotenv";

dotenv.config()
const app = Express();

const Port = process.env.PORT
app.listen(Port , () => {
  console.log(`Server Work On Port ${Port}`)
})