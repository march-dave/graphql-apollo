'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var Query = {
    users: function users(parent, args, _ref, info) {
        var db = _ref.db;

        if (!args.query) {
            return db.users;
        }

        return db.users.filter(function (user) {
            return user.name.toLowerCase().includes(args.query.toLowerCase());
        });
    },
    posts: function posts(parent, args, _ref2, info) {
        var db = _ref2.db;

        if (!args.query) {
            return db.posts;
        }

        return db.posts.filter(function (post) {
            var isTitleMatch = post.title.toLowerCase().includes(args.query.toLowerCase());
            var isBodyMatch = post.body.toLowerCase().includes(args.query.toLowerCase());
            return isTitleMatch || isBodyMatch;
        });
    },
    comments: function comments(parent, args, _ref3, info) {
        var db = _ref3.db;

        return db.comments;
    },
    me: function me() {
        return {
            id: '123098',
            name: 'Mike',
            email: 'mike@example.com'
        };
    },
    post: function post() {
        return {
            id: '092',
            title: 'GraphQL 101',
            body: '',
            published: false
        };
    }
};

exports.default = Query;
//# sourceMappingURL=2Query.js.map