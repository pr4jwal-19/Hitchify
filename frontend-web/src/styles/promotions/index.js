import { Box, Typography, styled } from "@mui/material";
import { Colors } from "../themes";



export const PromotionsContainer = styled(Box)(({theme}) => ({
    [theme.breakpoints.up("md")] : {
        padding: '40px 0px 40px 0px'
    },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px 0px 20px 0px',
    overflow: 'hidden',
    background: Colors.accent
}));

export const MessageText = styled(Typography)(({theme}) => ({

    fontFamily: "Familjen Grotesk",
    [theme.breakpoints.up("md")] : {
        fontSize: '2rem'
    },
    color: Colors.secondary,
    fontSize: '1.3rem'

}));