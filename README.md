# Welcome to flight services

## Project setup
- clone the project on your local
- Execute `npm install` on the same path as of your root directory of the downloaded project.
Create a `.env` file in the root directory and add following enciornemt variable
 - `PORT = 3000`
 - Inside the `src/config` folder create a new file `config.json` and then add the following piece of json.
<<<<<<< HEAD
`
=======
 `
>>>>>>> e110a8cf049204060263a7aac89cb93e1427bcf9
{
  "development": {
    "username": "<YOUR DB LOGIN NAME>",
    "password": "<YOUR DB PASSWORD>",
    "database": "Flights_search_DB_Dev",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
  
}
<<<<<<< HEAD
 `

 Once you have added your db config as listed above, go to the src folder from your terminal and execute npx sequelize db:create
=======

 `
>>>>>>> e110a8cf049204060263a7aac89cb93e1427bcf9
