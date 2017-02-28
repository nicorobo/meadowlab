import ReactGA from 'react-ga';
ReactGA.initialize('UA-58875517-5');

exports.onRouteUpdate = (state, page, pages) => {
	ReactGA.pageview(state.pathname);
};