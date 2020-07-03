import styled, {css} from 'styled-components/native';
import {Dimensions, TextProps} from 'react-native';
import ViewShot from 'react-native-view-shot';
import {RectButton} from 'react-native-gesture-handler';

const windowWidth = Dimensions.get('window').width;

export const Container = styled.ScrollView`
  flex: 1;
`;

export const ContainerShot = styled(ViewShot)``;

export const CardContainer = styled.View`
  width: ${windowWidth}px;
  height: ${(windowWidth / 3) * 2}px;
`;

export const CardImage = styled.Image`
  width: 100%;
  height: 100%;
`;

export const ContainerContent = styled.ScrollView`
  flex: 1;
  padding: 10px;
`;

export const HeroName = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 32px;
`;

export const HeroSubName = styled.Text`
  margin-bottom: 5px;
  color: #fff;
  font-weight: bold;
  font-size: 17px;
`;

export const HeroHistory = styled.Text`
  margin-top: 10px;
  color: #fff;
  font-weight: bold;
  font-size: 19px;
`;

export const HeroTitles = styled.Text`
  margin-top: 10px;
  margin-bottom: 5px;
  color: #fff;
  font-weight: bold;
  font-size: 19px;
`;

export const HeroDescription = styled.Text`
  color: #fff;
  font-size: 14px;
`;

export const HeroTypeContainer = styled.View`
  margin-top: 15px;
  margin-bottom: 10px;
  flex-direction: row;
  align-items: center;
`;

export const HeroTypeImage = styled.Image`
  width: ${windowWidth / 5}px;
  height: ${windowWidth / 4.7}px;
`;

export const HeroTypeView = styled.View`
  flex: 1;
  margin-left: 10px;
`;

interface HeroTypeProps extends TextProps {
  heroType?: string;
}

export const HeroTypeName = styled.Text<HeroTypeProps>`
  color: #6cf;
  font-weight: bold;
  font-size: 20px;

  ${(props) =>
    props.heroType === 'tank' &&
    css`
      color: #ffc40c;
    `}

  ${(props) =>
    props.heroType === 'bruiser' &&
    css`
      color: #ff581f;
    `}

  ${(props) =>
    props.heroType === 'support' &&
    css`
      color: #3b97fe;
    `}

  ${(props) =>
    props.heroType === 'healer' &&
    css`
      color: #18da18;
    `}

  ${(props) =>
    props.heroType === 'ranged-assassin' &&
    css`
      color: #a254ff;
    `}

  ${(props) =>
    props.heroType === 'melee-assassin' &&
    css`
      color: #ff3838;
    `}
`;

export const HeroTypeDescription = styled.Text<HeroTypeProps>`
  color: #FFF;
  font-size: 12px;

  ${(props) =>
    props.heroType === 'tank' &&
    css`
      color: #ffc40c;
    `}

  ${(props) =>
    props.heroType === 'bruiser' &&
    css`
      color: #ff581f;
    `}

  ${(props) =>
    props.heroType === 'support' &&
    css`
      color: #3b97fe;
    `}

  ${(props) =>
    props.heroType === 'healer' &&
    css`
      color: #18da18;
    `}

  ${(props) =>
    props.heroType === 'ranged-assassin' &&
    css`
      color: #a254ff;
    `}

  ${(props) =>
    props.heroType === 'melee-assassin' &&
    css`
      color: #ff3838;
    `}
`;

export const ShareButton = styled(RectButton)`
  width: 100%;
  height: 44px;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const ShareButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
`;
