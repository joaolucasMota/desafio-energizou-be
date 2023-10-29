const DataService = require('../services/DataService');

module.exports = {
    buscarTodos: async (req, res) => {
        let json = { error: '', result:[]};

        let clientes = await DataService.buscarTodos();

        for(let i in clientes){
            json.result.push({
                id: clientes[i].id,
                nomeCliente: clientes[i].nomeCliente,
                senha: clientes[i].senha,
                razaoSocial: clientes[i].razaoSocial,
                cnpj: clientes[i].cnpj,
                telefone: clientes[i].telefone,
                email: clientes[i].email,
                enderecoCompleto: {
                    cep: clientes[i].cep,
                    endereco: clientes[i].endereco,
                    numero: clientes[i].numero,
                },
            });
        }
        res.json(json);
    },

    buscarUm: async(req, res) => {
        let json = { error: '', result:{}};

        let id = req.params.id;
        let cliente = await DataService.buscarUm(id);

        if(cliente){
            json.result = cliente;
        }

        res.json(json);
    },

    inserir: async(req, res) => {
        let json = { error: '', result:{}};

        let nomeCliente = req.body.nomeCliente;
        let senha = req.body.senha;
        let razaoSocial = req.body.razaoSocial;
        let cnpj = req.body.cnpj;
        let telefone = req.body.telefone;
        let email = req.body.email;
        let cep = req.body.cep;
        let endereco = req.body.endereco;
        let numero = req.body.numero;

        if(nomeCliente && senha && razaoSocial && cnpj && telefone && email && cep && endereco && numero){
            let ClienteId = await DataService.inserir(nomeCliente, senha, razaoSocial, cnpj, telefone, email, cep, endereco, numero);
            json.result = {
                id: ClienteId,
                nomeCliente,
                senha,
                razaoSocial,
                cnpj,
                telefone,
                email,
                cep,
                endereco,
                numero
            };
        }else{
            json.error = 'Campos não enviados';
        }

        res.json(json);
    },


    alterar: async(req, res) => {
        let json = { error: '', result:{}};

        let id = req.params.id;
        let nomeCliente = req.body.nomeCliente;
        let senha = req.body.senha;
        let razaoSocial = req.body.razaoSocial;
        let cnpj = req.body.cnpj;
        let telefone = req.body.telefone;
        let email = req.body.email;
        let cep = req.body.cep;
        let endereco = req.body.endereco;
        let numero = req.body.numero;

        if(id && nomeCliente && senha && razaoSocial && cnpj && telefone && email && cep && endereco && numero){
            await DataService.alterar(id, nomeCliente, senha, razaoSocial, cnpj, telefone, email, cep, endereco, numero);
            json.result = {
                id,
                nomeCliente,
                senha,
                razaoSocial,
                cnpj,
                telefone,
                email,
                cep,
                endereco,
                numero
            };
        }else{
            json.error = 'Campos não enviados';
        }

        res.json(json);
    },

    excluir: async(req, res) => {
        let json = { error: '', result:{}};

        await DataService.excluir(req.params.id);

        res.json(json);
    }
}