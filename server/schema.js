const {buildSchema} = require('graphql')

const schema = buildSchema(`

    type User {
        id: ID
        username: String
        age: Int
        posts: [Post]
        status: String
        useradress: [Adress]
    }

    type Profile{
        id: ID
        username: String
        contacts: [Contacts]
    }

    type Contacts{
        tel: String
        email: String
    }

    type Post {
        id: ID
        title: String
        content: String
    }

    type Adress{
        country: String
        tel: String
    }
    
    input UserInput {
        id: ID
        username: String!
        age: Int!
        posts: [PostInput]
        status: String
        useradress: [AdressInput]
    }
    input PostInput {
        id: ID
        title: String!
        content: String!
    }

    input AdressInput{
        country:String
        tel: String
    }

    input ProfileInput{
        id: ID
        username: String
        contacts: [ContactsInput]
    }

    input ContactsInput{
        tel: String
        email: String
    }
    
    type Query {
        getAllUsers: [User]
        getUser(id: ID): User
        getAllProfile: [Profile]
        getProfile(id: ID): Profile 
    }

    type Mutation{
        createUser(input : UserInput):User
        createProfile(input : ProfileInput):Profile
    }
    
`)

module.exports = schema