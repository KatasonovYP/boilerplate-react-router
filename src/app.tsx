import { FC, Suspense, useContext } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { Home } from './pages/home';
import { About } from './pages/about';
import './styles/index.scss';
import {
	LOCAL_STORAGE_THEME_KEY,
	Theme,
	ThemeContext,
} from './theme/theme-context';
import { useTheme } from './theme/use-theme';
import { classNames } from './lib/class-names';

export const App: FC = () => {
	const { theme, toggleTheme } = useTheme();
	return (
		<div className={classNames('app', {}, [theme])}>
			<nav>
				<Link to={'/'}>Home</Link>
				<Link to={'/about'}>About</Link>
				<button onClick={toggleTheme}>theme</button>
			</nav>
			<Suspense fallback={<h1>Loading</h1>}>
				<Routes>
					<Route
						path='/'
						element={<Home />}
					/>
					<Route
						path='/about'
						element={<About />}
					/>
				</Routes>
			</Suspense>
		</div>
	);
};
