import React, { Component } from 'react'

import { StatusBar } from 'react-native'
import PropTypes from 'prop-types'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ProductsActions from '~/store/ducks/products'

import { Container, FlatProductList, Loading } from './styles'

import ProductListItem from './ProductListItem'
import Header from '~/components/Header'
import Tabs from '~/components/Tabs'

class ProductList extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    products: PropTypes.shape({
      image: PropTypes.string,
      title: PropTypes.string,
      brand: PropTypes.string,
      price: PropTypes.number,
    }).isRequired,
    loadProductsRequest: PropTypes.func.isRequired,
  }

  state = {}

  componentDidMount = () => {
    const { loadProductsRequest } = this.props
    loadProductsRequest(1)
  }

  renderListItem = ({ item }, handleNextPage) => (
    <ProductListItem item={item} handleNextPage={handleNextPage} />
  )

  handleNextPage = (item) => {
    const { navigation } = this.props
    navigation.navigate('ProductDetails', { item })
  }

  render() {
    const { products } = this.props

    return (
      <Container>
        <StatusBar barStyle="dark-content" />
        <Header title="GoCommerce" />
        <Tabs />
        {products.loading ? (
          <Loading size="large" />
        ) : (
          <FlatProductList
            data={products.data}
            keyExtractor={item => String(item.id)}
            renderItem={item => this.renderListItem(item, this.handleNextPage)}
            refreshing={false}
            numColumns={2}
          />
        )}
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  products: state.products,
})

const mapDispatchToProps = dispatch => bindActionCreators(ProductsActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList)
