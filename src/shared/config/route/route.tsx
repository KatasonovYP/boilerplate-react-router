import { RouteProps } from 'react-router-dom';
import Home from 'pages/home/ui/home';
import { About } from 'pages';

export enum AppRoutes {
	HOME = 'main',
	ABOUT = 'about',
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.HOME]: '/',
	[AppRoutes.ABOUT]: `/${AppRoutes.ABOUT}`,
};
export const routeConfig: Record<AppRoutes, RouteProps> = {
	[AppRoutes.HOME]: {
		path: RoutePath[AppRoutes.HOME],
		element: <Home />,
	},
	[AppRoutes.ABOUT]: {
		path: RoutePath[AppRoutes.ABOUT],
		element: <About />,
	},
};
