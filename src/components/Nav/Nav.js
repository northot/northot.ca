import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
} from "@material-ui/core"
import { fade } from "@material-ui/core/styles/colorManipulator"
import {
  AccountCircle,
  Mail as MailIcon,
  Notifications as NotificationsIcon,
} from "@material-ui/icons"
import { Location } from "@reach/router"
import { Link } from "gatsby"

import NavLink from "./NavLink"
import MenuIcon from "./MenuIcon"

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  toolbar: {
    padding: "0 0 0 12px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      alignItems: "center",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  "appbar-see-through": {
    background: "transparent",
    boxShadow: "none",
  },
  "appbar-primary": {
    backgroundColor: theme.palette.primary.main,
  },
  "appbar-secondary": {
    backgroundColor: theme.palette.common.white,
  },
}))

const positionStates = variant => {
  switch (variant) {
    case "see-through":
      return "fixed"
    default:
      return "static"
  }
}

const PrimaryAppBar = ({ variant = "primary" }) => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  function handleProfileMenuOpen(event) {
    setAnchorEl(event.currentTarget)
  }

  function handleMobileMenuClose() {
    setMobileMoreAnchorEl(null)
  }

  function handleMobileMenuOpen(event) {
    setMobileMoreAnchorEl(event.currentTarget)
  }

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton color="inherit">
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  )

  return (
    <div>
      <AppBar
        position={positionStates(variant)}
        className={classes[`appbar-${variant}`]}
      >
        <Toolbar classes={{ gutters: classes.toolbar }}>
          <div className={classes.sectionDesktop}>
            <Location>
              {({ location }) => (
                <>
                  <NavLink external to="http://slack.northot.ca">
                    Slack
                  </NavLink>
                  <NavLink external to="http://facebook.northot.ca">
                    Facebook
                  </NavLink>
                  <NavLink external to="http://linkedin.northot.ca">
                    LinkedIn
                  </NavLink>
                  <NavLink to="/history">Past Meetups</NavLink>
                </>
              )}
            </Location>
          </div>
          <div className={classes.sectionMobile}>
            <MenuIcon onClick={handleMobileMenuOpen} variant={variant} />
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  )
}

export default PrimaryAppBar
