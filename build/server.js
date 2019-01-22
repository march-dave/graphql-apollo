"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _db = require("./db");

var _db2 = _interopRequireDefault(_db);

var _Query = require("./resolvers/Query");

var _Query2 = _interopRequireDefault(_Query);

var _User = require("./resolvers/User");

var _User2 = _interopRequireDefault(_User);

var _Mutation = require("./resolvers/Mutation");

var _Mutation2 = _interopRequireDefault(_Mutation);

var _Subscription = require("./resolvers/Subscription");

var _Subscription2 = _interopRequireDefault(_Subscription);

var _Post = require("./resolvers/Post");

var _Post2 = _interopRequireDefault(_Post);

var _Comment = require("./resolvers/Comment");

var _Comment2 = _interopRequireDefault(_Comment);

var _schema = require("./schema");

var _schema2 = _interopRequireDefault(_schema);

var _apolloServerExpress = require("apollo-server-express");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var port = process.env.PORT || 8080;
var app = (0, _express2.default)();

// import bodyParser from "body-parser";
// import cors from "cors";
// import jwt from "jsonwebtoken";
// import bcrypt from "bcryptjs";

// Apollo Server version - 2


var pubSub = new _apolloServerExpress.PubSub();

var server = new _apolloServerExpress.ApolloServer(_defineProperty({
  typeDefs: _schema2.default,
  resolvers: {
    Query: _Query2.default
    // Mutation,
    // Subscription,
    // User,
    // Post,
    // Comment
  },

  context: function context(_ref) {
    var req = _ref.req,
        res = _ref.res;
    return {
      toke: req.headers['auth-token']
    };
  },

  introspection: true,
  playground: true
}, "context", {
  db: _db2.default,
  pubSub: pubSub
}));

server.applyMiddleware({ app: app });

app.listen(port, function () {
  console.log("Express listening on port: " + server.graphqlPath + " " + port);
});
//# sourceMappingURL=server.js.map