import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import { theme } from '@styles/themes/customTheme'
import Header from 'components/Header'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { useEffect, useState } from 'react'
import MobileFooterNav from 'components/MobileFooterNav'
import { globalStyles } from '@styles/global'

function MyApp({ Component, pageProps }: AppProps) {
	const [currentTheme, setCurrentTheme] = useState(true)

	useEffect(() => {
		setCurrentTheme(localStorage.getItem('theme') === 'dark')
	}, [])
	globalStyles()
	return (
		<ThemeProvider
			defaultTheme={theme.dark}
			attribute="class"
			value={{
				light: theme.light.className,
				dark: theme.dark.className
			}}
		>
			<NextUIProvider>
				<StyledThemeProvider
					theme={currentTheme ? theme.dark : theme.light}
				>
					<Header
						styledTheme={() => {
							setCurrentTheme(!currentTheme)
						}}
					/>
					<Component {...pageProps} />
					<MobileFooterNav />
				</StyledThemeProvider>
			</NextUIProvider>
		</ThemeProvider>
	)
}

export default MyApp
