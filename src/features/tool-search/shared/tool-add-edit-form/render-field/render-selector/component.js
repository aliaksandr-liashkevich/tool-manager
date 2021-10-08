import React from 'react';

const RenderSelectorComponent = (props) => {
	const { input, children, className } = props

	return (
		<select {...input} className={className} >
			{children}
		</select>
	)
}

export default RenderSelectorComponent;