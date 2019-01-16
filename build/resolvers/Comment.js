"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var Comment = {
    author: function author(parent, args, _ref, info) {
        var db = _ref.db;

        return db.users.find(function (user) {
            return user.id === parent.author;
        });
    },
    post: function post(parent, args, _ref2, info) {
        var db = _ref2.db;

        return db.posts.find(function (post) {
            return post.id === parent.post;
        });
    }
};

exports.default = Comment;
//# sourceMappingURL=Comment.js.map