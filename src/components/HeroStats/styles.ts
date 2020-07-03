import styled, {css} from 'styled-components/native';
import {Dimensions, ViewProps} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const widthBar = windowWidth / 17.5;

export const Container = styled.View`
  padding: 5px;
`;

export const ContainerStatistic = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const StatisticImage = styled.Image`
  width: ${windowWidth / 7}px;
  height: ${windowWidth / 7}px;
  margin-right: 10px;
`;

export const StatisticName = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 4px;
`;

export const ContainerBars = styled.View``;

export type statisticType =
  | 'damage'
  | 'utility'
  | 'survivability'
  | 'complexity'
  | '';

interface StatisticBarsProps extends ViewProps {
  statisticType?: statisticType;
}

export const StatisticBars = styled.View<StatisticBarsProps>`
  width: ${widthBar}px;
  height: 8px;
  margin-right: 5px;
  background: #3a2d57;

  ${(props) =>
    props.statisticType === 'damage' &&
    css`
      background: #ff77fd;
    `}

  ${(props) =>
    props.statisticType === 'utility' &&
    css`
      background: #a27ce7;
    `}

  ${(props) =>
    props.statisticType === 'survivability' &&
    css`
      background: #a27ce7;
    `}

  ${(props) =>
    props.statisticType === 'complexity' &&
    css`
      background: #57ddff;
    `}
`;
