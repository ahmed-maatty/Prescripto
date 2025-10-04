import Express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectedDB from "./DB/DBConnection.js";
import authRoute from "./routes/authRoute.js";
import patientRoute from "./routes/patientRoute.js";
import doctorRoute from "./routes/doctorRoute.js";
import appointmentRoute from "./routes/appointmentRoute.js";
import photoRoute from "./routes/photoRoute.js"

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

//routes
app.use("/api/auth", authRoute);
app.use("/api/patient", patientRoute);
app.use("/api/doctor", doctorRoute);
app.use("/api/appointment", appointmentRoute);
app.use("/api" , photoRoute)

const Port = process.env.PORT;
connectedDB()
  .then(() => {
    app.listen(Port, () => {
      console.log(`Server Work On Port ${Port}`);
    });
  })
  .catch((err) => console.log(`DB Error Failed => ${err}`));
