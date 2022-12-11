// import React form 'react'; // do I need this?
import App from './App'
import ApolloClient from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
// import { createHttpLink } from 'apollo-link-http'
import { createUploadLink } from 'apollo-upload-client'
import { ApolloProvider } from '@apollo/react-hooks'

// const httpLink = createHttpLink({
//     uri: 'http://localhost:5000'
// })

const httpLink = createUploadLink({
    uri: 'http://localhost:5000'
})

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
})

export default(
    <ApolloProvider client={client}>
        <App/>
    </ApolloProvider>
)