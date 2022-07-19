import { useTheme as useNextTheme } from 'next-themes'
import { Link, Switch, useTheme } from '@nextui-org/react'
import { RiSunFill, RiMoonClearFill } from 'react-icons/ri'
import { Container, ActionsContainer } from './styles'

const Header = () => {
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
					onChange={() =>
						setTheme(type === 'light' ? 'dark' : 'light')
					}
					iconOff={<RiSunFill />}
					iconOn={<RiMoonClearFill />}
					shadow
				/>
			</ActionsContainer>
		</Container>
	)
}

export default Header
