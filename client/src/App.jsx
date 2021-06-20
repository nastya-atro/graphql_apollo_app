import './App.css';
import Profiles from './components/Profiles';
import Users from './components/Users';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import { Anylist } from './components_2/Anylist';

const client1 = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache()
})

const client2 = new ApolloClient({
  uri: 'https://graphql.anilist.co',
  cache: new InMemoryCache()
})

const AppMain = () => {

  return (<>
    <ApolloProvider client={client1}>
      <Users />
      <Profiles />
    </ApolloProvider>

    <ApolloProvider client={client2}>
      <Anylist />
    </ApolloProvider>
  </>

  );
}



export default AppMain
