import React, {useState, useCallback, useEffect} from 'react';
import {FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

import HeroCircleIcon from '../../components/HeroCircleIcon';
import heros from '../../static/heros';

import all from '../../assets/all.svg';
import tank from '../../assets/tank.svg';
import bruiser from '../../assets/bruiser.svg';
import support from '../../assets/support.svg';
import healer from '../../assets/healer.svg';
import rangedassassin from '../../assets/ranged-assassin.svg';
import meleeassassin from '../../assets/melee-assassin.svg';

import warcraft from '../../assets/warcraft.svg';
import starcraft from '../../assets/starcraft.svg';
import diablo from '../../assets/diablo.svg';
import overwatch from '../../assets/overwatch.svg';
import retro from '../../assets/retro.svg';

import {
  ContainerSafe,
  Container,
  ContainerFilter,
  FilterButton,
  FilterIcon,
} from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation();
  const [listHeros, setListHeros] = useState(heros);

  const [roles] = useState([
    'all:Todos',
    'tank:Tanque',
    'bruiser:Guerreiro',
    'support:Suporte',
    'healer:Curandeiro',
    'ranged-assassin:Assassino de Longo Alcance',
    'melee-assassin:Assassino Corpo a Corpo',
  ]);

  const [universes] = useState([
    'all:Todos',
    'warcraft:Warcraft',
    'starcraft:Starcraft',
    'diablo:Diablo',
    'overwatch:Overwatch',
    'retro:Retro',
  ]);

  const [currentRoles, setCurrentRoles] = useState('all');
  const [currentUniverses, setCurrentUniverses] = useState('all');

  useEffect(() => {
    setListHeros(() => {
      const filterRoles = [];
      const notFilterRoles = [];

      for (const currentHero of heros) {
        if (currentHero.expandedRole?.slug === currentRoles) {
          filterRoles.push(currentHero);
        } else {
          notFilterRoles.push(currentHero);
        }
      }

      const finalRoles = [...filterRoles, ...notFilterRoles];

      const filterUniverses = [];
      const notFilterUniverses = [];

      for (const currentHero of finalRoles) {
        if (currentHero.franchise === currentUniverses) {
          filterUniverses.push(currentHero);
        } else {
          notFilterUniverses.push(currentHero);
        }
      }

      const finalUniverses = [...filterUniverses, ...notFilterUniverses];
      return finalUniverses;
    });
  }, [currentRoles, currentUniverses]);

  const getRoleType = useCallback((role: string) => {
    switch (role) {
      case 'all':
        return all;
      case 'tank':
        return tank;
      case 'bruiser':
        return bruiser;
      case 'support':
        return support;
      case 'healer':
        return healer;
      case 'ranged-assassin':
        return rangedassassin;
      case 'melee-assassin':
        return meleeassassin;
    }
  }, []);

  const getUniverseType = useCallback((universe: string) => {
    switch (universe) {
      case 'all':
        return all;
      case 'warcraft':
        return warcraft;
      case 'starcraft':
        return starcraft;
      case 'diablo':
        return diablo;
      case 'overwatch':
        return overwatch;
      case 'retro':
        return retro;
    }
  }, []);

  return (
    <LinearGradient style={{flex: 1}} colors={['#1b1146', '#0e0520']}>
      <ContainerSafe>
        <Container>
          <ContainerFilter>
            {roles.map((role) => (
              <FilterButton
                key={role}
                onPress={() => {
                  setCurrentRoles(role.split(':')[0]);
                }}>
                <FilterIcon
                  fill={
                    role.split(':')[0] === currentRoles ? '#FFF' : '#9c9c9c'
                  }
                  xml={getRoleType(role.split(':')[0])}
                />
              </FilterButton>
            ))}
          </ContainerFilter>

          <ContainerFilter>
            {universes.map((universe) => (
              <FilterButton
                key={universe}
                onPress={() => {
                  setCurrentUniverses(universe.split(':')[1]);
                }}>
                <FilterIcon
                  fill={
                    universe.split(':')[1] === currentUniverses
                      ? '#FFF'
                      : '#9c9c9c'
                  }
                  xml={getUniverseType(universe.split(':')[0])}
                />
              </FilterButton>
            ))}
          </ContainerFilter>

          <FlatList
            data={listHeros}
            keyExtractor={({slug}) => `${slug}`}
            renderItem={({item}) => (
              <HeroCircleIcon
                heroData={item}
                onPress={() => {
                  navigation.navigate('HeroDetails', {hero: item});
                }}
              />
            )}
            numColumns={3}
          />
        </Container>
      </ContainerSafe>
    </LinearGradient>
  );
};

export default Home;
