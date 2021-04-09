const { authors } = require("../../Data");

const AuthorResolver = {
    Query: {
        getAllAuthors: () => {
            return authors;
        },
        getAuthor: (parent, args) => {
            return authors.find(author => author.id === args.id)
        }
    },

    Mutation: {
        addAuthor: (parent, args) => {
            const author = { 
                id: authors.length + 1, 
                name: args.name, 
            };
            authors.push(author);
            return author;
        }
    }
};

module.exports = { AuthorResolver };