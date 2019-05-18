import React, { Component } from 'react'
import { StatusBar } from 'react-native'

import PropTypes from 'prop-types'

// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Header from '~/components/Header'
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
  }

  state = {}

  componentDidMount = async () => {}

  renderListItem = ({ item }, handleNextPage) => (
    <CartItem item={item} handleNextPage={handleNextPage} />
  )

  handleNextPage = (item) => {
    const { navigation } = this.props
    navigation.navigate('ProductDetails', { item })
  }

  render() {
    const products = [
      {
        id: 1,
        name: 'Camiseta Hyperas Preta',
        brand: 'Quiksilver',
        image:
          'https://t-static.dafiti.com.br/czCvp3wBNPfehf7omYZfJacnxPY=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fquiksilver-camiseta-quiksilver-hyperas-preta-8710-7136243-1-product.jpg',
        price: 49.99,
      },
      {
        id: 2,
        name: 'Camiseta Double Tap Preta',
        brand: 'Quiksilver',
        image:
          'https://t-static.dafiti.com.br/EpEXepU-tSbgo6ZMl4Y5BOdjelw=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fquiksilver-camiseta-quiksilver-double-tap-preta-7115-8165043-1-product.jpg',
        price: 59.99,
      },
      {
        id: 3,
        name: 'Camiseta Logo Azul',
        brand: 'Red Bull',
        image:
          'https://t-static.dafiti.com.br/aC9871vKWfL3bDgbhLx5sFLa7xs=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fred-bull-camiseta-red-bull-logo-azul-0272-7714033-1-product.jpg',
        price: 54.99,
      },
      {
        id: 4,
        name: 'Camiseta Primo Tipper',
        brand: 'Rip Curl',
        image:
          'https://t-static.dafiti.com.br/weG0u9eKZ4KBV-G0XFOQ5hoY4eI=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2frip-curl-camiseta-rip-curl-primo-tipper-preto-8138-3441052-1-product.jpg',
        price: 39.99,
      },
    ]

    return (
      <Container>
        <StatusBar barStyle="dark-content" />
        <Header title="Carrinho" />

        <FlatCartList
          data={products}
          keyExtractor={item => String(item.id)}
          renderItem={item => this.renderListItem(item, this.handleNextPage)}
          onRefresh={() => {}}
          refreshing={false}
        />

        <TotalContainer>
          <SubTotal>Subtotal</SubTotal>
          <Price>R$ 200,00</Price>
        </TotalContainer>
      </Container>
    )
  }
}

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
