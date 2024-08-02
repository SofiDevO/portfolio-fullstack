import { PATHS } from '@src/constants/paths';

export const StaticPaths = [
	{
		params: { path: 'projects' },
		props: {
			route: PATHS.DASHBOARD_PROJECTS,
		},
	},
	{
		params: { path: undefined },
		props: {
			route: PATHS.DASHBOARD_PROJECTS,
		},
	},
];
