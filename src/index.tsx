import { App } from 'app/app';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers';

import { createRoot } from 'react-dom/client';

const container = document.querySelector('#root');
const root = createRoot(container as HTMLElement);
root.render(
	<BrowserRouter>
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</BrowserRouter>,
);
