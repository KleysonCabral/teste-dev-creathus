# CREATHUSFLIX

<h4 align="center">O projeto consiste no desenvolvimento de uma mini plataforma colaborativa de catálogo de filmes.</h4>

<br>

![image](https://user-images.githubusercontent.com/22160651/167535252-61739def-c2e7-4afd-9252-1ae1ffc7c95c.png)


<br>

## 🛠 Tecnologias

- [Typescript](https://www.typescriptlang.org/)
- [Node JS](https://nodejs.org/en/)
- [React](https://www.php.net/releases/7_4_20.php)
- [Express](https://expressjs.com/pt-br/)
- [Prisma](https://www.prisma.io/)
- [Vite](https://vitejs.dev/guide/)

## 📄 O que foi realizado?

### Backend -> NodeJS

- [x] Iniciar projeto em Typescript
- [x] Instalar e configurar o express
- [x] Configurar o Prisma (ORM => Object Relation Mapping) -> Manipule o banco de dados
- [x] Criar as rotas
  - [x] Filmes (Título, Descrição, Imagem, Autor)
    - [x] Listar (Imagem, título, autor)
    - [x] Criar (Título, Descrição, Imagem, Autor)
- [x] Lidar com upload de imagens
- [x] Habilitar o cors

### Frontend -> ReactJS & Vite

- [x] Iniciar o projeto Vite
- [x] Configurar o CSS Modules
- [x] Configurar o React Router DOM
- [ ] Construir as páginas
  - [x] Listagem de filmes
    - [x] Fazer o componente de sidebar
    - [x] Estilizar da forma como é no template
    - [ ] Criar o componente de footer com a logo da Creathus
  - [ ] Criar um filme
  - [ ] Detalhes de um filme
  - [ ] Filmes favoritados
- [ ] Funcionalidades
  - [ ] Conexão com a API
    - [ ] Requisitar todos os filmes
    - [ ] Fazer rota de detalhar um filme
  - [ ] Favoritar um filme
  - [ ] Ver os filmes favoritados


## 🚀 Como inicializar o Back-End?

- Clone o repositório do projeto

Dentro da pasta SERVER rode em sequência:

```npm install``` 

```npx prisma migrate dev``` 

```npm run dev``` 


## 🚀 Como inicializar o Front-End?

Dentro da pasta WEB rode em sequência:

```npm install``` 

```npm run dev ``` 


