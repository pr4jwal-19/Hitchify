import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../themes";

export const BannerContainer = styled(Box)(({theme}) => ({

    display: 'flex',
    /* choice: justifyContent: 'flex-start' */
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    padding: '0px 0px',
    background: Colors.secondary,
    [theme.breakpoints.down("sm")] : {
        flexDirection: 'column',
        alignItems: 'center'
    }

}));

export const BannerContent = styled(Box)(() => ({

    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    maxWidth: 420,
    padding: '30px'

}));

export const BannerImage = styled('img')(({src,theme}) => ({

    src: 'url(&{src})',
    width: '600px',
    [theme.breakpoints.down("md")] : {
        width: '350px'
    },
    [theme.breakpoints.down("sm")] : {
        width: '320px',
        height: '300px'
    }

}));

export const BannerTitle = styled(Typography)(({theme}) => ({

    lineHeight: 1,
    fontSize: '68px',
    marginBottom: '20px',
    [theme.breakpoints.down("sm")] : {
        fontSize: '42px'
    }

}));

export const BannerDescription = styled(Typography)(({theme}) => ({

    lineHeight: 1.25,
    letterSpacing: 1.25,
    marginBottom: '3em',
    [theme.breakpoints.down("md")] : {
        lineHeight: 1.15,
        letterSpacing: 1.15,
        marginBottom: '1.5em'
    }

}));