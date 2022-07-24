import Image from 'next/image'
import readingMemo from '@public/assets/readingMemo.png'
import GridSection from 'components/GridSection'
import { TabbiedBackground, MainText } from './styles'
import { useTheme } from '@nextui-org/react'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

const Index = () => {
	const { isDark } = useTheme()
	const theme = useContext(ThemeContext)
	return (
		<>
			<GridSection gap={theme.space.sm.value}>
				<MainText
					url={isDark ? 'assets/beach.avif' : 'assets/forest.avif'}
				>
					Hi👋🏻! my name is <h1>Jonathan Santos</h1>
					Im a Front-end engineer with a passion for building
					beautiful and functional interfaces.
				</MainText>
				<TabbiedBackground url="assets/tabbied.png">
					<Image src={readingMemo} width={830} height={830} />
				</TabbiedBackground>
			</GridSection>
			<GridSection gap={theme.space.xxs.value}>
				<MainText
					url={isDark ? 'assets/beach.avif' : 'assets/forest.avif'}
					id="about"
				>
					Hi👋🏻! my name is <h1>Jonathan Santos</h1>
					Im a Front-end engineer with a passion for building
					beautiful and functional interfaces.
				</MainText>
			</GridSection>
			<GridSection gap={theme.space.xxs.value}>
				<MainText
					url={isDark ? 'assets/beach.avif' : 'assets/forest.avif'}
				>
					Hi👋🏻! my name is <h1>Jonathan Santos</h1>
					Im a Front-end engineer with a passion for building
					beautiful and functional interfaces.
				</MainText>
				<TabbiedBackground url="assets/tabbied.png">
					<Image src={readingMemo} width={830} height={830} />
				</TabbiedBackground>
			</GridSection>
		</>
	)
}

export default Index
