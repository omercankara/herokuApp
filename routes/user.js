/* const express = require("express")
const router = express.Router()
const db = require("../db")



router.get("/", async (req, res) => {
    try {
        let result = await db.execute("SELECT * FROM user")
        res.json(result[0])

    } catch (err) {
        res.sendStatus(500) 
    }
})


module.exports = router */