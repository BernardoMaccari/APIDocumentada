//Importar o arquivo de configuração
const app = require('./app');
//Importar a porta do servidor
const PORT = app.get('port');

//Criando as rotas
app.get('/api', (request, response) => {
    response.send('Retorno de informações do banco de dados')
});

app.post('/api',(request, response) => {
    response.send('Método utilizado para salvar informações')
})

app.put('/api/:id',(request, response) => {
    response.send('Método utilizado para editar informações')
})

app.delete('/api/:id',(request, response) => {
    response.send('Método utilizado para deletar informações')
})

//Testar servidor
app.listen(PORT, () => console.log(`Running at port ${PORT}`))