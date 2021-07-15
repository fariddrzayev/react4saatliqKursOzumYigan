import React from 'react'
import blue from '@material-ui/core/colors/blue';
import { withStyles } from '@material-ui/core/';

const style = {
    sideMenu: {
      width: '320px',
      height: '100%',
      backgroundColor: '#253053',
      position: 'absolute',
      left: '0px',
      display: 'flex',
        flexDirection: 'column',
    }
}

// const SideMenu = props => (

// )

function SideMenu(props) {
    const {classes} = props

    return (
        <div className={classes.sideMenu}>
        </div>
    )
}
// const SideMenu = (props) => {
//     const {classes} = props
//     return (
//         <div className={classes.sideMenu}>
//             sdfd
//         </div>
//     )
// }


export default withStyles(style)(SideMenu)
