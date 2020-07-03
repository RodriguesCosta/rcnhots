import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {SvgCss} from 'react-native-svg';

const windowWidth = Dimensions.get('window').width - 20;

export const ContainerSafe = styled.SafeAreaView`
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
  padding: 10px;
`;

export const ContainerFilter = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
`;

export const FilterButton = styled(RectButton)`
  width: ${windowWidth / 7}px;
  height: ${windowWidth / 7}px;
  justify-content: center;
  align-items: center;
`;

export const FilterIcon = styled(SvgCss)`
  width: 100%;
  height: 100%;
`;
