import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import classNames from "classnames";

const useStyles = makeStyles(theme => ({
  icon: {},
  "variant-primary": {
    color: theme.palette.common.white,
  },
  "variant-secondary": {
    color: theme.palette.primary.main,
  },
}));

const MenuIcon = ({ variant, onClick }) => {
  const classes = useStyles();

  return (
    <IconButton aria-haspopup="true" onClick={onClick} color="inherit">
      <Menu
        className={classNames(classes.icon, classes[`variant-${variant}`])}
      />
    </IconButton>
  );
};

export default MenuIcon;
