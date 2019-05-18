import styled from 'styled-components/native'
import { colors } from '~/styles'

export const Container = styled.View`
  align-items: center;
  background-color: ${colors.lighter};
  flex: 1;
  justify-content: center;
`

export const EmptyText = styled.Text`
  font-weight: 900;
  font-size: 22px;
  color: ${colors.secondary};
`
