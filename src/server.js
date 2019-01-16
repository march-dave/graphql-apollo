import express from "express";
const port = process.env.PORT || 8080;
const app = express();

// import bodyParser from "body-parser";
// import cors from "cors";

import db from "./db";
import Query from "./resolvers/Query";
import User from "./resolvers/User";
import schema from "./schema";

// Apollo 2
import { ApolloServer, PubSub } from "apollo-server-express";
// import jwt from "jsonwebtoken";
// import bcrypt from "bcryptjs";

const pubSub = new PubSub();

// the __dirname is the current directory from where the script is running
// app.use(express.static(__dirname));

// app.use(cors(), bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// send the user to index html page inspite of the url
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "index.html"));
// });

// const getById = id => {
//   console.log(id);
//   const filtered = roomtypes.filter(c => (c.id === id ? c : null));
//   return filtered[0];
// };

// const getAuthorById = id => {
//   const filtered = author.filter(c => (c.id === id ? c : null));
//   return filtered[0];
// }

// const resolvers = {
//   Query: {
//     getRoomTypes: () => roomtypes,
//     getRoomType: (_, { id }) => getById(id),

//     getUser: () => users,

//     getAuthor: (_, { id }) => getAuthorById(id)
//   },

//   Mutation: {
//     setRoomType: (_, args) => {
//       const roomtype = { room: args.room, details: args.details };
//       roomtypes.push(roomtype);
//       return roomtype;
//     },

//     login: (_, args) => {
//       let loginuser;
//       const hashedpassword = bcrypt.hash(args.password, 12);

//       loginuser = { email: args.email, password: hashedpassword };

//       const tokengen = jwt.sign(
//         loginuser,
//         "JWT_SECRET_ROOKHOTELKIOSK_PLEASE_CHANGE_WHEN_READY"
//       );
//       loginuser.hashed = tokengen;
//       return loginuser;
//     },

//     verify: (_, args) => {
//       const validPassword = bcrypt.compare(
//         args.password,
//         "$2a$12$BTBmIbBelCsPLmBWg9.o1egRtf1UaYvloSbYqa.y5QQNvBzUI5RQe"
//       );

//       if (!validPassword) {
//         throw new Error("Password is incorrect!");
//       }

//       let loginuser = { email: args.email, password: validPassword };
//       loginuser.password = validPassword;

//       return loginuser;
//     },

//     verifyCreditCard: (_, args) => {
      
//       let creditCard = {
//         cardHolderName: args.cardHolderName,
//         cardNumber: args.cardNumber,
//         cardMonth: args.cardMonth,
//         cardYear: args.cardYear,
//         cardCCV: args.cardCCV,
//         cardZIP: args.cardZIP
//       };

//       const tokengen = jwt.sign(
//         creditCard,
//         "JWT_SECRET_ROOKHOTELKIOSK_PLEASE_CHANGE_WHEN_READY"
//       );

//       creditCard.token = tokengen;
//       return creditCard;
//     }
//   }
// };

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
