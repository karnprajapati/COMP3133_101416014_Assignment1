const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const typeDefs = require('./schema/typeDefs');
const resolvers = require('./resolvers/resolvers');

const MONGO_URI = 'mongodb+srv://admin:MongoDB@cluster0.0mqlv.mongodb.net/comp3133_101416014_assigment1?retryWrites=true&w=majority&appName=Cluster0';
const PORT = 4000;

async function startServer() {
  try {
    const app = express();

   
    const server = new ApolloServer({
      typeDefs,
      resolvers,
      context: ({ req }) => ({ req }),
    });

    await server.start();
    server.applyMiddleware({ app });


    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB');

   
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on http://localhost:${PORT}${server.graphqlPath}`);
    });
  } catch (err) {
    console.error('Error starting the server:', err);
  }
}


startServer();