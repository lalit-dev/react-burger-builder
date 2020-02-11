import React from "react";
import PropTypes from "prop-types";

import classes from "./SideDrawer.css";
import NavigationItems from "./../NavigationItems/NavigationItems";
import Logo from "./../../Logo/Logo";
import Backdrop from "./../../UI/Backdrop/Backdrop";
import Aux from "./../../../hoc/auxiliary";
const sideDrawer = (props) => {
    console.log("[ sideDrawer ]", props);
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if(props.show){
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

    return (
        <Aux>
            <Backdrop 
                show = {props.show}
                clicked = {props.closed}/>
            <div className = {attachedClasses.join(' ')}>
                <div className = {classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div> 
        </Aux>
    );
}

sideDrawer.propTypes = {
    show: PropTypes.bool,
    closed: PropTypes.func.isRequired
}

export default sideDrawer;