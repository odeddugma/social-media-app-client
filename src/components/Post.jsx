import React, { Component } from "react";
import { Link } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";

// MUI stuff
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const styles = {
	card: {
		display: "flex",
		marginBottom: 20,
	},
	image: {
		minWidth: 200,
	},
	content: {
		padding: 25,
		objectFit: "cover",
	},
};

class Post extends Component {
	render() {
		const {
			classes,
			post: {
				body,
				createdAt,
				userImage,
				userHandle,
				postId,
				likesCounter,
				commentsCounter,
			},
		} = this.props;

		return (
			<Card className={classes.card}>
				<CardMedia
					image={userImage}
					title="Profile Image"
					className={classes.image}
				/>
				<CardContent className={classes.content}>
					<Typography
						variant="h5"
						component={Link}
						to={`/users/${userHandle}`}
						color="primary">
						{userHandle}
					</Typography>
					<Typography variant="body2" color="textSecondary">
						{createdAt}
					</Typography>
					<Typography variant="body1">{body}</Typography>
				</CardContent>
			</Card>
		);
	}
}

export default withStyles(styles)(Post);