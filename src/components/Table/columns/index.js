import React from 'react'
import {
	SkeletonBodyText,
} from '@shopify/polaris'

import getPilpresColumns from './pilpres'
import getPilegColumns from './pileg'
import getTpsColumns from './tps'

const getSkeletonColumns = ( totalColumns ) => (
	[ ...Array( totalColumns ).keys() ].map( () => (
		{
			Header: () => (  <SkeletonBodyText lines={ 1 } /> ),
			Cell: () => (  <SkeletonBodyText lines={ 1 } /> ),
		}
	) )
)

const getColumns = ( dataType, total, isTps ) =>  {
	if ( isTps ) {
		return getTpsColumns( dataType, total )
	}
	if ( 'pilpres' === dataType ) {
		return getPilpresColumns( total )
	}

	return getPilegColumns( total )
}

export {
	getColumns,
	getSkeletonColumns,
}
