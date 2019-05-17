import React, { Component } from 'react'

import { TouchableOpacity } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
  Container, TabsContainer, TabItem, TabText,
} from './styles'

const categories = [
  {
    id: 1,
    title: 'Camisetas',
  },
  {
    id: 2,
    title: 'Camisas',
  },
  {
    id: 3,
    title: 'Calças',
  },
  {
    id: 4,
    title: 'Blusas',
  },
  {
    id: 5,
    title: 'Bonés',
  },
  {
    id: 6,
    title: 'Casacos',
  },
]

class Tabs extends Component {
  state = { idSelected: 1 }

  render() {
    const { idSelected } = this.state
    return (
      <Container>
        <TabsContainer>
          {categories.map(category => (
            <TouchableOpacity onPress={() => this.setState({ idSelected: category.id })}>
              <TabItem key={category.id} selected={category.id === idSelected && true}>
                <TabText>{category.title}</TabText>
              </TabItem>
            </TouchableOpacity>
          ))}
        </TabsContainer>
      </Container>
    )
  }
}

const mapStateToProps = state => ({})

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(Tabs)
