"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var roomtypes = [{
  id: 1,
  room: "ROOK",
  details: "Reserve without deposit, Breakfast included, Free Internet",
  price: "$99.00",
  image: "rook_icon"
}, {
  id: 2,
  room: "QUEEN",
  details: "Reserve without deposit, Breakfast included, Free Internet",
  price: "$79.00",
  image: "queen_icon"
}, {
  id: 3,
  room: "KING",
  details: "Reserve without deposit, Breakfast included, Free Internet",
  price: "$138.00",
  image: "king_icon",
  deluxeimage: "room_queen"
}, {
  id: 4,
  room: "PAWN",
  details: "Reserve without deposit, Breakfast included, Free Internet",
  price: "$79.00",
  image: "pawn_icon"
}, {
  id: 5,
  room: "KNIGHT",
  details: "Reserve without deposit, Breakfast included, Free Internet",
  price: "$99.00",
  image: "knight_icon"
}, {
  id: 6,
  room: "BISHOP",
  details: "Reserve without deposit, Breakfast included, Free Internet",
  price: "$99.00",
  image: "bishop_icon"
}];

var users = [{ email: "dave@abc.com", password: "123", hashed: "111" }];
var author = [{ id: 1, name: "dave" }];
var post = [{ id: 1, title: "title field", text: "text field" }];

var db = {
  roomtypes: roomtypes,
  users: users,
  post: post,
  author: author
};

exports.default = db;
//# sourceMappingURL=db.js.map