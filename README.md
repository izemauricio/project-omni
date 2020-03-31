# project-omni
Omni project

## stack
- knex database wrapper
- insomnia
- react chrome debugger
- sqlite3 driver
- express
- nodemon
- CORS
- notion.so
- axios
- Intl format

## react
- import de fonts por css
- props.child
- box-sizing: border-box
- desconstrucao de array [] e objeto {}
- material icons, feather icons, fontawesome icons
- Link instead of a to do not reload
- useEffect
- useHistory, Link
- arrow function inside jsx to send a function without calling it

## mobile
- npm install -g expo-cli
- expo init mobile
  - blank
- emulador, celular, expo-snack
  - yarn start
  - download expo app and scan qrcode

## web
- npx create-react-app frontend
- npm start
- npm install react-icons
- npm install axios

## backend
- setup
  - npm -y init
  - npm install express
  - node index.js

- npm install nodemon -D
  - script { "start": "nodemon index.js" }
  - npm start

- sqlite and knex
  - npm install knex
    - query builder
  - npm install sqlite3
    - driver do sqlite pra fazer conexao
  - npx knex init

- npm install cors

### migration

- npx knex migrate:make migration_name
  - cria migration
- npx knex migrate:latest
  - executa migration
- npx knex migrate:rollback
  - executa down() do migration
- npx knex migrate:status
  - lista migrations executadas



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