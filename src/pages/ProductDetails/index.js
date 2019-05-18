import React from 'react'
import PropTypes from 'prop-types'

import { StatusBar } from 'react-native'
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

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

const ProductDetails = (props) => {
  const { navigation } = props
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
          <Price>{item.price}</Price>
        </Content>
        <ButtonContainer>
          <ButtonAdd onPress={() => {}}>
            <ButtonText>Adicionar ao carrinho</ButtonText>
          </ButtonAdd>
        </ButtonContainer>
      </ProductContainer>
    </Container>
  )
}

ProductDetails.propTypes = {
  navigation: PropTypes.shape({
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
    }),
  }).isRequired,
}

const mapStateToProps = () => ({})

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(ProductDetails)
