import styled, {css} from 'styled-components/native';
import {Dimensions, ViewProps} from 'react-native';

const windowWidth = Dimensions.get('window').width - 50;
const widthTalentContainer = windowWidth / 2;

export const Container = styled.View`
  padding: 10px;
  background: #12092c;
  margin-bottom: 20px;
`;

export const BuildTitle = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  margin: 0 0px 5px 0px;
`;

export const ContainerTalentRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const ContainerTalent = styled.View`
  width: ${widthTalentContainer}px;
  margin: 0 0px 10px 0px;
  align-items: center;
`;

export const TalentLevel = styled.Text`
  color: #ffb100;
  font-weight: bold;
  font-size: 14px;
  text-align: center;
  margin: 0 0px 5px 0px;
`;

interface TalentSquareProps extends ViewProps {
  squareType: 'no' | 'yes' | 'situational';
}

export const ContainerTalentSquare = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 0px 5px 0px;
`;

export const TalentSquare = styled.View<TalentSquareProps>`
  background: #263f5a;
  width: 14px;
  height: 14px;
  margin: 0 10px 0 0px;

  ${(props) =>
    props.squareType === 'yes' &&
    css`
      background: #18da18;
      transform: scale(1.2);
    `}

  ${(props) =>
    props.squareType === 'situational' &&
    css`
      background: #ffb100;
    `}
`;

export const TalentImage = styled.Image`
  width: ${widthTalentContainer / 2}px;
  height: ${widthTalentContainer / 2}px;
`;
