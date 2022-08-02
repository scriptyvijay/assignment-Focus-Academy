import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Styled Components for Login

const Container = styled.div`
	display: flex;
	background-color: #fff;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: 93vh;
	padding: 20px;
	gap: 18px;
	label {
		font-size: 20px;
	}
	input {
		width: 280px;
		padding: 10px;
	}
	button {
		width: 280px;
		padding: 10px;
		background-color: black;
		border: none;
		color: white;
	}
`;

// Login Page
const Login = (props) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();
	return (
		<>
			{/* Fake Login username foo password bar */}
			<Navbar loggedIn={props.loggedIn} setLoggedIn={props.setLoggedIn} />
			<Container>
				<label>Username</label>
				<input
					type="text"
					onChange={(e) => {
						setUsername(e.target.value);
					}}
				/>
				<label>Password</label>
				<input
					type="password"
					onChange={(e) => {
						setPassword(e.target.value);
					}}
				/>
				<button
					onClick={() => {
						if (username === "foo" && password === "bar") {
							props.setLoggedIn(true);
							navigate("/home");
						} else {
							alert("Invalid username or password");
						}
					}}
				>
					Login
				</button>
			</Container>
		</>
	);
};

export default Login;
