const express = require("express")
const path = require("path")

const app = express()

const caminhoBase = path.join(__dirname, "templates")  

app.get('/usuarios:id', (requisicao, resposta) => {
    const id = requisicao.parans.id

    console.log(`Acessando dados do usuário ${id}`)

    resposta.sendFile(`${caminhoBase}/usuarios.html`)
})

app.get('/', (requisicao, resposta) => {
    resposta.sendFile(`${caminhoBase}/index.html`)
})

app.listen(5500, () => {
    console.log("Servidor rodando na porta 3000!")
})

