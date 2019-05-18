import React from 'react'

import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
} from 'react-navigation'

import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/FontAwesome'

import ProductList from '~/pages/ProductList'
import ProductDetails from '~/pages/ProductDetails'
import Cart from '~/pages/Cart'

import { colors } from '~/styles'

const iconHome = ({ tintColor }) => <Icon name="home" size={20} color={tintColor} />

iconHome.propTypes = {
  tintColor: PropTypes.string.isRequired,
}

const Routes = createAppContainer(
  createBottomTabNavigator(
    {
      Home: createSwitchNavigator(
        {
          ProductList,
          ProductDetails,
        },
        {
          navigationOptions: {
            tabBarIcon: iconHome,
          },
        }
      ),
      Cart,
    },
    {
      initialRouteName: 'Home',
      tabBarOptions: {
        showIcon: true,
        showLabel: false,
        activeTintColor: colors.secondary,
        inactiveTintColor: colors.lightTransparent,
        styles: { background: colors.white },
      },
    }
  )
)

export default Routes
