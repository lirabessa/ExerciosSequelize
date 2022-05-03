const Informa= require('./config/db.js')

const express = require ('express')
const bodyParser = require ('body-parser')
// const res = require('express/lib/response')

const app = express()

app.use (bodyParser.urlencoded({extended:true}))

app.set('view engine','ejs')

app.get('/', (req,res) =>{ 
    res.render('Home')
})

app.post('/home', async (req,res) =>{
    const msg = {
        nome:req.body.nome, 
        telefone:req.body.telefone,
         cidade:req.body.cidade, 
         email:req.body.email
        }

    

const info = await new Informa(msg).save()
const mensagens = await Informa.findAll()
res.render('Informacoes', {
    nome:info.nome, 
    telefone:info.telefone,
     cidade:info.cidade, 
     email:info.email,
     mensagens
    })
})


app.get('/msg',async(req,res)=>{
    const mensagens = await Informa.findAll()
    res.render('mensagem',{
        nome:'',
        telefone:'',
        cidade:'',
        email:'',
        mensagens
    })
})


app.listen(5000, function(erro){
    if (erro){
        console.log("Algo de errado não está certo")
    }else{
        console.log("UHUUUUUUUULLLL")
    }
})