import styled from 'styled-components/native'
import { colors, metrics } from '~/styles'

export const Container = styled.View`
  align-items: stretch;
  background-color: ${colors.lighter};
  flex: 1;
  justify-content: center;
`
export const FlatCartList = styled.FlatList`
  padding-top: ${metrics.basePadding};
`

export const TotalContainer = styled.View`
  align-items: center;
  background-color: ${colors.white};
  flex: 1;
  justify-content: center;

  padding: ${metrics.basePadding * 2}px 0;
`

export const Price = styled.Text`
  font-weight: 900;
  font-size: 18px;
  color: ${colors.primary};
`

export const SubTotal = styled.Text`
  font-size: 16px;
  color: ${colors.lightTransparent};
  padding-bottom: ${metrics.basePadding}px;
`
