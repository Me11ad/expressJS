const express = require("express")
const bodyParser = require("body-parser")
const app = express();

const pageContacts = require("./view/pages/contacts")

app.use(bodyParser.urlencoded({extendend:false}))

app.get('/main',(request, response) => {
    console.log(request.headers)
    response.json(pageMain)
})

app.get('/contacts',(request, response) => {
    console.log(request.headers)
    response.send(pageContacts)
})

app.get('/shop',(request, response) => {
    console.log(request.headers)
    response.json(pageShop)
})

app.get('/about',(request, response) => {
    console.log(request.headers)
    response.json(pageAbout)
})

const port = process.env.PORT || 8000;

app.listen(8000,() => 
    console.log(`Сервер запущен на порту ${port}, http://localhost:${port}`));