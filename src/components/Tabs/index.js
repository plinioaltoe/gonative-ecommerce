import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import CategoriesActions from '~/store/ducks/categories'
import ProductsActions from '~/store/ducks/products'

import {
  Container, TabsContainer, TabItem, TabText,
} from './styles'

class Tabs extends Component {
  static propTypes = {
    categories: PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
    }).isRequired,
    loadCategoriesRequest: PropTypes.func.isRequired,
    loadProductsRequest: PropTypes.func.isRequired,
  }

  state = { idSelected: 1 }

  componentDidMount = () => {
    const { loadCategoriesRequest } = this.props
    loadCategoriesRequest()
  }

  handleChangeCategory = (id) => {
    const { loadProductsRequest } = this.props
    loadProductsRequest(id)
    this.setState({ idSelected: id })
  }

  render() {
    const { idSelected } = this.state
    const { categories } = this.props
    return (
      <Container>
        <TabsContainer>
          {categories.data.map(category => (
            <TouchableOpacity
              key={category.id}
              onPress={() => this.handleChangeCategory(category.id)}
            >
              <TabItem selected={category.id === idSelected && true}>
                <TabText>{category.title}</TabText>
              </TabItem>
            </TouchableOpacity>
          ))}
        </TabsContainer>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
})

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    ...CategoriesActions,
    ...ProductsActions,
  },
  dispatch
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tabs)
