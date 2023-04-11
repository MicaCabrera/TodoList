import { extendTheme } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'

const colors = {
  brand: {
    primary: '#DDC8C4',
    secondary: '#A167A5', 
    accent: '#79B791', //verde 
    air:'#BFCAD6'
  },
}

export const theme = extendTheme({ colors })