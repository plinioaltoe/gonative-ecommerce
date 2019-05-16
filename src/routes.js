import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Products from '~/pages/Products'
import ProductDetails from '~/pages/ProductDetails'
// import Repositories from "~/pages/Issues";

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Products,
      ProductDetails,
    },
    {
      initialRouteName: 'Products',
    }
  )
)

export default Routes
