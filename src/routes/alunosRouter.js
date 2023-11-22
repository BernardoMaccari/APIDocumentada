// 
const {Router} = require('express');
const router   = Router();

// Importar funções para as rotas 
const {
    listarUsuarios,
    cadastrarAluno,
    update
} = require('../controllers/alunosController');

router.get('/alunos', listarUsuarios);
router.post('/alunos/create', cadastrarAluno);
router.put('/alunos/update/:id',update);

module.exports = router;