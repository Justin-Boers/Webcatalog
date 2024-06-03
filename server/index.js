import express from 'express';
import * as fs from 'node:fs';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000;

app.use(cors());

app.listen(port, () => {

    console.log(`Example app listening on port ${port}`);

});

//link adidas shoe page
app.get('/adidas', (req, res) => {

    res.setHeader('Content-type', 'application/json;charset=UTF-8');

    fs.readFile('data/adidas.json', 'utf8', function(err, data){
        res.send(`${data}`);
    }) 
});

//link nike shoe page
app.get('/nike', (req, res) => {

    res.setHeader('Content-type', 'application/json;charset=UTF-8');

    fs.readFile('data/nike.json', 'utf8', function(err, data){
        res.send(`${data}`);
    }) 
});

//link puma page
app.get('/puma', (req, res) => {

    res.setHeader('Content-type', 'application/json;charset=UTF-8');

    fs.readFile('data/puma.json', 'utf8', function(err, data){
        res.send(`${data}`);
    }) 
});

//link calvin klein page
app.get('/calvin-klein', (req, res) => {

    res.setHeader('Content-type', 'application/json;charset=UTF-8');

    fs.readFile('data/calvin-klein.json', 'utf8', function(err, data){
        res.send(`${data}`);
    }) 
});

//link diesel page
app.get('/diesel', (req, res) => {

    res.setHeader('Content-type', 'application/json;charset=UTF-8');

    fs.readFile('data/diesel.json', 'utf8', function(err, data){
        res.send(`${data}`);
    }) 
});

//link emporio armani page
app.get('/emporio-armani', (req, res) => {

    res.setHeader('Content-type', 'application/json;charset=UTF-8');

    fs.readFile('data/emporio-armani.json', 'utf8', function(err, data){
        res.send(`${data}`);
    }) 
});


//userarray word aangemaakt
const userArray = [];


//post the data to contact
app.post('/contact', (req, res) => {
    const firstName = req.body.firstname;
    const lastName = req.body.lastname;
    const phonenumber = req.body.phonenumber;
    const email = req.body.email;
    const feedback = req.body.feedback; 

    const user = {
        firstName: firstName, 
        lastName: lastName, 
        phonenumber: phonenumber,
        email: email,
        feedback: feedback, 
    };

    userArray.push(user);

    // Stuur de gebruiker door naar de login.html pagina
    res.redirect('http://127.0.0.1:5500/html/contact.html');
});

app.get('/contactinfo', (req, res) => {

    res.setHeader('Content-type', 'application/json;charset=UTF-8');
    
    res.send(userArray); // Stuur de userArray als een JSON-reactie
});