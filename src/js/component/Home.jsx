import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import { Button } from "./Button.jsx";
import { Cards } from "./Card.jsx";
import { SegundaCard } from "./SegundaCard.jsx";
import { Alert } from "./Alert.jsx";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Testeando React</h1>
			<Navbar/>
			<Jumbotron />
			<Button />
			<br></br>
			<Cards />
			<br></br>
			<SegundaCard />
			<br></br>
			<Alert />
		</div>
	);
};

export default Home;
