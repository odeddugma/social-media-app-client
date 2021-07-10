import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import jwtDecode from "jwt-decode";

/* Redux */
import { Provider } from "react-redux";
import store from "./redux/strore";

/* MUI stuff */
//import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import themeFile from "./util/theme";

/* Components */
import Navbar from "./components/Navbar.jsx";
import AuthRoute from "./util/AuthRoute.jsx";
/* Pages */
import home from "./pages/home.jsx";
import login from "./pages/login.jsx";
import signup from "./pages/signup.jsx";

const theme = createMuiTheme(themeFile);

let authenticated;
const token = localStorage.FBIdToken;
/* if (token) {
  const decodedToken = jwtDecode(token);
  console.log(decodedToken);
  if (decodedToken.exp * 1000 < Date.now()) {
    window.location.href = "/login";
    authenticated = false;
  } else {
    authenticated = true;
  }
} */

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
									<AuthRoute
										path="/login"
										component={login}
										authenticated={authenticated}
									/>
									<AuthRoute
										path="/signup"
										component={signup}
										authenticated={authenticated}
									/>
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
