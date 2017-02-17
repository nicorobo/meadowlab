import React from 'react'
import { IconElements, IconThoughts, IconLocation } from './components/Icons'
const color = false;

const projects = [
	{
		title: 'Element Calculator',
		description: 'This is a very futuristic project, it may take a couple years to catch on.',
		projectLink: 'http://elementcalc.me/',
		pageLink: '/articles/element-calculator/',
		gitLink: 'https://github.com/nickroberts404/element-calc',
		icon: <IconElements color={color}/>
	},
	{
		title: 'Thoughtjar',
		description: 'This is a very futuristic project, it may take a couple years to catch on.',
		projectLink: 'https://nickroberts404.github.io/thoughtjar/',
		pageLink: '/articles/thoughtjar/',
		gitLink: 'https://github.com/nickroberts404/thoughtjar',
		icon: <IconThoughts color={color}/>,
	},
	{
		title: 'Location Data Mocker',
		description: 'This is a very futuristic project, it may take a couple years to catch on.',
		projectLink: 'https://github.com/nickroberts404/location-data-generator',
		pageLink: null,
		gitLink: 'https://github.com/nickroberts404/location-data-generator',
		icon: <IconLocation color={color}/>
	}
]
export default projects;