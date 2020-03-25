import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Drawer from '../Drawer'
import DrawerContext from '../../utils/DrawerContext'
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

const Navbar = () => {
  const classes = useStyles()

  const [drawerState, setDrawerState] = useState({
    open: false
  })

  drawerState.toggleDrawer = open => {
    setDrawerState({ open })
  }

  return (
    <DrawerContext.Provider value = {drawerState}>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon 
                onClick = { () => setDrawerState({open: true})}
              />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Book Search
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer />
    </div>
  </DrawerContext.Provider>
  )
}

export default Navbar