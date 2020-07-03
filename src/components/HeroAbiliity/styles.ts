import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import {SvgCss} from 'react-native-svg';

const windowWidth = Dimensions.get('window').width;
const widthAbiliityImage = windowWidth / 4;

export const Container = styled.View`
  padding: 10px;
  background: #12092c;
  margin-bottom: 20px;
`;

export const ContainerRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const AbiliityImageContainer = styled.View`
  position: relative;
  width: ${widthAbiliityImage}px;
  height: ${widthAbiliityImage}px;
`;

export const AbiliityImageCover = styled(SvgCss)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

export const AbiliityImage = styled.Image`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

export const AbiliityFrame = styled.Image`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

export const AbiliityTextContainer = styled.View`
  flex: 1;
  margin-left: 10px;
`;

export const AbiliityTitle = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;

export const AbiliitySubTitle = styled.Text`
  color: #fff;
  font-size: 14px;
`;

export const AbiliityDescription = styled.Text`
  margin-top: 10px;
  flex: 1;
  color: #fff;
  font-size: 12px;
  margin-bottom: 5px;
`;

export const AbiliityExtraInfo = styled.Text`
  flex: 1;
  color: #fff;
  font-size: 12px;
`;
