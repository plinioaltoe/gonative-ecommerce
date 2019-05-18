import styled from 'styled-components/native'
import { colors, metrics } from '~/styles'

import Icon from 'react-native-vector-icons/FontAwesome'

export const Container = styled.View`
  background-color: ${colors.white};
  border-radius: ${metrics.baseRadius}px;
  padding: ${metrics.basePadding}px;
  align-items: center;
  margin: ${metrics.baseMargin / 3}px ${metrics.baseMargin}px;
  display: flex;
  flex-direction: row;
`

export const ImageContainer = styled.View`
  padding: ${metrics.basePadding}px;
`

export const ImageProduct = styled.Image`
  width: 50px;
  height: 80px;
`
export const Content = styled.View`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 150px;
`

export const Name = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: ${colors.black};
`

export const Brand = styled.Text`
  font-size: 12px;
  color: ${colors.lightTransparent};
  padding-bottom: ${metrics.basePadding}px;
`

export const Price = styled.Text`
  font-weight: 900;
  font-size: 14px;
  color: ${colors.primary};
`

export const IconButton = styled(Icon)`
  color: ${colors.regular};
`

export const Quantity = styled.TextInput`
  height: 35px;
  width: 50px;
  border-width: 0.8;
  border-color: ${colors.lightTransparent};
  margin-right: ${metrics.baseMargin}px;
  padding-left: ${metrics.basePadding}px;
`
