import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import {
    Avatar,
    Badge,
    Box,
    Button,
    Container,
    IconButton,
    Menu,
    MenuItem,
    TextField,
    Tooltip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import "react-modern-drawer/dist/index.css";
import Drawer from "react-modern-drawer";

// hide navbar on scroll----------------->

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

    // drawer function---------->

    const [isOpen, setIsOpen] = React.useState(false);
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState);
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
                                    <Box
                                        sx={{
                                            display: {
                                                xs: "flex",
                                                md: "none",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                mx: "2",
                                            },
                                        }}
                                    >
                                        <form>
                                            <TextField
                                                id="standard-search"
                                                label="Search here"
                                                type="search"
                                                variant="standard"
                                                sx={{
                                                    mb: "15px",
                                                    ml:"10px",
                                                    width: "100px"
                                                
                                                }}
                                                color="primary"
                                                size="small"
                                                
                                            />
                                            <IconButton
                                                sx={{
                                                    my: "10px",
                                                    p: "10px",
                                                    borderRadius: "50%",
                                                }}
                                                color="secondary"
                                                variant="text"
                                                size="large"
                                                onClick={toggleDrawer}
                                                type="submit"
                                            >
                                                <SearchIcon />
                                            </IconButton>
                                        </form>
                                    </Box>
                                </Menu>
                            </Box>

                            <Box sx={{ display: { xs: "flex", md: "none" } }}>
                                <a href="http://" target="_blank" rel="noopener noreferrer">
                                    <img
                                        src="https://elanta.app/nazar/starbelly-demo/img/ui/logo.svg"
                                        alt="logo"
                                        width={"120px"}
                                    />
                                </a>
                            </Box>
                            <Box
                                sx={{
                                    display: {
                                        xs: "none",
                                        md: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    },
                                }}
                            >
                                <a href="http://" target="_blank" rel="noopener noreferrer">
                                    <img
                                        src="https://elanta.app/nazar/starbelly-demo/img/ui/logo.svg"
                                        alt="logo"
                                        fullWidth
                                    />
                                </a>
                            </Box>
                            <Box
                                sx={{
                                    display: {
                                        xs: "none",
                                        md: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        mx: "2",
                                    },
                                }}
                            >
                                <form>
                                    <TextField
                                        id="standard-search"
                                        label="Search here"
                                        type="search"
                                        variant="standard"
                                        sx={{ mb: "15px" }}
                                        color="primary"
                                    />
                                    <IconButton
                                        sx={{
                                            my: "10px",
                                            p: "10px",
                                            borderRadius: "50%",
                                        }}
                                        color="secondary"
                                        variant="text"
                                        size="large"
                                        onClick={toggleDrawer}
                                        type="submit"
                                    >
                                        <SearchIcon />
                                    </IconButton>
                                </form>
                            </Box>
                            <Box
                                sx={{
                                    display: {
                                        xs: "none",
                                        md: "flex",
                                        justifyContent: "center",
                                        mx: "2",
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

                            <Box>
                                <IconButton
                                    sx={{
                                        margin: { sm: "0 5px", md: "10px" },
                                        p: "10px",
                                        borderRadius: "50%",
                                    }}
                                    color="secondary"
                                    variant="text"
                                    size="large"
                                >
                                    <Badge badgeContent={4} color="primary">
                                        <LocalMallOutlinedIcon fontSize="inherit" />
                                    </Badge>
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
                                <IconButton
                                    sx={{
                                        margin: { sm: "0 5px", md: "10px" },
                                        p: "10px",
                                        borderRadius: "50%",
                                    }}
                                    color="secondary"
                                    variant="text"
                                    size="large"
                                    onClick={toggleDrawer}
                                >
                                    {!isOpen ? (
                                        <MoreVertIcon fontSize="inherit" />
                                    ) : (
                                        <CloseIcon fontSize="inherit" />
                                    )}
                                </IconButton>
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
            </HideOnScroll>
            <Toolbar />
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction="right"
                className="bla bla bla"
                size="380px"
            >
                <div style={{ position: "relative", top: 100 }}>Hello World</div>
            </Drawer>
        </React.Fragment>
    );
};

export default Navbar;
