import React, { Component } from 'react'

import {
  View,
  TextInput,
  StatusBar,
  AsyncStorage,
  TouchableOpacity,
  ActivityIndicator,
  Text,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './styles'

import Lista from '~/components/Lista'
import Header from '~/components/Header'
import api from '~/services/api'

export default class Products extends Component {
  state = {
    product: 'react-community/react-navigation',
    productList: [],
    loading: false,
    error: false,
    refreshing: false,
  }

  componentDidMount = async () => {
    // this.limpar();
    await this.loadProducts()
  }

  loadProducts = async () => {
    this.setState({ refreshing: true })
    const repos = await AsyncStorage.getItem('@GithubRepo:productList')
    if (repos) {
      const productList = JSON.parse(repos)
      this.setState({ productList })
    }
    this.setState({ refreshing: false })
  }

  limpar = async () => {
    await AsyncStorage.removeItem('@GithubRepo:productList')
    this.loadProducts()
  }

  checkUserExists = async (product) => {
    const { data } = await api.get(`/repos/${product}`)
    return data
  }

  saveRepository = async ({
    id, name, full_name, organization,
  }) => {
    const { avatar_url, login } = organization
    const { productList } = this.state
    const itemRepo = {
      id,
      name,
      login,
      avatar_url,
      full_name,
    }
    const newRepo = [...productList, itemRepo]
    await AsyncStorage.setItem('@GithubRepo:productList', JSON.stringify(newRepo))
    this.setState({ product: '' })
  }

  addRepository = async () => {
    const { product } = this.state
    try {
      this.setState({ loading: true, error: false })
      const repo = await this.checkUserExists(product)
      await this.saveRepository(repo)
    } catch (error) {
      console.tron.log('Erro ao buscar repositório', error)
      this.setState({ error: true })
    } finally {
      this.setState({ loading: false })
    }
  }

  handleNextPage = (full_name) => {
    const { navigation } = this.props
    navigation.navigate('Issues', {
      full_name,
      other: '0/0',
    })
  }

  render() {
    const {
      product, productList, loading, error, refreshing,
    } = this.state
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Header title="GitIssues" />
        {error && <Text style={styles.error}>Erro ao adicionar</Text>}
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Adicionar novo repositório"
            underlineColorAndroid="transparent"
            value={product}
            onChangeText={(text) => {
              this.setState({ product: text })
            }}
          />
          <TouchableOpacity style={styles.button} onPress={this.addRepository}>
            {loading ? (
              <ActivityIndicator size="small" style={styles.activityIndicator} />
            ) : (
              <Icon name="plus" size={16} style={styles.icon} />
            )}
          </TouchableOpacity>
        </View>
        <Lista
          list={productList}
          handleNextPage={this.handleNextPage}
          refreshProducts={this.loadProducts}
          refreshing={refreshing}
        />
      </View>
    )
  }
}
