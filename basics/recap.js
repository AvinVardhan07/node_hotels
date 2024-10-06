const express = require('express')
const app = express();


app.get('/', function (req, res) {
res.send('Welcome to my hotel... How i can help you ?, we have list of menus')
})


app.get('/chicken', (req, res)=>{
res.send('sure sir, i would love to serve chicken')
})

app.listen(3001,()=>{
    console.log("sucessfull");
})