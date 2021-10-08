import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Mutation } from 'react-apollo';
import PropTypes from 'prop-types';

import { default as ToolAdd } from './component'
import { ADD_TOOL } from './mutation'

class ToolAddContainer extends Component {

	static propTypes = {
		history: PropTypes.object.isRequired,
		match: PropTypes.object.isRequired
	}

	constructor(props) {
		super(props)

		this.onSave = this.onSave.bind(this)
		this.onCancel = this.onCancel.bind(this)
		this.state = {
			error: null
		}
	}

	onSave(addTool) {
		return (values) => {
			const { name, type, location } = values
			const tool = {
				name: name,
				type: type,
				location: location
			}

			addTool({
				variables: tool
			})
				.then(() => {
					const { history } = this.props
					history.push('/')
				})
				.catch((error) => {
					this.setState({
						error: error
					})
				})
		}
	}

	onCancel() {
		const { history } = this.props
		history.push('/tool/');
	}

	render() {
		const { error } = this.state

		return (
			<Mutation mutation={ADD_TOOL}>
				{
					(addTool) => {

						return (
							<ToolAdd onSave={this.onSave(addTool)} 
								onCancel={this.onCancel} error={error} />
						)
					}
				}
			</Mutation>
		)
	}
}

export default withRouter(ToolAddContainer);