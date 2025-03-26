# Welcome To Flight Search Backend system

# Project Structure
- src folder
  - index.js (Server)
  - /models
  - /config
  - /controller
  - /utils
  - /router
  - /middlewares
  - /services

- Tests [future]



## Project Setup

- Clone the repository in your local machine
- Execute the `npm run install` in the Root Directory of the downloaded project
- create a `.env` file and copy and paste the code from `.env.sample` 
- Run `npm i sequelize-cli` `npm i sequelize` `npm i mysql2` these command
- Execute the `npx sequelize init` command into root directory of the folder
- Move `Models` `seeders` `migrations` and `config` inside src folder
- Change the `src/config/config.json` according to below
- inside the `src/config` folder create a new file `config.json` and the copy and paste the following code and put the database name and password according to you

```
"development": {
    "username": <YOUR_USER_NAME>,
    "password": <YOUR_PASSWORD>,
    "database": <YOUR_DATA_BASE_NAME>,
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
```

- Once completed the above steps successfully then go to `src` root Directory and execute `npx sequelize db:create`

- After performing the above execute `npx sequelize db:create`
- crosscheck the databse has created or not


# Models for Airline System
- Airline Management system
  - Airplane Table (One Airplane can have different Flight) Airplane : Flight 1:N
  - Flight Table   (One flight can be attended by any of the Plane)  
  - Airport Table (One airport can have different flight) Airport:Flight 1:N
  - City Table  (One City can have different Airports) City:Airport 1:N

![alt text](image.png)


# Creation of models
 - run `npx sequelize model:generate --name <MODEL_NAME> --attributes <ATTRIBUTE_NAME:TYPE>`
 - Exa `npx sequelize model:generate --name City --attributes name:String`
 - result `New model was created at <ROOT>` 
          `New model was created at <ROOT>`

# City, Airport Table

### city -> id, name, createdAt, updatedAt
### airport -> id, name, address, cityId, createdAt, updatedAt

# Relationship between city and airport -> 
### city has many airport and airport can belongs to only one city (one to many)

 - Till now it's not synched with our database 
 - To make in synch with database run `npx sequelize db:migrate`
 - create city repository in `src/repository/city-repository.js` to interact with models and write logic to CRUD and all (repository layer is responsible for DB interaction)

- All the interaction from model will be completed from repository level.

- Repository layer is communicationg to service layer to perform extra logic calculation. 

- Service Layer is communicating to controller and the business logic are written inside controller layer

- Controller layer will hit the api inside /v1/index.js with corresponding routes.








- `For running MySql Server mysql -h localhost -P 3306 -u root -p`
- or `mysql -u root -p`

















# SQL Database

## Postgress and Prisma

- Connection to postgres
```postgress://[username]/[password]@[host]/[database_name]```

# How can you get Postgres DB

- go to elephentSql (Provide 20 MB of free Data Storage) but unfortunetly they did't operates now (End of Life announcement Elephent SQL)
- 

