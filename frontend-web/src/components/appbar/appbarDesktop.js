import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { AppbarContainer, AppbarHeader, AppbarList } from "../../styles/appbar";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./actions";

export default function AppbarDesktop({matches}){


    return (
        /*
                Appbar Container
                Header
                List
        */
       <AppbarContainer>
            <AppbarHeader>
                Hitchify
            </AppbarHeader>
            <AppbarList type = "row">
                <ListItemText primary="Home"/>
                <ListItemText primary="Activity"/>
                <ListItemText primary="Get Ride"/>
                <ListItemText primary="Post Ride"/>
                <ListItemText primary="Support"/>
                <ListItemText primary="About"/>
                <ListItemButton>
                    <ListItemIcon>
                        <SearchIcon/>
                    </ListItemIcon>
                </ListItemButton>
            </AppbarList>
            <Actions matches={matches}/>
            
       </AppbarContainer>

    );
    
}