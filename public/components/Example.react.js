'use strict';

var React = require('react');
var ExampleStore = require('../stores/ExampleStore');
var ExampleActions = require('../actions/ExampleActions');
var ExampleElement = require('./ExampleElement.react');

function getExampleState() {
		return {
			examples: ExampleStore.getAll()
		};
	}	


var MyExampleContainer = React.createClass({

	getInitialState: function() {
		return getExampleState();
	},

	componentDidMount: function() {
		ExampleStore.addChangeListener(this._onChange);
	},

	componentWillUnmount: function() {
		ExampleStore.removeChangeListener(this._onChange);
	},

	render: function() {
		var exampleElements = [];
		this.state.examples.forEach(function(example){
			exampleElements.push(<ExampleElement example={example} />);
		});
		return (
			<div>
				<ul className="MyFirstReactExample">
					{exampleElements} 		
				</ul>
				<button className="add" onClick={this._addExample}>
			 		Click me man!
		 		</button>
				<button className="destroy" onClick={this._destroyExamples}>
			 		Destroy me man!
		 		</button>
	 		</div>
		);
	},

	_onChange: function() {
		this.setState(getExampleState());
	},

	_addExample: function() {
		ExampleActions.create('Ciao belllllo');
	},

	_destroyExamples: function() {
		ExampleActions.destroyAll();
	}

});

module.exports = MyExampleContainer;

