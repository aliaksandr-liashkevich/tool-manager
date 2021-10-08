import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import config from './config.json';

// TODO: https://launchpad.graphql.com/0vm581j9x5 
const defaultOptions = {
	watchQuery: {
		fetchPolicy: 'network-only',
		errorPolicy: 'ignore',
	},
	query: {
		fetchPolicy: 'network-only',
		errorPolicy: 'all',
	},
}

const httpLink = new HttpLink({
	uri: config.graphQLServiceUri
})

const cache = new InMemoryCache()

const client = new ApolloClient({
	link: httpLink,
	cache: cache,
	defaultOptions: defaultOptions
});

export default client;