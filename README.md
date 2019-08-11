# jwt_example

This is a simple example of how to use Json Web Token to authenticate in an API, the modules used are:

- Express
- JsonWebToken

To test the api:

$ npm install

$ npm start

In postman use the path: localhost:3000/api/login using POST to get the token and then localhost:3000/api/protect and put in the header "authorization" "beare ingre_token" using GET
