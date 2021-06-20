import { useQuery } from '@apollo/client';
import { useState, useEffect } from 'react';
import { GET_PROFILE } from '../query/profile';

export const SingleProfile = ({ id }) => {
    const { data: dataOneProfile, loading: loadingOneProfile } = useQuery(GET_PROFILE, { variables: { id } })

    const [singleProfile, setSingleProfile] = useState(null)

    useEffect(() => {
        if (!loadingOneProfile) {

            setSingleProfile(dataOneProfile.getProfile)
        }

    }, [dataOneProfile])

    return (
        <div>
            {singleProfile ? singleProfile.username : null}

        </div>
    )
}

