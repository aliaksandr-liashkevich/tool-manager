import React from 'react';

import { default as RenderInput } from './render-input';
import { default as RenderSelector } from './render-selector';

import './component.scss';

const chooseRender = (props) => {
	const { type, input } = props

	switch (type) {
		case 'selector': {
			const { children } = props

			return (
				<RenderSelector input={input} className="RenderField__Input">
					{children}
				</RenderSelector>
			)
		}
		default: {
			const { label } = props

			return (
				<RenderInput input={input} label={label} 
					type={type} className="RenderField__Input">
				</RenderInput>
			)
		}
	}
}

const RenderFieldComponent = (props) => {
	const { label } = props
	const { touched, error, warning } = props.meta

	return (
		<div className="RenderField">
			<label className="RenderField__Label">
				{label}
			</label>
			<div>
				{ chooseRender(props) }
				{	
					touched &&
						((error && <span className="RenderField__Error">{error}</span>) ||
						(warning && <span>{warning}</span>))
				}
			</div>
		</div>
	)
}

export default RenderFieldComponent;