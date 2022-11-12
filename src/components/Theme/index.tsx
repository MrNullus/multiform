import { ReactNode } from 'react';

import { useForm } from '../../contexts/FormContext';

import * as C from './styles.ts';

import { SidebarItem } from '../SidebarItem';
import { Header } from '../Header/index.tsx';

type Props = { 
	children: ReactNode 
};


export const Theme = ({ children }: Props) => {

	const [ state ] = useForm();

	return (	
		<C.Container>

			<C.Area>		
				<Header />

				<C.Steps>
					
					<C.Sidebar>
						<C.SidebarItem  
							title="Pessoal"
							description="Se identifique"
							icon="profile"
							path="/"
							active={state.currentStep === 1}
						/>						

						<C.SidebarItem  
							title="Profissional"
							description="Seu nível"
							icon="book"
							path="/step2"
							active={state.currentStep === 2}
						/>

						<C.SidebarItem  
							title="Contatos"
							description="Como te achar"
							icon="mail"
							path="/step3"
							active={state.currentStep === 3}
						/>
					</C.Sidebar>

					<C.Page>
						{children}
					</C.Page>

				</C.Steps>
			</C.Area>

		</C.Container>
	);
};
