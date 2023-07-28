const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000

const { connection } = require("./config/db");
const { Userroute } = require("./routes/userroute");
const { errorHandler } = require("./middleware/errorhandler");
const { logger } = require("./middleware/logger")



app.use(cors({
    origin:"*"
}))
app.use(logger);
app.use(errorHandler)

app.get("/",async(req,res)=>{
    try {
        res.send("Welcome to the server");
    } catch (error) {
        res.send("something went wrong");
    }
})

app.use("/user",Userroute);


// Handle invalid routes
app.use(logger,(req, res) => {
    res.status(404).send({ error: 'Not found' });
});


app.listen(PORT,async()=>{
    try {
        await connection;
        console.log("Server is connected to DB");
    } catch (error) {
        console.log("Not able to connect to DB");
    }
    console.log(`The server is connected to ${PORT}`);
})