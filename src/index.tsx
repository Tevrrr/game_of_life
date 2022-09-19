import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import FieldProvider from './common/Field/FieldProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<FieldProvider>
			<App />
		</FieldProvider>
	</React.StrictMode>
);
