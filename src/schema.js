import { gql } from "apollo-boost";

const schema = gql`

type Query {
    getRoomTypes: [RoomType]
    getRoomType(id: Int): RoomType
    getUser: [Users]
    getAuthor(id: Int): Author
    me: Users!
    # getget: : Users!
 }

type RoomType {
    id: Int
    room: String
    details: String
    price: String
    image: String
  }

  type Users {
    email: String
    password: String
    hashed: String
  }

  type CreditCard {
    cardHolderName: String
    cardNumber: String
    cardMonth: String
    cardYear: String
    cardCCV: String
    cardZIP: String,
    token: String
  }

  type Author {
    id: Int
    name: String
    posts: [Post]
  }

  type Post {
    id: Int
    title: String
    text: String
    author: Author
  }

  type Mutation {
    setRoomType(room: String, details: String): RoomType
    login(email: String, password: String): Users
    verify(email: String, password: String): Users
    verifyCreditCard(
      cardHolderName: String,
      cardNumber: String,
      cardMonth: String,
      cardYear: String,
      cardCCV: String,
      cardZIP: String,
      token: String
    ): CreditCard
  }
`;

export { schema as default };