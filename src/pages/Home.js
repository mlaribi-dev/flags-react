import Countries from "../components/Countries";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import React  from 'react';

const Home = () => {
	return (
		<div className="home">
			<Navigation/>
			<Logo/>
			<Countries/>
		</div>
	)
}

export default Home;