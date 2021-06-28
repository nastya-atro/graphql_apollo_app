import './App.css';
import Profiles from './components/Profiles';
import Users from './components/Users';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import { Anylist } from './components/Anylist';
import styled from 'styled-components'

const AppWrapper = styled.div`
width: 100%;
min-height: 100vh;
text-align: center;
padding: 40px;

@media ${props =>props.theme.media.phone}{
  background-color: ${props =>props.theme.color.first.light};

};

@media ${props =>props.theme.media.tablet}{
  background-color: ${props =>props.theme.color.second.light};

};

@media ${props =>props.theme.media.computer}{
  background-color:  ${props =>props.theme.color.first.light};

};
`

const client1 = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache()
})

const client2 = new ApolloClient({
  uri: 'https://graphql.anilist.co',
  cache: new InMemoryCache()
})

const AppMain = () => {

  return (<AppWrapper>
    <ApolloProvider client={client1}>
      <Users />
      <Profiles />
    </ApolloProvider>

    <ApolloProvider client={client2}>
      <Anylist />
    </ApolloProvider>
  </AppWrapper>

  );
}



export default AppMain
