import React, {memo} from 'react';

import {HeroData} from '../../static/heros';

import {
  Container,
  HeroImageContainer,
  HeroImageContainerGradient,
  HeroImage,
  HeroName,
} from './styles';

interface HeroCircleIconProps {
  heroData: HeroData;
  onPress?(): void;
}

const HeroCircleIcon: React.FC<HeroCircleIconProps> = ({heroData, onPress}) => {
  return (
    <Container onPress={onPress}>
      <HeroImageContainer>
        <HeroImageContainerGradient>
          <HeroImage
            source={{
              uri: heroData.circleIcon,
            }}
          />
        </HeroImageContainerGradient>
      </HeroImageContainer>
      <HeroName>{heroData.name}</HeroName>
    </Container>
  );
};

export default memo(HeroCircleIcon);
