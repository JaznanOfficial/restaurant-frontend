import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { Box, Container, IconButton, Typography } from "@mui/material";

const CategoryCarousel = () => {
    const sliderRef = useRef();
    const settings = {
        
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    initialSlide: 0,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const prev = () => {
        sliderRef.current.slickPrev();
    };
    const next = () => {
        sliderRef.current.slickNext();
    };
    return (
        <Box style={{ display: "flex", justifyContent:"center", alignItems:"center", borderBottom:"1px solid #d3d0c6", padding:"10px"}}>
            <Box sx={{ mt: "20px" }} className="sm-display-none">
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
            </Box>
            <Box style={{  width: "90%", margin:"0 auto" }}>
                <Slider {...settings} ref={sliderRef}>
                    {Array.from({ length: 15 }).map(() => {
                        
                       return <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                width: "50%",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <img
                                    src="https://klbtheme.com/groci/wp-content/uploads/2018/08/1-4-62x62.jpg"
                                    alt=""
                                    width="80px"
                                    style={{ textAlign: "center" }}
                                />
                            </div>
                            <Typography variant="h6" style={{ margin: "0px", display: "inline" }}>
                                Vegetable
                            </Typography>{" "}
                            <br />
                            <Typography variant="caption" style={{ margin: "0px" }}>
                                12 items
                            </Typography>
                        </div>
                    })}
                    
                </Slider>
            </Box>
            <Box sx={{ mt: "20px" }} className="sm-display-none">
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
        </Box>
    );
};

export default CategoryCarousel;
