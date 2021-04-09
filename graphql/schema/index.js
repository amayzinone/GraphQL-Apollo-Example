const { mergeSchemas, makeExecutableSchema } = require("graphql-tools");

const { AuthorResolver } = require("../resolvers/Author"); 
const { AuthorTypeDef } = require("../typeDefs/Author");

const { BookResolver } = require("../resolvers/Book"); 
const { BookTypeDef } = require("../typeDefs/Book");


const MainSchema = makeExecutableSchema({
    resolvers: [
        AuthorResolver,
        BookResolver
    ],
    typeDefs: [
        AuthorTypeDef,
        BookTypeDef
    ],
});

const schema = mergeSchemas({
    schemas: [MainSchema]
});

module.exports = { schema };
