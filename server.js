const express= require('express');


const proiecteRouter=require('./routes/proiecte')

const app=express();
app.set('view engine','ejs')
app.get('/',(req,res)=>{
res.render('index.ejs')
})
app.use('/proiecte',proiecteRouter)


app.listen(3000)
