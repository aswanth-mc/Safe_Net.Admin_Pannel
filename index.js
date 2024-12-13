const express = require ('express');
const app = express();
const hbs = require ('hbs');

app.use(express.urlencoded({extended:true}));
app.use(express.json())

const username ="aswanth"
const password ="a1s2d3f4"

app.use(express.static('public'));
app.set('view engine','hbs');


app.get('/', (req, res) => {
    res.render('login')
});

app.post('/admin',(req,res)=>{
        if(req.body.username === username && req.body.password === password){
            res.render('home')
        }
        else{
            res.send('please check the username and password')
        }
})
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
