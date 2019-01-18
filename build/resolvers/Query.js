'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var Query = {

    // getUser(parent, args, { db }, info) {
    //     if(!args.query) {
    //         return db.users
    //     }
    // },

    getRoomTypes: function getRoomTypes(parent, args, _ref, info) {
        var db = _ref.db;

        return db.roomtypes;
    },
    getRoomType: function getRoomType(parent, args, _ref2, info) {
        var db = _ref2.db;

        var filtered = db.roomtypes.filter(function (item) {
            return item.id === args.id ? item : null;
        });
        return filtered[0];
    },
    me: function me() {
        return {
            hashed: '123122312nnn',
            password: 'rookhotel',
            email: 'dave@rookhotel.com'
        };
    }
};

exports.default = Query;
//# sourceMappingURL=Query.js.map