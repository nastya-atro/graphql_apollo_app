import { GET_ALL_USERS} from './../query/user';
import { CREATE_USER } from './../mutations/user';
import { useQuery, useMutation } from '@apollo/client';
import { useState, useEffect } from 'react';
import {SingleUser} from './SingleUser'


const Users = () => {

    const { data, loading, error, refetch } = useQuery(GET_ALL_USERS)
    //const { data, loading, error, refetch } = useQuery(GET_ALL_USERS, {pollInterval: 500})

    const [newUser] = useMutation(CREATE_USER)

    const [users, setUsers] = useState([])
    const [username, setUserName] = useState('')
    const [age, setAge] = useState(0)
    const [idUser, setIdUser] = useState(1)

    useEffect(() => {
        if (!loading) {
            setUsers(data.getAllUsers)
        }

    }, [data])


    const addUser = (e) => {
        e.preventDefault()
        newUser({
            variables: {
                input: {
                    username, age
                }
            }
        }).then(({ data }) => {
            console.log(data)
            setUserName('')
            setAge(0)

        })
    }

    const getAll = (e) => {
        e.preventDefault()
        refetch()

    }

    const getSingleUser=(id)=>{
        setIdUser(id)
    }


    if (loading) return <h3>Loading...</h3>
    

    if (error) return <h3>`Error! ${error}`</h3>

    return (
        <div>
            <h2>Users:</h2>
            <form>
                <input placeholder='name' value={username} onChange={(e) => setUserName(e.target.value)} type='text'></input>
                <input placeholder='age' value={age} onChange={(e) => setAge(+e.target.value)} type='number'></input>
                <div>
                    <button onClick={addUser}>Create</button>
                    <button onClick={getAll}>Give</button>
                </div>
            </form>
            <div>
                {users.map((u) => <div key={u.id} onClick={()=>{getSingleUser(u.id)}}>{u.id}-{u.username}-{u.age}</div>
                )}
            </div>

            <div>
                <h2>Single user:</h2>
                <SingleUser id={idUser}/>
            </div>


        </div>
    )
}


export default Users