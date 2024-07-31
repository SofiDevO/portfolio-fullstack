import DashboardPanel from '@src/components/DashBoard/DashboardPanel';
import { PATHS } from '@src/constants/paths';
import LoginForm from '@src/react/components/LoginForm/LoginForm';

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
