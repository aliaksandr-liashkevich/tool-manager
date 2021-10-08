import React from 'react';

import { default as ToolItemHead } from './tool-item-head';
import { default as ToolItemBody } from './tool-item-body';

const ToolItemComponent = (props) => {
	const { isHead, name, type, location } = props
	if (isHead) {
		return (
			<ToolItemHead name={name} type={type} 
				location={location}>
			</ToolItemHead>
		)
	} else {
		const { onClick } = props
		return (
			<ToolItemBody name={name} type={type} 
				location={location} onClick={onClick}>
			</ToolItemBody>
		)
	}
}

ToolItemComponent.defaultProps = {
	isHead: false
}

export default ToolItemComponent;