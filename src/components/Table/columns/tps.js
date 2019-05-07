import React from 'react'
import {
	Button,
	Caption,
	DisplayText,
	Heading,
} from '@shopify/polaris'

import CellPercentage from '../cells/percentage'
import { formatNumber } from '../utils'

export default function getTpsColumns( dataType, total ) {
	// TODO: remove dupes between here and pilpres.js
	const pilpresCols = [
		{
			Header: () => (
				<div className={ 'th-col numeric' }>
					<Heading>{ '01' }</Heading>
					<CellPercentage
						percentage={ total.pas1Percentage }
						caption={ total.pas1 ? formatNumber( total.pas1 ) : false }
						winner={ total.pas1 > total.pas2 }
					/>
				</div>
			),
			accessor: 'pas1Percentage',
			Cell: row => (
				<CellPercentage
					percentage={ row.value }
					caption={ row.original.pas1 ? formatNumber( row.original.pas1 ) : false }
					winner={ row.original.pas1 > row.original.pas2 }
				/>
			),
		},
		{
			Header: () => (
				<div className={ 'th-col numeric' }>
					<Heading>{ '02' }</Heading>
					<CellPercentage
						percentage={ total.pas2Percentage }
						caption={ total.pas2 ? formatNumber( total.pas2 ) : false }
						winner={ total.pas2 > total.pas1 }
					/>
				</div>
			),
			accessor: 'pas2Percentage',
			Cell: row => (
				<CellPercentage
					percentage={ row.value }
					caption={ row.original.pas2 ? formatNumber( row.original.pas2 ) : false }
					winner={ row.original.pas2 > row.original.pas1 }
				/>
			),
		},
	]

	const cols = dataType === 'pilpres'
		? pilpresCols
		: []

	return [
		{
			expander: true,
			Expander: ( { isExpanded } ) => (
				<Button icon={ isExpanded ? 'chevronDown' : 'chevronRight' } />
			),
			width: 60,
		},
		{
			Header: () => (
				<div className={ 'th-col' }>
					<Heading>{ 'TPS' }</Heading>
				</div>
			),
			accessor: 'name',
			Cell: row => (
				<div className="tps-name">
					<DisplayText size="small">{ `TPS ${ row.value }` }</DisplayText>
					<Caption>{ `DPT ${ row.original.dpt }` }</Caption>
				</div>
			),
		},
		...cols,
	]
}
