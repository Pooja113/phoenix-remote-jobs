import express from "express";
import bodyParser from "body-parser";
import cors from 'cors'
import jobform from "./routers/jobPostRouter.js"

const app = express();
app.use(bodyParser.json({ limit: "30mb" , extended : true}));
app.use(bodyParser.urlencoded({ limit: "30mb" , extended : true}));
app.use(cors());

app.use("/", jobform);

export default app