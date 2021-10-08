import React from 'react';

import './component.scss';

const ButtonComponent = (props) => {
	const { children, onClick, isDisabled, classNames } = props

	return (
		<button className={ ['Button', ...classNames].join(' ') } onClick={onClick} disabled={isDisabled} >
			{children}
		</button>
	);
}

ButtonComponent.defaultProps = {
	isDisabled: false
}

export default ButtonComponent;