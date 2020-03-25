import {createContext} from 'react'

const DrawerContext = createContext({
  open: false,
  toggleDrawer: () => {}
})

export default DrawerContext