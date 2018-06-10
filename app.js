const express   = require('express');
const app       = express();
const path 		= require('path');

// app.get('/', (req, res) => res.send('Hello World!'))
app.get('/index', (req,res) =>{
    res.json({
        msg : 'Index page'
    });
});

app.use(express.static('./'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
});
app.listen('8080', ()=>{
    console.log('express run !!');
});