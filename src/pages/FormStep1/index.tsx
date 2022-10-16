import * as C from './styles.ts';

import { Theme } from '../../components/Theme/index.tsx';


export const FormStep1 = () => {
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
