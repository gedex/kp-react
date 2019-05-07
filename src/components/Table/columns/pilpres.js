import React from 'react'
import classNames from 'classnames'
import {
	Heading,
	Link,
	Tooltip,
} from '@shopify/polaris'

import CellNumber from '../cells/number'
import CellPercentage from '../cells/percentage'
import { candidateKeys, formatNumber } from '../utils'

export default function getPilpresColumns( total ) {
	const thColClass = classNames( {
		'th-col': true,
	} )
	const thColNumericClass = classNames( {
		'th-col': true,
		numeric: true,
	} )

	/* TODO: Remove dups in Header and Footer */
	/* TODO: Pass list of array without Component in it then map it to be Component-ready */
	const candidateCells = candidateKeys.map( ( [ accessor, label ] ) => (
		{
			Header: () => (
				<Tooltip content={ `Total suara pasangan ${ label }` }>
					<div className={ thColNumericClass }>
						<Heading>
							{ label }
						</Heading>
						<CellPercentage
							percentage={ total[ `${ accessor }Percentage` ] }
							caption={ total[ accessor ] ? formatNumber( total[ accessor ] ) : false }
							winner={ total[ `${ accessor }Win` ] }
						/>
					</div>
				</Tooltip>
			),
			Footer: () => (
				<Tooltip content={ `Total suara pasangan ${ label }` }>
					<div className={ thColNumericClass }>
						<Heading>
							{ label }
						</Heading>
						<CellPercentage
							percentage={ total[ `${ accessor }Percentage` ] }
							caption={ total[ accessor ] ? formatNumber( total[ accessor ] ) : false }
							winner={ total[ `${ accessor }Win` ] }
						/>
					</div>
				</Tooltip>
			),
			accessor: accessor,
			Cell: row => (
				<CellPercentage
					percentage={ row.original[ `${ accessor }Percentage` ] }
					caption={ row.original[ accessor ] ? formatNumber( row.original[ accessor ] ) : false }
					winner={ row.original[ `${ accessor }Win` ] }
				/>
			),
		}
	) )

	/* TODO: Remove dups in Header and Footer */
	/* TODO: Pass list of array without Component in it then map it to be Component-ready */
	return [
		{
			Header: () => (
				<div className={ thColClass }>
					<Heading>{ 'Wilayah' }</Heading>
				</div>
			),
			Footer: () => (
				<div className={ thColClass }>
					<Heading>{ 'Wilayah' }</Heading>
				</div>
			),
			accessor: 'name',
			Cell: row => (
				<div>
					<Link
						url={ row.original.url }
					>
						{ row.value }
					</Link>
				</div>
			),
		},

		...candidateCells,

		{
			Header: () => (
				<Tooltip content={ 'Estimasi jumlah TPS yang sudah memiliki foto dan sudah diproses datanya' }>
					<div className={ thColNumericClass }>
						<Heading>{ 'Terproses' }</Heading>
						<CellPercentage
							percentage={ total.tpsTerprosesPercentage }
							caption={ `${ formatNumber( total.tpsTerproses ) } / ${ formatNumber( total.totalKpu ) }` }
							progress={ total.tpsTerprosesPercentage }
						/>
					</div>
				</Tooltip>
			),
			Footer: () => (
				<Tooltip content={ 'Estimasi jumlah TPS yang sudah memiliki foto dan sudah diproses datanya' }>
					<div className={ thColNumericClass }>
						<Heading>{ 'Terproses' }</Heading>
						<CellPercentage
							percentage={ total.tpsTerprosesPercentage }
							caption={ `${ formatNumber( total.tpsTerproses ) } / ${ formatNumber( total.totalKpu ) }` }
							progress={ total.tpsTerprosesPercentage }
						/>
					</div>
				</Tooltip>
			),
			accessor: 'tpsTerprosesPercentage',
			Cell: row => (
				<CellPercentage
					percentage={ row.value }
					caption={ `${ formatNumber( row.original.tpsTerproses ) } / ${ formatNumber( row.original.totalKpu ) }` }
					progress={ row.value }
				/>
			),
		},

		//{
			//Header: () => (
				//<Tooltip content={ 'Jumlah suara sah' }>
					//<div className={ thColNumericClass }>
						//<Heading>{ 'Sah' }</Heading>
						//<CellNumber number={ total.sah } />
					//</div>
				//</Tooltip>
			//),
			//Footer: () => (
				//<Tooltip content={ 'Jumlah suara sah' }>
					//<div className={ thColNumericClass }>
						//<Heading>{ 'Sah' }</Heading>
						//<CellNumber number={ total.sah } />
					//</div>
				//</Tooltip>
			//),
			//accessor: 'sah',
			//Cell: row => (
				//<CellNumber number={ formatNumber( row.value ) } />
			//),
			//minWidth: 160,
		//},

		//{
			//Header: () => (
				//<Tooltip content={ 'Jumlah suara tidak sah' }>
					//<div className={ thColNumericClass }>
						//<Heading>{ 'Tidak Sah' }</Heading>
						//<CellNumber number={ total.tSah } />
					//</div>
				//</Tooltip>
			//),
			//Footer: () => (
				//<Tooltip content={ 'Jumlah suara tidak sah' }>
					//<div className={ thColNumericClass }>
						//<Heading>{ 'Tidak Sah' }</Heading>
						//<CellNumber number={ total.tSah } />
					//</div>
				//</Tooltip>
			//),
			//accessor: 'tSah',
			//Cell: row => (
				//<CellNumber number={ formatNumber( row.value ) } />
			//),
			//minWidth: 160,
		//},

		//{
			//Header: () => (
				//<Tooltip content={ 'Jumlah TPS total dari data KPU' }>
					//<div className={ thColNumericClass }>
						//<Heading>{ 'Total KPU' }</Heading>
						//<CellNumber number={ total.totalKpu } />
					//</div>
				//</Tooltip>
			//),
			//Footer: () => (
				//<Tooltip content={ 'Jumlah TPS total dari data KPU' }>
					//<div className={ thColNumericClass }>
						//<Heading>{ 'Total KPU' }</Heading>
						//<CellNumber number={ total.totalKpu } />
					//</div>
				//</Tooltip>
			//),
			//accessor: 'totalKpu',
			//Cell: row => (
				//<CellNumber number={ formatNumber( row.value ) } />
			//),
			//minWidth: 160,
		//},

		//{
			//Header: () => (
				//<Tooltip content={ 'Jumlah TPS dengan foto yang diterima KawalPemilu (termasuk lembar PHP, pileg, dpd, dll)' }>
					//<div className={ thColNumericClass }>
						//<Heading>{ 'Dgn Foto' }</Heading>
						//<CellPercentage
							//percentage={ total.cakupanPercentage }
							//caption={ `${ formatNumber( total.cakupan ) } / ${ formatNumber( total.totalKpu ) }` }
						///>
					//</div>
				//</Tooltip>
			//),
			//Footer: () => (
				//<Tooltip content={ 'Jumlah TPS dengan foto yang diterima KawalPemilu (termasuk lembar PHP, pileg, dpd, dll)' }>
					//<div className={ thColNumericClass }>
						//<Heading>{ 'Dgn Foto' }</Heading>
						//<CellPercentage
							//percentage={ total.cakupanPercentage }
							//caption={ `${ formatNumber( total.cakupan ) } / ${ formatNumber( total.totalKpu ) }` }
						///>
					//</div>
				//</Tooltip>
			//),
			//accessor: 'cakupanPercentage',
			//Cell: row => (
				//<CellPercentage
					//percentage={ row.value }
					//caption={ `${ formatNumber( row.original.cakupan ) } / ${ formatNumber( row.original.totalKpu ) }` }
					//progress={ row.value }
				///>
			//),
			//minWidth: 150,
		//},

		//{
			//Header: () => (
				//<Tooltip content={ 'Jumlah TPS yang memiliki foto yang belum diproses' }>
					//<div className={ thColNumericClass }>
						//<Heading>{ 'Belum Terproses' }</Heading>
						//<CellPercentage
							//percentage={ total.pendingPercentage }
							//caption={ `${ formatNumber( total.pending ) } / ${ formatNumber( total.cakupan ) }` }
						///>
					//</div>
				//</Tooltip>
			//),
			//Footer: () => (
				//<Tooltip content={ 'Jumlah TPS yang memiliki foto yang belum diproses' }>
					//<div className={ thColNumericClass }>
						//<Heading>{ 'Belum Terproses' }</Heading>
						//<CellPercentage
							//percentage={ total.pendingPercentage }
							//caption={ `${ formatNumber( total.pending ) } / ${ formatNumber( total.cakupan ) }` }
						///>
					//</div>
				//</Tooltip>
			//),
			//accessor: 'pending',
			//Cell: row => (
				//<CellPercentage
					//percentage={ row.original.pendingPercentage }
					//caption={ `${ formatNumber( row.value ) } / ${ formatNumber( row.original.cakupan ) }` }
				///>
			//),
			//minWidth: 190,
		//},

		//{
			//Header: () => (
				//<Tooltip content={ 'Jumlah TPS yang memiliki laporan yang belum ditindaklanjuti.' }>
					//<div className={ thColNumericClass }>
						//<Heading>{ 'Bermasalah' }</Heading>
						//<CellPercentage
							//percentage={ total.errorPercentage }
							//caption={ `${ formatNumber( total.error ) } / ${ formatNumber( total.cakupan ) }` }
						///>
					//</div>
				//</Tooltip>
			//),
			//Footer: () => (
				//<Tooltip content={ 'Jumlah TPS yang memiliki laporan yang belum ditindaklanjuti.' }>
					//<div className={ thColNumericClass }>
						//<Heading>{ 'Bermasalah' }</Heading>
						//<CellPercentage
							//percentage={ total.errorPercentage }
							//caption={ `${ formatNumber( total.error ) } / ${ formatNumber( total.cakupan ) }` }
						///>
					//</div>
				//</Tooltip>
			//),
			//accessor: 'error',
			//Cell: row => (
				//<CellPercentage
					//percentage={ row.original.errorPercentage }
					//caption={ `${ formatNumber( row.value ) } / ${ formatNumber( row.original.cakupan ) }` }
				///>
			//),
			//minWidth: 160,
		//},
	]
}
