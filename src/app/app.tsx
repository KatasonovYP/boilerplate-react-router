import { FC, Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { About, Home } from 'pages';
import './styles/index.scss';
import { classNames, useTheme } from 'shared/lib';

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
