# Documentação da Api
* Escolher local do pc para criar a pasta do projeto
* Abrir o gitbash nesta pasta

Criar a pasta
```
mkdir NOME_PROJETO
```
Acessar a pasta do projeto
```
cd NOME_PROJETO
```
Abrir a pasta no VSCode
```
code .
```
Iniciar o gerenciador de pacotes Node
```
npm init -y
```
Fazer o arquivo .gitignore: arquivos e pastas que não vão para o github
```
touch .gitignore
```
Fazer arquivo .env: armazenara as variaveis do ambiente
```
touch .env
```
Instalar pacotes da API
```
npm i express nodemon dotenv mysql2
```
* express: será o servidor da API
* nodemon: atualizar os arquivos alternados sem parar o servidor
* dotenv: gerenciador de variáveis de ambiente
* mysql2: integrar aplicação com o banco de dados

Informar arquivos e pastas no .gitignore
```
touch .gitignore
```

```
node_modules
.env
```
Criar pasta src para estrutura do projeto
```
mkdir src
```
Criar arquivo server.js na pasta src
```
touch src/server.js
```
Configurar o servidor
```
// Importar o arquivo se configuração(app.js)
const app = require('./app');

// Importar a porta do servidor 
const PORT = app.get('port');

// Testar servidor 
app.listen(PORT, () => console.log(`Running at port ${PORT}`))
```


Criar comando para rodar o servidor
```
"start":"nodemon src/server.js"
```

Rodar o comando no terminal
```
npm run start
```

## Criar estrutura para o projeto

Criar arquivo app.js na pasta src
```
touch src/app.js
```

## Lembrar de colocar o node_modules

No git bash
```
npm i
```

## Criar o arquivo .env e o .env.exemple

```
touch .env
```

* Criar arquivo para salvar as variaveis necessarias da aplicação sem os valores
 
```
touch .env.example
```

* Criar pasta routes 
```
mkdir routes
```

* Criar arquivo crudRouter.js dentro da pasta routes 
```
nano crudRouter.js
```

### Ctrl + O: Salvar o arquivo
### Enter: Confirmar nome
### Ctrl + X: Fechar arquivo

* Digitar o código no arquivo criado
```
// Importar pacote do express
const {Router} = require('express');

//Instanciar o router na variavel router
const router = Router();
// Importar funções do controllers para a rota acessar as funções
const { 
    listarDados,
    gravarDados,
    atualizarDados,
    deletarDados
 } = require('../controllers/controller');

router.get('/listar', listarDados); 

router.post('/gravar', gravarDados);

router.put('/atualizar/:id', atualizarDados);

router.delete('/deletar/:id', deletarDados);

module.exports = router;
```

### CRIAÇÃO DE CONTROLLERS
* Arquivos para processar as requisições das rotas

<hr>

### Criar pasta de controllers
```
mkdir src/controllers
```

### Criar arquivo controller.js
```
touch src/controllers/controllers.js
```

### Criar funções para processar as requisições das rotas

```
function  listarDados(request, response) {
    response.send('Retorno de informações do banco de dados');
}

function gravarDados(request, response) {
    response.send('Método utilizado para salvar informações');
}

function atualizarDados(request, response) {
    response.send('Método utilizado para editar informações');
}

function deletarDados(request, response) {
    response.send('Método utilizado para deletar informações');
}

module.exports = {
    listarDados,
    gravarDados,
    atualizarDados,
    deletarDados
}
```

<hr>

## Configurar estrutura de conecção com o banco de dados

### Criar pasta 'config' dentro da pasta 'src'
```
mkdir src/config
```
### Criar arquivo 'db.js' dentro da pasta 'config'
```
touch src/config/db.js
```
### Colar o codigo no arquivo 'db.js'
```
// Importando o pacote de conexão com banco de dados
const mysql = require('mysql2');

// Importar variaveis de conexão do banco
require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

connection.connect((err) =>{
    if (err) {
        console.log('Error de conexaõ: ' +err);
    } else {
        console.log('Mysql Connected!');
    }
});

module.exports = connection;
```

## Criar banco de dados

* Criar database
* Dar um use na database criada
* Criar tabelas

### Criar database
```
create database NOME_DATABASE;
```
* CTRL + Enter para executar o comando

### Selecionar a database
```
use NOME_DATABASE
```

### Criar tabela alunos
```
create table alunos(
    id int not null auto_increment,
    nome varchar(120) not null,
    dt_nascimento date not null,
    time_do_coracao varchar(120),
    primary key(id)
);
```

### Criar tabela users
```
create table users(
    id int not null auto_increment,
    ds_nome varchar(120),
    primary key(id)
);
```