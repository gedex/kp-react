import React from 'react'
import {
	Badge,
	DisplayText,
	Tooltip,
} from '@shopify/polaris'


import { formatNumber } from '../utils'

export default function CellNumber( { number, badge } ) {
	return (
		<div className={ 'numeric' }>
			<DisplayText size="small">
				{ formatNumber( number ) }
			</DisplayText>
			{
				badge && number > 0 ?
					(
						<Tooltip content={ `Urutan #${ badge } dalam perolehan suara` }>
							<Badge status={ badge === 1 ? 'success' : 'info' }>{ badge }</Badge>
						</Tooltip>
					)
					: null
			}
		</div>
	)
}
