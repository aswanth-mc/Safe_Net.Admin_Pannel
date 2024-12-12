const express=require('express');
const app= express();
const PORT=process.env.PORT || 4000;
const path=require('path')

app.get('/' ,(req,res) => {
    res.sendFile(path.join(__dirname,'views','login.html'));
});
app.get('/home' ,(req,res) => {
    res.sendFile(path.join(__dirname,'views','home.html'));
});


app.listen(PORT,()=>{
    console.log('server runing on ${port}')
})