const express = require('express');
const app = express();
const path = require('path')
const PORT = "4321"


app.use(express.static(path.join(__dirname, "../../frontend/static/")))

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, "../../frontend/static/html", "index.html"))
})

app.get('/sevendays', (request, response) => {
    response.sendFile(path.join(__dirname, "../../frontend/static/html", "7days.html"))
})

app.get('/today', (request, response) => {
    response.sendFile(path.join(__dirname, "../../frontend/static/html", "today.html"))
})


app.listen(PORT, ()=> {
    console.log(`server listening to port ${PORT}...`)
})
