var React = require('react');
var ReactDOM=require('react-dom');
var {Route,Router,IndexRoute,hashHistory}=require('react-router');
var Main=require('Main');
var Weather=require('Weather');
var About=require('About');
var Examples=require('Examples');




//var GreeterMessage=require('./components/GreeterMessage');
//var GreeterForm=require('./components/GreeterForm');


ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
		<Route path="about" component={About} />
		<Route path="examples" component={Examples} />

		<IndexRoute component={Weather}/>

		</Route>

	</Router>,
	document.getElementById('app')
	);
