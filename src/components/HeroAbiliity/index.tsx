import React from 'react';

import {Ability, Trait} from '../../static/heros';
import hexagon from '../../assets/hexagon.svg';
import AbilityFrame from '../../assets/ability-frame.png';

import {
  Container,
  ContainerRow,
  AbiliityImageContainer,
  AbiliityImageCover,
  AbiliityImage,
  AbiliityFrame,
  AbiliityTextContainer,
  AbiliityTitle,
  AbiliitySubTitle,
  AbiliityDescription,
  AbiliityExtraInfo,
} from './styles';

interface HeroStatsProps {
  ability: Ability | Trait | undefined;
}

const HeroAbiliity: React.FC<HeroStatsProps> = ({ability}) => {
  return (
    <Container>
      <ContainerRow>
        <AbiliityImageContainer>
          <AbiliityImage
            source={{
              uri: ability?.icon,
            }}
          />
          <AbiliityImageCover xml={hexagon} width="100%" height="100%" />
          <AbiliityFrame source={AbilityFrame} />
        </AbiliityImageContainer>
        <AbiliityTextContainer>
          <AbiliityTitle>{ability?.name}</AbiliityTitle>
          <AbiliitySubTitle>{ability?.displayText}</AbiliitySubTitle>
        </AbiliityTextContainer>
      </ContainerRow>
      <AbiliityDescription>{ability?.description}</AbiliityDescription>

      {!!ability?.cooldown && (
        <AbiliityExtraInfo>{ability?.cooldown}</AbiliityExtraInfo>
      )}
      {!!ability?.vital && (
        <AbiliityExtraInfo>{ability?.vital}</AbiliityExtraInfo>
      )}
    </Container>
  );
};

export default HeroAbiliity;
