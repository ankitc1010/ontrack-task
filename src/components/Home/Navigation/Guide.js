import React from 'react'
import InfoCard from '../InfoCard'
import image2 from './image2.svg'
import image3 from './image3.svg'
import image4 from './image4.svg'
export default () => (
	<div>
		<InfoCard>
			<h2 className="orange">Insights</h2>
			<ul>
				<li>
					<img src={image2} width="20" /> Stock
				</li>
				<li>
					<img src={image3} width="20" /> Overdues
				</li>
				<li>
					<img src={image4} width="20" /> Sales
				</li>
			</ul>
		</InfoCard>
		<InfoCard>
			<h2 className="green">Tally Integration</h2>
			<ul>
				<li>Integrate tally by installing Snitch in your machine</li>
			</ul>
		</InfoCard>
		<InfoCard>
			<h2 className="purple">Take Order</h2>
			<ul>
				<li>
					Take order from the application and <br />get it synced to your
					accounting software
				</li>
			</ul>
		</InfoCard>
		<InfoCard>
			<h2 className="red">Commands</h2>
			<ul>
				<li>Todays Insights</li>
				<li>Take order</li>
				<li>View Order</li>
				<li>Customer Summary</li>
			</ul>
		</InfoCard>
	</div>
)
