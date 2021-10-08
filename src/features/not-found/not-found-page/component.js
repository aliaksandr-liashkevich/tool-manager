import React from 'react';

import '../../../../public/images/notfound.gif';
import './component.scss';

const NotFoundPageComponent = () => {
	return (
		<div className="NotFound">
			<div className="NotFound__header">
				<img className="NotFound__header-image" 
					src="images/notfound.gif" alt="Not found" />
				<h1 className="NotFound__title">
					Page Not Found
				</h1>
			</div>
			<p className="NotFound__message">
				The page you are looking for could not be found.
			</p>
		</div>
	);
}

export default NotFoundPageComponent;