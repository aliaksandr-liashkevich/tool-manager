import React from 'react';

import { default as ToolItem } from './tool-item';

import './component.scss';

const ToolTableComponent = (props) => {
	const { onShow } = props
	let { tools } = props

	return (
		<div className="ToolTable" >
			<table className="ToolTable__Table">
				<thead className="ToolTable__Table-Head">
					<ToolItem name="Name" type="Type" location="Location" isHead={true} />
				</thead>
				<tbody className="ToolTable__Table-Body">
					{
						tools.map(tool => {
							const { id, name, type, location } = tool

							return (
								<ToolItem key={id} id={id} name={name} 
									type={type} location={location} onClick={onShow(id)} />
							)
						})
					}
				</tbody>
			</table>
		</div>
	)
}

export default ToolTableComponent;