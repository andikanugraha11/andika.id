const express   = require('express');
const app       = express();
const path 		= require('path');

// app.get('/', (req, res) => res.send('Hello World!'))
app.get('/index', (req,res) =>{
    res.json({
        msg : 'Index page'
    });
});

const port = process.env.PORT || 5000;

app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
});
app.listen(port, ()=>{
    console.log('express run !!');
});