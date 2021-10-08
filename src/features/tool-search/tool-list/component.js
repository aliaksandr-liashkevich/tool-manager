import React from 'react';

import { default as Title } from '../shared/title';
import { default as Button } from '../shared/button';
import { default as ToolTable } from './tool-table';
import { default as ToolPageNavigation } from './tool-page-navigation';

import './component.scss';

const ToolListComponent = (props) => {
	const { loading, error, data } = props

	if (loading) {
		return (
			<p> Loading... </p>
		)
	}

	if (error) {
		return (
			<p>  Error: {error.message} </p>
		)
	}

	const { tools, totalCount } = data.toolsPagination
	const { pageIndex, pageSize, displayToolPage, 
		onAdd, onPreviousClick, 
		onNextClick, onShow } = props

	const totalNumberOfPage = Math.floor(totalCount / pageSize)

	return (
		<div className="ToolList">
			<Title>
					Tool Manager
			</Title>
			<div className="ToolList__Button-Wrapper">
				<Button onClick={onAdd}
					classNames={ ['Button__Primary', 'ToolList__Add'] }>
						+ Add
				</Button>
			</div>

			<ToolTable tools={tools} onShow={onShow} displayToolPage={displayToolPage} />

			<ToolPageNavigation onPreviousClick={pageIndex > 0 ? onPreviousClick : null} 
				onNextClick={totalNumberOfPage > pageIndex ? onNextClick : null} pageIndex={pageIndex} />
		</div>
	)
}

export default ToolListComponent;