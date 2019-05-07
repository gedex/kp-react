import React from 'react'
import classNames from 'classnames'
import {
	Caption,
	DisplayText,
	ProgressBar,
	TextContainer,
} from '@shopify/polaris'

import { formatPercentage } from '../utils'

export default function CellPercentage( props ) {
	const itemClassName = classNames( {
		winner: props.winner,
		numeric: true,
	} )

	const { winner, percentage, caption, progress } = props
	return (
		<div className={ itemClassName }>
			<TextContainer>
				<DisplayText size="small">
					{
						winner ?
							'✓ '
							:
							''
					}
					{ formatPercentage( percentage ) }
				</DisplayText>
				<Caption>{ caption }</Caption>
				{
					progress ?
						(
							<ProgressBar progress={ progress } size="small" />
						)
						:
						null
				}
			</TextContainer>
		</div>
	)
}
