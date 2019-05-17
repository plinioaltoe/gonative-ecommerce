import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
} from 'react-navigation'

import Products from '~/pages/Products'
import ProductDetails from '~/pages/ProductDetails'
import Cart from '~/pages/Cart'

import { colors } from '~/styles'

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      ProductDetails,
      Home: createBottomTabNavigator(
        {
          Products,
          Cart,
        },
        {
          tabBarOptions: {
            showIcon: true,
            showLabel: false,
            activeTintColor: colors.secondary,
            inactiveTintColor: colors.lightTransparent,
            styles: { background: colors.white },
          },
        }
      ),
    },
    {
      initialRouteName: 'Home',
    }
  )
)

export default Routes
