import { useMutation, useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import './App.css';
import { GET_ALL_USERS, GET_ONE_USERS } from './query/user';
import { CREATE_USER } from './mutations/user';

const App = () => {
  const { data, loading, error, refetch } = useQuery(GET_ALL_USERS)
  const { data:oneUser, loading:loadingOneUser} = useQuery(GET_ONE_USERS, {variables:{id:1}})
  //const { data, loading, error, refetch } = useQuery(GET_ALL_USERS, {pollInterval: 500})
  const [newUser] = useMutation(CREATE_USER)


  const [users, setUsers] = useState([])
  const [username, setUserName] = useState('')
  const [age, setAge] = useState(0)

console.log(oneUser)

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

  const getAll=(e)=>{
    e.preventDefault()
    refetch()

  }

  if (loading) {
    return <h3>Loading...</h3>
  }

    return (
      <div>
        <form>
          <input value={username} onChange={(e) => setUserName(e.target.value)} type='text'></input>
          <input value={age} onChange={(e) => setAge(+e.target.value)} type='number'></input>
          <div>
            <button onClick={addUser}>Create</button>
            <button onClick={getAll}>Give</button>
          </div>
        </form>
        <div>
          {users.map((u) => <div key={u.id}>{u.id}{u.username}{u.age}</div>
          )}
        </div>
      </div>
    );
  }

  export default App;
