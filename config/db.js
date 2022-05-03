const Sequelize = require('sequelize')
const sequelize = new Sequelize ('inf_pessoais','postgres','abcd0102',{ //coloque sua senha no 'abcd0102' ou altere no seu banco
    host:'localhost',
    dialect:'postgres',
    port:5432
})

// Sequelize.authenticate().then(function(){
//     console.log('Conectado com sucesso')
// }).catch(function(erro){
//     console.log('Falha ao se conectar:+erro')
// })

const Informa = sequelize.define('infoPessoais',{


    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true       
    },
    nome: {
        type:Sequelize.STRING
    },
    cidade: {
        type:Sequelize.STRING
    },
    email: {
        type:Sequelize.STRING
    },
    telefone: {
        type:Sequelize.INTEGER
    },

})
Informa.sync({force:true})

module.exports = Informa


