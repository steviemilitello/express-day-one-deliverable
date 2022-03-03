/// --- EXPRESS AND PORT --------------------------------------------------------------------------------------

const express = require('express')
const req = require('express/lib/request')
const app = express()

const port = 3000

/// --- REQUEST LOGGER ----------------------------------------------------------------------------------------

const reqLog = (req) => {
    console.log("====================")
    console.log("this is the request object sent from the browser")
    console.log(`${req.method} request sent to ${req.url}`)
    console.log("req params are ", req.params)
    console.log("====================")
}

// --- GREETING -----------------------------------------------------------------------------------------------

app.get("/greeting/:name", (req, res) => {
    reqLog(req)
    res.send(`Wow, hello there ${req.params.name}!`)
})

// -- LISTEN FOR PORT -----------------------------------------------------------------------------------------

app.listen(port, () => {
    // console.log("server running")
})