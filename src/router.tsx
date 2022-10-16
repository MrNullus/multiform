import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import { FormStep1 } from './pages/FormStep1/index.tsx';
import { FormStep2 } from './pages/FormStep2/index.tsx';
import { FormStep3 } from './pages/FormStep3/index.tsx';


export const Router = () => {
	return (
		<BrowserRouter>

			<Router path="/" exact component={FormStep1} />
			<Router path="/step2"  component={FormStep2} />
			<Router path="/step3"  component={FormStep3} />
			
		</BrowserRouter>
	);
}