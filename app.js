const express   = require('express');
const app       = express();
const path 		= require('path');
const os 		= require('os');
const mongoose	= require('mongoose');

const Visitor = require('./models/visitorSchema');

var url = 'mongodb://andika:andika123@ds255740.mlab.com:55740/heroku_tt0g602l';


mongoose.connect(url);

//on connect Database
mongoose.connection.on('connected', () => {
    console.log(`database terhubung dengan ${url}`);
});

//on Error database
mongoose.connection.on('error', (err) => {
    console.log(`Error : ${err}`);
});
				
// app.get('/', (req, res) => res.send('Hello World!'))
app.get('/index', (req,res) =>{
    const visitor = {
        visitor: os.hostname()
    }
    console.log('hehe')
    console.log(visitor)
    res.json({
        msg : 'Index page'
    });
});

const port = process.env.PORT || 5000;
app.get('/', (req, res) => {
    // let visitor = 'hehe';

    require('dns').reverse(req.connection.remoteAddress, function(err, domains) {
        const visitor_data = {
            visitor: domains[0]
        }
        
        const newVisit = new Visitor(visitor_data);
        newVisit.save(function (err) {
            if (!err){
                res.sendFile(path.join(__dirname, 'public/index.html'))
            }else{
                console.log(err)
            }
            
        })
    });
    
    
});

app.use(express.static('./public'))


app.listen(port, ()=>{
    console.log(`express run !! ${port}`);
});