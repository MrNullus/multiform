import * as C from './styles.ts';

type children = { ReactNode };

export const Theme = ({ children }) => {
	return (
		<C.Container>

			<C.Area>

				<C.Header />

				<C.Steps>
					
					<C.Sidebar>
						
					</C.Sidebar>

					<C.Page>
						{children}
					</C.Page>

				</C.Steps>

			</C.Area>

		</C.Contaienr>
	);
}
