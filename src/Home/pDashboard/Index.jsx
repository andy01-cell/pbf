import * as React from "react";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import Navdrawer from "../Navdrawer";
import { Route, useHistory } from "react-router";


{
  /* <drawerWidth/> */
}
{
  /* <Navdrawer/> */
}
// const DrawerHeader1 = Navdrawer.props.DrawerHeader(); 

const Index = () => {
  // const [open, setOpen] = react.useState(false);
  // const [open, setOpen] = React.useState(false);

  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };
  let token = localStorage.getItem("token_login");

  return (
    <div>
      <CssBaseline />
      {/* <Main> */}
      {/* <DrawerHeader/> */}
      <Typography paragraph>{token}</Typography>
      <Typography paragraph>
        Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
        ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar elementum
        integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi
        lacus sed viverra tellus. Purus sit amet volutpat consequat mauris.
        Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
        vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra
        accumsan in. In hendrerit gravida rutrum quisque non tellus orci ac.
        Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique
        senectus et. Adipiscing elit duis tristique sollicitudin nibh sit.
        Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra
        maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin
        aliquam ultrices sagittis orci a.

      </Typography>
      {/* </Main> */}
    </div>
  );
};

export default Index;
