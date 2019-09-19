import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MoreIcon from "@material-ui/icons/DashboardOutlined";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { withRouter } from "next/router";
import Link from "../../Link";
import TopNav from "./components/topNav";





const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  head: {
    borderRight: "1px solid",
    textDecoration: "none",
    fontSize: 12,
    // padding: 5,
    color: "grey"
  },
  heads: {
    marginLeft: 10,
    padding: 5,
    background: "#014086"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      alignItems: "center"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  img: {
    width: 150
  },
  IconButton: {
    padding: 5
  }
}));



 function PrimarySearchAppBar(props) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(true);

  function handleOpenBottom () {
    setOpen(!open)
  }

  const handleLogin = () => {
    const { router  } = props
    router.push('/login');
  }

  const handleSignUp  = () => {
    const { router  } = props
    router.push('/signup');
  } 

  return (
    <div className={classes.grow}>
      {/* <AppBar position="static"> */}
      <Container component="main" maxWidth="lg">
        <Toolbar>
          <img src="/static/images/logo-main.png" className={classes.img} />
          <div className={classes.grow} />
          <Button onClick={handleLogin} variant="text" color="primary">
            Log In
          </Button>
          <Button onClick={handleSignUp} style={{ borderRadius: 20, width: 100, height: 40 }} variant="contained" color="secondary">
            Sign Up
          </Button>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              className={classes.IconButton}
              // aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleOpenBottom}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
        {/* </AppBar> */}
      </Container>
      <TopNav open={open} />
      {/* {renderMobileMenu}
      {renderMenu} */}
    </div>
  );
}

export default withRouter(PrimarySearchAppBar);











{/* <div className={classes.sectionDesktop}>
  <Link className={classes.head} variant="text" color="inherit">
              About Us
            </Link>
            <Link className={classes.head} variant="text" color="inherit">
              Sustainable Banking
            </Link>
            <Link className={classes.head} variant="text" color="inherit">
              Investor Relaations
            </Link>
            <Link className={classes.head} variant="text" color="inherit">
              Media
            </Link>
            <Link className={classes.head} variant="text" color="inherit">
              Careers
            </Link>
            <Link className={classes.head} variant="text" color="inherit">
              Branch & ATM Locator
            </Link>
            <Link className={classes.head} variant="text" color="inherit">
              Customer Support
            </Link>
            <Link className={classes.head} variant="text" color="inherit">
              Customer Locations
            </Link>
  <Button className={classes.head} variant="text" color="inherit">
              About Us
            </Button>
            <Button className={classes.head} variant="text" color="inherit">
              Sustainable Banking
            </Button>
            <Button className={classes.head} variant="text" color="inherit">
              Investor Relaations
            </Button>
            <Button className={classes.head} variant="text" color="inherit">
              Media
            </Button>
            <Button className={classes.head} variant="text" color="inherit">
              Careers
            </Button>
            <Button className={classes.head} variant="text" color="inherit">
              Branch & ATM Locator
            </Button>
            <Button className={classes.head} variant="text" color="inherit">
              Customer Support
            </Button>
            <Button className={classes.head} variant="text" color="inherit">
              Customer Locations
            </Button> 
  <Button variant="text" color="primary">
    Log In
  </Button>
  <Button
    style={{ borderRadius: 20, width: 100, height: 50 }}
    variant="contained"
    color="secondary"
  >
    Sign Up
  </Button>
</div>; */}


  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  // const isMenuOpen = Boolean(anchorEl);
  // const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  // function handleProfileMenuOpen(event) {
  //   setAnchorEl(event.currentTarget);
  // }

  // function handleMobileMenuClose() {
  //   setMobileMoreAnchorEl(null);
  // }

  // function handleMenuClose() {
  //   setAnchorEl(null);
  //   handleMobileMenuClose();
  // }

  // function handleMobileMenuOpen(event) {
  //   setMobileMoreAnchorEl(event.currentTarget);
  // }

  // const menuId = "primary-search-account-menu";
  // const renderMenu = (
  //   <Menu
  //     anchorEl={anchorEl}
  //     anchorOrigin={{ vertical: "top", horizontal: "right" }}
  //     id={menuId}
  //     keepMounted
  //     transformOrigin={{ vertical: "top", horizontal: "right" }}
  //     open={isMenuOpen}
  //     onClose={handleMenuClose}
  //   >
  //     <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
  //     <MenuItem onClick={handleMenuClose}>My account</MenuItem>
  //   </Menu>
  // );

  // const mobileMenuId = "primary-search-account-menu-mobile";
  // const renderMobileMenu = (
  //   <Menu
  //     anchorEl={mobileMoreAnchorEl}
  //     anchorOrigin={{ vertical: "top", horizontal: "right" }}
  //     id={mobileMenuId}
  //     keepMounted
  //     transformOrigin={{ vertical: "top", horizontal: "right" }}
  //     open={isMobileMenuOpen}
  //     onClose={handleMobileMenuClose}
  //   >
  //     <MenuItem>
  //       <IconButton aria-label="show 4 new mails" color="inherit">
  //         <Badge badgeContent={4} color="secondary">
  //           <MailIcon />
  //         </Badge>
  //       </IconButton>
  //       <p>Messages</p>
  //     </MenuItem>
  //     <MenuItem>
  //       <IconButton aria-label="show 11 new notifications" color="inherit">
  //         <Badge badgeContent={11} color="secondary">
  //           <NotificationsIcon />
  //         </Badge>
  //       </IconButton>
  //       <p>Notifications</p>
  //     </MenuItem>
  //     <MenuItem onClick={handleProfileMenuOpen}>
  //       <IconButton
  //         aria-label="account of current user"
  //         aria-controls="primary-search-account-menu"
  //         aria-haspopup="true"
  //         color="inherit"
  //       >
  //         <AccountCircle />
  //       </IconButton>
  //       <p>Profile</p>
  //     </MenuItem>
  //   </Menu>
  // );