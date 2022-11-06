import React from "react";
import Banner from "./Components/Banner/Banner";
import CategoryCarousel from "./Components/CategoryCarousel/CategoryCarousel";
import Navbar from "./Components/Navigation/Navbar";
import Navigation from './Components/Navigation/Navigation';


const HomePage = () => {
    return (
        <div sx={{position:"relative"}} >
            { <Navbar/> }
           {/*  <Navigation /> */}
            <CategoryCarousel />
            <Banner/>
        </div>
    );
};

export default HomePage;
