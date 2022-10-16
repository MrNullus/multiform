import { Router } from './router.tsx';

import { FormProvider } from './contexts/FormContext.tsx';

export const App = () => {
  return (
    <FormProvider>
      <Router />
    </FormProvider>
  );
};