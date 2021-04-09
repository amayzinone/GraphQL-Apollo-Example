const { books, authors } = require("../../Data");

const BookResolver = {
    Query: {
        getAllBooks: () => {
            return books;
        },
        getBook: (parent, args) => {
            return books.find(book => book.id === args.id)
        }
    },

    Book: {
        author: (book) => {
            return authors.find(author => author.id === book.authorId)
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