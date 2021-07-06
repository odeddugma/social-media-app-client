import React, { Component } from "react";
import { Link } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import AppIcon from "../images/icon.png";
import axios from "axios";

/* MUI stuff */
import {
	Grid,
	Typography,
	TextField,
	Button,
	CircularProgress,
} from "@material-ui/core";
//import { Grid } from "@material-ui/core";
//import { Typography } from "@material-ui/core";
//import { TextField } from "@material-ui/core";
//import { Button } from "@material-ui/core";
//import { CircularProgress } from "@material-ui/core";

const styles = {
	form: { textAlign: "center" },
	AppIcon: {
		width: "4em",
		height: "4em",
	},
	textField: {
		margin: "10px auto",
	},
	button: {
		marginTop: 30,
		marginBottom: 20,
		position: "relative",
	},
	customError: {
		color: "red",
		fontSize: "0.8rem",
		marginTop: 10,
	},
	progress: { position: "absolute" },
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
		this.setState({ loading: true });

		const userData = {
			email: this.state.email,
			password: this.state.password,
		};

		axios
			.post("/login", userData)
			.then((res) => {
				this.setState({
					loading: false,
				});
				this.props.history.push("/");
				console.log(res.data);
			})
			.catch((err) => {
				this.setState({
					loading: false,
					errors: err.response.data,
				});
			});
	};

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	state = {};
	render() {
		const { classes } = this.props;
		const { errors, loading } = this.state;

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
							helperText={errors.email}
							error={errors.email ? true : false}
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
							helperText={errors.password}
							error={errors.password ? true : false}
							value={this.state.password}
							onChange={this.handleChange}
							fullWidth={true}
						/>
						{errors.general && (
							<Typography variant="body2" className={classes.customError}>
								{errors.general}
							</Typography>
						)}
						<Button
							type="submit"
							variant="contained"
							color="primary"
							className={classes.button}
							disabled={loading}>
							Login
							{loading && (
								<CircularProgress
									size={30}
									className={classes.progress}
									color={"secondary"}
								/>
							)}
						</Button>
						<br />
						<small>
							Don't have an account yet?
							<br />
							<Link to="/signup">
								<u>Sign up here</u> for free!
							</Link>
						</small>
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
