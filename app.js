const express   = require('express');
const app       = express();


app.get('/', (req, res) => res.send('Hello World!'))
app.get('/index', (req,res) =>{
    res.json({
        msg : 'Index page'
    });
});


app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
});
app.listen('8080', ()=>{
    console.log('express run !!');
});