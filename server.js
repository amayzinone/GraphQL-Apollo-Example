const { ApolloServer } = require("apollo-server-express");
const { schema } = require('./graphql/schema/index');

const express = require('express');
const app = express();

const server = new ApolloServer({ schema });

server.applyMiddleware({ app })

app.listen(5000, () => console.log('server is running'));