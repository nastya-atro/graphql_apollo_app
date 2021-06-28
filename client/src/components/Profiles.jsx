
import { GET_ALL_PROFILE, GET_PROFILE } from './../query/profile';
import { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { CREATE_PROFILE } from '../mutations/profile';
import { SingleProfile } from './SingleProfile';
import Title from './../stylesComponents/Title';
import Input from './../stylesComponents/Input';
import Button from './../stylesComponents/Button';
import MainText from './../stylesComponents/MainText';


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
            <Title first>Profiles</Title>
            <form>
                <Input placeholder='name' value={username} onChange={(e) => { setName(e.target.value) }}></Input>
                <Input placeholder='tel' value={tel} onChange={(e) => { setTel(e.target.value) }}></Input>
                <Input placeholder='email' value={email} onChange={(e) => { setEmail(e.target.value) }}></Input>

                <Button second onClick={createNewProfile} >Create Profile</Button>
                <Button first onClick={getProfiles} >Give profiles</Button>
            </form>

            <div>{profile.map((p) => <MainText first key={p.id} onClick={() => { getSingleProfile(p.id) }}>{p.username}-{p.contacts.map((c, index) => <span key={index}>
                {c.tel}-{c.email}</span>)}</MainText>)}</div>

            <div>
                <Title second>Single Profile</Title>
                <SingleProfile id={id} />
            </div>

        </div >
    )
}



export default Profiles