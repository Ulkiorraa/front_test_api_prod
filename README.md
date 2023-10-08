# Frontend para Produtos

Este é um frontend simples para acessar uma API de gerenciamento de produtos. O frontend permite listar produtos, buscar produtos por código, inserir novos produtos, atualizar produtos e remover produtos.

## Pré-requisitos

Certifique-se de ter um servidor da API em execução em `http://localhost:3000` ou ajuste a variável `baseURL` no arquivo `script.js` para corresponder à localização da sua API.

## Uso

1. Abra o arquivo `index.html` em um navegador da web.

2. Você verá uma interface de usuário com as seguintes funcionalidades:

   - **Listar Produtos**: Clique no botão "Listar Produtos" para ver a lista de todos os produtos disponíveis.

   - **Buscar Produto por Código**: Insira o código do produto no campo e clique no botão "Buscar Produto" para encontrar um produto específico por código.

   - **Inserir Novo Produto**: Preencha os campos de código, nome e preço e clique no botão "Inserir Produto" para adicionar um novo produto.

   - **Atualizar Produto**: Preencha os campos de código, novo nome e novo preço e clique no botão "Atualizar Produto" para modificar um produto existente.

   - **Remover Produto**: Insira o código do produto no campo e clique no botão "Remover Produto" para excluir um produto da lista.

## Tecnologias Utilizadas

- HTML
- JavaScript
- [Axios](https://github.com/axios/axios) para fazer requisições HTTP à API

## Personalização

Você pode personalizar a aparência da interface de usuário editando o arquivo `styles.css`.

## Contribuições

Sinta-se à vontade para contribuir com melhorias ou correções neste projeto. Abra uma "issue" para discutir as mudanças que você deseja fazer e envie um "pull request" com suas alterações.

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para obter mais detalhes.
