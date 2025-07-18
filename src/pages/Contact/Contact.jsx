import { DefaultMotion } from "../../atoms/Motion/CustomMotion";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./Contact.scss";
import { ABOUT } from "../constants";
const Contact = () => {
    const handlePhoneClick = () => {
            window.open(`tel:${ABOUT.PHONE.link}`, "_blank");
        }
        const handleLinkedInClick = () => {
            window.open(ABOUT.LINKEDIN.link, "_blank");
        }
        const handleMailClick = () => {
            window.open(`mailto:${ABOUT.GMAIL.link}`, "_blank");
        }

        const handleGithubClick = () => {
            window.open(ABOUT.GITHUB.link, "_blank");
        }
  return (
    <DefaultMotion>
        <Box className="contact-main-container">
            <Box className="box-wrapper">
                <Typography className="header-text">Contact</Typography>
                <Box mt="50px" ml="10%" width="100%" display="grid" gridTemplateColumns="auto auto" gap="30px 22px">
                    {/* Phone No */}
                    <Box onClick={handlePhoneClick} className="cursor" display="flex" alignItems="center" gap="8px">
                        <Box className="icon-container">
                            <img height="20px" src="/images/phone-icon.svg" alt="phone"/>
                        </Box>
                        <Typography className="contact-text">+91 7266880340</Typography>    
                    </Box>

                     {/* Email Id */}
                    <Box onClick={handleMailClick} className="cursor" display="flex"  alignItems="center" gap="8px">
                        <Box className="icon-container">
                            <img height="20px" src="/images/email-icon.svg" alt="phone"/>
                        </Box>
                        <Typography className="contact-text">codewithgyan@gmail.com</Typography>    
                    </Box>
                   
                     {/* Github */}
                    <Box onClick={handleGithubClick} className="cursor" display="flex"  alignItems="center" gap="8px">
                        <Box className="icon-container">
                            <img height="20px" src="/images/github-icon.svg" alt="phone"/>
                        </Box>
                        <Typography className="contact-text">Github</Typography>    
                    </Box>
                    
                     {/* Linkedin */}
                    <Box onClick={handleLinkedInClick} className="cursor" display="flex"  alignItems="center" gap="8px">
                        <Box className="icon-container">
                            <img height="20px" src="/images/linkedin-icon.svg" alt="phone"/>
                        </Box>
                        <Typography className="contact-text">LinkedIn</Typography>    
                    </Box>
                </Box>
            </Box>
        </Box>        
    </DefaultMotion>
  )
};

export default Contact;
