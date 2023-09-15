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
npm i express nodemon dotenv
```
* express: será o servidor da API
* nodemon: atualizar os arquivos alternados sem parar o servidor
* dotenv: gerenciador de variáveis de ambiente

Informar arquivos e pastas no .gitignore
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
// Importar pacote do express
const express = require('express');
//Instanciar o express na variavelapp
const app = express();
// Importar o pacote dotenv
const dotenv = require('dotenv').config();
//Definir a porta do servidor
const PORT = process.env.PORT || 3005;

//Testar servidor
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
