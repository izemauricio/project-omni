# project-omni
Rocketseat omnistack week 11 project

## mobile
- npm install -g expo-cli
- expo init mobile
  - blank option
- open emulador, celular or expo-snack web
  - yarn start or expo start
  - download expo app and scan the qrcode
- npm install @react-navigation/native
- expo install expo-constants
- expo-mail-composer
- npm install intl

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
    - sqlite driver
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

### mobile
- tag nao tem semantica
  - view pra tudo
- tudo flexbox por padrao
- nao tem heranca de styles
  
### web
- div p h1 span Link a header footer

### rest
- GET method at /user route to get the user recurse
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

### keywords
- knex database wrapper
- insomnia
- react chrome debugger
- sqlite3 driver
- express
- nodemon
- cors
- notion.so
- axios
- Intl format

### web
- import de fonts por css
- props.child
- box-sizing: border-box
- desconstrucao de array [] e objeto {}
- material icons, feather icons, fontawesome icons
- Link instead of a to do not reload
- useEffect
- useHistory, Link
- arrow function inside jsx to send a function without calling it