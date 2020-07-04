import React, {memo} from 'react';

import {HeroData} from '../../@types/heroes';
import HotsFreeToPlay from '../../assets/hots-freetoplay.png';

import {
  Container,
  HeroImageContainer,
  HeroImageContainerGradient,
  HeroImage,
  HeroName,
  HeroIsNew,
  FreeToPlayImage,
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
      {heroData.isNew && <HeroIsNew>NOVO</HeroIsNew>}
      {heroData.isInRotation && <FreeToPlayImage source={HotsFreeToPlay} />}
    </Container>
  );
};

export default memo(HeroCircleIcon);
