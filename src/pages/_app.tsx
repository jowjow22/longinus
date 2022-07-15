import { NextUIProvider } from '@nextui-org/react'
import type { AppProps } from 'next/app'
import { theme } from '@styles/themes/customTheme'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<NextUIProvider theme={theme.light}>
			<Component {...pageProps} />
		</NextUIProvider>
	)
}

export default MyApp
