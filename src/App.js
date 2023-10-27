import { Route, Routes } from "react-router";
import { Home } from "./components/Home/Home";
import { Products } from "./components/Products/Products";
import { FAQ } from "./components/FAQ/FAQ";
import { Login } from "./components/Login/Login";
import { Copyright } from "./components/Copyright/Copyright";
import ResponsiveAppBar from "./components/Nav/Nav";
import "./App.css";

function App() {
	return (
		<div className="App">
			<ResponsiveAppBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="Products" element={<Products />} />
				<Route path="FAQ" element={<FAQ />} />
				<Route path="Log In" element={<Login />} />
			</Routes>
			<Copyright />
		</div>
	);
}

export default App;
