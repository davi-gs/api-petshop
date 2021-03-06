const { Model } = require('sequelize/types')
const Modelo = require('./modeloTabelaProduto')
module.exports = {
    listar (idFornecedor) {
        return Modelo.findAll({
            where: {
                fornecedor: idFornecedor
            },
            raw: true
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
    },
    async pegarPorId (idProduto, idFornecedor) {
        const encontrado = await Modelo.findOne({
            where: {
                id: idProduto,
                fornecedor: idFornecedor
            },
            raw: true
        })

        if (!encontrado) {
            throw new Error('Produto não foi encontrado')
        }

        return encontrado
    },
    atualizar (dadosDoProduto, dadosParaAtualizar) {
        return Modelo.update(
            dadosParaAtualizar,
            {
                where: dadosDoProduto
            }
        )
    }
}