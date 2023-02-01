// import express
import express from "express";
import router from "./router";

// Create a new express app instance
const app = express();

app.get("/", (req, res) => {
    console.log("Hello from express");
    res.json({message: "Hello from express"});
    res.status(200).send(); 
});

// This is the router we created in router.ts file
// The /api is mounted to the router before any of the routes are defined
app.use("/api", router);

export default app;
