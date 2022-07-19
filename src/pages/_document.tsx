import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { CssBaseline } from '@nextui-org/react'

class MyDocument extends Document {
	static async getInitialProps(ctx: any) {
		const initialProps = await Document.getInitialProps(ctx)
		return {
			...initialProps,
			styles: React.Children.toArray([initialProps.styles])
		}
	}

	render() {
		return (
			<Html lang="en">
				<Head>
					{CssBaseline.flush()}
					<link
						rel="preconnect"
						href="https://fonts.googleapis.com"
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Readex+Pro&family=Roboto:wght@400;700;900&display=swap"
						rel="stylesheet"
					></link>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
