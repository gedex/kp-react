import React from 'react'

import TpsCount from './tps-count'

export default function TpsCountList( { dataType, data } ) {
	const tables = 'pilpres' === dataType
		? [ [ 'pas1', 'pas2' ], [ 'sah', 'tSah', 'jum' ] ]
		: [
			[ 'pkb', 'ger', 'pdi', 'gol' ],
			[ 'nas', 'gar', 'ber', 'sej' ],
			[ 'per', 'ppp', 'psi', 'pan' ],
			[ 'han', 'dem', 'pa',  'ps'  ],
			[ 'pda', 'pna', 'pbb', 'pkp' ],
		]

	return (
		<ul className="tps-cards">
			{ tables.map( ( tableKeys, index ) => (
				<li
					key={ `tps-count-summary-${ index }` }
					className="tps-card"
				>
					<TpsCount
						keys={ tableKeys }
						data={ data }
					/>
				</li>
			) ) }
		</ul>
	)
}
