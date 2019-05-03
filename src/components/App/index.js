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
import './style.css'

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
		console.log( 'app contructor' )

		this.state = {
			dataType: this.props.dataType || 'pilpres',
			id: this.props.id || 0,
			data: null,
			loading: true,
			error: false,
		}
	}

	onHashChange() {
		const path = this.props.hashToState()
		const { dataType, id } = path
		this.setState( { dataType, id } )
		this.fetchData()
	}

	componentDidMount() {
		window.addEventListener( 'hashchange', this.onHashChange.bind( this ), false )
		this.fetchData()
	}

	componentWillUnmount() {
		window.removeListener( 'hashchange', this.onHashChange.bind( this ), false )
	}

	fetchData() {
		this.setState( { loading: true } )

		fetch( apiUrl + this.state.id  )
			.then( response => response.json() )
			.then( data => this.setState( { data, loading: false } ) )
			.catch( error => this.setState( { error, loading: false } ) )
	}

	render() {
		const { dataType, id, loading, data } = this.state
		console.log( 'app render', dataType, id )

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
					data={ data }
					dataType={ dataType }
				/>
			</Wrapper>
		)
	}
}

export default App
