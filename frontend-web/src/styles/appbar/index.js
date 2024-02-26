import { Box, List, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import '../appbar/font.css';
import { Colors } from "../themes";

/* Appbar Container*/
export const AppbarContainer = styled(Box)(() => ({

    display: "flex",
    marginTop: 4,
    justifyContent: "center",
    alignItems: "center",
    padding: "2px 8px"

}));

/* Appbar Header*/
export const AppbarHeader = styled(Typography)(() => ({

    padding: "4px",
    flexGrow: 1,
    fontSize: "4em",
    fontFamily: '"FamiljenGroteskBold",san-serif',
    color: Colors.accent

}));

/* Appbar List */
export const AppbarList = styled(List)(({type}) => ({

    display: type === 'row' ? 'flex' : 'block',
    flexGrow: 3,
    justifyContent: "center",
    alignItems: "center"

}));

/* Action -> Container for Desktop*/
export const ActionIconContainerDesktop = styled(Box)(() => ({

    flexGrow: 0

}));

/* Action -> Container for Mobile*/
export const ActionIconContainerMobile = styled(Box)(() => ({

    display: 'flex',
    background: Colors.text,
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    alignItems: 'center',
    zIndex: 99,
    borderTop: '1 px solid &{Colors.accent_hover}'

}));