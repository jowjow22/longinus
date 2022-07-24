import React from 'react'
import { Grid, Item } from './styles'

interface GridSectionProps {
	children: React.ReactElement[] | React.ReactElement
	gap?: string
}

const GridSection = ({ children, gap }: GridSectionProps) => {
	return (
		children && (
			<Grid gap={gap}>
				{React.Children.map(children, (child) => (
					<Item>{React.cloneElement(child)}</Item>
				))}
			</Grid>
		)
	)
}

export default GridSection
