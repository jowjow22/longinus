import styled from 'styled-components'

export const Container = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-around;
	padding: 0.5rem 1rem;
	border-bottom: 1px solid ${(props) => props.theme.colors.borderColor.value};
`
export const ActionsContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	width: 20%;

	@media (max-width: ${(props) => props.theme.breakpoints.xs.value}) {
		display: none;
	}

	font-weight: bold;
	& > * {
		justify-self: space-around;
	}
`
