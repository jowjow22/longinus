import styled from 'styled-components'

export const TabbiedBackground = styled.div<{ url: string }>`
	background-image: url(${(p) => p.url});
	background-size: contain;
`

export const MainText = styled.span<{ url: string }>`
	font-size: 2rem;
	padding: 0 calc(2 * ${(p) => p.theme.space.xg});
	h1 {
		background-image: url(${(p) => p.url});
		background-clip: text;
		-webkit-background-clip: text;
		background-size: fit;
		font-size: 8rem;
		line-height: 1;
		color: transparent;
		font-weight: bold;
	}
	@media (max-width: ${(p) => p.theme.breakpoints.md.value}) {
		font-size: 1.5rem;
		padding: 0 ${(p) => p.theme.space.sm};
		h1 {
			font-size: 4rem;
		}
	}
`
