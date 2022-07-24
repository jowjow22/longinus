import styled from 'styled-components'

export const Container = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: ${(p) => p.theme.space.xs} ${(p) => p.theme.space.xg};
	border-bottom: 1px solid ${(p) => p.theme.colors.borderColor.value};
`
export const ActionsContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	flex-grow: 2;
	max-width: 40%;

	@media (max-width: ${(p) => p.theme.breakpoints.md.value}) {
		max-width: 60%;
	}

	@media (max-width: ${(p) => p.theme.breakpoints.sm.value}) {
		& > *:not(:last-child) {
			display: none;
		}
		max-width: 10%;
	}

	font-weight: bold;
	& > * {
		justify-self: space-around;
	}
`
