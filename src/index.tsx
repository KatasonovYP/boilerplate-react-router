import { render } from 'react-dom';
import './style.scss';
import style from './index.module.scss';

render(
	<h1>
		Hello World! <span className={style.span}>no</span>
	</h1>,
	document.getElementById('root'),
);
