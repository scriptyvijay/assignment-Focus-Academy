import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";

const App = () => {
	const [loggedIn, setLoggedIn] = useState(false);
	return (
		<BrowserRouter>
			<Routes>
				<Route path="assignment-Focus-Academy/" element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
				<Route path="assignment-Focus-Academy/home" element={loggedIn ? <Home loggedIn={loggedIn} setLoggedIn={setLoggedIn} /> : <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
