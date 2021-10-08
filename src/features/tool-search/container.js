import React, { Component} from 'react';
import { Switch, Route } from 'react-router';
import { default as ToolList } from './tool-list';
import { default as ToolAdd } from './tool-add';
import { default as ToolEdit } from './tool-edit';

class ToolSearchContainer extends Component {
	render() {
		const { url } = this.props.match

		return (
			<Switch>
				<Route exact={true} path={`${url}/`} component={ToolList} />
				<Route exact={true} path={`${url}/new`} component={ToolAdd} />
				<Route exact={true} path={`${url}/:toolId`} component={ToolEdit} />
			</Switch>
		);
	}
}

export default ToolSearchContainer;