import gql from 'graphql-tag';

export const GET_TOOL = gql`
	query GetTool($id: Int!) {
		tool(id: $id) {
			id,
			name,
			type,
			location
		}
	}
`;