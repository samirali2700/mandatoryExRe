//setting up express app server
const express = require('express');
const app = express();
//require file system 
const fs = require('fs');

//setting up public folder
app.use(express.static('public'));



//partials
const head = fs.readFileSync('./views/partials/head.html').toString();
const nav = fs.readFileSync('./views/partials/nav.html').toString();
const footer = fs.readFileSync('./views/partials/footer.html').toString();

//a variable that returns a full page
const template = (main)=> {
    return head + nav + main + footer;
}
// static pages
const index = fs.readFileSync('./views/index.html').toString();
const nodejs = fs.readFileSync('./views/nodejs.html').toString();



//Routes
app.get('/',(req,res) => {
    res.send(template(index));
});
app.get('/nodejs',(req,res) => {
    res.send(template(nodejs));
});




//initiating app, and printing port used
const server = app.listen(process.env.PORT || 7777, () => {
    var port = server.address().port; 
    console.log(`App listening on port ${port}`);
});