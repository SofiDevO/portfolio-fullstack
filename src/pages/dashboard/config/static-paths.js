import DashboardPanel from '@src/components/DashBoard/DashboardPanel';
import LoginForm from '@src/react/components/LoginForm/LoginForm';

export const StaticPaths = [
	{
		params: { path: 'projects' },
		props: {
			Content: () => 'Projects' /**Component */,
		},
	},
	{
		params: { path: undefined },
		props: {
			Content: () => 'index' /**Component */,
		},
	},
];
