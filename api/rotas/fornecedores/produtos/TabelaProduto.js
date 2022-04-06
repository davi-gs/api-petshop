const { Model } = require('sequelize/types')
const Modelo = require('./modeloTabelaProduto')
module.exports = {
    listar () {
        return Modelo.findAll({
            where: {
                fornecedor: idFornecedor
            }
        })
    },
    inserir (dados) {
        return Modelo.create(dados)
    },
    remover (idProduto, idFornecedor){
        return Modelo.destroy({
            where: {
                id: idProduto,
                fornecedor: idFornecedor
            }
        })
    }
}