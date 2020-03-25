import React, {useContext} from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DrawerContext from '../../utils/DrawerContext'
import MenuBookIcon from '@material-ui/icons/MenuBook';
import SearchIcon from '@material-ui/icons/Search';
import {Link} from 'react-router-dom'

const DrawerComponent = () => {
  const { toggleDrawer, open, handleButtonClick} = useContext(DrawerContext)
  return (
    <Drawer anchor='left' open={open} onClose={ () => toggleDrawer(false)}>
      <List>
        <Link to = '/'>
          <ListItem button onClick = {handleButtonClick}>
            <ListItemIcon><SearchIcon /></ListItemIcon>
            <ListItemText primary = {'Search'}/>
          </ListItem>
        </Link>
        <Link to='/saved'>
          <ListItem button onClick={handleButtonClick}>
            <ListItemIcon><MenuBookIcon /></ListItemIcon>
            <ListItemText primary = {'Saved'}/>
          </ListItem>
        </Link>
      </List>
    </Drawer>
  )
}

export default DrawerComponent