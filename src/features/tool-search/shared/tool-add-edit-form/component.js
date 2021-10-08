import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { Type, Location } from '../../shared/models';
import { default as Button } from '../../shared/button';
import { default as RenderField } from './render-field';
import { default as validation } from './validation';

import './component.scss';

const ToolAddEditFormComponent = (props) => {
	const { handleSubmit, onSave, valid, submitting, onCancel } = props

	return (
		<div className="ToolAddEditForm">
			<form onSubmit={handleSubmit(onSave)}>
				<div className="ToolAddEditForm__Form">
					<Field
						name="name"
						component={RenderField}
						type="text"
						label="Name"
						placeholder="Name"
					/>
					<Field 
						name="type" 
						component={RenderField}
						type="selector"
						label="Type"
					>
						<option />
						<option value={Type.Drill}>Drill</option>
						<option value={Type.Cutter}>Cutter</option>
						<option value={Type.Mill}>Mill</option>
					</Field>
					<Field
						name="location" 
						component={RenderField}
						type="selector"
						label="Location"
					>
						<option />
						<option value={Location.BoxA}>Box A</option>
						<option value={Location.BoxB}>Box B</option>
					</Field>
				</div>
				<div className="ToolAddEditForm__Buttons">
					<Button isDisabled={!valid || submitting } 
						classNames={['Button__Success', 'ToolAddEditForm__Save']} >
							Save
					</Button>
					<Button onClick={onCancel} 
						classNames={['Button__Warning', 'ToolAddEditForm__Cancel']}>
							Cancel
					</Button>
				</div>
			</form>
		</div>
	)
}

export default reduxForm({
	form: 'ToolAddEditForm',
	validate: validation
})(ToolAddEditFormComponent)