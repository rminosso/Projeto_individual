var database = require("../database/config");

function cadastrarMedida(cintura, peito, bracoE, bracoD, coxa, panturrilha, peso, idUsuario) {

    var instrucaoSql = `INSERT INTO medidas
     (cintura, peito, bracoEsq, bracoDir,
     coxa, panturrilha, peso, fkUsuario, dtRegistro)
     VALUES (${cintura}, ${peito}, ${bracoE}, ${bracoD}, ${coxa}, ${panturrilha},${peso}, ${idUsuario}, NOW());`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function buscarUltimasMedidas(idUsuario) {

    var instrucaoSql = `
        SELECT  
            m.peso,
            u.altura,
            m.cintura,
            m.peito,
            m.bracoEsq,
            m.bracoDir,
            m.coxa,
            m.panturrilha,
            DATE_FORMAT(m.dtRegistro, '%d/%m') as momento_grafico
        FROM medidas m
        JOIN usuarios u ON m.fkUsuario = u.idUsuario
        WHERE m.fkUsuario = ${idUsuario}
        ORDER BY m.dtRegistro DESC, m.idMedidas DESC 
        LIMIT 7;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



module.exports = {
    cadastrarMedida,
    buscarUltimasMedidas
}
