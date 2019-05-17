import styled from 'styled-components/native'
import { colors } from '~/styles'

export const Container = styled.View`
  background-color: ${colors.secondary};
  height: 40px;
`

export const TabsContainer = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: {
    paddingLeft: 10,
    paddingRight: 20,
    marginTop: 4,
  },
  showsHorizontalScrollIndicator: false,
})``

export const TabItem = styled.View`
  margin-left: 10px;
  padding: 10px;
  justify-content: space-between;
  border-bottom-width: ${props => (props.selected ? '3px' : '0')};
  border-bottom-color: ${colors.white};
  opacity: ${props => (props.selected ? 1 : 0.5)};
`
export const TabText = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: ${colors.white};
  text-transform: uppercase;
  font-family: Helvetica;
`
