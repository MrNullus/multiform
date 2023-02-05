import { ChangeEvent,  useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';


import { useForm, FormActions } from '../../contexts/FormContext.tsx';

import * as C from './styles.ts';
import { Theme } from '../../components/Theme/index.tsx';


export const FormStep3 = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if (state.name === '') {
            navigate('/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 3
            });
        }
    }, []);

    const handleNextStep = () => {
        var validEmail = /\S+@\S+\.\S+/;
        if (state.email !== '' && state.github !== '' && validEmail.test(state.email)) {
	alert("Dados cadastrados com sucesso!");
        } else if (!validEmail.test(state.email)) {
            alert('Email incorreto')
        } else {
            alert('Preencha seu GitHub');
        }
    }

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value
        })
    }

    const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setGithub,
            payload: e.target.value.substring(19)
        })
    }

    return (
        <Theme>
            <C.Container>
                <p>Passo {state.currentStep}/3</p>
                <h2>Legal {state.name.substring(0, state.name.indexOf(' '))}, onde te achamos?</h2>
                <p>Preencha com seus contatos para conseguirmos entrar em contato.</p>

                <hr />

                <label>
                    Qual o seu e-mail?
                    <input
                        type="email"
                        value={state.email}
                        onChange={handleEmailChange}
                    />
                </label>
                <label>
                    Qual o seu GitHub?
                    <input
                        type="url"
                        value={`https://github.com/${state.github}`}
                        onChange={handleGithubChange}
                    />
                </label>

                <Link to="/step2" className="backButton">Voltar</Link>
                <button onClick={handleNextStep}>Finalizar Cadastro</button>
            </C.Container>
        </Theme>
    );
}