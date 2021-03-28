
<h3 align="center">
  Desafio 5: Persistindo dados no Foodfy
</h3>

<blockquote align="center">Aprendendo a arte de programar e desenvolver sistemas!</blockquote>

<p align="center">

  <a href="LICENSE" >
    <img alt="License" src="https://img.shields.io/badge/license-MIT-%23F8952D">
  </a>

</p>

## Projeto Desenvolvimento Web Fullstack (Banco de Dados)

### Tecnologias e ferramentas:

 <ul>
  <li>NodeJS</li>
  <li>Nodemon</li>
  <li>Express</li>
  <li>Nunjucks</li>
  <li>PostgreSQL</li>
 </ul>

### Rodando o projeto:

1 - Clone o projeto e o abra utilizando seu editor preferido.

2 - Rode um `npm install` na pasta do projeto.

3 - Rode um `npm start` para rodar o projeto.


### Sobre o desafio

Nesse desafio você irá criar um banco de dados para o Foodfy.

A partir desse desafio, os dados que antes você vinha salvando em um arquivo JSON agora serão armazenados em um banco de dados PostgreSQL.

Você irá criar novas páginas de cadastro, listagem e edição de chefs, pois uma receita será atribuída a um chef.

Você irá criar um busca de receitas, onde você poderá filtrar receitas pelo seu nome.

Por fim, você irá adicionar a funcionalidade de paginação na listagem de receitas.

### Banco de dados

Usando os conhecimentos adquiridos até aqui, você irá criar um banco de dados pelo Postgres, utilize o nome `foodfy`.

Você irá criar uma tabela de receitas, chame-a de `recipes` e uma tabela de cozinheiros, nomeie-a como `chefs`.

### [Admin] Cadastro de chefs

<div align="center">
   <img src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/launchbase/mockup-cadastro-chefs.png" />
</div>

Você irá colocar novas páginas administrativas que serão capazes de fazer as operação de cadastro, listagem, atualização e remoção de chefs.

> Importante: Ao deletar o chef, se o mesmo possuir pelo menos uma receita, retorne um erro informando que chefs que possuem receitas não podem ser deletados.

### [Site] Busca de receitas

<div align="center">
   <img src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/launchbase/mockup-busca.png" />
</div>

Para facilitar a busca de uma receita cadastrada, a pessoa que acessar o site poderá filtrar por nome da receita.

Você criará também uma página de resultado da busca que listará as receitas de acordo com a busca do usuário.

### [Site] Listagem de chefs

<div align="center">
   <img src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/launchbase/mockup-chefs.png" />
</div>

Fazer uma página com nome "Chefs" no site onde irá mostrar os chefs do Foodfy.

Fazer uma contagem de todas a receitas daquele chef, e apresentar nessa página.

## Como contribuir:

-  Faça um fork do projeto;
-  Crie uma nova branch, exemplo: `git checkout -b my-feature`;
-  Commit as modificações, exemplo: `git commit -m 'feat: My new feature'`;
-  Faça um push para a sua branch: `git push origin my-feature`.

Criado por Manfrinne Ferreira [Contato](https://www.linkedin.com/in/manfrinne-ferreira-6033121a7/)

## Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](../LICENSE) para mais detalhes.

---

