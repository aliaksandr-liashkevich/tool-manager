import React from 'react';

import './component.scss';

const PageItemComponent = (props) => {
	const { children, isCurrentPage, onClick } = props
	const itemClassName = !onClick && !isCurrentPage ? 'PageItem__Disabled' : ''
	const linkClassName = isCurrentPage ? 'PageItem__Link-Current' : ''

	return (
		<li className={ ['PageItem', itemClassName].join(' ') }>
			<a className={ ['PageItem__Link', linkClassName].join(' ') } 
				onClick={onClick} href="#" >
				{children}
			</a>
		</li>
	)
}

PageItemComponent.defaultProps = {
	isCurrentPage: false,
	isDisabled: false
}

export default PageItemComponent;