import React, {useCallback, useRef, useState, useEffect} from 'react';
import {PermissionsAndroid, Platform} from 'react-native';
import Share from 'react-native-share';
import {useRoute, RouteProp} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {captureRef} from 'react-native-view-shot';
import RNFS from 'react-native-fs';

import {useLoading} from '../../Hooks/loading';
import api from '../../services/api';

import {HeroData, Stats, HeroTalentBuild} from '../../@types/heroes';
import HeroStats from '../../components/HeroStats';
import HeroAbiliity from '../../components/HeroAbiliity';
import HeroTalent from '../../components/HeroTalent';

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
  TabButtonContainer,
  TabButton,
} from './styles';

type HeroDetailsProps = {
  params: {
    hero: HeroData;
  };
};

type TabsOptions = 'abiliity' | 'talents';

const HeroDetails: React.FC = () => {
  const {loading, setLoading} = useLoading();
  const shotViewRef = useRef(null);
  const {params} = useRoute<RouteProp<HeroDetailsProps, 'params'>>();
  const {hero} = params;

  const [heroToShow, setHeroToShow] = useState<HeroData>({} as HeroData);
  const [heroBuild, setHeroBuild] = useState<HeroTalentBuild[]>([]);
  const [currentTab, setCurrentTab] = useState<TabsOptions>('abiliity');

  useEffect(() => {
    async function loadDataApi() {
      setLoading(true);

      try {
        const [resHero, resTalent] = await Promise.all([
          api.get(`/heroes/${hero.slug}`),
          api.get(`/hero-build/${hero.slug}`),
        ]);
        setHeroToShow(resHero.data);
        setHeroBuild(resTalent.data.build);
      } catch {}

      setLoading(false);
    }

    loadDataApi();
  }, [setLoading, hero]);

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
    } catch {}
  }, [hero]);

  if (loading) {
    return <LinearGradient style={{flex: 1}} colors={['#1b1146', '#0e0520']} />;
  }

  return (
    <Container>
      <ContainerShot ref={shotViewRef}>
        <CardContainer>
          <CardImage
            source={{
              uri: heroToShow.cardPortrait,
            }}
          />
        </CardContainer>
        <ContainerContent>
          <HeroName>{heroToShow.name}</HeroName>
          <HeroSubName>{heroToShow.title}</HeroSubName>
          <HeroDescription>{heroToShow.shortDescription}</HeroDescription>

          <HeroHistory>História</HeroHistory>
          <HeroDescription>{heroToShow.description}</HeroDescription>

          <HeroTypeContainer>
            <HeroTypeImage source={getImageType()} />
            <HeroTypeView>
              <HeroTypeName heroType={heroToShow.expandedRole?.slug}>
                {heroToShow.expandedRole?.name}
              </HeroTypeName>
              <HeroTypeDescription heroType={heroToShow.expandedRole?.slug}>
                {heroToShow.expandedRole?.description}
              </HeroTypeDescription>
            </HeroTypeView>
          </HeroTypeContainer>

          <HeroStats stats={heroToShow.stats as Stats} />

          <TabButtonContainer>
            <TabButton
              selectedTab={currentTab === 'abiliity'}
              onPress={() => {
                setCurrentTab('abiliity');
              }}>
              <HeroTitles>HABILIDADES</HeroTitles>
            </TabButton>
            <TabButton
              selectedTab={currentTab === 'talents'}
              onPress={() => {
                setCurrentTab('talents');
              }}>
              <HeroTitles>TALENTOS</HeroTitles>
            </TabButton>
          </TabButtonContainer>

          {currentTab === 'talents' && (
            <>
              {heroBuild.map((talent) => (
                <HeroTalent key={talent.buildName} talentBuild={talent} />
              ))}
            </>
          )}

          {currentTab === 'abiliity' && (
            <>
              {heroToShow.abilities?.map((ability) => (
                <HeroAbiliity key={ability.slug} ability={ability} />
              ))}

              <HeroTitles>HEROICAS</HeroTitles>
              {heroToShow.heroicAbilities?.map((ability) => (
                <HeroAbiliity key={ability.slug} ability={ability} />
              ))}

              <HeroTitles>ESPECIALIZAÇÃO</HeroTitles>
              <HeroAbiliity ability={heroToShow.trait} />

              {heroToShow.otherAbilities?.length && (
                <>
                  <HeroTitles>OUTRAS HABILIDADES</HeroTitles>
                  {heroToShow.otherAbilities?.map((ability, index) => (
                    <HeroAbiliity
                      key={`${index}${ability.slug}`}
                      ability={ability}
                    />
                  ))}
                </>
              )}
            </>
          )}
        </ContainerContent>
      </ContainerShot>

      <ShareButton onPress={handleShare}>
        <ShareButtonText>COMPARTILHAR</ShareButtonText>
      </ShareButton>
    </Container>
  );
};

export default HeroDetails;
