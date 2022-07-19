import { darken, lighten } from 'polished'

export const theme = {
	dark: {
		type: 'dark',
		theme: {
			colors: {
				primary: '#00e0c6',
				primarySolidHover: lighten(0.1, '#00e0c6'),
				primaryShadow: darken(0.1, '#00e0c6'),
				aaaa: 'rgb(0, 224, 198)'
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
	},
	light: {
		type: 'light',
		theme: {
			colors: {
				primary: '#00e0c6',
				primarySolidHover: lighten(0.1, '#00e0c6'),
				primaryShadow: darken(0.1, '#00e0c6'),
				aaaa: 'rgb(100, 0, 198)'
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
	}
}
