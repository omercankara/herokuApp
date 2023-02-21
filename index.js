const express = require("express")
const app = express()
var cors = require('cors')

bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())


const userRoutes = require("./routes/user")
app.use(userRoutes)




app.listen(process.env.PORT || 5000, () => {
    console.log("server")
})