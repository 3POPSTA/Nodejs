const express = require("express");
const { graphalHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

// Sample data
const schema = buildSchema(`
  # A book has a title, author, and publication year
  type Book {
    id: ID!
    title: String!
    author: String!
    year: Int
    genre: String
  }

  # The "Query" type is the root of all GraphQL queries
  type Query {
    # Get all books
    books: [Book!]!
    # Get a specific book by ID
    book(id: ID!): Book
    # Search books by title or author
    searchBooks(query: String!): [Book!]!
  }
`);

// Define resolvers for the schema fields
const root = {
  // Resolver for fetching all books
  books: () => books,
  
  // Resolver for fetching a single book by ID
  book: ({ id }) => books.find(book => book.id === id),
  
  // Resolver for searching books
  searchBooks: ({ query }) => {
    const searchTerm = query.toLowerCase();
    return books.filter(
      book =>
        book.title.toLowerCase().includes(searchTerm) ||
        book.author.toLowerCase().includes(searchTerm)
    );
  }
};

// Create an Express app
const app = express();

// Set up the GraphQL endpoint
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  // Enable the GraphiQL interface for testing
  graphiql: true,
}));

// Start the server
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/graphql`);
});