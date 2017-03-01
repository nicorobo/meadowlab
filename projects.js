import React from 'react'
import { IconElements, IconThoughts, IconLocation, IconMendeleev, IconDirbook } from './components/Icons'
const color = false;

const projects = [
	{
		title: 'Element Calculator',
		description: 'An interactive, responsive periodic table that functions as a molecular mass calculator.',
		projectLink: 'http://elementcalc.me/',
		pageLink: null,
		gitLink: 'https://github.com/nickroberts404/element-calc',
		icon: <IconElements color={color}/>
	},
	{
		title: 'Thoughtjar',
		description: 'A tool for organizing thoughts and ideas into categories, storing them in the browser for offline use.',
		projectLink: 'http://thoughtjar.co/',
		pageLink: null,
		gitLink: 'https://github.com/nickroberts404/thoughtjar',
		icon: <IconThoughts color={color}/>,
	},
	{
		title: 'Dirbook',
		description: 'A CLI enables users to save, open, and copy directories. Dirbook can also manage aliases for saved directories for quick access.',
		projectLink: 'https://www.npmjs.com/package/dirbook',
		pageLink: null,
		gitLink: 'https://github.com/nickroberts404/dirbook',
		icon: <IconDirbook color={color}/>
	},
	{
		title: 'Location Data Mocker',
		description: 'An npm tool that generates and serves mock location data via HTTP. It also provides a map interface to visualize/edit data.',
		projectLink: 'https://github.com/nickroberts404/location-data-generator',
		pageLink: null,
		gitLink: 'https://github.com/nickroberts404/location-data-generator',
		icon: <IconLocation color={color}/>
	},
	{
		title: 'Mendeleev',
		description: 'A small library for building compounds and working with element data',
		projectLink: 'https://www.npmjs.com/package/mendeleev',
		pageLink: null,
		gitLink: 'https://github.com/nickroberts404/Mendeleev',
		icon: <IconMendeleev color={color}/>
	}
]
export default projects;