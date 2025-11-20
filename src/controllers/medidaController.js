var medidaModel = require("../models/medidaModel");
function cadastrarMedida(req, res) {
    var peso = req.body.peso;
    var cintura = req.body.cintura;
    var peito = req.body.peito;
    var bracoE = req.body.bracoE;
    var bracoD = req.body.bracoD;
    var coxa = req.body.coxa;
    var panturrilha = req.body.panturrilha;
    var idUsuario = req.body.idUsuario;

    if (peso == undefined || cintura == undefined || idUsuario == undefined) {
        res.status(400).send("Parâmetros obrigatórios (Peso, Cintura ou ID) estão faltando!");
    } else {

    medidaModel.cadastrarMedida(cintura, peito, bracoE, bracoD, coxa, panturrilha, peso, idUsuario)
        .then(function (resultado) {
            res.json(resultado);
        }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}}

function buscarUltimasMedidas(req, res) {

    var idUsuario = req.params.idUsuario;

    console.log(`Recuperando medidas para o usuário: ${idUsuario}`);

    medidaModel.buscarUltimasMedidas(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}



module.exports = {
    cadastrarMedida,
    buscarUltimasMedidas
}