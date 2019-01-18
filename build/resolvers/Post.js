"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var Post = {
    author: function author(parent, args, _ref, info) {
        var db = _ref.db;

        return db.users.find(function (user) {
            return user.id === parent.author;
        });
    },
    comments: function comments(parent, args, _ref2, info) {
        var db = _ref2.db;

        return db.comments.filter(function (comment) {
            return comment.post === parent.id;
        });
    }
};

exports.default = Post;
//# sourceMappingURL=Post.js.map