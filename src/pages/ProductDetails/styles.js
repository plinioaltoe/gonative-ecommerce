import styled from 'styled-components/native'
import { colors, metrics } from '~/styles'

export const Container = styled.View`
  background-color: ${colors.lighter};
  flex: 1;
`

export const ProductContainer = styled.View`
  background-color: ${colors.white};
  border-radius: ${metrics.baseRadius}px;
  margin: ${metrics.baseMargin}px;
  margin-top: ${metrics.baseMargin}px;
  align-items: center;
  padding: 0 ${metrics.basePadding * 2}px ${metrics.basePadding * 2}px;
`

export const ImageContainer = styled.View`
  padding: ${metrics.basePadding}px;
`

export const ImageProduct = styled.Image`
  width: 300px;
  height: 450px;
`
export const Content = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`

export const NameBrandContent = styled.View`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 180px;
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

export const ButtonContainer = styled.View`
  height: 40px;
  flex-direction: row;
`

export const ButtonAdd = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  border-radius: ${metrics.baseRadius}px;
  background-color: ${colors.primary};
`

export const ButtonText = styled.Text`
  font-size: 14px;
  font-weight: 900;
  color: ${colors.white};
`
