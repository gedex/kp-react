import React, { Component } from 'react'
import {
	ActionList,
	Button,
	FormLayout,
	Popover,
	SkeletonDisplayText,
	Stack,
} from '@shopify/polaris'

export default class TopBar extends Component {
	state = {
		menuActive: false,
		parentsActive: false,
	};

	skeleton() {
		return (
			<Stack>
				<Stack.Item fill>
					<SkeletonDisplayText size="small" />
				</Stack.Item>
				<Stack.Item fill>
					<SkeletonDisplayText size="small" />
				</Stack.Item>
				<Stack.Item fill>
					<SkeletonDisplayText size="small" />
				</Stack.Item>
			</Stack>
		)
	}

	toggleMenu = () => {
		this.setState( ( { menuActive } ) => {
			return { menuActive: !menuActive }
		} )
	}

	toggleParents = () => {
		this.setState( ( { parentsActive } ) => {
			return { parentsActive: !parentsActive }
		} )
	}

	
	getParents() {
		return [
			{
				title: 'Kembali ke',
				items: this.props.parents.map( parent => {
					parent.onAction = this.toggleParents
					return parent
				} ),
			}
		]
	}

	getParentsPopover() {
		const { parentsActive } = this.state
		const parents = this.getParents()
		const parentsActivator = (
			<Button
				disabled={ ! parents[ 0 ].items.length }
				icon={ parentsActive ? 'chevronDown' : 'chevronLeft' }
				onClick={ this.toggleParents }
			/>
		)

		return (
			<Popover
				active={ parentsActive }
				activator={ parentsActivator }
				onClose={ this.toggleParents }
				preferredAlignment={ 'left' }
			>
				<ActionList
					sections={ parents }
				/>
			</Popover>
		)
	}

	// TODO: Should be Autocomplete component to static wilayah.json
	getSearchPopover() {
		const { menuActive } = this.state
		const menuActivator = (
			<Button
				icon={ menuActive ? 'chevronDown' : 'search' }
				onClick={ this.toggleMenu }
				disabled
			/>
		)

		return (
			<Popover
				active={ menuActive }
				activator={ menuActivator }
				onClose={ this.toggleMenu }
				preferredAlignment={ 'right' }
				fullHeight
			>
				<FormLayout>
				</FormLayout>
			</Popover>
		)
	}

	render() {
		const { loading, name } = this.props
		//const searchPopover = this.getSearchPopover()
		const parentsPopover = this.getParentsPopover()

		return loading ?
			(
				this.skeleton()
			)
			:
			(
				<div className="table-control">
					<Stack>
						<Stack.Item>
							{ parentsPopover }
						</Stack.Item>
						<Stack.Item fill>
							<div className="location-name">
								<Button
									fullWidth
									disabled
									outline
									monochrome
								>
									{ name }
								</Button>
							</div>
						</Stack.Item>
					</Stack>
				</div>
			)
	}
}
