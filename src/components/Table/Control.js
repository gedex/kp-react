import React, { Component } from 'react'
import {
	Button,
	SkeletonDisplayText,
	Stack,
} from '@shopify/polaris'

export default class Control extends Component {
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

	render() {
		const { loading, name, parentName, parentUrl } = this.props

		return loading ?
			(
				this.skeleton()
			)
			:
			(
				<div className="table-control">
					<Stack>
						{
							parentName ?
								(

									<Stack.Item>
									<Button
										icon="chevronLeft"
										url={ parentUrl }
									>
										{ parentName }
									</Button>
									</Stack.Item>
								)
								:
								null
						}
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
						<Stack.Item>
							<Button icon="menu"></Button>
						</Stack.Item>
					</Stack>
				</div>
			)
	}
}
