const express = require('express')
const fetch = require("node-fetch")
const app = express()

// app.get("/api", (req, res) => {
//     res.json({"users": ["user1", "user2", "user3", "4"],"title":["x"] })
// })

// app.get("/api2", async (req, res) => {
// 	const response = await fetch('https://api.github.com/users/github');
// 	const data = await response.json();
// 	res.send(data.login);
// })

// Required API doesn't work
app.get("/api3", async (req, res) => {
    try {
        const res = await fetch('https://api.cryptonator.com/api/ticker/eth-usd');
        const data = await res.json();
        console.log(data.ticker.price)
    } catch (e) {
        console.log("SOMETHING WENT WRONG!!!", e)
    }
})

app.get("/bitcoin", (req, res) => {
    res.json({"ticker":{"base":"BTC","target":"USD","price":"23091.39995084","volume":"64901.24278375","change":"378.67462465"},"timestamp":1655133483,"success":true,"error":""})
})

app.get("/ether", (req, res) => {
    res.json({"ticker":{"base":"ETH","target":"USD","price":"1209.68505860","volume":"582835.41387036","change":"-65.79254478"},"timestamp":1655110985,"success":true,"error":""})
})

app.get("/litecoin", (req, res) => {
    res.json({"ticker":{"base":"LTC","target":"USD","price":"42.58392506","volume":"865356.45605990","change":"0.83609612"},"timestamp":1655133545,"success":true,"error":""})
})

// app.get("/monero", (req, res) => {
//     res.json({"ticker":{"base":"ETH","target":"USD","price":"1209.68505860","volume":"582835.41387036","change":"-65.79254478"},"timestamp":1655110985,"success":true,"error":""})
// })

app.get("/getTargetedCoinsPrice", async (req, res) => {
    res.json({"ticker":{"base":"ETH","target":"USD","price":"1209.68505860","volume":"582835.41387036","change":"-65.79254478"},"timestamp":1655110985,"success":true,"error":""})
})

app.listen(4000, () => { console.log("Server started on port 4000") })