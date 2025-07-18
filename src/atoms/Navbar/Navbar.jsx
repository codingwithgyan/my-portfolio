import { Box, Typography } from "@mui/material";
import "./Navbar.scss";
import { NAVBAR_ITEM_LIST } from "../../pages/constants";
import arrowIcon from "../../assets/images/arrow.svg";
const NavbarLink = ({item}) => {
    const {label, link, key} = item;
    return (
        <Box className="content-wrapper">
            <Typography className="text">{label}</Typography>
            <Box className="arrow">&#8963;</Box>
        </Box>
    )
}

const Navbar = () => {
     const handleResume = () => {
        window.open("https://drive.google.com/file/d/10F1oJ6p3vLtQgiwD6dy9PUJ7rC48TYhT/view?usp=sharing", "_blank");
    }
    return <Box className="navbar-main-container">
                <Box>
                    {/* LOGO */}
                    <Box borderRadius="12px"><img height="40px" src="/logo.png"/></Box>
                </Box>
                <Box className="navbar-content-main-wrapper">
                    {/* Navbar links */}
                    {NAVBAR_ITEM_LIST.map((item, index) => {
                        return <NavbarLink key={index} item={item}/>
                    })}
                </Box>
                <Box>
                    {/* Lets Talk */}
                    <Box onClick={handleResume} className="lets-talk-wrapper">
                        <Box className="arrow-main-wrapper">
                            <Box className="inner-arrow-1">
                                <img src={arrowIcon}/>
                            </Box>
                            <Box className="inner-arrow-2">
                                <img src={arrowIcon}/>
                            </Box>
                        </Box>
                    </Box>
                </Box>
    </Box>
}
export default Navbar;