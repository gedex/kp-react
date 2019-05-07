import React, { Component } from 'react'

import {
	AppProvider,
	Button,
	ButtonGroup,
	Card,
	Layout,
	Page,
} from '@shopify/polaris'
import Table from '../Table'

const apiUrl = 'https://kawal-c1.appspot.com/api/c/'

const Wrapper = props => {
	return (
		<AppProvider>
			<Page>
				<Layout>
					<Layout.Section>
						<Card>
							{ props.children }
						</Card>
					</Layout.Section>
				</Layout>
			</Page>
		</AppProvider>
	)
}

class App extends Component {
	constructor( props ) {
		super( props )

		this.state = {
			dataType: this.props.dataType || 'pilpres',
			id: this.props.id || 0,
			apiResponse: null,
			loading: true,
			error: false,
		}

		this.onHashChange = this.onHashChange.bind( this )
	}

	onHashChange() {
		const path = this.props.hashToState()
		const { dataType, id } = path
		this.setState( { dataType, id } )
		this.fetchData()
	}

	componentDidMount() {
		window.addEventListener( 'hashchange', this.onHashChange, false )
		this.fetchData()
	}

	componentWillUnmount() {
		window.removeEventListener( 'hashchange', this.onHashChange, false )
	}

	fetchData() {
		this.setState( { loading: true } )

		fetch( apiUrl + this.state.id + `?=${ new Date().getTime() }` )
			.then( response => response.json() )
			.then( apiResponse => this.setState( { apiResponse, loading: false } ) )
			.catch( error => this.setState( { error, loading: false } ) )
	}

	render() {
		const { dataType, id, loading, apiResponse } = this.state

		return (
			<Wrapper>
				<ButtonGroup fullWidth segmented>
					<Button
						fullWidth
						size="large"
						disabled={ dataType === 'pilpres' }
						url={ `#pilpres:${ id }` }
					>
						{ 'Presiden' }
					</Button>
					<Button
						fullWidth
						size="large"
						disabled={ dataType === 'pileg' }
						url={ `#pileg:${ id }` }
					>
						{ 'DPR' }
					</Button>
				</ButtonGroup>

				<Table
					loading={ loading }
					apiResponse={ apiResponse }
					dataType={ dataType }
				/>
			</Wrapper>
		)
	}
}

export default App
