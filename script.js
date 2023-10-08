const baseURL = 'http://localhost:3000';

function listarProdutos() {
    axios.get(`${baseURL}/produtos`)
        .then(response => {
            const produtos = response.data;
            const listaProdutos = document.getElementById('listaProdutos');
            listaProdutos.innerHTML = JSON.stringify(produtos, null, 2);
        })
        .catch(error => {
            console.error(error);
        });
}

function buscarProdutoPorCodigo() {
    const codigo = document.getElementById('codigoProduto').value;
    axios.get(`${baseURL}/produtos/${codigo}`)
        .then(response => {
            const produto = response.data;
            const produtoPorCodigo = document.getElementById('produtoPorCodigo');
            produtoPorCodigo.innerHTML = JSON.stringify(produto, null, 2);
        })
        .catch(error => {
            console.error(error);
        });
}

function inserirProduto() {
    const codigo = document.getElementById('codigoNovo').value;
    const nome = document.getElementById('nomeNovo').value;
    const preco = document.getElementById('precoNovo').value;
    axios.post(`${baseURL}/produtos`, { codigo, nome, preco })
        .then(response => {
            console.log(response.data);
            listarProdutos();
        })
        .catch(error => {
            console.error(error);
        });
}

function atualizarProduto() {
    const codigo = document.getElementById('codigoAtualizar').value;
    const novoNome = document.getElementById('novoNome').value;
    const novoPreco = document.getElementById('novoPreco').value;
    axios.put(`${baseURL}/produtos/${codigo}`, { nome: novoNome, preco: novoPreco })
        .then(response => {
            console.log(response.data);
            listarProdutos();
        })
        .catch(error => {
            console.error(error);
        });
}

function removerProduto() {
    const codigo = document.getElementById('codigoRemover').value;
    axios.delete(`${baseURL}/produtos/${codigo}`)
        .then(response => {
            console.log(response.data);
            listarProdutos();
        })
        .catch(error => {
            console.error(error);
        });
}
