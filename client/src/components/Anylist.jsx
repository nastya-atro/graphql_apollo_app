import { useQuery } from '@apollo/client';
import { GET_MEDIA } from '../query/anylist';
import { useState, useEffect } from 'react';
import Title from './../stylesComponents/Title';
import MainText from './../stylesComponents/MainText';
import styled from 'styled-components'

const TitleAnyList = styled.div`
background-color: white;
padding: 10px;
text-transform: uppercase;
margin-bottom: 10px
`

export const Anylist = () => {
    const { data, loading, error } = useQuery(GET_MEDIA, { variables: { id: 5 } })
    console.log(data)
    const [media, setMedia] = useState(null)

    useEffect(() => {
        if (!loading) setMedia(data.Media)
    }, [data])

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error: {error}</div>

    return (
        <div>
            <Title first>Media</Title>
            <MainText second>{media && <div>
                <TitleAnyList>{media.title.romaji}-  {media.title.english}- {media.title.native}- {media.title.userPreferred}</TitleAnyList>
                <div>
                    {media.description}
                </div>
            </div>}</MainText>
        </div>
    )
}

