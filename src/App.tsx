import { Router } from './router.tsx';

import { FormProvider } from './context/FormContext.tsx';

export const App = () => {
  return (
    <FormProvider>
      <Router />
    </FormProvider>
  );
};