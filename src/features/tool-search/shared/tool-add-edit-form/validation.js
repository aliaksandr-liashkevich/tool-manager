const toolAddEditFormValidation = (values) => {
	const errors = {}

	if (!values.name) { 
		errors.name = 'Required'
	} else if (values.name.length < 5) {
		errors.name = 'Must be 5 characters or more'
	} else if (values.name.length > 150) {
		errors.name = 'Must be 150 characters or less'
	}

	if (!values.type) {
		errors.type = 'Required'
	}

	if (!values.location) {
		errors.location = 'Required'
	}

	return errors
}

export default toolAddEditFormValidation