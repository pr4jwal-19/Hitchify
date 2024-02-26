import { createTheme } from "@mui/material/styles";

export const Colors = {
    primary : "#0D0D0D",
    secondary : "#DEE9FF",
    accent : "#1364FF",
    accent_hover : "#1053D4",
    text : "#7A7A7A",
    light_secondary : "#FFFFFF",
    dark : "#202020",
    light : "#EDEDED",
    info_statistics : "#D64779",
    warning : "#F8B12C"
};

const theme = createTheme({

    palette : {
        primary : {
            main : Colors.primary
        },
        secondary: {
            main : Colors.secondary
        }
    }

});

export default theme;