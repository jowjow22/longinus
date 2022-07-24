import { createTheme } from '@nextui-org/react'
import { darken, lighten } from 'polished'

export const theme = {
	dark: createTheme({
		type: 'dark',
		theme: {
			colors: {
				background: '#121212',
				primary: '#00e0c6',
				primarySolidHover: lighten(0.1, '#00e0c6'),
				primaryShadow: darken(0.1, '#00e0c6'),
				borderColor: '#333',
				link: '#00e0c6',
				text: '#eee'
			},
			space: {
				xxs: '8px',
				xs: '16px',
				sm: '24px',
				md: '32px',
				lg: '40px',
				xl: '48px',
				xxl: '56px',
				xg: '64px'
			},
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
				background: '#fff',
				primary: '#00e0c6',
				primarySolidHover: lighten(0.1, '#00e0c6'),
				primaryShadow: darken(0.1, '#00e0c6'),
				borderColor: '#ddd',
				link: '#00e0c6',
				text: '#333'
			},
			space: {
				xxs: '8px',
				xs: '16px',
				sm: '24px',
				md: '32px',
				lg: '40px',
				xl: '48px',
				xxl: '56px',
				xg: '64px'
			},
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
