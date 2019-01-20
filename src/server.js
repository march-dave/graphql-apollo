import express from "express";
const port = process.env.PORT || 8080;
const app = express();

// import bodyParser from "body-parser";
// import cors from "cors";
// import jwt from "jsonwebtoken";
// import bcrypt from "bcryptjs";

import db from "./db";
import Query from "./resolvers/Query";
import User from "./resolvers/User";

import Mutation from './resolvers/Mutation'
import Subscription from './resolvers/Subscription'
import Post from './resolvers/Post'
import Comment from './resolvers/Comment'
import schema from "./schema";

// Apollo Server version - 2
import { ApolloServer, PubSub } from "apollo-server-express";

const pubSub = new PubSub();

const server = new ApolloServer({
  typeDefs: schema,
  resolvers: {
    Query,
    // Mutation,
    // Subscription,
    // User,
    // Post,
    // Comment
  },

  // context: ( {req, res} ) => ({
  //   toke: req.headers['auth-token']
  // }),

  introspection: true,
  playground: true,
  context: {
    db,
    pubSub
  }
});

server.applyMiddleware({ app });

app.listen(port, () => {
  console.log(`Express listening on port: ${server.graphqlPath} ${port}`);
});
