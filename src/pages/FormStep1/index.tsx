import { ChangeEvent,  useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useForm, FormActions } from '../../contexts/FormContext.tsx';

import * as C from './styles.ts';
import { Theme } from '../../components/Theme/index.tsx';


export const FormStep1 = ( ) => {

    const navigate = useNavigate();
    // - useForm vai retornar o state (o objeto) e dispatch(as ações que se pode fazer)
    const { state, dispatch } = useForm();

     useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1
        });
    }, []);

    const handleNextStep = ( ) => {
        if (state.setName !== '') {
            navigate('/step2');
        } else {
            alert("Preencha o campo nome");
        }
    };

    const handleNameChange = ( e: ChangeEvent<HTMLInputElement> ) => {
        dispatch({
            type: FormActions.setName,
            payload: e.target.value
        });
    };

	return (
		<Theme>
			<C.Container>
                <p>Passo 1/3</p>
                <h1>Vamos começar com seu nome</h1>
                <p>Preencha o campo abaixo com seu nome completo.</p>

                <hr/>

                <label>
                    Seu nome completo
                    <input
                        type="text"
                        autoFocus
                        value={state.name}
                        onChange={handleNameChange}
                    />
                </label>

                <button onClick={handleNextStep}>Próximo</button>
        	</C.Container>
		</Theme>
	)
};
