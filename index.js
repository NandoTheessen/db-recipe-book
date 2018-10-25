const express = require('express');
const server = express()

server.use(express.json())


server.listen(3300, () => {
    console.log("up and running!")
})