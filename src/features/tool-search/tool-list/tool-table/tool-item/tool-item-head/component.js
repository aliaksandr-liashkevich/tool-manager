import React from 'react';

const ToolItemHeadComponent = (props) => {
	const { name, type, location } = props

	return (
		<tr>
			<th>{name}</th>
			<th>{type}</th>
			<th>{location}</th>
		</tr>
	)
}

export default ToolItemHeadComponent;