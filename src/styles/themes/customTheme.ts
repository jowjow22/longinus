import { createTheme } from '@nextui-org/react'
import { darken, lighten } from 'polished'

export const theme = {
	dark: createTheme({
		type: 'dark',
		theme: {
			colors: {
				primary: '#00e0c6',
				primarySolidHover: lighten(0.1, '#00e0c6'),
				primaryShadow: darken(0.1, '#00e0c6'),
				borderColor: '#333',
				link: '#00e0c6'
			},
			space: {},
			fonts: {
				sans: 'Roboto'
			},
			breakpoints: {
				xs: '650px',
				sm: '960px',
				md: '1280px',
				lg: '1400px',
				xl: '1920px'
			}
		}
	}),
	light: createTheme({
		type: 'light',
		theme: {
			colors: {
				primary: '#00e0c6',
				primarySolidHover: lighten(0.1, '#00e0c6'),
				primaryShadow: darken(0.1, '#00e0c6'),
				borderColor: '#ddd',
				link: '#00e0c6'
			},
			space: {},
			fonts: {
				sans: 'Roboto'
			},
			breakpoints: {
				xs: '650px',
				sm: '960px',
				md: '1280px',
				lg: '1400px',
				xl: '1920px'
			}
		}
	})
}
