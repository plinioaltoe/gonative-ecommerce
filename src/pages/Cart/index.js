import React from 'react'

import { View } from 'react-native'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Header from '~/components/Header'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Container } from './styles'

const Cart = () => (
  <View>
    <Header title="Carrinho" />
  </View>
)

Cart.navigationOptions = {
  tabBarIcon: ({ tintColor }) => <Icon name="shopping-cart" size={20} color={tintColor} />,
}

const mapStateToProps = state => ({})

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(Cart)
