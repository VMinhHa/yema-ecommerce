import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import Layout from './components/Layout';

import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './sass/index.scss';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { SnackbarProvider } from 'notistack';

import { store } from './redux/store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
		<SnackbarProvider maxSnack={3} 
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			autoHideDuration={2000}
			style={{ height: '50px', fontSize: '14px', fontWeight: '300'}}  
		>
			<Layout />
		</SnackbarProvider>
	</Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
