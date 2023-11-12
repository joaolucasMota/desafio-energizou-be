# API Crud para gerenciamento de clientes

Essa API foi desenvolvida como parte do desafio da empreza Energizou.

O front end da aplicação que utiliza esssa API você pode acessar <a href="https://github.com/joaolucasMota/desafio-energizou-fe">clicando aqui<a>

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

Você pode fazer um clone do projeto copiando a URL desta página e executando o comando "git clone <URL DESTA PAGINA>" em uma pasta qualquer do seu computador.

Após isso você deve acessar a pasta do projeto e executar o comando "npm install" (ou o comando instal do seu package mananger), para instalar as dependencias do projeto.

Você deve editar o arquivo "variaveis.env" com as informações de usuário e senha do seu Banco de dados Mysql

Abaixo segue as instruções que você deve executar em seu banco de dados para crialo e poder usar junto com a API

Essas instrucções faram com que você crei o banco de dados e tabela

```sql
--  Código SQL

create database dbEnergizou;

use dbEnergizou;

create table clientes (
id int primary key auto_increment,
nomeCliente VARCHAR(100) NOT NULL,
senha VARCHAR(100) NOT NULL,
razaoSocial VARCHAR(100) NOT NULL,
cnpj VARCHAR(18) NOT NULL, 
cep VARCHAR(9) NOT NULL, 
endereco VARCHAR(255) NOT NULL,
numero VARCHAR(10) NOT NULL,
telefone VARCHAR(15) NOT NULL,
email VARCHAR(100) NOT NULL
);
```

## 👨🏻‍🔧 Funções da API

A API foi desenvolvida para gereenciar as requisições do sistema de gerenciamento de clientes

Possui rotas para rrequisições GET, PUT, POST e DELETE

A API também fornece endpoint para buscar um CNPJ em especifico 

## 👨🏻‍💻 Tecnologias Utilizadas
 <li> Node JS

A API foi desenvolvida apenas com o Node Js, utilizando o javascript.
