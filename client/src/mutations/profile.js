import { gql } from '@apollo/client'

export const CREATE_PROFILE=gql`
mutation createProfile($input: ProfileInput){
    createProfile(input: $input){
        id, username, contacts {
            tel
            email
          }
    }
}

`