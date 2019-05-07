import React from 'react'
import { Caption, Link, Thumbnail } from '@shopify/polaris'

import { partyKeys } from '../utils'
import TpsCount from './tps-count'


const tpsPhotoDetail = ( data ) => {
	const keys = data.type === 1
	? (
		typeof data.jum !== 'undefined'
			? [ 'jum' ]
			: [ 'pas1', 'pas2', 'sah', 'tSah' ]
	)
	: (
		typeof data.pSah !== 'undefined' && data.pTSah !== 'undefined'
			? [ 'pSah', 'pTSah' ]
			: partyKeys.map( ( [ party ] ) => party )
	)

	return (
		<TpsCount
			keys={ keys }
			data={ data }
		/>
	)
}

export default function TpsPhotos( { photos } ) {
	return (
		<ul className="tps-cards">
			{
				photos.length ?
					photos.map( photo => (
						<li key={ photo.url } className="tps-card">
							<Link
								url={ `${ photo.url }=s1280` }
								external
							>
								<Thumbnail
									source={ `${ photo.url }=s120` }
									size="large"
								/>
							</Link>
							{ tpsPhotoDetail( photo ) }
						</li>
					) )
					:
					<Caption>Belum tersedia</Caption>
			}
		</ul>
	)
}
