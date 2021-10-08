import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { render } from 'react-dom';
import { setConfig } from 'react-hot-loader';
import { ApolloProvider } from 'react-apollo';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader';

import { client, store } from './core';
import { ToolSearch, NotFoundPage } from './features/';

import '../public/images/react.png';
import '../public/styles/base.scss';
import '../public/styles/index.scss';

setConfig({ logLevel: 'debug' })

let App = () => {
	return (
		<ApolloProvider client={client} >
			<Provider key={ module.hot ? Date.now() : store } store={store} >
				<BrowserRouter>
					<Switch>
						<Route exact={true} path="/notfound" component={NotFoundPage} />
						<Route exact={false} path="/tool" component={ToolSearch} />
						<Redirect exact={true} path="/" to="/tool" />
						<Redirect to="/notfound" />
					</Switch>
				</BrowserRouter>
			</Provider>
		</ApolloProvider>
	)
}

App = hot(module)(App)

render (
	<App />,
	document.querySelector('#mount_place')
);