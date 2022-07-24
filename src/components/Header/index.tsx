import { useTheme as useNextTheme } from 'next-themes'
import { Link, Switch, useTheme } from '@nextui-org/react'
import { RiSunFill, RiMoonClearFill, RiChatQuoteFill } from 'react-icons/ri'
import { Container, ActionsContainer } from './styles'

interface HeaderProps {
	styledTheme: () => void
}

const Header = ({ styledTheme }: HeaderProps) => {
	const { setTheme } = useNextTheme()
	const { isDark, type, theme } = useTheme()
	return (
		<Container>
			<h1>logo</h1>
			<ActionsContainer>
				<Link href="/">Home</Link>
				<Link href="#about" underline>
					About
				</Link>
				<Link>Projects</Link>
				<Switch
					checked={!isDark}
					size="xl"
					onChange={() => {
						styledTheme()
						setTheme(type === 'light' ? 'dark' : 'light')
					}}
					className="theme-switch"
					iconOn={<RiSunFill color={theme?.colors.primary.value} />}
					iconOff={<RiMoonClearFill />}
					shadow
				/>
			</ActionsContainer>
		</Container>
	)
}

export default Header
