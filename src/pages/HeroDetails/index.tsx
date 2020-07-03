import React, {useCallback, useRef} from 'react';
import {PermissionsAndroid, Platform} from 'react-native';
import Share from 'react-native-share';
import {useRoute, RouteProp} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {captureRef} from 'react-native-view-shot';
import RNFS from 'react-native-fs';

import {HeroData, Stats} from '../../static/heros';
import HeroStats from '../../components/HeroStats';
import HeroAbiliity from '../../components/HeroAbiliity';

import Tank from '../../assets/tank.png';
import Bruiser from '../../assets/bruiser.png';
import Support from '../../assets/support.png';
import Healer from '../../assets/healer.png';
import RangedAssassin from '../../assets/ranged-assassin.png';
import MeleeAssassin from '../../assets/melee-assassin.png';

import {
  Container,
  ContainerShot,
  CardContainer,
  CardImage,
  ContainerContent,
  HeroName,
  HeroSubName,
  HeroHistory,
  HeroTitles,
  HeroDescription,
  HeroTypeContainer,
  HeroTypeImage,
  HeroTypeView,
  HeroTypeName,
  HeroTypeDescription,
  ShareButton,
  ShareButtonText,
} from './styles';

type HeroDetailsProps = {
  params: {
    hero: HeroData;
  };
};

const HeroDetails: React.FC = () => {
  const shotViewRef = useRef(null);
  const {params} = useRoute<RouteProp<HeroDetailsProps, 'params'>>();
  const {hero} = params;

  const getImageType = useCallback(() => {
    switch (hero.expandedRole?.slug) {
      case 'tank':
        return Tank;
      case 'bruiser':
        return Bruiser;
      case 'support':
        return Support;
      case 'healer':
        return Healer;
      case 'ranged-assassin':
        return RangedAssassin;
      case 'melee-assassin':
        return MeleeAssassin;
    }
  }, [hero]);

  const handleShare = useCallback(async () => {
    try {
      const capture = await captureRef(shotViewRef, {
        format: 'jpg',
        quality: 1,
        result: 'tmpfile',
      });

      const fileName = `/rcn-hots-${hero.slug}.jpg`;
      let filePath = `${RNFS.DocumentDirectoryPath}${fileName}`;
      if (Platform.OS === 'android') {
        await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Precisamos de sua permissão',
            message: 'Para salvar a imagem na sua galeria.',
            buttonPositive: 'Permitir',
          },
        );

        filePath = `${RNFS.DownloadDirectoryPath}${fileName}`;
      }

      await RNFS.copyFile(capture, filePath);

      await Share.open({
        url: `file://${filePath}`,
      });
    } catch {
      console.log('error on share');
    }
  }, [hero]);

  return (
    <LinearGradient style={{flex: 1}} colors={['#1b1146', '#0e0520']}>
      <Container>
        <ContainerShot ref={shotViewRef}>
          <LinearGradient style={{flex: 1}} colors={['#1b1146', '#0e0520']}>
            <CardContainer>
              <CardImage
                source={{
                  uri: hero.cardPortrait,
                }}
              />
            </CardContainer>
            <ContainerContent>
              <HeroName>{hero.name}</HeroName>
              <HeroSubName>{hero.title}</HeroSubName>
              <HeroDescription>{hero.shortDescription}</HeroDescription>

              <HeroHistory>História</HeroHistory>
              <HeroDescription>{hero.description}</HeroDescription>

              <HeroTypeContainer>
                <HeroTypeImage source={getImageType()} />
                <HeroTypeView>
                  <HeroTypeName heroType={hero.expandedRole?.slug}>
                    {hero.expandedRole?.name}
                  </HeroTypeName>
                  <HeroTypeDescription heroType={hero.expandedRole?.slug}>
                    {hero.expandedRole?.description}
                  </HeroTypeDescription>
                </HeroTypeView>
              </HeroTypeContainer>

              <HeroStats stats={hero.stats as Stats} />

              <HeroTitles>HABILIDADES</HeroTitles>
              {hero.abilities?.map((ability) => (
                <HeroAbiliity key={ability.slug} ability={ability} />
              ))}

              <HeroTitles>HEROICAS</HeroTitles>
              {hero.heroicAbilities?.map((ability) => (
                <HeroAbiliity key={ability.slug} ability={ability} />
              ))}

              <HeroTitles>ESPECIALIZAÇÃO</HeroTitles>
              <HeroAbiliity ability={hero.trait} />

              {hero.otherAbilities?.length && (
                <>
                  <HeroTitles>OUTRAS HABILIDADES</HeroTitles>
                  {hero.otherAbilities?.map((ability, index) => (
                    <HeroAbiliity
                      key={`${index}${ability.slug}`}
                      ability={ability}
                    />
                  ))}
                </>
              )}
            </ContainerContent>
          </LinearGradient>
        </ContainerShot>

        <ShareButton onPress={handleShare}>
          <ShareButtonText>COMPARTILHAR</ShareButtonText>
        </ShareButton>
      </Container>
    </LinearGradient>
  );
};

export default HeroDetails;
