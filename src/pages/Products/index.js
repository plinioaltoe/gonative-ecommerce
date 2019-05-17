import React, { Component } from 'react'

import { View, StatusBar, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './styles'

import ListaItem from '~/components/Lista/ListaItem'
import Header from '~/components/Header'
// import api from '~/services/api'

import Tabs from '~/components/Tabs'

export default class Products extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => <Icon name="home" size={20} color={tintColor} />,
  }

  state = {}

  componentDidMount = async () => {}

  renderListItem = ({ item }, handleNextPage) => (
    <ListaItem item={item} handleNextPage={handleNextPage} />
  )

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
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Header title="GoCommerce" />
        <Tabs />
        <FlatList
          data={products}
          keyExtractor={item => String(item.id + Math.random())}
          renderItem={item => this.renderListItem(item, () => {})}
        />
      </View>
    )
  }
}
