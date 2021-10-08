import gql from 'graphql-tag';

export const ADD_TOOL = gql`
	mutation AddTool($name: String!, $type: String!, $location: String!) {
		addTool(name: $name, type: $type, location: $location) {
			id,
			name,
			type,
			location
		}
	}
`;