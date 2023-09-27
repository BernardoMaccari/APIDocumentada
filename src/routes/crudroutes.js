// Importar pacote do express
const express = require('express');

//Instanciar o router na variavel router
const router = express.Router();

router.get('/api', (request, response) => {
    response.send('Retorno de informações do banco de dados')
});

router.post('/api',(request, response) => {
    response.send('Método utilizado para salvar informações')
})

router.put('/api/:id',(request, response) => {
    response.send('Método utilizado para editar informações')
})

router.delete('/api/:id',(request, response) => {
    response.send('Método utilizado para deletar informações')
})

module.exports = router;