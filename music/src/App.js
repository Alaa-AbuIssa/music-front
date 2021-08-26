import "./App.css"
import { ApolloClient, InMemoryCache,  ApolloProvider, HttpLink, from, } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import GetArtists from './component/GetArtists';
import Header  from "./component/Header";



const errorLink = onError(({ graphqlErrors }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message }) => {
      return alert(`GraphQl Error ${message}`);
    });
  }
});
const link = from([
  errorLink,
  new HttpLink({ uri: 'http://127.0.0.1:8000/graphql'}),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function App() {
  return (
    <>
    <Header/>
    <ApolloProvider client={client}>
      <GetArtists />
    </ApolloProvider>
    </>
  );
}
export default App;



