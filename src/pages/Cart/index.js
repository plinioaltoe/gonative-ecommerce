import React, { Component } from 'react'
import { StatusBar } from 'react-native'

import PropTypes from 'prop-types'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import CartActions from '~/store/ducks/cart'

import Header from '~/components/Header'
import Empty from '~/components/Empty'

import Icon from 'react-native-vector-icons/FontAwesome'

import CartItem from './CartItem'
import {
  Container, FlatCartList, TotalContainer, SubTotal, Price,
} from './styles'

class Cart extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    products: PropTypes.shape({
      image: PropTypes.string,
      title: PropTypes.string,
      brand: PropTypes.string,
      price: PropTypes.number,
      quantity: PropTypes.number,
    }).isRequired,
  }

  state = {
    total: 0,
  }

  componentDidMount = () => {
    this.getTotalPrice(this.props)
  }

  componentWillReceiveProps = (newProps) => {
    this.getTotalPrice(newProps)
  }

  getTotalPrice = (props) => {
    const { products } = props
    let total = 0
    for (let index = 0; index < products.data.length; index += 1) {
      total += products.data[index].quantity * products.data[index].price
    }
    this.setState({ total })
  }

  renderListItem = ({ item }, handleNextPage) => (
    <CartItem item={item} handleNextPage={handleNextPage} />
  )

  handleNextPage = (item) => {
    const { navigation } = this.props
    navigation.navigate('Cart', { item })
  }

  render() {
    const { products } = this.props
    const { total } = this.state
    return (
      <Container>
        <StatusBar barStyle="dark-content" />
        <Header title="Carrinho" />
        {!products.data.length
          ? <Empty />
          : (
            <FlatCartList
              data={products.data}
              keyExtractor={item => String(item.id)}
              renderItem={item => this.renderListItem(item, this.handleNextPage)}
              onRefresh={() => {}}
              refreshing={false}
            />
          )}
        <TotalContainer>
          <SubTotal>Subtotal</SubTotal>
          <Price>R$ {total}</Price>
        </TotalContainer>
      </Container>
    )
  }
}

const tabIcon = ({ tintColor }) => <Icon name="shopping-cart" size={20} color={tintColor} />

tabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
}

Cart.navigationOptions = {
  tabBarIcon: tabIcon,
}

const mapStateToProps = state => ({
  products: state.cart,
})

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart)
