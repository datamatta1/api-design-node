import express from "express";
const app = express();

app.get("/", (req, res) => {
    console.log("Hello from express");
    res.json({message: "Hello from express"});
    res.status(200).send(); 
});

export default app;
