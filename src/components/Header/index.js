import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, TouchableOpacity, StatusBar } from 'react-native'

import { withNavigation } from 'react-navigation'
import {
  Container, Title, Content, IconButton,
} from './styles'

class Header extends Component {
  static defaultProps = {
    navigateLocation: null,
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    navigateLocation: PropTypes.string,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  }

  backPage = () => {
    const { navigation, navigateLocation } = this.props
    if (navigateLocation) navigation.navigate(navigateLocation)
  }

  render() {
    const { title, navigateLocation } = this.props

    return (
      <Container>
        <StatusBar barStyle="dark-content" />
        <TouchableOpacity onPress={this.backPage}>
          <Content>{!!navigateLocation && <IconButton name="chevron-left" size={16} />}</Content>
        </TouchableOpacity>
        <Title>{title}</Title>
        <View />
      </Container>
    )
  }
}
export default withNavigation(Header)
