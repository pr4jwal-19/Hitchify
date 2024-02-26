import { Divider, ListItemButton, ListItemIcon } from "@mui/material";
import {
  ActionIconContainerDesktop,
  ActionIconContainerMobile,
  AppbarList,
} from "../../styles/appbar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Colors } from "../../styles/themes";

export default function Actions({matches}) {

  const Component = matches
    ? ActionIconContainerMobile
    : ActionIconContainerDesktop;

  return (
    <Component>
      <AppbarList type="row">
        <ListItemButton sx={{ justifyContent: "center" }}>
          <ListItemIcon sx={{ display: "flex", justifyContent: "center", color: matches && Colors.dark }}>
            <FavoriteIcon />
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
        <ListItemButton sx={{ justifyContent: "center" }}>
          <ListItemIcon sx={{ display: "flex", justifyContent: "center", color: matches && Colors.dark }}>
            <AccountCircleIcon />
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
      </AppbarList>
    </Component>
  );
}
