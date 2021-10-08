import React from 'react';

const ToolItemBodyComponent = (props) => {
	const { name, type, location, onClick } = props

	return (
		<tr>
			<td onClick={onClick}>{name}</td>
			<td>{type}</td>
			<td>{location}</td>
		</tr>
	)
}

export default ToolItemBodyComponent;