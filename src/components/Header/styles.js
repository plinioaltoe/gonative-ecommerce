import styled from 'styled-components/native'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import { colors, metrics } from '~/styles'
import Icon from 'react-native-vector-icons/FontAwesome'

export const Container = styled.View.attrs({
  paddingHorizontal: metrics.basePadding,
})`
  height: ${54 + getStatusBarHeight()}px;
  padding-top: ${getStatusBarHeight()}px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: ${colors.white};
`
export const Content = styled.View`
  width: 10px;
`

export const IconButton = styled(Icon)`
  color: ${colors.light};
`

export const Title = styled.Text`
  font-size: 16;
  font-weight: bold;
  color: ${colors.secondary};
`
