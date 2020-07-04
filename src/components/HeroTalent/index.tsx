import React from 'react';

import {HeroTalentBuild} from '../../@types/heroes';

import {
  Container,
  BuildTitle,
  ContainerTalentRow,
  ContainerTalent,
  TalentLevel,
  ContainerTalentSquare,
  TalentSquare,
  TalentImage,
} from './styles';

interface HeroTalentProps {
  talentBuild: HeroTalentBuild;
}

const HeroTalent: React.FC<HeroTalentProps> = ({talentBuild}) => {
  return (
    <Container>
      <BuildTitle>{talentBuild.buildName}</BuildTitle>

      <ContainerTalentRow>
        {talentBuild.talents.map((talentItem, talentIndex) => (
          <ContainerTalent key={`talentItem${talentIndex}`}>
            <TalentLevel>Level {talentItem.level}</TalentLevel>
            <ContainerTalentSquare>
              {talentItem.talents.map((square, squareIndex) => (
                <TalentSquare
                  key={`square${squareIndex}`}
                  squareType={square}
                />
              ))}
            </ContainerTalentSquare>
            <TalentImage
              source={{
                uri: talentItem.image,
              }}
            />
          </ContainerTalent>
        ))}
      </ContainerTalentRow>
    </Container>
  );
};

export default HeroTalent;
