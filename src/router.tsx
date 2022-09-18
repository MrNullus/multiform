import { BrowserRouter, Route } from 'react-router-dom';

import { FormStep1 } from './pages/FormStep1';
import { FormStep2 } from './pages/FormStep2';
import { FormStep3 } from './pages/FormStep3';


export const Router = () => {
	return (
		<BrowserRouter>
			<Router path="/" exact component={FormStep1} />
			<Router path="/step2"  component={FormStep2} />
			<Router path="/step3"  component={FormStep3} />
		</BrowserRouter>
	);
}