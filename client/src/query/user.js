import { gql } from '@apollo/client'


export const GET_ALL_USERS = gql`
   query {
    getAllUsers{
        id, username, age
    }
   }
`

export const GET_ONE_USERS = gql`
   query getUser($id: ID){
    getUser(id: $id){
        username, age
    }
   }
`