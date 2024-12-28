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
    return <Box className="navbar-main-container">
                <Box>
                    {/* LOGO */}
                    <Typography className="logo-main">Gya<span>n</span></Typography>
                </Box>
                <Box className="navbar-content-main-wrapper">
                    {/* Navbar links */}
                    {NAVBAR_ITEM_LIST.map(item => {
                        return <NavbarLink item={item}/>
                    })}
                </Box>
                <Box>
                    {/* Lets Talk */}
                    <Box className="lets-talk-wrapper">
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