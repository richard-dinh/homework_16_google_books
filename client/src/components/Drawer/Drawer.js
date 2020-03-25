import React, {useContext} from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DrawerContext from '../../utils/DrawerContext'
import MenuBookIcon from '@material-ui/icons/MenuBook';
import SearchIcon from '@material-ui/icons/Search';


const DrawerComponent = () => {
  const {toggleDrawer, open} = useContext(DrawerContext)
  return (
    <Drawer anchor='left' open={open} onClose={ () => toggleDrawer(false)}>
      <List>
        <ListItem>
          <ListItemIcon><SearchIcon /></ListItemIcon>
          <ListItemText primary = {'Search'}/>
        </ListItem>
        <ListItem>
          <ListItemIcon><MenuBookIcon /></ListItemIcon>
          <ListItemText primary = {'Saved'}/>
        </ListItem>
      </List>
    </Drawer>
  )
}

export default DrawerComponent