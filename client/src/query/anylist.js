import { gql } from '@apollo/client'

export const GET_MEDIA = gql`

query Media($id: Int){
    Media(id: $id){
        id,title {
            romaji
            english
            native
            userPreferred
          }, description
    }
}
`
