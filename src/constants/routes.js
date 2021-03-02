import asyncComponent from './modules/AsyncComponents';

const routes = {
	REGISTER: {
		path: '/',
		component: asyncComponent(() => import('../components/views/trackingMap')),
	},
	// ERROR_404: {
	// 	path: '/404',
	// 	component: asyncComponent(() =>
	// 		import('../components/views/Errors/Error404'),
	// 	),
	// },
};
export default routes;
