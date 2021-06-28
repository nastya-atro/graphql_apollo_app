import { useQuery } from '@apollo/client';
import { useState, useEffect } from 'react';
import { GET_PROFILE } from '../query/profile';
import MainText from './../stylesComponents/MainText';

export const SingleProfile = ({ id }) => {
    const { data: dataOneProfile, loading: loadingOneProfile } = useQuery(GET_PROFILE, { variables: { id } })

    const [singleProfile, setSingleProfile] = useState(null)

    useEffect(() => {
        if (!loadingOneProfile) {

            setSingleProfile(dataOneProfile.getProfile)
        }

    }, [dataOneProfile])

    return (
        <MainText first>
            {singleProfile ? singleProfile.username : null}

        </MainText>
    )
}

