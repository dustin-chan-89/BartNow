var React = require('react');
var TripStore = require('./TripStore');
var History = require('react-router').History;

var Commute = React.createClass({
	mixins: [History],

	getInitialState: function () {

		return { home: "", 
						 work: "", 
						 startPoint: "",
						 endpoint: "",
						 headingTo: "",
						 apiKey: "&key=ZV4R-PUQ9-86WT-DWE9",
						 optionSelected: false,
						 trips: []
						}
	},

	componentDidMount: function () {
		this.setState({ home: this.props.home, work: this.props.work });
		this.tripListener = TripStore.addListener(this._tripInformationUpdated);
	},

	componentWillUnmount: function () {
		this.tripListener.remove();
	},

	_tripInformationUpdated: function () {
		this.setState({ trips: TripStore.all() });
		$('#done-button').prop('disabled', true);
		$("#done-button").html('Done!');
	},

	resetCookies: function () {
		document.cookie = "start" + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"
		document.cookie = "stop" + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"
		this.props.history.pushState(null, "/");
	},

	goBack: function () {
		
	},

	render: function () {
				return (
					<div className="commute show">
						<h2 className="commute subheader">{this.props.startFull} to {this.props.stopFull}</h2>
						  <table className="table table-bordered">
						    <thead>
						      <tr>
						        <th id="departing">Departing</th>
						        <th id="arriving">Arriving</th>
						      </tr>
						    </thead>
						    <tbody>
						    	{this.state.trips.map(function (trip) {
						    		return (
						    			<tr key={trip.departure}>
							    			<td>{trip.departure}</td>
							    			<td>{trip.arrival}</td>
							    		</tr>
						    		)
						    	})}
						    </tbody>
						  </table>
					</div>
				)
		}
});

module.exports = Commute;