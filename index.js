//Starting express framework server
const express = require('express');
const app = express();
app.listen(5000, () => { console.log(`Connected to the server`) });

const fs = require('fs');

//importing extra modules needed
const bodyparser = require('body-parser');
const path = require('path');

// bodyParser middleware
app.use(bodyparser.json());
app.use(bodyparser.text());

//api's
app.get('/read',(req,res)=>{
    let jsonData=fs.readFileSync(__dirname+'/test.txt', 'utf8');
    res.send(jsonData);
})

app.post('/write',(req,res)=>{
    let jsonData=JSON.parse(fs.readFileSync(__dirname+'/test.txt', 'utf8'));
    jsonData.token.push(req.body);
    fs.writeFile(__dirname+'/test.txt', JSON.stringify(jsonData),()=>{});
    res.send("Written successfully..!");
})

