import React from 'react';

import './component.scss';

const TitleComponent = (props) => {
	const { children, className } = props

	return (
		<div className={ ['Title', className].join(' ') }>
			{children}
		</div>
	)
}

export default TitleComponent;