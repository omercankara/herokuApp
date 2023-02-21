const express = require("express")
var cors = require('cors')
bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

const app = express()
app.use(express.json())


app.get("/", async (req, res) => {
    try {
        let result = await db.execute("SELECT * FROM user")
        res.json(result[0])

    } catch (err) {
        res.sendStatus(500) //Status SERVER FAİLED
    }
})

app.listen(process.env.PORT || 5000, () => {
    console.log("server")
})