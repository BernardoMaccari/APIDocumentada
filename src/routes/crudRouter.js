// Importar pacote do express
const {Router} = require('express');

//Instanciar o router na variavel router
const router = Router();
// Importar funções do controllers para a rota acessar as funções
const { listarDados } = require('../controllers/controller');

router.get('/api', listarDados); 

router.post('/api',(request, response) => {
    response.send('Método utilizado para salvar informações');
    console.log('post')
    console.log(request)
})

router.put('/api/:id',(request, response) => {
    response.send('Método utilizado para editar informações');
    console.log('put');
    console.log('id: ', request.params.id);
})

router.delete('/api/:id',(request, response) => {
    response.send('Método utilizado para deletar informações');
    console.log('delete');
    console.log('id: ', request.params.id);
})

module.exports = router;
