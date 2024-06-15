npm install
npm run start

test postman:

- register: POST http://localhost:8080/api/auth/register
  {
  "email": "testiii@example.com",
  "password": "password12223",
  "firstName": "Ed",
  "lastName": "Sheeran"
  }

- login: POST http://localhost:8080/api/auth/login
  body:
  {
  "email": "blablas@example.com",
  "password": "passsssword12223"
  }

- add-translation: POST http://localhost:8080/api/translation/add-translation
  Auth: Bearer Token from login
  body:
  {
  "translatedText": "Good Morning"
  }

- history: GET http://localhost:8080/api/history
  Auth: Bearer Token from login

- update-profile: PUT http://localhost:8080/api/profile/update
  Auth: Bearer Token from login
  body:
  {
  "firstName": "Eddy",
  "lastName": "Sheer"
  }

- articles: GET http://localhost:8080/articles
