const express = require('express');
const app = express();
const usuario = require('./models/usuario');
const cors = require('cors')
const db = require('./models/db');
const sequelize = require('./models/db');
const { QueryTypes } = require('sequelize');

app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);

app.post('/cadastrar', async (req, res) => {
    
    await sequelize.query(
        'INSERT INTO usuario (nome, email, senha) VALUES (:nome, :email, :senha);',
        {
            replacements: {
                nome: req.body.nome,
                email: req.body.email,
                senha: req.body.senha
            }
        }
    ).then(() => {
        res.status(200).send('Usuário cadastrado com sucesso!');
    }).catch((err) => {
        res.status(400).send('Erro ao cadastrar usuário!' + err);
    });
        
});

app.post('/login', async (req, res) => {
    const result = await sequelize.query(
        'SELECT * FROM usuario WHERE email  = :email AND senha = :senha;',
        {
            replacements: {
                email: req.body.email,
                senha: req.body.senha
            }
        }
    )

    if (result[0].length > 0) {
        res.status(200).send('Login realizado com sucesso!');
    } else {
        res.status(202).send('Erro ao realizar login!');
    }
        
});

app.post('/publicar', async (req, res) => {
    await sequelize.query(
        'INSERT produto(nome_produto, preco, imagem) VALUES (:nome_produto, :preco, :imagem); ',
        {
            replacements: {
                nome_produto: req.body.nome_produto,
                preco: req.body.preco,
                imagem: req.body.imagem
            }
        }
    ).then(() => {
        res.status(200).send('Produto publicado com sucesso!');
    }).catch((err) => {
        res.status(400).send('Erro ao publicar produto!' + err);
    });

    
        
});

app.get('/produtos', async (req, res) => {
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    await sequelize.query(
        'SELECT nome_produto, preco, imagem FROM produto;',
        { type: sequelize.QueryTypes.SELECT }
    ).then((produtos) => {
        res.status(200).send(produtos);
    }).catch((err) => {
        res.status(400).send('Erro ao listar produtos!' + err);
    })
});

app.get('/usuarios', async (req, res) => {
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    await sequelize.query(
        'SELECT * FROM usuario;',
        { type: sequelize.QueryTypes.SELECT }
    ).then((usuarios) => {
        res.status(200).send(usuarios);
    })
    
});

app.post('/produtos/deletar', async(req, res) => {
    await sequelize.query(
        'DELETE FROM produto WHERE nome_produto = :nome_produto;',
        {
            replacements: {
                nome_produto: req.body.nome_produto
            }
        }
    ).then(() => {
        res.status(200).send('Produto deletado com sucesso!');
    }).catch((err) => {
        res.status(400).send('Erro ao deletar produto!' + err);
    })
})
    

app.listen(3030, () => {
    console.log('Server listening on port 3030: http://localhost:3030');
});

