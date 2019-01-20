"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _templateObject = _taggedTemplateLiteral(["\n\ntype Query {\n    getRoomTypes: [RoomType]\n    getRoomType(id: Int): RoomType\n    getUser: [Users]\n    getAuthor(id: Int): Author\n    me: Users!\n }\n\ntype RoomType {\n    id: Int\n    room: String\n    details: String\n    price: String\n    image: String\n  }\n\n  type Users {\n    email: String\n    password: String\n    hashed: String\n  }\n\n  type CreditCard {\n    cardHolderName: String\n    cardNumber: String\n    cardMonth: String\n    cardYear: String\n    cardCCV: String\n    cardZIP: String,\n    token: String\n  }\n\n  type Author {\n    id: Int\n    name: String\n    posts: [Post]\n  }\n\n  type Post {\n    id: Int\n    title: String\n    text: String\n    author: Author\n  }\n\n  type Mutation {\n    setRoomType(room: String, details: String): RoomType\n    login(email: String, password: String): Users\n    verify(email: String, password: String): Users\n    verifyCreditCard(\n      cardHolderName: String,\n      cardNumber: String,\n      cardMonth: String,\n      cardYear: String,\n      cardCCV: String,\n      cardZIP: String,\n      token: String\n    ): CreditCard\n  }\n"], ["\n\ntype Query {\n    getRoomTypes: [RoomType]\n    getRoomType(id: Int): RoomType\n    getUser: [Users]\n    getAuthor(id: Int): Author\n    me: Users!\n }\n\ntype RoomType {\n    id: Int\n    room: String\n    details: String\n    price: String\n    image: String\n  }\n\n  type Users {\n    email: String\n    password: String\n    hashed: String\n  }\n\n  type CreditCard {\n    cardHolderName: String\n    cardNumber: String\n    cardMonth: String\n    cardYear: String\n    cardCCV: String\n    cardZIP: String,\n    token: String\n  }\n\n  type Author {\n    id: Int\n    name: String\n    posts: [Post]\n  }\n\n  type Post {\n    id: Int\n    title: String\n    text: String\n    author: Author\n  }\n\n  type Mutation {\n    setRoomType(room: String, details: String): RoomType\n    login(email: String, password: String): Users\n    verify(email: String, password: String): Users\n    verifyCreditCard(\n      cardHolderName: String,\n      cardNumber: String,\n      cardMonth: String,\n      cardYear: String,\n      cardCCV: String,\n      cardZIP: String,\n      token: String\n    ): CreditCard\n  }\n"]);

var _apolloBoost = require("apollo-boost");

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var schema = (0, _apolloBoost.gql)(_templateObject);

exports.default = schema;
//# sourceMappingURL=schema.js.map