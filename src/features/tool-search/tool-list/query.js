import gql from 'graphql-tag';

export const GET_TOOLS_PAGINATION = gql`
	query GetToolsPagination($pageIndex: Int!, $pageSize: Int!) {
		toolsPagination(pageIndex: $pageIndex, pageSize: $pageSize) {
			tools {
				id,
				name,
				type,
				location
			},
			pageIndex,
			pageSize,
			totalCount
		}
	}
`;