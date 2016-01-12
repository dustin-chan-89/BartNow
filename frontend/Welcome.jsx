var React = require('react');
var History = require('react-router').History;

var Welcome = React.createClass({
	mixins: [History],

	getInitialState: function () {
		return {home: "", 
						initHomeStation: "Home Station ", 
						work: "", 
						initWorkStation: "Work Station ",
						greeting: "(Please enable cookies to use this site)"
					}
	},

	setCookie: function (home, work) {
		document.cookie="home=" + home
		document.cookie="work=" + work
	},

	handleSubmit: function () {
		this.setState({ greeting: "" })
		if (this.state.home === "" || this.state.work === "") {
			this.setState({ greeting: "(You are missing an entry)" })
			$('#cookies-warning').css('color', 'red');
		} else if (this.state.home === this.state.work) {
			this.setState({ greeting: "(Home and work stations must not be the same)"})
			$('#cookies-warning').css('color', 'red');
		} else {
			this.setCookie(this.state.home, this.state.work);
			this.props.history.pushState(null, "/commute");
		}
	},

	setHomeStation: function (event) {
		this.setState({ home: event.target.getAttribute('value') })
		this.setState({ initHomeStation: event.target.text })
	},

	setWorkStation: function (event) {
		this.setState({ work: event.target.getAttribute('value') })
		this.setState({ initWorkStation: event.target.text })
	},

	render: function () {
		return (
			<div className="welcome page">
				<h1>One-Time Setup</h1>
				<div className="panel panel-default">
				  <div className="panel-heading">
				    <h3 className="panel-title">What station do you commute from?</h3>
				  </div>
				  <div className="panel-body">
						<div className="dropdown">
							<div className="dropdown container">
							  <button id="home-dropdown-button" className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">{this.state.initHomeStation}
							  <span className="caret"></span></button>
							  <ul className="dropdown-menu">
							    <li onClick={this.setHomeStation}><a value="12TH">12th St. Oakland City Center</a></li>
							    <li onClick={this.setHomeStation}><a value="16TH">16th St. Mission</a></li>
							    <li onClick={this.setHomeStation}><a value="19TH">19th St. Oakland</a></li>
							    <li onClick={this.setHomeStation}><a value="24TH">24th St. Mission</a></li>
							    <li onClick={this.setHomeStation}><a value="ASHB">Ashby</a></li>
							    <li onClick={this.setHomeStation}><a value="BALB">Balboa Park</a></li>
							    <li onClick={this.setHomeStation}><a value="BAYF">Bay Fair</a></li>
							    <li onClick={this.setHomeStation}><a value="CAST">Castro Valley</a></li>
							    <li onClick={this.setHomeStation}><a value="CIVC">Civic Center/UN Plaza</a></li>
							    <li onClick={this.setHomeStation}><a value="COLS">Coliseum</a></li>
							    <li onClick={this.setHomeStation}><a value="COLM">Colma</a></li>
							    <li onClick={this.setHomeStation}><a value="CONC">Concord</a></li>
							    <li onClick={this.setHomeStation}><a value="DALY">Daly City</a></li>
							    <li onClick={this.setHomeStation}><a value="DBRK">Downtown Berkeley</a></li>
							    <li onClick={this.setHomeStation}><a value="DUBL">Dublin/Pleasanton</a></li>
							    <li onClick={this.setHomeStation}><a value="DELN">El Cerrito del Norte</a></li>
							    <li onClick={this.setHomeStation}><a value="PLZA">El Cerrito Plaza</a></li>
							    <li onClick={this.setHomeStation}><a value="EMBR">Embarcadero</a></li>
							    <li onClick={this.setHomeStation}><a value="FRMT">Fremont</a></li>
							    <li onClick={this.setHomeStation}><a value="FTVL">Fruitvale</a></li>
							    <li onClick={this.setHomeStation}><a value="GLEN">Glen Park</a></li>
							    <li onClick={this.setHomeStation}><a value="HAYW">Hayward</a></li>
							    <li onClick={this.setHomeStation}><a value="LAFY">Lafayette</a></li>
							    <li onClick={this.setHomeStation}><a value="LAKE">Lake Merritt</a></li>
							    <li onClick={this.setHomeStation}><a value="MCAR">MacArthur</a></li>
							   	<li onClick={this.setHomeStation}><a value="MLBR">Millbrae</a></li>
							    <li onClick={this.setHomeStation}><a value="MONT">Montgomery St.</a></li>
							    <li onClick={this.setHomeStation}><a value="NBRK">North Berkeley</a></li>
							    <li onClick={this.setHomeStation}><a value="NCON">North Concord/Martinez</a></li>
							    <li onClick={this.setHomeStation}><a value="OAKL">Oakland Intl Airport</a></li>
							    <li onClick={this.setHomeStation}><a value="ORIN">Orinda</a></li>
							   	<li onClick={this.setHomeStation}><a value="PITT">Pittsburg/Bay Point</a></li>
							    <li onClick={this.setHomeStation}><a value="PHIL">Pleasant Hill/Contra Costa Centre</a></li>
							    <li onClick={this.setHomeStation}><a value="POWL">Powell St.</a></li>
							    <li onClick={this.setHomeStation}><a value="RICH">Richmond</a></li>
							    <li onClick={this.setHomeStation}><a value="ROCK">Rockridge</a></li>
							    <li onClick={this.setHomeStation}><a value="SBRN">San Bruno</a></li>
							   	<li onClick={this.setHomeStation}><a value="SFIA">San Francisco Intl Airport</a></li>
							    <li onClick={this.setHomeStation}><a value="SANL">San Leandro</a></li>
							    <li onClick={this.setHomeStation}><a value="SHAY">South Hayward</a></li>
							    <li onClick={this.setHomeStation}><a value="SSAN">South San Francisco</a></li>
							    <li onClick={this.setHomeStation}><a value="UCTY">Union City</a></li>
							    <li onClick={this.setHomeStation}><a value="WCRK">Walnut Creek</a></li>
							   	<li onClick={this.setHomeStation}><a value="WDUB">West Dublin/Pleasanton</a></li>
							    <li onClick={this.setHomeStation}><a value="WOAK">West Oakland</a></li>
							  </ul>
							</div>
						</div>
				  </div>
				</div>

				<div className="panel panel-default">
				  <div className="panel-heading">
				    <h3 className="panel-title">What station do you work by?</h3>
				  </div>
				  <div className="panel-body">
						<div className="dropdown">
							<div className="dropdown container">
							  <button id="home-dropdown" className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">{this.state.initWorkStation}
							  <span className="caret"></span></button>
							  <ul className="dropdown-menu">
							    <li onClick={this.setWorkStation}><a value="12TH">12th St. Oakland City Center</a></li>
							    <li onClick={this.setWorkStation}><a value="16TH">16th St. Mission</a></li>
							    <li onClick={this.setWorkStation}><a value="19TH">19th St. Oakland</a></li>
							    <li onClick={this.setWorkStation}><a value="24TH">24th St. Mission</a></li>
							    <li onClick={this.setWorkStation}><a value="ASHB">Ashby</a></li>
							    <li onClick={this.setWorkStation}><a value="BALB">Balboa Park</a></li>
							    <li onClick={this.setWorkStation}><a value="BAYF">Bay Fair</a></li>
							    <li onClick={this.setWorkStation}><a value="CAST">Castro Valley</a></li>
							    <li onClick={this.setWorkStation}><a value="CIVC">Civic Center/UN Plaza</a></li>
							    <li onClick={this.setWorkStation}><a value="COLS">Coliseum</a></li>
							    <li onClick={this.setWorkStation}><a value="COLM">Colma</a></li>
							    <li onClick={this.setWorkStation}><a value="CONC">Concord</a></li>
							    <li onClick={this.setWorkStation}><a value="DALY">Daly City</a></li>
							    <li onClick={this.setWorkStation}><a value="DBRK">Downtown Berkeley</a></li>
							    <li onClick={this.setWorkStation}><a value="DUBL">Dublin/Pleasanton</a></li>
							    <li onClick={this.setWorkStation}><a value="DELN">El Cerrito del Norte</a></li>
							    <li onClick={this.setWorkStation}><a value="PLZA">El Cerrito Plaza</a></li>
							    <li onClick={this.setWorkStation}><a value="EMBR">Embarcadero</a></li>
							    <li onClick={this.setWorkStation}><a value="FRMT">Fremont</a></li>
							    <li onClick={this.setWorkStation}><a value="FTVL">Fruitvale</a></li>
							    <li onClick={this.setWorkStation}><a value="GLEN">Glen Park</a></li>
							    <li onClick={this.setWorkStation}><a value="HAYW">Hayward</a></li>
							    <li onClick={this.setWorkStation}><a value="LAFY">Lafayette</a></li>
							    <li onClick={this.setWorkStation}><a value="LAKE">Lake Merritt</a></li>
							    <li onClick={this.setWorkStation}><a value="MCAR">MacArthur</a></li>
							   	<li onClick={this.setWorkStation}><a value="MLBR">Millbrae</a></li>
							    <li onClick={this.setWorkStation}><a value="MONT">Montgomery St.</a></li>
							    <li onClick={this.setWorkStation}><a value="NBRK">North Berkeley</a></li>
							    <li onClick={this.setWorkStation}><a value="NCON">North Concord/Martinez</a></li>
							    <li onClick={this.setWorkStation}><a value="OAKL">Oakland Intl Airport</a></li>
							    <li onClick={this.setWorkStation}><a value="ORIN">Orinda</a></li>
							   	<li onClick={this.setWorkStation}><a value="PITT">Pittsburg/Bay Point</a></li>
							    <li onClick={this.setWorkStation}><a value="PHIL">Pleasant Hill/Contra Costa Centre</a></li>
							    <li onClick={this.setWorkStation}><a value="POWL">Powell St.</a></li>
							    <li onClick={this.setWorkStation}><a value="RICH">Richmond</a></li>
							    <li onClick={this.setWorkStation}><a value="ROCK">Rockridge</a></li>
							    <li onClick={this.setWorkStation}><a value="SBRN">San Bruno</a></li>
							   	<li onClick={this.setWorkStation}><a value="SFIA">San Francisco Intl Airport</a></li>
							    <li onClick={this.setWorkStation}><a value="SANL">San Leandro</a></li>
							    <li onClick={this.setWorkStation}><a value="SHAY">South Hayward</a></li>
							    <li onClick={this.setWorkStation}><a value="SSAN">South San Francisco</a></li>
							    <li onClick={this.setWorkStation}><a value="UCTY">Union City</a></li>
							    <li onClick={this.setWorkStation}><a value="WCRK">Walnut Creek</a></li>
							   	<li onClick={this.setWorkStation}><a value="WDUB">West Dublin/Pleasanton</a></li>
							    <li onClick={this.setWorkStation}><a value="WOAK">West Oakland</a></li>
							  </ul>
							  <h6 id="cookies-warning">{this.state.greeting}</h6>
							</div>
						</div>
				  </div>
				</div>
				<button onClick={this.handleSubmit} type="button" className="btn btn-success">Done</button>
			</div>
		)
	}
});

module.exports = Welcome;