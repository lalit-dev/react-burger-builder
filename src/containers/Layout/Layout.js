import React, { Component } from 'react';

import classes from "./Layout.css"

import Aux from './../../hoc/Auxiliary/auxiliary';
import Toolbar from "../../components/Navigation/Toolbar/Toolbar"; 
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    closeSideDrawer = () => {
        console.log("[ closeSideDrawer ]");
        this.setState({showSideDrawer: false});
    }

    toggleDrawer = () => {
        console.log("[ toggleDrawer ]");
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer}
        });
    }

    render () {
        return(
            <Aux>
                <Toolbar toggleDrawer = {this.toggleDrawer}/>
                <SideDrawer
                    show = {this.state.showSideDrawer}
                    closed = {this.closeSideDrawer} />
                <main className={classes.content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
    
}

export default Layout;