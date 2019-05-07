import React, { Component } from 'react'
import { Card } from '@shopify/polaris'

import ReactTable from 'react-table'
import 'react-table/react-table.css'

import TopBar from './top-bar'
import {
	getColumns,
	getSkeletonColumns,
} from './columns/'
import TpsDetail from './columns/tps-detail'
import {
	getParents,
	getTotalRows,
	isTpsData,
	prepareRows,
} from './utils'

import './style.css'

class Table extends Component {
	render() {
		const { dataType, apiResponse, loading } = this.props
		const name = apiResponse ? apiResponse.name : ''

		const rows = loading
			? [ ...Array( 20 ).keys() ].map( () => ( {} ) )
			: prepareRows( dataType, apiResponse )

		const total = getTotalRows( rows )
		const isTps = isTpsData( apiResponse )

		const columns = loading
			? getSkeletonColumns( 4 )
			: getColumns( dataType, total, isTps )

		const tpsExpanded = row => (
			<TpsDetail row={ row } />
		)

		return (
			<Card>
				<Card.Section>
					<TopBar
						dataType={ dataType }
						parents={ getParents( dataType, apiResponse ) }
						loading={ loading }
						name={ name }
					/>
				</Card.Section>

				<ReactTable
					data={ rows }
					columns={ columns }
					className="-striped -highlight"
					showPagination={ false }
					pageSize={ rows.length }
					style={ {
						maxHeight: "1600px"
					} }
					SubComponent={ isTps && ! loading
						? tpsExpanded
						: null
					}
				/>
			</Card>
		)
	}
}

export default Table
