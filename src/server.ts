// import express
import express from "express";
import router from "./router";
import morgan from "morgan";
import cors from "cors"; 
import {protect} from "./modules/auth";

// Create a new express app instance
const app = express();

app.use(cors());
app.use(morgan("dev"));
// Accepts JSON payloads
app.use(express.json());
// Accepts URL encoded payloads
app.use(express.urlencoded({extended: true}))


app.get("/", (req, res) => {
    res.json({message: "Hello from express"});
    res.status(200).send(); 
});

// This is the router we created in router.ts file
// The /api is mounted to the router before any of the routes are defined
app.use("/api", protect, router);

export default app;
