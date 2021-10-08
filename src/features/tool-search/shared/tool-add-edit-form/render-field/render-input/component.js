import React from 'react';

const RenderInputComponent = (props) => {
	const { input, label, type, className } = props

	return (
		<input {...input} placeholder={label}
			type={type} className={className} />
	)
}

export default RenderInputComponent;