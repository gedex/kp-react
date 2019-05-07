import React from 'react'

import { partyKeys } from '../utils'

// TODO: Move this to utils.
const tpsKeyLabels = Object.assign(
	{
		pas1: 'Jokowi-Amin',
		pas2: 'Prabowo-Sandi',
		sah: 'Sah',
		pSah: 'Sah',
		tSah: 'Tidak Sah',
		pTSah: 'Tidak Sah',
		jum: 'Pengguna Hak Pilih',
	},
	...partyKeys.map( ( [ key, label ] ) => (
		{ [ key ]: label }
	) )
)

export default function TpsCountResult( { keys, data } ) {
	const filteredKeys = keys.filter( key => ( typeof data[ key ] ) !== 'undefined' )

	return (
		<table className="tps-detail-table">
			<tbody>
				{ filteredKeys.map( key => (
					<tr key={ key }>
						<td>
							<strong>
								{ tpsKeyLabels[ key ] }
							</strong>
						</td>
						<td className="numeric">
							{ data[ key ] }
						</td>
					</tr>
				) ) }
			</tbody>
		</table>
	)
}
