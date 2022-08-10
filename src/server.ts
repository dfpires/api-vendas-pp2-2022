// importa o express
import express from 'express'

// cria o servidor
let servidor = express()

// criando uma rota com o verbo get
servidor.get('/', function (req, res) {
    res.send('A aula acabou')
})

// coloca o servidor para escutar na porta 3333 e aguardar as requisições
servidor.listen(3333, () => {
    console.log('Servidor iniciado')
})