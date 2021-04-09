const { books } = require("../../Data");

const BookResolver = {
    Query: {
        getAllBooks: () => {
            return books;
        },
        getBook: (parent, args) => {
            return books.find(book => book.id === args.id)
        }
    },

    Mutation: {
        addBook: (parent, args) => {
            const book = { 
                id: books.length + 1, 
                name: args.name, 
                authorId: args.authorId
            };
            books.push(book);
            return book;
        }
    }
};

module.exports = { BookResolver };