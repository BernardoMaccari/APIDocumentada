const connection = require('../config/db');

async function listarUsuarios(request, response) {
    const query = 'SELECT * FROM Alunos;';

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

        }
    });
}

module.exports = listarUsuarios;