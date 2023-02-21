const express = require("express")
const app = express()


var cors = require('cors')
bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())



const db = require("./data/db")
app.use(express.json())





app.get("/", async (req, res) => {
    res.send("Test")
})


app.get("/test", async (req, res) => {

    try {
        let result = await db.execute("SELECT * FROM user")
        res.json(result[0])

    } catch (err) {
        console.log(err);
    }
})



app.listen(process.env.PORT || 5000, () => {
    console.log("server ")
})