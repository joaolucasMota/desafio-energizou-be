const db = require('../db');

module.exports = {
    buscarTodos: () =>{
        return new Promise((aceito, rejeitado)=>{

            db.query('SELECT * FROM clientes', (error, results) =>{
                if(error){rejeitado(error);return;}
                aceito(results);
            })
        })
    },

    buscarUm: (id) => {
        return new Promise((aceito, rejeitado)=>{

            db.query('SELECT * FROM clientes WHERE id = ?', [id], (error, results)=>{
                if(error){rejeitado(error); return;}

                if(results.length > 0){
                    aceito(results[0]);
                }else{
                    aceito(false)
                }
            }
            );
        });
    },

    inserir: (nomeCliente, senha, razaoSocial, cnpj, telefone, email, cep, endereco, numero) => {
        return new Promise((aceito, rejeitado)=>{

            db.query('INSERT INTO clientes (nomeCliente, senha, razaoSocial, cnpj, telefone, email, cep, endereco, numero) VALUES (?,?,?,?,?,?,?,?,?)',[nomeCliente, senha, razaoSocial, cnpj, telefone, email, cep, endereco, numero],
            (error, results) =>{
                if(error) {rejeitado(error); return;}
                aceito(results.insertId)
            }
            );
        });
    },

    alterar: (id, nomeCliente, senha, razaoSocial, cnpj, telefone, email, cep, endereco, numero) => {
        return new Promise((aceito, rejeitado)=>{

            db.query('UPDATE clientes SET nomeCliente = ?, senha = ?, razaoSocial = ?, cnpj = ?, telefone = ?, email = ?, cep = ?, endereco = ?, numero = ? WHERE id = ?',[nomeCliente, senha, razaoSocial, cnpj, telefone, email, cep, endereco, numero, id],
            (error, results) =>{
                if(error) {rejeitado(error); return;}
                aceito(results)
            }
            );
        });
    },

    excluir: (id) =>{
        return new Promise((aceito, rejeitado)=>{

            db.query('DELETE FROM clientes WHERE id = ?',[id], (error, results) =>{
                if(error){rejeitado(error);return;}
                aceito(results);
            })
        })
    },
};