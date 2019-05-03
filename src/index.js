import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

import '@shopify/polaris/styles.css';
import './index.css'

/**
 * Helper function to get state object given current hash.
 *
 * @returns {Object} State.
 */
function hashToState() {
	const hash = window.location.hash.length > 0
		? window.location.hash.substring( 1 )
		: '';

	let [ dataType, id ] = hash.split( ':' )
	if ( dataType !== 'pilpres' && dataType !== 'pileg' ) {
		dataType = 'pilpres';
	}

	id = parseInt( id, 10 );
	if ( isNaN( id ) ) {
		id = 0;
	}

	return {
		dataType,
		id
	}
}

const { dataType, id } = hashToState()
window.history.replaceState(
	{},
	document.title,
	`${ window.location.pathname }#${ dataType }:${ id }`
);

ReactDOM.render(
	<App hashToState={ hashToState } dataType={ dataType } id={ id } />,
	document.getElementById( 'root' )
)
