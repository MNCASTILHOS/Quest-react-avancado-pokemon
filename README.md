<img src="./public/images/pokeapi.svg" alt="logo do proketo pokemons">

<br>


<p align="center">
<img src="https://img.shields.io/badge/status-Finalizado-yellow"/>
</p>

<br>

Este projeto é um desafio do módulo de React Avançado do curso Dev Quest. 💻

O objetivo é criar uma pagina inicial que lista os pokemons utilizando as informações fornecidas pela RESTful API <a href="https://pokeapi.co/"> PokeAPI </a>, e uma segunda página com os detalhes de cada pokemom. 

## Funcionalidades
- Botão "change theme" para alterar o background da tela principal
- Campo select "type" para selecionar e filtrar os pokemons por tipo
- Botão "load more" para carregar mais pokemons
- Icone "⬆" com funcionalidade de click para "voltar ao topo"
- Funcionalidade de click no logo para carregar a tela inicial
- Funcionalidade de click no "card" do pokemon que direciona para a tela de detalhes
- Botão "to back" na tela de detalhes para retornar a tela inicial

[<img src="./telaPokemons.gif" alt="gif da tela o projeto pokemons">](https://github.com/MNCASTILHOS/quest-react-avancado)

## Ferramentas utilizadas
- VS Code


## Decisões tomadas durante o desafio
- Foi tomado a decisão de consumir a API pokédex utilizando os parâmetros limit com default 10 e a ação de carregar mais 10 a cada click no botão "Load More".
- Foi escolhido utilizar como parâmetro para filtrar por um pokemon específico o nome do pokemon, pois assim a URL fica mais amigável e intuitiva para o usuário.
- As cores utilizadas na estilização foram escolhidas pelos seguintes critérios:

    > O amarelo dos botões é a mesma cor do logotipo

    > O azul escuro dos títulos e bordas dos "cards" é a mesma cor da borda do logotipo

    > O azul claro do header, footer e do background seguem a paleta de cor de tons de azul da borda do logotipo. 


## Tecnologias Utilizadas

- HTML
- CSS
- JAVASCRIPT
- REACT

## Como utilizar

1 - Clone o projeto
```
git clone 
https://github.com/MNCASTILHOS/quest-react-avancado.git
```
2 - Acesse a pasta do projeto
```
cd quest-react-avançado
```
3 - Instale as dependências
```
npm install
```
4 - start o projeto
```
npm start
```
