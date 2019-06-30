import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";

const useStyles = makeStyles(theme => ({
  section: {
    padding: "5rem 0",
  },
  container: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  "section-primary": {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  "section-secondary": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
}));

const Section = ({ children, noContainer, color = "primary" }) => {
  const classes = useStyles();
  const Wrapper = noContainer ? "div" : Container;

  return (
    <section
      className={classNames(classes.section, classes[`section-${color}`])}
    >
      <Wrapper maxWidth="md" className={classes.container}>
        {children}
      </Wrapper>
    </section>
  );
};

export default Section;
