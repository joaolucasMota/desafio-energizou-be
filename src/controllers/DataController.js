const DataService = require('../services/DataService');

module.exports = {
    buscarTodos: async (req, res) => {
        try {
            const clientes = await DataService.buscarTodos();

            const resultado = clientes.map((cliente) => ({
                id: cliente.id,
                nomeCliente: cliente.nomeCliente,
                senha: cliente.senha,
                razaoSocial: cliente.razaoSocial,
                cnpj: cliente.cnpj,
                telefone: cliente.telefone,
                email: cliente.email,
                cep: cliente.cep,
                endereco: cliente.endereco,
                numero: cliente.numero,
            }));

            res.status(200).json({ result: resultado });
        } catch (error) {
            res.status(500).json({ error: 'Erro ao buscar informações.' });
        }
    },

    buscarUm: async (req, res) => {
        try {
            const id = req.params.id;
            const cliente = await DataService.buscarUm(id);

            if (cliente) {
                res.status(200).json({ result: cliente });
            } else {
                res.status(404).json({ error: 'Nenhum dado encontrado para o ID especificado.' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Erro ao buscar informações.' });
        }
    },

    inserir: async (req, res) => {
        try {
            const nomeCliente = req.body.nomeCliente;
            const senha = req.body.senha;
            const razaoSocial = req.body.razaoSocial;
            const cnpj = req.body.cnpj;
            const telefone = req.body.telefone;
            const email = req.body.email;
            const cep = req.body.cep;
            const endereco = req.body.endereco;
            const numero = req.body.numero;

            if (nomeCliente && senha && razaoSocial && cnpj && telefone && email && cep && endereco && numero) {
                const clienteId = await DataService.inserir(nomeCliente, senha, razaoSocial, cnpj, telefone, email, cep, endereco, numero);

                const result = {
                    id: clienteId,
                    nomeCliente,
                    senha,
                    razaoSocial,
                    cnpj,
                    telefone,
                    email,
                    cep,
                    endereco,
                    numero,
                };

                res.status(201).json({ result });
            } else {
                res.status(400).json({ error: 'Campos não enviados' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Erro ao inserir o registro' });
        }
    },


    alterar: async (req, res) => {
        try {
            const id = req.params.id;
            const nomeCliente = req.body.nomeCliente;
            const senha = req.body.senha;
            const razaoSocial = req.body.razaoSocial;
            const cnpj = req.body.cnpj;
            const telefone = req.body.telefone;
            const email = req.body.email;
            const cep = req.body.cep;
            const endereco = req.body.endereco;
            const numero = req.body.numero;

            if (id && nomeCliente && senha && razaoSocial && cnpj && telefone && email && cep && endereco && numero) {
                await DataService.alterar(id, nomeCliente, senha, razaoSocial, cnpj, telefone, email, cep, endereco, numero);

                const result = {
                    id,
                    nomeCliente,
                    senha,
                    razaoSocial,
                    cnpj,
                    telefone,
                    email,
                    cep,
                    endereco,
                    numero,
                };

                res.status(200).json({ result });
            } else {
                res.status(400).json({ error: 'Campos não enviados' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Erro ao alterar o registro' });
        }
    },

    excluir: async (req, res) => {
        try {
            const id = req.params.id;
            const result = await DataService.excluir(id);

            if (result) {
                res.status(200).json({ message: 'Registro excluído com sucesso' });
            } else {
                res.status(404).json({ error: 'Nenhum registro encontrado para o ID especificado' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Erro ao excluir o registro' });
        }
    },

    buscarCnpj: async (req, res) => {
        try {
            const cnpj = req.params.cnpj;
            const cliente = await DataService.buscarCnpj(cnpj);

            if (cliente) {
                res.status(200).json({ result: cliente });
            } else {
                res.status(404).json({ error: 'Nenhum dado encontrado para o CNPJ especificado.' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Erro ao buscar informações.' });
        }
    }
}