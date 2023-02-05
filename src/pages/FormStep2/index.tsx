import { ChangeEvent,  useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { useForm, FormActions } from '../../contexts/FormContext.tsx';

import * as C from './styles.ts';

import { Theme } from '../../components/Theme/index.tsx';
import { SelectOption } from '../../components/SelectOption/index.tsx';


export const FormStep2 = ( ) => {

    const navigate = useNavigate();
    // - useForm vai retornar o state (o objeto) e dispatch (as ações que se pode fazer)
    const { state, dispatch} = useForm();
    
    useEffect(() => {
        if (state.name === '') {
            navigate('/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 2
            });
        }
    }, [])

    const handleNextStep = ( ) => {
        if (state.setName !== '') {
            navigate('/step3');
        } else {
            alert("Preencha o campo nome");
        }
    };

    const setLevel = (level: number) => {
        dispatch({
            type: FormActions.setLevel,
            payload: level
        });
    };

	return (
		<Theme>
			<C.Container>
                <p>Passo 2/3</p>
                <h1>{state.name}, o que melhor se adequa a você?</h1>
                <p>Escolha a opção que melhor condiz com seu estado profissional atualmente.</p>

                <hr/>

                <SelectOption
                    title="Sou iniciante"
                    description="Comecei a estudar programação a menos de 2 anos"
                    icon="🥳"
                    selected={state.level === 0}
                    onClick={() => setLevel(1)}
                />

                <SelectOption
                    title="Sou programador"
                    description="Já estudo programação a mais de 2 anos"
                    icon="😎"
                    selected={state.level === 1}
                    onClick={() => setLevel(1)}
                />

                <Link to="/" className="backButton">Voltar</Link>
                <button onClick={handleNextStep}>Próximo</button>
        	</C.Container>
		</Theme>
	)
};
