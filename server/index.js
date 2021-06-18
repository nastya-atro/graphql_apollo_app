const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const cors = require('cors')
const schema = require('./schema')
const users=[{id:1, username: "Nastya", age: 25}]
const profiles=[{id: 1, username:'Yana', contacts:[{tel:'202020', email:'belle.nastja@gmail.com'}]}]

const app = express()
app.use(cors())

const createUser=(input)=>{
    const id = Date.now()
    return{
        id, ...input
    }
}

const createProfile=(input)=>{
    const id = Date.now()
    return{
        id, ...input
    }
}

const root={
    getAllUsers:()=>{
        return users

    },
    getUser:({id})=>{
        return users.find(user=>user.id ==id)
    },

    getAllProfile:()=>{
        return profiles
    },

    getProfile:({id})=>{
        return profiles.find(p=>p.id==id)
    },
    createUser:({input})=>{
        const user = createUser(input)
        users.push(user)
        return user
    },
    createProfile:({input})=>{
        const profile = createProfile(input)
        profiles.push(profile)
        return profile
    }
}



app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema,
    rootValue: root
}))

app.listen(5000, () => console.log('server started on port 5000'))