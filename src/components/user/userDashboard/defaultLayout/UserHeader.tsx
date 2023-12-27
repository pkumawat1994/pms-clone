import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ComponentIndex from '../../../ComponentIndex';
import Fade from '@mui/material/Fade';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../../redux/store';
import { employeeLogOut } from '../../../../redux/AllSlices/authSlices/AuthSlice';
import { toast } from 'react-toastify';

const drawerWidth = 240;



interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,

  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  backgroundColor: "orange",
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));


const UserHeader = ({ open, handleDrawerOpen }: any) => {

 
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const profileOpen = Boolean(anchorEl);
  let navigate=useNavigate();
  let dispatch=useAppDispatch()
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleNavigateProfile=(navigateDestination:string)=>{
    if(navigateDestination=="profile"){

      navigate("/user/dashboard/employee-update-profile")
      handleClose()
    }

    if(navigateDestination=="logout"){
      handleClose()
dispatch(employeeLogOut())
toast.success("logout successfully")
     navigate("/")
    
    }
  }
    

  

 
const handleChangePassword=()=>{
  navigate("/user/dashboard/employee-change-password")
  handleClose();
}
  
  return (
    <>
      <AppBar position="fixed" open={open} sx={{ backgroundColor: '#192a56' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <ComponentIndex.Box className="user-panal-section">
            <Typography variant="h6" noWrap component="div">
              User Dashboard
            </Typography>
            <div>
      <ComponentIndex.Button
        id="fade-button"
        variant='contained'
        aria-controls={profileOpen ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={profileOpen ? 'true' : undefined}
        onClick={handleClick}
      >
        Profile
      </ComponentIndex.Button>
      <ComponentIndex.Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={profileOpen}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <ComponentIndex.MenuItem onClick={()=>handleNavigateProfile("profile")}>Profile</ComponentIndex.MenuItem>
        <ComponentIndex.MenuItem onClick={handleClose}>My account</ComponentIndex.MenuItem>
        <ComponentIndex.MenuItem onClick={handleChangePassword}>Change Password</ComponentIndex.MenuItem>


        <ComponentIndex.MenuItem onClick={()=>handleNavigateProfile("logout")}>Logout</ComponentIndex.MenuItem>
      </ComponentIndex.Menu>
    </div>

          </ComponentIndex.Box>



        </Toolbar>

      </AppBar>
    </>
  )
}

export default UserHeader