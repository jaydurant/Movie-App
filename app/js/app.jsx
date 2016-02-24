import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import AppContainer from '.components/app-content';


renderPage();

function renderPage(){
	const appRootElement = document.querySelector('#book-app');
	render(<AppContent /> , appRootElement);
}