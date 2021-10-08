import React from 'react';

import { default as Title } from '../shared/title';
import { default as ToolAddEditForm } from '../shared/tool-add-edit-form';

import './component.scss';

const ToolAddComponent = (props) => {
	const { onSave, onCancel, error } = props

	return (
		<div className="ToolAdd">
			<Title className="ToolAdd__Title">
				Add Tool
			</Title>
			<ToolAddEditForm
				initialValues={null}
				onSave={onSave} 
				onCancel={onCancel} />	
			
			{ error 
				? (
					<div>
						{`Error. Code: ${error.statusCode}, Message: ${error.statusText}`}
					</div>
				)
				: null }
		</div>
	)
}

export default ToolAddComponent