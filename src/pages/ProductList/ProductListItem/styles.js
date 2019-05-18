import styled from 'styled-components/native'
import { colors, metrics } from '~/styles'

export const Container = styled.View`
  background-color: ${colors.white};
  border-radius: ${metrics.baseRadius}px;
  padding: ${metrics.basePadding}px;
  margin-top: ${metrics.baseMargin}px;
  align-items: center;
`

export const ImageContainer = styled.View`
  padding: ${metrics.basePadding}px;
`

export const ImageProduct = styled.Image`
  width: 120px;
  height: 170px;
`
export const Content = styled.View`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 120px;
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
