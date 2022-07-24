import { globalCss } from '@nextui-org/react'

export const globalStyles = globalCss({
	body: { margin: 0, padding: 0, boxSizing: 'border-box' },
	html: {
		scrollBehavior: 'smooth'
	}
})
