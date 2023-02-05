import { BrowserRouter, Routes, Route } from "react-router-dom";

import { FormStep1 } from './pages/FormStep1/index.tsx';
import { FormStep2 } from './pages/FormStep2/index.tsx';
import { FormStep3 } from './pages/FormStep3/index.tsx';


export const Router = () => {	
	return (
	     <BrowserRouter>
            <Routes>
                <Route path="/" element={<FormStep1 />} />
                <Route path="/step2" element={<FormStep2 />} />
                <Route path="/step3" element={<FormStep3 />} />
            </Routes>
        </BrowserRouter>
	);
}