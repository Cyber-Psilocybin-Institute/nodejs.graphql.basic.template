# nodejs.graphql.basic.template
⚗ Basic template of a NodeJS application with GraphQL

## Run mongoDB docker container
```
docker run --name mongodb -d -p 27017:27017 mongo
```

## Query examples

Getting a user by id

```graphql
query {
  user(id: "61fff210196972b7cc1d3789") {
    name
    email
  }
}
```

Getting a list of users

```graphql
query {
  users {
    id
    name
    email
  }
}
```

## Mutations examples

Creating a user and returning the user's id

```graphql
mutation {
  createUser(name: "Diogo", email: "diogo@mail.com") {
    id
  }
}
```
