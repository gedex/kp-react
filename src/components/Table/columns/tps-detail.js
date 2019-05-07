import React from 'react'
import {
	Button,
	ButtonGroup,
	Card,
	Subheading,
} from '@shopify/polaris'

import {
	getReportTpsUrl,
	getModUrl,
} from '../utils'

import TpsCountList from './tps-count-list'
import TpsPhotos from './tps-photos'

export default function TpsDetail( { row } ) {
	const {
		id,
		locationId,
		locationName,
		parentNames,
		photos,
		dataType
	} = row.original

	const parentName = parentNames[ parentNames.length - 1 ] || ''
	const reportUrl = getReportTpsUrl( locationId, id, dataType, parentName, locationName )
	const modUrl = getModUrl( locationId, id )

	return (
		<Card>
			<Card.Section>
				<ButtonGroup segmented>
					<Button
						icon="alert"
						url={ reportUrl }
						external
					>
						{ 'Lapor kesalahan' }
					</Button>
					<Button
						icon="profile"
						url={ modUrl }
						external
					>
						{ 'Moderasi' }
					</Button>
				</ButtonGroup>
			</Card.Section>

			<Card.Section>
				<Subheading>{ `Hasil Perhitungan TPS ${ row.original.name }` }</Subheading>
				<TpsCountList
					dataType={ dataType }
					data={ row.original }
				/>
			</Card.Section>

			<Card.Section>
				<Subheading>{ `Foto TPS ${ row.original.name }` }</Subheading>
				<TpsPhotos photos={ photos[ dataType ] } />
			</Card.Section>
		</Card>
	)
}
