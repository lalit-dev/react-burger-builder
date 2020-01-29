import React from 'react';

import classes from "./Layout.css"

import Aux from '../../hoc/auxiliary';
import Toolbar from "./../../components/Navigation/Toolbar/Toolbar"; 

const layout = (props) => {
    return (
        <Aux>
            <Toolbar />
            <main className={classes.content}>
                {props.children}
            </main>
        </Aux>
    )
}

export default layout;