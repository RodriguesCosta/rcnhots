import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

const windowWidth = Dimensions.get('window').width - 20;

export const Container = styled(RectButton)`
  width: ${windowWidth / 3}px;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const HeroImageContainer = styled.View`
  width: ${windowWidth / 3 - 10}px;
  height: ${windowWidth / 3 - 10}px;
  border-radius: ${windowWidth / 3}px;
  overflow: hidden;
`;

export const HeroImageContainerGradient = styled(LinearGradient).attrs(() => ({
  colors: ['#141f52', '#141f52'],
}))`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const HeroImage = styled.Image`
  width: 95%;
  height: 95%;
`;

export const HeroName = styled.Text`
  color: #fff;
  font-weight: bold;
  text-align: center;
`;
