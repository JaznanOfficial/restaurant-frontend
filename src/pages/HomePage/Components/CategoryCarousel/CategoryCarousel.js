import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { Box, IconButton } from "@mui/material";

const CategoryCarousel = () => {
    const sliderRef = useRef()
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const prev = () => {
        sliderRef.current.slickPrev()
    }
    const next = () => {
        sliderRef.current.slickNext()
    }
    return (
        <div>
            
            <Slider {...settings} ref={sliderRef}>
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
                <div>
                    <h3>7</h3>
                </div>
                <div>
                    <h3>8</h3>
                </div>
            </Slider>

            <Box sx={{mt:"20px"}} >
            <IconButton
                sx={{
                    my: "10px",
                    p: "10px",
                    borderRadius: "50%",
                }}
                color="secondary"
                variant="text"
                size="large"
                    type="submit"
                    onClick={prev}
            >
                <NavigateBeforeIcon />
            </IconButton>
            <IconButton
                sx={{
                    my: "10px",
                    p: "10px",
                    borderRadius: "50%",
                }}
                color="secondary"
                variant="text"
                size="large"
                    type="submit"
                    onClick={next}
            >
                <NavigateNextIcon />
            </IconButton>
            </Box>
        </div>
    );
};

export default CategoryCarousel;
