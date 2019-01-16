const Query = {

    // getUser(parent, args, { db }, info) {
    //     if(!args.query) {
    //         return db.users
    //     }
    // },

    getRoomTypes(parent, args, { db }, info) {
       return db.roomtypes
    },

    getRoomType(parent, args, { db }, info ) {
        const filtered = db.roomtypes.filter( item => ( item.id === args.id ) ? item : null);
        return filtered[0];
    },

    me() {
        return {
            hashed: '123122312nnn',
            password: 'rookhotel',
            email: 'dave@rookhotel.com'
        }
    },

    // getget() {
    //     return {
    //         hashed: 'getget',
    //         password: 'getget',
    //         email: 'dave@rookhotel.com'
    //     }
    // }
    // users(parent, args, { db }, info) {
    //     if (!args.query) {
    //         return db.users
    //     }

    //     return db.users.filter((user) => {
    //         return user.name.toLowerCase().includes(args.query.toLowerCase())
    //     })
    // },
    // posts(parent, args, { db }, info) {
    //     if (!args.query) {
    //         return db.posts
    //     }

    //     return db.posts.filter((post) => {
    //         const isTitleMatch = post.title.toLowerCase().includes(args.query.toLowerCase())
    //         const isBodyMatch = post.body.toLowerCase().includes(args.query.toLowerCase())
    //         return isTitleMatch || isBodyMatch
    //     })
    // },
    // comments(parent, args, { db }, info) {
    //     return db.comments
    // },
    // me() {
    //     return {
    //         id: '123098',
    //         name: 'Mike',
    //         email: 'mike@example.com'
    //     }
    // },
    // post() {
    //     return {
    //         id: '092',
    //         title: 'GraphQL 101',
    //         body: '',
    //         published: false
    //     }
    // }
}

export { Query as default }