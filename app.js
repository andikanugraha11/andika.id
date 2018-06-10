const express   = require('express');
const app       = express();
const path 		= require('path');

// app.get('/', (req, res) => res.send('Hello World!'))
app.get('/index', (req,res) =>{
    res.json({
        msg : 'Index page'
    });
});

app.use(express.static('/public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
});
app.listen('8080', ()=>{
    console.log('express run !!');
});