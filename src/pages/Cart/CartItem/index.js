import React, { Component } from 'react'

import { TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

import {
  Container,
  ImageProduct,
  ImageContainer,
  Name,
  Brand,
  Price,
  Content,
  IconButton,
  Quantity,
} from './styles'

export default class CartItem extends Component {
  static propTypes = {
    item: PropTypes.shape({
      id: PropTypes.number,
      image: PropTypes.string,
      name: PropTypes.string,
      brand: PropTypes.string,
      price: PropTypes.number,
    }).isRequired,
    handleNextPage: PropTypes.func.isRequired,
  }

  state = {
    qtdItems: '',
  }

  onChanged(text) {
    this.setState({
      qtdItems: text.replace(/[^0-9]/g, ''),
    })
  }

  render() {
    const { item, handleNextPage } = this.props
    const { qtdItems } = this.state
    return (
      <Container>
        <ImageContainer>
          <ImageProduct source={{ url: item.image }} />
        </ImageContainer>

        <Content>
          <Name>{item.name}</Name>
          <Brand>{item.brand}</Brand>
          <Price>{item.price}</Price>
        </Content>
        <Quantity
          keyboardType="numeric"
          onChangeText={text => this.onChanged(text)}
          value={qtdItems}
        />
        <TouchableOpacity onPress={() => handleNextPage()}>
          <IconButton name="times" size={20} />
        </TouchableOpacity>
      </Container>
    )
  }
}
