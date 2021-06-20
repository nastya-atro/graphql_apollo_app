
import { GET_ALL_PROFILE, GET_PROFILE } from './../query/profile';
import { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { CREATE_PROFILE } from '../mutations/profile';
import { SingleProfile } from './SingleProfile';


const Profiles = () => {
    const { data: dataProfile, loading: loadingProfile, refetch: refetchProfile } = useQuery(GET_ALL_PROFILE)

    const [newProfile] = useMutation(CREATE_PROFILE)

    const [profile, setProfiles] = useState([])
    const [username, setName] = useState('')
    const [tel, setTel] = useState('')
    const [email, setEmail] = useState('')
    const [id, setId] = useState(1)


    useEffect(() => {
        if (!loadingProfile) {

            setProfiles(dataProfile.getAllProfile)
        }

    }, [dataProfile])

    const getProfiles = () => {
        refetchProfile()
    }

    const createNewProfile = (e) => {
        e.preventDefault()
        newProfile({
            variables: {
                input: {
                    username, contacts: { tel, email }
                }
            }
        }).then(({ data }) => {
            console.log(data)
            setName('')
            setTel('')
            setEmail('')
        })
    }

    const getSingleProfile = (id) => {
        setId(id)
    }

    if (loadingProfile) {
        return <h3>Loading...</h3>
    }


    return (
        <div>
            <h2>Profiles</h2>
            <form>
                <input placeholder='name' value={username} onChange={(e) => { setName(e.target.value) }}></input>
                <input placeholder='tel' value={tel} onChange={(e) => { setTel(e.target.value) }}></input>
                <input placeholder='email' value={email} onChange={(e) => { setEmail(e.target.value) }}></input>

                <button onClick={createNewProfile} >Create Profile</button>
                <button onClick={getProfiles} >Give profiles</button>
            </form>

            <div>{profile.map((p) => <div key={p.id} onClick={() => { getSingleProfile(p.id) }}>{p.username}-{p.contacts.map((c, index) => <span key={index}>
                {c.tel}-{c.email}</span>)}</div>)}</div>

            <div>
                <h2>Single Profile</h2>
                <SingleProfile id={id} />
            </div>

        </div >
    )
}



export default Profiles