import styled from 'styled-components/native'
import { colors, metrics } from '~/styles'

export const Container = styled.View`
  align-items: stretch;
  background-color: ${colors.lighter};
  flex: 1;
  justify-content: center;
`

export const FlatProductList = styled.FlatList.attrs({
  columnWrapperStyle: {
    marginHorizontal: metrics.baseMargin,
    justifyContent: 'space-between',
  },
})``

export const Loading = styled.ActivityIndicator`
  flex: 1;
`
