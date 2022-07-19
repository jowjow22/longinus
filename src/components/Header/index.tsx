import { useTheme as useNextTheme } from 'next-themes'
import { Link, Switch, useTheme } from '@nextui-org/react'
import { RiSunFill, RiMoonClearFill } from 'react-icons/ri'
import { Container, ActionsContainer } from './styles'

interface HeaderProps {
	styledTheme: () => void
}

const Header = ({ styledTheme }: HeaderProps) => {
	const { setTheme } = useNextTheme()
	const { isDark, type } = useTheme()
	return (
		<Container>
			<h1>Header</h1>
			<ActionsContainer>
				<Link href="/">Home</Link>
				<Link>About</Link>
				<Link>Projects</Link>
				<Switch
					checked={isDark}
					size="xl"
					onChange={() => {
						styledTheme()
						setTheme(type === 'light' ? 'dark' : 'light')
					}}
					iconOff={<RiSunFill />}
					iconOn={<RiMoonClearFill />}
					shadow
				/>
			</ActionsContainer>
		</Container>
	)
}

export default Header
