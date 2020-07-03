import React from 'react';
import {ActivityIndicator} from 'react-native';

import {Container} from './styles';
import {useLoading} from '../../Hooks/loading';

const LoadingOverlay: React.FC = () => {
  const {loading} = useLoading();
  return loading ? (
    <Container>
      <ActivityIndicator size={36} color="#FFF" />
    </Container>
  ) : (
    <></>
  );
};

export default LoadingOverlay;
