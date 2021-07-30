import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import jwtDecode from "jwt-decode";
import axios from "axios";

/* Redux stuff */
import { Provider } from "react-redux";
import store from "./redux/strore";
import { SET_AUTHNTICATED } from "./redux/types";
import { logoutUser, getUserData } from "./redux/actions/userActions";

/* MUI stuff */
//import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import themeObject from "./util/theme";

/* Components */
import Navbar from "./components/Navbar.jsx";
import AuthRoute from "./util/AuthRoute.jsx";
/* Pages */
import home from "./pages/home.jsx";
import login from "./pages/login.jsx";
import signup from "./pages/signup.jsx";

const theme = createMuiTheme(themeObject);

const token = localStorage.FBIdToken;
if (token) {
	const decodedToken = jwtDecode(token);
	console.log(decodedToken);
	if (decodedToken.exp * 1000 < Date.now()) {
		store.dispatch(logoutUser());
		window.location.href = "/login";
	} else {
		store.dispatch({ type: SET_AUTHNTICATED });
		axios.defaults.headers.common["Authorization"] = token;
		store.dispatch(getUserData());
	}
}

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<MuiThemeProvider theme={theme}>
					<div className="App">
						<Router>
							<Navbar />
							<div className="container">
								<Switch>
									<Route exact path="/" component={home} />
									<AuthRoute path="/login" component={login} />
									<AuthRoute path="/signup" component={signup} />
								</Switch>
							</div>
						</Router>
					</div>
				</MuiThemeProvider>
			</Provider>
		);
	}
}

export default App;
