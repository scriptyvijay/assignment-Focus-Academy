import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import InfiniteScroll from "react-infinite-scroll-component";

// Styled Components for Home
const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100vw;
	${"" /* height: 100vh; */}
	padding: 20px;
	gap: 18px;
	overflow-y: scroll;
	overflow-x: hidden;
	img {
		width: 100px;
		height: 100px;
	}
	.loader {
		color: #fff;
	}
	p {
		font-size: 20px;
		color: white;
	}
	.contact {
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 300px;
		height: 120px;
		gap: 20px;
		div {
			.email {
				font-size: 0.8rem;
			}
		}
	}
`;

// Home Page
const Home = (props) => {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch("https://randomuser.me/api?results=10")
			.then((res) => res.json())
			.then((res) => {
				setData(res.results);
			});
	}, []);

	const fetchMoreData = () => {
		fetch("https://randomuser.me/api?results=10")
			.then((res) => res.json())
			.then((res) => {
				setData([...data, ...res.results]);
			});
	};

	return (
		<>
			<Navbar loggedIn={props.loggedIn} setLoggedIn={props.setLoggedIn} />
			{/* Infinite Scroll Lib component */}
			<InfiniteScroll dataLength={data.length} next={fetchMoreData} hasMore={true} loader={<h4>Loading...</h4>}>
				<Container>
					{data.map((item, key) => (
						<div key={key} className="contact">
							<img src={item.picture.large || <Skeleton />} alt="avatar" />
							<div>
								<p>{item.name.first + " " + item.name.last || <Skeleton />}</p>
								<p className="email">{item.email || <Skeleton />}</p>
								<p>{item.phone || <Skeleton />}</p>
							</div>
						</div>
					))}
				</Container>
			</InfiniteScroll>
		</>
	);
};

export default Home;
