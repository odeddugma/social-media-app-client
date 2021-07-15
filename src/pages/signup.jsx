import React, { Component } from "react";
import { Link } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import AppIcon from "../images/icon.png";

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

/* Redux stuff */
import { connect } from "react-redux";
import { signupUser } from "../redux/actions/userActions";

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

class signup extends Component {
	constructor() {
		super();
		this.state = {
			email: "",
			password: "",
			confirmPassword: "",
			handle: "",
			errors: {},
		};
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.UI.errors) {
			this.setState({ errors: nextProps.UI.errors });
		}
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.setState({ loading: true });

		const newUserData = {
			email: this.state.email,
			password: this.state.password,
			confirmPassword: this.state.confirmPassword,
			handle: this.state.handle,
		};
		this.props.signupUser(newUserData, this.props.history);
	};

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	//state = {};
	render() {
		const {
			classes,
			UI: { loading },
		} = this.props;
		const { errors } = this.state;

		return (
			<Grid container className={classes.form}>
				<Grid item sm />
				<Grid item sm>
					<div
						style={{
							display: "flex",
							justifyContent: "space-evenly",
							margin: "20px auto",
						}}
					>
						<img src={AppIcon} alt="App Icon" className={classes.AppIcon} />
						<Typography variant="h2" className={classes.pageTitle}>
							Signup
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
						<TextField
							id="confirmPassword"
							name="confirmPassword"
							type="password"
							label="Confirm Password"
							className={classes.textField}
							helperText={errors.confirmPassword}
							error={errors.confirmPassword ? true : false}
							value={this.state.confirmPassword}
							onChange={this.handleChange}
							fullWidth={true}
						/>
						<TextField
							id="handle"
							name="handle"
							type="text"
							label="Handle"
							className={classes.textField}
							helperText={errors.handle}
							error={errors.handle ? true : false}
							value={this.state.handle}
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
							disabled={loading}
						>
							Signup
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
							Already have an account?{" "}
							<Link to="/login">
								<u>Login</u>
							</Link>{" "}
							here.
						</small>
					</form>
				</Grid>
				<Grid item sm />
			</Grid>
		);
	}
}

signup.propTypes = {
	classes: PropTypes.object.isRequired,
	user: PropTypes.object.isRequired,
	UI: PropTypes.object.isRequired,
	signupUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	user: state.user,
	UI: state.UI,
});

export default connect(mapStateToProps, { signupUser })(
	withStyles(styles)(signup)
);
