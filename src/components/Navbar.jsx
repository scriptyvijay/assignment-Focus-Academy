import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px 20px;
	width: 100vw;

	button {
		background: #fff;
		border: none;
		padding: 8px 15px;
		border-radius: 5px;
		cursor: pointer;
	}
	h1 {
		font-size: 30px;
		font-weight: bold;
		color: #fff;
	}
`;

const Navbar = (props) => {
	const navigate = useNavigate();
	return (
		<Container>
			<h1>Hello</h1>
			<button
				onClick={() => {
					navigate(!props.loggedIn && "/");
					props.setLoggedIn(!props.loggedIn && false);
				}}
			>
				{props.loggedIn ? "Logout" : "Login"}
			</button>
		</Container>
	);
};

export default Navbar;
