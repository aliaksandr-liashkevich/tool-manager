import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Query, Mutation } from 'react-apollo';
import PropTypes from 'prop-types';

import { default as ToolEdit } from './component';
import { GET_TOOL } from './query';
import { UPDATE_TOOL } from './mutation';

class ToolEditContainer extends Component {

	static propTypes = {
		history: PropTypes.object.isRequired,
		match: PropTypes.object.isRequired
	}

	constructor(props) {
		super(props)

		this.onSave = this.onSave.bind(this)
		this.onCancel = this.onCancel.bind(this)
		this.state = {
			toolId: 0,
			error: null
		}
	}

	componentDidMount() {
		let { toolId } = this.props.match.params
		toolId = +toolId

		this.setState({
			toolId: toolId
		})
	}

	onSave(editTool) {
		return (values) => {
			const { name, type, location } = values
			const { toolId } = this.state
			const tool = {
				id: toolId,
				name: name,
				type: type,
				location: location
			}

			editTool({
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
		const { toolId } = this.state

		return (
			<Query query={GET_TOOL} variables={{ id: toolId }}>
				{
					(response) => {
						const { loading, data } = response
						const { tool } = data
						const error = {
							getToolError: response.error,
							editToolError: this.state.error
						}
						
						return (
							<Mutation mutation={UPDATE_TOOL}>
								{
									(updateTool) => (
										<ToolEdit
											loading={loading}
											error={error}
											initialValues={tool} 
											onSave={this.onSave(updateTool)} 
											onCancel={this.onCancel} />
									)
								}
							</Mutation>
						)
					}
				}
			</Query>
		)
	}
}

export default withRouter(ToolEditContainer);