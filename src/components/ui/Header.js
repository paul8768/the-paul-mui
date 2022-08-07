import React from "react";
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  makeStyles,
  Tabs,
  Tab,
} from "@material-ui/core";

import companyLogo from "../..//assets/logo.svg";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
  },
  logo: {
    height: "7rem",
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
  },
}));

const Header = () => {
  const { toolbarMargin, logo, tabContainer, tab } = useStyles();

  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar disableGutters>
            <img alt="company logo" className={logo} src={companyLogo} />
            <Tabs className={tabContainer}>
              <Tab className={tab} label="HOME" />
              <Tab className={tab} label="SERVICES" />
              <Tab className={tab} label="THE REVOLUTION" />
              <Tab className={tab} label="ABOUT US" />
              <Tab className={tab} label="CONTACT US" />
            </Tabs>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={toolbarMargin} />
    </>
  );
};

export default Header;
