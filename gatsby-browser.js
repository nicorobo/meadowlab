import ReactGA from 'react-ga';
ReactGA.initialize('UA-58875517-5');

exports.onRouteUpdate = (state, page, pages) => {
	console.log('ahhha');
	ReactGA.pageview(state.pathname);
};