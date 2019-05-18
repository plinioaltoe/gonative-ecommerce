import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { StatusBar } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import CartActions from '~/store/ducks/cart'

import Header from '~/components/Header'

import {
  Container,
  ProductContainer,
  ImageProduct,
  ImageContainer,
  Name,
  Brand,
  Price,
  Content,
  NameBrandContent,
  ButtonContainer,
  ButtonAdd,
  ButtonText,
} from './styles'

class ProductDetails extends Component {
  handleNextPage = (item) => {
    const { navigation, addProduct } = this.props
    addProduct(item)
    navigation.navigate('Cart', { item })
  }

  render() {
    const { navigation } = this.props
    const item = navigation.getParam('item')

    return (
      <Container>
        <StatusBar barStyle="dark-content" />
        <Header title="Detalhe do Produto" navigateLocation="ProductList" />
        <ProductContainer>
          <ImageContainer>
            <ImageProduct source={{ url: item.image }} />
          </ImageContainer>

          <Content>
            <NameBrandContent>
              <Name>{item.name}</Name>
              <Brand>{item.brand}</Brand>
            </NameBrandContent>
            <Price>R$ {item.price}</Price>
          </Content>
          <ButtonContainer>
            <ButtonAdd onPress={() => this.handleNextPage(item)}>
              <ButtonText>Adicionar ao carrinho</ButtonText>
            </ButtonAdd>
          </ButtonContainer>
        </ProductContainer>
      </Container>
    )
  }
}

ProductDetails.propTypes = {
  navigation: PropTypes.shape({
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
    }),
  }).isRequired,
  addProduct: PropTypes.func.isRequired,
}

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetails)
