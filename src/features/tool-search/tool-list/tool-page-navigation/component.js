import React from 'react';

import { default as PageItem } from './page-item';

import './component.scss';

const ToolPageNavigationComponent = (props) => {
	const { pageIndex, onPreviousClick, onNextClick } = props

	return (
		<ul className="ToolPageNavigation">
			<PageItem onClick={onPreviousClick} >
					Previous
			</PageItem>
			<PageItem isCurrentPage={true}>
				{pageIndex}
			</PageItem>
			<PageItem onClick={onNextClick} >
					Next
			</PageItem>
		</ul>
	)
}

export default ToolPageNavigationComponent;