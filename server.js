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

// --- TIP CALCULATOR -----------------------------------------------------------------------------------------

app.get("/tip/:total/:tipPercentage", (req, res) => {
    reqLog(req)
    const totalAmount = req.params.total * req.params.tipPercentage / 100
    res.send(`the tip is ${totalAmount}`)
})

// --- MAGIC 8 HALL -------------------------------------------------------------------------------------------

const magicBallArray = [
    "It is certain", 
    "It is decidedly so", 
    "Without a doubt", 
    "Yes definitely",
    "You may rely on it", 
    "As I see it yes", 
    "Most likely", 
    "Outlook good",
    "Yes", 
    "Signs point to yes", 
    "Reply hazy try again", 
    "Ask again later",
    "Better not tell you now", 
    "Cannot predict now", 
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good", 
    "Very doubtful"
]

app.get("/magic/:question", (req, res) => {
    reqLog (req)
    const response = Math.floor(Math.random() * magicBallArray.length)
    const randomResponse = magicBallArray[response]
    res.send(`<h1>${randomResponse}</h1>`)
})

// -- LISTEN FOR PORT -----------------------------------------------------------------------------------------

app.listen(port, () => {
    // console.log("server running")
})