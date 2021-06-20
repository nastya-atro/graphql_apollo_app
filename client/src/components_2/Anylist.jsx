
import { useQuery } from '@apollo/client';
import { GET_MEDIA } from './../query/anylist';
import { useState, useEffect } from 'react';

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
            <h2>Media</h2>
            <div>{media && <div>{media.title.romaji}-  {media.title.english}- {media.title.native}- {media.title.userPreferred}
                <div>
                    {media.description}
                </div>
            </div>}</div>
        </div>
    )
}

