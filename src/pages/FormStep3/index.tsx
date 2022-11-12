import ChangeEvent from 'react';
import { useNavigate, Link } from 'react-router-dom';


import { useForm, FormActions } from '../../contexts/FormContext.tsx';

import * as C from './styles.ts';
import { Theme } from '../../components/Theme/index.tsx';


export const FormStep3 = ( ) => {

    const navigate = useNavigate();
    // - useForm vai retornar o state (o objeto) e dispath (as ações que se pode fazer)
    const { state, dispath } = useForm();

    useEffect(() => {
        if (state.name !== '') {
            navigate.push('/');
        } else {
            dispath({
                type: FormActions.setCurrentStep,
                payload: 3
            });
        }
    }, [])

    const handleNextStep = ( ) => {
        if (state.email !== '' && state.github !== '') {
            console.log(state);
        } else {
            alert("Preencha os dados.");
        }
    };

    const handleEmailChange = ( e: ChangeEvent<HTMLInputElement> ) => {
        dispath({
            type: FormActions.setEmail,
            payload: e.target.value
        });
    };
    const handleGitHubChange = ( e: ChangeEvent<HTMLInputElement> ) => {
        dispath({
            type: FormActions.setGithub,
            payload: e.target.value
        });
    };


	return (
		<Theme>
			<C.Container>
                <p>Passo 3/3</p>
                <h1>Legal {state.name}, agora onde te achamos?</h1>
                <p>Preencha os campos abaixo com os seus devidos contatos.</p>

                <hr/>

                <label>
                    Qual seu e-mail?
                    <input
                        type="text"
                        autoFocus
                        value={state.email}
                        onChange={handleEmailChange}
                    />
                </label>

                <label>
                    Qual seu GitHub?
                    <input
                        type="url"
                        autoFocus
                        value={state.github}
                        onChange={handleGitHubChange}
                    />
                </label>

                <Link to="/step2" className="backButton">Voltar</Link>
                <button onClick={handleNextStep}>Finalizar</button>
        	</C.Container>
		</Theme>
	)
};
