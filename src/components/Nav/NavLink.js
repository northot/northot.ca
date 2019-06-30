import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Link } from "gatsby"

const useStyles = makeStyles(theme => ({
  root: {
    fontFamily: "Oswald",
    fontSize: 18,
    padding: "0 13px 0",
    margin: "0 13px 0",
    textDecoration: "none",
    textTransform: "uppercase",
    color: theme.palette.common.white,
  },
}))

const NavLink = ({
  external,
  path,
  to,
  active: propActive,
  variant,
  children,
}) => {
  const active = propActive || to === path
  const classes = useStyles()

  if (external) {
    return (
      <a href={to} className={classes.root}>
        {children}
      </a>
    )
  }

  return (
    <Link to={to} className={classes.root}>
      {children}
    </Link>
  )
}

export default NavLink
