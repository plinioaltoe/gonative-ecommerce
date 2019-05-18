import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import CartActions from '~/store/ducks/cart'

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

class CartItem extends Component {
  static propTypes = {
    item: PropTypes.shape({
      id: PropTypes.number,
      image: PropTypes.string,
      name: PropTypes.string,
      brand: PropTypes.string,
      price: PropTypes.number,
      quantity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }).isRequired,
    rmProduct: PropTypes.func.isRequired,
    updateProduct: PropTypes.func.isRequired,
  }

  state = {
    qtdItems: '1',
  }

  componentWillReceiveProps = (newProps) => {
    const { item } = newProps
    this.onChanged(String(item.quantity))
  }

  onChanged(text) {
    this.setState({
      qtdItems: text.replace(/[^0-9]/g, ''),
    })
  }

  updateTotal = () => {
    const { qtdItems } = this.state
    const { item, updateProduct } = this.props

    updateProduct({ ...item, newQuantity: qtdItems })
  }

  render() {
    const { item, rmProduct } = this.props
    const { qtdItems } = this.state

    return (
      <Container>
        <ImageContainer>
          <ImageProduct source={{ url: item.image }} />
        </ImageContainer>
        <Content>
          <Name>{item.name}</Name>
          <Brand>{item.brand}</Brand>
          <Price>R$ {item.price}</Price>
        </Content>

        <Quantity
          keyboardType="numeric"
          onChangeText={text => this.onChanged(text)}
          onSubmitEditing={this.updateTotal}
          value={qtdItems}
        />
        <TouchableOpacity onPress={() => rmProduct(item.id)}>
          <IconButton name="times" size={20} />
        </TouchableOpacity>
      </Container>
    )
  }
}

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartItem)
