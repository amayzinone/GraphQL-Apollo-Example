const { gql } = require("apollo-server-express");

const AuthorTypeDef = gql`
    type Author {
        name: String!
        id: Int!
    }

    # Queries
    type Query {
        getAllAuthors: [Author]!
        getAuthor(id: Int!): Author
    }

    # Mutations
    type Mutation {
        addAuthor(name: String!): Author!
    }
`;

module.exports = { AuthorTypeDef };