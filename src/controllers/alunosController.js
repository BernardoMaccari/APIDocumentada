// Importar a conexão com o banco de dados
const connection = require('../config/db');

// Função async: realiza uma requisição de forma paralela ao sistema
// request: nesta variavel recuperamos os dados enviados na requisição
// response: tem a responsabilidade de retornar as informações para quem requisitou
async function listarUsuarios(request, response) {
    // variavel para executar a consulta no banco
    const query = 'SELECT * FROM alunos;';

    // err: retorna erros na execução
    // results: retorna a ação realizada com sucesso
    connection.query(query, (err, results) => {
        if (results) {
            response
                .status(200)
                .json({
                    success: true,
                    message: "Sucesso! Lista de alunos",
                    data: results
                });
        } else {
            response
                .status(400)
                .json({
                    success: false,
                    message: "Deu ruim amigo!!",
                    data: err
                });

        }
    });
}

async function cadastrarAluno(request, response) {
    // 1 passo: recuperar variaveis
    // 2 passo: montar query para inserir os dados
    // 3 passo: tentar executar a ação no banco
    // 4 passo: definir retornos da requisição
    console.log(request.body)
    // recuperando dados da requisição
    const params = Array(
        request.body.nome,
        request.body.dt_nascimento,
        request.body.time_do_coracao
    );


    const query = 'INSERT INTO alunos(nome, dt_nascimento, time_do_coracao) values(?, ?, ?);';

    connection.query(query,params, (err, results) => {
        if (results) {
            response
            .status(201)
            .json({
              success: true,
              message: "Sucesso! Aluno no sistema.",
              data: results   
            })
        }
    })
}

async function update (request, response) {
    //comando sql
    const query = "UPDATE alunos nome = ?, dt_nascimento = ?, time_do_coracao = ? WHERE id =?; ";

    const params = Array(
        request.body.nome,
        request.body.dt_nascimento,
        request.body.time_do_coracao,
        request.params.id
    );

    connection.query(query, params, (err, results) => {
        if (results) {
            response
            .status(200)
            .json({
                success: true,
                message: "Aluno atualizado",
                data: results
            })
        }
    })
}

module.exports = {
    listarUsuarios,
    cadastrarAluno,
    update
};
