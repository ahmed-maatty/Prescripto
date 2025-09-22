import Express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config();
const app = Express();
app.use(Express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));
app.use(
  cors({
    origin: "*",
  })
);
app.use(cookieParser());

const Port = process.env.PORT;
app.listen(Port, () => {
  console.log(`Server Work On Port ${Port}`);
});