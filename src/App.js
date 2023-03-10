import React from "react";
import Header from "./component/header/header";
import Footer from "./component/footer/footer";
import Alert from "./component/alert/alert";
import "./css/styles.css";
// import "./css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import MyRoute from "./component/Route/MyRoute";
function App() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Alert />
				
				<MyRoute />

				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
