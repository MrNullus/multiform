import * as C from './styles.ts';

import React from 'react'

type Props = {
	title: string;
	description: string;
	icon: string;
	selected: boolean;
	onClick: () => void;
}

export const SelectOption = ({ title, description, icon, boolean, onClick }: Props) => {
	return (
		<Container 
			onClick={onClick}
			selected={selected}
		>
			<C.Icon>{icon}</C.Icon>

			<C.Info>
				<C.Title>
					{title}
				</C.Title>

				<C.Description>
					{description}
				</C.Description>
			</C.Info>
		</Container>
	);
};
