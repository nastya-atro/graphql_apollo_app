import { useQuery } from '@apollo/client';
import { useState, useEffect } from 'react';
import { GET_ONE_USERS } from '../query/user';

export const SingleUser = ({ id }) => {
    const { data: dataOneUser, loading: loadingOneUser } = useQuery(GET_ONE_USERS, { variables: { id} })

    const [singleUser, setSingleUser] = useState(null)

    useEffect(() => {
        if (!loadingOneUser) {
            setSingleUser(dataOneUser.getUser)
        }
    }, [dataOneUser])


    return (
        <div>
            {singleUser ? singleUser.username : null}
        </div>
    )
}
