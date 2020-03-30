# project-omni
Omni project

## tools
- notion.so
- knex database wrapper
- insomnia
- react chrome debugger
- sqlite3 driver
- express
- nodemon

## backend
- setup
  - npm -y init
  - npm install express
  - node index.js
- npm install nodemon -D
  - script { "start": "nodemon index.js" }
  - npm start
- npm install knex
  - query builder
- npm install sqlite3
  - driver do sqlite pra fazer conexao
- npx knex init

## frontend web
- npx create-react-app frontend
- npm start

## notes

### routes, recurses, methods
- GET method at route /user to get the user recurse
  - GET
    - Retrieve data
  - POST
    - Create data
  - PUT
    - Edit data
  - DELETE
    - Remove data

### parameters
- Query params
  - ?parametroName=value&parametroName2=value2
  - const params = request.query
  - Filtro, Paginacao, Token, ...
- Route params 
  - const params = request.params
  - Route: /users/:parametroName
  - Identificar recurso
- Body
  - Corpo da requisicao

### database
- SQL
  - MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
  - Query Builder
    - knex
    - table().select().where()
    - migrations log
- NoSQL
  - MongoDB, CouchDB