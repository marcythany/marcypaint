import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './i18n.ts'; // Importar a configuração de internacionalização

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<React.Suspense fallback='Loading...'>
			<App />
		</React.Suspense>
	</React.StrictMode>
);
