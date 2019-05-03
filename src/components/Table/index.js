import React, { Component } from 'react'
import classNames from 'classnames'
import {
	Button,
	Caption,
	Card,
	DataTable,
	DisplayText,
	ProgressBar,
	SkeletonBodyText,
	TextContainer,
} from '@shopify/polaris'

import Control from './Control'
import './style.css'

const CellPercentage = props => {
	const itemClassName = classNames( {
		winner: props.winner,
		numeric: true,
	} )
	return (
		<div className={ itemClassName }>
			<TextContainer>
				<DisplayText size="small">
					{
						props.winner ?
							'✓ '
							:
							''
					}
					{ props.percentage }
				</DisplayText>
				{
					props.caption ?
						(
							<Caption>{ props.caption }</Caption>
						)
						:
						null
				}
				{
					props.progress ?
						(
							<ProgressBar progress={ props.progress } size="small" />
						)
						:
						null
				}
			</TextContainer>
		</div>
	)
}

export default class Table extends Component {
	getHeadings() {
		if ( this.props.dataType === 'pilpres' ) {
			return [
				'Wilayah',
				'01',
				'02',
				'% TPS',
			]
		}

		return [
			'Wilayah',
			'01',
			'02',
			'% TPS',
		]
	}

	getTypes() {
		if ( this.props === 'pilpres' ) {
			return [
				'text',
				'numeric',
				'numeric',
				'numeric',
			]
		}

		return [
			'text',
			'numeric',
			'numeric',
			'numeric',
		]
	}

	createSkeletonRows( totalColumns, totalRows ) {
		let cols = []
		for ( let i = 0; i < totalColumns; i++ ) {
			cols.push( <SkeletonBodyText lines={ 1 } /> )
		}

		let rows = []
		for ( let i = 0; i < totalRows; i++ ) {
			rows.push( cols )
		}

		return rows
	}

	formatNumber( x ) {
		return x.toLocaleString( 'id-ID' )
	}

	formatPercentage( x ) {
		return x.toLocaleString( 'id-ID', { maximumFractionDigits: 1, maximumSignificantDigits: 3 } ) + '%'
	}

	prepareRow( rowData, dataType ) {
		const url = `#${ dataType }:${ rowData.id }`
		const keys = [
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
			'pan',
			'pas1',
			'pas2',
			'pbb',
			'pdi',
			'pending',
			'per',
			'pkb',
			'pkp',
			'psi',
			'sah',
			'sej',
			'tSah',
		]
		keys.forEach( k => {
			if ( ! Number.isInteger( rowData[ k ] ) ) {
				rowData[ k ] = 0
			}
		} )

		const { pas1, pas2, cakupan, pending, totalKpu } = rowData
		const tpsTerproses = cakupan - pending

		let pas1Percentage = 0
		let pas2Percentage = 0
		let tpsTerprosesPercentage = 0
		let tpsProgress = 0
		if ( pas1 > 0 ) {
			pas1Percentage = this.formatPercentage( ( pas1 / ( pas1 + pas2 ) ) * 100 )
		}
		if ( pas2 > 0 ) {
			pas2Percentage = this.formatPercentage( ( pas2 / ( pas1 + pas2 ) ) * 100 )
		}
		if ( tpsTerproses > 0 ) {
			tpsProgress = ( tpsTerproses / totalKpu ) * 100
			tpsTerprosesPercentage = this.formatPercentage( tpsProgress )
		}


		rowData = {
			...rowData,
			pas1Percentage,
			pas2Percentage,
			tpsTerproses,
			tpsProgress,
			tpsTerprosesPercentage,
			url,
		}

		return rowData
	}

	pilpresRow( preparedRow ) {
		const {
			name,
			url,
			pas1,
			pas2,
			pas1Percentage,
			pas2Percentage,
			tpsTerproses,
			tpsProgress,
			tpsTerprosesPercentage,
			totalKpu,
		} = preparedRow

		return [
			<div className="location-link">
				<Button
					fullWidth
					plain
					url={ url }
				>
					{ name }
				</Button>
			</div>,
			<CellPercentage
				percentage={ pas1Percentage }
				caption={ pas1 ? this.formatNumber( pas1 ) : false }
				winner={ pas1 > pas2 }
			/>,
			<CellPercentage
				percentage={ pas2Percentage }
				caption={ pas2 ? this.formatNumber( pas2 ) : false }
				winner={ pas2 > pas1 }
			/>,
			<CellPercentage
				percentage={ tpsTerprosesPercentage }
				caption={ `${ this.formatNumber( tpsTerproses ) } / ${ this.formatNumber( totalKpu ) }` }
				progress={ tpsProgress }
			/>,
		]
	}

	pilegRow() {
		return [
			null,
			null,
			null,
			null,
		]
	}

	getRows() {
		const { loading, dataType, data } = this.props
		if ( loading || ! data ) {
			return this.createSkeletonRows( 4, 10 )
		}

		let totals = {
			pas1: 0,
			pas2: 0,
			tpsTerproses: 0,
			totalKpu: 0,
		}
		let rows = []
		data.children.forEach( child => {
			const [ id, name, totalKpu ] = child
			if ( ! data.data[ id ] ) {
				return
			}

			const rowData = {
				...data.data[ id ].sum,
				id,
				name,
				totalKpu
			}

			const preparedRow = this.prepareRow( rowData, dataType )
			console.log( preparedRow )
			const row = dataType === 'pilpres'
				? this.pilpresRow( preparedRow )
				: this.pilegRow( preparedRow )

			rows.push( row )

			totals.pas1 += preparedRow.pas1
			totals.pas2 += preparedRow.pas2
			totals.totalKpu += preparedRow.totalKpu
			totals.tpsTerproses += preparedRow.tpsTerproses
		} )

		
		const totalPas1Percentage = this.formatPercentage( ( totals.pas1 / ( totals.pas1 + totals.pas2 ) ) * 100 )
		const totalPas2Percentage = this.formatPercentage( ( totals.pas2 / ( totals.pas1 + totals.pas2 ) ) * 100 )
		const totalTpsTerprosesPercentage = this.formatPercentage( ( totals.tpsTerproses / totals.totalKpu ) * 100 )

		rows.unshift( [
			<Caption>{ 'TOTAL' }</Caption>,
			<CellPercentage
				percentage={ totalPas1Percentage }
				caption={ totals.pas1 ? this.formatNumber( totals.pas1 ) : false }
				winner={ totals.pas1 > totals.pas2 }
			/>,
			<CellPercentage
				percentage={ totalPas2Percentage }
				caption={ totals.pas2 ? this.formatNumber( totals.pas2 ) : false }
				winner={ totals.pas2 > totals.pas1 }
			/>,
			<CellPercentage
				percentage={ totalTpsTerprosesPercentage }
				caption={ `${ this.formatNumber( totals.tpsTerproses ) } / ${ this.formatNumber( totals.totalKpu ) }` }
				progress={ ( totals.tpsTerproses / totals.totalKpu ) * 100 }
			/>,
		] )

		return rows
	}

	render() {
		const { dataType, loading, data } = this.props

		const name = data ? data.name : ''

		let parentName, parentId, parentUrl
		if ( data ) {
			parentName = data.parentNames.pop()
			parentId = data.parentIds.pop()
			parentUrl = `#${ dataType }:${ parentId }`
		}

		return (
			<Card>
				<Card.Section>
					<Control
						dataType={ dataType }
						parentUrl={ parentUrl }
						parentName={ parentName }
						loading={ loading }
						name={ name }
					/>
				</Card.Section>
				<DataTable
					columnContentTypes={ this.getTypes() }
					headings={ this.getHeadings() }
					rows={ this.getRows() }
				/>
			</Card>
		)
	}
}
