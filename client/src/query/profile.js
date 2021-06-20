import { gql } from '@apollo/client'


export const GET_ALL_PROFILE = gql`

query{
    getAllProfile{
        id, username, contacts {
          tel
          email
        }
    }
   }



`

export const GET_PROFILE = gql`
query getProfile($id: ID){
    getProfile(id: $id){
        username, contacts {
            tel
            email
          }
    }
}
`