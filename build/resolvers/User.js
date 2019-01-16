"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var User = {
    posts: function posts(parent, args, _ref, info) {
        var db = _ref.db;

        return db.posts.filter(function (post) {
            return post.author === parent.id;
        });
    },
    comments: function comments(parent, args, _ref2, info) {
        var db = _ref2.db;

        return db.comments.filter(function (comment) {
            return comment.author === parent.id;
        });
    }
};

exports.default = User;
//# sourceMappingURL=User.js.map