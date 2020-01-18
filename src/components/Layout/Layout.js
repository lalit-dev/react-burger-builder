import React from 'react';

import classes from "./Layout.css"

import Aux from '../../hoc/auxiliary'

const layout = (props) => {
    return (
        <Aux>
            <div>toolbar, sidebar, backdrop</div>
            <main className={classes.content}>
                {props.children}
            </main>
        </Aux>
    )
}

export default layout;