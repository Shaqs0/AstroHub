import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import { Layout } from './layout/MainPage/Layout.tsx';
import { Error } from './pages/Error/Error.tsx';


const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: []
	},
	{
		path: '*',
		element: <Error />
	}
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
