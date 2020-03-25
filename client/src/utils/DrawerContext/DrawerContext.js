import {createContext} from 'react'

const DrawerContext = createContext({
  open: false,
  toggleDrawer: () => {},
  handleButtonClick: () => {}
})

export default DrawerContext