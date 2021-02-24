//Brita Budnick and Jessica Barnett 
//Fullstack project Wildify
//Winter 2021.  Feb 24, 2021

//testing git changes
//test 2 git changes
//this is exercise hw3 q3 form
//test 3

const express = require('express');
const app = express();
const port = process.env.PORT | 5000;
//do I need this here below
const path = require('path');
const parser = require('body-parser');

// Add your code below

//public folder contains static file(s) that will be used
app.use(express.static('public'));

app.use(
    parser.urlencoded({
        extended: false,
        limit: 1024,
    })
  );

//this was for practicing getting static files
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname + `/public/about.html`))
});

//this gets the form on /form, 
//but also automatically the form is gotten on / 
//because it is called index.html and in the folder 'public' 
app.get('/form', (req, res) => {
    res.sendFile(path.join(__dirname + `/public/index.html`))
});

app.post('/submit', (req, res) => {
    console.log(req.body);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write(`Name: ${req.body.name}\n`);
    res.write(`Email: ${req.body.email}\n`);

    if(req.body.comments){
        res.write(`Comments: ${req.body.comments}\n`)
    } else {
        res.write(`Comments: User left no comments.\n`)
    }

    if(req.body.subscribe === undefined){
        res.write(`Newsletter: User declined newsletter.\n`)
    } else {
        res.write(`Subscribe: ${req.body.subscribe}\n`)
    }
    res.end();
});
    
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});cd 