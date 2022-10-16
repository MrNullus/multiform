// # Criando um contexto para formulario básico #

// - Importanto modulos necessarios
import { createContext, useContext, useReducer } from 'react'

// - Types,
type State = {
	currentStep : number,
	name        : string,
	level 			: 0 | 1,
	email       : string, 
	gitHub      : string
}

type Action = { 
	type    : FormActions,
	payload : any
};

type ContexType = {
	state 	: State,
	dispath : ( action: Action ) => void
};

type FormProviderProps = { 
	children : ReactNode 
};


// - Initial Data
const initialData: State = {
	currentStep : 0,
	name        : '',
	level       : 0,
	email 			: '',
	gitHub 			: ''
};


// - Criar o Context - contexto (seria basicamente a caixinha que vai guardar todos os valores para um determinado cenario)
const FormContext = createContext<ContextType | undefined>(undefined);


// - Criar um Reducer, será aquele responsavel por fazer ações especificas dentro da aplicação

export enum FormActions {
	setCurrentStep,
	setName,
	setLevel,
	setEmail,
	setGitHub
};

const formReducer = ( state: State, action: Action ) => {

	switch (state, action){
		case FormActions.setCurrentStep:
			return {...state, setCurrentStep: action.payload};

		case FormActions.setName:
			return {...state, name: action.ayload};

		case FormActions.setlevel: 
			return {...state, level: action.payload};

		case FormActions.setEmail:
			return {...state, email: action.payload};

		case FormActions.setGitHub:
			return {...state, gitHub: action.payload};

		default:
			return state;
	}

}


// - Criar um Provider - é o ambiente que vai dar acesso aos dados de um contexto (context)

export const FormProvider = ({ children : FormProviderProps }) => {

	// usando o Reducer criado | deve ser passado o reducer e o valor initial de quando ele rodar pela primeira vez
	// dispath é a função que se usa para executar uma outra função
	const [ state, dispath ] = useReducer( formReducer, initialData );
	const value = { value, dispath };

	return (
		// o provider recebe a children (filhos) e o value (um objeto)
		<FormContext.Provider value={value}>
			{children}
		</FormContext.Provider>
	);
}


// - Criar um Hook - sua função será auxiliar para a reutilização de codigo e para também tornar o algoritmo mais funcional
export const useForm = () => {

	const context = useContext( formmContext );

	if (context == undefined) {

		throw new Error( 'useForm deve ser usado dentro do FormProvider' );

	}

	return context;

}

