import { FC } from 'react';
import { Link } from 'react-router-dom';
import './styles/index.scss';
import { classNames, useTheme } from 'shared/lib';
import { AppRouter } from 'app/providers';

export const App: FC = () => {
	const { theme, toggleTheme } = useTheme();
	return (
		<div className={classNames('app', {}, [theme])}>
			<nav>
				<Link to={'/'}>Home</Link>
				<Link to={'/about'}>About</Link>
				<button onClick={toggleTheme}>theme</button>
				<AppRouter />
			</nav>
		</div>
	);
};
