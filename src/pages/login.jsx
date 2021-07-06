import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import AppIcon from "../images/icon.png";

/* MUI stuff */
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const styles = {
	form: {
		textAlign: "center",
	},
	AppIcon: {
		width: "4em",
		height: "4em",
	},
};

class login extends Component {
	state = {};
	render() {
		const { classes } = this.props;
		return (
			<Grid container className={classes.form}>
				<Grid item sm />
				<Grid
					item
					sm
					style={{ display: "flex", justifyContent: "space-evenly" }}>
					<img src={AppIcon} alt="App Icon" className={classes.AppIcon} />
					<Typography variant="h2" className={classes.pageTitle}>
						Login
					</Typography>
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
