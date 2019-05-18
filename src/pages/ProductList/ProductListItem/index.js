import React from 'react'

import { TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

import {
  Container, ImageProduct, ImageContainer, Name, Brand, Price, Content,
} from './styles'

const ProductListItem = ({ item, handleNextPage }) => (
  <TouchableOpacity onPress={() => handleNextPage(item)}>
    <Container>
      <ImageContainer>
        <ImageProduct source={{ url: item.image }} />
      </ImageContainer>

      <Content>
        <Name>{item.name}</Name>
        <Brand>{item.brand}</Brand>
        <Price>{item.price}</Price>
      </Content>
    </Container>
  </TouchableOpacity>
)

ProductListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    name: PropTypes.string,
    brand: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  handleNextPage: PropTypes.func.isRequired,
}

export default ProductListItem
