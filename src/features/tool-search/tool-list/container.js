import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Query } from 'react-apollo'
import PropTypes from 'prop-types'

import ToolListComponent from './component'
import { GET_TOOLS_PAGINATION } from './query'

const pageSize = 5

class ToolListContainer extends Component {

	static propTypes = {
		history: PropTypes.object.isRequired
	}

	constructor(props) {
		super(props)

		this.onAdd = this.onAdd.bind(this)
		this.onPreviousClick = this.onPreviousClick.bind(this)
		this.onNextClick = this.onNextClick.bind(this)
		this.onShow = this.onShow.bind(this)
		this.state = {
			pageIndex: 0
		}
	}

	onAdd() {
		const { history } = this.props
		history.push('/tool/new')
	}

	onPreviousClick() {
		this._changePage(-1)
	}

	onNextClick() {
		this._changePage(1)
	}

	onShow(id) {
		return () => {
			const { history } = this.props
			history.push(`/tool/${id}`)
		}
	}

	_changePage(pageShift) {
		let { pageIndex } = this.state
		pageIndex = pageIndex + pageShift

		this.setState({
			pageIndex: pageIndex
		})
	}

	render() {
		const { pageIndex } = this.state

		return (
			<Query query={GET_TOOLS_PAGINATION} variables={{ pageIndex: pageIndex, pageSize: pageSize }} >
				{
					(response) => {
						const { loading, error, data } = response

						return (
							
							<ToolListComponent
								loading={loading}
								error={error}
								data={data}
								pageIndex={pageIndex}
								pageSize={pageSize}
								onAdd={this.onAdd} 
								onPreviousClick={this.onPreviousClick} 
								onNextClick={this.onNextClick} 
								onShow={this.onShow} />
						)
					}
				}
			</Query>
		)
	}
}

export default withRouter(ToolListContainer);