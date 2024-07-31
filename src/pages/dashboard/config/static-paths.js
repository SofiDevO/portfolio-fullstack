import { PATHS } from '@src/constants/paths';

export const StaticPaths = [
	{
		params: { path: 'projects' },
		props: {
			Content: () => 'Projects' /**Component */,
			route: PATHS.DASHBOARD_PROJECTS,
		},
	},
	{
		params: { path: undefined },
		props: {
			Content: () => 'index' /**Component */,
			route: PATHS.DASHBOARD,
		},
	},
];
