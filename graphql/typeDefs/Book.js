const { gql } = require("apollo-server-express");

const BookTypeDef = gql`
    type Book {
        name: String!
        id: Int!
        authorId: Int!
        author: Author!
    }

    # Queries
    extend type Query {
        getAllBooks: [Book!]!
        getBook(id: Int!): Book
    }

    # Mutations
    extend type Mutation {
        addBook(name: String!, authorId: Int!): Book!
    }
`;

module.exports = { BookTypeDef };