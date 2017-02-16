import React from 'react'
import { IconElements, IconThoughts, IconLocation } from './components/Icons'
const color = true;

const projects = [
	{
		title: 'Element Calculator',
		description: 'This is a very futuristic project, it may take a couple years to catch on.',
		projectLink: 'http://elementcalc.me/',
		pageLink: null,
		icon: <IconElements color={color}/>
	},
	{
		title: 'Thoughtjar',
		description: 'This is a very futuristic project, it may take a couple years to catch on.',
		projectLink: 'https://nickroberts404.github.io/thoughtjar/',
		pageLink: null,
		icon: <IconThoughts color={color}/>,
	},
	{
		title: 'Location Data Mocker',
		description: 'This is a very futuristic project, it may take a couple years to catch on.',
		projectLink: 'https://github.com/nickroberts404/location-data-generator',
		pageLink: null,
		icon: <IconLocation color={color}/>
	}
]
export default projects;