import React from 'react';

import { default as Title } from '../shared/title';
import { default as ToolAddEditForm } from '../shared/tool-add-edit-form';

import './component.scss';

const ToolEditComponent = (props) => {
	const { loading, onSave, onCancel, error ,initialValues } = props
	const { getToolError, editToolError } = error

	if (loading) {
		return (
			<p> Loading... </p>
		)
	}

	if (getToolError) {
		return (
			<p> {`Error. Code: ${getToolError.statusCode}, Message: ${getToolError.statusText}`} </p>
		)
	}

	if (!initialValues) {
		return (
			<p> Not Found Tool </p>
		)
	}

	return (
		<div className="ToolEdit">
			<Title className="ToolEdit__Title">
				Edit Tool
			</Title>
			<ToolAddEditForm
				initialValues={initialValues}
				onSave={onSave} 
				onCancel={onCancel} />	
			
			{ editToolError 
				? (
					<div>
						{`Error. Code: ${editToolError.statusCode}, Message: ${editToolError.statusText}`}
					</div>
				)
				: null }
		</div>
	)
}

export default ToolEditComponent