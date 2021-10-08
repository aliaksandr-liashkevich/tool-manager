import gql from 'graphql-tag';

export const UPDATE_TOOL = gql`
	mutation UpdateTool($id: Int!, $name: String!, $type: String!, $location: String!) {
		updateTool(id: $id, name: $name, type: $type, location: $location) {
			id,
			name,
			type,
			location
		}
	}
`;