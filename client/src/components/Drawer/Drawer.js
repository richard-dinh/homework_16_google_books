import React, {useContext} from 'react'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import DrawerContext from '../../utils/DrawerContext'
import MenuBookIcon from '@material-ui/icons/MenuBook'
import SearchIcon from '@material-ui/icons/Search'
import Divider from '@material-ui/core/Divider'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import UserContext from '../../utils/UserContext'
import {Link} from 'react-router-dom'
import './Drawer.css'

const DrawerComponent = () => {
  const { toggleDrawer, open, handleButtonClick} = useContext(DrawerContext)

  const { handleSignOut } = useContext(UserContext)
  return (
    <Drawer anchor='left' open={open} onClose={ () => toggleDrawer(false)}>
      <List>
        <Link className = 'linkStyle' to = '/'>
          <ListItem button onClick = {handleButtonClick}>
            <ListItemIcon><SearchIcon /></ListItemIcon>
            <ListItemText primary = {'Search'}/>
          </ListItem>
        </Link>
        <Link className='linkStyle' to='/saved'>
          <ListItem button onClick={handleButtonClick}>
            <ListItemIcon><MenuBookIcon /></ListItemIcon>
            <ListItemText primary = {'Saved'}/>
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        <ListItem button onClick={handleSignOut}>
          <ListItemIcon><ExitToAppIcon /></ListItemIcon>
          <ListItemText primary={'Sign Out'} />
        </ListItem>
      </List>
    </Drawer>
  )
}

export default DrawerComponent