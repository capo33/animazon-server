const { ApolloServer } = require("apollo-server");
const dotenv = require("dotenv");

const { mainCards, animals, categories } = require("./db/db");
const typeDefs = require("./schema/schema");
const Query = require("./resolvers/Query");
const Mutation = require("./resolvers/Mutation");
const Animal = require("./resolvers/Animal");
const Category = require("./resolvers/Category");

dotenv.config();

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Animal,
    Category,
    Mutation,
  },
  context: {
    mainCards,
    animals,
    categories,
  },
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
