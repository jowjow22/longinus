import styled from 'styled-components'

interface GridProps {
	gap?: string
}

export const Grid = styled.section<GridProps>`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
	grid-gap: ${(p) => p.gap || p.theme.space.xxs.value};
	padding: ${(p) => p.gap || p.theme.space.xl.value};
	width: 100%;
	border-bottom: 1px solid ${(p) => p.theme.colors.borderColor.value};
`

export const Item = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
`
