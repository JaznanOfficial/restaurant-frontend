import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import { Avatar, Box, Button, Container, IconButton, Menu, MenuItem, Tooltip } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function HideOnScroll(props) {
    const { children, window } = props;

    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = (props) => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (
        <React.Fragment>
            <CssBaseline />
            <HideOnScroll {...props}>
                <AppBar sx={{ backgroundColor: "white", py: "15px" }}>
                    <Container maxWidth="lg">
                        <Toolbar disableGutters sx={{ justifyContent: { xs: "space-between" } }}>
                            <Box sx={{ display: { xs: "flex", md: "none" } }}>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleOpenNavMenu}
                                    color="inherit"
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorElNav}
                                    anchorOrigin={{
                                        vertical: "bottom",
                                        horizontal: "left",
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: "top",
                                        horizontal: "left",
                                    }}
                                    open={Boolean(anchorElNav)}
                                    onClose={handleCloseNavMenu}
                                    sx={{
                                        display: { xs: "block", md: "none", mr: "0" },
                                    }}
                                >
                                    {pages.map((page) => (
                                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                                            <Typography textAlign="center">{page}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>

                            <a
                                href="http://"
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    
                                    width:{sm:"50px", xs:"50px"}
                                }}
                            >
                                <img
                                    src="https://elanta.app/nazar/starbelly-demo/img/ui/logo.svg"
                                    alt="logo"
                                    sx={{width:"50px"}}

                                />
                            </a>
                            <Box
                                sx={{
                                    
                                    display: {
                                        xs: "none",
                                        md: "flex",
                                        justifyContent: "center",
                                        mx: "0",
                                    },
                                }}
                            >
                                {pages.map((page) => (
                                    <Button
                                        key={page}
                                        onClick={handleCloseNavMenu}
                                        sx={{
                                            my: 2,
                                            display: "block",
                                            mx: "15px",
                                            textTransform: "none",
                                            fontSize: "15px",
                                            "&:hover": { color: "#F7C532", background: "none" },
                                            "&:focus": { color: "#F7C532", background: "none" },
                                        }}
                                        color="secondary"
                                    >
                                        {page}
                                    </Button>
                                ))}
                            </Box>

                            <Box sx={{
                                display: {
                                sm:"flex"
                            }, flexDirection:"row" }}>
                                <IconButton sx={{mx:"10px", p:"10px", borderRadius:"50%"}} color='secondary' variant="text" size='large' >
                                    <LocalMallOutlinedIcon  fontSize="inherit" />
                                </IconButton>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <Avatar
                                            alt="Remy Sharp"
                                            src="https://pbs.twimg.com/media/EYVxlOSXsAExOpX.jpg"
                                        />
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    sx={{ mt: "45px" }}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: "top",
                                        horizontal: "center",
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: "top",
                                        horizontal: "center",
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    {settings.map((setting) => (
                                        <MenuItem
                                            key={setting}
                                            onClick={handleCloseUserMenu}
                                            sx={{
                                                "&:hover": {
                                                    color: "#F7C532",
                                                    background: "none",
                                                },
                                            }}
                                        >
                                            <Typography
                                                textAlign="center"
                                                color="secondary"
                                                sx={{
                                                    "&:hover": {
                                                        color: "#F7C532",
                                                    },
                                                }}
                                            >
                                                {setting}
                                            </Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                                <IconButton sx={{mx:"10px", p:"10px", borderRadius:"50%"}} color='secondary' variant="text" size='large' >
                                    <MoreVertIcon  fontSize="inherit" />
                                </IconButton>
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
            </HideOnScroll>
            <Toolbar />
        </React.Fragment>
    );
};

export default Navbar;
