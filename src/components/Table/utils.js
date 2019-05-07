// Order doesn't matter.
const rowKeys = [
	'ber',
	'cakupan',
	'dem',
	'error',
	'gar',
	'ger',
	'gol',
	'han',
	'janggal',
	'nas',
	'pJum',
	'pSah',
	'pTSah',
	'pa',
	'pan',
	'pas1',
	'pas2',
	'pbb',
	'pda',
	'pdi',
	'pending',
	'per',
	'pkb',
	'pkp',
	'pna',
	'ppp',
	'ps',
	'psi',
	'sah',
	'sej',
	'tSah',
]

// Don't alter the order.
const candidateKeys = [
	[ 'pas1', '01' ],
	[ 'pas2', '02' ],
]

// Don't alter the order.
const partyKeys = [
	[ 'pkb', 'PKB' ],
	[ 'ger', 'Gerindra' ],
	[ 'pdi', 'PDI' ],
	[ 'gol', 'Golkar' ],
	[ 'nas', 'Nasdem' ],
	[ 'gar', 'Garuda' ],
	[ 'ber', 'Berkarya' ],
	[ 'sej', 'PKS' ],
	[ 'per', 'Perindo' ],
	[ 'ppp', 'PPP' ],
	[ 'psi', 'PSI' ],
	[ 'pan', 'PAN' ],
	[ 'han', 'Hanura' ],
	[ 'dem', 'Demokrat' ],
	[ 'pa', 'PA' ],
	[ 'ps', 'PS' ],
	[ 'pda', 'PDA' ],
	[ 'pna', 'PNA' ],
	[ 'pbb', 'PBB' ],
	[ 'pkp', 'PKP' ],
]

function isTpsData( apiResponse ) {
	if ( ! apiResponse ) {
		return false
	}
	const { children } = apiResponse
	if ( ! children || ! children[ 0 ] ) {
		return false
	}
	return children[ 0 ].length === 3
}

function prepareRows( dataType, apiResponse ) {
	const tps = isTpsData( apiResponse )

	let rows = []
	if ( ! apiResponse ) {
		return rows
	}

	const { children, parentIds, parentNames } = apiResponse
	let { data } = apiResponse 
	data = data || []

	children.forEach( child => {
		let locationId = 0
		let locationName = ''
		let id = 0
		let name = ''
		let totalKpu = 0
		let dpt = 0
		let dpt_1 = 0
		let dpt_2 = 0

		if ( tps ) {
			[ name, dpt_1, dpt_2 ] = child
			locationId = apiResponse.id
			locationName = apiResponse.name
			id = name
			dpt = dpt_1 + dpt_2
		} else {
			[ id, name, totalKpu ] = child
			locationId = id
			locationName = name
		}

		const detail = data[ id ] || {}
		const photos = detail.photos || {}
		const sum = detail.sum || {}
		const url = `#${ dataType }:${ id }`
		const row = {
			id,
			name,
			locationId,
			locationName,
			url,
			totalKpu,
			dpt,
			photos,
			dataType,
			parentIds,
			parentNames,
			...sum,
		}

		rows.push( prepareRow( row ) )
	} )

	return rows
}

function prepareRow( row ) {
	rowKeys.forEach( k => {
		if ( ! Number.isInteger( row[ k ] ) ) {
			row[ k ] = 0
		}
	} )

	const { pas1, pas2, cakupan, pending, totalKpu, error } = row
	const tpsTerproses = cakupan - pending
	const pasAdded = pas1 + pas2
	const pas1Win = pas1 > pas2
	const pas2Win = pas2 > pas1

	let pas1Percentage = 0
	let pas2Percentage = 0
	let tpsTerprosesPercentage = 0
	let cakupanPercentage = 0
	let pendingPercentage = 0
	let errorPercentage = 0

	if ( pas1 > 0 ) {
		pas1Percentage = ( pas1 / pasAdded ) * 100
	}
	if ( pas2 > 0 ) {
		pas2Percentage = ( pas2 / pasAdded ) * 100
	}
	if ( totalKpu > 0 ) {
		tpsTerprosesPercentage = ( tpsTerproses / totalKpu ) * 100
		cakupanPercentage = ( cakupan / totalKpu ) * 100
	}
	if ( cakupan ) {
		pendingPercentage = ( pending / cakupan ) * 100
	}
	if ( cakupan ) {
		errorPercentage = ( error / cakupan ) * 100
	}

	const photos = {
		pilpres: [],
		pileg: [],
	}
	Object.keys( row.photos ).forEach( url => {
		let { c1, sum } = row.photos[ url ]
		c1 = c1 || {}
		sum = sum || {}
		const photoType = 1 === c1.type ? 'pilpres' : 'pileg'
		photos[ photoType ].push( { url, ...c1, ...sum } )
	} )

	row = {
		...row,
		pasAdded,
		pas1Win,
		pas2Win,
		pas1Percentage,
		pas2Percentage,
		tpsTerproses,
		tpsTerprosesPercentage,
		cakupanPercentage,
		pendingPercentage,
		errorPercentage,
		photos,
	}

	return row
}

function getTotalRows( rows ) {
	let total = {
		pas1: 0,
		pas1Win: false,
		pas1Percentage: 0,
		pas2: 0,
		pas2Win: false,
		pas2Percentage: 0,
		tpsTerproses: 0,
		tpsTerprosesPercentage: 0,
		totalKpu: 0,
		sah: 0,
		tSah: 0,
		cakupan: 0,
		cakupanPercentage: 0,
		pending: 0,
		pendingPercentage: 0,
		error: 0,
		errorPercentage: 0,
	}

	partyKeys.forEach( ( [ partyKey ] ) => {
		total[ partyKey ] = 0
	} )

	if ( ! rows ) {
		return total
	}

	rows.forEach( row => {
		total.pas1 += row.pas1
		total.pas2 += row.pas2
		total.totalKpu += row.totalKpu
		total.tpsTerproses += row.tpsTerproses
		total.sah += row.sah
		total.tSah += row.tSah
		total.cakupan += row.cakupan
		total.pending += row.pending
		total.error += row.error

		partyKeys.forEach( ( [ partyKey ] ) => {
			total[ partyKey ] += row[ partyKey ]
		} )
	} )

	total.pas1Win = total.pas1 > total.pas2
	total.pas2Win = total.pas2 > total.pas1

	if ( total.pas1 > 0 ) {
		total.pas1Percentage = ( total.pas1 / ( total.pas1 + total.pas2 ) ) * 100
	}

	if ( total.pas2 > 0 ) {
		total.pas2Percentage = ( total.pas2 / ( total.pas1 + total.pas2 ) ) * 100
	}

	if ( total.totalKpu > 0 ) {
		total.tpsTerprosesPercentage = ( total.tpsTerproses / total.totalKpu ) * 100
		total.cakupanPercentage = ( total.cakupan / total.totalKpu ) * 100
	}

	if ( total.cakupan > 0 ) {
		total.pendingPercentage = ( total.pending / total.cakupan ) * 100
		total.errorPercentage = ( total.error / total.cakupan ) * 100
	}

	return total
}

function getParents( dataType, apiResponse ) {
	if ( ! apiResponse ) {
		return []
	}

	const { parentIds, parentNames } = apiResponse
	if ( ! parentIds || parentIds.length <= 0 ) {
		return []
	}

	return parentIds.map( ( id, index ) => {
		const url = `#${ dataType }:${ id }`
		const content = parentNames[ index ]
		return {
			id,
			url,
			content,
		}
	} ).reverse()
}

function formatNumber( x ) {
	return x.toLocaleString( 'id-ID' )
}

function formatPercentage( x ) {
	return x.toLocaleString( 'id-ID', { maximumFractionDigits: 2 } ) + '%'
}

function rankParties( data ) {
	const partyRanks = {}

	partyKeys.slice( 0 ).sort( ( a, b ) => (
		data[ b[ 0 ] ] - data[ a[ 0 ] ]
	) ).forEach( ( party, index ) => {
		partyRanks[ party[ 0 ] ] = index + 1
	} )

	return partyRanks
}

function getReportTpsUrl( locationId, tpsId, dataType, parentName, locationName ) {
	const hash = `${ dataType }:${ locationId }`
	return 'https://docs.google.com/forms/d/e/1FAIpQLSdeoAqXjE-gd_YpsvpzeD1Cr21hWgwKM8MHS8CYXNajD6iKGA/viewform?usp=pp_url' +
		`&entry.1587204645=${ hash }` +
		`&entry.446975413=${ tpsId }` +
		`&entry.828908754=${ dataType }` +
		`&entry.1325772197=${ parentName }` +
		`&entry.789113286=${ locationName }`
}

function getModUrl( locationId, tpsId ) {
	return `https://upload.kawalpemilu.org/t/${ locationId }/${ tpsId }?utm_source=wwwkp`
}

export {
	candidateKeys,
	formatNumber,
	formatPercentage,
	getModUrl,
	getParents,
	getReportTpsUrl,
	getTotalRows,
	isTpsData,
	partyKeys,
	prepareRows,
	rankParties,
	rowKeys,
}
