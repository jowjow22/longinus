import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider, useTheme } from 'next-themes'
import type { AppProps } from 'next/app'
import { theme } from '@styles/themes/customTheme'
import Header from 'components/Header'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { createTheme } from '@nextui-org/react'
import { useEffect, useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
	const nextUIThemeDark = createTheme(theme.dark)
	const nextUIThemeLight = createTheme(theme.light)

	const [currentTheme, setCurrentTheme] = useState(nextUIThemeDark)

	useEffect(() => {
		localStorage.getItem('theme') === 'dark'
			? setCurrentTheme(nextUIThemeDark)
			: setCurrentTheme(nextUIThemeLight)
	}, [currentTheme])

	return (
		<ThemeProvider
			defaultTheme={nextUIThemeDark}
			attribute="class"
			value={{
				light: nextUIThemeLight,
				dark: nextUIThemeDark
			}}
		>
			<NextUIProvider>
				<StyledThemeProvider theme={currentTheme}>
					<Header />
					<Component {...pageProps} />
				</StyledThemeProvider>
			</NextUIProvider>
		</ThemeProvider>
	)
}

export default MyApp
