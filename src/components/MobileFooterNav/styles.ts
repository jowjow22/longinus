import styled from 'styled-components'

export const Container = styled.nav`
	align-items: center;
	display: flex;
	bottom: 0;
	justify-content: space-around;
	padding: ${(p) => p.theme.space.xxs} ${(p) => p.theme.space.xs};
	background-color: ${(p) => p.theme.colors.background};
	border-top: 1px solid ${(p) => p.theme.colors.borderColor.value};
	position: fixed;
	width: 100%;
	@media (min-width: ${(p) => p.theme.breakpoints.sm.value}) {
		display: none;
	}
`
