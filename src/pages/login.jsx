import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import AppIcon from "../images/icon.png";

/* MUI stuff */
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const styles = {
	form: {
		textAlign: "center",
	},
	AppIcon: {
		width: "4em",
		height: "4em",
	},
	textField: {
		margin: "10px auto",
	},
	button: {
		marginTop: 30,
	},
};

class login extends Component {
	constructor() {
		super();
		this.state = {
			email: "",
			password: "",
			loading: false,
			errors: {},
		};
	}

	handleSubmit = (e) => {
		e.preventDefault();
	};

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
		//console.log(e.target.name);
	};

	state = {};
	render() {
		const { classes } = this.props;
		return (
			<Grid container className={classes.form}>
				<Grid item sm />
				<Grid item sm>
					<div
						style={{
							display: "flex",
							justifyContent: "space-evenly",
							margin: "20px auto",
						}}>
						<img src={AppIcon} alt="App Icon" className={classes.AppIcon} />
						<Typography variant="h2" className={classes.pageTitle}>
							Login
						</Typography>
					</div>
					<form noValidate onSubmit={this.handleSubmit}>
						<TextField
							id="email"
							name="email"
							type="email"
							label="Email"
							className={classes.textField}
							value={this.state.email}
							onChange={this.handleChange}
							fullWidth={true}
						/>

						<TextField
							id="password"
							name="password"
							type="password"
							label="Password"
							className={classes.textField}
							value={this.state.password}
							onChange={this.handleChange}
							fullWidth={true}
						/>
						<Button
							type="submit"
							variant="contained"
							color="primary"
							className={classes.button}>
							Login
						</Button>
					</form>
				</Grid>
				<Grid item sm />
			</Grid>
		);
	}
}

login.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(login);
