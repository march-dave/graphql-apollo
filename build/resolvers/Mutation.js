'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _v = require('uuid/v4');

var _v2 = _interopRequireDefault(_v);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Mutation = {
    createUser: function createUser(parent, args, _ref, info) {
        var db = _ref.db;

        var emailTaken = db.users.some(function (user) {
            return user.email === args.data.email;
        });

        if (emailTaken) {
            throw new Error('Email taken');
        }

        var user = _extends({
            id: (0, _v2.default)()
        }, args.data);

        db.users.push(user);

        return user;
    },
    deleteUser: function deleteUser(parent, args, _ref2, info) {
        var db = _ref2.db;

        var userIndex = db.users.findIndex(function (user) {
            return user.id === args.id;
        });

        if (userIndex === -1) {
            throw new Error('User not found');
        }

        var deletedUsers = db.users.splice(userIndex, 1);

        db.posts = db.posts.filter(function (post) {
            var match = post.author === args.id;

            if (match) {
                db.comments = db.comments.filter(function (comment) {
                    return comment.post !== post.id;
                });
            }

            return !match;
        });
        db.comments = db.comments.filter(function (comment) {
            return comment.author !== args.id;
        });

        return deletedUsers[0];
    },
    updateUser: function updateUser(parent, args, _ref3, info) {
        var db = _ref3.db;
        var id = args.id,
            data = args.data;

        var user = db.users.find(function (user) {
            return user.id === id;
        });

        if (!user) {
            throw new Error('User not found');
        }

        if (typeof data.email === 'string') {
            var emailTaken = db.users.some(function (user) {
                return user.email === data.email;
            });

            if (emailTaken) {
                throw new Error('Email taken');
            }

            user.email = data.email;
        }

        if (typeof data.name === 'string') {
            user.name = data.name;
        }

        if (typeof data.age !== 'undefined') {
            user.age = data.age;
        }

        return user;
    },
    createPost: function createPost(parent, args, _ref4, info) {
        var db = _ref4.db,
            pubsub = _ref4.pubsub;

        var userExists = db.users.some(function (user) {
            return user.id === args.data.author;
        });

        if (!userExists) {
            throw new Error('User not found');
        }

        var post = _extends({
            id: (0, _v2.default)()
        }, args.data);

        db.posts.push(post);

        if (args.data.published) {
            pubsub.publish('post', {
                post: {
                    mutation: 'CREATED',
                    data: post
                }
            });
        }

        return post;
    },
    deletePost: function deletePost(parent, args, _ref5, info) {
        var db = _ref5.db,
            pubsub = _ref5.pubsub;

        var postIndex = db.posts.findIndex(function (post) {
            return post.id === args.id;
        });

        if (postIndex === -1) {
            throw new Error('Post not found');
        }

        var _db$posts$splice = db.posts.splice(postIndex, 1),
            _db$posts$splice2 = _slicedToArray(_db$posts$splice, 1),
            post = _db$posts$splice2[0];

        db.comments = db.comments.filter(function (comment) {
            return comment.post !== args.id;
        });

        if (post.published) {
            pubsub.publish('post', {
                post: {
                    mutation: 'DELETED',
                    data: post
                }
            });
        }

        return post;
    },
    updatePost: function updatePost(parent, args, _ref6, info) {
        var db = _ref6.db,
            pubsub = _ref6.pubsub;
        var id = args.id,
            data = args.data;

        var post = db.posts.find(function (post) {
            return post.id === id;
        });
        var originalPost = _extends({}, post);

        if (!post) {
            throw new Error('Post not found');
        }

        if (typeof data.title === 'string') {
            post.title = data.title;
        }

        if (typeof data.body === 'string') {
            post.body = data.body;
        }

        if (typeof data.published === 'boolean') {
            post.published = data.published;

            if (originalPost.published && !post.published) {
                pubsub.publish('post', {
                    post: {
                        mutation: 'DELETED',
                        data: originalPost
                    }
                });
            } else if (!originalPost.published && post.published) {
                pubsub.publish('post', {
                    post: {
                        mutation: 'CREATED',
                        data: post
                    }
                });
            }
        } else if (post.published) {
            pubsub.publish('post', {
                post: {
                    mutation: 'UPDATED',
                    data: post
                }
            });
        }

        return post;
    },
    createComment: function createComment(parent, args, _ref7, info) {
        var db = _ref7.db,
            pubsub = _ref7.pubsub;

        var userExists = db.users.some(function (user) {
            return user.id === args.data.author;
        });
        var postExists = db.posts.some(function (post) {
            return post.id === args.data.post && post.published;
        });

        if (!userExists || !postExists) {
            throw new Error('Unable to find user and post');
        }

        var comment = _extends({
            id: (0, _v2.default)()
        }, args.data);

        db.comments.push(comment);
        pubsub.publish('comment ' + args.data.post, {
            comment: {
                mutation: 'CREATED',
                data: comment
            }
        });

        return comment;
    },
    deleteComment: function deleteComment(parent, args, _ref8, info) {
        var db = _ref8.db,
            pubsub = _ref8.pubsub;

        var commentIndex = db.comments.findIndex(function (comment) {
            return comment.id === args.id;
        });

        if (commentIndex === -1) {
            throw new Error('Comment not found');
        }

        var _db$comments$splice = db.comments.splice(commentIndex, 1),
            _db$comments$splice2 = _slicedToArray(_db$comments$splice, 1),
            deletedComment = _db$comments$splice2[0];

        pubsub.publish('comment ' + deletedComment.post, {
            comment: {
                mutation: 'DELETED',
                data: deletedComment
            }
        });

        return deletedComment;
    },
    updateComment: function updateComment(parent, args, _ref9, info) {
        var db = _ref9.db,
            pubsub = _ref9.pubsub;
        var id = args.id,
            data = args.data;

        var comment = db.comments.find(function (comment) {
            return comment.id === id;
        });

        if (!comment) {
            throw new Error('Comment not found');
        }

        if (typeof data.text === 'string') {
            comment.text = data.text;
        }

        pubsub.publish('comment ' + comment.post, {
            comment: {
                mutation: 'UPDATED',
                data: comment
            }
        });

        return comment;
    }
};

exports.default = Mutation;
//# sourceMappingURL=Mutation.js.map