export interface HeroData {
  name?: string;
  title?: string;
  role?: Role;
  type?: Type;
  description?: string;
  shortDescription?: string;
  difficulty?: string;
  circleIcon?: string;
  cardPortrait?: string;
  franchise?: string;
  release?: Date | string;
  isNew?: boolean;
  slug?: string;
  trait?: Trait;
  href?: string;
  abilities?: Ability[];
  heroicAbilities?: Ability[];
  otherAbilities?: Trait[];
  expandedRole?: Role;
  stats?: Stats;
  skin?: Skin;
}

export interface Ability {
  name?: string;
  description?: string;
  displayText?: string;
  vital?: string;
  cooldown?: string;
  slug?: string;
  icon?: string;
}

export interface Role {
  name?: string;
  description?: string;
  slug?: string;
}

export interface Trait {
  name?: string;
  description?: string;
  displayText?: string;
  slug?: string;
  icon?: string;
  cooldown?: string;
  vital?: string;
}

export interface Skin {
  id?: string;
  name?: Description;
  description?: Description;
  href?: Href;
  slug?: string;
}

export interface Description {
  en_US?: string;
  es_MX?: string;
  pt_BR?: string;
  de_DE?: string;
  en_GB?: string;
  es_ES?: string;
  fr_FR?: string;
  it_IT?: string;
  pl_PL?: string;
  ru_RU?: string;
  ko_KR?: string;
  zh_TW?: string;
  zh_CN?: string;
}

export interface Href {
  href?: string;
}

export interface Stats {
  damage?: number;
  utility?: number;
  survivability?: number;
  complexity?: number;
}

export interface Type {
  name?: string;
  slug?: string;
}

const heros = [
  {
    name: 'Mei',
    title: 'Climatologista Aventureira',
    role: {
      name: 'Guerreiro',
      description: 'Guerreiro Defensores e combatentes da linha de frente.',
      slug: 'warrior',
    },
    type: {
      name: 'Longo Alcance',
      slug: 'ranged',
    },
    description:
      'Uma mente brilhante com disposição acalorada! A Dra. Mei-Ling Zhou entrou na Overwatch para resolver os problemas climáticos do mundo, com equipamentos que alteram as condições atmosféricas. Agora, ela luta para proteger seus amigos e garantir um futuro melhor para o mundo.',
    shortDescription:
      'Uma heroína Tanque que controla e altera o campo de batalha com tecnologia meteorológica.',
    difficulty: 'Médio',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/mei/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/mei-948726a5cc.jpg',
    franchise: 'Overwatch',
    release: '2020-06-23T00:00:00.000Z',
    isNew: true,
    slug: 'mei',
    trait: {
      name: 'Congelamento Criogênico',
      description:
        'Envolve-se em gelo por 3 s, ganhando um Escudo que decai depressa e absorve até 1104 de dano. Enquanto durar, esse Escudo concede Irrefreável e restaura até 35% do máximo de Vida de Mei.',
      displayText: 'Ative para ganhar Escudo e recuperar Vida',
      cooldown: 'Recarga: 40 segundos',
      slug: 'cryo-freeze',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/mei/traits/icons/cryo-freeze_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/mei/',
    abilities: [
      {
        name: 'Neve Cegante',
        description:
          'Joga uma bola de neve que atinge todos os inimigos na área. Inimigos atingidos recebem 70 de dano, são desacelerados em 35% e ficam cegos por 1.5 s.',
        displayText: 'Joga uma bola de neve que desacelera e cega',
        vital: 'Mana: 35',
        cooldown: 'Recarga: 10 s',
        slug: 'snow-blind',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/mei/abilities/icons/snow-blind_square.png',
      },
      {
        name: 'Nevasca',
        description:
          'Ordena que o Bola de Neve crie uma nevasca no local selecionado por 2 s. Os inimigos dentro dela recebem 13 de dano a cada 0,25 s e ficam desacelerados em 7%, acumulando até 35%. Quando a nevasca acaba, os inimigos na área afetada recebem mais 75 de dano e ficam atordoados por 1.25 s.',
        displayText: 'Congela inimigos em uma área',
        vital: 'Mana: 70',
        cooldown: 'Recarga: 14 segundos',
        slug: 'blizzard',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/mei/abilities/icons/blizzard_square.png',
      },
      {
        name: 'Deslizada Gélida',
        description:
          'Desliza rapidamente até o local selecionado. Quando acaba, os inimigos próximos a Mei são repelidos, recebem 52 de dano e ficam desacelerados em 80%, decaindo ao longo de 1.5 s.  A Deslizada pode ser cancelada antes do tempo.',
        displayText: 'Desliza em uma direção e repele inimigos',
        vital: 'Mana: 70',
        cooldown: 'Recarga: 14 segundos',
        slug: 'icing',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/mei/abilities/icons/icing_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: 'Avalanche',
        description:
          'Após 0.5 s, rola uma enorme bola de neve que engole Heróis inimigos no caminho. No fim da trajetória, a bola se desfaz e liberta os Heróis aprisionados, causando 220 de dano e atordoando por 0.5 s para cada Herói engolido.',
        displayText: 'Engole Heróis com uma enorme bola de neve',
        vital: 'Mana: 70',
        cooldown: 'Recarga: 65 segundos',
        slug: 'avalanche',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/mei/abilities/icons/avalanche_square.png',
      },
      {
        name: 'Muralha de Gelo',
        description:
          'Mira Vetorial Após 0.75 s, cria uma muralha intransponível que aprisiona Heróis inimigos atingidos por 2.5 s. Quando a muralha acaba, os Heróis aprisionados ficam desacelerados em 75%, decaindo ao longo de 3 s.',
        displayText: 'Aprisiona inimigos em uma muralha intransponível',
        vital: 'Mana: 60',
        cooldown: 'Recarga: 90 segundos',
        slug: 'ice-wall',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/mei/abilities/icons/ice-wall_square.png',
      },
    ],
    otherAbilities: [
      {
        name: 'Congelamento Criogênico',
        description: 'Cancela Congelamento Criogênico',
        displayText: 'Ative para ganhar Escudo e recuperar Vida',
        slug: 'cryo-freeze',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/mei/abilities/icons/cryo-freeze_square.png',
      },
    ],
    expandedRole: {
      name: 'Tanque',
      description:
        'Tanque Defensores da linha de frente, capazes de resistir a grandes estragos. Cuidam da proteção dos companheiros mais frágeis.',
      slug: 'tank',
    },
    stats: {
      damage: 3,
      utility: 7,
      survivability: 8,
      complexity: 4,
    },
    skin: {
      id: 'MeiOWBaseCommon',
      name: {
        en_US: 'Adventuring Climatologist',
        es_MX: 'Climatóloga aventurera',
        pt_BR: 'Climatologista Aventureira',
        de_DE: 'Abenteuerlustige Klimaforscherin',
        en_GB: 'Adventuring Climatologist',
        es_ES: 'Climatóloga aventurera',
        fr_FR: 'Climatologue aventurière',
        it_IT: 'Climatologa Avventuriera',
        pl_PL: 'Nieustraszona Klimatolożka',
        ru_RU: 'Отважный климатолог',
        ko_KR: '모험심 가득한 기후학자',
        zh_TW: '熱愛冒險的科學家',
        zh_CN: '爱冒险的气象学家',
      },
      description: {
        en_US: 'Adventuring Climatologist',
        es_MX: 'Climatóloga aventurera',
        pt_BR: 'Climatologista Aventureira',
        de_DE: 'Abenteuerlustige Klimaforscherin',
        en_GB: 'Adventuring Climatologist',
        es_ES: 'Climatóloga aventurera',
        fr_FR: 'Climatologue aventurière',
        it_IT: 'Climatologa Avventuriera',
        pl_PL: 'Nieustraszona Klimatolożka',
        ru_RU: 'Отважный климатолог',
        ko_KR: '모험심 가득한 기후학자',
        zh_TW: '熱愛冒險的科學家',
        zh_CN: '爱冒险的气象学家',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/MeiOWBaseCommon?namespace=hms_80333',
      },
      slug: 'adventuring-climatologist',
    },
  },
  {
    name: 'Asa da Morte',
    title: 'O Destruidor',
    role: {
      name: 'Guerreiro',
      description: 'Guerreiro Defensores e combatentes da linha de frente.',
      slug: 'warrior',
    },
    type: {
      name: 'Corpo a Corpo',
      slug: 'melee',
    },
    description:
      'Um dos cinco Aspectos Dragônicos e líder da Revoada Dragônica Negra, Neltharion, o Guardião da Terra, já foi um protetor de Azeroth. Durante a Guerra dos Antigos, os Deuses Antigos o deixaram louco e ele se voltou contra seus aliados. Conhecido hoje como Asa da Morte, o Destruidor, ele chegou ao Nexus, onde a fúria sem limites o impele rumo ao seu objetivo de semear destruição e dar fim a tudo que é vivo. ',
    shortDescription:
      'Um dragão colossal e irrefreável capaz de suportar ataques enquanto ele mesmo ataca, mas que não é afetado por Habilidades de aliados.',
    difficulty: 'Médio',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/deathwing/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/deathwing-b007b23426.jpg',
    franchise: 'Warcraft',
    release: '2019-12-03T00:00:00.000Z',
    isNew: false,
    slug: 'deathwing',
    trait: {
      name: 'Aspecto da Morte',
      description:
        'Asa da Morte ganha 4 Placas de Armadura. Cada uma concede 10 de Armadura. A cada 25% de Vida perdida, Asa da Morte perde uma placa. As placas só são restauradas com o uso de Revoada Dragônica, com base na quantidade de Vida que Asa da Morte tem ao pousar.  Asa da Morte também é um poderoso Aspecto Dragônico permanentemente Irrefreável e causa 100% de Dano Mágico adicional a Heróis, mas despreza os aliados e ignora todos os efeitos provenientes deles.',
      displayText:
        'Asa da Morte é poderosíssimo, mas ignora efeitos de aliados',
      cooldown: 'Recarga: 20 segundos',
      slug: 'aspect-of-death',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/deathwing/traits/icons/aspect-of-death_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/deathwing/',
    abilities: [
      {
        name: 'Chama Derretida',
        description:
          'Após 1.5 s, Asa da Morte sopra um jato de chamas, causando 21 de dano a cada 0.125 s. Drena 30 de Energia por segundo. ',
        displayText: 'Derrete os inimigos com um jato de chama derretida',
        vital: 'Energia: 10',
        cooldown: 'Recarga: 3 segundos',
        slug: 'molten-flame',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/deathwing/abilities/icons/molten-flame_square.png',
      },
      {
        name: 'Incinerar',
        description:
          'Após 0.75 s, Asa da Morte bate as asas, causando 70 de dano aos inimigos próximos.  Quebramundo: Estouro de Lava Cria uma poça de lava que causa dano e desacelera',
        displayText: 'Causa dano aos inimigos perto de Asa da Morte',
        vital: 'Energia: 15',
        cooldown: 'Recarga: 4 segundos',
        slug: 'incinerate',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/deathwing/abilities/icons/incinerate_square.png',
      },
      {
        name: 'Massacre',
        description:
          'Após 0.5 s, Asa da Morte mergulha em uma direção, causando 38 de dano aos inimigos e desacelerando-os em 35% por 2 s. Asa da Morte morde os inimigos no fim do mergulho, causando um adicional de 72 de dano.  Quebramundo: Estilhaçar Terra Causa dano e atordoa os inimigos em duas linhas',
        displayText: 'Investe em uma direção',
        vital: 'Energia: 20',
        cooldown: 'Recarga: 5 segundos',
        slug: 'onslaught',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/deathwing/abilities/icons/onslaught_square.png',
      },
      {
        name: 'Revoada Dragônica',
        description:
          'Após 3 s, levanta voo, ficando imune a todos os efeitos e ganhando 2.5% de Vida por segundo. Ao ser ativada, esta habilidade não pode ser interrompida. Receber dano, Ataques Básicos e lançar Habilidades põe esta Habilidade em uma recarga de 4 s.',
        displayText: 'Ascende aos céus',
        cooldown: 'Recarga: 45 segundos',
        slug: 'dragonflight',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/deathwing/abilities/icons/dragonflight_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: 'Cataclismo',
        description:
          'Após 2 s, Asa da Morte voa na direção selecionada, causando 90 de dano com o impacto e calcinando a terra, que causa 36 de dano por segundo. Dura 6 s.',
        displayText:
          'Asa da Morte sobrevoa uma área, deixando um rastro de destruição.',
        cooldown: 'Recarga: 90 segundos',
        slug: 'cataclysm',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/deathwing/abilities/icons/cataclysm_square.png',
      },
    ],
    otherAbilities: [
      {
        name: 'Estouro de Lava',
        description:
          'Após um atraso de 1 s, causa 30 de dano a todos os inimigos na área e cria uma poça de magma que causa 20 de dano por segundo e desacelera os inimigos em 0%. Dura 6 s.  Destruidor: Incinerar Causa dano aos inimigos perto de Asa da Morte ',
        displayText: 'Cria uma poça de lava que causa dano e desacelera',
        vital: 'Energia: 20',
        cooldown: 'Recarga: 6 segundos',
        slug: 'lava-burst',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/deathwing/abilities/icons/lava-burst_square.png',
      },
      {
        name: 'Estilhaçar Terra',
        description:
          'Cria uma fissura na terra que causa 90 de dano aos inimigos atingidos e os atordoa por 0.75 s.  Destruidor: Massacre Investe em uma direção',
        displayText: 'Causa dano e atordoa os inimigos em duas linhas',
        vital: 'Energia: 25',
        cooldown: 'Recarga: 12 segundos',
        slug: 'earth-shatter',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/deathwing/abilities/icons/earth-shatter_square.png',
      },
    ],
    expandedRole: {
      name: 'Guerreiro',
      description:
        'Guerreiro Guerreiros poderosos e resistentes capazes de causar estragos. Com potencial de tanqueamento limitado, eles contam com mobilidade adicional, controle coletivo ou capacidade de sobrevivência.',
      slug: 'bruiser',
    },
    stats: {
      damage: 7,
      utility: 7,
      survivability: 10,
      complexity: 8,
    },
    skin: {
      id: 'DeathwingBaseCommon',
      name: {
        en_US: 'The Destroyer',
        es_MX: 'El Destructor',
        pt_BR: 'O Destruidor',
        de_DE: 'Der Zerstörer',
        en_GB: 'The Destroyer',
        es_ES: 'El Destructor',
        fr_FR: 'Le Destructeur',
        it_IT: 'Il Distruttore',
        pl_PL: 'Niszczyciel',
        ru_RU: 'Разрушитель',
        ko_KR: '파괴자',
        zh_TW: '毀滅者',
        zh_CN: '灭世者',
      },
      description: {
        en_US: 'The Destroyer',
        es_MX: 'El Destructor',
        pt_BR: 'O Destruidor',
        de_DE: 'Der Zerstörer',
        en_GB: 'The Destroyer',
        es_ES: 'El Destructor',
        fr_FR: 'Le Destructeur',
        it_IT: 'Il Distruttore',
        pl_PL: 'Niszczyciel',
        ru_RU: 'Разрушитель',
        ko_KR: '파괴자',
        zh_TW: '毀滅者',
        zh_CN: '灭世者',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/DeathwingBaseCommon?namespace=hms_80333',
      },
      slug: 'the-destroyer',
    },
  },
  {
    name: 'Qhira',
    title: 'Caçadora de Recompensas sem Reino',
    role: {
      name: 'Assassino',
      description: 'Assassino Matadores de heróis e semeadores de sofrimento.',
      slug: 'assassin',
    },
    type: {
      name: 'Longo Alcance',
      slug: 'ranged',
    },
    description:
      'Guerreira devota e portadora de um Estilhaço de Singularidade, o único objetivo de Qhira é encontrar qualquer um que tenha sobrevivido à destruição de seu lar, Irésia. Enquanto não acha, Qhira atua como caçadora de recompensas... um trabalho que ela odeia, apesar de sua grande aptidão.',
    shortDescription:
      'Uma Assassina Corpo a Corpo brutal, perita em iniciar e finalizar combates.',
    difficulty: 'Médio',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/qhira/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/qhira-626a5d3b1f.jpg',
    franchise: 'Retro',
    release: '2019-08-06T00:00:00.000Z',
    isNew: false,
    slug: 'qhira',
    trait: {
      name: 'Arpéu',
      description:
        'Qhira lança um Arpéu que a puxa na direção do terreno atingido. Se um Herói inimigo for atingido, ele receberá 35 de dano e Qhira será lançada na direção dele, desferindo um chute que causa mais 108 de dano.  Pode ser usado enquanto o Impulso Giratório estiver ativo.',
      displayText: 'Qhira se joga na direção de terrenos ou Heróis',
      cooldown: 'Recarga: 25 segundos',
      slug: 'grappling-hook',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/qhira/traits/icons/grappling-hook_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/qhira/',
    abilities: [
      {
        name: 'Carnificina',
        description:
          'Projeta a espada na direção selecionada, causando continuamente 30 de dano aos inimigos no caminho.',
        displayText: 'Projeta a espada para causar dano na área à frente',
        vital: 'Mana: 40',
        cooldown: 'Recarga: 6 segundos',
        slug: 'carnage',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/qhira/abilities/icons/carnage_square.png',
      },
      {
        name: 'Fúria do Sangue',
        description:
          'Passivo: O dano dos Ataques Básicos e das Habilidades provocam sangramento, causando 44 de dano ao longo de 4 s. Acumula até 5 vezes.  Ativo: Qhira causa 32 de dano e recupera 85 de Vida por Herói inimigo afetado. O dano e a cura aumentam em 50% para cada aplicação adicional no Herói.',
        displayText:
          'Ataques Básicos e Habilidades causam dano ao longo do tempo',
        vital: 'Mana: 35',
        cooldown: 'Recarga: 8 segundos',
        slug: 'blood-rage',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/qhira/abilities/icons/blood-rage_square.png',
      },
      {
        name: 'Impulso Giratório',
        description:
          'Prende sua espada no primeiro Herói inimigo atingido, causando 96 de dano e atordoando-o por 0.25 s. Ao prender a espada, Qhira fica imune a todos os efeitos, girando ao redor do alvo por 2.75 s e causando 105 de dano aos inimigos entre ela e o alvo.  Ative novamente para se lançar na direção do alvo, repelindo, causando 108 de dano e atordoando as vítimas por 0.75 s.',
        displayText: 'Prende-se a um Herói inimigo para rodopiar e atordoá-lo',
        vital: 'Mana: 70',
        cooldown: 'Recarga: 16 segundos',
        slug: 'revolving-sweep',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/qhira/abilities/icons/revolving-sweep_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: 'Golpes Implacáveis',
        description:
          'Causa 44 de dano a inimigos próximos a cada 0.5 s por 2.5 s, conforme sua espada vai crescendo. Ao expirar, causa 160 de dano aos Heróis inimigos próximos e os atordoa por 1.5 s.',
        displayText: 'Causa dano e atordoa inimigos próximos',
        vital: 'Mana: 50',
        cooldown: 'Recarga: 60 segundos',
        slug: 'unrelenting-strikes',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/qhira/abilities/icons/unrelenting-strikes_square.png',
      },
      {
        name: 'Golpe Final',
        description:
          'Após 1 s, causa 395 de dano a inimigos em uma linha reta. O dano aumenta em 25% contra Heróis inimigos que tiverem menos de 50% de Vida.',
        displayText: 'Prolonga a espada para desferir um golpe final',
        vital: 'Mana: 45',
        cooldown: 'Recarga: 40 segundos',
        slug: 'final-strike',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/qhira/abilities/icons/final-strike_square.png',
      },
    ],
    expandedRole: {
      name: 'Assassino Corpo a Corpo',
      description:
        'Assassino Corpo a Corpo Matadores de heróis e semeadores de sofrimento. Especialistas em causar dano elevado a alvos únicos e emboscadas.',
      slug: 'melee-assassin',
    },
    stats: {
      damage: 8,
      utility: 6,
      survivability: 7,
      complexity: 6,
    },
    skin: {
      id: 'NexusHunterBaseCommon',
      name: {
        en_US: 'Realmless Bounty Hunter',
        es_MX: 'Cazarrecompensas sin reino',
        pt_BR: 'Caçadora de Recompensas sem Reino',
        de_DE: 'Heimatlose Kopfgeldjägerin',
        en_GB: 'Realmless Bounty Hunter',
        es_ES: 'Cazarrecompensas sin reino',
        fr_FR: 'Chasseuse de primes apatride',
        it_IT: 'Cacciatrice di taglie senza reame',
        pl_PL: 'Bezkrainowa Łowczyni Nagród',
        ru_RU: 'Охотница за головами из погибшего мира',
        ko_KR: '정처 없는 현상금 사냥꾼',
        zh_TW: '流離失所的賞金獵人',
        zh_CN: '伊莱西亚赏金猎人',
      },
      description: {
        en_US: 'Realmless Bounty Hunter',
        es_MX: 'Cazarrecompensas sin reino',
        pt_BR: 'Caçadora de Recompensas sem Reino',
        de_DE: 'Heimatlose Kopfgeldjägerin',
        en_GB: 'Realmless Bounty Hunter',
        es_ES: 'Cazarrecompensas sin reino',
        fr_FR: 'Chasseuse de primes apatride',
        it_IT: 'Cacciatrice di taglie senza reame',
        pl_PL: 'Bezkrainowa Łowczyni Nagród',
        ru_RU: 'Охотница за головами из погибшего мира',
        ko_KR: '정처 없는 현상금 사냥꾼',
        zh_TW: '流離失所的賞金獵人',
        zh_CN: '伊莱西亚赏金猎人',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/NexusHunterBaseCommon?namespace=hms_80333',
      },
      slug: 'realmless-bounty-hunter',
    },
  },
  {
    name: 'Anduin',
    title: 'Rei de Ventobravo',
    role: {
      name: 'Suporte',
      description:
        'Suporte O Suporte concede bônus e outros benefícios aos companheiros.',
      slug: 'support',
    },
    type: {
      name: 'Longo Alcance',
      slug: 'ranged',
    },
    description:
      'Quando jovem, Anduin buscou paz como sacerdote da Luz Sagrada e enviado da Aliança. Depois que seu pai, Varian, caiu para a Legião Ardente, ele herdou o título de Alto-rei da Aliança. Ele logo descobriu que a paz precisa ser obtida com luta, mesmo no Nexus.',
    shortDescription:
      'Um Curandeiro de longo alcance que pode puxar aliados para longe do perigo.',
    difficulty: 'Médio',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/anduin/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/anduin-ea001794c6.jpg',
    franchise: 'Warcraft',
    release: '2019-04-30T00:00:00.000Z',
    isNew: false,
    slug: 'anduin',
    trait: {
      name: 'Salto da Fé',
      description:
        'Fé puxa instantaneamente um Herói aliado até Anduin, deixando-o Irrefreável durante o deslocamento.',
      displayText: 'Puxa um Herói aliado até você',
      cooldown: 'Recarga: 80 s',
      slug: 'leap-of-faith',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/anduin/traits/icons/leap-of-faith_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/anduin/',
    abilities: [
      {
        name: 'Cura Célere',
        description: 'Canaliza por 0.75 s e cura um Herói aliado em 260.',
        displayText: 'Cura um aliado',
        vital: 'Mana: 25',
        cooldown: 'Recarga: 4 segundos',
        slug: 'flash-heal',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/anduin/abilities/icons/flash-heal_square.png',
      },
      {
        name: 'Estrela Divina',
        description:
          'Lança uma luz que causa 140 de dano a inimigos e volta maior para Anduin, curando em 130 os Heróis aliados no caminho. A cura aumenta em 25% por Herói inimigo atingido.',
        displayText: 'Lança um raio dos céus que causa dano e cura',
        vital: 'Mana: 50',
        cooldown: 'Recarga: 9 segundos',
        slug: 'divine-star',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/anduin/abilities/icons/divine-star_square.png',
      },
      {
        name: 'Castigar',
        description:
          'Lança uma luz adiante, causando 155 de dano ao primeiro Herói inimigo atingido e enraizando-o por 1.25 s.',
        displayText: 'Lança para a frente uma luz que enraíza',
        vital: 'Mana: 40',
        cooldown: 'Recarga: 10 segundos',
        slug: 'chastise',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/anduin/abilities/icons/chastise_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: 'Palavra Sagrada: Salvação',
        description:
          'Canaliza por 0.5 s, depois evoca a Luz por 3 s. Heróis aliados próximos da Luz são curados em até 25% do máximo de Vida deles e ficam Protegidos.',
        displayText: 'Protege e cura aliados perto de Anduin',
        vital: 'Mana: 70',
        cooldown: 'Recarga: 80 segundos',
        slug: 'holy-word-salvation',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/anduin/abilities/icons/holy-word-salvation_square.png',
      },
      {
        name: 'Bomba Luminosa',
        description:
          'Imbui um Herói aliado na Luz. Após 1.5 s, a Luz explode, causando 150 de dano a inimigos e atordoando-os por 1.25 s.  O Herói imbuído na Luz ganha um Escudo que absorve 165 de dano por Herói inimigo atingido. Dura 5 s.',
        displayText: 'Atordoa inimigos ao redor de um aliado',
        vital: 'Mana: 70',
        cooldown: 'Recarga: 60 segundos',
        slug: 'lightbomb',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/anduin/abilities/icons/lightbomb_square.png',
      },
    ],
    otherAbilities: [
      {
        name: 'Cancelar Palavra Sagrada: Salvação',
        description: 'Cancelar Palavra Sagrada: Salvação.',
        displayText: 'Cancelar Palavra Sagrada: Salvação',
        cooldown: 'Recarga: 1 segundo',
        slug: 'cancel-holy-word-salvation',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/anduin/abilities/icons/cancel-holy-word-salvation_square.png',
      },
    ],
    expandedRole: {
      name: 'Curandeiro',
      description:
        'Curandeiro Amigos para todas as horas. Sempre presentes para manter os aliados vivos e relativamente saudáveis nas lutas em equipe.',
      slug: 'healer',
    },
    stats: {
      damage: 2,
      utility: 7,
      survivability: 4,
      complexity: 4,
    },
    skin: {
      id: 'AnduinBaseCommon',
      name: {
        en_US: 'King of Stormwind',
        es_MX: 'Rey de Ventormenta',
        pt_BR: 'Rei de Ventobravo',
        de_DE: 'König von Sturmwind',
        en_GB: 'King of Stormwind',
        es_ES: 'Rey de Ventormenta',
        fr_FR: 'Roi de Hurlevent',
        it_IT: 'Re di Roccavento',
        pl_PL: 'Król Wichrogrodu',
        ru_RU: 'Король Штормграда',
        ko_KR: '스톰윈드 국왕',
        zh_TW: '暴風城之王',
        zh_CN: '暴风城国王',
      },
      description: {
        en_US: 'King of Stormwind',
        es_MX: 'Rey de Ventormenta',
        pt_BR: 'Rei de Ventobravo',
        de_DE: 'König von Sturmwind',
        en_GB: 'King of Stormwind',
        es_ES: 'Rey de Ventormenta',
        fr_FR: 'Roi de Hurlevent',
        it_IT: 'Re di Roccavento',
        pl_PL: 'Król Wichrogrodu',
        ru_RU: 'Король Штормграда',
        ko_KR: '스톰윈드 국왕',
        zh_TW: '暴風城之王',
        zh_CN: '暴风城国王',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/AnduinBaseCommon?namespace=hms_80333',
      },
      slug: 'king-of-stormwind',
    },
  },
  {
    name: 'Impérius',
    title: 'Arcanjo da Bravura',
    role: {
      name: 'Guerreiro',
      description: 'Guerreiro Defensores e combatentes da linha de frente.',
      slug: 'warrior',
    },
    type: {
      name: 'Corpo a Corpo',
      slug: 'melee',
    },
    description:
      'Líder do Conselho Ângiris e Aspecto da Bravura, Impérius liderou com valentia os exércitos do Paraíso Celestial em inúmeras vitórias sobre os demônios do Inferno Ardente. Com métodos rigorosos e precisos, não há na criação defensor mais magnífico da retidão.',
    shortDescription:
      'Um Guerreiro que conduz o ataque a toda, lançando mão de uma iniciação poderosa e dano contra alvos únicos.',
    difficulty: 'Médio',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/imperius/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/imperius-4f2753bb56.jpg',
    franchise: 'Diablo',
    release: '2019-01-08T00:00:00.000Z',
    isNew: false,
    slug: 'imperius',
    trait: {
      name: 'Marca da Bravura',
      description:
        'As Habilidades Básicas marcam Heróis inimigos atingidos por 10 s. Ataques Básicos consomem as marcas do alvo, causando 20% a mais de dano por marca e recuperando 75 de Vida por marca.',
      displayText:
        'Habilidades Básicas marcam Heróis inimigos, aumentando Ataque Básico e cura',
      slug: 'valorous-brand',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/imperius/traits/icons/valorous-brand_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/imperius/',
    abilities: [
      {
        name: 'Investida Celestial',
        description:
          'Salta na direção do alvo e ataca, causando 35 de dano. Se um Herói inimigo for atingido, canaliza um efeito que atordoa por 1 s e causa 70 a mais de dano ao terminar totalmente.',
        displayText: 'Investe à frente e atordoa os inimigos',
        vital: 'Mana: 40',
        cooldown: 'Recarga: 10 segundos',
        slug: 'celestial-charge',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/imperius/abilities/icons/celestial-charge_square.png',
      },
      {
        name: 'Chamas de Solarion',
        description:
          'Lança uma onda flamejante que causa 100 de dano. Inimigos atingidos pelo centro recebem 50% a mais de dano extra e são desacelerados em 40% por 3 s.',
        displayText: 'Causa dano e desacelera inimigos enfileirados',
        vital: 'Mana: 50',
        cooldown: 'Recarga: 8 segundos',
        slug: 'solarions-fire',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/imperius/abilities/icons/solarions-fire_square.png',
      },
      {
        name: 'Armadura Incandescente',
        description:
          'Envolve Impérius em chamas por 3 s, causando 19 de dano aos inimigos próximos a cada 0.25 s. Impérius é curado em 50% do dano causado. Contra Heróis, a cura é de 100%.',
        displayText: 'Queima inimigos próximos',
        vital: 'Mana: 75',
        cooldown: 'Recarga: 12 segundos',
        slug: 'molten-armor',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/imperius/abilities/icons/molten-armor_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: 'Armamento Angelical',
        description:
          'Evoca um círculo de espadas flamejantes que concede 1000 de Escudo por 3 s.  Se o Escudo durar até o fim, por até 5 s a habilidade poderá ser reativada para atirar 6 espadas em uma área. Cada espada causa 140 de dano ao primeiro inimigo atingido.',
        displayText: 'Concede um grande Escudo; reativar causa dano',
        vital: 'Mana: 70',
        cooldown: 'Recarga: 70 segundos',
        slug: 'angelic-armaments',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/imperius/abilities/icons/angelic-armaments_square.png',
      },
      {
        name: 'Ira de Ângiris',
        description:
          'Após 0.75 s, investe na direção selecionada, alçando o primeiro Herói inimigo atingido rumo ao Paraíso. No ar, Impérius pode alterar o local de aterrissagem se movendo.  Após 2 s, lança o alvo contra o chão, causando 375 de dano e atordoando por 1 s.',
        displayText: 'Ascende com um inimigo rumo ao Paraíso',
        vital: 'Mana: 80',
        cooldown: 'Recarga: 80 segundos',
        slug: 'wrath-of-the-angiris',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/imperius/abilities/icons/wrath-of-the-angiris_square.png',
      },
    ],
    expandedRole: {
      name: 'Guerreiro',
      description:
        'Guerreiro Guerreiros poderosos e resistentes capazes de causar estragos. Com potencial de tanqueamento limitado, eles contam com mobilidade adicional, controle coletivo ou capacidade de sobrevivência.',
      slug: 'bruiser',
    },
    stats: {
      damage: 6,
      utility: 6,
      survivability: 5,
      complexity: 6,
    },
    skin: {
      id: 'ImperiusBaseCommon',
      name: {
        en_US: 'Archangel of Valor',
        es_MX: 'Arcángel del Valor',
        pt_BR: 'Arcanjo da Bravura',
        de_DE: 'Erzengel der Tapferkeit',
        en_GB: 'Archangel of Valor',
        es_ES: 'Arcángel del Valor',
        fr_FR: 'Archange de la Vaillance',
        it_IT: 'Arcangelo del Valore',
        pl_PL: 'Archanioł Odwagi',
        ru_RU: 'Архангел Доблести',
        ko_KR: '용기의 대천사',
        zh_TW: '勇天使',
        zh_CN: '勇气大天使',
      },
      description: {
        en_US: 'Archangel of Valor',
        es_MX: 'Arcángel del Valor',
        pt_BR: 'Arcanjo da Bravura',
        de_DE: 'Erzengel der Tapferkeit',
        en_GB: 'Archangel of Valor',
        es_ES: 'Arcángel del Valor',
        fr_FR: 'Archange de la Vaillance',
        it_IT: 'Arcangelo del Valore',
        pl_PL: 'Archanioł Odwagi',
        ru_RU: 'Архангел Доблести',
        ko_KR: '용기의 대천사',
        zh_TW: '勇天使',
        zh_CN: '勇气大天使',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/ImperiusBaseCommon?namespace=hms_80333',
      },
      slug: 'archangel-of-valor',
    },
  },
  {
    name: 'Orféa',
    title: 'Herdeira de Paço dos Corvos',
    role: {
      name: 'Assassino',
      description: 'Assassino Matadores de heróis e semeadores de sofrimento.',
      slug: 'assassin',
    },
    type: {
      name: 'Longo Alcance',
      slug: 'ranged',
    },
    description:
      'Rejeitando os poderes sombrios com os quais o pai se envolveu, Orféa tentou fugir da influência do Senhor dos Corvos. No entanto, depois de ver Crista Régia cair diante das maquinações dele, ela se convenceu de que precisava lutar. Agora ela jurou proteger os inocentes no papel de Heroína do Nexus.',
    shortDescription:
      'Assassina de longo alcance que dança ao redor dos inimigos enquanto usa feitiços para potencializar os próprios ataques.',
    difficulty: 'Médio',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/orphea/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/orphea-72dc6033c1.jpg',
    franchise: 'Retro',
    release: '2018-11-13T00:00:00.000Z',
    isNew: false,
    slug: 'orphea',
    trait: {
      name: 'Caos Ilimitado',
      description:
        'Atingir um Herói inimigo com uma Habilidade Básica concede 1 de Caos, podendo acumular até 3 vezes.  Ataques Básicos contra Heróis consomem todo o Caos e causam 50% a mais de dano por aplicação, além de curar Orféa em 100% do dano causado.',
      displayText: 'Habilidades Básicas contra Heróis inimigos concedem Caos',
      slug: 'overflowing-chaos',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/orphea/traits/icons/overflowing-chaos_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/orphea/',
    abilities: [
      {
        name: 'Valsa das Sombras',
        description:
          'Após 0.5 s, causa 165 de dano a inimigos em linha reta.   Atingir Heróis com Valsa das Sombras reduz a recarga para 2 s, restaura 35 de Mana e faz Orféa arremeter por uma curta distância ao se locomover.',
        displayText:
          'Causa dano a inimigos em linha reta e Orféa faz uma arremetida ao atingir um Herói',
        vital: 'Mana: 35',
        cooldown: 'Recarga: 5 segundos',
        slug: 'shadow-waltz',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/orphea/abilities/icons/shadow-waltz_square.png',
      },
      {
        name: 'Abocanhar',
        description:
          'Após 0.625 s, causa 305 de dano a inimigos próximos à frente de Orféa.',
        displayText: 'Causa dano em inimigos à frente de Orféa',
        vital: 'Mana: 60',
        cooldown: 'Recarga: 10 segundos',
        slug: 'chomp',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/orphea/abilities/icons/chomp_square.png',
      },
      {
        name: 'Onda de Pavor',
        description:
          'Libera uma Onda de Pavor que causa 85 de dano aos inimigos atingidos. 0.75 s após a Onda concluir sua trajetória, a área onde ela termina explode, causando 175 de dano. Os inimigos atingidos pela Onda de Pavor ou pela explosão ficam desacelerados em 25% por 2 s.',
        displayText:
          'Causa dano a inimigos em linha reta, explodindo após um breve intervalo',
        vital: 'Mana: 50',
        cooldown: 'Recarga: 14 segundos',
        slug: 'dread',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/orphea/abilities/icons/dread_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: 'Banquete Eterno',
        description:
          'Após 1.5 s, causa 210 de dano em uma área. Sempre que Banquete Eterno atingir pelo menos um Herói inimigo, ele se repetirá após 1 s.',
        displayText: 'Causa dano repetidamente aos inimigos em uma área',
        vital: 'Mana: 75',
        cooldown: 'Recarga: 50 segundos',
        slug: 'eternal-feast',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/orphea/abilities/icons/eternal-feast_square.png',
      },
      {
        name: 'Mandíbulas Esmagadoras',
        description:
          'Após 1.25 s, puxa os inimigos para o centro, causando 250 de dano e atordoando-os por 0.5 s.',
        displayText: 'Puxa, causa dano e atordoa inimigos em uma área',
        vital: 'Mana: 75',
        cooldown: 'Recarga: 70 segundos',
        slug: 'crushing-jaws',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/orphea/abilities/icons/crushing-jaws_square.png',
      },
    ],
    expandedRole: {
      name: 'Assassino de Longo Alcance',
      description:
        'Assassino de Longo Alcance Causadores de dano que fazem chover balas, flechas ou feitiços mortíferos sobre os inimigos. Geralmente frágeis, eles se sentem mais seguros mantendo distância dos inimigos.',
      slug: 'ranged-assassin',
    },
    stats: {
      damage: 9,
      utility: 5,
      survivability: 7,
      complexity: 4,
    },
    skin: {
      id: 'OrpheaBaseCommon',
      name: {
        en_US: 'Heir of Raven Court',
        es_MX: 'Heredera de la Corte del Cuervo',
        pt_BR: 'Herdeira de Paço dos Corvos',
        de_DE: 'Erbin des Rabenhofs',
        en_GB: 'Heir of Raven Court',
        es_ES: 'Heredera de la Corte del Cuervo',
        fr_FR: 'Héritière de la cour du Corbeau',
        it_IT: 'Erede della Corte del Corvo',
        pl_PL: 'Dziedziczka Kruczego Dworu',
        ru_RU: 'Наследница Вороньего двора',
        ko_KR: '까마귀 궁정의 후예',
        zh_TW: '掠鴉之庭的繼承人',
        zh_CN: '乌鸦庭继承人',
      },
      description: {
        en_US: 'Heir of Raven Court',
        es_MX: 'Heredera de la Corte del Cuervo',
        pt_BR: 'Herdeira de Paço dos Corvos',
        de_DE: 'Erbin des Rabenhofs',
        en_GB: 'Heir of Raven Court',
        es_ES: 'Heredera de la Corte del Cuervo',
        fr_FR: 'Héritière de la cour du Corbeau',
        it_IT: 'Erede della Corte del Corvo',
        pl_PL: 'Dziedziczka Kruczego Dworu',
        ru_RU: 'Наследница Вороньего двора',
        ko_KR: '까마귀 궁정의 후예',
        zh_TW: '掠鴉之庭的繼承人',
        zh_CN: '乌鸦庭继承人',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/OrpheaBaseCommon?namespace=hms_80333',
      },
      slug: 'heir-of-raven-court',
    },
  },
  {
    name: "Mal'Ganis",
    title: 'Senhor dos Nathrezim',
    role: {
      name: 'Guerreiro',
      description: 'Guerreiro Defensores e combatentes da linha de frente.',
      slug: 'warrior',
    },
    type: {
      name: 'Corpo a Corpo',
      slug: 'melee',
    },
    description:
      "Matreiro e inteligente, Mal'Ganis foi escolhido pelo Lich Rei para recrutar Arthas Menethil. Depois de induzir o príncipe a dizimar toda forma de vida de Stratholme, ele finalmente sucumbiu à Gélido Lamento no que foi o primeiro ato de Arthas como campeão do Lich Rei... mas um demônio não morre tão facilmente.",
    shortDescription:
      'Um tanque autossuficiente que ajuda aliados e atrapalha inimigos.',
    difficulty: 'Médio',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/malganis/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/malganis-a1ac224160.jpg',
    franchise: 'Warcraft',
    release: '2018-10-16T00:00:00.000Z',
    isNew: false,
    slug: 'malganis',
    trait: {
      name: 'Toque Vampírico',
      description:
        "Mal'Ganis recebe cura equivalente a 45% do dano causado a Heróis inimigos e 10% do dano causado a não Heróis.",
      displayText: "Mal'Ganis se cura ao causar dano",
      slug: 'vampiric-touch',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/malganis/traits/icons/vampiric-touch_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/malganis/',
    abilities: [
      {
        name: 'Garras Vis',
        description:
          'Investe violentamente na direção escolhida, causando 63 de dano aos inimigos.  Ative de novo para rasgar mais 2 vezes. O terceiro talho atordoa inimigos por 0.75 s.',
        displayText: 'Dá vários golpes amplos frontais, causando dano',
        vital: 'Mana: 45',
        cooldown: 'Recarga: 8 segundos',
        slug: 'fel-claws',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/malganis/abilities/icons/fel-claws_square.png',
      },
      {
        name: 'Abraço Necrótico',
        description:
          'Profana o ar, causando 110 de dano aos inimigos próximos e recebendo 25 de Armadura por 3 s.',
        displayText: "Causa dano ao redor de Mal'Ganis; concede Armadura",
        vital: 'Mana: 35',
        cooldown: 'Recarga: 8 segundos',
        slug: 'necrotic-embrace',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/malganis/abilities/icons/necrotic-embrace_square.png',
      },
      {
        name: 'Ímpeto Noturno',
        description:
          "Depois de 0.75 s, aumenta a velocidade de movimento de Mal'Ganis em 50% por 2 s. Enquanto está ativo, Mal'Ganis pode atravessar Heróis inimigos e adormecê-los por 2.5 s.",
        displayText: 'Recebe Velocidade de Movimento e adormece inimigos',
        vital: 'Mana: 70',
        cooldown: 'Recarga: 16 segundos',
        slug: 'night-rush',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/malganis/abilities/icons/night-rush_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: 'Enxame Carniceiro',
        description:
          "Depois de 1 s, Mal'Ganis se dispersa em um enxame Invulnerável de morcegos por 3 s, causando 120 de dano por segundo aos inimigos.  Toque Vampírico cura o equivalente a 75% do dano de Enxame Carniceiro a Heróis.",
        displayText: 'Dispersa e causa dano em uma área',
        vital: 'Mana: 70',
        cooldown: 'Recarga: 100 s',
        slug: 'carrion-swarm',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/malganis/abilities/icons/carrion-swarm_square.png',
      },
      {
        name: 'Conversão Sombria',
        description:
          'Canaliza em um Herói inimigo por 0.75 s, depois troca de percentual de Vida com o alvo por 3 s.',
        displayText: 'Troca de Vida com um Herói inimigo',
        vital: 'Mana: 70',
        cooldown: 'Recarga: 80 segundos',
        slug: 'dark-conversion',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/malganis/abilities/icons/dark-conversion_square.png',
      },
    ],
    otherAbilities: [
      {
        name: 'Garras Vis',
        description:
          'Investe violentamente na direção escolhida, causando 63 de dano aos inimigos.  Ative de novo para rasgar mais 2 vezes. O terceiro talho atordoa inimigos por 0.75 s.',
        displayText: 'Dá vários golpes amplos frontais, causando dano',
        slug: 'fel-claws',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/malganis/abilities/icons/fel-claws_square.png',
      },
      {
        name: 'Garras Vis',
        description:
          'Investe violentamente na direção escolhida, causando 63 de dano aos inimigos.  Ative de novo para rasgar mais 2 vezes. O terceiro talho atordoa inimigos por 0.75 s.',
        displayText: 'Dá vários golpes amplos frontais, causando dano',
        slug: 'fel-claws',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/malganis/abilities/icons/fel-claws_square.png',
      },
    ],
    expandedRole: {
      name: 'Tanque',
      description:
        'Tanque Defensores da linha de frente, capazes de resistir a grandes estragos. Cuidam da proteção dos companheiros mais frágeis.',
      slug: 'tank',
    },
    stats: {
      damage: 5,
      utility: 3,
      survivability: 7,
      complexity: 3,
    },
    skin: {
      id: 'MalGanisBaseCommon',
      name: {
        en_US: 'Nathrezim Lord',
        es_MX: 'Señor de los nathrezim',
        pt_BR: 'Senhor dos Nathrezim',
        de_DE: 'Lord der Nathrezim',
        en_GB: 'Nathrezim Lord',
        es_ES: 'Señor Nathrezim',
        fr_FR: 'Seigneur nathrezim',
        it_IT: 'Signore Nathrezim',
        pl_PL: 'Władca Nathrezimów',
        ru_RU: 'Натрезимский владыка',
        ko_KR: '나스레짐 군주',
        zh_TW: '納斯雷茲姆領主',
        zh_CN: '纳斯雷兹姆领主',
      },
      description: {
        en_US: 'Nathrezim Lord',
        es_MX: 'Señor de los nathrezim',
        pt_BR: 'Senhor dos Nathrezim',
        de_DE: 'Lord der Nathrezim',
        en_GB: 'Nathrezim Lord',
        es_ES: 'Señor Nathrezim',
        fr_FR: 'Seigneur nathrezim',
        it_IT: 'Signore Nathrezim',
        pl_PL: 'Władca Nathrezimów',
        ru_RU: 'Натрезимский владыка',
        ko_KR: '나스레짐 군주',
        zh_TW: '納斯雷茲姆領主',
        zh_CN: '纳斯雷兹姆领主',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/MalGanisBaseCommon?namespace=hms_80333',
      },
      slug: 'nathrezim-lord',
    },
  },
  {
    name: 'Mefisto',
    title: 'Senhor do Ódio',
    role: {
      name: 'Assassino',
      description: 'Assassino Matadores de heróis e semeadores de sofrimento.',
      slug: 'assassin',
    },
    type: {
      name: 'Longo Alcance',
      slug: 'ranged',
    },
    description:
      'Dul’Mefistos, o Senhor do Ódio, é tido como o mais ardiloso dos três irmãos. Mesmo preso em uma pedra da alma, Mefisto conseguiu, com sua influência torpe, corromper e manipular os Zakarum, que romperam o selo e lhe deram liberdade para reunir os Males Supremos e escravizar a humanidade.',
    shortDescription:
      'Assassino de dano contínuo, bom contra grupos de inimigos.',
    difficulty: 'Médio',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/mephisto/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/mephisto-158e980962.jpg',
    franchise: 'Diablo',
    release: '2018-09-04T00:00:00.000Z',
    isNew: false,
    slug: 'mephisto',
    trait: {
      name: 'Senhor do Ódio',
      description:
        'Atingir Heróis inimigos com Habilidades Básicas reduz a recarga das Habilidades Básicas de Mefisto.  Crânio Nefasto e Vulto de Mefisto concedem 1.5 s de redução de recarga por Herói atingido, e a Nova Elétrica, 0.3 s.',
      displayText:
        'Atingir Heróis com Habilidades Básicas reduz as recargas de Mefisto',
      slug: 'lord-of-hatred',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/mephisto/traits/icons/lord-of-hatred_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/mephisto/',
    abilities: [
      {
        name: 'Crânio Nefasto',
        description:
          'Evoca um crânio que viaja na direção-alvo após 0.75 s, causando 127 de dano aos inimigos atingidos e desacelerando Heróis atingidos em 25% por 2 s.',
        displayText:
          'Após um breve intervalo, causa dano a inimigos em linha reta',
        vital: 'Mana: 20',
        cooldown: 'Recarga: 8 segundos',
        slug: 'skull-missile',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/mephisto/abilities/icons/skull-missile_square.png',
      },
      {
        name: 'Nova Elétrica',
        description:
          'Um anel de eletricidade aparece ao redor de Mefisto por 2.5 s. Inimigos em contato com o anel recebem 45 de dano a cada 0.25 s.  O dano da Nova Elétrica aumenta em 3% cada vez que atinge um Herói inimigo, até um máximo de 30%.',
        displayText: 'Causa dano crescente a inimigos próximos',
        vital: 'Mana: 50',
        cooldown: 'Recarga: 14 segundos',
        slug: 'lightning-nova',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/mephisto/abilities/icons/lightning-nova_square.png',
      },
      {
        name: 'Vulto de Mefisto',
        description:
          'Teleporta-se para um local, causando 78 de dano a inimigos próximos e deixando um Vulto de Mefisto na posição inicial.   Após 2.5 s, Mefisto é teleportado de volta para o lugar do Vulto.',
        displayText:
          'Teleporta-se para o local selecionado e volta depois de um curto período',
        vital: 'Mana: 35',
        cooldown: 'Recarga: 18 segundos',
        slug: 'shade-of-mephisto',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/mephisto/abilities/icons/shade-of-mephisto_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: 'Devorar Almas',
        description:
          'Canaliza por 2.5 s, revelando todos os Heróis inimigos. Depois de canalizar a habilidade, todos os Heróis inimigos recebem 357 de dano e são desacelerados em 25% por 2.5 s.',
        displayText: 'Causa dano e desacelera todos os Heróis inimigos',
        vital: 'Mana: 80',
        cooldown: 'Recarga: 120 segundos',
        slug: 'consume-souls',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/mephisto/abilities/icons/consume-souls_square.png',
      },
      {
        name: 'Prisão de Ódio',
        description:
          'Após 1 s, libera uma onda de espíritos malignos que enraízam o primeiro Herói inimigo atingido por 2.5 s e causam 250 de dano ao longo do período de tempo do enraizamento.  Prisão de Ódio se espalha a partir do alvo inicial, enraizando e causando dano a Heróis inimigos próximos.',
        displayText: 'Libera espíritos que enraízam',
        vital: 'Mana: 50',
        cooldown: 'Recarga: 50 segundos',
        slug: 'durance-of-hate',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/mephisto/abilities/icons/durance-of-hate_square.png',
      },
    ],
    expandedRole: {
      name: 'Assassino de Longo Alcance',
      description:
        'Assassino de Longo Alcance Causadores de dano que fazem chover balas, flechas ou feitiços mortíferos sobre os inimigos. Geralmente frágeis, eles se sentem mais seguros mantendo distância dos inimigos.',
      slug: 'ranged-assassin',
    },
    stats: {
      damage: 8,
      utility: 4,
      survivability: 6,
      complexity: 7,
    },
    skin: {
      id: 'MephistoBaseCommon',
      name: {
        en_US: 'Lord of Hatred',
        es_MX: 'Señor del Odio',
        pt_BR: 'Senhor do Ódio',
        de_DE: 'Herr des Hasses',
        en_GB: 'Lord of Hatred',
        es_ES: 'Señor del Odio',
        fr_FR: 'Seigneur de la Haine',
        it_IT: "Signore dell'Odio",
        pl_PL: 'Władca Nienawiści',
        ru_RU: 'Владыка Ненависти',
        ko_KR: '증오의 군주',
        zh_TW: '憎恨之王',
        zh_CN: '憎恨之王',
      },
      description: {
        en_US: 'Lord of Hatred',
        es_MX: 'Señor del Odio',
        pt_BR: 'Senhor do Ódio',
        de_DE: 'Herr des Hasses',
        en_GB: 'Lord of Hatred',
        es_ES: 'Señor del Odio',
        fr_FR: 'Seigneur de la Haine',
        it_IT: "Signore dell'Odio",
        pl_PL: 'Władca Nienawiści',
        ru_RU: 'Владыка Ненависти',
        ko_KR: '증오의 군주',
        zh_TW: '憎恨之王',
        zh_CN: '憎恨之王',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/MephistoBaseCommon?namespace=hms_80333',
      },
      slug: 'lord-of-hatred',
    },
  },
  {
    name: 'Cristalba',
    title: 'Alta-inquisidora',
    role: {
      name: 'Suporte',
      description:
        'Suporte O Suporte concede bônus e outros benefícios aos companheiros.',
      slug: 'support',
    },
    type: {
      name: 'Longo Alcance',
      slug: 'ranged',
    },
    description:
      'Como alta-inquisidora da Cruzada Escarlate, Sally Cristalba lidera com fervor seus campeões na interminável guerra contra os mortos-vivos. Graças ao poder da Luz, ela usa suas chamas purificantes para expurgar todos os que foram infectados... quer queiram ou não.',
    shortDescription:
      'Uma Curandeira versátil, que cura os aliados enquanto rechaça os inimigos.',
    difficulty: 'Médio',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/whitemane/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/whitemane-b7bcb3abe1.jpg',
    franchise: 'Warcraft',
    release: '2018-08-07T00:00:00.000Z',
    isNew: false,
    slug: 'whitemane',
    trait: {
      name: 'Zelo',
      description:
        'As habilidades de cura de Cristalba aplicam Zelo por 8 s. Aliados com Zelo recebem uma cura de 100% do dano que Cristalba causa a Heróis.  Ative para ganhar 25% de Poder Mágico e perder 25 de Armadura por 5 s. Pode ser usado enquanto canaliza habilidades.',
      displayText: 'Causar dano cura os aliados marcados',
      slug: 'zeal',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/whitemane/traits/icons/zeal_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/whitemane/',
    abilities: [
      {
        name: 'Súplica Desesperada',
        description:
          'Cura 140 de Vida de um Herói aliado e ganha Desespero por 4 s.  Desespero aumenta o custo de Mana da Súplica Desesperada em 45, acumulando até 3 vezes.  Custo de Mana atual: 45',
        displayText: 'Cura um Herói aliado',
        vital: 'Mana: 45',
        slug: 'desperate-plea',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/whitemane/abilities/icons/desperate-plea_square.png',
      },
      {
        name: 'Inquisição',
        description:
          'Canaliza em um Herói inimigo por até 3 s, causando 50 de dano a cada 0.5 s e desacelerando a vítima em 30%. Remove uma aplicação de Desespero.  Compartilha recarga com Clemência.',
        displayText: 'Causa dano ou cura Heróis',
        cooldown: 'Recarga: 12 segundos',
        slug: 'inquisition',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/whitemane/abilities/icons/inquisition_square.png',
      },
      {
        name: 'Açoite Calcinante',
        description:
          'Após 0.5 s, pune os inimigos em uma linha reta, causando 82 de dano.  Se um Herói inimigo for atingido, outro ataque será lançado logo em seguida.',
        displayText: 'Causa dano a inimigos em uma linha reta',
        cooldown: 'Recarga: 6 segundos',
        slug: 'searing-lash',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/whitemane/abilities/icons/searing-lash_square.png',
      },
      {
        name: 'Clemência',
        description:
          'Ative para lançar Inquisição em um Herói aliado, curando até 329 de Vida ao longo de 3 s enquanto canaliza. Remove uma aplicação de Desespero.  Compartilha recarga com Inquisição.',
        displayText: 'Inquisição pode curar aliados',
        cooldown: 'Recarga: 12 segundos',
        slug: 'clemency',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/whitemane/abilities/icons/clemency_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: 'Égide Escarlate',
        description:
          'Fortalece o espírito dos Heróis aliados próximos, curando 250 de Vida deles e concedendo 40 de Armadura por 4 s.',
        displayText: 'Cura e concede Armadura aos aliados próximos',
        cooldown: 'Recarga: 60 segundos',
        slug: 'scarlet-aegis',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/whitemane/abilities/icons/scarlet-aegis_square.png',
      },
      {
        name: 'Ajuste de Contas Divino',
        description:
          'Após 1 s, consagra uma área por 4 s, causando 50 de dano a cada 0.5 s aos inimigos dentro dela. 25% do dano causado a Heróis é convertido em Mana.',
        displayText: 'Consagra uma área',
        cooldown: 'Recarga: 75 segundos',
        slug: 'divine-reckoning',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/whitemane/abilities/icons/divine-reckoning_square.png',
      },
    ],
    expandedRole: {
      name: 'Curandeiro',
      description:
        'Curandeiro Amigos para todas as horas. Sempre presentes para manter os aliados vivos e relativamente saudáveis nas lutas em equipe.',
      slug: 'healer',
    },
    stats: {
      damage: 5,
      utility: 7,
      survivability: 5,
      complexity: 8,
    },
    skin: {
      id: 'WhitemaneBaseCommon',
      name: {
        en_US: 'High Inquisitor',
        es_MX: 'Alta inquisidora',
        pt_BR: 'Alta-inquisidora',
        de_DE: 'Hochinquisitorin',
        en_GB: 'High Inquisitor',
        es_ES: 'Alta inquisidora',
        fr_FR: 'Grande inquisitrice',
        it_IT: 'Gran Inquisitrice',
        pl_PL: 'Nadinkwizytorka Szkarłatnej Krucjaty',
        ru_RU: 'Верховный инквизитор',
        ko_KR: '종교재판관',
        zh_TW: '高階審判官',
        zh_CN: '大检察官',
      },
      description: {
        en_US: 'High Inquisitor',
        es_MX: 'Alta inquisidora',
        pt_BR: 'Alta-inquisidora',
        de_DE: 'Hochinquisitorin',
        en_GB: 'High Inquisitor',
        es_ES: 'Alta inquisidora',
        fr_FR: 'Grande inquisitrice',
        it_IT: 'Gran Inquisitrice',
        pl_PL: 'Nadinkwizytorka Szkarłatnej Krucjaty',
        ru_RU: 'Верховный инквизитор',
        ko_KR: '종교재판관',
        zh_TW: '高階審判官',
        zh_CN: '大检察官',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/WhitemaneBaseCommon?namespace=hms_80333',
      },
      slug: 'high-inquisitor',
    },
  },
  {
    name: 'Yrel',
    title: 'Luz da Esperança',
    role: {
      name: 'Guerreiro',
      description: 'Guerreiro Defensores e combatentes da linha de frente.',
      slug: 'warrior',
    },
    type: {
      name: 'Corpo a Corpo',
      slug: 'melee',
    },
    description:
      'Depois de viajar para uma Draenor alternativa, as forças de Azeroth salvaram a acólita Yrel da Horda de Ferro. Com a ajuda das forças de Azeroth, ela se tornou uma Exarca e lutou contra a invasão demoníaca em seu mundo. Agora ela está onde o tempo, o espaço e as dimensões convergem: o Nexus.',
    shortDescription:
      'Uma Guerreira corpo a corpo com habilidades poderosas que recompensam planejamentos precisos.',
    difficulty: 'Médio',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/yrel/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/yrel-70eefe5af8.jpg',
    franchise: 'Warcraft',
    release: '2018-06-12T00:00:00.000Z',
    isNew: false,
    slug: 'yrel',
    trait: {
      name: 'Desígnio Divino',
      description:
        'Ative para carregar instantaneamente a próxima Habilidade Básica de Yrel sem consumir mana.  Passivo: As Habilidades Básicas de Yrel carregam ao longo de 1.5 s, aumentando a eficácia, mas reduzindo a Velocidade de Movimento dela em 25%.',
      displayText:
        'Faz a próxima Habilidade Básica ser lançada instantaneamente',
      cooldown: 'Recarga: 8 segundos',
      slug: 'divine-purpose',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/yrel/traits/icons/divine-purpose_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/yrel/',
    abilities: [
      {
        name: 'Vindicação',
        description:
          'Libera energia sagrada ao redor de Yrel, causando 42 de dano aos inimigos próximos e curando-a em 96.  Carregar essa habilidade aumenta o dano dela em até 140 e a cura em até 320.',
        displayText: 'Recupera Vida; causa dano a inimigos',
        vital: 'Mana: 65',
        cooldown: 'Recarga: 6 segundos',
        slug: 'vindication',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/yrel/abilities/icons/vindication_square.png',
      },
      {
        name: 'Martelo dos Íntegros',
        description:
          'Golpeia com o martelo de Yrel, causando 38 de dano aos inimigos na frente dela e repelindo-os.  Carregar essa habilidade aumenta o dano dela em até 125, bem como a distância de repulsão. Inimigos atingidos com a carga máxima ficam atordoados por 0.75 s.',
        displayText: 'Repele e atordoa inimigos',
        vital: 'Mana: 65',
        cooldown: 'Recarga: 6 segundos',
        slug: 'righteous-hammer',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/yrel/abilities/icons/righteous-hammer_square.png',
      },
      {
        name: 'Ira Vingativa',
        description:
          'Salta para uma área, causando 225 de dano aos inimigos nela e desacelerando-os em 50% por 1 s.  Carregar essa habilidade aumenta o alcance dela.',
        displayText:
          'Salta para uma área, causando dano e desacelerando inimigos',
        vital: 'Mana: 65',
        cooldown: 'Recarga: 6 segundos',
        slug: 'avenging-wrath',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/yrel/abilities/icons/avenging-wrath_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: 'Defensora Ardente',
        description:
          'Yrel é cercada por uma barreira durante 3 s, absorvendo todo o dano recebido e curando-se em 50% do dano recebido.',
        displayText: 'Converte dano recebido em Vida',
        vital: 'Mana: 80',
        cooldown: 'Recarga: 120 segundos',
        slug: 'ardent-defender',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/yrel/abilities/icons/ardent-defender_square.png',
      },
      {
        name: 'Solo Sagrado',
        description:
          'Yrel santifica o solo ao seu redor, recebendo 50 de Armadura enquanto ela estiver na área santificada.',
        displayText: 'Yrel recebe Armadura em uma área',
        vital: 'Mana: 40',
        cooldown: 'Recarga: 40 segundos',
        slug: 'sacred-ground',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/yrel/abilities/icons/sacred-ground_square.png',
      },
    ],
    otherAbilities: [
      {
        name: 'Vindicação',
        description:
          'Libera energia sagrada ao redor de Yrel, causando 42 de dano aos inimigos próximos e curando-a em 96.  Carregar essa habilidade aumenta o dano dela em até 140 e a cura em até 320.',
        displayText: 'Recupera Vida; causa dano a inimigos',
        vital: 'Mana: 65',
        cooldown: 'Recarga: 6 segundos',
        slug: 'vindication',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/yrel/abilities/icons/vindication_square.png',
      },
      {
        name: 'Martelo dos Íntegros',
        description:
          'Golpeia com o martelo de Yrel, causando 38 de dano aos inimigos na frente dela e repelindo-os.  Carregar essa habilidade aumenta o dano dela em até 125, bem como a distância de repulsão. Inimigos atingidos com a carga máxima ficam atordoados por 0.75 s.',
        displayText: 'Repele e atordoa inimigos',
        vital: 'Mana: 65',
        cooldown: 'Recarga: 6 segundos',
        slug: 'righteous-hammer',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/yrel/abilities/icons/righteous-hammer_square.png',
      },
      {
        name: 'Martelo dos Íntegros',
        description:
          'Golpeia com o martelo de Yrel, causando 38 de dano aos inimigos na frente dela e repelindo-os.  Carregar essa habilidade aumenta o dano dela em até 125, bem como a distância de repulsão. Inimigos atingidos com a carga máxima ficam atordoados por 0.75 s.',
        displayText: 'Repele e atordoa inimigos',
        vital: 'Mana: 65',
        cooldown: 'Recarga: 6 segundos',
        slug: 'righteous-hammer',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/yrel/abilities/icons/righteous-hammer_square.png',
      },
      {
        name: 'Ira Vingativa',
        description:
          'Salta para uma área, causando 225 de dano aos inimigos nela e desacelerando-os em 50% por 1 s.  Carregar essa habilidade aumenta o alcance dela.',
        displayText:
          'Salta para uma área, causando dano e desacelerando inimigos',
        vital: 'Mana: 65',
        cooldown: 'Recarga: 6 segundos',
        slug: 'avenging-wrath',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/yrel/abilities/icons/avenging-wrath_square.png',
      },
      {
        name: 'Ira Vingativa',
        description:
          'Salta para uma área, causando 225 de dano aos inimigos nela e desacelerando-os em 50% por 1 s.  Carregar essa habilidade aumenta o alcance dela.',
        displayText:
          'Salta para uma área, causando dano e desacelerando inimigos',
        vital: 'Mana: 65',
        cooldown: 'Recarga: 6 segundos',
        slug: 'avenging-wrath',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/yrel/abilities/icons/avenging-wrath_square.png',
      },
    ],
    expandedRole: {
      name: 'Guerreiro',
      description:
        'Guerreiro Guerreiros poderosos e resistentes capazes de causar estragos. Com potencial de tanqueamento limitado, eles contam com mobilidade adicional, controle coletivo ou capacidade de sobrevivência.',
      slug: 'bruiser',
    },
    stats: {
      damage: 5,
      utility: 4,
      survivability: 10,
      complexity: 5,
    },
    skin: {
      id: 'YrelBaseCommon',
      name: {
        en_US: 'Light of Hope',
        es_MX: 'Luz de esperanza',
        pt_BR: 'Luz da Esperança',
        de_DE: 'Licht der Hoffnung',
        en_GB: 'Light of Hope',
        es_ES: 'Luz de la Esperanza',
        fr_FR: 'Lueur d’espoir',
        it_IT: 'Luce della Speranza',
        pl_PL: 'Światło Nadziei',
        ru_RU: 'Свет надежды',
        ko_KR: '희망의 빛',
        zh_TW: '希望之光',
        zh_CN: '希望之光',
      },
      description: {
        en_US: 'Light of Hope',
        es_MX: 'Luz de esperanza',
        pt_BR: 'Luz da Esperança',
        de_DE: 'Licht der Hoffnung',
        en_GB: 'Light of Hope',
        es_ES: 'Luz de la Esperanza',
        fr_FR: 'Lueur d’espoir',
        it_IT: 'Luce della Speranza',
        pl_PL: 'Światło Nadziei',
        ru_RU: 'Свет надежды',
        ko_KR: '희망의 빛',
        zh_TW: '希望之光',
        zh_CN: '希望之光',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/YrelBaseCommon?namespace=hms_80333',
      },
      slug: 'light-of-hope',
    },
  },
  {
    name: 'Deckard',
    title: 'O Último Horadrim',
    role: {
      name: 'Suporte',
      description:
        'Suporte O Suporte concede bônus e outros benefícios aos companheiros.',
      slug: 'support',
    },
    type: {
      name: 'Corpo a Corpo',
      slug: 'melee',
    },
    description:
      'O ávido estudioso Deckard passou toda sua vida em busca de conhecimento. Ele foi conselheiro e amigo próximo dos maiores heróis que Santuário já viu, guiando-os pelos perigos muitas e muitas vezes. Quando Deckard fala, é melhor ficar um pouco e escutar.',
    shortDescription:
      'Um Curandeiro que prepara o campo de batalha antes das lutas e atrapalha os inimigos com habilidades de controle coletivo.',
    difficulty: 'Médio',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/deckard/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/deckard-d538088dae.jpg',
    franchise: 'Diablo',
    release: '2018-04-24T00:00:00.000Z',
    isNew: false,
    slug: 'deckard',
    trait: {
      name: 'Fortitude do Devoto',
      description:
        'Enquanto houver pelo menos 1 Herói aliado por perto, Deckard ganha 10 de Armadura e as Habilidades Básicas recarregam 50% mais rápido.',
      displayText: 'Aliados próximos concedem Armadura e redução de recarga',
      slug: 'fortitude-of-the-faithful',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/deckard/traits/icons/fortitude-of-the-faithful_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/deckard/',
    abilities: [
      {
        name: 'Poção de Vida',
        description:
          'Joga uma Poção de Vida no chão que cura 270 de Vida do primeiro Herói aliado que entrar em contato com ela.  Limite de 5 Poções ativas.',
        displayText: 'Joga Poções que curam aliados',
        vital: 'Mana: 25',
        cooldown: 'Recarga: 4 segundos',
        slug: 'healing-potion',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/deckard/abilities/icons/healing-potion_square.png',
      },
      {
        name: 'Cubo Horádrico',
        description:
          'Libera o Cubo Horádrico. Depois de 0.5 s o cubo explode, causando 80 de dano a todos os inimigos na área e desacelerando-os em 35% por 1.75 s.',
        displayText: 'Causa dano e desacelera os inimigos em uma área',
        vital: 'Mana: 35',
        cooldown: 'Recarga: 12 segundos',
        slug: 'horadric-cube',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/deckard/abilities/icons/horadric-cube_square.png',
      },
      {
        name: 'Pergaminho de Contenção',
        description:
          'Desenrola um pergaminho mágico por 2.25 s, traçando um triângulo que causa 150 de dano aos inimigos dentro dele. As vítimas ficam enraizadas por 1.5 s.',
        displayText: 'Causa dano e enraíza inimigos em uma área',
        vital: 'Mana: 40',
        cooldown: 'Recarga: 16 segundos',
        slug: 'scroll-of-sealing',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/deckard/abilities/icons/scroll-of-sealing_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: 'Fique um Pouco e Escute',
        description:
          'Após 1 s, canaliza por 3 s, colocando os Heróis inimigos à frente de Deckard para dormir durante a canalização e por mais 2 s depois.  Os inimigos só podem adormecer uma vez por lançamento, e o efeito é quebrado instantaneamente se receberem dano.',
        displayText: 'Conta uma história fascinante para os inimigos dormirem',
        vital: 'Mana: 60',
        cooldown: 'Recarga: 70 segundos',
        slug: 'stay-awhile-and-listen',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/deckard/abilities/icons/stay-awhile-and-listen_square.png',
      },
      {
        name: 'Tornado do Saber',
        description:
          'Mira Vetorial Depois de 1 s, cria um Tornado do Saber que segue na direção selecionada, repelindo continuamente os inimigos que estiverem no caminho.',
        displayText: 'Conjura um Tornado do Saber para repelir inimigos',
        vital: 'Mana: 35',
        cooldown: 'Recarga: 30 segundos',
        slug: 'lorenado',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/deckard/abilities/icons/lorenado_square.png',
      },
    ],
    otherAbilities: [
      {
        name: 'Bênçãos Ancestrais',
        description:
          'Ative a Fortitude do Devoto para potencializar os Ataques Básicos dos Heróis aliados próximos por 8 s, fazendo com que eles causem 62 a mais de dano em área e curem 90 de Vida para cada Herói inimigo atingido. Este efeito só pode ocorrer uma vez a cada segundo.',
        displayText:
          'Ative Fortitude para potencializar os ataques dos aliados',
        cooldown: 'Recarga: 60 segundos',
        slug: 'ancient-blessings',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/deckard/abilities/icons/ancient-blessings_square.png',
      },
    ],
    expandedRole: {
      name: 'Curandeiro',
      description:
        'Curandeiro Amigos para todas as horas. Sempre presentes para manter os aliados vivos e relativamente saudáveis nas lutas em equipe.',
      slug: 'healer',
    },
    stats: {
      damage: 3,
      utility: 8,
      survivability: 7,
      complexity: 5,
    },
    skin: {
      id: 'DeckardBaseCommon',
      name: {
        en_US: 'The Last Horadrim',
        es_MX: 'El último Horadrim',
        pt_BR: 'O Último Horadrim',
        de_DE: 'Der Letzte der Horadrim',
        en_GB: 'The Last Horadrim',
        es_ES: 'El último Horadrim',
        fr_FR: 'Le dernier des Horadrims',
        it_IT: "L'ultimo degli Horadrim",
        pl_PL: 'Ostatni z Horadrimów',
        ru_RU: 'Последний из хорадримов',
        ko_KR: '마지막 호라드림',
        zh_TW: '赫拉迪姆的最後一員',
        zh_CN: '赫拉迪姆最后一人',
      },
      description: {
        en_US: 'The Last Horadrim',
        es_MX: 'El último Horadrim',
        pt_BR: 'O Último Horadrim',
        de_DE: 'Der Letzte der Horadrim',
        en_GB: 'The Last Horadrim',
        es_ES: 'El último Horadrim',
        fr_FR: 'Le dernier des Horadrims',
        it_IT: "L'ultimo degli Horadrim",
        pl_PL: 'Ostatni z Horadrimów',
        ru_RU: 'Последний из хорадримов',
        ko_KR: '마지막 호라드림',
        zh_TW: '赫拉迪姆的最後一員',
        zh_CN: '赫拉迪姆最后一人',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/DeckardBaseCommon?namespace=hms_80333',
      },
      slug: 'the-last-horadrim',
    },
  },
  {
    name: 'Fenix',
    title: 'Guardião dos Templários',
    role: {
      name: 'Assassino',
      description: 'Assassino Matadores de heróis e semeadores de sofrimento.',
      slug: 'assassin',
    },
    type: {
      name: 'Longo Alcance',
      slug: 'ranged',
    },
    description:
      'Como um dos maiores heróis da história dos protoss, as conquistas de Fenix no campo de batalha se tornaram lenda. Após sucumbir na invasão zerg a Aiur, seu corpo foi recuperado e implantado em um dragonte para continuar lutando. Nem mesmo a morte será capaz de impedir Fenix de alcançar sua tão sonhada glória.',
    shortDescription:
      'Um Assassino que causa dano contínuo e tem um Escudo regenerativo, muito eficaz nos duelos pelo campo de batalha.',
    difficulty: 'Médio',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/fenix/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/fenix-1d9f70b7bc.jpg',
    franchise: 'StarCraft',
    release: '2018-03-27T00:00:00.000Z',
    isNew: false,
    slug: 'fenix',
    trait: {
      name: 'Capacitor de Escudo',
      description:
        'Fenix tem 760 de Escudo permanente, que se regenera em 10% por segundo após ficar 5 s sem receber dano.',
      displayText: 'Escudo permanente que se regenera fora de combate',
      slug: 'shield-capacitor',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/fenix/traits/icons/shield-capacitor_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/fenix/',
    abilities: [
      {
        name: 'Retalhador Plásmico',
        description:
          'Dispara um raio laser traçando um círculo ao redor de Fenix a partir do ponto selecionado. Causa 135 de dano aos inimigos atingidos, desacelerando-os em 25% por 4 s.',
        displayText:
          'Dispara um laser ao redor, causando dano e desacelerando inimigos',
        cooldown: 'Recarga: 12 segundos',
        slug: 'plasma-cutter',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/fenix/abilities/icons/plasma-cutter_square.png',
      },
      {
        name: 'Modos de Arma',
        description:
          'Ative para alternar entre o Modo de Arma: Canhão de Repetição e o Modo de Arma: Bomba Fásica.  Modo de Arma: Canhão de Repetição: Velocidade de Ataque Básico aumenta em 150%.  Modo de Arma: Bomba Fásica: Aumenta em 1.25 o alcance e em 25% o dano dos Ataques Básicos, e faz com que acertem inimigos próximos.',
        displayText: 'Troca o Modo de Arma',
        slug: 'weapon-modes',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/fenix/abilities/icons/weapon-modes_square.png',
      },
      {
        name: 'Transdobrar',
        description:
          'Transdobra-se para o local selecionado. Desaparece após 0.5 s e chega ao destino 0.75 s depois.',
        displayText: 'Transdobra-se para o local selecionado',
        cooldown: 'Recarga: 17 segundos',
        slug: 'warp',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/fenix/abilities/icons/warp_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: 'Salva Purificadora',
        description:
          'Canaliza por 1.5 s, marcando todos os Heróis inimigos à frente de Fenix. Em seguida, dispara 5 projéteis em cada Herói marcado, causando 79 de dano a cada um deles. Causa 50% a mais de dano a alvos desacelerados.',
        displayText: 'Dispara uma salva de mísseis teleguiados',
        cooldown: 'Recarga: 90 segundos',
        slug: 'purification-salvo',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/fenix/abilities/icons/purification-salvo_square.png',
      },
      {
        name: 'Arrasa-planetas',
        description:
          'Após 0.5 s, canaliza um feixe potente que corta o campo de batalha por 4 s, causando 112 de dano a cada 0.25 s aos inimigos atingidos. Não afeta Estruturas.',
        displayText: 'Dispara um laser que atravessa o campo de batalha',
        cooldown: 'Recarga: 100 segundos',
        slug: 'planet-cracker',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/fenix/abilities/icons/planet-cracker_square.png',
      },
    ],
    otherAbilities: [
      {
        name: 'Modo de Arma: Bomba Fásica',
        description:
          'Aumenta em 1.25 o alcance e em 25% o dano dos Ataques Básicos e faz com que acertem inimigos próximos.  Ative para mudar para o Modo de Arma: Canhão de Repetição, aumentando a Velocidade de Ataque Básico.',
        displayText:
          'Ataques Básicos causam dano colateral, causam mais dano, chegam mais longe',
        slug: 'weapon-mode-phase-bomb',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/fenix/abilities/icons/weapon-mode-phase-bomb_square.png',
      },
    ],
    expandedRole: {
      name: 'Assassino de Longo Alcance',
      description:
        'Assassino de Longo Alcance Causadores de dano que fazem chover balas, flechas ou feitiços mortíferos sobre os inimigos. Geralmente frágeis, eles se sentem mais seguros mantendo distância dos inimigos.',
      slug: 'ranged-assassin',
    },
    stats: {
      damage: 9,
      utility: 4,
      survivability: 5,
      complexity: 5,
    },
    skin: {
      id: 'FenixBaseCommon',
      name: {
        en_US: 'Steward of the Templar',
        es_MX: 'Guardián de los templarios',
        pt_BR: 'Guardião dos Templários',
        de_DE: 'Statthalter der Templer',
        en_GB: 'Steward of the Templar',
        es_ES: 'Representante de los templarios',
        fr_FR: 'Fier défenseur des Templiers',
        it_IT: 'Alfiere dei Templari',
        pl_PL: 'Namiestnik Templariuszy',
        ru_RU: 'Герой тамплиеров',
        ko_KR: '기사단의 귀감',
        zh_TW: '聖堂武士的表率',
        zh_CN: '圣堂武士管理者',
      },
      description: {
        en_US: 'Steward of the Templar',
        es_MX: 'Guardián de los templarios',
        pt_BR: 'Guardião dos Templários',
        de_DE: 'Statthalter der Templer',
        en_GB: 'Steward of the Templar',
        es_ES: 'Representante de los templarios',
        fr_FR: 'Fier défenseur des Templiers',
        it_IT: 'Alfiere dei Templari',
        pl_PL: 'Namiestnik Templariuszy',
        ru_RU: 'Герой тамплиеров',
        ko_KR: '기사단의 귀감',
        zh_TW: '聖堂武士的表率',
        zh_CN: '圣堂武士管理者',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/FenixBaseCommon?namespace=hms_80333',
      },
      slug: 'steward-of-the-templar',
    },
  },
  {
    name: 'Maiev',
    title: 'A Guardiã',
    role: {
      name: 'Assassino',
      description: 'Assassino Matadores de heróis e semeadores de sofrimento.',
      slug: 'assassin',
    },
    type: {
      name: 'Corpo a Corpo',
      slug: 'melee',
    },
    description:
      'Maiev Cantonegro vigiou o traidor aprisionado por dez mil anos e o caçou de forma implacável quando ele foi libertado. Alguns dizem que ela é determinada, outros a chamam de obcecada. Seja como for, ela não descansará enquanto seu mundo estiver em perigo.',
    shortDescription:
      'Uma Assassina ágil, ideal para aniquilar inimigos amontoados e impedir que eles escapem.',
    difficulty: 'Difícil',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/maiev/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/maiev-0003d0d5e9.jpg',
    franchise: 'Warcraft',
    release: '2018-02-06T00:00:00.000Z',
    isNew: false,
    slug: 'maiev',
    trait: {
      name: 'Salto das Guardiãs',
      description:
        'Salta no ar, ficando Imune a todos os efeitos hostis por 0.75 s.',
      displayText: 'Salta no ar, ficando Imune temporariamente',
      cooldown: 'Recarga: 13 segundos',
      slug: 'vault-of-the-wardens',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/maiev/traits/icons/vault-of-the-wardens_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/maiev/',
    abilities: [
      {
        name: 'Leque de Facas',
        description:
          'Causa 152 de dano aos inimigos em uma área em forma de meia-lua.  Atingir pelo menos 2 Heróis inimigos com Leque de Facas reduz a recarga para 0.5 s e restitui o custo de Mana.',
        displayText: 'Arremessa diversas facas',
        vital: 'Mana: 30',
        cooldown: 'Recarga: 4 segundos',
        slug: 'fan-of-knives',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/maiev/abilities/icons/fan-of-knives_square.png',
      },
      {
        name: 'Vínculo Umbrático',
        description:
          'O próximo Ataque Básico de Maiev será uma cutilada, amarrando os Heróis inimigos atingidos por 2.5 s. Se um Herói amarrado se afastar demais de Maiev, ele será puxado para perto dela, recebendo 110 de dano e quebrando a amarra.',
        displayText:
          'Amarra Heróis inimigos; puxa-os para perto de Maiev caso se afastem',
        vital: 'Mana: 55',
        cooldown: 'Recarga: 14 segundos',
        slug: 'umbral-bind',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/maiev/abilities/icons/umbral-bind_square.png',
      },
      {
        name: 'Espírito da Vingança',
        description:
          'Lança uma sombra de Maiev à frente, que volta à posição original, causando 150 de dano aos inimigos no caminho. Se um Herói inimigo for atingido, a recarga é reduzida em 4 s.',
        displayText:
          'Projeta uma sombra de Maiev; pode se teleportar para a sombra',
        vital: 'Mana: 50',
        cooldown: 'Recarga: 13 segundos',
        slug: 'spirit-of-vengeance',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/maiev/abilities/icons/spirit-of-vengeance_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: 'Disco de Contenção',
        description:
          'Arremessa uma glaive na direção selecionada. Se um Herói inimigo for atingido, o Disco de Contenção poderá ser reativado para remover a visão e parar a vítima no tempo por 4 s.  Disco de Contenção é ativado automaticamente 6 s após atingir um Herói.',
        displayText: 'Prende um inimigo no tempo e remove a visão dele',
        vital: 'Mana: 60',
        cooldown: 'Recarga: 50 segundos',
        slug: 'containment-disc',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/maiev/abilities/icons/containment-disc_square.png',
      },
      {
        name: 'Prisão da Guardiã',
        description:
          'Evoca uma jaula formada por 8 Avatares Guardiões ao redor de Maiev. Após 1.5 s, os Heróis inimigos que encostarem em um dos Avatares serão jogados para o centro da jaula, matando o Avatar no processo. Os Avatares Guardiões duram 5 s.',
        displayText: 'Prende inimigos na jaula dos Avatares',
        vital: 'Mana: 80',
        cooldown: 'Recarga: 100 segundos',
        slug: 'wardens-cage',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/maiev/abilities/icons/wardens-cage_square.png',
      },
    ],
    expandedRole: {
      name: 'Assassino Corpo a Corpo',
      description:
        'Assassino Corpo a Corpo Matadores de heróis e semeadores de sofrimento. Especialistas em causar dano elevado a alvos únicos e emboscadas.',
      slug: 'melee-assassin',
    },
    stats: {
      damage: 6,
      utility: 5,
      survivability: 7,
      complexity: 7,
    },
    skin: {
      id: 'MaievBaseCommon',
      name: {
        en_US: 'The Warden',
        es_MX: 'La celadora',
        pt_BR: 'A Guardiã',
        de_DE: 'Die Wächterin',
        en_GB: 'The Warden',
        es_ES: 'La Celadora',
        fr_FR: 'La Gardienne',
        it_IT: 'La Custode',
        pl_PL: 'Nadzorczyni',
        ru_RU: 'Стражница',
        ko_KR: '감시관',
        zh_TW: '典獄官',
        zh_CN: '守望者',
      },
      description: {
        en_US: 'The Warden',
        es_MX: 'La celadora',
        pt_BR: 'A Guardiã',
        de_DE: 'Die Wächterin',
        en_GB: 'The Warden',
        es_ES: 'La Celadora',
        fr_FR: 'La Gardienne',
        it_IT: 'La Custode',
        pl_PL: 'Nadzorczyni',
        ru_RU: 'Стражница',
        ko_KR: '감시관',
        zh_TW: '典獄官',
        zh_CN: '守望者',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/MaievBaseCommon?namespace=hms_80333',
      },
      slug: 'the-warden',
    },
  },
  {
    name: 'Blaze',
    title: 'Morcego de Fogo Veterano',
    role: {
      name: 'Guerreiro',
      description: 'Guerreiro Defensores e combatentes da linha de frente.',
      slug: 'warrior',
    },
    type: {
      name: 'Longo Alcance',
      slug: 'ranged',
    },
    description:
      'O cabo Miles "Blaze" Lewis sempre sentiu uma atração pelo fogo, mas só conseguiu satisfazer seus desejos piromaníacos quando entrou para os Saqueadores do Raynor. Com tantas guerras no currículo, ele está sempre pronto para esquentar a batalha.',
    shortDescription:
      'Um Tanque de longo alcance especializado em iniciar combates e em espalhar suas chamas para causar dano em área.',
    difficulty: 'Médio',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/blaze/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/blaze-eb95f9f40a.jpg',
    franchise: 'StarCraft',
    release: '2018-01-09T00:00:00.000Z',
    isNew: false,
    slug: 'blaze',
    trait: {
      name: 'Piromania',
      description:
        'Ganha 40 de Armadura e causa 40 de dano aos inimigos próximos a cada 0.5 s por 4 s.  Cada Herói atingido pela Torrente de Chamas reduz a recarga de Piromania em 5 s.',
      displayText: 'Ganha Armadura e causa dano a inimigos próximos',
      cooldown: 'Recarga: 90 segundos',
      slug: 'pyromania',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/blaze/traits/icons/pyromania_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/blaze/',
    abilities: [
      {
        name: 'Torrente de Chamas',
        description:
          'Dispara dois jatos que causam 83 de dano aos inimigos atingidos. Torrente de Chamas incendeia Poças de Óleo se entrar em contato com elas.',
        displayText: 'Dispara dois jatos de chamas',
        vital: 'Mana: 30',
        cooldown: 'Recarga: 4 segundos',
        slug: 'flame-stream',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/blaze/abilities/icons/flame-stream_square.png',
      },
      {
        name: 'Poça de Óleo',
        description:
          'Mira Vetorial Cria uma Poça de Óleo que dura 5 s e desacelera os inimigos em 50%.  Torrente de Chamas incendeia Poças de Óleo por 2.5 s. Poças incendiadas deixam de desacelerar, mas causam 16 de dano a cada 0.3 s. Além disso, Blaze recupera 49 de Vida a cada 0.3 s enquanto ficar em cima de uma Poça de Óleo incendiada.  Armazena até 2 cargas.',
        displayText:
          'Poça de Óleo que desacelera e pode ser incendiada para ferir inimigos e curar Blaze',
        vital: 'Mana: 50',
        cooldown: 'Recarga da carga: 12 segundos',
        slug: 'oil-spill',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/blaze/abilities/icons/oil-spill_square.png',
      },
      {
        name: 'Propulsão a Jato',
        description:
          'Investe à frente após 0.375 s. Se colidir com um Herói inimigo, causará 52 de dano aos Heróis inimigos próximos, atordoando-os por 1.25 s.',
        displayText: 'Avança, atordoando e causando dano a Heróis inimigos',
        vital: 'Mana: 45',
        cooldown: 'Recarga: 10 segundos',
        slug: 'jet-propulsion',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/blaze/abilities/icons/jet-propulsion_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: 'Chamar Casamata',
        description:
          'Após 0.5 s, posiciona e entra em uma Casamata com 1435 de Vida. Blaze e os aliados podem entrar e sair à vontade da Casamata. Quem estiver dentro dela terá acesso ao Lança-chamas, que causa 170 de dano aos inimigos em linha reta.   Quem sair da Casamata receberá 25 de Armadura por 2 s. As Casamatas duram 10 s ou até serem destruídas.',
        displayText: 'Evoca uma Casamata',
        vital: 'Mana: 70',
        cooldown: 'Recarga: 70 segundos',
        slug: 'bunker-drop',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/blaze/abilities/icons/bunker-drop_square.png',
      },
      {
        name: 'Combustão',
        description:
          'Canaliza por até 2.6 s. Ao acabar, desacelera inimigos próximos em 60% e causa 55 de dano a eles a cada 0.5 s. A duração da desaceleração e do dano ao longo do tempo da Combustão aumenta de acordo com o tempo de canalização, variando de 1 s a 5 s.  A Velocidade de Movimento de Blaze é reduzida em 40% enquanto canaliza a habilidade.',
        displayText: 'Canalize para causar dano e desacelerar inimigos',
        vital: 'Mana: 70',
        cooldown: 'Recarga: 80 segundos',
        slug: 'combustion',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/blaze/abilities/icons/combustion_square.png',
      },
    ],
    otherAbilities: [
      {
        name: 'Sair da Casamata',
        description: 'Sai da Casamata.',
        displayText: '',
        slug: 'exit-bunker',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/blaze/abilities/icons/exit-bunker_square.png',
      },
    ],
    expandedRole: {
      name: 'Tanque',
      description:
        'Tanque Defensores da linha de frente, capazes de resistir a grandes estragos. Cuidam da proteção dos companheiros mais frágeis.',
      slug: 'tank',
    },
    stats: {
      damage: 6,
      utility: 7,
      survivability: 9,
      complexity: 7,
    },
    skin: {
      id: 'FirebatBaseCommon',
      name: {
        en_US: 'Veteran Firebat',
        es_MX: 'Camazot veterano',
        pt_BR: 'Morcego de Fogo Veterano',
        de_DE: 'Erfahrener Feuerfresser',
        en_GB: 'Veteran Firebat',
        es_ES: 'Murciélago de fuego veterano',
        fr_FR: 'Flammeur vétéran',
        it_IT: 'Piromane veterano',
        pl_PL: 'Wypalacz Weteran',
        ru_RU: 'Бывалый огнеметчик',
        ko_KR: '노련한 화염방사병',
        zh_TW: '身經百戰的火焰兵',
        zh_CN: '精英火蝠',
      },
      description: {
        en_US: 'Veteran Firebat',
        es_MX: 'Camazot veterano',
        pt_BR: 'Morcego de Fogo Veterano',
        de_DE: 'Erfahrener Feuerfresser',
        en_GB: 'Veteran Firebat',
        es_ES: 'Murciélago de fuego veterano',
        fr_FR: 'Flammeur vétéran',
        it_IT: 'Piromane veterano',
        pl_PL: 'Wypalacz Weteran',
        ru_RU: 'Бывалый огнеметчик',
        ko_KR: '노련한 화염방사병',
        zh_TW: '身經百戰的火焰兵',
        zh_CN: '精英火蝠',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/FirebatBaseCommon?namespace=hms_80333',
      },
      slug: 'veteran-firebat',
    },
  },
  {
    name: 'Hanzo',
    title: 'Mestre Assassino',
    role: {
      name: 'Assassino',
      description: 'Assassino Matadores de heróis e semeadores de sofrimento.',
      slug: 'assassin',
    },
    type: {
      name: 'Longo Alcance',
      slug: 'ranged',
    },
    description:
      'Antes herdeiro do império criminoso do clã Shimada, Hanzo abdicou de seu direito de nascença depois que quase matou o irmão mais novo. Agora ele busca aperfeiçoar suas habilidades de guerreiro e enxerga o Nexus (e o eterno conflito que existe lá) como o campo de treinamento ideal.',
    shortDescription:
      'Assassino de longo alcance, especializado em fazer reconhecimento e abater inimigos a distância.',
    difficulty: 'Médio',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/hanzo/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/hanzo-49aba4dac5.jpg',
    franchise: 'Overwatch',
    release: '2017-12-12T00:00:00.000Z',
    isNew: false,
    slug: 'hanzo',
    trait: {
      name: 'Agilidade Natural',
      description:
        'Salta por cima de Estruturas e obstáculos intransponíveis que estejam dentro do alcance.',
      displayText: 'Salta sobre o terreno',
      cooldown: 'Recarga: 30 s',
      slug: 'natural-agility',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/hanzo/traits/icons/natural-agility_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/hanzo/',
    abilities: [
      {
        name: 'Arco da Tempestade',
        description:
          'Ative para carregar uma flecha que causa 291 de dano ao primeiro inimigo atingido. O alcance do Arco da Tempestade aumenta à medida que é canalizado.',
        displayText: 'Carrega para disparar uma flecha mortal',
        vital: 'Mana: 20',
        cooldown: 'Recarga: 4 segundos',
        slug: 'storm-bow',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/hanzo/abilities/icons/storm-bow_square.png',
      },
      {
        name: 'Flecha Dispersora',
        description:
          'Dispara uma flecha que causa 88 de dano ao primeiro Herói inimigo atingido. Flecha Dispersora pode colidir com terreno e Estruturas, dividindo-se em 5 flechas que percorrem uma distância extra, ricocheteando até 4 vezes a mais e causando 88 de dano cada ao primeiro inimigo que atingirem.',
        displayText: 'Dispara uma flecha que ricocheteia e se divide',
        vital: 'Mana: 50',
        cooldown: 'Recarga: 8 segundos',
        slug: 'scatter-arrow',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/hanzo/abilities/icons/scatter-arrow_square.png',
      },
      {
        name: 'Flecha Sônica',
        description:
          'Dispara uma flecha que concede visão em uma vasta área por 5 s. Inimigos dentro desta área são revelados por 1 s. Se a Flecha Sônica atingir diretamente um inimigo, causa 165 de dano e segue o inimigo enquanto ele se desloca.',
        displayText: 'Revela uma grande área',
        vital: 'Mana: 50',
        cooldown: 'Recarga: 20 segundos',
        slug: 'sonic-arrow',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/hanzo/abilities/icons/sonic-arrow_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: 'Golpe do Dragão',
        description:
          'Depois de 1.5 s, evoca dois Dragões Espirituais que avançam, causando 84 de dano a cada 0,25 s aos Heróis inimigos atingidos. Inimigos que estiverem no centro receberão 50% a mais de dano.',
        displayText: 'Evoca um par de Dragões Espirituais que causam dano',
        vital: 'Mana: 60',
        cooldown: 'Recarga: 60 segundos',
        slug: 'dragonstrike',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/hanzo/abilities/icons/dragonstrike_square.png',
      },
      {
        name: 'Flecha do Dragão',
        description:
          'Dispara um projétil que atravessa o campo de batalha e explode ao atingir um Herói inimigo, causando 130 de dano a todos os inimigos próximos e Atordoando-os por 0.5 s.  Depois que percorrer uma distância média, o dano aumenta para 260 e a duração do Atordoamento aumenta para 1.25 s.  Depois que percorrer uma longa distância, o dano aumenta para 390 e a duração do Atordoamento aumenta para 2 s.',
        displayText: 'Dispara uma flecha global que atordoa; causa dano',
        vital: 'Mana: 90',
        cooldown: 'Recarga: 70 segundos',
        slug: 'dragons-arrow',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/hanzo/abilities/icons/dragons-arrow_square.png',
      },
    ],
    expandedRole: {
      name: 'Assassino de Longo Alcance',
      description:
        'Assassino de Longo Alcance Causadores de dano que fazem chover balas, flechas ou feitiços mortíferos sobre os inimigos. Geralmente frágeis, eles se sentem mais seguros mantendo distância dos inimigos.',
      slug: 'ranged-assassin',
    },
    stats: {
      damage: 8,
      utility: 5,
      survivability: 4,
      complexity: 6,
    },
    skin: {
      id: 'HanzoBaseCommon',
      name: {
        en_US: 'Master Assassin',
        es_MX: 'Asesino maestro',
        pt_BR: 'Mestre Assassino',
        de_DE: 'Meisterassassine',
        en_GB: 'Master Assassin',
        es_ES: 'Maestro asesino',
        fr_FR: 'Maître assassin',
        it_IT: 'Maestro Assassino',
        pl_PL: 'Mistrz Łucznictwa',
        ru_RU: 'Искусный убийца',
        ko_KR: '일급 암살자',
        zh_TW: '刺客大師',
        zh_CN: '刺客大师',
      },
      description: {
        en_US: 'Master Assassin',
        es_MX: 'Asesino maestro',
        pt_BR: 'Mestre Assassino',
        de_DE: 'Meisterassassine',
        en_GB: 'Master Assassin',
        es_ES: 'Maestro asesino',
        fr_FR: 'Maître assassin',
        it_IT: 'Maestro Assassino',
        pl_PL: 'Mistrz Łucznictwa',
        ru_RU: 'Искусный убийца',
        ko_KR: '일급 암살자',
        zh_TW: '刺客大師',
        zh_CN: '刺客大师',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/HanzoBaseCommon?namespace=hms_80333',
      },
      slug: 'master-assassin',
    },
  },
  {
    name: 'Alexstrasza',
    title: 'Mãe da Vida',
    role: {
      name: 'Suporte',
      description:
        'Suporte O Suporte concede bônus e outros benefícios aos companheiros.',
      slug: 'support',
    },
    type: {
      name: 'Longo Alcance',
      slug: 'ranged',
    },
    description:
      'Alexstrasza, a Rainha dos Dragões, recebeu o poder dos titãs para ser a guardiã de toda a vida em Azeroth. Ela se sacrificou diversas vezes para ajudar os mortais. Agora, voa sobre o Nexus, protegendo a vida sempre que se faz necessário.',
    shortDescription:
      'Uma Curandeira que compartilha a própria Vida com os aliados e pode ser transformar numa Dragonesa para potencializar as habilidades.',
    difficulty: 'Médio',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/alexstrasza/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/alexstrasza-727f5dc5c7.jpg',
    franchise: 'Warcraft',
    release: '2017-11-14T00:00:00.000Z',
    isNew: false,
    slug: 'alexstrasza',
    trait: {
      name: 'Rainha dos Dragões',
      description:
        'Após 1.25 s, transforma-se em uma dragonesa e ganha 500 de Vida.  Enquanto Rainha dos Dragões estiver ativa, as Habilidades de Alexstrasza ficam potencializadas e os Ataques Básicos causam 143 de dano aos inimigos e curam 43 de Vida dos Heróis aliados em um arco à frente dela, e a duração dos efeitos de atordoamento, enraizamento e desaceleração é reduzida em 50%.  Dura 15 s.',
      displayText:
        'Transforma-se em um Aspecto Dragônico, potencializando as habilidades',
      cooldown: 'Recarga: 150 segundos',
      slug: 'dragonqueen',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/alexstrasza/traits/icons/dragonqueen_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/alexstrasza/',
    abilities: [
      {
        name: 'Dádiva da Vida',
        description:
          'Sacrifica 15% da Vida atual de Alexstrasza, curando um Herói aliado em 150% dessa quantidade.  Rainha dos Dragões: Sopro da Vida Reduz drasticamente a recarga e remove o custo de Vida.',
        displayText: 'Dá parte da própria Vida a um Herói aliado',
        vital: 'Vida: 15%',
        cooldown: 'Recarga: 7 segundos',
        slug: 'gift-of-life',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/alexstrasza/abilities/icons/gift-of-life_square.png',
      },
      {
        name: 'Abundância',
        description:
          'Planta uma semente que floresce após 3 s, curando 20% do máximo de Vida dos Heróis aliados próximos.  Rainha dos Dragões: Preservação Área e cura aumentadas drasticamente.',
        displayText: 'Cura Heróis aliados em uma área',
        vital: 'Mana: 75',
        cooldown: 'Recarga: 14 segundos',
        slug: 'abundance',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/alexstrasza/abilities/icons/abundance_square.png',
      },
      {
        name: 'Bofetada Flamejante',
        description:
          'Lança uma bola de fogo, incendiando inimigos e causando 75 de dano ao longo de 5.5 s.  Atingir inimigos incendiados causa mais 125 de dano, além de desacelerar as vítimas em 40%, decaindo ao longo de 2 s, e restituir o custo de Mana.  Rainha dos Dragões: Bofetada de Asa Repele e causa dano aos inimigos em um arco.',
        displayText:
          'Lança uma bola de fogo que incendeia inimigos, podendo desacelerá-los',
        vital: 'Mana: 50',
        cooldown: 'Recarga: 2 segundos',
        slug: 'flame-buffet',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/alexstrasza/abilities/icons/flame-buffet_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: 'Mãe da Vida',
        description:
          'Vincula a força vital de Alexstrasza à de um Herói aliado. Ela e o alvo recuperam 480 de Vida ao longo de 2 s. Depois disso, quem tiver o menor percentual de Vida será curado para ficar com o mesmo percentual de Vida do outro Herói.',
        displayText: 'Vincula a Vida de Alexstrasza à de um aliado',
        vital: 'Mana: 60',
        cooldown: 'Recarga: 60 segundos',
        slug: 'life-binder',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/alexstrasza/abilities/icons/life-binder_square.png',
      },
      {
        name: 'Chama Purificante',
        description:
          'Após 1.25 s, sobe aos céus e lança 5 bolas de fogo onde estiver o ponteiro do mouse ao longo de 6 s. As bolas de fogo causam 135 de dano aos inimigos e restauram 300 de Vida dos Heróis aliados.  2 s após lançar todas as bolas de fogo, Alexstrasza aterrissará onde estiver o ponteiro do mouse.',
        displayText:
          'Faz chover fogo do céu, curando aliados e ferindo inimigos',
        vital: 'Mana: 100',
        cooldown: 'Recarga: 100 segundos',
        slug: 'cleansing-flame',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/alexstrasza/abilities/icons/cleansing-flame_square.png',
      },
    ],
    otherAbilities: [
      {
        name: 'Sopro da Vida',
        description:
          'Cura um Herói aliado em 20% da Vida atual de Alexstrasza.',
        displayText: 'Cura um Herói aliado',
        cooldown: 'Recarga: 3 segundos',
        slug: 'breath-of-life',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/alexstrasza/abilities/icons/breath-of-life_square.png',
      },
      {
        name: 'Preservação',
        description:
          'Planta uma semente que floresce após 3 s, curando 30% do máximo de Vida dos Heróis aliados próximos.',
        displayText: 'Cura Heróis aliados em uma área',
        cooldown: 'Recarga: 16 segundos',
        slug: 'preservation',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/alexstrasza/abilities/icons/preservation_square.png',
      },
      {
        name: 'Bofetada de Asa',
        description:
          'Causa 150 de dano aos inimigos em uma área, repelindo e desacelerando as vítimas em 50% por 3 s.',
        displayText: 'Causa dano, repele e desacelera inimigos',
        cooldown: 'Recarga: 4 segundos',
        slug: 'wing-buffet',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/alexstrasza/abilities/icons/wing-buffet_square.png',
      },
      {
        name: 'Chama Purificante',
        description:
          'Sobe aos céus e lança 5 bolas de fogo onde estiver o ponteiro do mouse ao longo de 6 s. As bolas de fogo causam 135 de dano aos inimigos e restauram 300 de Vida dos Heróis aliados.  2 s após lançar todas as bolas de fogo, Alexstrasza aterrissará onde estiver o ponteiro do mouse.',
        displayText:
          'Faz chover fogo do céu, curando aliados e ferindo inimigos',
        vital: 'Mana: 100',
        cooldown: 'Recarga: 100 segundos',
        slug: 'cleansing-flame',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/alexstrasza/abilities/icons/cleansing-flame_square.png',
      },
    ],
    expandedRole: {
      name: 'Curandeiro',
      description:
        'Curandeiro Amigos para todas as horas. Sempre presentes para manter os aliados vivos e relativamente saudáveis nas lutas em equipe.',
      slug: 'healer',
    },
    stats: {
      damage: 3,
      utility: 6,
      survivability: 4,
      complexity: 6,
    },
    skin: {
      id: 'AlexstraszaBaseCommon',
      name: {
        en_US: 'The Life-Binder',
        es_MX: 'La Protectora',
        pt_BR: 'Mãe da Vida',
        de_DE: 'Die Lebensbinderin',
        en_GB: 'The Life-Binder',
        es_ES: 'La Protectora',
        fr_FR: 'La Lieuse-de-Vie',
        it_IT: 'Protettrice della Vita',
        pl_PL: 'Smocza Królowa',
        ru_RU: 'Хранительница Жизни',
        ko_KR: '생명의 어머니',
        zh_TW: '生命守縛者',
        zh_CN: '生命缚誓者',
      },
      description: {
        en_US: 'The Life-Binder',
        es_MX: 'La Protectora',
        pt_BR: 'Mãe da Vida',
        de_DE: 'Die Lebensbinderin',
        en_GB: 'The Life-Binder',
        es_ES: 'La Protectora',
        fr_FR: 'La Lieuse-de-Vie',
        it_IT: 'Protettrice della Vita',
        pl_PL: 'Smocza Królowa',
        ru_RU: 'Хранительница Жизни',
        ko_KR: '생명의 어머니',
        zh_TW: '生命守縛者',
        zh_CN: '生命缚誓者',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/AlexstraszaBaseCommon?namespace=hms_80333',
      },
      slug: 'the-life-binder',
    },
  },
  {
    name: 'Junkrat',
    title: 'Sucateiro Demolidor',
    role: {
      name: 'Assassino',
      description: 'Assassino Matadores de heróis e semeadores de sofrimento.',
      slug: 'assassin',
    },
    type: {
      name: 'Longo Alcance',
      slug: 'ranged',
    },
    description:
      'A destruição do omnium australiano espalhou radiação pela área, afetando muitos sobreviventes... inclusive Jamison Fawkes. Agora, conhecido como o maníaco das bombas, Junkrat espalha o caos e a destruição por onde passa.',
    shortDescription:
      'Um Assassino ágil que bombardeia os inimigos de longe e semeia o caos com minas e armadilhas.',
    difficulty: 'Médio',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/junkrat/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/junkrat-3506935224.jpg',
    franchise: 'Overwatch',
    release: '2017-10-17T00:00:00.000Z',
    isNew: false,
    slug: 'junkrat',
    trait: {
      name: 'Caos Total',
      description:
        'Ao morrer, larga 5 granadas que explodem após 0.75 s, cada uma causando 250 de dano aos inimigos próximos. Causa 75% a menos de dano contra Estruturas.  Detonar Mina  Detona uma Mina de Concussão ativa.',
      displayText: 'Larga granadas ao morrer',
      slug: 'total-mayhem',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/junkrat/traits/icons/total-mayhem_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/junkrat/',
    abilities: [
      {
        name: 'Lançador de Granadas',
        description:
          'Lança uma granada que explode no fim do trajeto ou ao atingir um inimigo, causando 118 de dano aos inimigos próximos. As granadas quicam ao colidirem com o terreno. Causa 50% a menos de dano a Estruturas.  Armazena até 4 cargas. A recarga do Lançador de Granadas restaura todas as cargas de uma só vez.',
        displayText: 'Lança uma granada que quica',
        cooldown: 'Recarga da carga: 12 segundos',
        slug: 'frag-launcher',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/junkrat/abilities/icons/frag-launcher_square.png',
      },
      {
        name: 'Mina de Concussão',
        description:
          'Coloca uma Mina no chão. Junkrat pode ativar a Especialização para detonar a Mina, repelindo e causando 180 de dano aos inimigos próximos. Junkrat também é afetado pela explosão, mas não recebe dano.  Limite de 1 Mina ativa por vez.',
        displayText: 'Coloca uma Mina que pode ser detonada',
        cooldown: 'Recarga: 16 segundos',
        slug: 'concussion-mine',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/junkrat/abilities/icons/concussion-mine_square.png',
      },
      {
        name: 'Armadilha de Aço',
        description:
          'Coloca uma armadilha no chão que se arma após 2 s. Causa 130 de dano ao primeiro inimigo que passar por cima, enraizando-o por 2 s.  Limite de 1 armadilha ativa.',
        displayText: 'Coloca uma armadilha que enraíza inimigos',
        cooldown: 'Recarga: 12 segundos',
        slug: 'steel-trap',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/junkrat/abilities/icons/steel-trap_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: 'Pneu da Morte',
        description:
          'Cria uma bomba motorizada com 530 de Vida que dura 15 s. Enquanto estiver ativa, Junkrat fica imóvel, mas pode controlar o Pneu da Morte.  Reative o Pneu da Morte para detoná-lo instantaneamente, repelindo os inimigos e causando 720 de dano às vítimas perto do centro da explosão que é gradualmente reduzido a 445 de dano aos inimigos mais distantes.',
        displayText: 'Cria uma bomba motorizada',
        cooldown: 'Recarga: 75 segundos',
        slug: 'rip-tire',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/junkrat/abilities/icons/rip-tire_square.png',
      },
      {
        name: 'Rolé de Foguete',
        description:
          'Após 1.25 s, Junkrat se joga para cima. Enquanto está no ar, é possível movimentar-se para mudar o local de pouso.  Após 3.75 s, Junkrat aterrissa, causando 890 de dano aos inimigos próximos e ativando o Caos Total. Junkrat reaparece no Salão das Tempestades 5 s após o pouso e ganha 150% de Velocidade de Movimento até descer da Montaria.',
        displayText:
          'Salta para cima, causando dano aos inimigos quando aterrissa',
        cooldown: 'Recarga: 75 s',
        slug: 'rocket-ride',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/junkrat/abilities/icons/rocket-ride_square.png',
      },
    ],
    otherAbilities: [
      {
        name: 'Detonar Mina',
        description:
          'Detona a Mina de Concussão posicionada, repelindo e causando 180 de dano aos inimigos próximos. Junkrat também é afetado pela explosão, mas não recebe dano.',
        displayText: 'Detona a Mina de Concussão',
        slug: 'detonate-mine',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/junkrat/abilities/icons/detonate-mine_square.png',
      },
    ],
    expandedRole: {
      name: 'Assassino de Longo Alcance',
      description:
        'Assassino de Longo Alcance Causadores de dano que fazem chover balas, flechas ou feitiços mortíferos sobre os inimigos. Geralmente frágeis, eles se sentem mais seguros mantendo distância dos inimigos.',
      slug: 'ranged-assassin',
    },
    stats: {
      damage: 7,
      utility: 8,
      survivability: 5,
      complexity: 6,
    },
    skin: {
      id: 'JunkratBaseCommon',
      name: {
        en_US: 'Junker Demolitionist',
        es_MX: 'Chatarrero demoledor',
        pt_BR: 'Sucateiro Demolidor',
        de_DE: 'Junker-Sprengmeister',
        en_GB: 'Junker Demolitionist',
        es_ES: 'Junker demoledor',
        fr_FR: 'Pyromane déjanté',
        it_IT: 'Junker Demolitore',
        pl_PL: 'Szalony Piroman',
        ru_RU: 'Стервятник-подрывник',
        ko_KR: '쓰레기촌 폭파 전문가',
        zh_TW: '瘋狂炸彈客',
        zh_CN: '渣客爆破手',
      },
      description: {
        en_US: 'Junker Demolitionist',
        es_MX: 'Chatarrero demoledor',
        pt_BR: 'Sucateiro Demolidor',
        de_DE: 'Junker-Sprengmeister',
        en_GB: 'Junker Demolitionist',
        es_ES: 'Junker demoledor',
        fr_FR: 'Pyromane déjanté',
        it_IT: 'Junker Demolitore',
        pl_PL: 'Szalony Piroman',
        ru_RU: 'Стервятник-подрывник',
        ko_KR: '쓰레기촌 폭파 전문가',
        zh_TW: '瘋狂炸彈客',
        zh_CN: '渣客爆破手',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/JunkratBaseCommon?namespace=hms_80333',
      },
      slug: 'junker-demolitionist',
    },
  },
  {
    name: 'Ana',
    title: 'Franco-atiradora Veterana',
    role: {
      name: 'Suporte',
      description:
        'Suporte O Suporte concede bônus e outros benefícios aos companheiros.',
      slug: 'support',
    },
    type: {
      name: 'Longo Alcance',
      slug: 'ranged',
    },
    description:
      'Como uma das fundadoras da Overwatch e uma das melhores franco-atiradoras do mundo, Ana Amari usa suas habilidades para proteger os inocentes. Embora ela tenha sumido após perder um olho, seu senso de dever e de responsabilidade a trouxe de volta para a batalha.',
    shortDescription:
      'Curandeira explosiva que usa tiros precisos para curar aliados e neutralizar a cura inimiga.',
    difficulty: 'Difícil',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/ana/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/ana-a6ab96c996.jpg',
    franchise: 'Overwatch',
    release: '2017-09-26T00:00:00.000Z',
    isNew: false,
    slug: 'ana',
    trait: {
      name: 'Tocaieira',
      description:
        'Ataques Básicos aplicam uma Dose aos inimigos, causando 40 de dano ao longo de 5 s mais um adicional de dano equivalente ao número de aplicações no alvo, podendo acumular até 5 vezes. A cada 0.5 s, Ana recebe uma cura de 60% do dano causado por Tocaieira.  Mira Cuidadosa  Ativar Tocaieira reduz em 25% a Velocidade de Movimento, mas aumenta em 25% o alcance de Dardo de Cura e Dardo Sonífero e permite que eles atravessem um Herói. Dura até ser cancelada.',
      displayText:
        'Potencializa Ataques Básicos, Dardo de Cura e Dardo Sonífero',
      slug: 'shrike',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/ana/traits/icons/shrike_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/ana/',
    abilities: [
      {
        name: 'Dardo de Cura',
        description:
          'Dispara um dardo que cura 195 de Vida do primeiro Herói aliado atingido. Não afeta Heróis com Vida cheia.',
        displayText: 'Atira um dardo que cura um aliado',
        vital: 'Mana: 10',
        cooldown: 'Recarga: 2 s',
        slug: 'healing-dart',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/ana/abilities/icons/healing-dart_square.png',
      },
      {
        name: 'Granada Biótica',
        description:
          'Arremessa uma granada na área selecionada. Cura 152 de Vida dos Heróis aliados atingidos e aumenta em 25% a cura que eles recebem de Ana por 4 s. Inimigos atingidos recebem 60 de dano e 100% a menos de cura por 2 s.',
        displayText:
          'Arremessa uma granada que cura aliados; impede curas inimigas',
        vital: 'Mana: 50',
        cooldown: 'Recarga: 16 segundos',
        slug: 'biotic-grenade',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/ana/abilities/icons/biotic-grenade_square.png',
      },
      {
        name: 'Dardo Sonífero',
        description:
          'Atira um dardo que adormece o primeiro Herói inimigo atingido, atordoando-o por 3 s. Esse efeito será cancelado imediatamente se a vítima receber dano após os primeiros 0.5 s.  Não pode ser usado em Veículos.',
        displayText: 'Dispara um dardo que faz um inimigo dormir',
        vital: 'Mana: 50',
        cooldown: 'Recarga: 14 segundos',
        slug: 'sleep-dart',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/ana/abilities/icons/sleep-dart_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: 'Estimulante',
        description:
          'Potencializa um Herói aliado instantaneamente, restaurando 200 de Mana. Pelos próximos 8 s, ele ganha 30% de Poder Mágico, e suas Habilidades Básicas recarregam 150% mais rápido.  Não pode ser usado em Ana.',
        displayText: 'Concede Poder Mágico a um aliado; recargas reduzidas',
        vital: 'Mana: 60',
        cooldown: 'Recarga: 70 segundos',
        slug: 'nano-boost',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/ana/abilities/icons/nano-boost_square.png',
      },
      {
        name: 'Olho de Hórus',
        description:
          'Assume pose de franco-atiradora, ganhando a habilidade de disparar até 6 projéteis especiais com alcance ilimitado. Os projéteis perfuram Heróis aliados e inimigos, mas colidem com Estruturas inimigas pelo caminho. Os aliados recebem 225 de cura, e os inimigos recebem 135 de dano. Causa 50% a menos de dano a Estruturas.  Ana não pode se locomover com o Olho de Hórus ativo.',
        displayText:
          'Realiza uma cura de alcance ilimitado e dispara projéteis que causam dano',
        vital: 'Mana: 45',
        cooldown: 'Recarga: 60 segundos',
        slug: 'eye-of-horus',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/ana/abilities/icons/eye-of-horus_square.png',
      },
    ],
    otherAbilities: [
      {
        name: 'Olho de Hórus',
        description:
          'Assume pose de franco-atiradora, ganhando a habilidade de disparar até 6 projéteis especiais com alcance ilimitado. Os projéteis perfuram Heróis aliados e inimigos, mas colidem com Estruturas inimigas pelo caminho. Os aliados recebem 225 de cura, e os inimigos recebem 135 de dano. Causa 50% a menos de dano a Estruturas.  Ana não pode se locomover com o Olho de Hórus ativo.',
        displayText:
          'Realiza uma cura de alcance ilimitado e dispara projéteis que causam dano',
        cooldown: 'Recarga: 1 segundo',
        slug: 'eye-of-horus',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/ana/abilities/icons/eye-of-horus_square.png',
      },
      {
        name: 'Olho de Hórus',
        description:
          'Assume pose de franco-atiradora, ganhando a habilidade de disparar até 6 projéteis especiais com alcance ilimitado. Os projéteis perfuram Heróis aliados e inimigos, mas colidem com Estruturas inimigas pelo caminho. Os aliados recebem 225 de cura, e os inimigos recebem 135 de dano. Causa 50% a menos de dano a Estruturas.  Ana não pode se locomover com o Olho de Hórus ativo.',
        displayText:
          'Realiza uma cura de alcance ilimitado e dispara projéteis que causam dano',
        cooldown: 'Recarga: 1 segundo',
        slug: 'eye-of-horus',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/ana/abilities/icons/eye-of-horus_square.png',
      },
      {
        name: 'Tocaieira',
        description:
          'Ataques Básicos aplicam uma Dose aos inimigos, causando 40 de dano ao longo de 5 s mais um adicional de dano equivalente ao número de aplicações no alvo, podendo acumular até 5 vezes. A cada 0.5 s, Ana recebe uma cura de 60% do dano causado por Tocaieira.  Mira Cuidadosa  Ativar Tocaieira reduz em 25% a Velocidade de Movimento, mas aumenta em 25% o alcance de Dardo de Cura e Dardo Sonífero e permite que eles atravessem um Herói. Dura até ser cancelada.',
        displayText: 'Ataques Básicos causam dano ao longo do tempo',
        cooldown: 'Recarga: 4 segundos',
        slug: 'shrike',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/ana/abilities/icons/shrike_square.png',
      },
      {
        name: 'Cancelar Tocaieira',
        description:
          'Ataques Básicos aplicam uma Dose aos inimigos, causando 40 de dano ao longo de 5 s mais um adicional de dano equivalente ao número de aplicações no alvo, podendo acumular até 5 vezes. A cada 0.5 s, Ana recebe uma cura de 60% do dano causado por Tocaieira.  Mira Cuidadosa  Ativar Tocaieira reduz em 25% a Velocidade de Movimento, mas aumenta em 25% o alcance de Dardo de Cura e Dardo Sonífero e permite que eles atravessem um Herói. Dura até ser cancelada.',
        cooldown: 'Recarga: 4 segundos',
        slug: 'cancel-shrike',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/ana/abilities/icons/cancel-shrike_square.png',
      },
    ],
    expandedRole: {
      name: 'Curandeiro',
      description:
        'Curandeiro Amigos para todas as horas. Sempre presentes para manter os aliados vivos e relativamente saudáveis nas lutas em equipe.',
      slug: 'healer',
    },
    stats: {
      damage: 3,
      utility: 7,
      survivability: 3,
      complexity: 6,
    },
    skin: {
      id: 'AnaBaseCommon',
      name: {
        en_US: 'Veteran Sniper',
        es_MX: 'Francotiradora veterana',
        pt_BR: 'Franco-atiradora Veterana',
        de_DE: 'Scharfschützenveteranin',
        en_GB: 'Veteran Sniper',
        es_ES: 'Francotiradora veterana',
        fr_FR: 'Tireuse d’élite aguerrie',
        it_IT: 'Cecchino veterano',
        pl_PL: 'Strzelec Wyborowy',
        ru_RU: 'Снайпер-ветеран',
        ko_KR: '노련한 저격수',
        zh_TW: '狙擊老手',
        zh_CN: '老练的狙击手',
      },
      description: {
        en_US: 'Veteran Sniper',
        es_MX: 'Francotiradora veterana',
        pt_BR: 'Franco-atiradora Veterana',
        de_DE: 'Scharfschützenveteranin',
        en_GB: 'Veteran Sniper',
        es_ES: 'Francotiradora veterana',
        fr_FR: 'Tireuse d’élite aguerrie',
        it_IT: 'Cecchino veterano',
        pl_PL: 'Strzelec Wyborowy',
        ru_RU: 'Снайпер-ветеран',
        ko_KR: '노련한 저격수',
        zh_TW: '狙擊老手',
        zh_CN: '老练的狙击手',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/AnaBaseCommon?namespace=hms_80333',
      },
      slug: 'veteran-sniper',
    },
  },
  {
    name: "Kel'Thuzad",
    title: 'Arquilich de Naxxramas',
    role: {
      name: 'Assassino',
      description: 'Assassino Matadores de heróis e semeadores de sofrimento.',
      slug: 'assassin',
    },
    type: {
      name: 'Longo Alcance',
      slug: 'ranged',
    },
    description:
      "Kel'Thuzad foi fiel ao Lich Rei tanto na vida quanto na morte. Reanimado para se tornar Arquilich do Flagelo e senhor de Naxxramas, a Terrível Necrópole, ele continua sendo o maior conselheiro de Arthas e o grande mestre das Trevas Gélidas.",
    shortDescription:
      'Um Mago de surto de dano que prende os inimigos e os aniquila com sequências poderosas.',
    difficulty: 'Difícil',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/kelthuzad/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/kelthuzad-e536b7c968.jpg',
    franchise: 'Warcraft',
    release: '2017-09-05T00:00:00.000Z',
    isNew: false,
    slug: 'kelthuzad',
    trait: {
      name: 'Mestre das Trevas Gélidas',
      description:
        "Missão: Ganha 1 de Praga sempre que um Herói for enraizado pela Nova Congelante ou atingido pelas Correntes de Kel'Thuzad.  Recompensa: Após ganhar 15 de Praga, ganha a habilidade Espeto Glacial.  Recompensa: Após ganhar 30 de Praga, aumenta em 75% o Poder Mágico.  Praga: 0/30",
      displayText: "Kel'Thuzad fica mais forte conforme atrapalha os inimigos",
      slug: 'master-of-the-cold-dark',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/kelthuzad/traits/icons/master-of-the-cold-dark_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/kelthuzad/',
    abilities: [
      {
        name: 'Morte e Decomposição',
        description:
          'Após 0.5 s, lança um orbe que explode ao atingir um inimigo, causando 150 de dano aos inimigos na área. A explosão cria uma poça de decomposição que dura 2 s, causando 82 de dano a cada 0.5 s aos inimigos.',
        displayText: 'Causa dano e cria uma poça nociva',
        vital: 'Mana: 20',
        cooldown: 'Recarga: 5 segundos',
        slug: 'death-and-decay',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/kelthuzad/abilities/icons/death-and-decay_square.png',
      },
      {
        name: 'Nova Congelante',
        description:
          'Cria uma nova que explode após 1 s, causando 180 de dano aos inimigos dentro da área e desacelerando-os em 35% por 2.5 s. Os inimigos no centro ficam enraizados por 1 s.',
        displayText: 'Causa dano e prejudica inimigos',
        vital: 'Mana: 50',
        cooldown: 'Recarga: 8 segundos',
        slug: 'frost-nova',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/kelthuzad/abilities/icons/frost-nova_square.png',
      },
      {
        name: "Correntes de Kel'Thuzad",
        description:
          "Arremessa uma corrente, causando 97 de dano ao primeiro Herói inimigo atingido. Por 3 s após atingir um alvo, Kel'Thuzad pode relançar as Correntes em outro inimigo, puxando um para perto do outro e atordoando os dois por 0.5 s.",
        displayText: 'Puxe Heróis inimigos para perto um do outro',
        vital: 'Mana: 50',
        cooldown: 'Recarga: 10 segundos',
        slug: 'chains-of-kelthuzad',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/kelthuzad/abilities/icons/chains-of-kelthuzad_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: 'Impacto Gélido',
        description:
          'Lança um meteoro de gelo em um Herói inimigo. O meteoro explode com o impacto, causando 115 de dano ao alvo e mais 275 de dano aos inimigos na área. Todas as vítimas atingidas pelo Impacto Gélido ficam enraizadas por 2 s.',
        displayText: 'Enraíza e causa dano aos inimigos ao redor do alvo',
        vital: 'Mana: 45',
        cooldown: 'Recarga: 50 segundos',
        slug: 'frost-blast',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/kelthuzad/abilities/icons/frost-blast_square.png',
      },
      {
        name: 'Fissura Sombria',
        description:
          'Cria uma fissura em qualquer lugar do campo de batalha que explode após 1.5 s, causando 320 de dano aos Heróis inimigos na área. Se um Herói inimigo for atingido, a recarga será redefinida para 1.5 s.',
        displayText: 'Causa muito dano em uma área',
        vital: 'Mana: 40',
        cooldown: 'Recarga: 16 s',
        slug: 'shadow-fissure',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/kelthuzad/abilities/icons/shadow-fissure_square.png',
      },
    ],
    expandedRole: {
      name: 'Assassino de Longo Alcance',
      description:
        'Assassino de Longo Alcance Causadores de dano que fazem chover balas, flechas ou feitiços mortíferos sobre os inimigos. Geralmente frágeis, eles se sentem mais seguros mantendo distância dos inimigos.',
      slug: 'ranged-assassin',
    },
    stats: {
      damage: 8,
      utility: 7,
      survivability: 4,
      complexity: 7,
    },
    skin: {
      id: 'KelThuzadBaseCommon',
      name: {
        en_US: 'Archlich of Naxxramas',
        es_MX: 'Señor Exánime de Naxxramas',
        pt_BR: 'Arquilich de Naxxramas',
        de_DE: 'Erzlich von Naxxramas',
        en_GB: 'Archlich of Naxxramas',
        es_ES: 'Archiexánime de Naxxramas',
        fr_FR: 'Archiliche de Naxxramas',
        it_IT: 'Arcilich di Naxxramas',
        pl_PL: 'Władca Naxxramas',
        ru_RU: 'Верховный лич Наксрамаса',
        ko_KR: '낙스라마스의 고위 리치',
        zh_TW: '納克薩瑪斯的大巫妖',
        zh_CN: '纳克萨玛斯的大巫妖',
      },
      description: {
        en_US: 'Archlich of Naxxramas',
        es_MX: 'Señor Exánime de Naxxramas',
        pt_BR: 'Arquilich de Naxxramas',
        de_DE: 'Erzlich von Naxxramas',
        en_GB: 'Archlich of Naxxramas',
        es_ES: 'Archiexánime de Naxxramas',
        fr_FR: 'Archiliche de Naxxramas',
        it_IT: 'Arcilich di Naxxramas',
        pl_PL: 'Władca Naxxramas',
        ru_RU: 'Верховный лич Наксрамаса',
        ko_KR: '낙스라마스의 고위 리치',
        zh_TW: '納克薩瑪斯的大巫妖',
        zh_CN: '纳克萨玛斯的大巫妖',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/KelThuzadBaseCommon?namespace=hms_80333',
      },
      slug: 'archlich-of-naxxramas',
    },
  },
  {
    name: 'Garrosh',
    title: 'Filho de Grito Infernal',
    role: {
      name: 'Guerreiro',
      description: 'Guerreiro Defensores e combatentes da linha de frente.',
      slug: 'warrior',
    },
    type: {
      name: 'Corpo a Corpo',
      slug: 'melee',
    },
    description:
      'Como novo chefe guerreiro da Horda, Garrosh é um guerreiro cruel e orgulhoso que governa com punho de ferro. Seu ódio pela Aliança arde intensamente, e ele quer destruir a facção a qualquer custo. Com seu machado, os orcs conquistarão a glória de tempos passados.',
    shortDescription:
      'Um Tanque de linha de frente, ideal para isolar e eliminar um adversário específico.',
    difficulty: 'Médio',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/garrosh/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/garrosh-32151ef6d8.jpg',
    franchise: 'Warcraft',
    release: '2017-08-08T00:00:00.000Z',
    isNew: false,
    slug: 'garrosh',
    trait: {
      name: 'Robustez',
      description:
        'Garrosh ganha 1 de Armadura para cada 2% do máximo de Vida faltante.',
      displayText: 'Ganha Armadura conforme a Vida diminui',
      slug: 'armor-up',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/garrosh/traits/icons/armor-up_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/garrosh/',
    abilities: [
      {
        name: 'Quebra-chão',
        description:
          'Causa 81 de dano aos inimigos em uma área. Heróis atingidos no limite exterior são Atordoados por 0.5 s. Em seguida a velocidade de movimento é reduzida em 40%  por 2 s.',
        displayText: 'Causa dano aos inimigos; pode atordoá-los',
        vital: 'Mana: 40',
        cooldown: 'Recarga: 8 segundos',
        slug: 'groundbreaker',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/garrosh/abilities/icons/groundbreaker_square.png',
      },
      {
        name: 'Sede de Sangue',
        description:
          'Causa 156 de dano a um inimigo e cura 10% da Vida faltante de Garrosh. A cura aumenta em 100% contra Heróis.',
        displayText: 'Causa dano e cura uma parte da Vida faltante',
        vital: 'Mana: 55',
        cooldown: 'Recarga: 12 segundos',
        slug: 'bloodthirst',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/garrosh/abilities/icons/bloodthirst_square.png',
      },
      {
        name: 'Bola de Demolição',
        description:
          'Arremessa uma Tropa, um Mercenário ou um Herói inimigo próximo no local selecionado, causando 91 de dano aos inimigos perto do impacto e reduzindo a Velocidade de Movimento em 30% por 2.5 s.',
        displayText: 'Arremessa um inimigo, causando dano e desacelerando-o',
        vital: 'Mana: 60',
        cooldown: 'Recarga: 16 segundos',
        slug: 'wrecking-ball',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/garrosh/abilities/icons/wrecking-ball_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: 'Desafio do Senhor da Guerra',
        description:
          'Silencia os Heróis próximos e força-os a atacar Garrosh por 2 s.',
        displayText: 'Força Heróis próximos a atacar Garrosh',
        vital: 'Mana: 40',
        cooldown: 'Recarga: 50 segundos',
        slug: 'warlords-challenge',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/garrosh/abilities/icons/warlords-challenge_square.png',
      },
      {
        name: 'Dizimar',
        description:
          'Causa 50 de dano aos inimigos próximos e os desacelera em 40% por 1.5 s. Causa 100% a mais de dano contra Heróis e cada Herói atingido reduz a recarga em 1 s.  Acumula até 3 cargas.',
        displayText: 'Causa dano e Desacelera os inimigos próximos',
        vital: 'Mana: 25',
        cooldown: 'Recarga da carga: 8 segundos',
        slug: 'decimate',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/garrosh/abilities/icons/decimate_square.png',
      },
    ],
    otherAbilities: [
      {
        name: 'Ao Combate',
        description:
          'Ative para arremessar um aliado próximo e conceder 25 de Armadura a ele por 3 s. Causa 91 de dano aos inimigos próximos com o impacto e os desacelera em 30% por 2.5 s.  Enquanto estiverem na luta, Heróis aliados ficam Irrefreáveis.',
        displayText: 'Ative para arremessar um aliado',
        cooldown: 'Recarga: 45 segundos',
        slug: 'into-the-fray',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/garrosh/abilities/icons/into-the-fray_square.png',
      },
    ],
    expandedRole: {
      name: 'Tanque',
      description:
        'Tanque Defensores da linha de frente, capazes de resistir a grandes estragos. Cuidam da proteção dos companheiros mais frágeis.',
      slug: 'tank',
    },
    stats: {
      damage: 3,
      utility: 7,
      survivability: 9,
      complexity: 6,
    },
    skin: {
      id: 'GarroshBaseCommon',
      name: {
        en_US: 'Son of Hellscream',
        es_MX: 'Hijo de Grito Infernal',
        pt_BR: 'Filho de Grito Infernal',
        de_DE: 'Sohn Höllschreis',
        en_GB: 'Son of Hellscream',
        es_ES: 'Hijo de Grito Infernal',
        fr_FR: 'Fils de Hurlenfer',
        it_IT: 'Figlio di Malogrido',
        pl_PL: 'Syn Piekłorycza',
        ru_RU: 'Сын Адского Крика',
        ko_KR: '헬스크림의 아들',
        zh_TW: '地獄吼之子',
        zh_CN: '地狱咆哮之子',
      },
      description: {
        en_US: 'Son of Hellscream',
        es_MX: 'Hijo de Grito Infernal',
        pt_BR: 'Filho de Grito Infernal',
        de_DE: 'Sohn Höllschreis',
        en_GB: 'Son of Hellscream',
        es_ES: 'Hijo de Grito Infernal',
        fr_FR: 'Fils de Hurlenfer',
        it_IT: 'Figlio di Malogrido',
        pl_PL: 'Syn Piekłorycza',
        ru_RU: 'Сын Адского Крика',
        ko_KR: '헬스크림의 아들',
        zh_TW: '地獄吼之子',
        zh_CN: '地狱咆哮之子',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/GarroshBaseCommon?namespace=hms_80333',
      },
      slug: 'son-of-hellscream',
    },
  },
  {
    name: 'Stukov',
    title: 'Almirante Infestado',
    role: {
      name: 'Suporte',
      description:
        'Suporte O Suporte concede bônus e outros benefícios aos companheiros.',
      slug: 'support',
    },
    type: {
      name: 'Corpo a Corpo',
      slug: 'melee',
    },
    description:
      'Alexei Stukov teve uma vida difícil e uma morte ainda pior. Ele foi traído, lançado ao espaço, ressuscitado, infestado, quase curado e transformado em cobaia quando a doença voltou. Agora, ele espalha essa infestação pelo Nexus...',
    shortDescription:
      'Um Curandeiro que causa muita perturbação de longo alcance.',
    difficulty: 'Médio',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/stukov/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/stukov-bc1e5bb57e.jpg',
    franchise: 'StarCraft',
    release: '2017-07-11T00:00:00.000Z',
    isNew: false,
    slug: 'stukov',
    trait: {
      name: 'Comando Bioletal',
      description:
        'Ative para detonar todos os Vírus de Stukov. Cada Patógeno Curativo restaura 450 de Vida do alvo e cada Pústula Alastrante causa 100 de dano e desacelera o alvo em 70% por 2 s.  Pode ser usado durante a canalização de Braço Espreitador.',
      displayText: 'Detona os Vírus, provocando efeito imediato',
      cooldown: 'Recarga: 16 segundos',
      slug: 'bio-kill-switch',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/stukov/traits/icons/bio-kill-switch_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/stukov/',
    abilities: [
      {
        name: 'Patógeno Curativo',
        description:
          'Infecta um Herói aliado com um Patógeno Curativo que cura 222 de Vida ao longo de 4.5 s. Os Patógenos Curativos podem se espalhar para um Herói aliado próximo a cada 0.75 s.  As instâncias do Patógeno Curativo podem se espalhar para cada Herói aliado só 1 vez.',
        displayText: 'Infecta aliados com um Vírus curativo que se propaga',
        vital: 'Mana: 40',
        cooldown: 'Recarga: 10 segundos',
        slug: 'healing-pathogen',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/stukov/abilities/icons/healing-pathogen_square.png',
      },
      {
        name: 'Pústula Alastrante',
        description:
          'Arremessa uma Pústula que atinge todos os Heróis inimigos no caminho, causando 20 de dano e desacelerando em 5%, chegando a 50% ao longo de 3 s. Causa mais 88 de dano ao expirar ou ser removida.',
        displayText: 'Causa dano e infecta inimigos com um Vírus debilitante',
        vital: 'Mana: 50',
        cooldown: 'Recarga: 10 segundos',
        slug: 'weighted-pustule',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/stukov/abilities/icons/weighted-pustule_square.png',
      },
      {
        name: 'Braço Espreitador',
        description:
          'Canaliza para criar uma área que causa 136 de dano por segundo aos inimigos que não sejam estruturas, silenciando-os. Causa 50% de dano a unidades não Heroicas.  A canalização não custa Mana e dura até ser cancelada ou interrompida.',
        displayText:
          'Causa dano e silencia os inimigos em uma área continuamente',
        vital: 'Mana: 60',
        cooldown: 'Recarga: 10 s',
        slug: 'lurking-arm',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/stukov/abilities/icons/lurking-arm_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: 'Revés Sobrepujante',
        description:
          'Stukov golpeia a área à frente 3 vezes ao longo de 1.75 s, repelindo e causando 48 de dano aos inimigos. Cada golpe é maior que o anterior.',
        displayText: 'Repele os inimigos à frente de Stukov',
        vital: 'Mana: 60',
        cooldown: 'Recarga: 60 s',
        slug: 'flailing-swipe',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/stukov/abilities/icons/flailing-swipe_square.png',
      },
      {
        name: 'Tranco Desmedido',
        description:
          'Stukov prolonga o próprio braço. Se atingir um Herói inimigo, este será empurrado até colidir com o cenário, causando190 de dano e atordoando-o por 0.5 s. Stukov ganha 50 de Armadura enquanto empurra a vítima.',
        displayText: 'Empurra um inimigo até colidir com o terreno',
        vital: 'Mana: 50',
        cooldown: 'Recarga: 20 segundos',
        slug: 'massive-shove',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/stukov/abilities/icons/massive-shove_square.png',
      },
    ],
    expandedRole: {
      name: 'Curandeiro',
      description:
        'Curandeiro Amigos para todas as horas. Sempre presentes para manter os aliados vivos e relativamente saudáveis nas lutas em equipe.',
      slug: 'healer',
    },
    stats: {
      damage: 3,
      utility: 8,
      survivability: 5,
      complexity: 7,
    },
    skin: {
      id: 'StukovBaseCommon',
      name: {
        en_US: 'Infested Admiral',
        es_MX: 'Almirante infestado',
        pt_BR: 'Almirante Infestado',
        de_DE: 'Verseuchter Admiral',
        en_GB: 'Infested Admiral',
        es_ES: 'Almirante infestado',
        fr_FR: 'Amiral contaminé',
        it_IT: 'Ammiraglio Infestato',
        pl_PL: 'Zainfekowany Admirał',
        ru_RU: 'Зараженный адмирал',
        ko_KR: '감염된 제독',
        zh_TW: '受感染的上將',
        zh_CN: '被感染的中将',
      },
      description: {
        en_US: 'Infested Admiral',
        es_MX: 'Almirante infestado',
        pt_BR: 'Almirante Infestado',
        de_DE: 'Verseuchter Admiral',
        en_GB: 'Infested Admiral',
        es_ES: 'Almirante infestado',
        fr_FR: 'Amiral contaminé',
        it_IT: 'Ammiraglio Infestato',
        pl_PL: 'Zainfekowany Admirał',
        ru_RU: 'Зараженный адмирал',
        ko_KR: '감염된 제독',
        zh_TW: '受感染的上將',
        zh_CN: '被感染的中将',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/StukovBaseCommon?namespace=hms_80333',
      },
      slug: 'infested-admiral',
    },
  },
  {
    name: 'Maltael',
    title: 'Aspecto da Morte',
    role: {
      name: 'Assassino',
      description: 'Assassino Matadores de heróis e semeadores de sofrimento.',
      slug: 'assassin',
    },
    type: {
      name: 'Corpo a Corpo',
      slug: 'melee',
    },
    description:
      'Antes o Aspecto da Sabedoria, Maltael abandonou o paraíso depois da destruição da Pedra do Mundo. Em segredo, ele decidiu pôr fim ao Conflito Eterno se tornando um Ceifador de Almas e eliminando tudo que tivesse sido afetado pela corrupção demoníaca — inclusive a humanidade.',
    shortDescription:
      'Um Guerreiro que marca e destroça inimigos com muita Vida.',
    difficulty: 'Médio',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/malthael/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/malthael-024c03fa4f.jpg',
    franchise: 'Diablo',
    release: '2017-06-13T00:00:00.000Z',
    isNew: false,
    slug: 'malthael',
    trait: {
      name: 'Marca do Ceifador',
      description:
        'Ataques Básicos cutilam a área à frente de Maltael e aplicam Marca do Ceifador a alvos que não sejam Estruturas por 4 s. Inimigos marcados ficam revelados e recebem dano equivalente a 1.75% do máximo de Vida deles a cada 1 s.',
      displayText: 'Ataques Básicos cutilam e aplicam Marca do Ceifador',
      slug: 'reapers-mark',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/malthael/traits/icons/reapers-mark_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/malthael/',
    abilities: [
      {
        name: 'Rasgar Alma',
        description:
          'Extrai a alma de inimigos próximos afligidos pela Marca do Ceifador, causando 100 de dano e curando 25 de Vida de Maltael para cada alvo atingido. Alvos Heroicos o curam em mais 4% do máximo de Vida dos Heróis.',
        displayText: 'Causa dano aos inimigos Marcados e cura',
        vital: 'Mana: 25',
        cooldown: 'Recarga: 2 segundos',
        slug: 'soul-rip',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/malthael/abilities/icons/soul-rip_square.png',
      },
      {
        name: 'Golpe Espectral',
        description:
          'Teleporta-se instantaneamente através de um inimigo afligido pela Marca do Ceifador, causando 59 de dano e restaurando a Marca do Ceifador.',
        displayText: 'Teleporta-se para um alvo Marcado',
        vital: 'Mana: 30',
        cooldown: 'Recarga: 5 segundos',
        slug: 'wraith-strike',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/malthael/abilities/icons/wraith-strike_square.png',
      },
      {
        name: 'Mortalha Sombria',
        description:
          'Depois de 0.25 s, dispara uma névoa sombria que aplica Marca do Ceifador aos inimigos atingidos.',
        displayText: 'Dispara uma onda que aplica Marca do Ceifador',
        vital: 'Mana: 50',
        cooldown: 'Recarga: 8 segundos',
        slug: 'death-shroud',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/malthael/abilities/icons/death-shroud_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: 'Almas Atormentadas',
        description:
          'Libera uma torrente de almas que aplica continuamente Marca do Ceifador nos inimigos próximos por 4 s. Conclui a recarga do Golpe Espectral no início e no fim de Almas Atormentadas.',
        displayText: 'Aplica Marca do Ceifador aos inimigos próximos',
        vital: 'Mana: 20',
        cooldown: 'Recarga: 60 segundos',
        slug: 'tormented-souls',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/malthael/abilities/icons/tormented-souls_square.png',
      },
      {
        name: 'Últimos Ritos',
        description:
          'Aplica uma sentença de morte a um Herói inimigo. Depois de 2 s, causa dano equivalente a 50% da Vida faltante desse Herói.  Missão: Inimigos mortos entre a aplicação de Últimos Ritos e 1.5 s após ela causar dano reduzem permanentemente a recarga em 5 s, até o mínimo de 20 s.',
        displayText:
          'Missão: Causar dano a um Herói com base na Vida faltante dele',
        vital: 'Mana: 100',
        cooldown: 'Recarga: 70 s',
        slug: 'last-rites',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/malthael/abilities/icons/last-rites_square.png',
      },
    ],
    expandedRole: {
      name: 'Guerreiro',
      description:
        'Guerreiro Guerreiros poderosos e resistentes capazes de causar estragos. Com potencial de tanqueamento limitado, eles contam com mobilidade adicional, controle coletivo ou capacidade de sobrevivência.',
      slug: 'bruiser',
    },
    stats: {
      damage: 7,
      utility: 4,
      survivability: 6,
      complexity: 6,
    },
    skin: {
      id: 'MalthaelBaseCommon',
      name: {
        en_US: 'Aspect of Death',
        es_MX: 'Aspecto de la Muerte',
        pt_BR: 'Aspecto da Morte',
        de_DE: 'Aspekt des Todes',
        en_GB: 'Aspect of Death',
        es_ES: 'Aspecto de la Muerte',
        fr_FR: 'Aspect de la Mort',
        it_IT: 'Aspetto della Morte',
        pl_PL: 'Aspekt Śmierci',
        ru_RU: 'Ангел Смерти',
        ko_KR: '죽음의 화신',
        zh_TW: '死亡化身',
        zh_CN: '死亡化身',
      },
      description: {
        en_US: 'Aspect of Death',
        es_MX: 'Aspecto de la Muerte',
        pt_BR: 'Aspecto da Morte',
        de_DE: 'Aspekt des Todes',
        en_GB: 'Aspect of Death',
        es_ES: 'Aspecto de la Muerte',
        fr_FR: 'Aspect de la Mort',
        it_IT: 'Aspetto della Morte',
        pl_PL: 'Aspekt Śmierci',
        ru_RU: 'Ангел Смерти',
        ko_KR: '죽음의 화신',
        zh_TW: '死亡化身',
        zh_CN: '死亡化身',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/MalthaelBaseCommon?namespace=hms_80333',
      },
      slug: 'aspect-of-death',
    },
  },
  {
    name: 'D.Va',
    title: 'Piloto de MEKA',
    role: {
      name: 'Guerreiro',
      description: 'Guerreiro Defensores e combatentes da linha de frente.',
      slug: 'warrior',
    },
    type: {
      name: 'Longo Alcance',
      slug: 'ranged',
    },
    description:
      'Hana Song, também conhecida como "D.Va", é campeã mundial de jogos eletrônicos e um ícone global em ascensão. Integrante da unidade MEKA de elite da Coreia do Sul, ela luta para proteger sua pátria da ameaça ômnica que se oculta no Mar da China Oriental.',
    shortDescription:
      'Uma Guerreira dura de matar, excelente em afastar os inimigos dos aliados.',
    difficulty: 'Médio',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/dva/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/dva-6a8b119c88.jpg',
    franchise: 'Overwatch',
    release: '2017-05-16T00:00:00.000Z',
    isNew: false,
    slug: 'dva',
    trait: {
      name: 'Modo Mecha',
      description:
        'Quando o Mecha é destruído, D.Va é ejetada após 0.75 s e pode continuar lutando. O Mecha concede só 50% da experiência normal de Herói ao ser destruído.',
      displayText: 'D.Va pode ejetar-se do Mecha e continuar lutando',
      slug: 'mech-mode',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/dva/traits/icons/mech-mode_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/dva/',
    abilities: [
      {
        name: 'Propulsores',
        description:
          'Aumenta a Velocidade de Movimento de D.Va em 125% por 2 s. Os inimigos atingidos recebem 135 de dano e são repelidos.   D.Va não pode ser desacelerada enquanto os Propulsores estiverem ativos e cada inimigo só pode ser atingindo uma vez por uso.',
        displayText: 'Anda rápido e repele inimigos',
        cooldown: 'Recarga: 9 s',
        slug: 'boosters',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/dva/abilities/icons/boosters_square.png',
      },
      {
        name: 'Matriz de Defesa',
        description:
          'Canaliza um campo defensivo na direção selecionada por 3s, reduzindo o dano causado por Heróis inimigos em 75%. O Mecha pode andar enquanto canaliza, mas não pode se virar.  O dano causado ao Mecha por inimigos dentro da Matriz de Defesa concede a mesma quantidade de carga de Autodestruir.',
        displayText: 'Reduz o dano de Heróis inimigos em uma área',
        cooldown: 'Recarga: 10 s',
        slug: 'defense-matrix',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/dva/abilities/icons/defense-matrix_square.png',
      },
      {
        name: 'Autodestruir',
        description:
          'Ejeta-se do Mecha, destruindo-o após 4 s. Causa de 1200 a 400 de dano em uma grande área, de acordo com a distância ao centro da explosão. Só causa 50% de dano a Estruturas.  Ganha 1% de carga a cada 2 s que passar usando Ataques Básicos e 30% de carga pelos 100% dos pontos de Vida do Mecha perdidos.',
        displayText:
          'Ejeta-se do Mecha, iniciando a autodestruição para causar muito dano',
        slug: 'self-destruct',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/dva/abilities/icons/self-destruct_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: 'Salto de Coelhinho',
        description:
          'O Mecha de D.Va fica Irrefreável e pisoteia a cada 0.5 s, causando 60 de dano e desacelerando inimigos em 40%. Dura 4 s.  Requer Modo Mecha.',
        displayText: 'Torna-se Irrefreável e desacelera Heróis próximos',
        cooldown: 'Recarga: 100 s',
        slug: 'bunny-hop',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/dva/abilities/icons/bunny-hop_square.png',
      },
      {
        name: 'Tirambaço',
        description:
          'Causa 250 de dano a todos os inimigos em linha reta. A recarga de Chamar Mecha é reduzida em 8 s para cada Herói inimigo atingido.  Requer Modo Piloto.',
        displayText: 'No Modo Piloto, causa dano a inimigos em linha reta',
        cooldown: 'Recarga: 4 segundos',
        slug: 'big-shot',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/dva/abilities/icons/big-shot_square.png',
      },
    ],
    otherAbilities: [
      {
        name: 'Chamar Mecha',
        description:
          'Chama um Mecha novo e entra em Modo Mecha.  Cada Ataque Básico reduz a recarga em 0.5 s.',
        cooldown: 'Recarga: 45 segundos',
        slug: 'call-mech',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/dva/abilities/icons/call-mech_square.png',
      },
      {
        name: 'Andarilho Mecanizado',
        description:
          'Enquanto estiver no Mecha, D.Va pode andar e atirar, mas a Velocidade de Movimento básica é reduzida em 15%.',
        displayText:
          'Enquanto estiver no Mecha, D.Va pode andar e atirar, mas a Velocidade de Movimento é reduzida.',
        slug: 'mechanized-walker',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/dva/abilities/icons/mechanized-walker_square.png',
      },
      {
        name: 'Arremetida a Jato',
        description:
          'Arremete até o local selecionado, passando pelos inimigos no caminho.',
        displayText: 'Arremete até o local selecionado',
        cooldown: 'Recarga: 12 segundos',
        slug: 'torpedo-dash',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/dva/abilities/icons/torpedo-dash_square.png',
      },
      {
        name: 'Pulso de Concussão',
        description:
          'Causa 141 de dano e repele os inimigos em uma área cônica.',
        displayText: 'Causa dano e repele inimigos próximos',
        cooldown: 'Recarga: 7 segundos',
        slug: 'concussive-pulse',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/dva/abilities/icons/concussive-pulse_square.png',
      },
    ],
    expandedRole: {
      name: 'Guerreiro',
      description:
        'Guerreiro Guerreiros poderosos e resistentes capazes de causar estragos. Com potencial de tanqueamento limitado, eles contam com mobilidade adicional, controle coletivo ou capacidade de sobrevivência.',
      slug: 'bruiser',
    },
    stats: {
      damage: 4,
      utility: 8,
      survivability: 8,
      complexity: 6,
    },
    skin: {
      id: 'DVaBase',
      name: {
        en_US: 'MEKA Pilot',
        es_MX: 'Piloto de MEKA',
        pt_BR: 'Piloto de MEKA',
        de_DE: 'MEKA-Pilotin',
        en_GB: 'MEKA Pilot',
        es_ES: 'Piloto de MEKA',
        fr_FR: 'Pilote de MEKA',
        it_IT: 'Pilota di MEKA',
        pl_PL: 'Pilotka MEKA',
        ru_RU: 'Пилот МЕКА',
        ko_KR: 'MEKA 조종사',
        zh_TW: '機甲駕駛員',
        zh_CN: 'MEKA驾驶员',
      },
      description: {
        en_US: 'MEKA Pilot',
        es_MX: 'Piloto de MEKA',
        pt_BR: 'Piloto de MEKA',
        de_DE: 'MEKA-Pilotin',
        en_GB: 'MEKA Pilot',
        es_ES: 'Piloto de MEKA',
        fr_FR: 'Pilote de MEKA',
        it_IT: 'Pilota di MEKA',
        pl_PL: 'Pilotka MEKA',
        ru_RU: 'Пилот МЕКА',
        ko_KR: 'MEKA 조종사',
        zh_TW: '機甲駕駛員',
        zh_CN: 'MEKA驾驶员',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/DVaBase?namespace=hms_80333',
      },
      slug: 'meka-pilot',
    },
  },
  {
    name: 'Genji',
    title: 'Ninja Cibernético',
    role: {
      name: 'Assassino',
      description: 'Assassino Matadores de heróis e semeadores de sofrimento.',
      slug: 'assassin',
    },
    type: {
      name: 'Longo Alcance',
      slug: 'ranged',
    },
    description:
      'Sendo o discípulo mais jovem e despreocupado do clã Shimada, Genji foi expulso pelo próprio irmão por não querer participar das atividades ilegais do grupo. Hoje, com o corpo ciborgue recebido da Overwatch, ele trilha seu próprio caminho na luta pelo que é certo.',
    shortDescription:
      'Um Assassino ágil e oportunista, capaz de fazer estrago nos inimigos mais fracos da linha de trás.',
    difficulty: 'Difícil',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/genji/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/genji-4853f3df7d.jpg',
    franchise: 'Overwatch',
    release: '2017-04-25T00:00:00.000Z',
    isNew: false,
    slug: 'genji',
    trait: {
      name: 'Agilidade Cibernética',
      description: 'Ative para saltar até a área selecionada.',
      displayText: 'Saltar Sobre Terreno',
      cooldown: 'Recarga: 20 segundos',
      slug: 'cyber-agility',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/genji/traits/icons/cyber-agility_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/genji/',
    abilities: [
      {
        name: 'Shuriken',
        description:
          'Lança 3 Shurikens de forma espalhada, causando 65 de dano cada ao primeiro inimigo atingido.  Armazena até 3 cargas. Todas as cargas são restauradas quando a recarga é concluída.',
        displayText: 'Lança Shurikens de forma espalhada',
        vital: 'Mana: 20',
        cooldown: 'Recarga da carga: 12 segundos',
        slug: 'shuriken',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/genji/abilities/icons/shuriken_square.png',
      },
      {
        name: 'Desviar',
        description:
          'Canaliza por 1.25 s, ficando Protegido e bloqueando dano. Qualquer dano bloqueado durante a canalização fará com que Genji arremesse uma Kunai no inimigo mais próximo, causando 55 de dano. Heróis são priorizados.  Total de dano bloqueado: 0',
        displayText: 'Fica Protegido e revida os ataques',
        vital: 'Mana: 70',
        cooldown: 'Recarga: 16 segundos',
        slug: 'deflect',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/genji/abilities/icons/deflect_square.png',
      },
      {
        name: 'Golpe Veloz',
        description:
          'Arremete, causando 190 de dano a todos os inimigos em linha reta. Se um Herói inimigo morrer em até 1.5 s após ser atingido pelo Golpe Veloz, a recarga será concluída e o custo de Mana será reposto.',
        displayText: 'Arremete, causando dano aos inimigos no caminho',
        vital: 'Mana: 75',
        cooldown: 'Recarga: 12 segundos',
        slug: 'swift-strike',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/genji/abilities/icons/swift-strike_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: 'Lâmina do Dragão',
        description:
          'Desfere a Lâmina do Dragão por 8 s. Enquanto estiver ativa, reative a habilidade para arremeter e atacar a área à frente, causando 240 de dano.',
        displayText: 'Desfere a Lâmina do Dragão',
        vital: 'Mana: 75',
        cooldown: 'Recarga: 100 segundos',
        slug: 'dragonblade',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/genji/abilities/icons/dragonblade_square.png',
      },
      {
        name: 'Corte Duplo',
        description:
          'Desfere dois cortes, causando 145 de dano. Os cortes explodem após 1.25 s, causando mais 290 de dano aos inimigos na área atingida.',
        displayText: 'Causa muito dano em forma de cruz',
        vital: 'Mana: 70',
        cooldown: 'Recarga: 60 segundos',
        slug: 'x-strike',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/genji/abilities/icons/x-strike_square.png',
      },
    ],
    otherAbilities: [
      {
        name: 'Lâmina do Dragão',
        description: 'Avança e corta a área à frente, causando 240 de dano.',
        displayText: 'Avança e corta a área à frente',
        cooldown: 'Recarga: 1 segundo',
        slug: 'dragonblade',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/genji/abilities/icons/dragonblade_square.png',
      },
      {
        name: 'Garra de Dragão',
        description: 'Causa 190 de dano a todos os inimigos próximos.',
        displayText: 'Ative para causar dano aos inimigos próximos',
        slug: 'dragon-claw',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/genji/abilities/icons/dragon-claw_square.png',
      },
    ],
    expandedRole: {
      name: 'Assassino de Longo Alcance',
      description:
        'Assassino de Longo Alcance Causadores de dano que fazem chover balas, flechas ou feitiços mortíferos sobre os inimigos. Geralmente frágeis, eles se sentem mais seguros mantendo distância dos inimigos.',
      slug: 'ranged-assassin',
    },
    stats: {
      damage: 8,
      utility: 4,
      survivability: 4,
      complexity: 6,
    },
    skin: {
      id: 'GenjiBaseCommon',
      name: {
        en_US: 'Cybernetic Ninja',
        es_MX: 'Ninja cibernético',
        pt_BR: 'Ninja Cibernético',
        de_DE: 'Kybernetischer Ninja',
        en_GB: 'Cybernetic Ninja',
        es_ES: 'Ninja cibernético',
        fr_FR: 'Ninja cybernétique',
        it_IT: 'Cyberninja',
        pl_PL: 'Cyborg Ninja',
        ru_RU: 'Киберниндзя',
        ko_KR: '사이보그 닌자',
        zh_TW: '生化機械忍者',
        zh_CN: '半机械忍者',
      },
      description: {
        en_US: 'Cybernetic Ninja',
        es_MX: 'Ninja cibernético',
        pt_BR: 'Ninja Cibernético',
        de_DE: 'Kybernetischer Ninja',
        en_GB: 'Cybernetic Ninja',
        es_ES: 'Ninja cibernético',
        fr_FR: 'Ninja cybernétique',
        it_IT: 'Cyberninja',
        pl_PL: 'Cyborg Ninja',
        ru_RU: 'Киберниндзя',
        ko_KR: '사이보그 닌자',
        zh_TW: '生化機械忍者',
        zh_CN: '半机械忍者',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/GenjiBaseCommon?namespace=hms_80333',
      },
      slug: 'cybernetic-ninja',
    },
  },
  {
    name: 'Cássia',
    title: 'Amazona Matriarca-de-guerra',
    role: {
      name: 'Assassino',
      description: 'Assassino Matadores de heróis e semeadores de sofrimento.',
      slug: 'assassin',
    },
    type: {
      name: 'Longo Alcance',
      slug: 'ranged',
    },
    description:
      'Após estilhaçar a Pedra do Mundo, a jovem Amazona Cássia se tornou outra pessoa. Ela viu ódio, terror, destruição com os próprios olhos. Para sobreviverem à escuridão no horizonte, as Askari precisavam de um exército. E ela começou a treiná-las imediatamente.',
    shortDescription:
      'Uma Assassina especializada em combate contra Atacantes Físicos.',
    difficulty: 'Médio',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/cassia/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/cassia-938ed4d346.jpg',
    franchise: 'Diablo',
    release: '2017-04-04T00:00:00.000Z',
    isNew: false,
    slug: 'cassia',
    trait: {
      name: 'Evasão',
      description:
        'Enquanto se movimenta, Cássia ganha gradativamente até 30 de Armadura ao longo de 3 s. Após ficar imóvel por 0.75 a Armadura se perde rapidamente ao longo de 0,5 s.   Evasão permanece carregada enquanto Rechaça.',
      displayText: 'Ganha Armadura enquanto se move',
      slug: 'avoidance',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/cassia/traits/icons/avoidance_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/cassia/',
    abilities: [
      {
        name: 'Fúria de Raios',
        description:
          'Lança uma Zagaia de Raios que causa 165 de dano ao primeiro inimigo e se divide em dois raios que causam 165 de dano aos inimigos no caminho.',
        displayText: 'Lança uma Zagaia de Raios que se divide após o impacto',
        vital: 'Mana: 20',
        cooldown: 'Recarga da carga: 5 segundos',
        slug: 'lightning-fury',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/cassia/abilities/icons/lightning-fury_square.png',
      },
      {
        name: 'Luz Ofuscante',
        description:
          'Após 0.5 s, causa 50 de dano e cega os inimigos na área selecionada por 2 s.  Passivo: Cássia causa 20% a mais de dano a alvos cegos.',
        displayText: 'Cega inimigos na área selecionada',
        vital: 'Mana: 50',
        cooldown: 'Recarga: 15 segundos',
        slug: 'blinding-light',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/cassia/abilities/icons/blinding-light_square.png',
      },
      {
        name: 'Rechaçar',
        description:
          'Investe contra um inimigo e, ao alcançá-lo, canaliza por até 1.5 s, causando 68 de dano aos inimigos à frente de Cássia a cada 0.25 s. Causa 50% a menos de dano a inimigos que não forem Heróis. Evasão permanece carregada enquanto canaliza.',
        displayText:
          'Investe contra o alvo e ataca rapidamente os inimigos próximos',
        vital: 'Mana: 50',
        cooldown: 'Recarga: 10 segundos',
        slug: 'fend',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/cassia/abilities/icons/fend_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: 'Esfera de Raios',
        description:
          'Arremessa uma esfera de raios em um Herói inimigo que se propaga até 6 vezes entre a Cássia e os Heróis inimigos próximos, causando 180 de dano às vítimas.',
        displayText: 'Arremessa uma esfera de raios que se propaga',
        vital: 'Mana: 60',
        cooldown: 'Recarga: 60 segundos',
        slug: 'ball-lightning',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/cassia/abilities/icons/ball-lightning_square.png',
      },
      {
        name: 'Valquíria',
        description:
          'Evoca uma Valquíria que corre até a Cássia após 0.75 s, arrastando o primeiro Herói inimigo atingido, causando 225 de dano e atordoando-o por 0.5 s no final da corrida. A Valquíria repele todos os outros Heróis inimigos no caminho.',
        displayText: 'Evoca uma Valquíria para empalar inimigos',
        vital: 'Mana: 60',
        cooldown: 'Recarga: 60 segundos',
        slug: 'valkyrie',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/cassia/abilities/icons/valkyrie_square.png',
      },
    ],
    expandedRole: {
      name: 'Assassino de Longo Alcance',
      description:
        'Assassino de Longo Alcance Causadores de dano que fazem chover balas, flechas ou feitiços mortíferos sobre os inimigos. Geralmente frágeis, eles se sentem mais seguros mantendo distância dos inimigos.',
      slug: 'ranged-assassin',
    },
    stats: {
      damage: 7,
      utility: 5,
      survivability: 6,
      complexity: 4,
    },
    skin: {
      id: 'AmazonBaseCommon',
      name: {
        en_US: 'Amazon Warmatron',
        es_MX: 'Matrona de guerra amazona',
        pt_BR: 'Amazona Matriarca-de-guerra',
        de_DE: 'Kriegsmatrone der Amazonen',
        en_GB: 'Amazon Warmatron',
        es_ES: 'Amazona matriarca de guerra',
        fr_FR: 'Chef de guerre amazone',
        it_IT: 'Signora della Guerra Amazzone',
        pl_PL: 'Matriarchini Amazonek',
        ru_RU: 'Дева битвы',
        ko_KR: '아마존 여군주',
        zh_TW: '亞馬遜戰爭仕女',
        zh_CN: '亚马逊战争仕女',
      },
      description: {
        en_US: 'Amazon Warmatron',
        es_MX: 'Matrona de guerra amazona',
        pt_BR: 'Amazona Matriarca-de-guerra',
        de_DE: 'Kriegsmatrone der Amazonen',
        en_GB: 'Amazon Warmatron',
        es_ES: 'Amazona matriarca de guerra',
        fr_FR: 'Chef de guerre amazone',
        it_IT: 'Signora della Guerra Amazzone',
        pl_PL: 'Matriarchini Amazonek',
        ru_RU: 'Дева битвы',
        ko_KR: '아마존 여군주',
        zh_TW: '亞馬遜戰爭仕女',
        zh_CN: '亚马逊战争仕女',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/AmazonBaseCommon?namespace=hms_80333',
      },
      slug: 'amazon-warmatron',
    },
  },
  {
    name: 'Sondius',
    title: 'Sonda Curiosa',
    role: {
      name: 'Especialista',
      description:
        'Especialista Quebradores de regras e mestres do combate diferenciado.',
      slug: 'specialist',
    },
    type: {
      name: 'Longo Alcance',
      slug: 'ranged',
    },
    description:
      'Desde que foi ativado, Sondius vem tentando provar seu valor. Ele pode ser pequeno, mas foi de suma importância quando transdobrou um pilar crucial durante a retomada de Aiur. Como a mais valente de todas as sondas, Sondius está louco para cumprir seu papel no Nexus.',
    shortDescription:
      'Um Evocador que causa muito dano, mas precisa ficar perto dos Pilares para ser eficaz.',
    difficulty: 'Difícil',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/probius/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/probius-259ad8b059.jpg',
    franchise: 'StarCraft',
    release: '2017-03-14T00:00:00.000Z',
    isNew: false,
    slug: 'probius',
    trait: {
      name: 'Transdobrar Pilar Energético',
      description:
        'Transdobra um Pilar Energético que gera um Campo de Energia e concede visão dos arredores. Sondius só regenera Mana se estiver dentro de um Campo de Energia.  É possível ter até 2 Pilares ativos por vez.',
      displayText:
        'Evoca um Pilar que reenergiza o Sondius e permite erguer outras construções',
      cooldown: 'Recarga: 12 segundos',
      slug: 'warp-in-pylon',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/probius/traits/icons/warp-in-pylon_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/probius/',
    abilities: [
      {
        name: 'Pulso Disruptor',
        description:
          'Dispara um surto de energia, causando 142 de dano a todos os inimigos atingidos.  Se atingir o centro de uma Fenda de Transdobra, ela explodirá e causará dano extra.',
        displayText:
          'Dispara um míssil em linha reta que causa dano e detona Fendas de Transdobra',
        vital: 'Mana: 75',
        cooldown: 'Recarga: 3 segundos',
        slug: 'disruption-pulse',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/probius/abilities/icons/disruption-pulse_square.png',
      },
      {
        name: 'Fenda de Transdobra',
        description:
          'Abre uma Fenda de Transdobra instável que, ao se armar após 1.25 s, desacelera inimigos próximos em 25% por 9 s.  As Fendas de Transdobra armadas explodem se forem atingidas por um Pulso Disruptor, causando 261 de dano aos inimigos próximos.   Acumula até2 cargas.',
        displayText:
          'Cria uma fenda que desacelera inimigos e pode ser detonada com Pulso Disruptor',
        vital: 'Mana: 150',
        cooldown: 'Recarga da carga: 6 segundos',
        slug: 'warp-rift',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/probius/abilities/icons/warp-rift_square.png',
      },
      {
        name: 'Canhão de Fótons',
        description:
          'Transdobra um Canhão de Fótons que causa 105 de dano por segundo. Dura 13 s.  Só pode ser colocado no Campo de Energia de um Pilar Energético e é desativado se não houver nenhum Pilar por perto.',
        displayText: 'Cria um canhão que ataca inimigos próximos',
        cooldown: 'Recarga: 15 segundos',
        slug: 'photon-cannon',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/probius/abilities/icons/photon-cannon_square.png',
      },
      {
        name: 'Trabalho Apressado',
        description:
          'Ative para ganhar 60% de Velocidade de Movimento por 5 s. Receber dano cancela esse efeito. Trabalho Apressado fica sempre ativo no Salão das Tempestades.  Passivo: Sondius flutua pelo chão, movendo-se 10% mais rápido.',
        displayText: 'Anda mais rápido. Ative para andar ainda mais rápido.',
        cooldown: 'Recarga: 30 segundos',
        slug: 'worker-rush',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/probius/abilities/icons/worker-rush_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: 'Sobrecarga de Pilar',
        description:
          'Aumenta o tamanho do Campo de Energia dos Pilares e faz com que ataquem os inimigos dentro dele, causando 96 de dano por segundo. Dura 10 s.',
        displayText: 'Pilares Ofensivos',
        vital: 'Mana: 100',
        cooldown: 'Recarga: 80 segundos',
        slug: 'pylon-overcharge',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/probius/abilities/icons/pylon-overcharge_square.png',
      },
      {
        name: 'Barreira Negativa',
        description:
          'Mira Vetorial Projeta na direção do alvo uma barreira de energia negativa que dura 4 s. Os inimigos que tocarem nela receberão 68 de dano por segundo e serão desacelerados em 80% enquanto permanecerem em contato com a barreira.',
        displayText: 'Cria uma barreira de desaceleração',
        vital: 'Mana: 100',
        cooldown: 'Recarga: 25 segundos',
        slug: 'null-gate',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/probius/abilities/icons/null-gate_square.png',
      },
    ],
    expandedRole: {
      name: 'Assassino de Longo Alcance',
      description:
        'Assassino de Longo Alcance Causadores de dano que fazem chover balas, flechas ou feitiços mortíferos sobre os inimigos. Geralmente frágeis, eles se sentem mais seguros mantendo distância dos inimigos.',
      slug: 'ranged-assassin',
    },
    stats: {
      damage: 8,
      utility: 4,
      survivability: 4,
      complexity: 7,
    },
    skin: {
      id: 'ProbiusBaseCommon',
      name: {
        en_US: 'Curious Probe',
        es_MX: 'Sonda curiosa',
        pt_BR: 'Sonda Curiosa',
        de_DE: 'Neugierige Sonde',
        en_GB: 'Curious Probe',
        es_ES: 'Sonda curiosa',
        fr_FR: 'Sonde inquisitrice',
        it_IT: 'Sonda curiosa',
        pl_PL: 'Ciekawski Próbnik',
        ru_RU: 'Любопытный зонд',
        ko_KR: '호기심 많은 탐사정',
        zh_TW: '奇特的探測機',
        zh_CN: '充满好奇心的探机',
      },
      description: {
        en_US: 'Curious Probe',
        es_MX: 'Sonda curiosa',
        pt_BR: 'Sonda Curiosa',
        de_DE: 'Neugierige Sonde',
        en_GB: 'Curious Probe',
        es_ES: 'Sonda curiosa',
        fr_FR: 'Sonde inquisitrice',
        it_IT: 'Sonda curiosa',
        pl_PL: 'Ciekawski Próbnik',
        ru_RU: 'Любопытный зонд',
        ko_KR: '호기심 많은 탐사정',
        zh_TW: '奇特的探測機',
        zh_CN: '充满好奇心的探机',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/ProbiusBaseCommon?namespace=hms_80333',
      },
      slug: 'curious-probe',
    },
  },
  {
    name: 'Lúcio',
    title: 'DJ na Luta pela Liberdade',
    role: {
      name: 'Suporte',
      description:
        'Suporte O Suporte concede bônus e outros benefícios aos companheiros.',
      slug: 'support',
    },
    type: {
      name: 'Longo Alcance',
      slug: 'ranged',
    },
    description:
      "Das ruas do Rio de Janeiro para as boates de King's Row, as batidas do Lúcio levam alegria e muita ação para todos na festa. Sua próxima turnê será no Nexus, onde ele promete esculachar e lutar pelo que é certo.",
    shortDescription:
      'Um Curandeiro que aumenta a mobilidade da equipe e afasta inimigos dos aliados.',
    difficulty: 'Médio',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/lucio/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/lucio-7a47cc9abb.jpg',
    franchise: 'Overwatch',
    release: '2017-02-14T00:00:00.000Z',
    isNew: false,
    slug: 'lucio',
    trait: {
      name: 'Empurrão',
      description:
        'Ao se mover pelo terreno, ative para deslizar para o local selecionado. Inimigos atingidos recebem 100 de dano e são desacelerados em 75% por 1 s.',
      displayText: 'Empurrão na parede desacelera os inimigos',
      cooldown: 'Recarga: 20 segundos',
      slug: 'push-off',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/lucio/traits/icons/push-off_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/lucio/',
    abilities: [
      {
        name: 'Onda Sonora',
        description: 'Causa 105 de dano aos inimigos na área e os repele.',
        displayText: 'Repele inimigos próximos',
        vital: 'Mana: 30',
        cooldown: 'Recarga: 7 segundos',
        slug: 'soundwave',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/lucio/abilities/icons/soundwave_square.png',
      },
      {
        name: 'Transição',
        description:
          'Toca uma das duas músicas para o Lúcio e os aliados.  Impulso de Cura: Cura passivamente o Lúcio e os Heróis aliados próximos em 15 de Vida por segundo.  Impulso de Velocidade: Aumenta a Velocidade de Movimento do Lúcio e dos Heróis aliados próximos em 10%.',
        displayText:
          'Toca uma música de Impulso de Cura ou de Impulso de Velocidade',
        slug: 'crossfade',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/lucio/abilities/icons/crossfade_square.png',
      },
      {
        name: 'Solta o Som',
        description:
          'Aumenta o volume da música da Transição do Lúcio por 3 s, aumentando o Impulso de Cura para 112 de Vida por segundo e o Impulso de Velocidade para 30% a mais de Velocidade de Movimento.',
        displayText: 'Aumenta o efeito da música da Transição do Lúcio',
        vital: 'Mana: 90',
        cooldown: 'Recarga: 13 segundos',
        slug: 'amp-it-up',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/lucio/abilities/icons/amp-it-up_square.png',
      },
      {
        name: 'Corrida na Parede',
        description:
          'Ao se mover pelo terreno, Lúcio começa uma Corrida na Parede por 2 s. Quando a Corrida na Parede está ativa, Lúcio pode atravessar unidades e ganha 20% de Velocidade de Movimento, que acumula com outros bônus.',
        displayText:
          'Lúcio ganha Velocidade de Movimento perto de terrenos e pode atravessar unidades',
        slug: 'wall-ride',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/lucio/abilities/icons/wall-ride_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: 'Barreira de Som',
        description:
          'Após 1 s, Lúcio e os Heróis aliados próximos ganham 1296 pontos de Escudo, que decaem rapidamente ao longo de 6 s.',
        displayText: 'Concede Escudo a aliados próximos',
        vital: 'Mana: 100',
        cooldown: 'Recarga: 80 s',
        slug: 'sound-barrier',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/lucio/abilities/icons/sound-barrier_square.png',
      },
      {
        name: 'Toca Aqui',
        description:
          'Patina rapidamente até um Herói aliado. Ao chegar, o aliado recebe Irrefreável por 1 s e uma cura de 250.',
        displayText: 'Patina até os aliados, curando e concedendo Irrefreável',
        vital: 'Mana: 35',
        cooldown: 'Recarga: 15 s por aliado',
        slug: 'high-five',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/lucio/abilities/icons/high-five_square.png',
      },
    ],
    otherAbilities: [
      {
        name: 'Transição',
        description:
          'Tocando Impulso de Velocidade, que aumenta a Velocidade de Movimento de Lúcio e dos Heróis aliados próximos em 10%.  Ative para tocar Impulso de Cura em vez disso.',
        displayText:
          'Toca uma música de Impulso de Cura ou de Impulso de Velocidade.',
        slug: 'crossfade',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/lucio/abilities/icons/crossfade_square.png',
      },
    ],
    expandedRole: {
      name: 'Curandeiro',
      description:
        'Curandeiro Amigos para todas as horas. Sempre presentes para manter os aliados vivos e relativamente saudáveis nas lutas em equipe.',
      slug: 'healer',
    },
    stats: {
      damage: 3,
      utility: 8,
      survivability: 6,
      complexity: 5,
    },
    skin: {
      id: 'LucioBaseCommon',
      name: {
        en_US: 'Freedom Fighting DJ',
        es_MX: 'DJ Luchador por la libertad',
        pt_BR: 'DJ na Luta pela Liberdade',
        de_DE: 'DJ und Freiheitskämpfer',
        en_GB: 'Freedom Fighting DJ',
        es_ES: 'DJ que lucha por la libertad',
        fr_FR: 'DJ, champion de la liberté',
        it_IT: 'DJ, combattente per la libertà',
        pl_PL: 'DJ Bojownik',
        ru_RU: 'Диджей и борец за свободу',
        ko_KR: '자유의 투사 DJ',
        zh_TW: '自由鬥士、DJ',
        zh_CN: '自由战士DJ',
      },
      description: {
        en_US: 'Freedom Fighting DJ',
        es_MX: 'DJ Luchador por la libertad',
        pt_BR: 'DJ na Luta pela Liberdade',
        de_DE: 'DJ und Freiheitskämpfer',
        en_GB: 'Freedom Fighting DJ',
        es_ES: 'DJ que lucha por la libertad',
        fr_FR: 'DJ, champion de la liberté',
        it_IT: 'DJ, combattente per la libertà',
        pl_PL: 'DJ Bojownik',
        ru_RU: 'Диджей и борец за свободу',
        ko_KR: '자유의 투사 DJ',
        zh_TW: '自由鬥士、DJ',
        zh_CN: '自由战士DJ',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/LucioBaseCommon?namespace=hms_80333',
      },
      slug: 'freedom-fighting-dj',
    },
  },
  {
    name: 'Valira',
    title: 'Sombra dos Destronados',
    role: {
      name: 'Assassino',
      description: 'Assassino Matadores de heróis e semeadores de sofrimento.',
      slug: 'assassin',
    },
    type: {
      name: 'Corpo a Corpo',
      slug: 'melee',
    },
    description:
      'Por certo tempo, a gladiadora Valira Sanguinar serviu obedientemente como uma das guarda-costas pessoais de Varian Wrynn. Hoje, ela emprega suas habilidades furtivas no combate contra a Legião junto com os Destronados, uma ordem secreta de ladinos.',
    shortDescription:
      'Uma Assassina furtiva, especializada em incapacitar os adversários.',
    difficulty: 'Difícil',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/valeera/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/valeera-5eb1dd7aee.jpg',
    franchise: 'Warcraft',
    release: '2017-01-24T00:00:00.000Z',
    isNew: false,
    slug: 'valeera',
    trait: {
      name: 'Sumir',
      description:
        'Some de vista, ganhando Furtividade, 20% de Velocidade de Movimento e acesso a novas Habilidades. No primeiro segundo, Valira fica Irrevelável e pode atravessar outras unidades. Permanecer imóvel por pelo menos 1.5 s enquanto estiver Furtiva concede Invisibilidade.  Depois de passar 3 s Furtiva, Emboscar, Golpe Baixo e Garrote têm alcance 100% maior e fazem Valira se teleportar para o alvo ao serem usadas.',
      displayText: 'Furtividade e novas habilidades ganhas',
      cooldown: 'Recarga: 8 segundos',
      slug: 'vanish',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/valeera/traits/icons/vanish_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/valeera/',
    abilities: [
      {
        name: 'Golpe Sinistro',
        description:
          'Arremete, causando 110 de dano a todos os inimigos em linha reta. Se Golpe Sinistro atingir um Herói, a arremetida será interrompida e a recarga será reduzida para 1 s.  Concede 1 Ponto de Combo.  Com Furtividade: Emboscar Causa muito dano a um alvo e reduz a Armadura dele.',
        displayText: 'Arremete, causando dano em linha reta',
        vital: 'Energia: 30',
        cooldown: 'Recarga: 5 segundos',
        slug: 'sinister-strike',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/valeera/abilities/icons/sinister-strike_square.png',
      },
      {
        name: 'Rajada de Lâminas',
        description:
          'Causa 130 de dano ao redor de Valira.   Concede 1 Ponto de Combo para cada Herói inimigo atingido.  Com Furtividade: Golpe Baixo Atordoa, cega e causa dano a um inimigo.',
        displayText: 'Causa dano a inimigos próximos',
        vital: 'Energia: 40',
        cooldown: 'Recarga: 4 segundos',
        slug: 'blade-flurry',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/valeera/abilities/icons/blade-flurry_square.png',
      },
      {
        name: 'Eviscerar',
        description:
          'Eviscera um inimigo, causando dano por Ponto de Combo.  1 Ponto: 85 2 Pontos: 170 3 Pontos: 255  Com Furtividade: Garrote Silencia e causa dano periódico ao alvo.',
        displayText: 'Golpe Final que causa muito dano',
        vital: 'Energia: 25',
        cooldown: 'Recarga: 1 segundo Consome todos os Pontos de Combo',
        slug: 'eviscerate',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/valeera/abilities/icons/eviscerate_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: 'Bomba de Fumaça',
        description:
          'Cria uma nuvem de fumaça. Enquanto estiver na fumaça, Valira fica Irrevelável, pode atravessar outras unidades e ganha 30 de Armadura, reduzindo o dano recebido em 30%. Valira pode continuar a atacar e usar habilidades sem ser revelada. Dura 5 s.  Usar esta Habilidade não cancela Furtividade.',
        displayText: 'Cria uma nuvem de fumaça',
        cooldown: 'Recarga: 60 segundos',
        slug: 'smoke-bomb',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/valeera/abilities/icons/smoke-bomb_square.png',
      },
      {
        name: 'Manto das Sombras',
        description:
          'Valira se envolve em um Manto das Sombras, livrando-se imediatamente de todos os efeitos de dano periódico. Por 1.5 s, ela fica Irrefreável e ganha 75 de Armadura Mágica, que reduz o dano recebido de habilidades em 75%.  Usar essa habilidade não cancela Furtividade.',
        displayText: 'Fica Irrefreável, ganha Armadura Mágica',
        cooldown: 'Recarga: 15 segundos',
        slug: 'cloak-of-shadows',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/valeera/abilities/icons/cloak-of-shadows_square.png',
      },
    ],
    otherAbilities: [
      {
        name: 'Emboscar',
        description:
          'Embosca um inimigo, causando 130 de dano e reduzindo em 10 a Armadura do alvo por 5 s.  Concede 1 Ponto de Combo.  Sem Furtividade: Golpe Sinistro Arremete à frente, causando dano aos inimigos.',
        displayText: 'Causa dano a um inimigo e reduz sua Armadura',
        vital: 'Energia: 10',
        cooldown: 'Recarga: 1 segundo',
        slug: 'ambush',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/valeera/abilities/icons/ambush_square.png',
      },
      {
        name: 'Golpe Baixo',
        description:
          'Causa 30 de dano um inimigo, atordoando-o por 0.75 s e cegando por 2 s após a expiração do Golpe Baixo.  Concede 1 Ponto de Combo.  Sem Furtividade: Rajada de Lâminas Causa dano em área ao redor de Valira.',
        displayText: 'Atordoa, cega e causa dano a um inimigo',
        vital: 'Energia: 30',
        cooldown: 'Recarga: 1 segundo',
        slug: 'cheap-shot',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/valeera/abilities/icons/cheap-shot_square.png',
      },
      {
        name: 'Garrote',
        description:
          'Causa 20 de dano a um inimigo, mais 140 de dano ao longo de 7 s, silenciando-o por 2.5 s.  Concede 1 Ponto de Combo.  Sem Furtividade: Eviscerar Golpe Final que causa muito dano.',
        displayText: 'Causa muito dano periódico a um inimigo',
        vital: 'Energia: 30',
        cooldown: 'Recarga: 1 segundo',
        slug: 'garrote',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/valeera/abilities/icons/garrote_square.png',
      },
    ],
    expandedRole: {
      name: 'Assassino Corpo a Corpo',
      description:
        'Assassino Corpo a Corpo Matadores de heróis e semeadores de sofrimento. Especialistas em causar dano elevado a alvos únicos e emboscadas.',
      slug: 'melee-assassin',
    },
    stats: {
      damage: 5,
      utility: 8,
      survivability: 6,
      complexity: 8,
    },
    skin: {
      id: 'ValeeraBaseCommon',
      name: {
        en_US: 'Shadow of the Uncrowned',
        es_MX: 'Sombra de los Descoronados',
        pt_BR: 'Sombra dos Destronados',
        de_DE: 'Schatten der Ungekrönten',
        en_GB: 'Shadow of the Uncrowned',
        es_ES: 'Sombra de los Descoronados',
        fr_FR: 'Ombre des Sans-couronne',
        it_IT: 'Ombra dei Senza Corona',
        pl_PL: 'Cień Nieukoronowanych',
        ru_RU: 'Тень Некоронованных',
        ko_KR: '무관의 그림자',
        zh_TW: '無冕者之影',
        zh_CN: '无冕者之影',
      },
      description: {
        en_US: 'Shadow of the Uncrowned',
        es_MX: 'Sombra de los Descoronados',
        pt_BR: 'Sombra dos Destronados',
        de_DE: 'Schatten der Ungekrönten',
        en_GB: 'Shadow of the Uncrowned',
        es_ES: 'Sombra de los Descoronados',
        fr_FR: 'Ombre des Sans-couronne',
        it_IT: 'Ombra dei Senza Corona',
        pl_PL: 'Cień Nieukoronowanych',
        ru_RU: 'Тень Некоронованных',
        ko_KR: '무관의 그림자',
        zh_TW: '無冕者之影',
        zh_CN: '无冕者之影',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/ValeeraBaseCommon?namespace=hms_80333',
      },
      slug: 'shadow-of-the-uncrowned',
    },
  },
  {
    name: "Zul'jin",
    title: 'Senhor da Guerra dos Amani',
    role: {
      name: 'Assassino',
      description: 'Assassino Matadores de heróis e semeadores de sofrimento.',
      slug: 'assassin',
    },
    type: {
      name: 'Longo Alcance',
      slug: 'ranged',
    },
    description:
      "Antes dos elfos e da Aliança deles, as florestas de Lordaeron pertenciam aos trolls do Império Amani. Zul'jin, o senhor da guerra troll, unificou as tribos, formando um exército que está a postos para reconquistar aquilo que lhes pertence e matar os elfos ladros.",
    shortDescription:
      'Um Assassino de Dano Físico, que fica mais forte conforme perde pontos de Vida.',
    difficulty: 'Médio',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/zuljin/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/zuljin-6c7eec9c67.jpg',
    franchise: 'Warcraft',
    release: '2017-01-04T00:00:00.000Z',
    isNew: false,
    slug: 'zuljin',
    trait: {
      name: 'Berserker',
      description:
        "Ative para aumentar em 25% o dano de Ataque Básico, mas consumir 2% do máximo de Vida por ataque.  Passivo: Zul'jin ataca 1% mais rápido para cada 1% dos pontos de Vida máximos perdidos.  Vai Machado Aí?  Missão: A cada 5 Ataques Básicos contra Heróis, aumenta permanentemente o dano de Ataque Básico em 1.  Recompensa: Após atacar Heróis 75 vezes, o alcance de Ataque Básico aumenta em 1.1.  Recompensa: Após atacar Heróis 150 vezes, Cutilada Dupla dará duas voltas.",
      displayText: 'Velocidade de Ataque aumenta quanto menor a Vida',
      slug: 'berserker',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/zuljin/traits/icons/berserker_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/zuljin/',
    abilities: [
      {
        name: 'Arremesso Atroz',
        description:
          "Zul'jin arremessa um machado à frente,  causando 125 de dano aos 2 primeiros inimigos atingidos e os marcando por 6 segundos. Inimigos marcados levam 50% de dano a mais dos próximos 3 Ataques Básicos de Zul'jin.",
        displayText:
          "Arremessa um Machado, causando dano, marcando o alvo e aumentando o dano de Ataque Básico de Zul'jin.",
        vital: 'Mana: 40',
        cooldown: 'Recarga: 8 segundos',
        slug: 'grievous-throw',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/zuljin/abilities/icons/grievous-throw_square.png',
      },
      {
        name: 'Cutilada Dupla',
        description:
          'Arremessa 2 Machados em um grande arco, causando 112 de dano e desacelerando os inimigos atingidos em 15% por Machado por 2 s.',
        displayText: 'Arremessa Machados rodopiantes que desaceleram inimigos',
        vital: 'Mana: 60',
        cooldown: 'Recarga: 10 segundos',
        slug: 'twin-cleave',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/zuljin/abilities/icons/twin-cleave_square.png',
      },
      {
        name: 'Regeneração',
        description:
          "Zul'jin canaliza para regenerar 30% do máximo de Vida ao longo de 4 s. Mover-se ou receber dano interrompe esse efeito.",
        displayText: "Zul'jin canaliza para regenerar Vida ao longo do tempo",
        vital: 'Mana: 75',
        cooldown: 'Recarga: 15 segundos',
        slug: 'regeneration',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/zuljin/abilities/icons/regeneration_square.png',
      },
      {
        name: 'Raiva Amani',
        description:
          'Ative para perder instantaneamente 50% da Vida atual e recuperá-la ao longo de 10 s.',
        displayText: 'Ative para perder Vida e recuperá-la ao longo do tempo',
        cooldown: 'Recarga: 30 s',
        slug: 'amani-rage',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/zuljin/abilities/icons/amani-rage_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: "Taz'dingo!",
        description:
          "Pelos próximos 4 s, Zul'jin ficará Imbatível e não poderá ficar com menos de 1 de Vida. Taz'dingo!",
        displayText: 'Torna-se impossível de matar',
        vital: 'Mana: 75',
        cooldown: 'Recarga: 90 segundos',
        slug: 'tazdingo',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/zuljin/abilities/icons/tazdingo_square.png',
      },
      {
        name: 'Guilhotina',
        description:
          "Zul'jin arremessa um machado gigante que cai na área selecionada, causando 330 de dano mais dano extra de acordo com a quantidade de Vida que ele perdeu.",
        displayText: 'Causa muito dano em área',
        vital: 'Mana: 70',
        cooldown: 'Recarga: 40 segundos',
        slug: 'guillotine',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/zuljin/abilities/icons/guillotine_square.png',
      },
    ],
    expandedRole: {
      name: 'Assassino de Longo Alcance',
      description:
        'Assassino de Longo Alcance Causadores de dano que fazem chover balas, flechas ou feitiços mortíferos sobre os inimigos. Geralmente frágeis, eles se sentem mais seguros mantendo distância dos inimigos.',
      slug: 'ranged-assassin',
    },
    stats: {
      damage: 8,
      utility: 4,
      survivability: 6,
      complexity: 4,
    },
    skin: {
      id: 'ZuljinBaseCommon',
      name: {
        en_US: 'Warlord of the Amani',
        es_MX: 'Señor de la guerra de los amani',
        pt_BR: 'Senhor da Guerra dos Amani',
        de_DE: 'Kriegsherr der Amani',
        en_GB: 'Warlord of the Amani',
        es_ES: 'Señor de la guerra de los Amani',
        fr_FR: 'Seigneur de guerre des Amani',
        it_IT: 'Signore della Guerra degli Amani',
        pl_PL: 'Wódz Amanów',
        ru_RU: 'Вождь племени Амани',
        ko_KR: '아마니의 전쟁군주',
        zh_TW: '阿曼尼督軍',
        zh_CN: '阿曼尼督军',
      },
      description: {
        en_US: 'Warlord of the Amani',
        es_MX: 'Señor de la guerra de los amani',
        pt_BR: 'Senhor da Guerra dos Amani',
        de_DE: 'Kriegsherr der Amani',
        en_GB: 'Warlord of the Amani',
        es_ES: 'Señor de la guerra de los Amani',
        fr_FR: 'Seigneur de guerre des Amani',
        it_IT: 'Signore della Guerra degli Amani',
        pl_PL: 'Wódz Amanów',
        ru_RU: 'Вождь племени Амани',
        ko_KR: '아마니의 전쟁군주',
        zh_TW: '阿曼尼督軍',
        zh_CN: '阿曼尼督军',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/ZuljinBaseCommon?namespace=hms_80333',
      },
      slug: 'warlord-of-the-amani',
    },
  },
  {
    name: 'Ragnaros',
    title: 'O Senhor do Fogo',
    role: {
      name: 'Assassino',
      description: 'Assassino Matadores de heróis e semeadores de sofrimento.',
      slug: 'assassin',
    },
    type: {
      name: 'Corpo a Corpo',
      slug: 'melee',
    },
    description:
      'Como senhor dos elementais de fogo de Azeroth, tudo que Ragnaros mais quer é reduzir o mundo a cinzas. Banido para as Terras do Fogo eras atrás, o Senhor do Fogo agora volta sua ira para o Nexus, na intenção de incinerar tudo e todos.',
    shortDescription:
      'Um Guerreiro capaz de frustrar o avanço inimigo contra os Fortes e as Bastilhas.',
    difficulty: 'Médio',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/ragnaros/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/ragnaros-6c0e9c188d.jpg',
    franchise: 'Warcraft',
    release: '2016-12-14T00:00:00.000Z',
    isNew: false,
    slug: 'ragnaros',
    trait: {
      name: 'Núcleo Derretido',
      description:
        'Canalize uma Fortaleza ou Forte aliado ou destruído para substituir a estrutura pela forma suprema de Ragnaros, ganhando novas Habilidades temporariamente e ficando com 3996 de Vida que se esvai ao longo de 18 segundos.  Ragnaros retorna à forma normal ao perder toda a sua Vida em Núcleo Derretido.',
      displayText:
        'Tome um forte destruído ou Aliado para liberar o poder total de Ragnaros',
      cooldown: 'Recarga: 120 segundos',
      slug: 'molten-core',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/ragnaros/traits/icons/molten-core_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/ragnaros/',
    abilities: [
      {
        name: 'Potencializar Sulfuras',
        description:
          'O próximo Ataque Básico de Ragnaros é instantâneo e causa 191 de dano de Habilidade em área, além de curar em um valor equivalente a 20% do dano causado. A cura dobra contra Heróis.  Núcleo Derretido: Meneio Derretido Atordoa e causa dano a inimigos próximos.',
        displayText: 'Causa dano em área e cura Ragnaros',
        vital: 'Mana: 25',
        cooldown: 'Recarga: 4 segundos',
        slug: 'empower-sulfuras',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/ragnaros/abilities/icons/empower-sulfuras_square.png',
      },
      {
        name: 'Meteoro Vivo',
        description:
          'Mira Vetorial Evoca um meteoro no local selecionado, causando 68 de dano. Em seguida, ele rola na direção escolhida, causando 272 de dano por segundo durante 1.75 s.  Núcleo Derretido: Chuva de Meteoros Faz chover meteoros em linha reta.',
        displayText: 'Evoca um meteoro que causa dano a inimigos em linha reta',
        vital: 'Mana: 60',
        cooldown: 'Recarga: 12 segundos',
        slug: 'living-meteor',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/ragnaros/abilities/icons/living-meteor_square.png',
      },
      {
        name: 'Onda de Impacto',
        description:
          'Incendeia Ragnaros ou um aliado, concedendo 25% de Velocidade de Movimento por 1.5 segundo antes de explodir e causar 104 de dano aos inimigos próximos.  Núcleo Derretido: Runa Explosiva Causa uma explosão após um tempo que afeta uma área extensa.',
        displayText: 'Causa uma explosão após um tempo em torno de um aliado',
        vital: 'Mana: 50',
        cooldown: 'Recarga: 9 segundos',
        slug: 'blast-wave',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/ragnaros/abilities/icons/blast-wave_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: 'Martelada de Sulfuras',
        description:
          'Lança Sulfuras na área-alvo. Ele pousa em 0.75 segundo, causando 250 de dano. Inimigos no centro recebem 594 de dano ao invés disso e ficam Atordoados por 0.5 segundo.',
        displayText: 'Causa dano e Atordoa inimigos em uma área',
        vital: 'Mana: 70',
        cooldown: 'Recarga: 60 segundos',
        slug: 'sulfuras-smash',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/ragnaros/abilities/icons/sulfuras-smash_square.png',
      },
      {
        name: 'Onda de Lava',
        description:
          'Uma onda de lava irrompe do Núcleo de Ragnaros e percorre a trilha selecionada, causando 240 de dano por segundo aos inimigos no caminho, com exceção das Estruturas, e matando as Tropas inimigas instantaneamente. Dano aumentado em 100% contra Heróis.',
        displayText: 'Lança uma onda de lava na trilha',
        vital: 'Mana: 80',
        cooldown: 'Recarga: 120 segundos',
        slug: 'lava-wave',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/ragnaros/abilities/icons/lava-wave_square.png',
      },
    ],
    expandedRole: {
      name: 'Guerreiro',
      description:
        'Guerreiro Guerreiros poderosos e resistentes capazes de causar estragos. Com potencial de tanqueamento limitado, eles contam com mobilidade adicional, controle coletivo ou capacidade de sobrevivência.',
      slug: 'bruiser',
    },
    stats: {
      damage: 8,
      utility: 7,
      survivability: 8,
      complexity: 7,
    },
    skin: {
      id: 'RagnarosBaseCommon',
      name: {
        en_US: 'The Firelord',
        es_MX: 'El Señor del Fuego',
        pt_BR: 'O Senhor do Fogo',
        de_DE: 'Der Feuerlord',
        en_GB: 'The Firelord',
        es_ES: 'El Señor del Fuego',
        fr_FR: 'Le seigneur du Feu',
        it_IT: 'Signore del Fuoco',
        pl_PL: 'Władca Ognia',
        ru_RU: 'Повелитель Огня',
        ko_KR: '불의 군주',
        zh_TW: '炎魔',
        zh_CN: '炎魔之王',
      },
      description: {
        en_US: 'The Firelord',
        es_MX: 'El Señor del Fuego',
        pt_BR: 'O Senhor do Fogo',
        de_DE: 'Der Feuerlord',
        en_GB: 'The Firelord',
        es_ES: 'El Señor del Fuego',
        fr_FR: 'Le seigneur du Feu',
        it_IT: 'Signore del Fuoco',
        pl_PL: 'Władca Ognia',
        ru_RU: 'Повелитель Огня',
        ko_KR: '불의 군주',
        zh_TW: '炎魔',
        zh_CN: '炎魔之王',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/RagnarosBaseCommon?namespace=hms_80333',
      },
      slug: 'the-firelord',
    },
  },
  {
    name: 'Varian',
    title: 'Alto-rei da Aliança',
    role: {
      name: 'Multiclasse',
      description:
        'Multiclasse Heróis que são definidos por seus talentos, não suas funções.',
      slug: 'multiclass',
    },
    type: {
      name: 'Corpo a Corpo',
      slug: 'melee',
    },
    description:
      "Ninguém imaginava que o gladiador conhecido como Lo'Gosh fosse na verdade o governante desaparecido de Ventobravo: Varian Wrynn. Hoje, o Alto-rei da Aliança define o destino de Azeroth a cada uma de suas ações.",
    shortDescription:
      'Um Guerreiro flexível, que também consegue causar dano ou proteger a equipe.',
    difficulty: 'Médio',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/varian/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/varian-cd9ae04382.jpg',
    franchise: 'Warcraft',
    release: '2016-11-15T00:00:00.000Z',
    isNew: false,
    slug: 'varian',
    trait: {
      name: 'Golpe Heroico',
      description:
        'A cada 18 s, o Ataque Básico de Varian causa mais 125 de Dano Mágico. Ataques Básicos reduzem a recarga dessa habilidade em 2 s.',
      displayText: 'O próximo Ataque Básico causa dano extra',
      cooldown: 'Recarga: 18 segundos',
      slug: 'heroic-strike',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/varian/traits/icons/heroic-strike_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/varian/',
    abilities: [
      {
        name: 'Presa do Leão',
        description:
          'Cria uma onda de choque que se desloca em linha reta, causando 150 de dano e desacelerando os inimigos em 35% por 1.5 s. Varian recupera 35 de Vida para cada inimigo atingido, ou 140 de Vida no caso de Heróis.',
        displayText:
          'Causa dano e desacelera inimigos em linha reta; cura Varian',
        vital: 'Mana: 50',
        cooldown: 'Recarga: 8 segundos',
        slug: 'lions-fang',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/varian/abilities/icons/lions-fang_square.png',
      },
      {
        name: 'Aparar',
        description:
          'Apara todos os Ataques Básicos recebidos por 1.25 s, reduzindo o dano causado por eles em 100%.  Acumula até 2 cargas.',
        displayText:
          'Bloqueia Ataques Básicos recebidos durante um breve intervalo',
        vital: 'Mana: 30',
        cooldown: 'Recarga da carga: 10 segundos',
        slug: 'parry',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/varian/abilities/icons/parry_square.png',
      },
      {
        name: 'Investida',
        description:
          'Investe contra o inimigo selecionado, causando 50 de dano e desacelerando-o em 75% por 1 s.',
        displayText: 'Investe contra um inimigo e causa dano',
        vital: 'Mana: 45',
        cooldown: 'Recarga: 12 segundos',
        slug: 'charge',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/varian/abilities/icons/charge_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: 'Provocar',
        description:
          'Silencia um Herói inimigo, obrigando-o a atacar Varian por 1.25 s.  Passivo: Máximo de Vida e Regeneração de Vida aumentados em 40%.',
        displayText: 'Ganha Vida Força um Herói a atacar Varian',
        vital: 'Mana: 20',
        cooldown: 'Recarga: 16 segundos',
        slug: 'taunt',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/varian/abilities/icons/taunt_square.png',
      },
      {
        name: 'Pancada Colossal',
        description:
          'Arrebenta o inimigo selecionado, causando 160 de dano e reduzindo a Armadura dele em 20 por 3 s, fazendo-o receber 20% a mais de dano.  Passivo: Dano de Ataque Básico aumentado em 100%. Passivo: Máximo de Vida e Regeneração de Vida reduzidos em 10%.',
        displayText:
          'Ganha dano, perde Vida Arrebenta inimigos e reduz a Armadura deles',
        vital: 'Mana: 40',
        cooldown: 'Recarga: 20 s',
        slug: 'colossus-smash',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/varian/abilities/icons/colossus-smash_square.png',
      },
      {
        name: 'Lâminas Duplas da Fúria',
        description:
          'Ataques Básicos reduzem a recarga de Golpe Heroico em 9 segundos e aumentam a Velocidade de Movimento de Varian em 30% por 2 segundos.  Passiva: Velocidade de Ataque aumentada em 100%. Passiva: Dano de Ataque Básico reduzido em 25%.',
        displayText:
          'Ganha Velocidade de Ataque, perde Dano Ataques Básicos reduzem a recarga de Golpe Heroico',
        slug: 'twin-blades-of-fury',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/varian/abilities/icons/twin-blades-of-fury_square.png',
      },
    ],
    expandedRole: {
      name: 'Guerreiro',
      description:
        'Guerreiro Guerreiros poderosos e resistentes capazes de causar estragos. Com potencial de tanqueamento limitado, eles contam com mobilidade adicional, controle coletivo ou capacidade de sobrevivência.',
      slug: 'bruiser',
    },
    stats: {
      damage: 6,
      utility: 7,
      survivability: 6,
      complexity: 6,
    },
    skin: {
      id: 'VarianBaseCommon',
      name: {
        en_US: 'High King of the Alliance',
        es_MX: 'Alto Rey de la Alianza',
        pt_BR: 'Alto-rei da Aliança',
        de_DE: 'Hochkönig der Allianz',
        en_GB: 'High King of the Alliance',
        es_ES: 'Rey de la Alianza',
        fr_FR: 'Haut roi de l’Alliance',
        it_IT: "Grande Re dell'Alleanza",
        pl_PL: 'Najwyższy Król Przymierza',
        ru_RU: 'Король Альянса',
        ko_KR: '얼라이언스의 국왕',
        zh_TW: '聯盟的大君主',
        zh_CN: '联盟的至高王',
      },
      description: {
        en_US: 'High King of the Alliance',
        es_MX: 'Alto Rey de la Alianza',
        pt_BR: 'Alto-rei da Aliança',
        de_DE: 'Hochkönig der Allianz',
        en_GB: 'High King of the Alliance',
        es_ES: 'Rey de la Alianza',
        fr_FR: 'Haut roi de l’Alliance',
        it_IT: "Grande Re dell'Alleanza",
        pl_PL: 'Najwyższy Król Przymierza',
        ru_RU: 'Король Альянса',
        ko_KR: '얼라이언스의 국왕',
        zh_TW: '聯盟的大君主',
        zh_CN: '联盟的至高王',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/VarianBaseCommon?namespace=hms_80333',
      },
      slug: 'high-king-of-the-alliance',
    },
  },
  {
    name: 'Samuro',
    title: 'O Mestre de Espadas',
    role: {
      name: 'Assassino',
      description: 'Assassino Matadores de heróis e semeadores de sofrimento.',
      slug: 'assassin',
    },
    type: {
      name: 'Corpo a Corpo',
      slug: 'melee',
    },
    description:
      'Samuro, o último mestre de espadas a portar o estandarte da Lâmina Ardente, está fazendo uma peregrinação. Ele busca vingança e redenção em nome de seu clã derrotado. Será uma longa jornada, mas ele jurou restaurar a honra de todo o clã.',
    shortDescription:
      'Um Assassino furtivo, difícil de matar e ótimo em capturar Acampamentos de Mercenários.',
    difficulty: 'Difícil',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/samuro/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/samuro-2c7535badb.jpg',
    franchise: 'Warcraft',
    release: '2016-10-18T00:00:00.000Z',
    isNew: false,
    slug: 'samuro',
    trait: {
      name: 'Transmissão Imagética',
      description:
        'Ative para trocar de lugar com uma Imagem Espelhada, removendo a maioria dos efeitos negativos dela e de Samuro.  Ataques Impetuosos  Ataques Básicos contra Heróis inimigos aumentam a Velocidade de Movimento de Samuro em 25% por 2 s.',
      displayText: 'Aumenta a Velocidade de Movimento ao atacar Heróis',
      cooldown: 'Recarga: 14 s',
      slug: 'image-transmission',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/samuro/traits/icons/image-transmission_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/samuro/',
    abilities: [
      {
        name: 'Imagem Espelhada',
        description:
          'Teleporta-se a uma curta distância na direção do cursor do mouse, criando 2 Imagens Espelhadas por 8 s com 100% da Vida atual de Samuro que desferem Ataques Básicos contra inimigos, causando 11 de dano. A duração das Imagens aumenta em 1 s quando elas ou Samuro desfere um Ataque Básico contra um Herói inimigo. Sempre que uma Imagem recebe dano, ela causa a mesma quantidade a si mesma, ou seja, recebe o dobro de dano.  Máximo de 2 Imagens Espelhadas ativas ao mesmo tempo. Usar Imagem Espelhada remove a maioria das penalidades presentes em Samuro.',
        displayText: 'Cria Imagens Espelhadas para confundir e atacar inimigos',
        cooldown: 'Recarga: 14 segundos',
        slug: 'mirror-image',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/samuro/abilities/icons/mirror-image_square.png',
      },
      {
        name: 'Acerto Crítico',
        description:
          'O próximo Ataque Básico do Samuro desferido nos próximos 8 s será um Acerto Crítico, causando 50% a mais de dano. Isso também vale para as Imagens e não cancela Andavento.  Passivo: Você e suas Imagens causam Acerto Crítico a cada 4 Ataques Básicos.',
        displayText: 'Ataque Crítico que causa mais dano.',
        cooldown: 'Recarga: 10 segundos',
        slug: 'critical-strike',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/samuro/abilities/icons/critical-strike_square.png',
      },
      {
        name: 'Andavento',
        description:
          'Concede Furtividade a Samuro por até 10 s ou até ele atacar, usar uma habilidade ou receber dano.  Quando Samuro está Furtivo, ele recupera 1% do máximo de Vida a cada segundo, sua Velocidade de Movimento aumenta em 25% e ele pode atravessar outras unidades. Permanecer imóvel por pelo menos 1.5 s durante a Furtividade concede Invisibilidade.  Samuro fica Irrevelável durante o 1º segundo de Andavento.',
        displayText: 'Entra em modo furtivo e ganha velocidade de movimento',
        cooldown: 'Recarga: 15 segundos',
        slug: 'wind-walk',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/samuro/abilities/icons/wind-walk_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: 'Tornado de Aço',
        description:
          'Samuro provoca um Tornado de Aço destrutivo ao seu redor por 3 s, recebendo 25 de Armadura e causando 180 de dano por segundo aos inimigos próximos.',
        displayText: 'Causa um Tornado de Aço destrutivo',
        cooldown: 'Recarga: 25 segundos',
        slug: 'bladestorm',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/samuro/abilities/icons/bladestorm_square.png',
      },
      {
        name: 'Mestre da Ilusão',
        description:
          'As Imagens Espelhadas podem ser controladas individualmente ou em grupo. Aumenta em 100% o dano que elas causam.   Passivo: A recarga de Transmissão Imagética é reduzida para 8 s.',
        displayText: 'Imagens Espelhadas podem ser controladas',
        cooldown: 'Recarga: 8 s',
        slug: 'illusion-master',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/samuro/abilities/icons/illusion-master_square.png',
      },
    ],
    otherAbilities: [
      {
        name: 'Acerto Crítico',
        description:
          'O próximo Ataque Básico do Samuro desferido nos próximos 8 s será um Acerto Crítico, causando 50% a mais de dano. Isso também vale para as Imagens e não cancela Andavento.  Passivo: Você e suas Imagens causam Acerto Crítico a cada 4 Ataques Básicos.',
        displayText: 'Ataque Crítico que causa mais dano.',
        cooldown: 'Recarga: 10 segundos',
        slug: 'critical-strike',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/samuro/abilities/icons/critical-strike_square.png',
      },
      {
        name: 'Mestre da Ilusão',
        description: 'Troca de lugar com Samuro.',
        displayText: 'Troca de lugar com Samuro',
        cooldown: 'Recarga: 8 segundos',
        slug: 'illusion-master',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/samuro/abilities/icons/illusion-master_square.png',
      },
    ],
    expandedRole: {
      name: 'Assassino Corpo a Corpo',
      description:
        'Assassino Corpo a Corpo Matadores de heróis e semeadores de sofrimento. Especialistas em causar dano elevado a alvos únicos e emboscadas.',
      slug: 'melee-assassin',
    },
    stats: {
      damage: 6,
      utility: 3,
      survivability: 7,
      complexity: 7,
    },
    skin: {
      id: 'SamuroBaseCommon',
      name: {
        en_US: 'The Blademaster',
        es_MX: 'El maestro del acero',
        pt_BR: 'O Mestre de Espadas',
        de_DE: 'Der Klingenmeister',
        en_GB: 'The Blademaster',
        es_ES: 'Maestro de las espadas',
        fr_FR: 'Le maître-lame',
        it_IT: 'Maestro di Spade',
        pl_PL: 'Mistrz Ostrzy',
        ru_RU: 'Мастер клинка',
        ko_KR: '검귀',
        zh_TW: '大劍師',
        zh_CN: '剑圣',
      },
      description: {
        en_US: 'The Blademaster',
        es_MX: 'El maestro del acero',
        pt_BR: 'O Mestre de Espadas',
        de_DE: 'Der Klingenmeister',
        en_GB: 'The Blademaster',
        es_ES: 'Maestro de las espadas',
        fr_FR: 'Le maître-lame',
        it_IT: 'Maestro di Spade',
        pl_PL: 'Mistrz Ostrzy',
        ru_RU: 'Мастер клинка',
        ko_KR: '검귀',
        zh_TW: '大劍師',
        zh_CN: '剑圣',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/SamuroBaseCommon?namespace=hms_80333',
      },
      slug: 'the-blademaster',
    },
  },
  {
    name: 'Zarya',
    title: 'Defensora da Rússia',
    role: {
      name: 'Guerreiro',
      description: 'Guerreiro Defensores e combatentes da linha de frente.',
      slug: 'warrior',
    },
    type: {
      name: 'Longo Alcance',
      slug: 'ranged',
    },
    description:
      'Aleksandra Zaryanova é uma das mulheres mais fortes do mundo e já foi uma atleta promissora, mas tudo mudou quando o omnium siberiano despertou. Como soldado da Força de Defesa Russa, ela agora usa seu poder para proteger aqueles que ama.',
    shortDescription:
      'Uma Suporte que auxilia os aliados mais letais e é ótima em prevenir surto de dano.',
    difficulty: 'Fácil',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/zarya/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/zarya-e8b915f0ff.jpg',
    franchise: 'Overwatch',
    release: '2016-09-27T00:00:00.000Z',
    isNew: false,
    slug: 'zarya',
    trait: {
      name: 'Energia',
      description:
        'Sempre que Barreira Pessoal ou Proteger Aliado da Zarya absorver 9 de dano, a Energia dela aumentará em 1. Cada ponto de Energia aumenta o dano de Zarya em 2%. Após 0.5 segundo, a Energia decai em 3 por segundo.',
      displayText:
        'O dano absorvido pelos Escudos de Zarya aumenta o dano que ela causa.',
      slug: 'energy',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/zarya/traits/icons/energy_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/zarya/',
    abilities: [
      {
        name: 'Granada de Partículas',
        description:
          'Dispara uma granada de partículas que causa 75 de dano a inimigos na área. Causa 50% de dano a Estruturas.  Acumula até 4 cargas.',
        displayText: 'Causa dano a inimigos em uma pequena área',
        cooldown: 'Recarga da carga: 8 segundos',
        slug: 'particle-grenade',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/zarya/abilities/icons/particle-grenade_square.png',
      },
      {
        name: 'Barreira Pessoal',
        description: 'Ganha um Escudo que absorve 560 de dano por 3 s.',
        displayText: 'Ganha um Escudo que absorve dano',
        cooldown: 'Recarga: 10 segundos',
        slug: 'personal-barrier',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/zarya/abilities/icons/personal-barrier_square.png',
      },
      {
        name: 'Proteger Aliado',
        description:
          'Concede a um Aliado um Escudo que absorve 420 de dano por 3 s.',
        displayText: 'Concede a um aliado um Escudo que absorve dano',
        cooldown: 'Recarga: 12 segundos',
        slug: 'shield-ally',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/zarya/abilities/icons/shield-ally_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: 'Surto de Grávitons',
        description:
          'Lança uma bomba gravitacional que detona após 1 segundo e atrai os Heróis inimigos na direção do centro por 2,5 segundos.',
        displayText: 'Lança uma bomba gravitacional que atrai os inimigos',
        cooldown: 'Recarga: 60 segundos',
        slug: 'graviton-surge',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/zarya/abilities/icons/graviton-surge_square.png',
      },
      {
        name: 'Zona de Expulsão',
        description:
          'Lança uma bomba gravitacional que causa 124 de dano e cria uma zona de expulsão por 3.5 s. Inimigos que entrarem na área afetada serão repelidos e terão a Velocidade de Movimento reduzida em 50% por 1 s.',
        displayText: 'Lança uma bomba que empurra os inimigos continuamente',
        cooldown: 'Recarga: 45 segundos',
        slug: 'expulsion-zone',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/zarya/abilities/icons/expulsion-zone_square.png',
      },
    ],
    expandedRole: {
      name: 'Suporte',
      description:
        'Suporte Deixa os aliados mais fortes e mortíferos. Concedem bônus, aumentos, escudos e habilidades utilitárias para a equipe.',
      slug: 'support',
    },
    stats: {
      damage: 5,
      utility: 7,
      survivability: 8,
      complexity: 7,
    },
    skin: {
      id: 'ZaryaBaseCommon',
      name: {
        en_US: 'Defender of Russia',
        es_MX: 'Defensora de Rusia',
        pt_BR: 'Defensora da Rússia',
        de_DE: 'Retterin Russlands',
        en_GB: 'Defender of Russia',
        es_ES: 'Defensora de Rusia',
        fr_FR: 'Le rempart russe',
        it_IT: 'Difensore della Russia',
        pl_PL: 'Obrończyni Rosji',
        ru_RU: 'Защитница России',
        ko_KR: '러시아의 수호자',
        zh_TW: '俄羅斯的守護者',
        zh_CN: '俄罗斯卫士',
      },
      description: {
        en_US: 'Defender of Russia',
        es_MX: 'Defensora de Rusia',
        pt_BR: 'Defensora da Rússia',
        de_DE: 'Retterin Russlands',
        en_GB: 'Defender of Russia',
        es_ES: 'Defensora de Rusia',
        fr_FR: 'Le rempart russe',
        it_IT: 'Difensore della Russia',
        pl_PL: 'Obrończyni Rosji',
        ru_RU: 'Защитница России',
        ko_KR: '러시아의 수호자',
        zh_TW: '俄羅斯的守護者',
        zh_CN: '俄罗斯卫士',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/ZaryaBaseCommon?namespace=hms_80333',
      },
      slug: 'defender-of-russia',
    },
  },
  {
    name: 'Alarak',
    title: "Senhor Supremo dos Tal'darim",
    role: {
      name: 'Assassino',
      description: 'Assassino Matadores de heróis e semeadores de sofrimento.',
      slug: 'assassin',
    },
    type: {
      name: 'Corpo a Corpo',
      slug: 'melee',
    },
    description:
      "Nem todos os heróis vêm do altruísmo... alguns, como Alarak, simplesmente desejam vingança. Como novo Senhor Supremo dos Tal'darim, Alarak conduz seu povo a um destino livre da influência corrupta do xel'naga caído, Amon.",
    shortDescription:
      'Um Assassino que tira os inimigos de posição e castiga quem comete erros.',
    difficulty: 'Difícil',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/alarak/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/alarak-6fb1c7b426.jpg',
    franchise: 'StarCraft',
    release: '2016-09-13T00:00:00.000Z',
    isNew: false,
    slug: 'alarak',
    trait: {
      name: 'Sadismo',
      description:
        'A cura em si e o dano de habilidade de Alarak aumentam em 100% contra Heróis inimigos.  Missão repetível: Abates aumentam o Sadismo em 3%, acumulando até 30%. O Sadismo recebido de Abates é perdido ao morrer.',
      displayText:
        'Alarak causa mais dano e recupera mais Vida contra Heróis inimigos',
      slug: 'sadism',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/alarak/traits/icons/sadism_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/alarak/',
    abilities: [
      {
        name: 'Golpe da Discórdia',
        description:
          'Depois de um atraso de 0.5 segundo, os inimigos na frente de Alarak recebem 165 de dano e são silenciados por 1.5 segundo. ',
        displayText: 'Causa dano e silencia os inimigos em uma área',
        vital: 'Mana: 55',
        cooldown: 'Recarga: 8 segundos',
        slug: 'discord-strike',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/alarak/abilities/icons/discord-strike_square.png',
      },
      {
        name: 'Telecinese',
        description:
          'Mira Vetorial Cria uma força que empurra Alarak e todos os inimigos atingidos do ponto-alvo até a direção desejada. Causa 48 de dano aos inimigos.',
        displayText: 'Empurra inimigos para um local',
        vital: 'Mana: 30',
        cooldown: 'Recarga: 12 segundos',
        slug: 'telekinesis',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/alarak/abilities/icons/telekinesis_square.png',
      },
      {
        name: 'Surto de Raios',
        description:
          'Causa 62 de dano a um inimigo e mais 100% de dano aos inimigos entre Alarak e o alvo. Restaura 70 de Vida para cada Herói atingido.',
        displayText: 'Causa dano a inimigos em linha reta',
        vital: 'Mana: 25',
        cooldown: 'Recarga: 6 segundos',
        slug: 'lightning-surge',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/alarak/abilities/icons/lightning-surge_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: 'Investida Mortal',
        description:
          'Depois de canalizar, Alarak investe à frente, causando 200 de dano a todos os inimigos no caminho. A distância aumenta com base na quantidade de tempo de canalização, até um máximo de 1.5 s.  Emitir uma ordem de movimentação enquanto estiver canalizando cancelará o lançamento sem custo. Receber dano interromperá a canalização.',
        displayText: 'Canalize para investir por uma longa distância',
        vital: 'Mana: 60',
        cooldown: 'Recarga: 45 segundos',
        slug: 'deadly-charge',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/alarak/abilities/icons/deadly-charge_square.png',
      },
      {
        name: 'Contra-ataque',
        description:
          'Alarak mira em uma área e canaliza por 1 s, ficando Protegido e Irrefreável. Depois disso, se um Herói inimigo o tiver atacado, ele lançará uma onda de choque que causa 275 de dano.',
        displayText: 'Previne dano e causa dano em uma grande área',
        vital: 'Mana: 50',
        cooldown: 'Recarga: 30 segundos',
        slug: 'counter-strike',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/alarak/abilities/icons/counter-strike_square.png',
      },
    ],
    expandedRole: {
      name: 'Assassino Corpo a Corpo',
      description:
        'Assassino Corpo a Corpo Matadores de heróis e semeadores de sofrimento. Especialistas em causar dano elevado a alvos únicos e emboscadas.',
      slug: 'melee-assassin',
    },
    stats: {
      damage: 7,
      utility: 7,
      survivability: 6,
      complexity: 8,
    },
    skin: {
      id: 'AlarakBaseCommon',
      name: {
        en_US: "Highlord of the Tal'darim",
        es_MX: "Señor supremo de los tal'darim",
        pt_BR: "Senhor Supremo dos Tal'darim",
        de_DE: "Hochlord der Tal'darim",
        en_GB: "Highlord of the Tal'darim",
        es_ES: "Gran Señor de los tal'darim",
        fr_FR: 'Haut seigneur des Tal’darim',
        it_IT: "Monarca dei Tal'darim",
        pl_PL: "Wielki Wódz Tal'darimów",
        ru_RU: 'Владыка талдаримов',
        ko_KR: '탈다림의 군주',
        zh_TW: '塔達力姆大領主',
        zh_CN: '塔达林的高阶领主',
      },
      description: {
        en_US: "Highlord of the Tal'darim",
        es_MX: "Señor supremo de los tal'darim",
        pt_BR: "Senhor Supremo dos Tal'darim",
        de_DE: "Hochlord der Tal'darim",
        en_GB: "Highlord of the Tal'darim",
        es_ES: "Gran Señor de los tal'darim",
        fr_FR: 'Haut seigneur des Tal’darim',
        it_IT: "Monarca dei Tal'darim",
        pl_PL: "Wielki Wódz Tal'darimów",
        ru_RU: 'Владыка талдаримов',
        ko_KR: '탈다림의 군주',
        zh_TW: '塔達力姆大領主',
        zh_CN: '塔达林的高阶领主',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/AlarakBaseCommon?namespace=hms_80333',
      },
      slug: 'highlord-of-the-taldarim',
    },
  },
  {
    name: 'Auriel',
    title: 'Arcanjo da Esperança',
    role: {
      name: 'Suporte',
      description:
        'Suporte O Suporte concede bônus e outros benefícios aos companheiros.',
      slug: 'support',
    },
    type: {
      name: 'Longo Alcance',
      slug: 'ranged',
    },
    description:
      'É por meio da arcanjo Auriel que o poder da esperança flui no tecido da criação. Sua luz eterna ilumina até as almas mais sombrias. Buscando harmonia em todas as coisas, ela é uma mediadora, conselheira e, quando se faz necessário, uma guerreira indômita.',
    shortDescription:
      'Uma Curandeira que combina com Heróis que causam muito dano.',
    difficulty: 'Médio',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/auriel/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/auriel-5faf424108.jpg',
    franchise: 'Diablo',
    release: '2016-08-09T00:00:00.000Z',
    isNew: false,
    slug: 'auriel',
    trait: {
      name: 'Conceder Esperança',
      description:
        'Passivo: 60% do dano que Auriel causa a Heróis e 20% do dano causado a unidades não Heroicas são armazenados como Energia.  Concede Esperança a um Herói aliado. Enquanto estiver perto de Auriel, 30% do dano que esse Herói causar a Heróis e 10% do dano que ele causar a unidades não Heroicas serão convertidos em Energia. Auriel só pode Conceder Esperança a 1 aliado por vez.  Auriel pode armazenar até 475 de energia.',
      displayText: 'O dano dos aliados agraciados concede energia',
      cooldown: 'Recarga: 1.5 segundos',
      slug: 'bestow-hope',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/auriel/traits/icons/bestow-hope_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/auriel/',
    abilities: [
      {
        name: 'Rasante Sagrado',
        description:
          'Varre a área com poder sagrado, causando 40 de dano a inimigos e 160 de dano adicional a inimigos pegos no centro.',
        displayText:
          'Causa dano a inimigos em um arco amplo e dano extra aos inimigos no centro',
        cooldown: 'Recarga: 8 segundos',
        slug: 'sacred-sweep',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/auriel/abilities/icons/sacred-sweep_square.png',
      },
      {
        name: 'Raio do Paraíso',
        description:
          'Auriel consome a energia armazenada e cura Heróis aliados na área em uma quantidade equivalente à energia consumida.',
        displayText:
          'Gasta toda a energia para curar Heróis aliados em uma área',
        cooldown: 'Recarga: 4 segundos',
        slug: 'ray-of-heaven',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/auriel/abilities/icons/ray-of-heaven_square.png',
      },
      {
        name: 'Golpe de Detenção',
        description:
          'Causa 55 de dano ao primeiro Herói inimigo atingido e o repele. Se colidir com o terreno, ele também ficará atordoado por 1.25 segundo e receberá 165 de dano adicional.',
        displayText:
          'Repele um Herói inimigo, atordoando-o se ele colidir com o terreno',
        cooldown: 'Recarga: 12 segundos',
        slug: 'detainment-strike',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/auriel/abilities/icons/detainment-strike_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: 'Égide de Cristal',
        description:
          'Coloca um Herói aliado em Estase por 2 segundos. Ao expirar, Égide de Cristal causa 255 de dano a todos os inimigos próximos.',
        displayText: 'Coloca um Herói aliado em um cristal de Estase explosivo',
        cooldown: 'Recarga: 60 segundos',
        slug: 'crystal-aegis',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/auriel/abilities/icons/crystal-aegis_square.png',
      },
      {
        name: 'Ressuscitar',
        description:
          'Canaliza o espírito de um aliado morto por 1 s. Após 5 s, o aliado é ressuscitado com 100% do máximo de Vida no local em que morreu.  Auriel pode usar essa habilidade enquanto estiver morta para ressuscitar a si mesma.',
        displayText: 'Traz um Herói aliado de volta à vida',
        cooldown: 'Recarga: 100 segundos',
        slug: 'resurrect',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/auriel/abilities/icons/resurrect_square.png',
      },
    ],
    expandedRole: {
      name: 'Curandeiro',
      description:
        'Curandeiro Amigos para todas as horas. Sempre presentes para manter os aliados vivos e relativamente saudáveis nas lutas em equipe.',
      slug: 'healer',
    },
    stats: {
      damage: 3,
      utility: 8,
      survivability: 4,
      complexity: 8,
    },
    skin: {
      id: 'AurielBaseCommon',
      name: {
        en_US: 'Archangel of Hope',
        es_MX: 'Arcángel de la Esperanza',
        pt_BR: 'Arcanjo da Esperança',
        de_DE: 'Erzengel der Hoffnung',
        en_GB: 'Archangel of Hope',
        es_ES: 'Arcángel de la Esperanza',
        fr_FR: 'Archange de l’Espoir',
        it_IT: 'Arcangelo della Speranza',
        pl_PL: 'Archanioł Nadziei',
        ru_RU: 'Архангел надежды',
        ko_KR: '희망의 대천사',
        zh_TW: '望天使',
        zh_CN: '希望大天使',
      },
      description: {
        en_US: 'Archangel of Hope',
        es_MX: 'Arcángel de la Esperanza',
        pt_BR: 'Arcanjo da Esperança',
        de_DE: 'Erzengel der Hoffnung',
        en_GB: 'Archangel of Hope',
        es_ES: 'Arcángel de la Esperanza',
        fr_FR: 'Archange de l’Espoir',
        it_IT: 'Arcangelo della Speranza',
        pl_PL: 'Archanioł Nadziei',
        ru_RU: 'Архангел надежды',
        ko_KR: '희망의 대천사',
        zh_TW: '望天使',
        zh_CN: '希望大天使',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/AurielBaseCommon?namespace=hms_80333',
      },
      slug: 'archangel-of-hope',
    },
  },
  {
    name: "Gul'dan",
    title: 'A Encarnação das Trevas',
    role: {
      name: 'Assassino',
      description: 'Assassino Matadores de heróis e semeadores de sofrimento.',
      slug: 'assassin',
    },
    type: {
      name: 'Longo Alcance',
      slug: 'ranged',
    },
    description:
      "Abandonando o caminho do xamanismo, Gul'dan fez um pacto com o lorde demoníaco Kil'jaeden e traiu seu povo em troca de poder sem limites. Com a Horda órquica sob o domínio do seu mestre, Draenor e Azeroth quase foram subjugadas por ele.",
    shortDescription:
      'Um Mago de dano contínuo, que usa a própria Vida como combustível e rouba a dos inimigos.',
    difficulty: 'Médio',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/guldan/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/guldan-07fc0ababf.jpg',
    franchise: 'Warcraft',
    release: '2016-07-12T00:00:00.000Z',
    isNew: false,
    slug: 'guldan',
    trait: {
      name: 'Conversão de Vida',
      description:
        "Gul'dan não regenera Mana.  Ative para restaurar 25% do mana de Gul'dan.",
      displayText: 'Restaura Mana ao custo de Vida',
      vital: 'Vida: 222',
      slug: 'life-tap',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/guldan/traits/icons/life-tap_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/guldan/',
    abilities: [
      {
        name: 'Chama Vil',
        description:
          'Libera uma onda de chamas, causando 210 de dano aos inimigos.',
        displayText: 'Libera uma onda de chamas que causa dano aos inimigos',
        vital: 'Mana: 75',
        cooldown: 'Recarga: 1.5 segundos',
        slug: 'fel-flame',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/guldan/abilities/icons/fel-flame_square.png',
      },
      {
        name: 'Drenar Vida',
        description:
          "Drena a vida de um inimigo ao longo de 3 segundos, causando 132 de dano por segundo e curando Gul'dan em 188 de Vida por segundo.",
        displayText:
          "Drena Vida de um inimigo, causando dano e curando Gul'dan",
        cooldown: 'Recarga: 10 segundos',
        slug: 'drain-life',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/guldan/abilities/icons/drain-life_square.png',
      },
      {
        name: 'Corrupção',
        description:
          'Evoca três erupções de energia sombria, causando 204 de dano ao longo de 6 segundos. Corrupção pode acumular até 3 vezes em um mesmo inimigo.',
        displayText: 'Causa dano ao longo do tempo aos inimigos na área',
        vital: 'Mana: 80',
        cooldown: 'Recarga: 14 segundos',
        slug: 'corruption',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/guldan/abilities/icons/corruption_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: 'Horrorizar',
        description:
          'Após 0.5 s, causa 120 de dano aos Heróis inimigos na área selecionada e os amedronta por 2 s. Enquanto estiverem amedrontados, os Heróis ficam silenciados e são forçados a correr do centro da habilidade Horrorizar.',
        displayText: 'Causa dano e amedronta Heróis',
        vital: 'Mana: 90',
        cooldown: 'Recarga: 80 segundos',
        slug: 'horrify',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/guldan/abilities/icons/horrify_square.png',
      },
      {
        name: 'Chuva de Destruição',
        description:
          'Após 1.5 s, evoca uma chuva de meteoros em uma área por 7 s. Cada meteoro causa 165 de dano em uma área pequena.',
        displayText: 'Evoca uma chuva de meteoros no local',
        vital: 'Mana: 80',
        cooldown: 'Recarga: 70 segundos',
        slug: 'rain-of-destruction',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/guldan/abilities/icons/rain-of-destruction_square.png',
      },
    ],
    expandedRole: {
      name: 'Assassino de Longo Alcance',
      description:
        'Assassino de Longo Alcance Causadores de dano que fazem chover balas, flechas ou feitiços mortíferos sobre os inimigos. Geralmente frágeis, eles se sentem mais seguros mantendo distância dos inimigos.',
      slug: 'ranged-assassin',
    },
    stats: {
      damage: 8,
      utility: 3,
      survivability: 5,
      complexity: 6,
    },
    skin: {
      id: 'GuldanBaseCommon',
      name: {
        en_US: 'Darkness Incarnate',
        es_MX: 'Oscuridad encarnada',
        pt_BR: 'A Encarnação das Trevas',
        de_DE: 'Inkarnation der Dunkelheit',
        en_GB: 'Darkness Incarnate',
        es_ES: 'Oscuridad personificada',
        fr_FR: 'Les ténèbres incarnées',
        it_IT: "L'oscurità incarnata",
        pl_PL: 'Wcielenie Ciemności',
        ru_RU: 'Воплощение мрака',
        ko_KR: '어둠의 화신',
        zh_TW: '黑暗的化身',
        zh_CN: '黑暗的化身',
      },
      description: {
        en_US: 'Darkness Incarnate',
        es_MX: 'Oscuridad encarnada',
        pt_BR: 'A Encarnação das Trevas',
        de_DE: 'Inkarnation der Dunkelheit',
        en_GB: 'Darkness Incarnate',
        es_ES: 'Oscuridad personificada',
        fr_FR: 'Les ténèbres incarnées',
        it_IT: "L'oscurità incarnata",
        pl_PL: 'Wcielenie Ciemności',
        ru_RU: 'Воплощение мрака',
        ko_KR: '어둠의 화신',
        zh_TW: '黑暗的化身',
        zh_CN: '黑暗的化身',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/GuldanBaseCommon?namespace=hms_80333',
      },
      slug: 'darkness-incarnate',
    },
  },
  {
    name: 'Medivh',
    title: 'O Último Guardião',
    role: {
      name: 'Especialista',
      description:
        'Especialista Quebradores de regras e mestres do combate diferenciado.',
      slug: 'specialist',
    },
    type: {
      name: 'Longo Alcance',
      slug: 'ranged',
    },
    description:
      'Sob a influência do lorde-demônio Sargeras, Medivh abriu o Portal Negro e liberou a Horda sobre Azeroth. Para pagar por seus erros, ele reuniu uma nova geração de heróis para enfrentar a Legião Ardente. Agora, Medivh assume seu lugar entre as lendas.',
    shortDescription:
      'Um Suporte capaz de anular surtos de dano e de fornecer teleporte aos aliados.',
    difficulty: 'Muito Difícil',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/medivh/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/medivh-9833fe06f2.jpg',
    franchise: 'Warcraft',
    release: '2016-06-14T00:00:00.000Z',
    isNew: false,
    slug: 'medivh',
    trait: {
      name: 'Forma de Corvo',
      description:
        'Em vez de montar, Medivh pode se transformar em corvo, aumentando a Velocidade de Movimento em 20%. Enquanto transformado, Medivh pode ver e sobrevoar todo o terreno e fica imune a todos os efeitos.',
      displayText: 'Transforma em corvo',
      slug: 'raven-form',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/medivh/traits/icons/raven-form_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/medivh/',
    abilities: [
      {
        name: 'Fenda Arcana',
        description:
          'Lança uma fenda que causa 170 de dano a inimigos no caminho. Se um Herói inimigo for atingido, sua recarga será reduzida em 5 s e restaurará 50 de Mana.  Missão: Atingir 40 Heróis inimigos com Fenda Arcana sem morrer.  Recompensa: Aumenta permanentemente o dano causado em 75 e a redução de recarga ao atingir um Herói em 1 s.',
        displayText:
          'Lança uma seta arcana que causa dano a inimigos em linha reta',
        vital: 'Mana: 50',
        cooldown: 'Recarga: 7 segundos',
        slug: 'arcane-rift',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/medivh/abilities/icons/arcane-rift_square.png',
      },
      {
        name: 'Força de Vontade',
        description:
          'Protege um Herói aliado de todo o dano por 1.5 s. Ao expirar, a Força de Vontade cura o alvo em 20% do dano absorvido.',
        displayText: 'Protege um Herói aliado do dano',
        vital: 'Mana: 60',
        cooldown: 'Recarga: 9 segundos',
        slug: 'force-of-will',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/medivh/abilities/icons/force-of-will_square.png',
      },
      {
        name: 'Portal',
        description:
          'Cria vários portais entre Medivh e o local-alvo, permitindo que aliados se teleportem de um ponto para o outro. Os portais duram 6 segundos.',
        displayText: 'Cria um portal por onde os aliados podem passar',
        vital: 'Mana: 65',
        cooldown: 'Recarga: 16 s',
        slug: 'portal',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/medivh/abilities/icons/portal_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: 'Polibomba',
        description:
          'Polimorfa um Herói inimigo por 2 s, silenciando-o e impossibilitando-o de atacar. Ao expirar, a Polibomba se propaga para outros Heróis inimigos próximos.',
        displayText: 'Polimorfa um Herói e se propaga para outros Heróis',
        vital: 'Mana: 75',
        cooldown: 'Recarga: 40 segundos',
        slug: 'poly-bomb',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/medivh/abilities/icons/poly-bomb_square.png',
      },
      {
        name: 'Selo de Linha de Meridiano',
        description:
          'Depois de 0.5 segundo, libera uma onda de energia que Para o Tempo para os Heróis inimigos por 3 segundos.',
        displayText:
          'Dispara uma onda que Para o Tempo para os Heróis inimigos',
        vital: 'Mana: 75',
        cooldown: 'Recarga: 80 segundos',
        slug: 'ley-line-seal',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/medivh/abilities/icons/ley-line-seal_square.png',
      },
    ],
    otherAbilities: [
      {
        name: 'Portal',
        description:
          'Cria vários portais entre Medivh e o local-alvo, permitindo que aliados se teleportem de um ponto para o outro. Os portais duram 6 segundos.',
        displayText: 'Cria um portal por onde os aliados podem passar',
        vital: 'Mana: 65',
        cooldown: 'Recarga: 16 s',
        slug: 'portal',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/medivh/abilities/icons/portal_square.png',
      },
      {
        name: 'Portal',
        description:
          'Cria vários portais entre Medivh e o local-alvo, permitindo que aliados se teleportem de um ponto para o outro. Os portais duram 6 segundos.',
        displayText: 'Cria um portal por onde os aliados podem passar',
        vital: 'Mana: 65',
        cooldown: 'Recarga: 16 s',
        slug: 'portal',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/medivh/abilities/icons/portal_square.png',
      },
      {
        name: 'Portal',
        description:
          'Cria um portal de entrada ou de saída no local escolhido.   Ative a Especialização de Medivh para cancelar um Portal não vinculado.',
        displayText: 'Cria um portal por onde os aliados podem passar',
        vital: 'Mana: 65',
        cooldown: 'Recarga: 16 s',
        slug: 'portal',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/medivh/abilities/icons/portal_square.png',
      },
      {
        name: 'Forma de Corvo',
        description:
          'Transforma-se em corvo, aumentando a Velocidade de Movimento em 20%. Enquanto transformado, Medivh pode ver e sobrevoar o terreno e fica imune a todos os efeitos.',
        displayText: 'Transforma em corvo',
        cooldown: 'Recarga: 4 segundos',
        slug: 'raven-form',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/medivh/abilities/icons/raven-form_square.png',
      },
    ],
    expandedRole: {
      name: 'Suporte',
      description:
        'Suporte Deixa os aliados mais fortes e mortíferos. Concedem bônus, aumentos, escudos e habilidades utilitárias para a equipe.',
      slug: 'support',
    },
    stats: {
      damage: 2,
      utility: 10,
      survivability: 6,
      complexity: 8,
    },
    skin: {
      id: 'MedivhBaseCommon',
      name: {
        en_US: 'The Last Guardian',
        es_MX: 'El último guardián',
        pt_BR: 'O Último Guardião',
        de_DE: 'Der letzte Wächter',
        en_GB: 'The Last Guardian',
        es_ES: 'El Último Guardián',
        fr_FR: 'Le dernier gardien',
        it_IT: "L'ultimo Guardiano",
        pl_PL: 'Ostatni Strażnik Tirisfal',
        ru_RU: 'Последний Хранитель',
        ko_KR: '최후의 수호자',
        zh_TW: '最後的守護者',
        zh_CN: '最后的守护者',
      },
      description: {
        en_US: 'The Last Guardian',
        es_MX: 'El último guardián',
        pt_BR: 'O Último Guardião',
        de_DE: 'Der letzte Wächter',
        en_GB: 'The Last Guardian',
        es_ES: 'El Último Guardián',
        fr_FR: 'Le dernier gardien',
        it_IT: "L'ultimo Guardiano",
        pl_PL: 'Ostatni Strażnik Tirisfal',
        ru_RU: 'Последний Хранитель',
        ko_KR: '최후의 수호자',
        zh_TW: '最後的守護者',
        zh_CN: '最后的守护者',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/MedivhBaseCommon?namespace=hms_80333',
      },
      slug: 'the-last-guardian',
    },
  },
  {
    name: 'Crona',
    title: 'Defensora do Tempo',
    role: {
      name: 'Assassino',
      description: 'Assassino Matadores de heróis e semeadores de sofrimento.',
      slug: 'assassin',
    },
    type: {
      name: 'Longo Alcance',
      slug: 'ranged',
    },
    description:
      'A princípio, Crona parece ser uma gnomida comum... mas, na verdade, ela é Chronormu, uma dragonesa da Revoada Bronze que controla o tempo. Quando se trata de manipulação temporal, não há problema que fique sem solução... graças à versão dela do futuro, claro.',
    shortDescription:
      'Uma Maga que causa surtos de dano a distância, mas que requer preparo e atenção.',
    difficulty: 'Difícil',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/chromie/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/chromie-b7015a805b.jpg',
    franchise: 'Warcraft',
    release: '2016-05-17T00:00:00.000Z',
    isNew: false,
    slug: 'chromie',
    trait: {
      name: 'Andarilha Temporal',
      description:
        'Crona consegue viajar no tempo, por isso aprende os Talentos 2 níveis mais cedo que os aliados!  Detonar Armadilha Temporal  Detona Armadilhas Temporais ativas.',
      displayText: 'Ganha Talentos mais cedo que todo mundo',
      slug: 'timewalker',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/chromie/traits/icons/timewalker_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/chromie/',
    abilities: [
      {
        name: 'Impacto de Areia',
        description:
          'Depois de 0.5 s, dispara um míssil que causa 305 de dano ao primeiro inimigo atingido. Causa 50% de dano a Estruturas.  Ao lançar Impacto de Areia, Crona deixa um Eco que imita o Impacto de Areia e o Ataque Básico dela, causando 40% de dano. Máximo de 1 Eco(s) ativo(s) por vez.',
        displayText:
          'Dispara uma rajada de longo alcance que causa dano a um inimigo',
        vital: 'Mana: 20',
        cooldown: 'Recarga: 3 segundos',
        slug: 'sand-blast',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/chromie/abilities/icons/sand-blast_square.png',
      },
      {
        name: 'Sopro de Dragão',
        description:
          'Mira Vetorial Lança 3 explosões no ar que aterrissam a cada 0.75 s na direção alvejada, causando 215 de dano cada.',
        displayText: 'Dispara várias explosões em uma área',
        vital: 'Mana: 65',
        cooldown: 'Recarga: 14 segundos',
        slug: 'dragons-breath',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/chromie/abilities/icons/dragons-breath_square.png',
      },
      {
        name: 'Armadilha Temporal',
        description:
          'Coloca uma Armadilha Temporal que se arma e ganha Furtividade após 2 s. A Especialização de Crona pode ser ativada para detonar a armadilha, submetendo todos os Heróis inimigos e aliados próximos ao efeito Parar o Tempo por 2 s. Máximo de 1 armadilha(s) ativa(s) por vez.',
        displayText: 'Coloca uma armadilha para Parar o Tempo dos Heróis',
        vital: 'Mana: 20',
        cooldown: 'Recarga: 15 s',
        slug: 'time-trap',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/chromie/abilities/icons/time-trap_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: 'Areias Retardantes',
        description:
          'Evoca um vórtice de areia que Desacelera em 7% os inimigos a cada 0.25 s, até no máximo 70%.',
        displayText: 'Cria uma área de desaceleração',
        vital: 'Mana: 3 por segundo',
        cooldown: 'Recarga: 5 s',
        slug: 'slowing-sands',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/chromie/abilities/icons/slowing-sands_square.png',
      },
      {
        name: 'Loop Temporal',
        description:
          'Escolha um Herói inimigo. Após 3 s, esse Herói é teleportado de volta ao local onde o Loop Temporal foi lançado nele.  As Habilidades Básicas recarregam 500% mais rápido por 3 s após o lançamento de Loop Temporal.',
        displayText: 'Retorna um Herói inimigo a uma posição prévia',
        vital: 'Mana: 60',
        cooldown: 'Recarga: 50 segundos',
        slug: 'temporal-loop',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/chromie/abilities/icons/temporal-loop_square.png',
      },
    ],
    otherAbilities: [
      {
        name: 'Detonar Armadilha Temporal',
        description:
          'Detona Armadilhas Temporais ativas, causando o efeito Parar o Tempo em todos os Heróis inimigos e aliados próximos por 2 s.',
        displayText: 'Detona uma armadilha para Parar o Tempo dos Heróis',
        slug: 'detonate-time-trap',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/chromie/abilities/icons/detonate-time-trap_square.png',
      },
      {
        name: 'Cancelar Areias Retardantes',
        description: 'Cancelar Areias Retardantes',
        slug: 'cancel-slowing-sands',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/chromie/abilities/icons/cancel-slowing-sands_square.png',
      },
    ],
    expandedRole: {
      name: 'Assassino de Longo Alcance',
      description:
        'Assassino de Longo Alcance Causadores de dano que fazem chover balas, flechas ou feitiços mortíferos sobre os inimigos. Geralmente frágeis, eles se sentem mais seguros mantendo distância dos inimigos.',
      slug: 'ranged-assassin',
    },
    stats: {
      damage: 9,
      utility: 4,
      survivability: 3,
      complexity: 5,
    },
    skin: {
      id: 'ChromieBaseCommon',
      name: {
        en_US: 'Keeper of Time',
        es_MX: 'Vigilante del tiempo',
        pt_BR: 'Defensora do Tempo',
        de_DE: 'Hüterin der Zeit',
        en_GB: 'Keeper of Time',
        es_ES: 'Vigilante del Tiempo',
        fr_FR: 'Gardienne du temps',
        it_IT: 'Custode del Tempo',
        pl_PL: 'Strażniczka Czasu',
        ru_RU: 'Хранительница Времени',
        ko_KR: '시간의 수호자',
        zh_TW: '時光守護者',
        zh_CN: '时光守护者',
      },
      description: {
        en_US: 'Keeper of Time',
        es_MX: 'Vigilante del tiempo',
        pt_BR: 'Defensora do Tempo',
        de_DE: 'Hüterin der Zeit',
        en_GB: 'Keeper of Time',
        es_ES: 'Vigilante del Tiempo',
        fr_FR: 'Gardienne du temps',
        it_IT: 'Custode del Tempo',
        pl_PL: 'Strażniczka Czasu',
        ru_RU: 'Хранительница Времени',
        ko_KR: '시간의 수호자',
        zh_TW: '時光守護者',
        zh_CN: '时光守护者',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/ChromieBaseCommon?namespace=hms_80333',
      },
      slug: 'keeper-of-time',
    },
  },
  {
    name: 'Tracer',
    title: 'Agente da Overwatch',
    role: {
      name: 'Assassino',
      description: 'Assassino Matadores de heróis e semeadores de sofrimento.',
      slug: 'assassin',
    },
    type: {
      name: 'Longo Alcance',
      slug: 'ranged',
    },
    description:
      'Lena Oxton (codinome: "Tracer") é uma aventureira e uma força implacável do bem. Com a capacidade de alterar o próprio tempo quando quiser, ela luta pelo bem onde quer que esteja, até mesmo no Nexus. Não se preocupem, queridos. A cavalaria chegou.  Tracer é GRÁTIS para quem comprar Overwatch™: Origins Edition',
    shortDescription:
      'Uma Assassina ágil, ótima para atacar e abater inimigos errantes.',
    difficulty: 'Difícil',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/tracer/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/tracer-912d842029.jpg',
    franchise: 'Overwatch',
    release: '2016-04-19T00:00:00.000Z',
    isNew: false,
    slug: 'tracer',
    trait: {
      name: 'Recarregar',
      description:
        'Tracer pode usar o Ataque Básico em movimento e, depois de atacar 10 vezes, precisa recarregar por 0.75 s. Ela pode ativar Recarregar para recarregar a arma manualmente.  Ataques Básicos restauram Vida equivalente a 10% do dano que causam.',
      displayText:
        'Tracer pode se mover enquanto usa Ataques Básicos; Ataques Básicos custam munição',
      vital: '',
      cooldown: 'Recarga: 1 segundo',
      slug: 'reload',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/tracer/traits/icons/reload_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/tracer/',
    abilities: [
      {
        name: 'Teleportar',
        description: 'Arremete em uma direção. Acumula até 3 cargas.',
        displayText: 'Arremete em uma direção',
        vital: '',
        cooldown: 'Recarga da carga: 9 segundos',
        slug: 'blink',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/tracer/abilities/icons/blink_square.png',
      },
      {
        name: 'Corpo a Corpo',
        description:
          'Causa 220 de dano a um inimigo próximo, priorizando Heróis. Ganha 6% de carga de Bomba Eletromagnética ao usar Corpo a Corpo contra um inimigo e 12% contra Heróis.',
        displayText: 'Ataca um inimigo próximo',
        cooldown: 'Recarga: 8 s',
        slug: 'melee',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/tracer/abilities/icons/melee_square.png',
      },
      {
        name: 'Recordação',
        description:
          'Após 1.25 s, Tracer volta para a posição onde estava 2 s antes de usar a habilidade, recarregando a munição e removendo todos os efeitos negativos de si.',
        displayText: 'Volta a um local recente e remove efeitos negativos',
        vital: '',
        cooldown: 'Recarga: 20 segundos',
        slug: 'recall',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/tracer/abilities/icons/recall_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: 'Bomba Eletromagnética',
        description:
          'Dispara uma bomba de curto alcance que pode se prender a um inimigo. A bomba explode depois de 2 s, causando 288 de dano e 144 de dano aos inimigos próximos.  Esta habilidade é carregada lentamente ao causar dano a inimigos com Ataques Básicos e com a habilidade Corpo a Corpo.',
        displayText: 'Acopla aos inimigos uma bomba que causa dano pesado',
        vital: '',
        slug: 'pulse-bomb',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/tracer/abilities/icons/pulse-bomb_square.png',
      },
    ],
    expandedRole: {
      name: 'Assassino de Longo Alcance',
      description:
        'Assassino de Longo Alcance Causadores de dano que fazem chover balas, flechas ou feitiços mortíferos sobre os inimigos. Geralmente frágeis, eles se sentem mais seguros mantendo distância dos inimigos.',
      slug: 'ranged-assassin',
    },
    stats: {
      damage: 8,
      utility: 2,
      survivability: 5,
      complexity: 8,
    },
    skin: {
      id: 'TracerCommon',
      name: {
        en_US: 'Agent of Overwatch',
        es_MX: 'Agente de Overwatch',
        pt_BR: 'Agente da Overwatch',
        de_DE: 'Overwatch-Agentin',
        en_GB: 'Agent of Overwatch',
        es_ES: 'Agente de Overwatch',
        fr_FR: 'Agent d’Overwatch',
        it_IT: 'Agente di Overwatch',
        pl_PL: 'Agentka Overwatch',
        ru_RU: 'Агент Overwatch',
        ko_KR: '오버워치 요원',
        zh_TW: '捍衛者成員',
        zh_CN: '守望先锋特工',
      },
      description: {
        en_US: 'Agent of Overwatch',
        es_MX: 'Agente de Overwatch',
        pt_BR: 'Agente da Overwatch',
        de_DE: 'Overwatch-Agentin',
        en_GB: 'Agent of Overwatch',
        es_ES: 'Agente de Overwatch',
        fr_FR: 'Agent d’Overwatch',
        it_IT: 'Agente di Overwatch',
        pl_PL: 'Agentka Overwatch',
        ru_RU: 'Агент Overwatch',
        ko_KR: '오버워치 요원',
        zh_TW: '捍衛者成員',
        zh_CN: '守望先锋特工',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/TracerCommon?namespace=hms_80333',
      },
      slug: 'agent-of-overwatch',
    },
  },
  {
    name: 'Dehaka',
    title: 'Líder da Matilha Primeva',
    role: {
      name: 'Guerreiro',
      description: 'Guerreiro Defensores e combatentes da linha de frente.',
      slug: 'warrior',
    },
    type: {
      name: 'Corpo a Corpo',
      slug: 'melee',
    },
    description:
      'Dehaka é astuto e sábio. Ele é um dos últimos líderes de matilha no mundo esquecido de Zerus. Assim como com todos os zergs primevos, ele é estimulado por uma necessidade insaciável de consumir a essência dos inimigos e evoluir para formas novas e ainda mais letais.',
    shortDescription:
      'Um guerreiro de forte presença global, muito eficiente em eliminar grupos de Tropas.',
    difficulty: 'Médio',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/dehaka/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/dehaka-fbd5db499f.jpg',
    franchise: 'StarCraft',
    release: '2016-03-29T00:00:00.000Z',
    isNew: false,
    slug: 'dehaka',
    trait: {
      name: 'Coleta de Essência',
      description:
        'Cura uma pequena quantidade da Vida de Dehaka por Essência acumulada ao longo de 5 s. Pode ser lançado durante Arrastar e Entocar.  Passivo: Ganha 10 de Essência de Abates e 2 de Essência quando Tropas próximas morrem. Máximo de 50 de Essência.',
      displayText:
        'Mate tropas ou heróis inimigos para ganhar Essência. Ela pode ser consumida para se curar.',
      cooldown: 'Recarga: 1 segundo',
      slug: 'essence-collection',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/dehaka/traits/icons/essence-collection_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/dehaka/',
    abilities: [
      {
        name: 'Arrastar',
        description:
          'Dehaka açoita com a língua, causando 160 de dano ao primeiro inimigo atingido, atordoando-o e arrastando-o consigo por 1.75 s.  Se Dehaka for atordoado ou silenciado enquanto usa Arrastar, o efeito terminará.',
        displayText: 'Causa dano leve e arrasta um inimigo',
        vital: 'Mana: 75',
        cooldown: 'Recarga: 15 segundos',
        slug: 'drag',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/dehaka/abilities/icons/drag_square.png',
      },
      {
        name: 'Enxame Macabro',
        description:
          'Causa 49 de dano a cada 0.5 s aos inimigos próximos por 3.5 s. Enquanto estiver ativo, você pode atravessar unidades. Pode ser lançado durante Arrastar e Entocar.',
        displayText: 'Causa dano a todos os inimigos próximos',
        vital: 'Mana: 50',
        cooldown: 'Recarga: 10 segundos',
        slug: 'dark-swarm',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/dehaka/abilities/icons/dark-swarm_square.png',
      },
      {
        name: 'Entocar',
        description:
          'Entoca no chão, entrando em Estase e ficando Invulnerável por 2 segundos.',
        displayText: 'Entra em estase entocando-se no chão',
        vital: 'Mana: 65',
        cooldown: 'Recarga: 20 segundos',
        slug: 'burrow',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/dehaka/abilities/icons/burrow_square.png',
      },
      {
        name: 'Espreita-arbustos',
        description:
          'Ative para se entocar e ir até um arbusto do Campo de Batalha.  Passiva: Ganha 20% de Velocidade de Movimento enquanto estiver em arbustos e por mais 2 s após sair do arbusto.',
        displayText: 'Entoca em um arbusto no Campo de Batalha.',
        cooldown: 'Recarga: 75 segundos',
        slug: 'brushstalker',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/dehaka/abilities/icons/brushstalker_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: 'Isolamento',
        description:
          'Lança biomassa que atinge o primeiro Herói inimigo, causando 200 de dano, revelando-o, silenciando-o e desacelerando-o em 30% por 3 s. Além disso, reduz bastante o campo de visão da vítima por 6 s.',
        displayText: 'Silencia, Desacelera e reduz a visão de um inimigo',
        vital: 'Mana: 70',
        cooldown: 'Recarga: 60 segundos',
        slug: 'isolation',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/dehaka/abilities/icons/isolation_square.png',
      },
      {
        name: 'Adaptação',
        description:
          'Após 4 segundos, cura Dehaka em 100% do dano que você recebeu ao longo desse período.',
        displayText: 'Cura o dano recebido',
        vital: 'Mana: 70',
        cooldown: 'Recarga: 60 segundos',
        slug: 'adaptation',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/dehaka/abilities/icons/adaptation_square.png',
      },
    ],
    expandedRole: {
      name: 'Guerreiro',
      description:
        'Guerreiro Guerreiros poderosos e resistentes capazes de causar estragos. Com potencial de tanqueamento limitado, eles contam com mobilidade adicional, controle coletivo ou capacidade de sobrevivência.',
      slug: 'bruiser',
    },
    stats: {
      damage: 6,
      utility: 8,
      survivability: 9,
      complexity: 7,
    },
    skin: {
      id: 'DehakaCommon',
      name: {
        en_US: 'Primal Pack Leader',
        es_MX: 'Líder de manada primigenio',
        pt_BR: 'Líder da Matilha Primeva',
        de_DE: 'Rudelführer der Urzerg',
        en_GB: 'Primal Pack Leader',
        es_ES: 'Líder de manada primigenio',
        fr_FR: 'Chef de meute primordial',
        it_IT: 'Capobranco primordiale',
        pl_PL: 'Przywódca Stada Pierwotnych',
        ru_RU: 'Вожак изначальных зергов',
        ko_KR: '원시 무리 우두머리',
        zh_TW: '原生族群領袖',
        zh_CN: '原始虫群首领',
      },
      description: {
        en_US: 'Primal Pack Leader',
        es_MX: 'Líder de manada primigenio',
        pt_BR: 'Líder da Matilha Primeva',
        de_DE: 'Rudelführer der Urzerg',
        en_GB: 'Primal Pack Leader',
        es_ES: 'Líder de manada primigenio',
        fr_FR: 'Chef de meute primordial',
        it_IT: 'Capobranco primordiale',
        pl_PL: 'Przywódca Stada Pierwotnych',
        ru_RU: 'Вожак изначальных зергов',
        ko_KR: '원시 무리 우두머리',
        zh_TW: '原生族群領袖',
        zh_CN: '原始虫群首领',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/DehakaCommon?namespace=hms_80333',
      },
      slug: 'primal-pack-leader',
    },
  },
  {
    name: 'Xul',
    title: 'Necromante Críptico',
    role: {
      name: 'Especialista',
      description:
        'Especialista Quebradores de regras e mestres do combate diferenciado.',
      slug: 'specialist',
    },
    type: {
      name: 'Corpo a Corpo',
      slug: 'melee',
    },
    description:
      'Dos recônditos das selvas orientais surge um homem envolto em mistérios. Membro dos elusivos Sacerdotes de Rathma, ou Necromantes, Xul domina a poderosa magia da morte e luta para preservar o equilíbrio delicado entre a ordem e o caos.',
    shortDescription:
      'Um Evocador capaz de avançar em várias trilhas com facilidade.',
    difficulty: 'Médio',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/xul/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/xul-770942d87d.jpg',
    franchise: 'Diablo',
    release: '2016-03-01T00:00:00.000Z',
    isNew: false,
    slug: 'xul',
    trait: {
      name: 'Reerguer Esqueleto',
      description:
        'Quando uma Tropa inimiga próxima morre, ela se torna um Guerreiro Descarnado com 240 de Vida, que causa 21 de dano e dura até 12 s. Ao morrerem, os Guerreiros Descarnados causam 46 de dano aos inimigos próximos. É possível ter até 3 Guerreiros Descarnados ativos por vez quando gerados dessa maneira.',
      displayText: 'Gera Guerreiros Descarnados a partir de Tropas',
      slug: 'raise-skeleton',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/xul/traits/icons/raise-skeleton_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/xul/',
    abilities: [
      {
        name: 'Foice Espectral',
        description:
          'Evoca uma foice que se desloca até o Xul após 1 s, causando 200 de dano aos inimigos e criando um Guerreiro Descarnado ao acertar Heróis inimigos. Esses Guerreiros não contam para o limite máximo de Xul.',
        displayText:
          'Arremessa uma foice que causa dano aos inimigos ao retornar para o Xul',
        vital: 'Mana: 55',
        cooldown: 'Recarga: 8 segundos',
        slug: 'spectral-scythe',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/xul/abilities/icons/spectral-scythe_square.png',
      },
      {
        name: 'Golpes Malditos',
        description:
          'Os Ataques Básicos do Xul causam dano em uma grande área e reduzem em 40% a Velocidade de Ataque de Heróis e criaturas evocadas por 2 s. Dura 4 s ao ser ativada.',
        displayText:
          'Ataques Básicos causam dano em área e reduzem a Velocidade de Ataque',
        vital: 'Mana: 50',
        cooldown: 'Recarga: 16 segundos',
        slug: 'cursed-strikes',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/xul/abilities/icons/cursed-strikes_square.png',
      },
      {
        name: 'Prisão de Ossos',
        description:
          'Após 2 s, causa 80 de dano e enraíza o Herói inimigo selecionado por 1.75 s. Enquanto estiverem em campo, todos os Guerreiros Descarnados próximos voltarão a atenção para o alvo.',
        displayText: 'Enraíza um inimigo no lugar',
        vital: 'Mana: 70',
        cooldown: 'Recarga: 10 segundos',
        slug: 'bone-prison',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/xul/abilities/icons/bone-prison_square.png',
      },
      {
        name: 'Armadura de Ossos',
        description:
          'Ative para ganhar um Escudo equivalente a 25% do máximo de Vida de Xul por 3 s.',
        displayText: 'Ative para ganhar um Escudo',
        cooldown: 'Recarga: 30 segundos',
        slug: 'bone-armor',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/xul/abilities/icons/bone-armor_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: 'Nova Venenosa',
        description:
          'Após 0.5 s, libera projéteis venenosos que causam 630 de dano ao longo de 10 s a todos os inimigos atingidos.',
        displayText: 'Envenena os inimigos numa grande área',
        vital: 'Mana: 100',
        cooldown: 'Recarga: 90 segundos',
        slug: 'poison-nova',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/xul/abilities/icons/poison-nova_square.png',
      },
      {
        name: 'Magos Descarnados',
        description:
          'Mira Vetorial Evoca uma fileira de 4 Magos de Gelo que atacam os inimigos próximos, causando 47 de dano por segundo e desacelerando-os em 30% por 2 s. Dura até 15 s.',
        displayText:
          'Evoca Magos de Gelo que causam dano e desaceleram os inimigos',
        vital: 'Mana: 80',
        cooldown: 'Recarga: 90 segundos',
        slug: 'skeletal-mages',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/xul/abilities/icons/skeletal-mages_square.png',
      },
    ],
    expandedRole: {
      name: 'Guerreiro',
      description:
        'Guerreiro Guerreiros poderosos e resistentes capazes de causar estragos. Com potencial de tanqueamento limitado, eles contam com mobilidade adicional, controle coletivo ou capacidade de sobrevivência.',
      slug: 'bruiser',
    },
    stats: {
      damage: 5,
      utility: 9,
      survivability: 7,
      complexity: 4,
    },
    skin: {
      id: 'NecromancerBaseCommon',
      name: {
        en_US: 'Cryptic Necromancer',
        es_MX: 'Nigromante críptico',
        pt_BR: 'Necromante Críptico',
        de_DE: 'Geheimnisvoller Totenbeschwörer',
        en_GB: 'Cryptic Necromancer',
        es_ES: 'Nigromante misterioso',
        fr_FR: 'Nécromancien cryptique',
        it_IT: 'Negromante misterioso',
        pl_PL: 'Tajemniczy Nekromanta',
        ru_RU: 'Таинственный некромант',
        ko_KR: '수수께끼의 강령술사',
        zh_TW: '神秘的死靈法師',
        zh_CN: '神秘的死灵法师',
      },
      description: {
        en_US: 'Cryptic Necromancer',
        es_MX: 'Nigromante críptico',
        pt_BR: 'Necromante Críptico',
        de_DE: 'Geheimnisvoller Totenbeschwörer',
        en_GB: 'Cryptic Necromancer',
        es_ES: 'Nigromante misterioso',
        fr_FR: 'Nécromancien cryptique',
        it_IT: 'Negromante misterioso',
        pl_PL: 'Tajemniczy Nekromanta',
        ru_RU: 'Таинственный некромант',
        ko_KR: '수수께끼의 강령술사',
        zh_TW: '神秘的死靈法師',
        zh_CN: '神秘的死灵法师',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/NecromancerBaseCommon?namespace=hms_80333',
      },
      slug: 'cryptic-necromancer',
    },
  },
  {
    name: 'Li-Ming',
    title: 'Arcanista Rebelde',
    role: {
      name: 'Assassino',
      description: 'Assassino Matadores de heróis e semeadores de sofrimento.',
      slug: 'assassin',
    },
    type: {
      name: 'Longo Alcance',
      slug: 'ranged',
    },
    description:
      'A alcunha pejorativa de "arcanista" muitas vezes é usada para se referir a magos com uma postura rebelde ou uma obsessão pelo poder. Li-Ming demonstra ter um pouco de ambas e, a bem da verdade, não se envergonha de nenhuma. Afinal, quem poderá julgar a portadora de uma magia arcana sem limites?',
    shortDescription:
      'Uma Maga que causa um grande surto de dano e cujas recargas são renovadas a cada abate.',
    difficulty: 'Médio',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/li-ming/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/li-ming-b201a30db4.jpg',
    franchise: 'Diablo',
    release: '2016-02-02T00:00:00.000Z',
    isNew: false,
    slug: 'li-ming',
    trait: {
      name: 'Massa Crítica',
      description:
        'Realizar um Abate conclui a recarga de todas as Habilidades da Li-Ming.',
      displayText: 'Abates concluem a recarga das Habilidades da Li-Ming',
      slug: 'critical-mass',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/li-ming/traits/icons/critical-mass_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/li-ming/',
    abilities: [
      {
        name: 'Projéteis Mágicos',
        description:
          'Dispara três projéteis em uma área, cada um causando 147 de dano ao primeiro inimigo atingido. Os projéteis causam 50% do dano a estruturas.',
        displayText: 'Dispara uma saraivada de projéteis',
        vital: 'Mana: 20',
        cooldown: 'Recarga: 3 segundos',
        slug: 'magic-missiles',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/li-ming/abilities/icons/magic-missiles_square.png',
      },
      {
        name: 'Orbe Arcano',
        description:
          'Atira um Orbe cujo poder aumenta à medida que ele se move, causando 135 de dano ao primeiro inimigo atingido. O dano aumenta proporcionalmente à distância, até um máximo de 270 a mais de dano.',
        displayText:
          'Lança um orbe que causa dano proporcional à distância percorrida',
        vital: 'Mana: 40',
        cooldown: 'Recarga: 8 segundos',
        slug: 'arcane-orb',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/li-ming/abilities/icons/arcane-orb_square.png',
      },
      {
        name: 'Teleporte',
        description: 'Teleporta-se a uma curta distância instantaneamente.',
        displayText: 'Teleporta-se a uma curta distância',
        vital: 'Mana: 30',
        cooldown: 'Recarga: 5 segundos',
        slug: 'teleport',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/li-ming/abilities/icons/teleport_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: 'Desintegrar',
        description:
          'Canaliza um feixe poderoso que causa 480 de dano ao longo de 2.6 s aos inimigos enquanto estiverem dentro do feixe. A direção do feixe muda com a posição do seu cursor.',
        displayText: 'Raio canalizado de longo alcance',
        vital: 'Mana: 80',
        cooldown: 'Recarga: 20 segundos',
        slug: 'disintegrate',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/li-ming/abilities/icons/disintegrate_square.png',
      },
      {
        name: 'Onda de Força',
        description:
          'Repele todos os inimigos de uma área e causa 160 de dano.',
        displayText: 'Causa dano e repele os inimigos',
        vital: 'Mana: 80',
        cooldown: 'Recarga: 30 segundos',
        slug: 'wave-of-force',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/li-ming/abilities/icons/wave-of-force_square.png',
      },
    ],
    otherAbilities: [
      {
        name: 'Arconte: Poder Puro',
        description:
          'Ative para entrar na forma de Arconte, permitindo à Li-Ming usar Desintegrar repetidamente, mas sem poder usar as outras Habilidades.',
        displayText:
          'Use Desintegrar repetidamente, mas sem nenhuma outra habilidade',
        slug: 'archon-pure-power',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/li-ming/abilities/icons/archon-pure-power_square.png',
      },
      {
        name: 'Arconte: Poder Puro',
        description:
          'Ative para entrar na forma de Arconte, permitindo à Li-Ming usar Desintegrar repetidamente, mas sem poder usar as outras Habilidades.',
        displayText:
          'Use Desintegrar repetidamente, mas sem nenhuma outra habilidade',
        slug: 'archon-pure-power',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/li-ming/abilities/icons/archon-pure-power_square.png',
      },
    ],
    expandedRole: {
      name: 'Assassino de Longo Alcance',
      description:
        'Assassino de Longo Alcance Causadores de dano que fazem chover balas, flechas ou feitiços mortíferos sobre os inimigos. Geralmente frágeis, eles se sentem mais seguros mantendo distância dos inimigos.',
      slug: 'ranged-assassin',
    },
    stats: {
      damage: 10,
      utility: 1,
      survivability: 3,
      complexity: 7,
    },
    skin: {
      id: 'WizardCommon',
      name: {
        en_US: 'Rebellious Wizard',
        es_MX: 'Arcanista rebelde',
        pt_BR: 'Arcanista Rebelde',
        de_DE: 'Rebellische Zauberin',
        en_GB: 'Rebellious Wizard',
        es_ES: 'Maga rebelde',
        fr_FR: 'Sorcière rebelle',
        it_IT: 'Maga ribelle',
        pl_PL: 'Zbuntowana Czarownica',
        ru_RU: 'Мятежная чародейка',
        ko_KR: '반항적인 마법사',
        zh_TW: '叛逆的秘術師',
        zh_CN: '狂热的魔法师',
      },
      description: {
        en_US: 'Rebellious Wizard',
        es_MX: 'Arcanista rebelde',
        pt_BR: 'Arcanista Rebelde',
        de_DE: 'Rebellische Zauberin',
        en_GB: 'Rebellious Wizard',
        es_ES: 'Maga rebelde',
        fr_FR: 'Sorcière rebelle',
        it_IT: 'Maga ribelle',
        pl_PL: 'Zbuntowana Czarownica',
        ru_RU: 'Мятежная чародейка',
        ko_KR: '반항적인 마법사',
        zh_TW: '叛逆的秘術師',
        zh_CN: '狂热的魔法师',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/WizardCommon?namespace=hms_80333',
      },
      slug: 'rebellious-wizard',
    },
  },
  {
    name: 'Greymane',
    title: 'Senhor dos Worgens',
    role: {
      name: 'Assassino',
      description: 'Assassino Matadores de heróis e semeadores de sofrimento.',
      slug: 'assassin',
    },
    type: {
      name: 'Longo Alcance',
      slug: 'ranged',
    },
    description:
      'Assim como a maioria dos guilneanos, Genn Greymane foi acometido pela maldição dos Worgens. Ele se sente culpado pela sina de seu povo, mas aprendeu a aceitar a fera interior sem permitir que sua natureza feral o subjugue. Agora ele lidera sua matilha como macho alfa e rei.',
    shortDescription:
      'Um Assassino que castiga os inimigos de longe e avança para garantir o abate.  10 de Armadura (na Forma de Worgen)',
    difficulty: 'Difícil',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/greymane/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/greymane-6a60860d1b.jpg',
    franchise: 'Warcraft',
    release: '2016-01-12T00:00:00.000Z',
    isNew: false,
    slug: 'greymane',
    trait: {
      name: 'Maldição dos Worgens',
      description:
        'Greymane pode usar Habilidades específicas para se transmutar entre as formas Humana e Worgen.  Na forma Humana, os Ataques Básicos de Greymane são de longo alcance.  Na forma Worgen, Greymane ganha 10 de Armadura e seus Ataques Básicos passam a ser corpo a corpo, mas causam 40% a mais de dano.',
      displayText: 'Capaz de transmutar entre Humano e Worgen',
      slug: 'curse-of-the-worgen',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/greymane/traits/icons/curse-of-the-worgen_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/greymane/',
    abilities: [
      {
        name: 'Coquetel de Guilnéas',
        description:
          'Arremessa uma garrafa que causa 55 de dano ao primeiro inimigo atingido. A garrafa então explode, causando 220 de dano aos inimigos numa área cônica atrás do primeiro alvo.  Worgen: Patada Cortante Salta adiante, causando dano aos inimigos atingidos.',
        displayText:
          'Causa dano ao primeiro inimigo atingido e causa dano pesado atrás dele',
        vital: 'Mana: 55',
        cooldown: 'Recarga: 9 segundos',
        slug: 'gilnean-cocktail',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/greymane/abilities/icons/gilnean-cocktail_square.png',
      },
      {
        name: 'Fera Interior',
        description:
          'Concede 50% de velocidade de ataque por 3 segundos. Ataques básicos aumentam essa duração e reduzem a recarga de Fera Interior em 0.5 segundos.',
        displayText: 'Ganha um grande bônus de Velocidade de Ataque',
        vital: 'Mana: 70',
        cooldown: 'Recarga: 20 segundos',
        slug: 'inner-beast',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/greymane/abilities/icons/inner-beast_square.png',
      },
      {
        name: 'Bote Sombrio',
        description:
          'Transmuta-se em Worgen e salta sobre um inimigo, causando 88 de dano.  Forma de Worgen: Desvencilhar Rola para longe e se transmuta em Humano.',
        displayText: 'Salta sobre um inimigo e transmuta para Worgen',
        vital: 'Mana: 10',
        cooldown: 'Recarga: 5 segundos',
        slug: 'darkflight',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/greymane/abilities/icons/darkflight_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: 'Na Jugular',
        description:
          'Salta em um Herói inimigo e se transmuta em Worgen, desferindo um golpe que causa 355 de dano. Se o inimigo morrer, a habilidade poderá ser usada uma segunda vez dentro de 10 segundos sem custo.',
        displayText: 'Esviscera um Herói, recarga reiniciada se ele morrer',
        vital: 'Mana: 90',
        cooldown: 'Recarga: 80 segundos',
        slug: 'go-for-the-throat',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/greymane/abilities/icons/go-for-the-throat_square.png',
      },
      {
        name: 'Bala Amaldiçoada',
        description:
          'Greymane assume a forma de Humano e dispara um projétil que atinge o primeiro Herói inimigo no caminho, causando 40% da Vida atual do inimigo como dano.  Não afeta Veículos.',
        displayText: 'Remove uma parte da Vida atual do inimigo',
        vital: 'Mana: 50',
        cooldown: 'Recarga: 30 segundos',
        slug: 'cursed-bullet',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/greymane/abilities/icons/cursed-bullet_square.png',
      },
    ],
    otherAbilities: [
      {
        name: 'Patada Cortante',
        description:
          'Avança na direção desejada, desferindo uma patada que causa 126 de dano aos inimigos atingidos.  Humano: Coquetel de Guilnéas Causa dano ao primeiro inimigo atingido e causa muito dano na área atrás dele.',
        displayText: 'Avança e causa dano aos inimigos',
        vital: 'Mana: 25',
        cooldown: 'Recarga: 4 segundos',
        slug: 'razor-swipe',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/greymane/abilities/icons/razor-swipe_square.png',
      },
      {
        name: 'Desvencilhar',
        description:
          'Rola para longe e se transmuta em Humano.  Humano: Bote Sombrio Salta sobre um inimigo e transmuta em Worgen.',
        displayText: 'Rola para longe e se transforma de volta em Humano',
        cooldown: 'Recarga: 5 segundos',
        slug: 'disengage',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/greymane/abilities/icons/disengage_square.png',
      },
    ],
    expandedRole: {
      name: 'Assassino de Longo Alcance',
      description:
        'Assassino de Longo Alcance Causadores de dano que fazem chover balas, flechas ou feitiços mortíferos sobre os inimigos. Geralmente frágeis, eles se sentem mais seguros mantendo distância dos inimigos.',
      slug: 'ranged-assassin',
    },
    stats: {
      damage: 9,
      utility: 3,
      survivability: 4,
      complexity: 7,
    },
    skin: {
      id: 'GreymaneBaseCommon',
      name: {
        en_US: 'Lord of the Worgen',
        es_MX: 'Señor de los huargen',
        pt_BR: 'Senhor dos Worgens',
        de_DE: 'Anführer der Worgen',
        en_GB: 'Lord of the Worgen',
        es_ES: 'Señor de los huargen',
        fr_FR: 'Seigneur des worgens',
        it_IT: 'Signore dei Worgen',
        pl_PL: 'Władca Worgenów',
        ru_RU: 'Владыка воргенов',
        ko_KR: '늑대인간의 지도자',
        zh_TW: '狼人之王',
        zh_CN: '狼人之王',
      },
      description: {
        en_US: 'Lord of the Worgen',
        es_MX: 'Señor de los huargen',
        pt_BR: 'Senhor dos Worgens',
        de_DE: 'Anführer der Worgen',
        en_GB: 'Lord of the Worgen',
        es_ES: 'Señor de los huargen',
        fr_FR: 'Seigneur des worgens',
        it_IT: 'Signore dei Worgen',
        pl_PL: 'Władca Worgenów',
        ru_RU: 'Владыка воргенов',
        ko_KR: '늑대인간의 지도자',
        zh_TW: '狼人之王',
        zh_CN: '狼人之王',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/GreymaneBaseCommon?namespace=hms_80333',
      },
      slug: 'lord-of-the-worgen',
    },
  },
  {
    name: 'Lunara',
    title: 'Primogênita de Cenarius',
    role: {
      name: 'Assassino',
      description: 'Assassino Matadores de heróis e semeadores de sofrimento.',
      slug: 'assassin',
    },
    type: {
      name: 'Longo Alcance',
      slug: 'ranged',
    },
    description:
      'Enquanto suas irmãs mais jovens saltitavam em florestas idílicas, Lunara observava os mortais explorarem o esplendor da natureza. Em Azeroth, Cenarius, seu pai, a proibiu de retaliar. Mas aqui é o Nexus, e está na hora da natureza ter sua vingança.',
    shortDescription:
      'Uma Assassina que castiga os inimigos de longe com seus venenos.',
    difficulty: 'Médio',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/lunara/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/lunara-27ada58fa6.jpg',
    franchise: 'Warcraft',
    release: '2015-12-15T00:00:00.000Z',
    isNew: false,
    slug: 'lunara',
    trait: {
      name: 'Toxina da Natureza',
      description:
        'Ataques Básicos e Habilidades que causam dano de Lunara envenenam o alvo, causando 36 de dano por segundo durante 3 segundos. Cada aplicação subsequente aumenta a duração em 3 segundos, até um máximo de 9.',
      displayText:
        'Ataques básicos e habilidades que causam dano causam dano ao longo do tempo',
      slug: 'natures-toxin',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/lunara/traits/icons/natures-toxin_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/lunara/',
    abilities: [
      {
        name: 'Florescimento Nóxio',
        description:
          'Depois de 0.5 segundo, explode uma área com pólen causando 160 de dano.',
        displayText: 'Causa dano em área',
        vital: 'Mana: 60',
        cooldown: 'Recarga: 8 segundos',
        slug: 'noxious-blossom',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/lunara/abilities/icons/noxious-blossom_square.png',
      },
      {
        name: 'Esporos Incapacitantes',
        description:
          'Inimigos sob efeito da Toxina da Natureza têm a duração aumentada em 3 s e ficam desacelerados em 40%. A desaceleração decai ao longo de 3 s. ',
        displayText:
          'Desacelera inimigos sob efeito de Toxina da Natureza e aumenta a duração',
        vital: 'Mana: 50',
        cooldown: 'Recarga: 10 segundos',
        slug: 'crippling-spores',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/lunara/abilities/icons/crippling-spores_square.png',
      },
      {
        name: 'Fogo-fátuo',
        description:
          'Cria um Fogo-fátuo para espreitar uma área. Depois de ativado, ele pode ser redirecionado. Se o Fogo-fátuo permanecer mais de 2 s em um arbusto, o campo de visão dele aumentará em 75%. Dura 45 s.',
        displayText: 'Gera um Fogo-fátuo para explorar',
        cooldown: 'Recarga: 30 segundos',
        slug: 'wisp',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/lunara/abilities/icons/wisp_square.png',
      },
      {
        name: 'Relocar Fogo-fátuo',
        description: 'Move o Fogo-fátuo para um novo local.',
        displayText: 'Move o Fogo-fátuo para um novo local.',
        cooldown: 'Recarga: 1 segundo',
        slug: 'relocate-wisp',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/lunara/abilities/icons/relocate-wisp_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: 'Gavinha de Madeira Espinhenta',
        description:
          'Lança cipós que causam 176 de dano a todos os inimigos em linha reta.  Acumula até 3 cargas.',
        displayText: 'Causa dano em linha reta',
        vital: 'Mana: 35',
        cooldown: 'Recarga da carga: 15 segundos',
        slug: 'thornwood-vine',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/lunara/abilities/icons/thornwood-vine_square.png',
      },
      {
        name: 'Golpe no Ar',
        description:
          'Salta sobre um inimigo, desacelerando-o em 80% por 0.35 s e causando 271 de dano.  Acumula até 2 cargas.',
        displayText: 'Salta sobre inimigos, causando dano e desacelerando-os',
        vital: 'Mana: 50',
        cooldown: 'Recarga da carga: 20 s',
        slug: 'leaping-strike',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/lunara/abilities/icons/leaping-strike_square.png',
      },
    ],
    otherAbilities: [
      {
        name: 'Celeridade da Dríade',
        description: 'Lunara se move 20% mais rápido dando pequenos saltos.',
        displayText:
          'Lunara se move aproximadamente 20% mais rápido, dando pequenos saltos.',
        cooldown: 'Recarga: 30 segundos',
        slug: 'dryads-swiftness',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/lunara/abilities/icons/dryads-swiftness_square.png',
      },
    ],
    expandedRole: {
      name: 'Assassino de Longo Alcance',
      description:
        'Assassino de Longo Alcance Causadores de dano que fazem chover balas, flechas ou feitiços mortíferos sobre os inimigos. Geralmente frágeis, eles se sentem mais seguros mantendo distância dos inimigos.',
      slug: 'ranged-assassin',
    },
    stats: {
      damage: 8,
      utility: 5,
      survivability: 4,
      complexity: 5,
    },
    skin: {
      id: 'DryadCommon',
      name: {
        en_US: 'First Daughter of Cenarius',
        es_MX: 'Primera hija de Cenarius',
        pt_BR: 'Primogênita de Cenarius',
        de_DE: 'Erste Tochter des Cenarius',
        en_GB: 'First Daughter of Cenarius',
        es_ES: 'Primogénita de Cenarius',
        fr_FR: 'Première fille de Cénarius',
        it_IT: 'Prima Figlia di Cenarius',
        pl_PL: 'Pierwsza Córa Cenariusa',
        ru_RU: 'Первая дочь Кенария',
        ko_KR: '세나리우스의 첫 번째 딸',
        zh_TW: '塞納留斯的長女',
        zh_CN: '塞纳留斯的长女',
      },
      description: {
        en_US: 'First Daughter of Cenarius',
        es_MX: 'Primera hija de Cenarius',
        pt_BR: 'Primogênita de Cenarius',
        de_DE: 'Erste Tochter des Cenarius',
        en_GB: 'First Daughter of Cenarius',
        es_ES: 'Primogénita de Cenarius',
        fr_FR: 'Première fille de Cénarius',
        it_IT: 'Prima Figlia di Cenarius',
        pl_PL: 'Pierwsza Córa Cenariusa',
        ru_RU: 'Первая дочь Кенария',
        ko_KR: '세나리우스의 첫 번째 딸',
        zh_TW: '塞納留斯的長女',
        zh_CN: '塞纳留斯的长女',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/DryadCommon?namespace=hms_80333',
      },
      slug: 'first-daughter-of-cenarius',
    },
  },
  {
    name: 'Cho',
    title: 'Chefe do Martelo do Crepúsculo',
    role: {
      name: 'Guerreiro',
      description: 'Guerreiro Defensores e combatentes da linha de frente.',
      slug: 'warrior',
    },
    type: {
      name: 'Corpo a Corpo',
      slug: 'melee',
    },
    description:
      "Cho'gall é um dos magos ogros mais poderosos, inteligentes e enlouquecidos que já viveram. À frente do Martelo do Crepúsculo, os dois irmãos se empenham em instaurar uma era de destruição... quando não estão perdendo tempo em briguinhas.",
    shortDescription:
      "A primeira cabeça do Herói de duas cabeça, Cho controla do corpo do Cho'gall.",
    difficulty: 'Médio',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/cho/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/cho-149c8bca12.jpg',
    franchise: 'Warcraft',
    release: '2015-11-17T00:00:00.000Z',
    isNew: false,
    slug: 'cho',
    trait: {
      name: 'Pele Ôgrica',
      description:
        'Ative para ganhar 25 de Armadura, mas reduzir o dano de Gall em 25%.',
      displayText: 'Ative para aumentar a Armadura',
      cooldown: 'Recarga: 5 segundos',
      slug: 'ogre-hide',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/cho/traits/icons/ogre-hide_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/chogall/?stance=cho',
    abilities: [
      {
        name: 'Punho Rompante',
        description:
          'Ative para começar a carregar um Punho Rompante. Ative novamente para investir e repelir os inimigos no caminho, causando 46 de dano. O alcance da arremetida aumenta em até 250%, dependendo do quanto for carregada.',
        displayText: 'Arremete, repelindo inimigos',
        cooldown: 'Recarga: 12 segundos',
        slug: 'surging-fist',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/cho/abilities/icons/surging-fist_square.png',
      },
      {
        name: 'Chamas Devoradoras',
        description:
          'Incendeia inimigos próximos, causando 150 de dano ao longo de 5 s. Ataques Básicos contra inimigos em chamas os Incendeiam de novo. Cho recupera 40 de Vida quando um inimigo é Incendiado.',
        displayText: 'Causa dano aos inimigos próximos e cura o Cho',
        cooldown: 'Recarga: 12 segundos',
        slug: 'consuming-blaze',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/cho/abilities/icons/consuming-blaze_square.png',
      },
      {
        name: 'Bomba Rúnica',
        description:
          'Arremessa uma bomba, causando 91 de dano aos inimigos no caminho. Gall pode usar Explosão Rúnica para detonar a bomba, causando 210 de dano em uma área.',
        displayText:
          'Arremessa uma Bomba Rúnica em linha reta. Gall pode detoná-la para causar dano de área',
        cooldown: 'Recarga: 8 segundos',
        slug: 'rune-bomb',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/cho/abilities/icons/rune-bomb_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: 'Martelo do Crepúsculo',
        description:
          'Ative para brandir o Martelo do Crepúsculo, causando 150 de dano, além de repelir e atordoar as vítimas por 0.75 s.  Passivo: Os Ataques Básicos do Cho causam 25% a mais de dano.',
        displayText: 'Ative para repelir e atordoar inimigos',
        cooldown: 'Recarga: 15 segundos',
        slug: 'hammer-of-twilight',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/cho/abilities/icons/hammer-of-twilight_square.png',
      },
      {
        name: 'Fissura',
        description:
          "Após 1 s, atrai os inimigos para perto de Cho'gall, desacelerando-os em 25% por 3 s e causando 175 de dano.",
        displayText: 'Puxa os inimigos numa grande área',
        cooldown: 'Recarga: 40 segundos',
        slug: 'upheaval',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/cho/abilities/icons/upheaval_square.png',
      },
    ],
    otherAbilities: [
      {
        name: 'Punho Rompante',
        description:
          'Ative novamente para investir à frente, repelindo e causando 46 de dano aos inimigos no caminho. O alcance da arremetida aumenta em até 250%, dependendo do quanto for carregada.',
        slug: 'surging-fist',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/cho/abilities/icons/surging-fist_square.png',
      },
      {
        name: 'Punho Rompante',
        description:
          'Ative novamente para investir à frente, repelindo e causando 46 de dano aos inimigos no caminho. O alcance da arremetida aumenta em até 250%, dependendo do quanto for carregada.',
        displayText: 'Arremete, repelindo inimigos',
        slug: 'surging-fist',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/cho/abilities/icons/surging-fist_square.png',
      },
    ],
    expandedRole: {
      name: 'Tanque',
      description:
        'Tanque Defensores da linha de frente, capazes de resistir a grandes estragos. Cuidam da proteção dos companheiros mais frágeis.',
      slug: 'tank',
    },
    stats: {
      damage: 6,
      utility: 2,
      survivability: 10,
      complexity: 7,
    },
    skin: {
      id: 'ChoBaseCommon',
      name: {
        en_US: "Twilight's Hammer Chieftain",
        es_MX: 'Cabecilla del Martillo del Crepúsculo',
        pt_BR: 'Chefe do Martelo do Crepúsculo',
        de_DE: 'Häuptling des Schattenhammerklans',
        en_GB: "Twilight's Hammer Chieftain",
        es_ES: 'Jefe del Martillo Crepuscular',
        fr_FR: 'Chef du Marteau du crépuscule',
        it_IT: 'Capoclan del Martello del Crepuscolo',
        pl_PL: 'Wódz Młota Zmierzchu',
        ru_RU: 'Вождь клана Сумеречного Молота',
        ko_KR: '황혼의 망치단 족장',
        zh_TW: '暮光之鎚的酋長',
        zh_CN: '暮光之锤的酋长',
      },
      description: {
        en_US: "Twilight's Hammer Chieftain",
        es_MX: 'Cabecilla del Martillo del Crepúsculo',
        pt_BR: 'Chefe do Martelo do Crepúsculo',
        de_DE: 'Häuptling des Schattenhammerklans',
        en_GB: "Twilight's Hammer Chieftain",
        es_ES: 'Jefe del Martillo Crepuscular',
        fr_FR: 'Chef du Marteau du crépuscule',
        it_IT: 'Capoclan del Martello del Crepuscolo',
        pl_PL: 'Wódz Młota Zmierzchu',
        ru_RU: 'Вождь клана Сумеречного Молота',
        ko_KR: '황혼의 망치단 족장',
        zh_TW: '暮光之鎚的酋長',
        zh_CN: '暮光之锤的酋长',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/ChoBaseCommon?namespace=hms_80333',
      },
      slug: 'twilights-hammer-chieftain',
    },
  },
  {
    name: 'Gall',
    title: 'Chefe do Martelo do Crepúsculo',
    role: {
      name: 'Assassino',
      description: 'Assassino Matadores de heróis e semeadores de sofrimento.',
      slug: 'assassin',
    },
    type: {
      name: 'Longo Alcance',
      slug: 'ranged',
    },
    description:
      "Cho'gall é um dos magos ogros mais poderosos, inteligentes e enlouquecidos que já viveram. À frente do Martelo do Crepúsculo, os dois irmãos se empenham em instaurar uma era de destruição... quando não estão perdendo tempo em briguinhas.",
    shortDescription:
      'A segunda cabeça do Herói de duas cabeça, Gall é um poderoso Mago preso ao Cho.',
    difficulty: 'Fácil',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/gall/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/gall-149c8bca12.jpg',
    franchise: 'Warcraft',
    release: '2015-11-17T00:00:00.000Z',
    isNew: false,
    slug: 'gall',
    trait: {
      name: 'Raiva Ôgrica',
      description:
        'Ative para aumentar o dano de Gall em 25%, mas reduzir a Armadura de Cho em 25.   Passivo: Gall tem imunidade permanente a efeitos de Atordoamento e Silêncio.',
      displayText: 'Ative para aumentar o dano do Gall',
      cooldown: 'Recarga: 5 segundos',
      slug: 'ogre-rage',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/gall/traits/icons/ogre-rage_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/chogall/?stance=gall',
    abilities: [
      {
        name: 'Chama Sombria',
        description: 'Causa 135 de dano aos inimigos na área.',
        displayText: 'Dispara contra inimigos em linha reta',
        cooldown: 'Recarga: 3 segundos',
        slug: 'shadowflame',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/gall/abilities/icons/shadowflame_square.png',
      },
      {
        name: 'Orbe Medonho',
        description:
          'Atira uma bomba que ricocheteia três vezes, causando 126 de dano aos inimigos.',
        displayText:
          'Arremessa uma bola de energia que quica três vezes, causando dano aos inimigos que atinge',
        cooldown: 'Recarga: 6 segundos',
        slug: 'dread-orb',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/gall/abilities/icons/dread-orb_square.png',
      },
      {
        name: 'Explosão Rúnica',
        description:
          'Detona a Bomba Rúnica de Cho, causando 210 de dano ao redor dela.',
        displayText: 'Detona a Bomba Rúnica de Cho, causando dano de área',
        slug: 'runic-blast',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/gall/abilities/icons/runic-blast_square.png',
      },
      {
        name: 'Empurrar',
        description:
          'Empurra um pouco o Cho e concede 25% de Velocidade de Movimento por 2 s.',
        displayText: 'Empurra Cho a uma curta distância',
        cooldown: 'Recarga: 30 segundos',
        slug: 'shove',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/gall/abilities/icons/shove_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: 'Salva de Setas Sombrias',
        description:
          'Depois de 1 segundo, lança 20 Setas Sombrias ao longo de 4 segundos, cada uma causando 87 de dano ao primeiro alvo atingido. As Setas são disparadas na direção do cursor do mouse.',
        displayText: 'Dispara uma salva de Setas Sombrias',
        cooldown: 'Recarga: 60 segundos',
        slug: 'shadow-bolt-volley',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/gall/abilities/icons/shadow-bolt-volley_square.png',
      },
      {
        name: 'Espiral Etérea',
        description:
          'Após 1 s, os inimigos próximos serão desacelerados em 50% enquanto o Gall canalizar esse efeito, até um máximo de 5 s. Ative para causar 353 de dano.',
        displayText: 'Desacelera e causa dano aos inimigos próximos',
        cooldown: 'Recarga: 80 segundos',
        slug: 'twisting-nether',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/gall/abilities/icons/twisting-nether_square.png',
      },
    ],
    otherAbilities: [
      {
        name: 'Olho de Kilrogg',
        description:
          'Posiciona um olho, concedendo visão de uma grande área ao redor dele por 45 s. O olho pode ser morto por inimigos com 2 Ataques Básicos. Acumula até 2 cargas.',
        displayText: 'Posiciona um olho que concede visão',
        cooldown: 'Recarga da carga: 45 s',
        slug: 'eye-of-kilrogg',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/gall/abilities/icons/eye-of-kilrogg_square.png',
      },
      {
        name: 'Detonar Espiral Etérea',
        description: 'Detona a Espiral Etérea, causando 353 de dano.',
        slug: 'detonate-twisting-nether',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/gall/abilities/icons/detonate-twisting-nether_square.png',
      },
      {
        name: 'Espiral Etérea',
        description:
          'Após 1 s, os inimigos próximos serão desacelerados em 50% enquanto o Gall canalizar esse efeito, até um máximo de 5 s. Ative para causar 353 de dano.',
        displayText: 'Desacelera e causa dano aos inimigos próximos',
        cooldown: 'Recarga: 80 segundos',
        slug: 'twisting-nether',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/gall/abilities/icons/twisting-nether_square.png',
      },
    ],
    expandedRole: {
      name: 'Assassino de Longo Alcance',
      description:
        'Assassino de Longo Alcance Causadores de dano que fazem chover balas, flechas ou feitiços mortíferos sobre os inimigos. Geralmente frágeis, eles se sentem mais seguros mantendo distância dos inimigos.',
      slug: 'ranged-assassin',
    },
    stats: {
      damage: 9,
      utility: 4,
      survivability: 10,
      complexity: 3,
    },
    skin: {
      id: 'ChoBaseCommon',
      name: {
        en_US: "Twilight's Hammer Chieftain",
        es_MX: 'Cabecilla del Martillo del Crepúsculo',
        pt_BR: 'Chefe do Martelo do Crepúsculo',
        de_DE: 'Häuptling des Schattenhammerklans',
        en_GB: "Twilight's Hammer Chieftain",
        es_ES: 'Jefe del Martillo Crepuscular',
        fr_FR: 'Chef du Marteau du crépuscule',
        it_IT: 'Capoclan del Martello del Crepuscolo',
        pl_PL: 'Wódz Młota Zmierzchu',
        ru_RU: 'Вождь клана Сумеречного Молота',
        ko_KR: '황혼의 망치단 족장',
        zh_TW: '暮光之鎚的酋長',
        zh_CN: '暮光之锤的酋长',
      },
      description: {
        en_US: "Twilight's Hammer Chieftain",
        es_MX: 'Cabecilla del Martillo del Crepúsculo',
        pt_BR: 'Chefe do Martelo do Crepúsculo',
        de_DE: 'Häuptling des Schattenhammerklans',
        en_GB: "Twilight's Hammer Chieftain",
        es_ES: 'Jefe del Martillo Crepuscular',
        fr_FR: 'Chef du Marteau du crépuscule',
        it_IT: 'Capoclan del Martello del Crepuscolo',
        pl_PL: 'Wódz Młota Zmierzchu',
        ru_RU: 'Вождь клана Сумеречного Молота',
        ko_KR: '황혼의 망치단 족장',
        zh_TW: '暮光之鎚的酋長',
        zh_CN: '暮光之锤的酋长',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/ChoBaseCommon?namespace=hms_80333',
      },
      slug: 'twilights-hammer-chieftain',
    },
  },
  {
    name: 'Artanis',
    title: 'Hierarca dos Daelaam',
    role: {
      name: 'Guerreiro',
      description: 'Guerreiro Defensores e combatentes da linha de frente.',
      slug: 'warrior',
    },
    type: {
      name: 'Corpo a Corpo',
      slug: 'melee',
    },
    description:
      'Apesar da relativa juventude, Artanis foi nomeado Hierarca dos Daelaam depois da queda de Aiur. Impelido pela promessa de um futuro melhor, ele espera reconquistar o planeta natal dos protoss e reconstruir a glória da sua civilização.  Artanis vem DE GRAÇA na compra do StarCraft® II: Legacy of the Void™',
    shortDescription:
      'Um Guerreiro resistente, que causa muito dano se o inimigo não tiver como detê-lo.',
    difficulty: 'Médio',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/artanis/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/artanis-8eadd2012d.jpg',
    franchise: 'StarCraft',
    release: '2015-10-27T00:00:00.000Z',
    isNew: false,
    slug: 'artanis',
    trait: {
      name: 'Sobrecarga de Escudo',
      description:
        'Ao receber dano estando com menos de 75% de Vida, Artanis ganha 385 de Escudo por 5 s. Ataques Básicos reduzem a recarga da Sobrecarga de Escudo em 4 s.',
      displayText: 'Ganha um escudo quando é atacado com Vida baixa',
      cooldown: 'Recarga: 24 segundos',
      slug: 'shield-overload',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/artanis/traits/icons/shield-overload_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/artanis/',
    abilities: [
      {
        name: 'Arremetida com Lâmina',
        description:
          'Arremete e causa 57 de dano aos inimigos. Depois, retorna e causa 171 de dano. Cada inimigo atingido reduz a recarga de Sobrecarga de Escudo em 1 segundo. Cada Herói inimigo atingido reduz a recarga em 2 segundos.',
        displayText:
          'Dispara à frente e volta, causando dano aos inimigos pelo caminho',
        vital: 'Mana: 50',
        cooldown: 'Recarga: 10 segundos',
        slug: 'blade-dash',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/artanis/abilities/icons/blade-dash_square.png',
      },
      {
        name: 'Lâminas Duplas',
        description:
          'O próximo ataque básico de Artanis o leva a investir imediatamente a uma curta distância e atacar o inimigo 2 vezes.',
        displayText: 'Investe e desfere dois Ataques Básicos',
        vital: 'Mana: 20',
        cooldown: 'Recarga: 4 segundos',
        slug: 'twin-blades',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/artanis/abilities/icons/twin-blades_square.png',
      },
      {
        name: 'Prisma Fásico',
        description:
          'Dispara um Prisma Fásico que causa 66 de dano ao primeiro Herói atingido e troca Artanis de posição com o alvo. Pode ser usada durante a Arremetida com Lâmina.',
        displayText: 'Troca de posição com um Herói inimigo',
        vital: 'Mana: 50',
        cooldown: 'Recarga: 12 segundos',
        slug: 'phase-prism',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/artanis/abilities/icons/phase-prism_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: 'Pulso de Supressão',
        description:
          'Dispara um pulso da Lança de Adun, atingindo uma grande área, causando 114 de dano e Cegando os inimigos por 4 segundos. Alcance ilimitado.',
        displayText: 'Causa dano e cega inimigos em uma grande área',
        vital: 'Mana: 40',
        cooldown: 'Recarga: 50 segundos',
        slug: 'suppression-pulse',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/artanis/abilities/icons/suppression-pulse_square.png',
      },
      {
        name: 'Feixe Purificador',
        description:
          'Atinge um Herói inimigo com um feixe orbital da Lança de Adun, causando 184 de dano por segundo durante 8 segundos. O raio persegue o alvo. Alcance ilimitado.',
        displayText: 'Persegue um inimigo com um feixe orbital',
        vital: 'Mana: 80',
        cooldown: 'Recarga: 80 segundos',
        slug: 'purifier-beam',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/artanis/abilities/icons/purifier-beam_square.png',
      },
    ],
    expandedRole: {
      name: 'Guerreiro',
      description:
        'Guerreiro Guerreiros poderosos e resistentes capazes de causar estragos. Com potencial de tanqueamento limitado, eles contam com mobilidade adicional, controle coletivo ou capacidade de sobrevivência.',
      slug: 'bruiser',
    },
    stats: {
      damage: 6,
      utility: 6,
      survivability: 8,
      complexity: 5,
    },
    skin: {
      id: 'ArtanisBaseCommon',
      name: {
        en_US: 'Hierarch of the Daelaam',
        es_MX: 'Jerarca de los daelaam',
        pt_BR: 'Hierarca dos Daelaam',
        de_DE: 'Hierarch der Daelaam',
        en_GB: 'Hierarch of the Daelaam',
        es_ES: 'Jerarca de los daelaam',
        fr_FR: 'Hiérarque des Daelaam',
        it_IT: 'Gerarca dei Daelaam',
        pl_PL: 'Hierarcha Daelaamów',
        ru_RU: 'Иерарх дэлаамов',
        ko_KR: '댈람의 신관',
        zh_TW: '達蘭的大主教',
        zh_CN: '达拉姆的大主教',
      },
      description: {
        en_US: 'Hierarch of the Daelaam',
        es_MX: 'Jerarca de los daelaam',
        pt_BR: 'Hierarca dos Daelaam',
        de_DE: 'Hierarch der Daelaam',
        en_GB: 'Hierarch of the Daelaam',
        es_ES: 'Jerarca de los daelaam',
        fr_FR: 'Hiérarque des Daelaam',
        it_IT: 'Gerarca dei Daelaam',
        pl_PL: 'Hierarcha Daelaamów',
        ru_RU: 'Иерарх дэлаамов',
        ko_KR: '댈람의 신관',
        zh_TW: '達蘭的大主教',
        zh_CN: '达拉姆的大主教',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/ArtanisBaseCommon?namespace=hms_80333',
      },
      slug: 'hierarch-of-the-daelaam',
    },
  },
  {
    name: 'Ten. Morales',
    title: 'Médica de Combate',
    role: {
      name: 'Suporte',
      description:
        'Suporte O Suporte concede bônus e outros benefícios aos companheiros.',
      slug: 'support',
    },
    type: {
      name: 'Longo Alcance',
      slug: 'ranged',
    },
    description:
      'Para bons soldados, mais importante que um rifle calibrado, só um médico competente na retaguarda. A Ten. Rosa Morales, uma das primeiras oficiais a participar da invasão da Congregação da Terra Unificada, é uma das melhores.',
    shortDescription:
      'Uma Curandeira forte, que se torna imbatível se for esquecida pelos inimigos.',
    difficulty: 'Médio',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/lt-morales/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/lt-morales-9e661f1cb4.jpg',
    franchise: 'StarCraft',
    release: '2015-10-06T00:00:00.000Z',
    isNew: false,
    slug: 'lt-morales',
    trait: {
      name: 'Reator Caduceu',
      description:
        'Enquanto canaliza Feixe de Cura, a Ten. Morales regenera 2% do máximo de Vida por segundo.',
      displayText: 'Restaura Vida enquanto canaliza Feixe de Cura',
      slug: 'caduceus-reactor',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/lt-morales/traits/icons/caduceus-reactor_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/lt-morales/',
    abilities: [
      {
        name: 'Feixe de Cura',
        description:
          'Cura 172 de Vida por segundo da Tropa ou do Herói aliado selecionado enquanto ele permanecer dentro do alcance. Após deixar de canalizar o Feixe de Cura por 2 s, recupera 6 de Energia por segundo.  Reative para mudar de alvo ou lance em si para cancelar a canalização.',
        displayText: 'Cura aliados ao longo do tempo',
        vital: 'Energia: 6 por segundo',
        slug: 'healing-beam',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/lt-morales/abilities/icons/healing-beam_square.png',
      },
      {
        name: 'Salvaguarda',
        description: 'Concede 30 de Armadura a um Herói aliado por 3 s.',
        displayText: 'Concede Armadura ao alvo',
        cooldown: 'Recarga: 11 segundos',
        slug: 'safeguard',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/lt-morales/abilities/icons/safeguard_square.png',
      },
      {
        name: 'Granada de Deslocamento',
        description:
          'Lança uma granada que pode ser detonada manualmente, repelindo e causando 208 de dano aos inimigos próximos.',
        displayText: 'Causa dano e repele os inimigos',
        cooldown: 'Recarga: 12 segundos',
        slug: 'displacement-grenade',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/lt-morales/abilities/icons/displacement-grenade_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: 'Drone de Esteroides',
        description:
          'Concede 75% de Velocidade de Ataque e 25% de Velocidade de Movimento por 10 s a um Herói aliado.',
        displayText:
          'Concede grande quantidade de velocidade de movimento e ataque',
        cooldown: 'Recarga: 90 segundos',
        slug: 'stim-drone',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/lt-morales/abilities/icons/stim-drone_square.png',
      },
      {
        name: 'Ambunave',
        description:
          'Marca um local para pouso da Ambunave. Até 10 segundos antes da decolagem, aliados podem clicar com o botão direito na Ambunave para entrar.',
        displayText: 'Transporta aliados por longas distâncias',
        cooldown: 'Recarga: 60 segundos',
        slug: 'medivac-dropship',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/lt-morales/abilities/icons/medivac-dropship_square.png',
      },
    ],
    otherAbilities: [
      {
        name: 'Reator Celular',
        description:
          'Consome 30 de Energia para recuperar 40% do máximo de Vida da Ten. Morales ao longo de 4 s. O Reator Caduceu fica desativado durante este efeito.',
        displayText: 'Consome Energia para curar',
        cooldown: 'Recarga: 45 segundos',
        slug: 'cellular-reactor',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/lt-morales/abilities/icons/cellular-reactor_square.png',
      },
      {
        name: 'Detonar Granada de Deslocamento',
        description:
          'Detona a Granada de Deslocamento, repelindo e causando 208 de dano aos inimigos próximos.',
        displayText: 'Causa dano e repele os inimigos',
        slug: 'detonate-displacement-grenade',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/lt-morales/abilities/icons/detonate-displacement-grenade_square.png',
      },
      {
        name: 'Reforços',
        description:
          'Ative para chamar uma Ambunave no seu Salão das Tempestades para seus aliados. Após 10 s, ou ao reativar a habilidade, a Ambunave voará para o local de onde foi lançada para descarregar os passageiros. A recarga é compartilhada com a Ambunave.  Passivo: Reduz a recarga da Ambunave de 60 para 30 s.  Não requer o Talento Ambunave.',
        displayText: 'Ambunave aparece no Salão das Tempestades',
        cooldown: 'Recarga: 30 segundos',
        slug: 'reinforcements',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/lt-morales/abilities/icons/reinforcements_square.png',
      },
    ],
    expandedRole: {
      name: 'Curandeiro',
      description:
        'Curandeiro Amigos para todas as horas. Sempre presentes para manter os aliados vivos e relativamente saudáveis nas lutas em equipe.',
      slug: 'healer',
    },
    stats: {
      damage: 3,
      utility: 9,
      survivability: 4,
      complexity: 5,
    },
    skin: {
      id: 'MedicCommon',
      name: {
        en_US: 'Combat Medic',
        es_MX: 'Médica de combate',
        pt_BR: 'Médica de Combate',
        de_DE: 'Feldsanitäterin',
        en_GB: 'Combat Medic',
        es_ES: 'Médico de combate',
        fr_FR: 'Médic de combat',
        it_IT: 'Medico da campo',
        pl_PL: 'Sanitariuszka Polowa',
        ru_RU: 'Боевой медик',
        ko_KR: '전투 의무관',
        zh_TW: '戰地醫護官',
        zh_CN: '战地医疗兵',
      },
      description: {
        en_US: 'Combat Medic',
        es_MX: 'Médica de combate',
        pt_BR: 'Médica de Combate',
        de_DE: 'Feldsanitäterin',
        en_GB: 'Combat Medic',
        es_ES: 'Médico de combate',
        fr_FR: 'Médic de combat',
        it_IT: 'Medico da campo',
        pl_PL: 'Sanitariuszka Polowa',
        ru_RU: 'Боевой медик',
        ko_KR: '전투 의무관',
        zh_TW: '戰地醫護官',
        zh_CN: '战地医疗兵',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/MedicCommon?namespace=hms_80333',
      },
      slug: 'combat-medic',
    },
  },
  {
    name: 'Rexxar',
    title: 'Campeão da Horda',
    role: {
      name: 'Guerreiro',
      description: 'Guerreiro Defensores e combatentes da linha de frente.',
      slug: 'warrior',
    },
    type: {
      name: 'Longo Alcance',
      slug: 'ranged',
    },
    description:
      'Uma estranha reviravolta do destino levou Rexxar, o meio-ogro, até Orgrimmar, então uma cidade recente. Com seu auxílio, Thrall e a Horda conseguiram proteger sua terra e defendê-la das forças invasoras do Lorde-almirante Daelin Proudmore.',
    shortDescription:
      'Um Guerreiro que, com sua ursa Misha, consegue controlar áreas dos campos de batalha.',
    difficulty: 'Difícil',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/rexxar/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/rexxar-179d4bd71e.jpg',
    franchise: 'Warcraft',
    release: '2015-09-08T00:00:00.000Z',
    isNew: false,
    slug: 'rexxar',
    trait: {
      name: 'Misha, Concentre-se!',
      description:
        'Passivo: Misha ganha 15% de Velocidade de Movimento.   Ordena que Misha ataque um inimigo específico ou vá até um local e espere.  Selecionar Rexxar faz com que Misha vá até onde ele estiver, ganhando 30% de Velocidade de Movimento até chegar ao destino.  Selecionar Misha faz com que ela mantenha a posição atual.',
      displayText: 'Mandar Misha andar ou atacar',
      slug: 'misha-focus',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/rexxar/traits/icons/misha-focus_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/rexxar/',
    abilities: [
      {
        name: 'Remetida Espiritual',
        description:
          'Causa 141 de dano aos inimigos em linha reta, desacelerando-os em 30% por 2 segundos.',
        displayText: 'Lança um gavião que causa dano e desacelera os inimigos',
        vital: 'Mana: 40',
        cooldown: 'Recarga: 7 segundos',
        slug: 'spirit-swoop',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/rexxar/abilities/icons/spirit-swoop_square.png',
      },
      {
        name: 'Misha, Pega!',
        description:
          'Misha investe em linha reta, causando 150 de dano e atordoando os inimigos por 1.25 segundo.',
        displayText:
          'Manda Misha investir contra inimigos, causando dano e atordoando',
        vital: 'Mana: 45',
        cooldown: 'Recarga: 10 segundos',
        slug: 'misha-charge',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/rexxar/abilities/icons/misha-charge_square.png',
      },
      {
        name: 'Curar Ajudante',
        description: 'Cura Misha em 714 de Vida ao longo de 5 segundos.',
        displayText: 'Cura Misha ao longo do tempo',
        vital: 'Mana: 70',
        cooldown: 'Recarga: 10 segundos',
        slug: 'mend-pet',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/rexxar/abilities/icons/mend-pet_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: 'Soltar os Javalis',
        description:
          'Solta uma manada de javalis que rastreia todos os inimigos em uma direção, causando 110 de dano, revelando os inimigos e desacelerando-os em 40% por 5 segundos.',
        displayText:
          'Solta uma manada de javalis para caçar os Heróis inimigos',
        vital: 'Mana: 75',
        cooldown: 'Recarga: 60 segundos',
        slug: 'unleash-the-boars',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/rexxar/abilities/icons/unleash-the-boars_square.png',
      },
      {
        name: 'Ira Bestial',
        description:
          'Aumenta em 200% o dano do Ataque Básico de Misha por 12 segundos.',
        displayText: 'Aumenta os Ataques Básicos de Misha',
        vital: 'Mana: 75',
        cooldown: 'Recarga: 50 segundos',
        slug: 'bestial-wrath',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/rexxar/abilities/icons/bestial-wrath_square.png',
      },
    ],
    expandedRole: {
      name: 'Guerreiro',
      description:
        'Guerreiro Guerreiros poderosos e resistentes capazes de causar estragos. Com potencial de tanqueamento limitado, eles contam com mobilidade adicional, controle coletivo ou capacidade de sobrevivência.',
      slug: 'bruiser',
    },
    stats: {
      damage: 5,
      utility: 8,
      survivability: 7,
      complexity: 6,
    },
    skin: {
      id: 'RexxarBaseCommon',
      name: {
        en_US: 'Champion of the Horde',
        es_MX: 'Campeón de la Horda',
        pt_BR: 'Campeão da Horda',
        de_DE: 'Champion der Horde',
        en_GB: 'Champion of the Horde',
        es_ES: 'Campeón de la Horda',
        fr_FR: 'Champion de la Horde',
        it_IT: "Campione dell'Orda",
        pl_PL: 'Bohater Hordy',
        ru_RU: 'Герой Орды',
        ko_KR: '호드의 용사',
        zh_TW: '部落的勇士',
        zh_CN: '部落的勇士',
      },
      description: {
        en_US: 'Champion of the Horde',
        es_MX: 'Campeón de la Horda',
        pt_BR: 'Campeão da Horda',
        de_DE: 'Champion der Horde',
        en_GB: 'Champion of the Horde',
        es_ES: 'Campeón de la Horda',
        fr_FR: 'Champion de la Horde',
        it_IT: "Campione dell'Orda",
        pl_PL: 'Bohater Hordy',
        ru_RU: 'Герой Орды',
        ko_KR: '호드의 용사',
        zh_TW: '部落的勇士',
        zh_CN: '部落的勇士',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/RexxarBaseCommon?namespace=hms_80333',
      },
      slug: 'champion-of-the-horde',
    },
  },
  {
    name: 'Kharazim',
    title: 'Monge Veradani',
    role: {
      name: 'Suporte',
      description:
        'Suporte O Suporte concede bônus e outros benefícios aos companheiros.',
      slug: 'support',
    },
    type: {
      name: 'Corpo a Corpo',
      slug: 'melee',
    },
    description:
      'Para os monges de Ivgorod, os deuses estão em todas as coisas, proferindo sua vontade divina pelos Patriarcas. Com uma fé inabalável, Kharazim leva os decretos dos mil e um deuses aos confins de Santuário e para os reinos além.',
    shortDescription:
      'Um Curandeiro bom para ajudar Heróis corpo a corpo que se jogam no meio da equipe inimiga.',
    difficulty: 'Médio',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/kharazim/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/kharazim-5093da80ab.jpg',
    franchise: 'Diablo',
    release: '2015-08-18T00:00:00.000Z',
    isNew: false,
    slug: 'kharazim',
    trait: {
      name: 'Escolha sua Especialização',
      description:
        'Escolha entre Transcendência, Punhos de Ferro e Intuição no painel de Talentos.',
      displayText: 'Escolha uma Especialização',
      slug: 'pick-your-trait',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/kharazim/traits/icons/pick-your-trait_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/kharazim/',
    abilities: [
      {
        name: 'Arremetida Radiante',
        description:
          'Salta até uma unidade aliada ou inimiga. Inimigos são atingidos imediatamente por um Ataque Básico.  Acumula até 2 cargas.',
        displayText: 'Salta até um aliado ou inimigo',
        vital: 'Mana: 25',
        cooldown: 'Recarga da carga: 12 segundos',
        slug: 'radiant-dash',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/kharazim/abilities/icons/radiant-dash_square.png',
      },
      {
        name: 'Sopro Divino',
        description:
          'Cura 276 pontos de Vida e aumenta em 15% a Velocidade de Movimento dos Heróis próximos por 3 segundos.',
        displayText:
          'Cura Heróis aliados próximos e concede Velocidade de Movimento',
        vital: 'Mana: 65',
        cooldown: 'Recarga: 10 segundos',
        slug: 'breath-of-heaven',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/kharazim/abilities/icons/breath-of-heaven_square.png',
      },
      {
        name: 'Alcance Mortal',
        description:
          'O próximo Ataque Básico de Kharazim aumenta em 100% sua velocidade e seu alcance de ataque por 2 segundos.',
        displayText: 'Aumenta a Velocidade e o Alcance de Ataque',
        vital: 'Mana: 45',
        cooldown: 'Recarga: 10 segundos',
        slug: 'deadly-reach',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/kharazim/abilities/icons/deadly-reach_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: 'Ofensiva das Sete Estrelas',
        description:
          'Torna-se invulnerável e golpeia 7 vezes ao longo de 2 segundos. Cada golpe atinge o Herói próximo com mais Vida, causando dano equivalente a 7% do máximo de Vida.',
        displayText: 'Torna-se invulnerável e atinge Heróis próximos',
        vital: 'Mana: 77',
        cooldown: 'Recarga: 50 segundos',
        slug: 'seven-sided-strike',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/kharazim/abilities/icons/seven-sided-strike_square.png',
      },
      {
        name: 'Palma Divina',
        description:
          'Protege um Herói aliado da morte, concedendo-lhe uma cura de 1200 se ele receber dano fatal nos próximos 3 segundos.',
        displayText: 'Impede a morte de um aliado',
        vital: 'Mana: 50',
        cooldown: 'Recarga: 50 segundos',
        slug: 'divine-palm',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/kharazim/abilities/icons/divine-palm_square.png',
      },
    ],
    expandedRole: {
      name: 'Curandeiro',
      description:
        'Curandeiro Amigos para todas as horas. Sempre presentes para manter os aliados vivos e relativamente saudáveis nas lutas em equipe.',
      slug: 'healer',
    },
    stats: {
      damage: 4,
      utility: 9,
      survivability: 7,
      complexity: 4,
    },
    skin: {
      id: 'MonkCommon',
      name: {
        en_US: 'Veradani Monk',
        es_MX: 'Monje veradani',
        pt_BR: 'Monge Veradani',
        de_DE: 'Mönch der Veradani',
        en_GB: 'Veradani Monk',
        es_ES: 'Monje veradani',
        fr_FR: 'Moine veradani',
        it_IT: 'Monaco Veradani',
        pl_PL: 'Mnich Veradani',
        ru_RU: 'Монах верадани',
        ko_KR: '베라다니의 수도사',
        zh_TW: '梵羅達尼的武僧',
        zh_CN: '梵罗达尼武僧',
      },
      description: {
        en_US: 'Veradani Monk',
        es_MX: 'Monje veradani',
        pt_BR: 'Monge Veradani',
        de_DE: 'Mönch der Veradani',
        en_GB: 'Veradani Monk',
        es_ES: 'Monje veradani',
        fr_FR: 'Moine veradani',
        it_IT: 'Monaco Veradani',
        pl_PL: 'Mnich Veradani',
        ru_RU: 'Монах верадани',
        ko_KR: '베라다니의 수도사',
        zh_TW: '梵羅達尼的武僧',
        zh_CN: '梵罗达尼武僧',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/MonkCommon?namespace=hms_80333',
      },
      slug: 'veradani-monk',
    },
  },
  {
    name: 'Leoric',
    title: 'O Rei Esqueleto',
    role: {
      name: 'Guerreiro',
      description: 'Guerreiro Defensores e combatentes da linha de frente.',
      slug: 'warrior',
    },
    type: {
      name: 'Corpo a Corpo',
      slug: 'melee',
    },
    description:
      'Loucura. Traição. Morte. Esse é o legado que Leoric, o Rei Negro, deixou em seu reinado. Levado à loucura pelo espírito de Diablo, Leoric causou sofrimentos inauditos ao seu reino. Mesmo após a morte, o Rei Esqueleto não encontrou redenção.',
    shortDescription:
      'Um Guerreiro que causa muito dano a equipes que tenham Heróis com muita Vida.',
    difficulty: 'Fácil',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/leoric/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/leoric-03bacce460.jpg',
    franchise: 'Diablo',
    release: '2015-07-21T00:00:00.000Z',
    isNew: false,
    slug: 'leoric',
    trait: {
      name: 'Imorredouro',
      description:
        'Leoric vira um espírito ao morrer e renasce quando recupera toda a Vida. Leoric não causa dano enquanto estiver morto.  Fúria do Rei Ossada  Os primeiros dois Ataques Básicos são cutiladas que causam 100% do dano, e o terceiro Ataque Básico causa 200% de dano a um só alvo.',
      displayText:
        'Ao morrer, Leoric vira um espírito para assombrar os inimigos',
      slug: 'undying',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/leoric/traits/icons/undying_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/leoric/',
    abilities: [
      {
        name: 'Golpe do Esqueleto',
        description:
          'Leoric golpeia com a maça, causando 150 de dano e desacelerando os inimigos em 40% por 2.5 s. Se um Herói inimigo for atingido, diminui em 50% a recarga e o custo de Mana. Plebe!',
        displayText: 'Causa dano e desacelera os inimigos',
        vital: 'Mana: 70',
        cooldown: 'Recarga: 12 segundos',
        slug: 'skeletal-swing',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/leoric/abilities/icons/skeletal-swing_square.png',
      },
      {
        name: 'Drenar Esperança',
        description:
          'Agarra a alma de um Herói inimigo, causando dano equivalente a até 20% do máximo de Vida dele e curando até 20% do máximo de Vida de Leoric enquanto ficarem perto um do outro, ao longo de 3 s. Reduz a Velocidade de Movimento de Leoric em 20% enquanto a habilidade está ativa.',
        displayText: 'Drena Vida de um Herói inimigo quando está perto dele',
        vital: 'Mana: 60',
        cooldown: 'Recarga: 10 segundos',
        slug: 'drain-hope',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/leoric/abilities/icons/drain-hope_square.png',
      },
      {
        name: 'Passo do Espectro',
        description:
          'O espírito de Leoric se separa do corpo, tornando-se Irrefreável e ganhando até 50% de Velocidade de Movimento ao longo de 2.5 s. Quando o Passo do Espectro termina, o corpo dele salta até o espírito.',
        displayText:
          'O espírito de Leoric se separa do corpo para mover-se livremente',
        vital: 'Mana: 50',
        cooldown: 'Recarga: 14 segundos',
        slug: 'wraith-walk',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/leoric/abilities/icons/wraith-walk_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: 'Sepultar',
        description: 'Cria uma tumba intransponível por 4 s.',
        displayText: 'Empareda uma área',
        vital: 'Mana: 90',
        cooldown: 'Recarga: 50 segundos',
        slug: 'entomb',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/leoric/abilities/icons/entomb_square.png',
      },
      {
        name: 'Marcha do Rei Negro',
        description:
          'Leoric avança e fica Irrefreável, golpeando com a maça 3 vezes. O inimigos atingidos recebem 250 de dano, e a cada Herói atingido Leoric é curado em 12% do seu máximo de Vida.',
        displayText:
          'Leoric marcha à frente, curando-se e causando dano aos inimigos',
        vital: 'Mana: 75',
        cooldown: 'Recarga: 50 segundos',
        slug: 'march-of-the-black-king',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/leoric/abilities/icons/march-of-the-black-king_square.png',
      },
    ],
    otherAbilities: [
      {
        name: 'Golpe Macabro',
        description: 'Desacelera os inimigos em 40% por 2.5 s.',
        cooldown: 'Recarga: 8 segundos',
        slug: 'ghastly-swing',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/leoric/abilities/icons/ghastly-swing_square.png',
      },
      {
        name: 'Drenar Essência',
        description:
          'Arremessa uma corrente que se prende ao primeiro Herói inimigo atingido, curando até 10% do máximo de Vida de Leoric ao longo de 4 s, contanto que ele permaneça perto da vítima.',
        cooldown: 'Recarga: 9 segundos',
        slug: 'drain-essence',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/leoric/abilities/icons/drain-essence_square.png',
      },
      {
        name: 'Mortalha do Rei Morto',
        description:
          'Ative para ficar Protegido por 3 s, anulando todo o dano.',
        displayText: 'Ative para ficar Protegido',
        cooldown: 'Recarga: 30 segundos',
        slug: 'shroud-of-the-dead-king',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/leoric/abilities/icons/shroud-of-the-dead-king_square.png',
      },
    ],
    expandedRole: {
      name: 'Guerreiro',
      description:
        'Guerreiro Guerreiros poderosos e resistentes capazes de causar estragos. Com potencial de tanqueamento limitado, eles contam com mobilidade adicional, controle coletivo ou capacidade de sobrevivência.',
      slug: 'bruiser',
    },
    stats: {
      damage: 4,
      utility: 5,
      survivability: 8,
      complexity: 6,
    },
    skin: {
      id: 'LeoricCommon',
      name: {
        en_US: 'The Skeleton King',
        es_MX: 'El Rey Esqueleto',
        pt_BR: 'O Rei Esqueleto',
        de_DE: 'Der Skelettkönig',
        en_GB: 'The Skeleton King',
        es_ES: 'El Rey Esqueleto',
        fr_FR: 'Le roi squelette',
        it_IT: 'Il Re Scheletro',
        pl_PL: 'Król Szkieletów',
        ru_RU: 'Король-скелет',
        ko_KR: '해골 왕',
        zh_TW: '骷髏王',
        zh_CN: '骷髅王',
      },
      description: {
        en_US: 'The Skeleton King',
        es_MX: 'El Rey Esqueleto',
        pt_BR: 'O Rei Esqueleto',
        de_DE: 'Der Skelettkönig',
        en_GB: 'The Skeleton King',
        es_ES: 'El Rey Esqueleto',
        fr_FR: 'Le roi squelette',
        it_IT: 'Il Re Scheletro',
        pl_PL: 'Król Szkieletów',
        ru_RU: 'Король-скелет',
        ko_KR: '해골 왕',
        zh_TW: '骷髏王',
        zh_CN: '骷髅王',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/LeoricCommon?namespace=hms_80333',
      },
      slug: 'the-skeleton-king',
    },
  },
  {
    name: 'O Açougueiro',
    title: 'Talhador de Carne',
    role: {
      name: 'Assassino',
      description: 'Assassino Matadores de heróis e semeadores de sofrimento.',
      slug: 'assassin',
    },
    type: {
      name: 'Corpo a Corpo',
      slug: 'melee',
    },
    description:
      'Uma cutelada inclemente ecoava pelas paredes da Catedral. À medida que o Príncipe Aidan avançava em suas entranhas, o ruído crescia. Não havia nenhum grito, apenas o som medonho... de novo e de novo.',
    shortDescription:
      'Um Assassino que começa fraco, mas causa muito dano após coletar Carne o suficiente.',
    difficulty: 'Médio',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/the-butcher/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/the-butcher-8871174db0.jpg',
    franchise: 'Diablo',
    release: '2015-06-30T00:00:00.000Z',
    isNew: false,
    slug: 'the-butcher',
    trait: {
      name: 'Carne Fresca',
      description:
        'Ao morrerem, tropas inimigas próximas deixam 1 pedaço de Carne Fresca, e Heróis inimigos, 20. Colete Carne Fresca para ganhar 0.5 de Dano de Ataque por pedaço. O Açougueiro perde 15 pedaços de Carne Fresca ao morrer.  Missão: Acumular 200 pedaços de Carne Fresca.  Recompensa: Ganha mais 125 de Dano de Ataque e 25% de Velocidade de Ataque. Os Heróis continuam deixando 10 pedaços de Carne Fresca, as Tropas não deixam mais Carne Fresca, e a Carne Fresca acumulada não é perdida ao morrer.',
      displayText: 'Aumenta a força ao abater inimigos e coletar sua carne',
      slug: 'fresh-meat',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/the-butcher/traits/icons/fresh-meat_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/the-butcher/',
    abilities: [
      {
        name: 'Jarretar',
        description:
          'Causa 110 de dano e desacelera os inimigos em 50%, decaindo ao longo de 2 s. O próximo Ataque Básico do Açougueiro é desferido imediatamente.',
        displayText: 'Causa dano em área e desacelera os inimigos',
        vital: 'Mana: 40',
        cooldown: 'Recarga: 4 segundos',
        slug: 'hamstring',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/the-butcher/abilities/icons/hamstring_square.png',
      },
      {
        name: 'Marca do Açougueiro',
        description:
          'Causa 37 de dano a um inimigo e o Marca por 4 s. Ataques Básicos contra o alvo Marcado curam o Açougueiro em 75% do dano causado.  Ataques Básicos contra Heróis Marcados curam o dobro e aumentam a duração da Marca em 0,5 s.',
        displayText: 'Marca um inimigo, concedendo Roubo de Vida contra ele',
        vital: 'Mana: 60',
        cooldown: 'Recarga: 14 segundos',
        slug: 'butchers-brand',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/the-butcher/abilities/icons/butchers-brand_square.png',
      },
      {
        name: 'Massacre Implacável',
        description:
          'Investe contra um inimigo, tornando-se Irrefreável e ganhando Velocidade de Movimento. Se o Açougueiro atingir o alvo, este ficará atordoado por 1 s e receberá 119 de dano.',
        displayText: 'Investe contra um inimigo, atordoando e causando dano',
        vital: 'Mana: 50',
        cooldown: 'Recarga: 15 segundos',
        slug: 'ruthless-onslaught',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/the-butcher/abilities/icons/ruthless-onslaught_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: 'Cordeiro no Abatedouro',
        description:
          'Atira um poste que se prende ao Herói inimigo mais próximo após um intervalo de 1 segundo, causando 171 de dano, deixando-o acorrentado e silenciado por 3 segundos.',
        displayText: 'Acorrenta um Herói inimigo a um poste',
        vital: 'Mana: 75',
        cooldown: 'Recarga: 90 segundos',
        slug: 'lamb-to-the-slaughter',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/the-butcher/abilities/icons/lamb-to-the-slaughter_square.png',
      },
      {
        name: 'Estouro da Fornalha',
        description:
          'Após 3 s, chamas explodem ao redor do Açougueiro, causando 500 de dano aos inimigos.  Pode ser lançado durante Massacre Implacável.',
        displayText:
          'Causa dano ao redor do Açougueiro após um curto intervalo',
        vital: 'Mana: 75',
        cooldown: 'Recarga: 60 segundos',
        slug: 'furnace-blast',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/the-butcher/abilities/icons/furnace-blast_square.png',
      },
    ],
    expandedRole: {
      name: 'Assassino Corpo a Corpo',
      description:
        'Assassino Corpo a Corpo Matadores de heróis e semeadores de sofrimento. Especialistas em causar dano elevado a alvos únicos e emboscadas.',
      slug: 'melee-assassin',
    },
    stats: {
      damage: 9,
      utility: 4,
      survivability: 5,
      complexity: 3,
    },
    skin: {
      id: 'ButcherCommon',
      name: {
        en_US: 'Flesh Carver',
        es_MX: 'Troceador de carne',
        pt_BR: 'Talhador de Carne',
        de_DE: 'Fleischschnitzer',
        en_GB: 'Flesh Carver',
        es_ES: 'Descarnador',
        fr_FR: 'Découpeur de chair',
        it_IT: 'Intagliatore di carni',
        pl_PL: 'Wycinacz Mięsa',
        ru_RU: 'Терзатель плоти',
        ko_KR: '고기 해체자',
        zh_TW: '血肉剁切者',
        zh_CN: '血肉雕刻者',
      },
      description: {
        en_US: 'Flesh Carver',
        es_MX: 'Troceador de carne',
        pt_BR: 'Talhador de Carne',
        de_DE: 'Fleischschnitzer',
        en_GB: 'Flesh Carver',
        es_ES: 'Descarnador',
        fr_FR: 'Découpeur de chair',
        it_IT: 'Intagliatore di carni',
        pl_PL: 'Wycinacz Mięsa',
        ru_RU: 'Терзатель плоти',
        ko_KR: '고기 해체자',
        zh_TW: '血肉剁切者',
        zh_CN: '血肉雕刻者',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/ButcherCommon?namespace=hms_80333',
      },
      slug: 'flesh-carver',
    },
  },
  {
    name: 'Johanna',
    title: 'Cruzada de Zakarum',
    role: {
      name: 'Guerreiro',
      description: 'Guerreiro Defensores e combatentes da linha de frente.',
      slug: 'warrior',
    },
    type: {
      name: 'Corpo a Corpo',
      slug: 'melee',
    },
    description:
      'Muitas mulheres que levavam o nome Johanna serviram à Cruzada, e todas dedicaram a vida a procurar uma maneira de purificar sua fé. Johanna carrega esse legado enquanto vasculha o reino de Khanduras em busca de uma estrela cadente.',
    shortDescription:
      'Uma Tanque excelente contra inimigos de Ataque Físico, ótima em eliminar Tropas.',
    difficulty: 'Médio',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/johanna/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/johanna-17b7092e6a.jpg',
    franchise: 'Diablo',
    release: '2015-06-02T00:00:00.000Z',
    isNew: false,
    slug: 'johanna',
    trait: {
      name: 'Pele de Ferro',
      description:
        'Ative para conceder a Johanna um Escudo que absorve até 674 de dano por 4 s. Enquanto o Escudo está ativo, Johanna fica Irrefreável.',
      displayText: 'Fica Irrefreável e ganha um Escudo',
      cooldown: 'Recarga: 20 segundos',
      slug: 'iron-skin',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/johanna/traits/icons/iron-skin_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/johanna/',
    abilities: [
      {
        name: 'Punição',
        description:
          'Dá um passo à frente, causando 113 de dano e desacelerando inimigos em 60%; efeito reduzido progressivamente ao longo de 2 s.',
        displayText: 'Causa dano e desacelera os inimigos',
        vital: 'Mana: 40',
        cooldown: 'Recarga: 8 segundos',
        slug: 'punish',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/johanna/abilities/icons/punish_square.png',
      },
      {
        name: 'Condenar',
        description:
          'Após 1 s, Johanna puxa inimigos próximos na direção dela, atordoando-os por 0.25 s e causando 55 de dano. Causa 200% a mais de dano a Tropas e Mercenários.',
        displayText: 'Atrai e causa dano a inimigos próximos',
        vital: 'Mana: 50',
        cooldown: 'Recarga: 10 segundos',
        slug: 'condemn',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/johanna/abilities/icons/condemn_square.png',
      },
      {
        name: 'Escudo Reluzente',
        description: 'Causa 59 de dano a inimigos e os cega por 1.5 s.',
        displayText: 'Causa dano e cega inimigos em um cone',
        vital: 'Mana: 45',
        cooldown: 'Recarga: 12 segundos',
        slug: 'shield-glare',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/johanna/abilities/icons/shield-glare_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: 'Espada Cadente',
        description:
          'Johanna salta na direção de uma área. Enquanto está no ar, ela pode mudar o local do pouso ao se movimentar.   Após 2 s, Johanna aterrissa, causando 210 de dano aos inimigos próximos. As vítimas são atordoadas por 0.2 s e desaceleradas em 50% por 3 s.',
        displayText:
          'Salta para uma área, causando dano e desacelerando os inimigos',
        vital: 'Mana: 60',
        cooldown: 'Recarga: 50 segundos',
        slug: 'falling-sword',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/johanna/abilities/icons/falling-sword_square.png',
      },
      {
        name: 'Escudo Abençoado',
        description:
          'Causa 114 de dano e atordoa o primeiro inimigo atingindo por 1.5 s. O Escudo Abençoado então salta para 2 inimigos próximos, causando 57 de dano e atordoando-os por 0.75 s.',
        displayText: 'Arremessa um escudo que quica e atordoa',
        vital: 'Mana: 90',
        cooldown: 'Recarga: 60 segundos',
        slug: 'blessed-shield',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/johanna/abilities/icons/blessed-shield_square.png',
      },
    ],
    expandedRole: {
      name: 'Tanque',
      description:
        'Tanque Defensores da linha de frente, capazes de resistir a grandes estragos. Cuidam da proteção dos companheiros mais frágeis.',
      slug: 'tank',
    },
    stats: {
      damage: 3,
      utility: 6,
      survivability: 10,
      complexity: 4,
    },
    skin: {
      id: 'CrusaderCommon',
      name: {
        en_US: 'Crusader of Zakarum',
        es_MX: 'Guerrera divina de Zakarum',
        pt_BR: 'Cruzada de Zakarum',
        de_DE: 'Kreuzritter der Zakarum',
        en_GB: 'Crusader of Zakarum',
        es_ES: 'Cruzada de Zakarum',
        fr_FR: 'Croisée du Zakarum',
        it_IT: 'Crociata di Zakarum',
        pl_PL: 'Krzyżowiec Zakarum',
        ru_RU: 'Крестоносец Закарума',
        ko_KR: '자카룸의 성전사',
        zh_TW: '撒卡蘭姆的聖教軍',
        zh_CN: '萨卡兰姆圣教军',
      },
      description: {
        en_US: 'Crusader of Zakarum',
        es_MX: 'Guerrera divina de Zakarum',
        pt_BR: 'Cruzada de Zakarum',
        de_DE: 'Kreuzritter der Zakarum',
        en_GB: 'Crusader of Zakarum',
        es_ES: 'Cruzada de Zakarum',
        fr_FR: 'Croisée du Zakarum',
        it_IT: 'Crociata di Zakarum',
        pl_PL: 'Krzyżowiec Zakarum',
        ru_RU: 'Крестоносец Закарума',
        ko_KR: '자카룸의 성전사',
        zh_TW: '撒卡蘭姆的聖教軍',
        zh_CN: '萨卡兰姆圣教军',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/CrusaderCommon?namespace=hms_80333',
      },
      slug: 'crusader-of-zakarum',
    },
  },
  {
    name: "Kael'thas",
    title: 'O Rei Sol',
    role: {
      name: 'Assassino',
      description: 'Assassino Matadores de heróis e semeadores de sofrimento.',
      slug: 'assassin',
    },
    type: {
      name: 'Longo Alcance',
      slug: 'ranged',
    },
    description:
      "Como todos os elfos sangrentos, o Príncipe Kael'thas foi transformado pela queda de Quel'thalas. Desesperado para salvar seu povo do vício em magia, ele uniu suas forças à Legião Ardente e agora governa a Bastilha da Tormenta.",
    shortDescription:
      'Um Mago do Fogo que castiga os inimigos que ficarem amontoados.',
    difficulty: 'Difícil',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/kaelthas/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/kaelthas-b9d9a52bb8.jpg',
    franchise: 'Warcraft',
    release: '2015-05-12T00:00:00.000Z',
    isNew: false,
    slug: 'kaelthas',
    trait: {
      name: 'Esferas Verdejantes',
      description:
        "Ative para fortalecer a próxima Habilidade Básica de Kael'thas.",
      displayText: "Fortalece a próxima Habilidade Básica de Kael'thas",
      cooldown: 'Recarga: 6 segundos',
      slug: 'verdant-spheres',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/kaelthas/traits/icons/verdant-spheres_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/kaelthas/',
    abilities: [
      {
        name: 'Golpe Flamejante',
        description:
          'Após 1 segundo, causa 345 de dano numa área.   Esferas Verdejantes aumenta o raio em 50%.',
        displayText: 'Causa dano em uma área',
        vital: 'Mana: 70',
        cooldown: 'Recarga: 7 segundos',
        slug: 'flamestrike',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/kaelthas/abilities/icons/flamestrike_square.png',
      },
      {
        name: 'Bomba Viva',
        description:
          'Causa 126 de dano ao longo de 3 segundos a um inimigo, que então explode e causa 215 de dano a todos os inimigos próximos. Outros Heróis que receberem dano da explosão também ficarão sob efeito de Bomba Viva, mas as explosões secundárias não vão se espalhar.  Esferas Verdejantes faz com que esta habilidade não tenha custo de Mana nem recarga.',
        displayText:
          'Causa dano ao longo do tempo e em seguida forma uma explosão na área ao redor do alvo.',
        vital: 'Mana: 50',
        cooldown: 'Recarga: 10 segundos',
        slug: 'living-bomb',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/kaelthas/abilities/icons/living-bomb_square.png',
      },
      {
        name: 'Lapso Gravitacional',
        description:
          'Atordoa o primeiro inimigo atingido por 1 segundo.   Esferas Verdejantes faz com que Lapso Gravitacional atordoe os 3 primeiros inimigos atingidos e aumente a duração do atordoamento em 50%.',
        displayText: 'Atordoa um inimigo',
        vital: 'Mana: 90',
        cooldown: 'Recarga: 14 segundos',
        slug: 'gravity-lapse',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/kaelthas/abilities/icons/gravity-lapse_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: 'Fênix',
        description:
          'Lança uma Fênix em uma área, causando 78 de dano aos inimigos pelo caminho. A Fênix dura 7 s, causando 78 de dano ao atacar os inimigos e 39 de dano colateral.',
        displayText: 'Evoca uma Fênix para queimar os inimigos',
        vital: 'Mana: 80',
        cooldown: 'Recarga: 60 segundos',
        slug: 'phoenix',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/kaelthas/abilities/icons/phoenix_square.png',
      },
      {
        name: 'Ignimpacto',
        description:
          'Após 1.5 s, lança uma bola de fogo que se move lentamente, causando 810 de dano a um Herói inimigo e 405 de dano aos inimigos próximos.',
        displayText: 'Lança uma imensa bola de fogo contra um inimigo',
        vital: 'Mana: 80',
        cooldown: 'Recarga: 100 segundos',
        slug: 'pyroblast',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/kaelthas/abilities/icons/pyroblast_square.png',
      },
    ],
    expandedRole: {
      name: 'Assassino de Longo Alcance',
      description:
        'Assassino de Longo Alcance Causadores de dano que fazem chover balas, flechas ou feitiços mortíferos sobre os inimigos. Geralmente frágeis, eles se sentem mais seguros mantendo distância dos inimigos.',
      slug: 'ranged-assassin',
    },
    stats: {
      damage: 9,
      utility: 5,
      survivability: 3,
      complexity: 7,
    },
    skin: {
      id: 'KaelthasCommon',
      name: {
        en_US: 'The Sun King',
        es_MX: 'El Rey del Sol',
        pt_BR: 'O Rei Sol',
        de_DE: 'Der Sonnenkönig',
        en_GB: 'The Sun King',
        es_ES: 'El Rey Sol',
        fr_FR: 'Le roi-soleil',
        it_IT: 'Re del Sole',
        pl_PL: 'Słoneczny Król',
        ru_RU: 'Солнечный король',
        ko_KR: '태양왕',
        zh_TW: '太陽之王',
        zh_CN: '太阳之王',
      },
      description: {
        en_US: 'The Sun King',
        es_MX: 'El Rey del Sol',
        pt_BR: 'O Rei Sol',
        de_DE: 'Der Sonnenkönig',
        en_GB: 'The Sun King',
        es_ES: 'El Rey Sol',
        fr_FR: 'Le roi-soleil',
        it_IT: 'Re del Sole',
        pl_PL: 'Słoneczny Król',
        ru_RU: 'Солнечный король',
        ko_KR: '태양왕',
        zh_TW: '太陽之王',
        zh_CN: '太阳之王',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/KaelthasCommon?namespace=hms_80333',
      },
      slug: 'the-sun-king',
    },
  },
  {
    name: 'Sylvana',
    title: 'A Rainha Banshee',
    role: {
      name: 'Especialista',
      description:
        'Especialista Quebradores de regras e mestres do combate diferenciado.',
      slug: 'specialist',
    },
    type: {
      name: 'Longo Alcance',
      slug: 'ranged',
    },
    description:
      'Sylvana Correventos nem sempre foi a Dama Sombria dos Renegados. Em outra vida, ela era general-patrulheira de Luaprata. Isso, no entanto, foi antes de o Cavaleiro da Morte Arthas assassinar a elfa e seu povo, para depois revivê-la como a primeira Banshee.',
    shortDescription:
      'Uma Assassina capaz de desativar Bastilhas e Fortes inimigos.',
    difficulty: 'Médio',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/sylvanas/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/sylvanas-9a0cf3b84f.jpg',
    franchise: 'Warcraft',
    release: '2015-03-24T00:00:00.000Z',
    isNew: false,
    slug: 'sylvanas',
    trait: {
      name: 'Flechas Negras',
      description:
        'Ative para que todos os Ataques Básicos e Habilidades atordoem Tropas, Mercenários normais e Estruturas por 3 s. Dura 10 s.   Maldição da Banshee  Ataques Básicos infectam inimigos com Maldição da Banshee por 3 s, podendo acumular até 3 vezes. Causa 25% a mais de dano contra inimigos com 3 aplicações.',
      displayText:
        'Ataques Básicos aplicam Maldição da Banshee; ative para desabilitar inimigos',
      cooldown: 'Recarga: 40 segundos',
      slug: 'black-arrows',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/sylvanas/traits/icons/black-arrows_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/sylvanas/',
    abilities: [
      {
        name: 'Fogo Devastador',
        description:
          'Dispara até 5 vezes contra o inimigo mais próximo ao longo de 1.5 s, causando 39 de dano. Prioriza Heróis. Abates concluem a recarga.',
        displayText:
          'Dispara flechas no inimigo mais próximo. Abates concluem a recarga.',
        vital: 'Mana: 25',
        cooldown: 'Recarga: 8 segundos',
        slug: 'withering-fire',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/sylvanas/abilities/icons/withering-fire_square.png',
      },
      {
        name: 'Adaga Sombria',
        description:
          'Arremessa uma adaga no inimigo que causa 30 de dano na hora e mais 150 de dano ao longo de 2.5 s. Se Sylvana causar dano ao alvo principal da Adaga Sombria, o efeito se espalhará para todos os inimigos próximos.',
        displayText:
          'Causa dano periódico a um inimigo e se espalha após o acerto',
        vital: 'Mana: 50',
        cooldown: 'Recarga: 11 segundos',
        slug: 'shadow-dagger',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/sylvanas/abilities/icons/shadow-dagger_square.png',
      },
      {
        name: 'Onda Assombrosa',
        description:
          'Lança uma onda de banshees, causando 114 de dano a todos os alvos. Reative para se teleportar para a posição das banshees.',
        displayText: 'Causa dano e permite o teleporte',
        vital: 'Mana: 75',
        cooldown: 'Recarga: 11 segundos',
        slug: 'haunting-wave',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/sylvanas/abilities/icons/haunting-wave_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: 'Seta Plangente',
        description:
          'Dispara uma flecha que pode ser reativada para causar 228 de dano e silenciar os inimigos na área por 2.5 s. A flecha explode automaticamente ao atingir o alcance máximo.',
        displayText: 'Dispara uma flecha que causa dano e silencia',
        vital: 'Mana: 100',
        cooldown: 'Recarga: 90 segundos',
        slug: 'wailing-arrow',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/sylvanas/abilities/icons/wailing-arrow_square.png',
      },
      {
        name: 'Controle Mental',
        description:
          'Após 0.25 s, dispara um projétil que causa Controle Mental no primeiro Herói inimigo atingido. Heróis atingidos são silenciados, desacelerados em 30% e forçados a andar em direção a Sylvana por 1.75 s. ',
        displayText: 'Força um Herói inimigo a andar em direção a Sylvana',
        vital: 'Mana: 75',
        cooldown: 'Recarga: 50 s',
        slug: 'mind-control',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/sylvanas/abilities/icons/mind-control_square.png',
      },
    ],
    otherAbilities: [
      {
        name: 'Possessão',
        description:
          'Ative para forçar uma Tropa inimiga a lutar pela equipe de Sylvana. Catapultas custam 3 cargas. Acumula até 3 cargas.',
        displayText: 'Ative para converter Tropas inimigas',
        cooldown: 'Recarga da carga: 12 segundos',
        slug: 'possession',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/sylvanas/abilities/icons/possession_square.png',
      },
    ],
    expandedRole: {
      name: 'Assassino de Longo Alcance',
      description:
        'Assassino de Longo Alcance Causadores de dano que fazem chover balas, flechas ou feitiços mortíferos sobre os inimigos. Geralmente frágeis, eles se sentem mais seguros mantendo distância dos inimigos.',
      slug: 'ranged-assassin',
    },
    stats: {
      damage: 9,
      utility: 7,
      survivability: 3,
      complexity: 6,
    },
    skin: {
      id: 'SylvanasCommon',
      name: {
        en_US: 'The Banshee Queen',
        es_MX: 'La Reina alma en pena',
        pt_BR: 'A Rainha Banshee',
        de_DE: 'Die Bansheekönigin',
        en_GB: 'The Banshee Queen',
        es_ES: 'La Reina alma en pena',
        fr_FR: 'La reine banshee',
        it_IT: 'Regina Banshee',
        pl_PL: 'Królowa Banshee',
        ru_RU: 'Королева-банши',
        ko_KR: '밴시 여왕',
        zh_TW: '女妖之王',
        zh_CN: '女妖之王',
      },
      description: {
        en_US: 'The Banshee Queen',
        es_MX: 'La Reina alma en pena',
        pt_BR: 'A Rainha Banshee',
        de_DE: 'Die Bansheekönigin',
        en_GB: 'The Banshee Queen',
        es_ES: 'La Reina alma en pena',
        fr_FR: 'La reine banshee',
        it_IT: 'Regina Banshee',
        pl_PL: 'Królowa Banshee',
        ru_RU: 'Королева-банши',
        ko_KR: '밴시 여왕',
        zh_TW: '女妖之王',
        zh_CN: '女妖之王',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/SylvanasCommon?namespace=hms_80333',
      },
      slug: 'the-banshee-queen',
    },
  },
  {
    name: 'Os Vikings Perdidos',
    title: 'Treta Tripla',
    role: {
      name: 'Especialista',
      description:
        'Especialista Quebradores de regras e mestres do combate diferenciado.',
      slug: 'specialist',
    },
    type: {
      name: 'Corpo a Corpo',
      slug: 'melee',
    },
    description:
      'Os Vikings Perdidos estão de volta! Apesar de terem pensado na aposentadoria depois de derrotar o imperador Tomator, havia tão poucos ursos polares para espancar que mergulhar num portal do Nexus parecia a decisão certa. ',
    shortDescription:
      'Três Heróis em um! São capazes de absorver experiências de vários locais ao mesmo tempo.',
    difficulty: 'Muito Difícil',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/the-lost-vikings/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/the-lost-vikings-0d5640dfde.jpg',
    franchise: 'Retro',
    release: '2015-02-10T00:00:00.000Z',
    isNew: false,
    slug: 'the-lost-vikings',
    trait: {
      name: 'Reserva Viking',
      description:
        'Coletar um Globo de Regeneração com um Viking aumenta permanentemente toda a Regeneração de Vida dele em 0.5 por segundo.',
      displayText:
        'Colete Globos de Regeneração para aumentar a Regeneração de Vida',
      slug: 'viking-hoard',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/the-lost-vikings/traits/icons/viking-hoard_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/the-lost-vikings/',
    abilities: [
      {
        name: 'Selecionar Olaf',
        description:
          'Olaf pode investir contra os inimigos e reduzir em 30% suas Velocidades de Movimento por 3 segundos clicando com o botão direito neles. Recarga de 8 segundos.   Olaf ganha Regeneração de Vida aumentada fora de combate por 4 segundos.',
        displayText:
          'Olaf tem bastante vida, regenera rapidamente e investe contra inimigos desacelerados',
        slug: 'select-olaf',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/the-lost-vikings/abilities/icons/select-olaf_square.png',
      },
      {
        name: 'Selecionar Baleog',
        description:
          'Os Ataques Básicos de Baleog causam 50% de dano colateral aos inimigos atrás do alvo atacado.',
        displayText:
          'Baleog causa dano colateral aos inimigos atrás do alvo de seus ataques',
        slug: 'select-baleog',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/the-lost-vikings/abilities/icons/select-baleog_square.png',
      },
      {
        name: 'Selecionar Erik',
        description:
          'Erik se move mais rápido que os outros Vikings e tem o alcance do Ataque Básico aumentado.',
        displayText:
          'Erik se move mais rápido do que os outros Vikings e tem um alcance de ataque maior',
        slug: 'select-erik',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/the-lost-vikings/abilities/icons/select-erik_square.png',
      },
      {
        name: 'Vai, vai, vai!',
        description:
          'Os Vikings ganham 30% de aumento na Velocidade de Movimento por 4 segundos.',
        displayText: 'Ganha 30% de Velocidade de Movimento',
        cooldown: 'Recarga: 30 segundos',
        slug: 'go-go-go',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/the-lost-vikings/abilities/icons/go-go-go_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: 'Ofensiva de Galé!',
        description:
          'Salta em uma Galé Irrefreável que atira nos inimigos próximos, causando 112 de dano por segundo, e pode lançar um morteiro que causa 228 de dano de área. Quanto mais Vikings a bordo, maior a vida do barco. Se ele for destruído pelos inimigos, todos os Vikings ficarão atordoados por 1 s. Dura 15 s.  Requer que todos os Vikings vivos estejam próximos.',
        displayText: 'Embarca em uma galé para atacar os inimigos',
        cooldown: 'Recarga: 90 segundos',
        slug: 'longboat-raid',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/the-lost-vikings/abilities/icons/longboat-raid_square.png',
      },
      {
        name: 'Jogar Novamente!',
        description:
          'Evoca, cura completamente e revive todos os Vikings Perdidos no local-alvo depois de um Viking canalizar por 2 segundos.   Somente um Viking pode tentar a evocação por vez.',
        displayText: 'Revive e evoca os Vikings',
        cooldown: 'Recarga: 100 segundos',
        slug: 'play-again',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/the-lost-vikings/abilities/icons/play-again_square.png',
      },
    ],
    otherAbilities: [
      {
        name: 'Pula!',
        description:
          'Torna todos Vikings invulneráveis e capazes de passar por cima dos inimigos por 1.5 segundo.',
        displayText: 'Concede Invulnerabilidade temporária',
        cooldown: 'Recarga: 30 segundos',
        slug: 'jump',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/the-lost-vikings/abilities/icons/jump_square.png',
      },
      {
        name: 'Esquadrão de Ataque Nórdico',
        description:
          'Enquanto Olaf, Baleog ou Erik estão perto dos outros dois Vikings, os Ataques Básicos causam dano extra equivalente a 1,25% do máximo de Vida a Heróis inimigos.',
        displayText: 'Vikings causam dano extra quando juntos',
        cooldown: 'Recarga: 20 segundos',
        slug: 'nordic-attack-squad',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/the-lost-vikings/abilities/icons/nordic-attack-squad_square.png',
      },
      {
        name: 'Roda da Fortuna!',
        description:
          'Ative para cada Viking causar 85 de dano aos inimigos próximos. Causa 100% de dano extra a Heróis inimigos.',
        displayText: 'Causa dano ao redor de cada Viking',
        cooldown: 'Recarga: 10 segundos',
        slug: 'spin-to-win',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/the-lost-vikings/abilities/icons/spin-to-win_square.png',
      },
      {
        name: 'Virilidade Nórdica!',
        description:
          'Todos os Vikings ganham um escudo com 130 a 260 pontos, ganhando força com cada Viking vivo. Dura 4 segundos.',
        displayText: 'Todos os Vikings ganham um escudo',
        cooldown: 'Recarga: 15 segundos',
        slug: 'norse-force',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/the-lost-vikings/abilities/icons/norse-force_square.png',
      },
      {
        name: 'Suborno Viking',
        description:
          'Tropas inimigas ou Mercenários capturados mortos perto dos Vikings Perdidos concedem aplicações de Suborno. Use 40 aplicações para subornar um Mercenário, derrotando-o instantaneamente. Não funciona com Mercenários de Elite. Máximo de aplicações disponíveis: 200.  Quantidade atual de aplicações de Suborno: 0',
        displayText: 'Mate Tropas para subornar um Mercenário',
        slug: 'viking-bribery',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/the-lost-vikings/abilities/icons/viking-bribery_square.png',
      },
      {
        name: 'Morteiro',
        description:
          'Dispara um morteiro no local alvo, causando 228 de dano em uma grande área.',
        cooldown: 'Recarga: 3 segundos',
        slug: 'mortar',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/the-lost-vikings/abilities/icons/mortar_square.png',
      },
    ],
    expandedRole: {
      name: 'Suporte',
      description:
        'Suporte Deixa os aliados mais fortes e mortíferos. Concedem bônus, aumentos, escudos e habilidades utilitárias para a equipe.',
      slug: 'support',
    },
    stats: {
      damage: 7,
      utility: 5,
      survivability: 6,
      complexity: 10,
    },
    skin: {
      id: 'LostVikingsCommon',
      name: {
        en_US: 'Triple Trouble',
        es_MX: 'Problemas por tres',
        pt_BR: 'Treta Tripla',
        de_DE: 'Ärger hoch drei',
        en_GB: 'Triple Trouble',
        es_ES: 'Triple amenaza',
        fr_FR: 'Trois pour le prix d’un',
        it_IT: 'Triplo guaio',
        pl_PL: 'Potrójne Kłopoty',
        ru_RU: 'Три в одном',
        ko_KR: '답 없는 삼형제',
        zh_TW: '麻煩三人組',
        zh_CN: '麻烦三人组',
      },
      description: {
        en_US: 'Triple Trouble',
        es_MX: 'Problemas por tres',
        pt_BR: 'Treta Tripla',
        de_DE: 'Ärger hoch drei',
        en_GB: 'Triple Trouble',
        es_ES: 'Triple amenaza',
        fr_FR: 'Trois pour le prix d’un',
        it_IT: 'Triplo guaio',
        pl_PL: 'Potrójne Kłopoty',
        ru_RU: 'Три в одном',
        ko_KR: '답 없는 삼형제',
        zh_TW: '麻煩三人組',
        zh_CN: '麻烦三人组',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/LostVikingsCommon?namespace=hms_80333',
      },
      slug: 'triple-trouble',
    },
  },
  {
    name: 'Thrall',
    title: 'Chefe Guerreiro da Horda',
    role: {
      name: 'Assassino',
      description: 'Assassino Matadores de heróis e semeadores de sofrimento.',
      slug: 'assassin',
    },
    type: {
      name: 'Corpo a Corpo',
      slug: 'melee',
    },
    description:
      'Na infância, Thrall foi escravo do cruel Aedelas Pantanegro. Depois de conquistar sua liberdade, ele guiou os outros orcs libertos rumo à terra que seria deles e trabalhou para recuperar antigas tradições. Agora e sempre, ele é o chefe guerreiro da Horda.',
    shortDescription:
      'Um Guerreiro que sabe se virar nas trilhas e nas batalhas.',
    difficulty: 'Fácil',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/thrall/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/thrall-00c3d15512.jpg',
    franchise: 'Warcraft',
    release: '2015-01-13T00:00:00.000Z',
    isNew: false,
    slug: 'thrall',
    trait: {
      name: 'Resiliência do Lobo do Gelo',
      description:
        'Causar dano com habilidades concede 1 aplicação de Resiliência do Lobo do Gelo. Com 5 aplicações, Thrall recupera instantaneamente 223 de Vida.',
      displayText:
        'Ao lançar Habilidades nos inimigos, ganha aplicações que restauram Vida',
      slug: 'frostwolf-resilience',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/thrall/traits/icons/frostwolf-resilience_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/thrall/',
    abilities: [
      {
        name: 'Cadeia de Raios',
        description:
          'Lança um raio num inimigo, causando 162 de dano. O raio então se propaga 3 vezes entre inimigos próximos, causando 81 de dano a cada alvo atingido.',
        displayText: 'Eletrocuta os inimigos com um raio que se propaga',
        vital: 'Mana: 40',
        cooldown: 'Recarga: 7 s',
        slug: 'chain-lightning',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/thrall/abilities/icons/chain-lightning_square.png',
      },
      {
        name: 'Espírito Feral',
        description:
          'Solta um Espírito Feral que causa 153 de dano aos inimigos no caminho e enraíza os Heróis atingidos por 1 s. Cada Herói atingido aumenta a distância percorrida pelo Espírito em 25%.',
        displayText:
          'Solta um lobo espiritual que queima inimigos e enraíza Heróis',
        vital: 'Mana: 60',
        cooldown: 'Recarga: 12 segundos',
        slug: 'feral-spirit',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/thrall/abilities/icons/feral-spirit_square.png',
      },
      {
        name: 'Fúria dos Ventos',
        description:
          'Aumenta a velocidade de movimento de Thrall em 30% por 4 s. Os próximos 3 Ataques Básicos ocorrem 100% mais rápido e geram aplicações de Resiliência do Lobo do Gelo.',
        displayText: 'Aumenta as Velocidades de Movimento e Ataque',
        vital: 'Mana: 60',
        cooldown: 'Recarga: 12 segundos',
        slug: 'windfury',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/thrall/abilities/icons/windfury_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: 'Cisão',
        description:
          'Após 0.5 s, racha uma faixa comprida de terra. Causa 290 de dano e empurra os inimigos para o lado, atordoando-os por 1 s.',
        displayText: 'Causa dano, empurra e atordoa inimigos em uma linha reta',
        vital: 'Mana: 75',
        cooldown: 'Recarga: 70 segundos',
        slug: 'sundering',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/thrall/abilities/icons/sundering_square.png',
      },
      {
        name: 'Terremoto',
        description:
          'Após 0.5 s, evoca um Terremoto fortíssimo que pulsa a cada 4 s. Cada pulso dura 2 s, desacelerando todos os inimigos na área em 50% e causando 50 de dano a Heróis inimigos. Causa 3 pulsos.',
        displayText: 'Desacelera inimigos em uma área abrangente',
        vital: 'Mana: 90',
        cooldown: 'Recarga: 100 segundos',
        slug: 'earthquake',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/thrall/abilities/icons/earthquake_square.png',
      },
    ],
    expandedRole: {
      name: 'Guerreiro',
      description:
        'Guerreiro Guerreiros poderosos e resistentes capazes de causar estragos. Com potencial de tanqueamento limitado, eles contam com mobilidade adicional, controle coletivo ou capacidade de sobrevivência.',
      slug: 'bruiser',
    },
    stats: {
      damage: 8,
      utility: 5,
      survivability: 7,
      complexity: 6,
    },
    skin: {
      id: 'ThrallCommon',
      name: {
        en_US: 'Warchief of the Horde',
        es_MX: 'Jefe de guerra de la Horda',
        pt_BR: 'Chefe Guerreiro da Horda',
        de_DE: 'Kriegshäuptling der Horde',
        en_GB: 'Warchief of the Horde',
        es_ES: 'Jefe de Guerra de la Horda',
        fr_FR: 'Chef de guerre de la Horde',
        it_IT: "Capoguerra dell'Orda",
        pl_PL: 'Wódz Hordy',
        ru_RU: 'Вождь Орды',
        ko_KR: '호드의 대족장',
        zh_TW: '部落的大酋長',
        zh_CN: '部落大酋长',
      },
      description: {
        en_US: 'Warchief of the Horde',
        es_MX: 'Jefe de guerra de la Horda',
        pt_BR: 'Chefe Guerreiro da Horda',
        de_DE: 'Kriegshäuptling der Horde',
        en_GB: 'Warchief of the Horde',
        es_ES: 'Jefe de Guerra de la Horda',
        fr_FR: 'Chef de guerre de la Horde',
        it_IT: "Capoguerra dell'Orda",
        pl_PL: 'Wódz Hordy',
        ru_RU: 'Вождь Орды',
        ko_KR: '호드의 대족장',
        zh_TW: '部落的大酋長',
        zh_CN: '部落大酋长',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/ThrallCommon?namespace=hms_80333',
      },
      slug: 'warchief-of-the-horde',
    },
  },
  {
    name: 'Jaina',
    title: 'Arquimaga',
    role: {
      name: 'Assassino',
      description: 'Assassino Matadores de heróis e semeadores de sofrimento.',
      slug: 'assassin',
    },
    type: {
      name: 'Longo Alcance',
      slug: 'ranged',
    },
    description:
      'Ex-pupila do arquimago Antônidas, Jaina Proudmore liderou os sobreviventes de Lordaeron rumo a Kalimdor e fundou a cidade de Theramore. Agora, ela serve à Aliança como uma voz poderosa lutando pela racionalidade e diplomacia.',
    shortDescription:
      'Uma Maga do Gelo capaz de desacelerar toda a equipe inimiga.',
    difficulty: 'Fácil',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/jaina/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/jaina-7bc66f174a.jpg',
    franchise: 'Warcraft',
    release: '2014-12-02T00:00:00.000Z',
    isNew: false,
    slug: 'jaina',
    trait: {
      name: 'Queimadura de Frio',
      description:
        'As habilidades de Jaina gelam os alvos, desacelerando-os em 25% e aumentando em 50% o dano que recebem das habilidades dela. Dura 4 s.  Missão: Causar 15.000 de Dano de Habilidade a Heróis gelados.  Recompensa: Ganha a habilidade Bloco de Gelo Aprimorado, que permite a Jaina ficar Invulnerável temporariamente.',
      displayText:
        'Habilidades Gelam os alvos, desacelerando-os e fazendo com que recebam mais dano',
      slug: 'frostbite',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/jaina/traits/icons/frostbite_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/jaina/',
    abilities: [
      {
        name: 'Seta de Gelo',
        description: 'Causa 184 de dano e Gela o alvo.',
        displayText: 'Atira uma seta que causa dano e Gela o alvo',
        vital: 'Mana: 30',
        cooldown: 'Recarga: 4 segundos',
        slug: 'frostbolt',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/jaina/abilities/icons/frostbolt_square.png',
      },
      {
        name: 'Nevasca',
        description:
          'Bombardeia uma área com 3 ondas de gelo, causando 142 de dano cada. Inimigos atingidos são Gelados.',
        displayText:
          'Cria uma tempestade de gelo no local-alvo, causando dano e desacelerando inimigos',
        vital: 'Mana: 90',
        cooldown: 'Recarga: 15 segundos',
        slug: 'blizzard',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/jaina/abilities/icons/blizzard_square.png',
      },
      {
        name: 'Cone de Frio',
        description: 'Causa 220 de dano e Gela os alvos.',
        displayText: 'Causa dano numa área cônica e gela os alvos',
        vital: 'Mana: 40',
        cooldown: 'Recarga: 10 segundos',
        slug: 'cone-of-cold',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/jaina/abilities/icons/cone-of-cold_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: 'Anel de Gelo',
        description:
          'Após 1,5 s, cria um Anel de Gelo na área que causa 310 de dano e enraíza os inimigos por 3 s. O anel dura 3 s, gelando todos os inimigos que tocarem nele.',
        displayText: 'Cria um círculo que causa dano e enraíza os inimigos ',
        vital: 'Mana: 70',
        cooldown: 'Recarga: 80 segundos',
        slug: 'ring-of-frost',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/jaina/abilities/icons/ring-of-frost_square.png',
      },
      {
        name: 'Evocar Elemental da Água',
        description:
          'Evoca um Elemental da Água no local selecionado. Os Ataques Básicos do Elemental da Água causam 62 de dano, além de gelar e causar 25% de dano colateral aos inimigos próximos. Reative a habilidade para mudar o alvo do Elemental da Água. Dura 20 s.',
        displayText: 'Evoca um Elemental da Água que gela os inimigos',
        vital: 'Mana: 60',
        cooldown: 'Recarga: 60 segundos',
        slug: 'summon-water-elemental',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/jaina/abilities/icons/summon-water-elemental_square.png',
      },
    ],
    otherAbilities: [
      {
        name: 'Lampejo Gélido',
        description:
          'Ative para se teleportar até um ponto próximo e gelar todos os inimigos próximos.',
        displayText: 'Ative para se teleportar e gelar inimigos próximos',
        cooldown: 'Recarga: 60 segundos',
        slug: 'ice-blink',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/jaina/abilities/icons/ice-blink_square.png',
      },
    ],
    expandedRole: {
      name: 'Assassino de Longo Alcance',
      description:
        'Assassino de Longo Alcance Causadores de dano que fazem chover balas, flechas ou feitiços mortíferos sobre os inimigos. Geralmente frágeis, eles se sentem mais seguros mantendo distância dos inimigos.',
      slug: 'ranged-assassin',
    },
    stats: {
      damage: 10,
      utility: 4,
      survivability: 2,
      complexity: 4,
    },
    skin: {
      id: 'JainaCommon',
      name: {
        en_US: 'Archmage',
        es_MX: 'Archimaga',
        pt_BR: 'Arquimaga',
        de_DE: 'Erzmagierin',
        en_GB: 'Archmage',
        es_ES: 'Archimaga',
        fr_FR: 'Archimage',
        it_IT: 'Arcimaga',
        pl_PL: 'Arcymagini',
        ru_RU: 'Верховный маг',
        ko_KR: '대마법사',
        zh_TW: '大法師',
        zh_CN: '大法师',
      },
      description: {
        en_US: 'Archmage',
        es_MX: 'Archimaga',
        pt_BR: 'Arquimaga',
        de_DE: 'Erzmagierin',
        en_GB: 'Archmage',
        es_ES: 'Archimaga',
        fr_FR: 'Archimage',
        it_IT: 'Arcimaga',
        pl_PL: 'Arcymagini',
        ru_RU: 'Верховный маг',
        ko_KR: '대마법사',
        zh_TW: '大法師',
        zh_CN: '大法师',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/JainaCommon?namespace=hms_80333',
      },
      slug: 'archmage',
    },
  },
  {
    name: 'Azmodan',
    title: 'Senhor do Pecado',
    role: {
      name: 'Especialista',
      description:
        'Especialista Quebradores de regras e mestres do combate diferenciado.',
      slug: 'specialist',
    },
    type: {
      name: 'Longo Alcance',
      slug: 'ranged',
    },
    description:
      'O Senhor do Pecado governa as terras populosas do Inferno, onde se vivenciam as delícias e as aflições mais intensas, as mais profundas depravações. Não satisfeito, Azmodan cobiça o Reino de Santuário.',
    shortDescription: 'Um Evocador que também causa muito dano a distância.',
    difficulty: 'Médio',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/azmodan/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/azmodan-7cb228362a.jpg',
    franchise: 'Diablo',
    release: '2014-10-14T00:00:00.000Z',
    isNew: false,
    slug: 'azmodan',
    trait: {
      name: 'Tenente Demoníaco',
      description:
        'Evoca um Tenente Demoníaco ao lado de qualquer Tropa ou Mercenário aliado ou de um Demônio evocado por Azmodan. O Tenente usará Castigo Demoníaco a cada 7 s, matando instantaneamente uma Tropa inimiga. Dura 20 s.  Pode ser usado enquanto canaliza Todos Queimarão.',
      displayText:
        'Azmodan evoca um Tenente Demoníaco para ajudar Tropas, Mercenários e Evocações',
      cooldown: 'Recarga: 60 segundos',
      slug: 'demon-lieutenant',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/azmodan/traits/icons/demon-lieutenant_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/azmodan/',
    abilities: [
      {
        name: 'Globo da Aniquilação',
        description:
          'Arremessa um globo destruidor, causando 184 de dano com o impacto.  Missão: Acertar um Herói ou matar uma Tropa em até 1.5 s após ser atingida pelo Globo da Aniquilação concede 2 de Aniquilação.  Recompensa: Cada aplicação de Aniquilação aumenta o dano do Globo da Aniquilação em 1, até 400.',
        displayText:
          'Lança um orbe de destruição de longo alcance, causando dano de área',
        vital: 'Mana: 70',
        cooldown: 'Recarga: 10 segundos',
        slug: 'globe-of-annihilation',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/azmodan/abilities/icons/globe-of-annihilation_square.png',
      },
      {
        name: 'Evocar Demônio Guerreiro',
        description:
          'Evoca um Demônio Guerreiro que marcha em frente. Os Guerreiros causam 35 de dano por ataque e 18 de dano aos inimigos próximos a cada segundo. Dura 10 s.  Pode ser usado enquanto canaliza Todos Queimarão.',
        displayText: 'Evoca um Demônio Guerreiro',
        vital: 'Mana: 25',
        cooldown: 'Recarga: 10 segundos',
        slug: 'summon-demon-warrior',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/azmodan/abilities/icons/summon-demon-warrior_square.png',
      },
      {
        name: 'Todos Queimarão',
        description:
          'Canaliza um feixe mortal em um inimigo, causando 128 de dano por segundo por 2.5 s. Se a canalização durar até o fim, causará mais 340 de dano ao alvo.  A Velocidade de Movimento de Azmodan é reduzida em 30% enquanto canaliza.',
        displayText: 'Canaliza um feixe mortal em um inimigo',
        vital: 'Mana: 25',
        cooldown: 'Recarga: 6 segundos',
        slug: 'all-shall-burn',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/azmodan/abilities/icons/all-shall-burn_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: 'Invasão Demoníaca',
        description:
          'Evoca uma chuva de Brutos Demoníacos sobre os inimigos, causando 65 de dano por impacto. Os Brutos causam 42 de dano, têm 750 de Vida e duram até 10 s. Os Brutos explodem quando morrem, causando 97 de dano aos inimigos próximos.  Pode ser usada durante a canalização de Todos Queimarão.',
        displayText: 'Causa dano de área e cria um exército de Brutos',
        vital: 'Mana: 60',
        cooldown: 'Recarga: 90 segundos',
        slug: 'demonic-invasion',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/azmodan/abilities/icons/demonic-invasion_square.png',
      },
      {
        name: 'Maré do Pecado',
        description:
          'Ative para que o próximo Globo da Aniquilação não custe Mana e cause 50% a mais de dano.  Pode ser usada durante a canalização de Todos Queimarão.',
        displayText: 'Potencializa o Globo da Aniquilação',
        vital: 'Mana: 100',
        cooldown: 'Recarga: 20 segundos',
        slug: 'tide-of-sin',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/azmodan/abilities/icons/tide-of-sin_square.png',
      },
    ],
    expandedRole: {
      name: 'Assassino de Longo Alcance',
      description:
        'Assassino de Longo Alcance Causadores de dano que fazem chover balas, flechas ou feitiços mortíferos sobre os inimigos. Geralmente frágeis, eles se sentem mais seguros mantendo distância dos inimigos.',
      slug: 'ranged-assassin',
    },
    stats: {
      damage: 3,
      utility: 6,
      survivability: 7,
      complexity: 5,
    },
    skin: {
      id: 'AzmodanCommon',
      name: {
        en_US: 'Lord of Sin',
        es_MX: 'Señor del pecado',
        pt_BR: 'Senhor do Pecado',
        de_DE: 'Herr der Sünde',
        en_GB: 'Lord of Sin',
        es_ES: 'Señor del Pecado',
        fr_FR: 'Seigneur du Péché',
        it_IT: 'Signore del Peccato',
        pl_PL: 'Władca Grzechu',
        ru_RU: 'Владыка Греха',
        ko_KR: '죄악의 군주',
        zh_TW: '罪惡之王',
        zh_CN: '罪恶之王',
      },
      description: {
        en_US: 'Lord of Sin',
        es_MX: 'Señor del pecado',
        pt_BR: 'Senhor do Pecado',
        de_DE: 'Herr der Sünde',
        en_GB: 'Lord of Sin',
        es_ES: 'Señor del Pecado',
        fr_FR: 'Seigneur du Péché',
        it_IT: 'Signore del Peccato',
        pl_PL: 'Władca Grzechu',
        ru_RU: 'Владыка Греха',
        ko_KR: '죄악의 군주',
        zh_TW: '罪惡之王',
        zh_CN: '罪恶之王',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/AzmodanCommon?namespace=hms_80333',
      },
      slug: 'lord-of-sin',
    },
  },
  {
    name: "Anub'arak",
    title: 'Rei Traidor',
    role: {
      name: 'Guerreiro',
      description: 'Guerreiro Defensores e combatentes da linha de frente.',
      slug: 'warrior',
    },
    type: {
      name: 'Corpo a Corpo',
      slug: 'melee',
    },
    description:
      "Outrora um orgulhoso rei nerubiano, Anub'arak ousou se opor à invasão do Lich Rei. Apesar da sua bravura, ele também sucumbiu à força implacável do Flagelo. Ressuscitado, o Rei Traidor agora é um poderoso instrumento de destruição.",
    shortDescription: 'Um Tanque excelente contra Magos.',
    difficulty: 'Médio',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/anubarak/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/anubarak-76023af959.jpg',
    franchise: 'Warcraft',
    release: '2014-10-07T00:00:00.000Z',
    isNew: false,
    slug: 'anubarak',
    trait: {
      name: 'Hospedeiro de Escaravelho',
      description:
        "Ao usar uma Habilidade, Anub'arak gera um Besouro que dura por 8 s e ataca inimigos próximos, causando 20 de dano.",
      displayText: 'Gera um besouro sempre que lança uma habilidade',
      slug: 'scarab-host',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/anubarak/traits/icons/scarab-host_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/anubarak/',
    abilities: [
      {
        name: 'Empalar',
        description: 'Causa 90 de dano. Atordoa por 1 s.',
        displayText:
          'Dispara uma linha de espinhos que causa dano e atordoa os inimigos',
        vital: 'Mana: 65',
        cooldown: 'Recarga: 12 segundos',
        slug: 'impale',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/anubarak/abilities/icons/impale_square.png',
      },
      {
        name: 'Endurecer Carapaça',
        description:
          'Ganha um Escudo que concede 40 de Armadura Mágica e absorve 340 de dano ao longo de 3 s.',
        displayText: 'Ganha um escudo',
        vital: 'Mana: 25',
        cooldown: 'Recarga: 7 segundos',
        slug: 'harden-carapace',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/anubarak/abilities/icons/harden-carapace_square.png',
      },
      {
        name: 'Investida Subterrânea',
        description:
          'Corre por debaixo do chão até o local escolhido, causando 91 de dano e atordoando brevemente os inimigos em uma pequena área ao emergir. Desacelera as vítimas em 25% por 2.5 s.  Use a habilidade de novo para emergir quando quiser.',
        displayText: 'Entoca-se e investe em uma direção',
        vital: 'Mana: 65',
        cooldown: 'Recarga: 14 segundos',
        slug: 'burrow-charge',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/anubarak/abilities/icons/burrow-charge_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: 'Enxame de Gafanhotos',
        description:
          'Causa 68 de dano por segundo aos inimigos próximos. Cada inimigo atingido restaura 24 de Vida. Dura 6 s.',
        displayText: 'Causa dano aos inimigos enquanto se cura',
        vital: 'Mana: 75',
        cooldown: 'Recarga: 100 segundos',
        slug: 'locust-swarm',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/anubarak/abilities/icons/locust-swarm_square.png',
      },
      {
        name: 'Casulo',
        description:
          'Prende o Herói inimigo em um casulo, impedindo-o de agir e de ser alvejado por 7 segundos. Os aliados do Herói podem atacar o casulo para quebrá-lo antes do tempo.',
        displayText: 'Prende o inimigo em um casulo',
        vital: 'Mana: 70',
        cooldown: 'Recarga: 70 segundos',
        slug: 'cocoon',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/anubarak/abilities/icons/cocoon_square.png',
      },
    ],
    otherAbilities: [
      {
        name: 'Legião de Besouros',
        description:
          'Os Besouros ganham 30 de Armadura Mágica. Gera automaticamente um Besouro a cada 12 s. Pode ser ativada e desativada.',
        displayText: 'Gera Besouros periodicamente',
        vital: '',
        slug: 'legion-of-beetles',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/anubarak/abilities/icons/legion-of-beetles_square.png',
      },
    ],
    expandedRole: {
      name: 'Tanque',
      description:
        'Tanque Defensores da linha de frente, capazes de resistir a grandes estragos. Cuidam da proteção dos companheiros mais frágeis.',
      slug: 'tank',
    },
    stats: {
      damage: 4,
      utility: 6,
      survivability: 7,
      complexity: 5,
    },
    skin: {
      id: 'AnubarakCommon',
      name: {
        en_US: 'Traitor King',
        es_MX: 'Rey traidor',
        pt_BR: 'Rei Traidor',
        de_DE: 'Verräterkönig',
        en_GB: 'Traitor King',
        es_ES: 'Rey Traidor',
        fr_FR: 'Roi traître',
        it_IT: 'Re Traditore',
        pl_PL: 'Zdradziecki Król',
        ru_RU: 'Король-предатель',
        ko_KR: '배신자 왕',
        zh_TW: '逆王',
        zh_CN: '叛变的国王',
      },
      description: {
        en_US: 'Traitor King',
        es_MX: 'Rey traidor',
        pt_BR: 'Rei Traidor',
        de_DE: 'Verräterkönig',
        en_GB: 'Traitor King',
        es_ES: 'Rey Traidor',
        fr_FR: 'Roi traître',
        it_IT: 'Re Traditore',
        pl_PL: 'Zdradziecki Król',
        ru_RU: 'Король-предатель',
        ko_KR: '배신자 왕',
        zh_TW: '逆王',
        zh_CN: '叛变的国王',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/AnubarakCommon?namespace=hms_80333',
      },
      slug: 'traitor-king',
    },
  },
  {
    name: 'Chen',
    title: 'Cervejeiro Lendário',
    role: {
      name: 'Guerreiro',
      description: 'Guerreiro Defensores e combatentes da linha de frente.',
      slug: 'warrior',
    },
    type: {
      name: 'Corpo a Corpo',
      slug: 'melee',
    },
    description:
      'Ser um mestre cervejeiro é ser um explorador, um amante da natureza e, quando se faz necessário, um poderoso guerreiro. Durante anos, Chen Malte do Trovão vagou pelo mundo de Azeroth em busca de ingredientes raros, histórias instigantes e, claro, cerveja boa.',
    shortDescription:
      'Um Guerreiro vigoroso que ganha no cansaço e é resistente a explosões de dano.',
    difficulty: 'Difícil',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/chen/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/chen-2d16ccc6d4.jpg',
    franchise: 'Warcraft',
    release: '2014-09-09T00:00:00.000Z',
    isNew: false,
    slug: 'chen',
    trait: {
      name: 'Cerveja Fortificante',
      description:
        'Chen bebe do barril, recebendo 50 de Cerveja e 180 de Escudo temporário por segundo, até um máximo de 540 enquanto está bebendo. O Escudo persiste por 4 s após parar de beber.',
      displayText: 'Ganha Cerveja e Escudo enquanto bebe',
      cooldown: 'Recarga: 7 segundos',
      slug: 'fortifying-brew',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/chen/traits/icons/fortifying-brew_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/chen/',
    abilities: [
      {
        name: 'Voadora',
        description: 'Chuta o inimigo, causando 120 de dano.',
        displayText: 'Chuta o inimigo alvejado',
        vital: 'Cerveja: 10',
        cooldown: 'Recarga: 5 segundos',
        slug: 'flying-kick',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/chen/abilities/icons/flying-kick_square.png',
      },
      {
        name: 'Pancada de Barril',
        description:
          'Causa 50 de dano e encharca os inimigos de Cerveja por 3 s, desacelerando-os em 10%. Após 1.25 s, a desaceleração aumenta para 40%.  Após ser usada, esta habilidade se torna Baforada de Fogo.  Baforada de Fogo Causa dano e Incendia inimigos encharcados de Cerveja.',
        displayText:
          'Encharca os inimigos em uma área próxima de Cerveja, desacelerando-os',
        vital: 'Cerveja: 30',
        cooldown: 'Recarga: 5 s',
        slug: 'keg-smash',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/chen/abilities/icons/keg-smash_square.png',
      },
      {
        name: 'Cambalear',
        description:
          'O dano recebido ao longo dos próximos 3 s será evitado. Quando o efeito termina, Chen recebe 75% do dano recebido ao longo de 5 s. Este dano não pode ser modificado.',
        displayText:
          'Torna-se imune a dano, depois o converte em dano ao longo do tempo',
        cooldown: 'Recarga: 18 segundos',
        slug: 'stagger',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/chen/abilities/icons/stagger_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: 'Barril Rolante',
        description:
          'Rola dentro de um barril Irrefreável com mais 70% de Velocidade de Movimento e 25 de Armadura, repelindo e causando 59 de dano aos inimigos no caminho. Dura 5 s.',
        displayText: 'Rola por aí num barril e derruba os inimigos',
        cooldown: 'Recarga: 50 segundos',
        slug: 'wandering-keg',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/chen/abilities/icons/wandering-keg_square.png',
      },
      {
        name: 'Tempestade, Terra, Fogo',
        description:
          'Após 1 s, Chen se divide em três espíritos elementais por 12 s, cada um com 70% do máximo de Vida do Chen e uma habilidade exclusiva. A última habilidade lançada por um espírito é potencializada. Se os três espíritos forem mortos, Chen também morrerá.  Tempestade concede um Escudo aos espíritos.  Terra salta em uma área e desacelera os inimigos.  Fogo concede Velocidade de Ataque e dano aos espíritos.',
        displayText: 'Divide-se em três espíritos elementais',
        cooldown: 'Recarga: 120 segundos',
        slug: 'storm-earth-fire',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/chen/abilities/icons/storm-earth-fire_square.png',
      },
    ],
    otherAbilities: [
      {
        name: 'Bafo de Fogo',
        description:
          'Cospe chamas em uma área cônica, causando 85 de dano. Inimigos encharcados de Cerveja são Incendiados, o que causa 165 de dano adicional ao longo de 3 s e adiciona 1.5 s à duração da desaceleração da Pancada de Barril.  Depois de ser usada ou após 6 s, esta habilidade se torna Pancada de Barril.  Pancada de Barril Causa dano e desacelera os inimigos.',
        displayText:
          'Cospe fogo na direção-alvo, causando dano e Incendiando inimigos encharcados',
        vital: 'Cerveja: 10',
        slug: 'breath-of-fire',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/chen/abilities/icons/breath-of-fire_square.png',
      },
      {
        name: 'Fogo',
        description:
          'Aumenta a Velocidade de Ataque e o dano de Ataque Básico dos espíritos em 50% por 5 s.  Se esta for a última habilidade lançada, a Velocidade de Ataque e o dano extra aumentam para 75% e os espíritos ganham 50% de Velocidade de Movimento pela duração da habilidade.',
        displayText: 'Aumenta a Velocidade de Ataque e o dano',
        slug: 'fire',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/chen/abilities/icons/fire_square.png',
      },
      {
        name: 'Terra',
        description:
          'Fogo e Terra saltam para o local-alvo, causando 32 de dano e desacelerando os inimigos em uma área ampla em 70% por 1.5 s.  Se esta for a última habilidade lançada, o dano causado aumenta em 300% e, em vez de desacelerar, o salto enraíza os Heróis inimigos atingidos por 1.75 s.',
        displayText: 'Salta até um local, causando dano e enraizando inimigos',
        slug: 'earth',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/chen/abilities/icons/earth_square.png',
      },
      {
        name: 'Tempestade',
        description:
          'Os espíritos ganham um Escudo de 400 ao longo de 3 s.  Se esta for a última habilidade lançada, o escudo aumenta para 750 sem limite de duração, e a duração de Tempestade, Terra, Fogo aumenta em 5 s.',
        displayText: 'Ganha um Escudo',
        slug: 'storm',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/chen/abilities/icons/storm_square.png',
      },
    ],
    expandedRole: {
      name: 'Guerreiro',
      description:
        'Guerreiro Guerreiros poderosos e resistentes capazes de causar estragos. Com potencial de tanqueamento limitado, eles contam com mobilidade adicional, controle coletivo ou capacidade de sobrevivência.',
      slug: 'bruiser',
    },
    stats: {
      damage: 5,
      utility: 5,
      survivability: 8,
      complexity: 8,
    },
    skin: {
      id: 'ChenCommon',
      name: {
        en_US: 'Legendary Brewmaster',
        es_MX: 'Maestro cervecero legendario',
        pt_BR: 'Cervejeiro Lendário',
        de_DE: 'Legendärer Braumeister',
        en_GB: 'Legendary Brewmaster',
        es_ES: 'Maestro de brebajes legendario',
        fr_FR: 'Maître brasseur légendaire',
        it_IT: 'Mastro Birraio Leggendario',
        pl_PL: 'Legendarny Gorzelnik',
        ru_RU: 'Легендарный хмелевар',
        ko_KR: '전설의 양조사',
        zh_TW: '傳奇釀酒大師',
        zh_CN: '传奇酒仙',
      },
      description: {
        en_US: 'Legendary Brewmaster',
        es_MX: 'Maestro cervecero legendario',
        pt_BR: 'Cervejeiro Lendário',
        de_DE: 'Legendärer Braumeister',
        en_GB: 'Legendary Brewmaster',
        es_ES: 'Maestro de brebajes legendario',
        fr_FR: 'Maître brasseur légendaire',
        it_IT: 'Mastro Birraio Leggendario',
        pl_PL: 'Legendarny Gorzelnik',
        ru_RU: 'Легендарный хмелевар',
        ko_KR: '전설의 양조사',
        zh_TW: '傳奇釀酒大師',
        zh_CN: '传奇酒仙',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/ChenCommon?namespace=hms_80333',
      },
      slug: 'legendary-brewmaster',
    },
  },
  {
    name: 'Rehgar',
    title: 'Xamã da Harmonia Telúrica',
    role: {
      name: 'Suporte',
      description:
        'Suporte O Suporte concede bônus e outros benefícios aos companheiros.',
      slug: 'support',
    },
    type: {
      name: 'Corpo a Corpo',
      slug: 'melee',
    },
    description:
      'Rehgar Fúria da Terra já viu muitos combates, tanto como gladiador quanto como mestre de seu próprio grupo. Agora, após deixar de lado essa vida, ele serve como um simples xamã da Harmonia Telúrica, redimindo-se ao curar as terras de Azeroth.',
    shortDescription:
      'Um Curandeiro versátil que combina muito bem com aliados de combate corpo a corpo.',
    difficulty: 'Médio',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/rehgar/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/rehgar-b00d8aa125.jpg',
    franchise: 'Warcraft',
    release: '2014-07-22T00:00:00.000Z',
    isNew: false,
    slug: 'rehgar',
    trait: {
      name: 'Lobo Fantasma',
      description:
        'Em vez de usar montarias, Rehgar se transforma em um Lobo Fantasma, aumentando a Velocidade de Movimento em 20%. Ataques Básicos na forma de Lobo Fantasma fazem Rehgar avançar no alvo, causando 75% a mais de dano. Causar dano, usar Habilidades e canalizar feitiços cancelam a forma de Lobo Fantasma.',
      displayText: 'Transforma em um Lobo Fantasma',
      slug: 'ghost-wolf',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/rehgar/traits/icons/ghost-wolf_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/rehgar/',
    abilities: [
      {
        name: 'Cura Encadeada',
        description:
          'Lança uma onda de cura que restaura 260 pontos de Vida de um aliado. Em seguida, a onda se propaga para 2 aliados em um raio de 7 m, restaurando 260 pontos de Vida deles. ',
        displayText: 'Cria uma onda de cura que se propaga entre os aliados',
        vital: 'Mana: 55',
        cooldown: 'Recarga: 8 segundos',
        slug: 'chain-heal',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/rehgar/abilities/icons/chain-heal_square.png',
      },
      {
        name: 'Escudo de Raios',
        description:
          'Infunde raios em um aliado, causando 64 de dano por segundo aos inimigos próximos. Dura 5 s.',
        displayText:
          'Imbui o aliado alvo em raios, causando dano aos inimigos próximos',
        vital: 'Mana: 60',
        cooldown: 'Recarga: 8 segundos',
        slug: 'lightning-shield',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/rehgar/abilities/icons/lightning-shield_square.png',
      },
      {
        name: 'Totem de Prisão Terrena',
        description:
          'Cria um totem que desacelera os inimigos próximos em 35%. O totem tem 217 de Vida e dura 8 s.',
        displayText: 'Cria um totem que desacelera os inimigos próximos',
        vital: 'Mana: 50',
        cooldown: 'Recarga: 15 segundos',
        slug: 'earthbind-totem',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/rehgar/abilities/icons/earthbind-totem_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: 'Cura Ancestral',
        description: 'Após 1 s, cura um Herói aliado em 1180 de Vida.',
        displayText: 'Cura consideravelmente um Herói Aliado',
        vital: 'Mana: 80',
        cooldown: 'Recarga: 100 segundos',
        slug: 'ancestral-healing',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/rehgar/abilities/icons/ancestral-healing_square.png',
      },
      {
        name: 'Sede de Sangue',
        description:
          'Dá aos Heróis aliados próximos 40% de Velocidade de Ataque, 35% de Velocidade de Movimento e faz com que sejam curados em 40% do dano de Ataque Básico causado ao alvo principal. Dura 8 s.',
        displayText:
          'Dá aos Heróis aliados Velocidade de Movimento, Velocidade de Ataque e Roubo de Vida',
        vital: 'Mana: 70',
        cooldown: 'Recarga: 90 segundos',
        slug: 'bloodlust',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/rehgar/abilities/icons/bloodlust_square.png',
      },
    ],
    otherAbilities: [
      {
        name: 'Projeção Totêmica',
        description:
          'Transfere instantaneamente o Totem de Prisão Terrena para outro local.',
        displayText:
          'Transfere instantaneamente o Totem de Prisão Terrena para outro local',
        slug: 'totemic-projection',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/rehgar/abilities/icons/totemic-projection_square.png',
      },
      {
        name: 'Lobo Fantasma',
        description: 'Aumenta a Velocidade de Movimento em 20%.',
        displayText: 'Transforma em um Lobo Fantasma',
        cooldown: 'Recarga: 4 segundos',
        slug: 'ghost-wolf',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/rehgar/abilities/icons/ghost-wolf_square.png',
      },
    ],
    expandedRole: {
      name: 'Curandeiro',
      description:
        'Curandeiro Amigos para todas as horas. Sempre presentes para manter os aliados vivos e relativamente saudáveis nas lutas em equipe.',
      slug: 'healer',
    },
    stats: {
      damage: 5,
      utility: 7,
      survivability: 7,
      complexity: 6,
    },
    skin: {
      id: 'RehgarCommon',
      name: {
        en_US: 'Shaman of the Earthen Ring',
        es_MX: 'Chamán del Anillo de la Tierra',
        pt_BR: 'Xamã da Harmonia Telúrica',
        de_DE: 'Schamane des Irdenen Rings',
        en_GB: 'Shaman of the Earthen Ring',
        es_ES: 'Chamán del Anillo de la Tierra',
        fr_FR: 'Chaman du Cercle terrestre',
        it_IT: 'Sciamano del Circolo della Terra',
        pl_PL: 'Szaman Kręgu Ziemi',
        ru_RU: 'Шаман Служителей Земли',
        ko_KR: '대지 고리회 주술사',
        zh_TW: '陶土議會的薩滿',
        zh_CN: '大地之环萨满',
      },
      description: {
        en_US: 'Shaman of the Earthen Ring',
        es_MX: 'Chamán del Anillo de la Tierra',
        pt_BR: 'Xamã da Harmonia Telúrica',
        de_DE: 'Schamane des Irdenen Rings',
        en_GB: 'Shaman of the Earthen Ring',
        es_ES: 'Chamán del Anillo de la Tierra',
        fr_FR: 'Chaman du Cercle terrestre',
        it_IT: 'Sciamano del Circolo della Terra',
        pl_PL: 'Szaman Kręgu Ziemi',
        ru_RU: 'Шаман Служителей Земли',
        ko_KR: '대지 고리회 주술사',
        zh_TW: '陶土議會的薩滿',
        zh_CN: '大地之环萨满',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/RehgarCommon?namespace=hms_80333',
      },
      slug: 'shaman-of-the-earthen-ring',
    },
  },
  {
    name: 'Zagara',
    title: 'Mãe de Casta do Enxame',
    role: {
      name: 'Especialista',
      description:
        'Especialista Quebradores de regras e mestres do combate diferenciado.',
      slug: 'specialist',
    },
    type: {
      name: 'Longo Alcance',
      slug: 'ranged',
    },
    description:
      'Se Kerrigan é a Rainha dos Zergs, Zagara é a mãe da casta. Esperta e tenaz, ela comanda suas tropas no campo de batalha. Enfrente sua prole, mas tome cuidado: se mexer com os filhotes, você vai se ver com a mãe!',
    shortDescription:
      'Uma Evocadora que fornece ampla visão do campo de batalha.',
    difficulty: 'Médio',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/zagara/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/zagara-f7c99db679.jpg',
    franchise: 'StarCraft',
    release: '2014-06-25T00:00:00.000Z',
    isNew: false,
    slug: 'zagara',
    trait: {
      name: 'Tumor Gosmento',
      description:
        'Posiciona um Tumor Gosmento que gera Gosma. Quando está na Gosma, Zagara ganha um aumento de 20% no alcance de ataque, e tanto ela quanto suas crias se movem 20% mais rápido. Tumores duram 240 s e revelam a área próxima enquanto estão ativos.  Acumula até 3 cargas.',
      displayText:
        'Gera gosma, permitindo que Zagara e suas tropas se movimentem mais rápido',
      cooldown: 'Recarga da carga: 18 segundos',
      slug: 'creep-tumor',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/zagara/traits/icons/creep-tumor_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/zagara/',
    abilities: [
      {
        name: 'Barragem de Tatus-bomba',
        description:
          'Lança 1 Tatu-bomba que causa 86 de dano aos inimigos atingidos.  Acumula até 4 cargas.',
        displayText: 'Lança um Tatu-bomba que explode ao encostar nos inimigos',
        vital: 'Mana: 10',
        cooldown: 'Recarga da carga: 3 segundos',
        slug: 'baneling-barrage',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/zagara/abilities/icons/baneling-barrage_square.png',
      },
      {
        name: 'Caçador Assassino',
        description:
          'Evoca uma Hidralisca para atacar um único alvo, causando 71 de dano por segundo. Dura 8 segundos.',
        displayText: 'Lança uma Hidralisca contra o inimigo',
        vital: 'Mana: 75',
        cooldown: 'Recarga: 16 segundos',
        slug: 'hunter-killer',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/zagara/abilities/icons/hunter-killer_square.png',
      },
      {
        name: 'Módulo Infestado',
        description:
          'Bombardeia a área-alvo com um módulo de transporte zerg, causando 140 de dano.   O módulo gera 2 Baratídeos que causam 27 de dano por segundo e duram 8 segundos.',
        displayText:
          'Bombardeia uma área com um Módulo de Transporte Zerg que gera Baratídeos',
        vital: 'Mana: 50',
        cooldown: 'Recarga: 12 segundos',
        slug: 'infested-drop',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/zagara/abilities/icons/infested-drop_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: 'Gorja Devoradora',
        description:
          'Evoca uma Gorja Devoradora que devora os inimigos por 4 segundos. Os inimigos devorados não podem lutar e recebem 94 de dano por segundo.  Pode ser usada em inimigos Irrefreáveis.',
        displayText: 'Devora os inimigos na área',
        vital: 'Mana: 70',
        cooldown: 'Recarga: 80 segundos',
        slug: 'devouring-maw',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/zagara/abilities/icons/devouring-maw_square.png',
      },
      {
        name: 'Rede Nydus',
        description:
          'Evoca um Verme Nydus em qualquer ponto com Gosma onde Zagara tenha visão. Zagara pode entrar em um Verme Nydus e viajar para qualquer outro Verme Nydus se o jogador clicar com o botão direito perto dele. Dentro de um Verme Nydus, Zagara regenera 10% da Vida e do Mana por segundo.  Armazena até 2 cargas. Máximo de 4 Vermes Nydus por vez.  Passivo: A Gosma se espalha 15% mais longe.  Passivo: Quando está sobre a Gosma, cada Ataque Básico reduz todas as recargas de Zagara em 0.4 s.',
        displayText: 'Fortalece a Gosma e permite criar Vermes Nydus',
        vital: 'Mana: 50',
        cooldown: 'Recarga da carga: 120 segundos',
        slug: 'nydus-network',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/zagara/abilities/icons/nydus-network_square.png',
      },
    ],
    expandedRole: {
      name: 'Assassino de Longo Alcance',
      description:
        'Assassino de Longo Alcance Causadores de dano que fazem chover balas, flechas ou feitiços mortíferos sobre os inimigos. Geralmente frágeis, eles se sentem mais seguros mantendo distância dos inimigos.',
      slug: 'ranged-assassin',
    },
    stats: {
      damage: 6,
      utility: 8,
      survivability: 5,
      complexity: 6,
    },
    skin: {
      id: 'ZagaraCommon',
      name: {
        en_US: 'Broodmother of the Swarm',
        es_MX: 'Madre de colonia del Enjambre',
        pt_BR: 'Mãe de Casta do Enxame',
        de_DE: 'Brutmutter des Schwarms',
        en_GB: 'Broodmother of the Swarm',
        es_ES: 'Madre de la prole del Enjambre',
        fr_FR: 'Mère des couvées de l’Essaim',
        it_IT: 'Matriarca dello Sciame',
        pl_PL: 'Matka Szczepu',
        ru_RU: 'Мать стаи',
        ko_KR: '군단의 무리어미',
        zh_TW: '蟲群蟲后',
        zh_CN: '虫群之母',
      },
      description: {
        en_US: 'Broodmother of the Swarm',
        es_MX: 'Madre de colonia del Enjambre',
        pt_BR: 'Mãe de Casta do Enxame',
        de_DE: 'Brutmutter des Schwarms',
        en_GB: 'Broodmother of the Swarm',
        es_ES: 'Madre de la prole del Enjambre',
        fr_FR: 'Mère des couvées de l’Essaim',
        it_IT: 'Matriarca dello Sciame',
        pl_PL: 'Matka Szczepu',
        ru_RU: 'Мать стаи',
        ko_KR: '군단의 무리어미',
        zh_TW: '蟲群蟲后',
        zh_CN: '虫群之母',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/ZagaraCommon?namespace=hms_80333',
      },
      slug: 'broodmother-of-the-swarm',
    },
  },
  {
    name: 'Murquinho',
    title: 'Murloquinho',
    role: {
      name: 'Especialista',
      description:
        'Especialista Quebradores de regras e mestres do combate diferenciado.',
      slug: 'specialist',
    },
    type: {
      name: 'Corpo a Corpo',
      slug: 'melee',
    },
    description:
      'Mrgglglbrlg rmrmgllg mrggggm. Mrrglglgy, mgllglgl mgggrrmgl? MRGGGLGLLM! Mrrggllgggllggll mrrglrlg mrrg mrrg mrrrg.',
    shortDescription:
      'Um projeto de Herói. Murquinho bota Ovos para renascer e voltar rapidamente à batalha.',
    difficulty: 'Difícil',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/murky/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/murky-91faede47b.jpg',
    franchise: 'Warcraft',
    release: '2014-05-22T00:00:00.000Z',
    isNew: false,
    slug: 'murky',
    trait: {
      name: 'Botar Ovo',
      description:
        'Bota um Ovo no local selecionado, revelando a área próxima. Ao morrer, Murquinho renasce no Ovo após 8 s. Murquinho só concede 25% da experiência de um Herói quando é abatido.  Se o Ovo morrer, Murquinho será revelado para os inimigos por 15 s e a habilidade Botar Ovo entrará em recarga. ',
      displayText: 'Bota um Ovo, no qual o Murquinho pode renascer',
      cooldown: 'Recarga: 15 segundos',
      slug: 'spawn-egg',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/murky/traits/icons/spawn-egg_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/murky/',
    abilities: [
      {
        name: 'Visgo',
        description:
          'Causa 86 de dano e aplica o Visgo aos inimigos próximos por 6 s, desacelerando-os em 20%.   Causa 210 de dano a inimigos Visguentos.',
        displayText: 'Solta gosma, causando dano e desacelerando os inimigos',
        cooldown: 'Recarga: 4 segundos',
        slug: 'slime',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/murky/abilities/icons/slime_square.png',
      },
      {
        name: 'Baiacu',
        description:
          'Cospe um Baiacu com 225 de Vida no lugar selecionado. Após 3 s, o peixe explode, causando 410 de dano. Causa 50% a menos de dano a Estruturas.',
        displayText: 'Cospe um peixe que explode após um tempo',
        cooldown: 'Recarga: 15 segundos',
        slug: 'pufferfish',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/murky/abilities/icons/pufferfish_square.png',
      },
      {
        name: 'Bolha de Segurança',
        description:
          'Torna-se invulnerável por 2 s. Enquanto está ativo, o Murquinho não pode atacar nem usar Habilidades.',
        displayText:
          'Torna-se invulnerável, mas não pode atacar nem usar habilidades',
        cooldown: 'Recarga: 14 segundos',
        slug: 'safety-bubble',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/murky/abilities/icons/safety-bubble_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: 'Marcha dos Murlocs',
        description:
          'Após 0.75 s, Murquinho ordena que uma legião de murlocs ataque na direção-alvo, e cada um pula no primeiro Herói ou Estrutura inimiga que encontra. Cada murloc causa 125 de dano e desacelera o alvo em 15% por 5 segundos. Os Murlocs causam 50% de dano a Estruturas.',
        displayText: 'Enxameia os inimigos com Murlocs',
        cooldown: 'Recarga: 110 segundos',
        slug: 'march-of-the-murlocs',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/murky/abilities/icons/march-of-the-murlocs_square.png',
      },
      {
        name: 'Tentáculo do Polvo',
        description:
          'Murquinho fica Irrefreável e atordoa o Herói inimigo selecionado por 3 s enquanto o ataca, causando 1 de dano por segundo.',
        displayText: 'Atordoa e cutuca um Herói inimigo',
        cooldown: 'Recarga: 50 segundos',
        slug: 'octo-grab',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/murky/abilities/icons/octo-grab_square.png',
      },
    ],
    expandedRole: {
      name: 'Assassino Corpo a Corpo',
      description:
        'Assassino Corpo a Corpo Matadores de heróis e semeadores de sofrimento. Especialistas em causar dano elevado a alvos únicos e emboscadas.',
      slug: 'melee-assassin',
    },
    stats: {
      damage: 5,
      utility: 5,
      survivability: 1,
      complexity: 8,
    },
    skin: {
      id: 'MurkyCommon',
      name: {
        en_US: 'Baby Murloc',
        es_MX: 'Bebé múrloc',
        pt_BR: 'Murloquinho',
        de_DE: 'Murlocbaby',
        en_GB: 'Baby Murloc',
        es_ES: 'Bebé múrloc',
        fr_FR: 'Bébé murloc',
        it_IT: 'Piccolo Murloc',
        pl_PL: 'Mały Murlok',
        ru_RU: 'Маленький мурлок',
        ko_KR: '아기 멀록',
        zh_TW: '魚人寶寶',
        zh_CN: '鱼人宝宝',
      },
      description: {
        en_US: 'Baby Murloc',
        es_MX: 'Bebé múrloc',
        pt_BR: 'Murloquinho',
        de_DE: 'Murlocbaby',
        en_GB: 'Baby Murloc',
        es_ES: 'Bebé múrloc',
        fr_FR: 'Bébé murloc',
        it_IT: 'Piccolo Murloc',
        pl_PL: 'Mały Murlok',
        ru_RU: 'Маленький мурлок',
        ko_KR: '아기 멀록',
        zh_TW: '魚人寶寶',
        zh_CN: '鱼人宝宝',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/MurkyCommon?namespace=hms_80333',
      },
      slug: 'baby-murloc',
    },
  },
  {
    name: 'Asaluz',
    title: 'Dragoleta',
    role: {
      name: 'Suporte',
      description:
        'Suporte O Suporte concede bônus e outros benefícios aos companheiros.',
      slug: 'support',
    },
    type: {
      name: 'Longo Alcance',
      slug: 'ranged',
    },
    description:
      'Assim como as outras dragoletas, Asaluz gosta de borboletear pelas florestas do Vale Gris, curar os amigos e fazer uma refeição leve. Aliás, você sabia que uma cabeça humana só pesa cinco quilos? Leve, né?',
    shortDescription:
      'Uma Curandeira que se teleporta até os aliados, ideal para mapas grandes.',
    difficulty: 'Difícil',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/brightwing/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/brightwing-b6b65da4f8.jpg',
    franchise: 'Warcraft',
    release: '2014-04-15T00:00:00.000Z',
    isNew: false,
    slug: 'brightwing',
    trait: {
      name: 'Bruma Calmante',
      description:
        'Ative para remover todos os efeitos de Atordoamento, Enraizamento, Desaceleração e Silêncio de Heróis aliados próximos.  Passivo: Asaluz cura Heróis aliados próximos em 105 a cada 4 s.',
      displayText: 'Remove efeitos incapacitantes de aliados',
      cooldown: 'Recarga: 100 segundos',
      slug: 'soothing-mist',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/brightwing/traits/icons/soothing-mist_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/brightwing/',
    abilities: [
      {
        name: 'Chama Arcana',
        description:
          'Dispara uma chama que causa 75 de dano aos inimigos atingidos e mais 105 de dano aos inimigos atingidos no centro. Ativa instantaneamente a cura passiva da Bruma Calmante quando um Herói é atingido pelo centro da Chama.',
        displayText: 'Dispara uma chama que causa dano',
        vital: 'Mana: 35',
        cooldown: 'Recarga: 6 segundos',
        slug: 'arcane-flare',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/brightwing/abilities/icons/arcane-flare_square.png',
      },
      {
        name: 'Polimorfia',
        description:
          'Polimorfa um alvo por 1.5 s, silenciando-o e reduzindo em 30% a Velocidade de Movimento dele. A vítima não pode atacar enquanto estiver Polimorfada.',
        displayText: 'Desabilita um inimigo',
        vital: 'Mana: 50',
        cooldown: 'Recarga: 12 segundos',
        slug: 'polymorph',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/brightwing/abilities/icons/polymorph_square.png',
      },
      {
        name: 'Pó Feérico',
        description:
          'Aumenta a Velocidade de Movimento do Herói-alvo em 20% e concede 30 de Armadura Mágica por 3 s, reduzindo o Dano Mágico recebido em 30%.',
        displayText:
          'Aumenta a Velocidade de Movimento de um Herói; concede Armadura Mágica',
        vital: 'Mana: 60',
        cooldown: 'Recarga: 10 segundos',
        slug: 'pixie-dust',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/brightwing/abilities/icons/pixie-dust_square.png',
      },
      {
        name: 'Deslocamento Fásico',
        description:
          'Após 2 s, teleporta-se até um Herói aliado e cura 25% do máximo de Vida dele.',
        displayText: 'Teleporta-se até um Herói aliado e o cura',
        cooldown: 'Recarga: 50 segundos',
        slug: 'phase-shift',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/brightwing/abilities/icons/phase-shift_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: 'Cura Lampejante',
        description:
          'Teleporta-se até um aliado próximo. Caso o alvo selecionado seja um Herói, ele será curado em 200 de Vida.  Acumula até 2 cargas.',
        displayText: 'Teleporta até os aliados e os cura',
        vital: 'Mana: 40',
        cooldown: 'Recarga da carga: 9 segundos',
        slug: 'blink-heal',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/brightwing/abilities/icons/blink-heal_square.png',
      },
      {
        name: 'Vento Esmeralda',
        description:
          'Após 0.5 s, cria uma nova de vento que se expande, causando 225 de dano e repelindo os inimigos.',
        displayText: 'Causa dano e empurra inimigos na área',
        vital: 'Mana: 90',
        cooldown: 'Recarga: 50 segundos',
        slug: 'emerald-wind',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/brightwing/abilities/icons/emerald-wind_square.png',
      },
    ],
    expandedRole: {
      name: 'Curandeiro',
      description:
        'Curandeiro Amigos para todas as horas. Sempre presentes para manter os aliados vivos e relativamente saudáveis nas lutas em equipe.',
      slug: 'healer',
    },
    stats: {
      damage: 4,
      utility: 9,
      survivability: 5,
      complexity: 7,
    },
    skin: {
      id: 'BrightwingCommon',
      name: {
        en_US: 'Faerie Dragon',
        es_MX: 'Dragón feérico',
        pt_BR: 'Dragoleta',
        de_DE: 'Feendrache',
        en_GB: 'Faerie Dragon',
        es_ES: 'Dragón feérico',
        fr_FR: 'Dragon féerique',
        it_IT: 'Drago Fatato',
        pl_PL: 'Baśniowy Smok',
        ru_RU: 'Чудесный дракончик',
        ko_KR: '요정용',
        zh_TW: '精靈龍',
        zh_CN: '精灵龙',
      },
      description: {
        en_US: 'Faerie Dragon',
        es_MX: 'Dragón feérico',
        pt_BR: 'Dragoleta',
        de_DE: 'Feendrache',
        en_GB: 'Faerie Dragon',
        es_ES: 'Dragón feérico',
        fr_FR: 'Dragon féerique',
        it_IT: 'Drago Fatato',
        pl_PL: 'Baśniowy Smok',
        ru_RU: 'Чудесный дракончик',
        ko_KR: '요정용',
        zh_TW: '精靈龍',
        zh_CN: '精灵龙',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/BrightwingCommon?namespace=hms_80333',
      },
      slug: 'faerie-dragon',
    },
  },
  {
    name: 'Li Li',
    title: 'Andarilha do Mundo',
    role: {
      name: 'Suporte',
      description:
        'Suporte O Suporte concede bônus e outros benefícios aos companheiros.',
      slug: 'support',
    },
    type: {
      name: 'Longo Alcance',
      slug: 'ranged',
    },
    description:
      'Nascida em Shen-zin Su, a Ilha Errante, Li Li Malte do Trovão levava uma vida tranquila até começar a ler os diários de Chen, seu tio. Isso fez nascer nela um profundo anseio por aventura e exploração. Ela também adora azucrinar aventureiros perto da Meia Colina.',
    shortDescription:
      'Uma Curandeira ótima contra inimigos de Ataque Físico, pois os deixa cegos.',
    difficulty: 'Fácil',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/li-li/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/li-li-bd1dd74d93.jpg',
    franchise: 'Warcraft',
    release: '2014-04-15T00:00:00.000Z',
    isNew: false,
    slug: 'li-li',
    trait: {
      name: 'Pés Velozes',
      description:
        'Ao receber dano, suas Habilidades Básicas recarregam 50% mais rápido e Li Li ganha 10% de Velocidade de Movimento por 1 s.',
      displayText:
        'Ao ser atingida por inimigos, ganha Velocidade de Movimento',
      slug: 'fast-feet',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/li-li/traits/icons/fast-feet_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/li-li/',
    abilities: [
      {
        name: 'Cerveja Restauradora',
        description:
          'Restaura 175 de Vida do aliado com menos Vida (priorizando Heróis) em um raio de 6 m.',
        displayText: 'Cura um aliado próximo',
        vital: 'Mana: 25',
        cooldown: 'Recarga: 4 segundos',
        slug: 'healing-brew',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/li-li/abilities/icons/healing-brew_square.png',
      },
      {
        name: 'Serpente das Nuvens',
        description:
          'Evoca uma Serpente das Nuvens para o Herói aliado. Ela ataca os inimigos próximos a cada segundo, causando 26 de dano por ataque e curando 20 de Vida do aliado. Dura 8 s.',
        displayText: 'Evoca uma serpente para ajudar um aliado',
        vital: 'Mana: 35',
        cooldown: 'Recarga: 11 segundos',
        slug: 'cloud-serpent',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/li-li/abilities/icons/cloud-serpent_square.png',
      },
      {
        name: 'Vento Cegante',
        description:
          'Lança um redemoinho nos 2 inimigos mais próximos (priorizando Heróis). Causa 133 de dano e cega os alvos por 1.5 s, fazendo com que os Ataques Básicos deles não atinjam e nem causem dano.',
        displayText: 'Cega e causa dano aos inimigos',
        vital: 'Mana: 30',
        cooldown: 'Recarga: 12 segundos',
        slug: 'blinding-wind',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/li-li/abilities/icons/blinding-wind_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: 'Jarra de 1.000 Copos',
        description:
          'Canaliza por até 6 s. A cada 0.25 s, aumenta a recarga da Jarra de 1.000 Copos em 2 s, até mais 50 s, e cura 66 de Vida do Herói aliado próximo mais ferido.',
        displayText: 'Cura rapidamente aliados próximos',
        vital: 'Mana: 80',
        cooldown: 'Recarga: 20 segundos',
        slug: 'jug-of-1000-cups',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/li-li/abilities/icons/jug-of-1000-cups_square.png',
      },
      {
        name: 'Dragão de Água',
        description:
          'Li Li canaliza por 2 s, evocando um Dragão de Água que ataca o Herói inimigo mais próximo e todos os inimigos a 12 m ao redor dele, causando 300 de dano e desacelerando-os em 70% por 4 s.',
        displayText:
          'Causa dano e desacelera bastante o Herói inimigo mais próximo',
        vital: 'Mana: 50',
        cooldown: 'Recarga: 45 segundos',
        slug: 'water-dragon',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/li-li/abilities/icons/water-dragon_square.png',
      },
    ],
    otherAbilities: [
      {
        name: 'Escapada Ligeira',
        description:
          'Ative para receber Pés Velozes por 3 s e aumentar o bônus de Velocidade de Movimento em 30% enquanto estiver ativo.  Passivo: Aumenta em 15% o bônus de velocidade de movimento de Pés Velozes.',
        displayText: 'Ative Pés Velozes para ganhar mais velocidade',
        cooldown: 'Recarga: 25 segundos',
        slug: 'safety-sprint',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/li-li/abilities/icons/safety-sprint_square.png',
      },
    ],
    expandedRole: {
      name: 'Curandeiro',
      description:
        'Curandeiro Amigos para todas as horas. Sempre presentes para manter os aliados vivos e relativamente saudáveis nas lutas em equipe.',
      slug: 'healer',
    },
    stats: {
      damage: 3,
      utility: 8,
      survivability: 8,
      complexity: 3,
    },
    skin: {
      id: 'LiLiCommon',
      name: {
        en_US: 'World Wanderer',
        es_MX: 'Trotamundos',
        pt_BR: 'Andarilha do Mundo',
        de_DE: 'Weltenbummlerin',
        en_GB: 'World Wanderer',
        es_ES: 'Aventurera',
        fr_FR: 'Aventurière',
        it_IT: 'Nomade del Mondo',
        pl_PL: 'Obieżyświat',
        ru_RU: 'Путешественница',
        ko_KR: '세계 유랑자',
        zh_TW: '漂泊遊子',
        zh_CN: '世界行者',
      },
      description: {
        en_US: 'World Wanderer',
        es_MX: 'Trotamundos',
        pt_BR: 'Andarilha do Mundo',
        de_DE: 'Weltenbummlerin',
        en_GB: 'World Wanderer',
        es_ES: 'Aventurera',
        fr_FR: 'Aventurière',
        it_IT: 'Nomade del Mondo',
        pl_PL: 'Obieżyświat',
        ru_RU: 'Путешественница',
        ko_KR: '세계 유랑자',
        zh_TW: '漂泊遊子',
        zh_CN: '世界行者',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/LiLiCommon?namespace=hms_80333',
      },
      slug: 'world-wanderer',
    },
  },
  {
    name: 'Tychus',
    title: 'Fora da Lei Famigerado',
    role: {
      name: 'Assassino',
      description: 'Assassino Matadores de heróis e semeadores de sofrimento.',
      slug: 'assassin',
    },
    type: {
      name: 'Longo Alcance',
      slug: 'ranged',
    },
    description:
      'Tychus Findlay é um homem grandão com um ego grande e uma arma maior ainda. Felizmente, é fácil conquistar sua lealdade. Basta lhe pagar uma bebida ou três e fazer uma boa oferta: não há trabalho no universo inteiro que seja perigoso demais para este fora da lei.',
    shortDescription:
      'Um Assassino que dizima inimigos que tenham muitos pontos de Vida.',
    difficulty: 'Médio',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/tychus/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/tychus-c21cafbe45.jpg',
    franchise: 'StarCraft',
    release: '2014-03-18T00:00:00.000Z',
    isNew: false,
    slug: 'tychus',
    trait: {
      name: 'Metranca',
      description:
        'Ative para fazer com que os Ataques Básicos causem dano extra equivalente a 2.5% do máximo de Vida dos Heróis atingidos. Dura 3 s.',
      displayText: 'Ative para aumentar o dano de ataque básico contra Heróis',
      cooldown: 'Recarga: 12 segundos',
      slug: 'minigun',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/tychus/traits/icons/minigun_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/tychus/',
    abilities: [
      {
        name: 'Morticínio',
        description:
          'Causa 552 de dano ao alvo e 276 de dano aos alvos próximos ao longo de 4 s. Reative para escolher outro alvo. É possível se mover e usar habilidades durante a Canalização.',
        displayText:
          'Você ataca um alvo enquanto anda e também atinge os inimigos próximos',
        vital: 'Mana: 60',
        cooldown: 'Recarga: 12 segundos',
        slug: 'overkill',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/tychus/abilities/icons/overkill_square.png',
      },
      {
        name: 'Granada de Fragmentação',
        description:
          'Lança uma granada que causa 256 de dano, repelindo os inimigos.',
        displayText: 'Você atira uma granada, ferindo e repelindo os inimigos',
        vital: 'Mana: 50',
        cooldown: 'Recarga: 10 segundos',
        slug: 'frag-grenade',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/tychus/abilities/icons/frag-grenade_square.png',
      },
      {
        name: 'Mete o Pé e Mete Bala',
        description: 'Investe a uma curta distância.',
        displayText: 'Investe a uma curta distância',
        vital: 'Mana: 50',
        cooldown: 'Recarga: 10 segundos',
        slug: 'run-and-gun',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/tychus/abilities/icons/run-and-gun_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: 'Confiscar Odin',
        description:
          'Convoca um Odin para pilotar. O Odin causa dano aumentado, tem Ataque Básico com alcance 100% maior e usa outras Habilidades. O Odin recebe 25 de Armadura e dura 23 segundos.',
        displayText: 'Convoca um Odin para pilotar',
        vital: 'Mana: 100',
        cooldown: 'Recarga: 100 segundos',
        slug: 'commandeer-odin',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/tychus/abilities/icons/commandeer-odin_square.png',
      },
      {
        name: 'Sonda Laser Drakken',
        description:
          'Convoca uma Sonda Laser para atacar inimigos próximos, causando 142 de dano por segundo. Reative a habilidade para escolher um novo alvo. Dura 22 segundos.',
        displayText: 'Convoca um Laser para atacar inimigos próximos',
        vital: 'Mana: 100',
        cooldown: 'Recarga: 100 segundos',
        slug: 'drakken-laser-drill',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/tychus/abilities/icons/drakken-laser-drill_square.png',
      },
    ],
    otherAbilities: [
      {
        name: 'Aniquilar',
        description:
          'Dispara os canhões do Odin em linha reta, causando 196 de dano a tudo no caminho.',
        displayText: 'Causa dano em linha reta',
        cooldown: 'Recarga: 7 segundos',
        slug: 'annihilate',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/tychus/abilities/icons/annihilate_square.png',
      },
      {
        name: 'Mísseis Ragnarok',
        description:
          'Dispara uma salva de mísseis numa área, causando 132 de dano e reduzindo em 30% a velocidade de movimento dos inimigos durante 2 segundos.',
        displayText: 'Lança uma saraivada de projéteis',
        cooldown: 'Recarga: 7 segundos',
        slug: 'ragnarok-missiles',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/tychus/abilities/icons/ragnarok-missiles_square.png',
      },
      {
        name: 'Propulsores',
        description: 'Investe na direção do alvo.',
        slug: 'thrusters',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/tychus/abilities/icons/thrusters_square.png',
      },
    ],
    expandedRole: {
      name: 'Assassino de Longo Alcance',
      description:
        'Assassino de Longo Alcance Causadores de dano que fazem chover balas, flechas ou feitiços mortíferos sobre os inimigos. Geralmente frágeis, eles se sentem mais seguros mantendo distância dos inimigos.',
      slug: 'ranged-assassin',
    },
    stats: {
      damage: 8,
      utility: 1,
      survivability: 5,
      complexity: 6,
    },
    skin: {
      id: 'TychusCommon',
      name: {
        en_US: 'Notorious Outlaw',
        es_MX: 'Forajido infame',
        pt_BR: 'Fora da Lei Famigerado',
        de_DE: 'Berühmt-berüchtigter Gesetzloser',
        en_GB: 'Notorious Outlaw',
        es_ES: 'Forajido infame',
        fr_FR: 'Hors-la-loi notoire',
        it_IT: 'Famigerato fuorilegge',
        pl_PL: 'Recydywista',
        ru_RU: 'Отъявленный преступник',
        ko_KR: '악명 높은 범죄자',
        zh_TW: '惡名昭彰的罪犯',
        zh_CN: '臭名昭著的罪犯',
      },
      description: {
        en_US: 'Notorious Outlaw',
        es_MX: 'Forajido infame',
        pt_BR: 'Fora da Lei Famigerado',
        de_DE: 'Berühmt-berüchtigter Gesetzloser',
        en_GB: 'Notorious Outlaw',
        es_ES: 'Forajido infame',
        fr_FR: 'Hors-la-loi notoire',
        it_IT: 'Famigerato fuorilegge',
        pl_PL: 'Recydywista',
        ru_RU: 'Отъявленный преступник',
        ko_KR: '악명 높은 범죄자',
        zh_TW: '惡名昭彰的罪犯',
        zh_CN: '臭名昭著的罪犯',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/TychusCommon?namespace=hms_80333',
      },
      slug: 'notorious-outlaw',
    },
  },
  {
    name: 'Abathur',
    title: 'Mestre Evolucionário',
    role: {
      name: 'Especialista',
      description:
        'Especialista Quebradores de regras e mestres do combate diferenciado.',
      slug: 'specialist',
    },
    type: {
      name: 'Corpo a Corpo',
      slug: 'melee',
    },
    description:
      'Abathur, o Mestre Evolucionário do Enxame de Kerrigan, está sempre trabalhando para aprimorar o nível genético dos zergs. Seu ódio pelo caos e pela imperfeição só rivaliza com o seu ódio pelos pronomes.',
    shortDescription:
      'Um Herói diferente, capaz de manipular as batalhas de qualquer lugar do mapa.',
    difficulty: 'Muito Difícil',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/abathur/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/abathur-d1205378ac.jpg',
    franchise: 'StarCraft',
    release: '2014-03-13T00:00:00.000Z',
    isNew: false,
    slug: 'abathur',
    trait: {
      name: 'Variante de Gafanhoto',
      description:
        'A cada 15 s, gera um Gafanhoto que ataca a trilha mais próxima. Gafanhotos duram 16 s, têm 350 de Vida e causam 46 de dano a cada Ataque Básico. Causam mais 25% de dano a Estruturas inimigas.',
      displayText: 'Evoca gafanhotos que atacam na trilha mais próxima',
      cooldown: 'Recarga: 15 segundos',
      slug: 'locust-strain',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/abathur/traits/icons/locust-strain_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/abathur/',
    abilities: [
      {
        name: 'Simbionte',
        description:
          'Cria e coloca um Simbionte em um alvo aliado ou em uma Estrutura. Enquanto ativo, Abathur controla o Simbionte, obtendo novas habilidades. O Simbionte recebe a EXP gerada pela morte de inimigos próximos.',
        displayText: 'Você auxilia um aliado e ganha novas habilidades',
        cooldown: 'Recarga: 4 segundos',
        slug: 'symbiote',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/abathur/abilities/icons/symbiote_square.png',
      },
      {
        name: 'Ninho Tóxico',
        description:
          'Gera uma mina que se arma após um curto período. Causa 153 de dano e revela o inimigo por 4 s. Dura 90 s.  Acumula até 3 cargas.',
        displayText: 'Gera uma mina',
        cooldown: 'Recarga da carga: 10 segundos',
        slug: 'toxic-nest',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/abathur/abilities/icons/toxic-nest_square.png',
      },
      {
        name: 'Túnel Profundo',
        description:
          'Cava um túnel e se desloca rapidamente para um local visível',
        displayText: 'Cava um túnel e se desloca até um determinado local.',
        cooldown: 'Recarga: 30 segundos',
        slug: 'deep-tunnel',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/abathur/abilities/icons/deep-tunnel_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: 'Evolução Final',
        description:
          'Clona o Herói aliado selecionado e controla o clone por 20 s. Abathur aperfeiçoou a clonagem, concedendo ao clone 20% de Poder Mágico, 20% de bônus de Dano de Ataque e 10% de bônus de Velocidade de Movimento. Não é possível usar a Habilidade Heroica do Herói clonado.',
        displayText: 'Clona o Herói aliado alvejado e controla o clone',
        cooldown: 'Recarga: 70 segundos',
        slug: 'ultimate-evolution',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/abathur/abilities/icons/ultimate-evolution_square.png',
      },
      {
        name: 'Evoluir Monstruosidade',
        description:
          'Transforma uma Tropa ou um Gafanhoto aliado em uma Monstruosidade. Quando Tropas inimigas perto da Monstruosidade morrem, ela ganha 2% de Vida e 2% de dano de Ataque Básico, acumulando até 40 vezes. A Monstruosidade pode ser curada pela Carapaça e é capaz de se Entocar e ir para um local visível a cada 80 s.  Usar Simbionte na Monstruosidade permite que Abathur a controle, além de conceder os benefícios normais do Simbionte. Essa habilidade pode ser reativada para lançar automaticamente Simbionte na Monstruosidade.',
        displayText:
          'Uma Tropa ou Gafanhoto se transforma em uma Monstruosidade poderosa',
        cooldown: 'Recarga: 90 segundos',
        slug: 'evolve-monstrosity',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/abathur/abilities/icons/evolve-monstrosity_square.png',
      },
    ],
    expandedRole: {
      name: 'Suporte',
      description:
        'Suporte Deixa os aliados mais fortes e mortíferos. Concedem bônus, aumentos, escudos e habilidades utilitárias para a equipe.',
      slug: 'support',
    },
    stats: {
      damage: 3,
      utility: 7,
      survivability: 1,
      complexity: 9,
    },
    skin: {
      id: 'AbathurCommon',
      name: {
        en_US: 'Evolution Master',
        es_MX: 'Maestro de evolución',
        pt_BR: 'Mestre Evolucionário',
        de_DE: 'Evolutionsmeister',
        en_GB: 'Evolution Master',
        es_ES: 'Maestro de evolución',
        fr_FR: 'Maître des évolutions',
        it_IT: "Maestro dell'evoluzione",
        pl_PL: 'Mistrz Ewolucji',
        ru_RU: 'Мастер эволюции',
        ko_KR: '진화 군주',
        zh_TW: '進化管理者',
        zh_CN: '进化大师',
      },
      description: {
        en_US: 'Evolution Master',
        es_MX: 'Maestro de evolución',
        pt_BR: 'Mestre Evolucionário',
        de_DE: 'Evolutionsmeister',
        en_GB: 'Evolution Master',
        es_ES: 'Maestro de evolución',
        fr_FR: 'Maître des évolutions',
        it_IT: "Maestro dell'evoluzione",
        pl_PL: 'Mistrz Ewolucji',
        ru_RU: 'Мастер эволюции',
        ko_KR: '진화 군주',
        zh_TW: '進化管理者',
        zh_CN: '进化大师',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/AbathurCommon?namespace=hms_80333',
      },
      slug: 'evolution-master',
    },
  },
  {
    name: 'Arthas',
    title: 'O Lich Rei',
    role: {
      name: 'Guerreiro',
      description: 'Guerreiro Defensores e combatentes da linha de frente.',
      slug: 'warrior',
    },
    type: {
      name: 'Corpo a Corpo',
      slug: 'melee',
    },
    description:
      'Outrora príncipe herdeiro de Lordaeron e protegido do lendário paladino Uther, o Arauto da Luz, Arthas foi corrompido pela espada amaldiçoada Gélido Lamento numa tentativa de salvar seu povo. Agora, à frente dos malditos como Lich Rei, todos conhecerão sua ira.',
    shortDescription:
      'Um Tanque muito bom contra inimigos de Ataque Físico corpo a corpo, pois os desacelera.',
    difficulty: 'Médio',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/arthas/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/arthas-8664159a5e.jpg',
    franchise: 'Warcraft',
    release: '2014-03-13T00:00:00.000Z',
    isNew: false,
    slug: 'arthas',
    trait: {
      name: 'Gélido Lamento tem Fome',
      description:
        'Ative para desferir imediatamente o próximo Ataque Básico de Arthas, causando 99 a mais de dano. Restaura 30 de Mana ao causar dano.',
      displayText:
        'Ative para fortalecer o próximo ataque e restaurar Mana ao acertar',
      cooldown: 'Recarga: 10 segundos',
      slug: 'frostmourne-hungers',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/arthas/traits/icons/frostmourne-hungers_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/arthas/',
    abilities: [
      {
        name: 'Espiral da Morte',
        description:
          'Causa 164 de dano ao inimigo.  Pode ser lançada em si mesmo para curar 262 de Vida.',
        displayText: 'Causa dano a um alvo ou cura o Arthas',
        vital: 'Mana: 50',
        cooldown: 'Recarga: 9 segundos',
        slug: 'death-coil',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/arthas/abilities/icons/death-coil_square.png',
      },
      {
        name: 'Impacto Uivante',
        description:
          'Enraíza os inimigos na área por 1.25 segundo e causa 68 de dano.',
        displayText: 'Enraíza e causa dano aos inimigos em uma área',
        vital: 'Mana: 60',
        cooldown: 'Recarga: 10 segundos',
        slug: 'howling-blast',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/arthas/abilities/icons/howling-blast_square.png',
      },
      {
        name: 'Tempestade Congelada',
        description:
          'Causa 40 de dano por segundo aos inimigos próximos e reduz em 10% por segundo a Velocidade de Movimento e a Velocidade de Ataque deles, acumulando até 40%. Os Heróis atingidos também têm a Velocidade de Ataque reduzida em 10% por segundo, acumulando até 40%. Os efeitos de Tempestade Congelada duram 1.5 s.',
        displayText:
          'Causa dano e desacelera inimigos próximos. Sorve Mana enquanto está ativa',
        vital: 'Mana: 13 por segundo',
        cooldown: 'Recarga: 1 segundo',
        slug: 'frozen-tempest',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/arthas/abilities/icons/frozen-tempest_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: 'Exército dos Mortos',
        description:
          'Evoca Carniçais que duram 15 s e causam 20 de dano a cada ataque. Sacrifique os Carniçais para recuperar 267 de Vida.',
        displayText:
          'Ergue carniçais que lutam contra os inimigos e curam o Arthas',
        vital: 'Mana: 80',
        cooldown: 'Recarga: 80 segundos',
        slug: 'army-of-the-dead',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/arthas/abilities/icons/army-of-the-dead_square.png',
      },
      {
        name: 'Evocar Sindragosa',
        description:
          'Causa 230 de dano e desacelera os inimigos em 60% por 4 s. Além disso, desabilita Tropas, Mercenários, Monstros e Estruturas por 20 s.',
        displayText: 'Desativa inimigos e Estruturas',
        vital: 'Mana: 100',
        cooldown: 'Recarga: 100 segundos',
        slug: 'summon-sindragosa',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/arthas/abilities/icons/summon-sindragosa_square.png',
      },
    ],
    expandedRole: {
      name: 'Tanque',
      description:
        'Tanque Defensores da linha de frente, capazes de resistir a grandes estragos. Cuidam da proteção dos companheiros mais frágeis.',
      slug: 'tank',
    },
    stats: {
      damage: 6,
      utility: 5,
      survivability: 8,
      complexity: 4,
    },
    skin: {
      id: 'ArthasCommon',
      name: {
        en_US: 'The Lich King',
        es_MX: 'El Rey Exánime',
        pt_BR: 'O Lich Rei',
        de_DE: 'Der Lichkönig',
        en_GB: 'The Lich King',
        es_ES: 'El Rey Exánime',
        fr_FR: 'Le roi-liche',
        it_IT: 'Re dei Lich',
        pl_PL: 'Król Lisz',
        ru_RU: 'Король-лич',
        ko_KR: '리치 왕',
        zh_TW: '巫妖王',
        zh_CN: '巫妖王',
      },
      description: {
        en_US: 'The Lich King',
        es_MX: 'El Rey Exánime',
        pt_BR: 'O Lich Rei',
        de_DE: 'Der Lichkönig',
        en_GB: 'The Lich King',
        es_ES: 'El Rey Exánime',
        fr_FR: 'Le roi-liche',
        it_IT: 'Re dei Lich',
        pl_PL: 'Król Lisz',
        ru_RU: 'Король-лич',
        ko_KR: '리치 왕',
        zh_TW: '巫妖王',
        zh_CN: '巫妖王',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/ArthasCommon?namespace=hms_80333',
      },
      slug: 'the-lich-king',
    },
  },
  {
    name: 'Diablo',
    title: 'Senhor do Medo',
    role: {
      name: 'Guerreiro',
      description: 'Guerreiro Defensores e combatentes da linha de frente.',
      slug: 'warrior',
    },
    type: {
      name: 'Corpo a Corpo',
      slug: 'melee',
    },
    description:
      "Conhecido na língua antiga como Al'Diabolos, o Mal Supremo do Medo, o senhor demoníaco Diablo busca reivindicar o mundo de Santuário para o Inferno Ardente. Suas vítimas são incontáveis, seus planos, incognoscíveis, e seu sexo... maleável.",
    shortDescription:
      'Um Tanque ousado, capaz de dizimar a equipe inimiga com seu potencial de "tudo ou nada".',
    difficulty: 'Médio',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/diablo/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/diablo-e4f962fbd5.jpg',
    franchise: 'Diablo',
    release: '2014-03-13T00:00:00.000Z',
    isNew: false,
    slug: 'diablo',
    trait: {
      name: 'Pedra Negra das Almas',
      description:
        'Missão repetível: Ganha 10 Almas por Herói abatido e 1 Alma por Tropa morta, até um máximo de 100. Cada Alma aumenta em 0.3% o máximo de Vida de Diablo. Se tiver 100 Almas ao morrer, Diablo ressuscitará após 5 s, mas perderá as 100 Almas.',
      displayText:
        'Colete almas dos inimigos para obter Vida e ressuscitar mais rápido',
      slug: 'black-soulstone',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/diablo/traits/icons/black-soulstone_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/diablo/',
    abilities: [
      {
        name: 'Investida Sombria',
        description:
          'Investe contra um inimigo, repelindo-o, causando 40 de dano e ganhando 15% de Velocidade de Movimento por 2 s. Se o inimigo colidir com o terreno, ficará atordoado por 1 s e receberá mais 130 de dano.',
        displayText: 'Investe contra um inimigo alvejado e o repele',
        vital: 'Mana: 70',
        cooldown: 'Recarga: 13 segundos',
        slug: 'shadow-charge',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/diablo/abilities/icons/shadow-charge_square.png',
      },
      {
        name: 'Impacto de Fogo',
        description:
          'Solta ondas de fogo na direção da área selecionada, causando 12 de dano cada. Ao chegarem ao alcance máximo, elas retornam, causando mais 36 de dano. Diablo se cura em 130% do dano causado a Heróis.',
        displayText: 'Solta ondas de fogo em uma direção',
        vital: 'Mana: 35',
        cooldown: 'Recarga: 8 segundos',
        slug: 'fire-stomp',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/diablo/abilities/icons/fire-stomp_square.png',
      },
      {
        name: 'Subjugar',
        description:
          'Agarra o alvo e o joga para trás, causando 73 de dano e atordoando por 0.25 s.',
        displayText:
          'Agarra o inimigo e o derruba no chão às costas de Diablo, atordoando e causando dano',
        vital: 'Mana: 40',
        cooldown: 'Recarga: 13 s',
        slug: 'overpower',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/diablo/abilities/icons/overpower_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: 'Apocalipse',
        description:
          'Cria uma runa demoníaca sob todos os Heróis inimigos no campo de batalha. Após 1.75 s, as runas explodem, causando 137 de dano e atordoando as vítimas por 1.75 s.',
        displayText: 'Atordoa todos os Heróis inimigos',
        vital: 'Mana: 50',
        cooldown: 'Recarga: 90 segundos',
        slug: 'apocalypse',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/diablo/abilities/icons/apocalypse_square.png',
      },
      {
        name: 'Sopro Elétrico',
        description:
          'Após 0,5 s, fica Irrefreável e canaliza por até 4 s, causando 50 de dano a cada 0,25 s aos inimigos à frente. As vítimas ficam desaceleradas em 4% por 2 s, até um máximo de 40%.   Use o cursor do mouse para controlar a direção do Sopro Elétrico.',
        displayText: 'Causa dano e desacelera os inimigos à frente de Diablo',
        vital: 'Mana: 80',
        cooldown: 'Recarga: 90 segundos',
        slug: 'lightning-breath',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/diablo/abilities/icons/lightning-breath_square.png',
      },
    ],
    expandedRole: {
      name: 'Tanque',
      description:
        'Tanque Defensores da linha de frente, capazes de resistir a grandes estragos. Cuidam da proteção dos companheiros mais frágeis.',
      slug: 'tank',
    },
    stats: {
      damage: 5,
      utility: 7,
      survivability: 9,
      complexity: 5,
    },
    skin: {
      id: 'DiabloCommon',
      name: {
        en_US: 'Lord of Terror',
        es_MX: 'Señor del Terror',
        pt_BR: 'Senhor do Medo',
        de_DE: 'Herr des Schreckens',
        en_GB: 'Lord of Terror',
        es_ES: 'Señor del Terror',
        fr_FR: 'Seigneur de la Terreur',
        it_IT: 'Signore del Terrore',
        pl_PL: 'Władca Grozy',
        ru_RU: 'Владыка Ужаса',
        ko_KR: '공포의 군주',
        zh_TW: '恐懼之王',
        zh_CN: '恐惧之王',
      },
      description: {
        en_US: 'Lord of Terror',
        es_MX: 'Señor del Terror',
        pt_BR: 'Senhor do Medo',
        de_DE: 'Herr des Schreckens',
        en_GB: 'Lord of Terror',
        es_ES: 'Señor del Terror',
        fr_FR: 'Seigneur de la Terreur',
        it_IT: 'Signore del Terrore',
        pl_PL: 'Władca Grozy',
        ru_RU: 'Владыка Ужаса',
        ko_KR: '공포의 군주',
        zh_TW: '恐懼之王',
        zh_CN: '恐惧之王',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/DiabloCommon?namespace=hms_80333',
      },
      slug: 'lord-of-terror',
    },
  },
  {
    name: 'Illidan',
    title: 'O Traidor',
    role: {
      name: 'Assassino',
      description: 'Assassino Matadores de heróis e semeadores de sofrimento.',
      slug: 'assassin',
    },
    type: {
      name: 'Corpo a Corpo',
      slug: 'melee',
    },
    description:
      'Illidan Tempesfúria, o primeiro caçador de demônios, traiu seu povo e criou uma nova Nascente da Eternidade depois da invasão demoníaca a Azeroth. Agora, Illidan é o senhor de Terralém e massacra os heróis despreparados que se aventuram por seu reino.',
    shortDescription:
      'Um Assassino ágil e de dano contínuo, que se destaca com Heróis que o ajudem nas lutas.',
    difficulty: 'Médio',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/illidan/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/illidan-44e4e09a1c.jpg',
    franchise: 'Warcraft',
    release: '2014-03-13T00:00:00.000Z',
    isNew: false,
    slug: 'illidan',
    trait: {
      name: 'Sede do Traidor',
      description:
        'Ataques Básicos curam em 30% do dano causado e reduzem a recarga das Habilidades em 1 segundo.',
      displayText:
        'Os Ataques Básicos curam parte do dano causado e reduzem as recargas das Habilidades',
      slug: 'betrayers-thirst',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/illidan/traits/icons/betrayers-thirst_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/illidan/',
    abilities: [
      {
        name: 'Mergulho',
        description:
          'Mergulha na direção do alvo, causando 66 de dano e saltando para o outro lado.',
        displayText: 'Mergulha e salta para o outro lado do inimigo',
        cooldown: 'Recarga: 6 segundos',
        slug: 'dive',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/illidan/abilities/icons/dive_square.png',
      },
      {
        name: 'Golpe Amplo',
        description:
          'Dispara em direção a um ponto, causando 119 de dano aos inimigos no caminho. Atingir um inimigo aumenta em 35% o dano dos Ataques Básicos de Illidan por 3 s.',
        displayText:
          'Investe e causa dano aos inimigos, e ganha dano de Ataque Básico',
        cooldown: 'Recarga: 8 segundos',
        slug: 'sweeping-strike',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/illidan/abilities/icons/sweeping-strike_square.png',
      },
      {
        name: 'Evasão',
        description:
          'Durante 2.5 segundos, Ataques Básicos de inimigos são evadidos.',
        displayText: 'Você se esquiva dos Ataque Básicos dos inimigos',
        cooldown: 'Recarga: 15 segundos',
        slug: 'evasion',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/illidan/abilities/icons/evasion_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: 'Metamorfose',
        description:
          'Assume a Forma de Demônio no local selecionado, causando 46 de dano na área. Aumenta temporariamente sua Vida máxima em 220 para cada Herói atingido pelo impacto inicial. Dura 18 segundos.',
        displayText: 'Dano de área e aumenta a Vida máxima',
        cooldown: 'Recarga: 120 segundos',
        slug: 'metamorphosis',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/illidan/abilities/icons/metamorphosis_square.png',
      },
      {
        name: 'A Caçada',
        description:
          'Investe contra a unidade alvejada, causando 251 de dano com o impacto e atordoando durante 1 segundo.',
        displayText: 'Investe contra o alvo de uma distância muito grande',
        cooldown: 'Recarga: 100 segundos',
        slug: 'the-hunt',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/illidan/abilities/icons/the-hunt_square.png',
      },
    ],
    expandedRole: {
      name: 'Assassino Corpo a Corpo',
      description:
        'Assassino Corpo a Corpo Matadores de heróis e semeadores de sofrimento. Especialistas em causar dano elevado a alvos únicos e emboscadas.',
      slug: 'melee-assassin',
    },
    stats: {
      damage: 8,
      utility: 3,
      survivability: 6,
      complexity: 8,
    },
    skin: {
      id: 'IllidanCommon',
      name: {
        en_US: 'The Betrayer',
        es_MX: 'El traidor',
        pt_BR: 'O Traidor',
        de_DE: 'Der Verräter',
        en_GB: 'The Betrayer',
        es_ES: 'El Traidor',
        fr_FR: 'Le Traître',
        it_IT: 'Il Traditore',
        pl_PL: 'Zdrajca',
        ru_RU: 'Предатель',
        ko_KR: '배신자',
        zh_TW: '背叛者',
        zh_CN: '背叛者',
      },
      description: {
        en_US: 'The Betrayer',
        es_MX: 'El traidor',
        pt_BR: 'O Traidor',
        de_DE: 'Der Verräter',
        en_GB: 'The Betrayer',
        es_ES: 'El Traidor',
        fr_FR: 'Le Traître',
        it_IT: 'Il Traditore',
        pl_PL: 'Zdrajca',
        ru_RU: 'Предатель',
        ko_KR: '배신자',
        zh_TW: '背叛者',
        zh_CN: '背叛者',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/IllidanCommon?namespace=hms_80333',
      },
      slug: 'the-betrayer',
    },
  },
  {
    name: 'Kerrigan',
    title: 'Rainha das Lâminas',
    role: {
      name: 'Assassino',
      description: 'Assassino Matadores de heróis e semeadores de sofrimento.',
      slug: 'assassin',
    },
    type: {
      name: 'Corpo a Corpo',
      slug: 'melee',
    },
    description:
      'Outrora uma fantasma terrana com habilidades psiônicas formidáveis, Sarah Kerrigan foi traída por seus aliados e transformada na incontrolável Rainha das Lâminas. Livre da corrupção do Sombrio, Kerrigan agora enfrenta uma ameaça capaz de destruir a própria galáxia.',
    shortDescription:
      'Uma Assassina que se joga no meio da equipe inimiga, no melhor estilo "tudo ou nada".',
    difficulty: 'Difícil',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/kerrigan/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/kerrigan-210d55d431.jpg',
    franchise: 'StarCraft',
    release: '2014-03-13T00:00:00.000Z',
    isNew: false,
    slug: 'kerrigan',
    trait: {
      name: 'Assimilação',
      description:
        'Converte 10% do dano causado por Habilidades e Ataques Básicos em um Escudo que dura 6 s. Ganha o dobro de Escudo contra Heróis.  Máximo atual: 1004',
      displayText: 'Recebe um escudo temporário ao atacar inimigos',
      slug: 'assimilation',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/kerrigan/traits/icons/assimilation_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/kerrigan/',
    abilities: [
      {
        name: 'Devastar',
        description:
          'Salta no alvo, causando 130 de dano. Se o alvo morrer dentro de 1.5 s, Kerrigan restaura 1 de carga e recupera 20 de Mana.',
        displayText: 'Salta para perto de um inimigo e causa dano',
        vital: 'Mana: 20',
        cooldown: 'Recarga da carga: 8 segundos',
        slug: 'ravage',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/kerrigan/abilities/icons/ravage_square.png',
      },
      {
        name: 'Lâminas Empaladoras',
        description:
          'Após 1,25 s, causa 165 de dano aos inimigos na área selecionada, atordoando-os por 1 s.',
        displayText: 'Atordoa e causa dano aos inimigos em uma área',
        vital: 'Mana: 80',
        cooldown: 'Recarga: 12 segundos',
        slug: 'impaling-blades',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/kerrigan/abilities/icons/impaling-blades_square.png',
      },
      {
        name: 'Rapto Primevo',
        description:
          'Puxa os inimigos na área selecionada para perto de Kerrigan, causando 25 de dano. Após 2.5 s, ocorre uma explosão ao redor dela, causando 195 de dano aos inimigos próximos.',
        displayText: 'Puxa e causa dano aos inimigos em uma área',
        vital: 'Mana: 65',
        cooldown: 'Recarga: 10 segundos',
        slug: 'primal-grasp',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/kerrigan/abilities/icons/primal-grasp_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: 'Turbilhão',
        description:
          'Causa 74 de dano por segundo aos inimigos próximos. Dura 7 s.',
        displayText: 'Causa dano aos inimigos próximos de forma persistente',
        vital: 'Mana: 100',
        cooldown: 'Recarga: 90 segundos',
        slug: 'maelstrom',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/kerrigan/abilities/icons/maelstrom_square.png',
      },
      {
        name: 'Evocar Mammuthus',
        description:
          'Após 0.5 s, evoca um Mammuthus que investe à frente, atordoando o primeiro Herói inimigo atingido por 0.5 s e causando 250 de dano.  Os Ataques Básicos do Mammuthus causam 50% de dano colateral em uma área grande ao redor do alvo. Ative a habilidade novamente para trocar o alvo do Mammuthus.',
        displayText: 'Evoca um Mammuthus controlável',
        vital: 'Mana: 100',
        cooldown: 'Recarga: 80 segundos',
        slug: 'summon-ultralisk',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/kerrigan/abilities/icons/summon-ultralisk_square.png',
      },
    ],
    expandedRole: {
      name: 'Assassino Corpo a Corpo',
      description:
        'Assassino Corpo a Corpo Matadores de heróis e semeadores de sofrimento. Especialistas em causar dano elevado a alvos únicos e emboscadas.',
      slug: 'melee-assassin',
    },
    stats: {
      damage: 8,
      utility: 4,
      survivability: 6,
      complexity: 6,
    },
    skin: {
      id: 'KerriganCommon',
      name: {
        en_US: 'Queen of Blades',
        es_MX: 'Reina de las Cuchillas',
        pt_BR: 'Rainha das Lâminas',
        de_DE: 'Königin der Klingen',
        en_GB: 'Queen of Blades',
        es_ES: 'La Reina de Espadas',
        fr_FR: 'Reine des Lames',
        it_IT: 'Regina delle Lame',
        pl_PL: 'Królowa Ostrzy',
        ru_RU: 'Королева Клинков',
        ko_KR: '칼날 여왕',
        zh_TW: '刀鋒女皇',
        zh_CN: '刀锋女王',
      },
      description: {
        en_US: 'Queen of Blades',
        es_MX: 'Reina de las Cuchillas',
        pt_BR: 'Rainha das Lâminas',
        de_DE: 'Königin der Klingen',
        en_GB: 'Queen of Blades',
        es_ES: 'La Reina de Espadas',
        fr_FR: 'Reine des Lames',
        it_IT: 'Regina delle Lame',
        pl_PL: 'Królowa Ostrzy',
        ru_RU: 'Королева Клинков',
        ko_KR: '칼날 여왕',
        zh_TW: '刀鋒女皇',
        zh_CN: '刀锋女王',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/KerriganCommon?namespace=hms_80333',
      },
      slug: 'queen-of-blades',
    },
  },
  {
    name: 'Malfurion',
    title: 'Arquidruida',
    role: {
      name: 'Suporte',
      description:
        'Suporte O Suporte concede bônus e outros benefícios aos companheiros.',
      slug: 'support',
    },
    type: {
      name: 'Longo Alcance',
      slug: 'ranged',
    },
    description:
      'Malfurion Tempesfúria é o maior druida de Azeroth, um aprendiz do semideus Cenarius. Ao comungar com a natureza e com Cenarius por meio do Sonho Esmeralda, Malfurion protege o mundo selvagem das influências demoníacas.',
    shortDescription:
      'Um forte Curandeiro, capaz de prender inimigos para garantir o abate.',
    difficulty: 'Fácil',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/malfurion/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/malfurion-67364cde03.jpg',
    franchise: 'Warcraft',
    release: '2014-03-13T00:00:00.000Z',
    isNew: false,
    slug: 'malfurion',
    trait: {
      name: 'Avivar',
      description:
        'Concede a um Herói aliado 20% do máximo de mana dele ao longo de 5 segundos. Enquanto Avivar estiver ativa, a recarga das Habilidades Básicas do aliado é concluída 50% mais depressa.  Não pode ser lançada em Heróis que não usam Mana.',
      displayText: 'Concede mana a um aliado e reduz as recargas dele',
      cooldown: 'Recarga: 25 segundos',
      slug: 'innervate',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/malfurion/traits/icons/innervate_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/malfurion/',
    abilities: [
      {
        name: 'Recrescimento',
        description: 'Cura 380 de Vida de um Herói aliado ao longo de 20 s.',
        displayText: 'Cura um Herói aliado ao longo do tempo',
        vital: 'Mana: 35',
        cooldown: 'Recarga: 5 segundos',
        slug: 'regrowth',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/malfurion/abilities/icons/regrowth_square.png',
      },
      {
        name: 'Fogo Lunar',
        description:
          'Causa 90 de dano aos inimigos em uma área, revelando-os por 2 s.  Aliados com Recrescimento são curados em 130 de Vida para cada Herói inimigo atingido pelo Fogo Lunar.',
        displayText:
          'Causa dano a inimigos na área; cura aliados com Recrescimento',
        vital: 'Mana: 10',
        cooldown: 'Recarga: 3 segundos',
        slug: 'moonfire',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/malfurion/abilities/icons/moonfire_square.png',
      },
      {
        name: 'Raízes Enredantes',
        description:
          'Enraíza os Heróis inimigos em uma área por 1.25 s e causa 117 de dano ao longo da duração. A área afetada se expande ao longo de 3 s.',
        displayText: 'Enraíza e causa dano aos Heróis em uma área',
        vital: 'Mana: 65',
        cooldown: 'Recarga: 12 segundos',
        slug: 'entangling-roots',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/malfurion/abilities/icons/entangling-roots_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: 'Tranquilidade',
        description:
          'Cura 80 de Vida por segundo dos Heróis aliados próximos durante 8 s. Aliados com Recrescimento dentro da Tranquilidade ganham 10 de Armadura.',
        displayText: 'Cura aliados próximos continuamente',
        vital: 'Mana: 80',
        cooldown: 'Recarga: 80 segundos',
        slug: 'tranquility',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/malfurion/abilities/icons/tranquility_square.png',
      },
      {
        name: 'Sonho do Crepúsculo',
        description:
          'Após 0.5 s, causa 310 de dano numa área grande ao redor de Malfurion, silenciando os inimigos e impedindo-os de usar habilidades por 3 s.',
        displayText: 'Silencia e causa dano aos inimigos próximos',
        vital: 'Mana: 100',
        cooldown: 'Recarga: 90 segundos',
        slug: 'twilight-dream',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/malfurion/abilities/icons/twilight-dream_square.png',
      },
    ],
    otherAbilities: [
      {
        name: 'Comunhão Astral',
        description:
          'Ative para canalizar por 1 s e, em seguida, teleportar-se instantaneamente e lançar Sonho do Crepúsculo no local selecionado. A recarga é compartilhada com Sonho do Crepúsculo.  Passiva: Aumenta a duração do Silêncio de Sonho do Crepúsculo para 4 s.',
        displayText: 'Ative para se teleportar e lançar Sonho do Crepúsculo',
        vital: 'Mana: 100',
        cooldown: 'Recarga: 90 segundos',
        slug: 'astral-communion',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/malfurion/abilities/icons/astral-communion_square.png',
      },
    ],
    expandedRole: {
      name: 'Curandeiro',
      description:
        'Curandeiro Amigos para todas as horas. Sempre presentes para manter os aliados vivos e relativamente saudáveis nas lutas em equipe.',
      slug: 'healer',
    },
    stats: {
      damage: 4,
      utility: 7,
      survivability: 5,
      complexity: 5,
    },
    skin: {
      id: 'MalfurionBaseCommon',
      name: {
        en_US: 'Archdruid',
        es_MX: 'Archidruida',
        pt_BR: 'Arquidruida',
        de_DE: 'Erzdruide',
        en_GB: 'Archdruid',
        es_ES: 'Archidruida',
        fr_FR: 'Archidruide',
        it_IT: 'Arcidruido',
        pl_PL: 'Arcydruid',
        ru_RU: 'Верховный друид',
        ko_KR: '대드루이드',
        zh_TW: '大德魯伊',
        zh_CN: '大德鲁伊',
      },
      description: {
        en_US: 'Archdruid',
        es_MX: 'Archidruida',
        pt_BR: 'Arquidruida',
        de_DE: 'Erzdruide',
        en_GB: 'Archdruid',
        es_ES: 'Archidruida',
        fr_FR: 'Archidruide',
        it_IT: 'Arcidruido',
        pl_PL: 'Arcydruid',
        ru_RU: 'Верховный друид',
        ko_KR: '대드루이드',
        zh_TW: '大德魯伊',
        zh_CN: '大德鲁伊',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/MalfurionBaseCommon?namespace=hms_80333',
      },
      slug: 'archdruid',
    },
  },
  {
    name: 'Muradin',
    title: 'Rei da Montanha',
    role: {
      name: 'Guerreiro',
      description: 'Guerreiro Defensores e combatentes da linha de frente.',
      slug: 'warrior',
    },
    type: {
      name: 'Corpo a Corpo',
      slug: 'melee',
    },
    description:
      'Apesar de ter sido um dos mentores de Arthas, Muradin não conseguiu impedir sua corrupção. Após se recuperar de um leve caso de amnésia, ele é hoje o líder do clã Barbabronze após a transformação de seu irmão, o rei Magni, em diamante.',
    shortDescription:
      'Um Tanque resistente, que se sai muito bem nas mais diversas situações.',
    difficulty: 'Fácil',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/muradin/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/muradin-d1003a8b30.jpg',
    franchise: 'Warcraft',
    release: '2014-03-13T00:00:00.000Z',
    isNew: false,
    slug: 'muradin',
    trait: {
      name: 'Fôlego Renovado',
      description:
        'Muradin recupera 55 de Vida por segundo se não receber dano por 4 s. Se tiver menos de 40% de Vida, ele passa a recuperar 111 de Vida por segundo.',
      displayText: 'Recupera Vida enquanto não recebe dano',
      slug: 'second-wind',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/muradin/traits/icons/second-wind_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/muradin/',
    abilities: [
      {
        name: 'Seta Tempestuosa',
        description:
          'Arremessa um martelo que causa 110 de dano ao primeiro inimigo atingido, atordoando-o por 1.25 s.  Missão: Atingir 25 Heróis com a Seta Tempestuosa. Heróis que morrerem até 2.5 s depois de serem atingidos pela Seta Tempestuosa contam como se Muradin tivesse atingido mais 3 Heróis.  Recompensa: Seta Tempestuosa passa a atingir outro alvo, e os Ataques Básicos de Muradin reduzem a recarga dela em 1 s.',
        displayText:
          'Arremessa um martelo, atordoando e causando dano ao primeiro inimigo atingido',
        vital: 'Mana: 45',
        cooldown: 'Recarga: 10 segundos',
        slug: 'storm-bolt',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/muradin/abilities/icons/storm-bolt_square.png',
      },
      {
        name: 'Trovoada',
        description:
          'Atinge os inimigos próximos, causando 96 de dano e desacelerando-os em 25% por 2.5 s. Heróis atingidos também têm a Velocidade de Ataque reduzida em 25% enquanto durar o efeito.',
        displayText: 'Desacelera e causa dano aos inimigos próximos',
        vital: 'Mana: 50',
        cooldown: 'Recarga: 8 segundos',
        slug: 'thunder-clap',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/muradin/abilities/icons/thunder-clap_square.png',
      },
      {
        name: 'Arremesso de Anão',
        description:
          'Salta até o local selecionado, causando 59 de dano aos inimigos ao pousar. Ao saltar, recebe 30 de Armadura por 2 s, reduzindo o dano recebido em 30%.',
        displayText:
          'Você salta para um determinado local, causando dano aos inimigos próximos',
        vital: 'Mana: 55',
        cooldown: 'Recarga: 10 segundos',
        slug: 'dwarf-toss',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/muradin/abilities/icons/dwarf-toss_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: 'Avatar',
        description: 'Transforma-se por 20 segundos, ganhando 1053 de Vida.',
        displayText: 'Bônus de Vida temporário',
        vital: 'Mana: 80',
        cooldown: 'Recarga: 90 segundos',
        slug: 'avatar',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/muradin/abilities/icons/avatar_square.png',
      },
      {
        name: 'Apagão',
        description:
          'Atordoa o Herói adversário e finaliza com um soco que causa 319 de dano e repele o alvo, causando 319 de dano aos inimigos no caminho e repelindo-os.',
        displayText: 'Atordoa e repele o inimigo',
        vital: 'Mana: 60',
        cooldown: 'Recarga: 40 segundos',
        slug: 'haymaker',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/muradin/abilities/icons/haymaker_square.png',
      },
    ],
    expandedRole: {
      name: 'Tanque',
      description:
        'Tanque Defensores da linha de frente, capazes de resistir a grandes estragos. Cuidam da proteção dos companheiros mais frágeis.',
      slug: 'tank',
    },
    stats: {
      damage: 5,
      utility: 5,
      survivability: 9,
      complexity: 4,
    },
    skin: {
      id: 'MuradinCommon',
      name: {
        en_US: 'Mountain King',
        es_MX: 'Rey de la montaña',
        pt_BR: 'Rei da Montanha',
        de_DE: 'Bergkönig',
        en_GB: 'Mountain King',
        es_ES: 'Rey de la montaña',
        fr_FR: 'Roi de la montagne',
        it_IT: 'Re della Montagna',
        pl_PL: 'Król Gór',
        ru_RU: 'Горный король',
        ko_KR: '산왕',
        zh_TW: '山脈之王',
        zh_CN: '山丘之王',
      },
      description: {
        en_US: 'Mountain King',
        es_MX: 'Rey de la montaña',
        pt_BR: 'Rei da Montanha',
        de_DE: 'Bergkönig',
        en_GB: 'Mountain King',
        es_ES: 'Rey de la montaña',
        fr_FR: 'Roi de la montagne',
        it_IT: 'Re della Montagna',
        pl_PL: 'Król Gór',
        ru_RU: 'Горный король',
        ko_KR: '산왕',
        zh_TW: '山脈之王',
        zh_CN: '山丘之王',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/MuradinCommon?namespace=hms_80333',
      },
      slug: 'mountain-king',
    },
  },
  {
    name: 'Nazibo',
    title: 'Feiticeiro Herege',
    role: {
      name: 'Especialista',
      description:
        'Especialista Quebradores de regras e mestres do combate diferenciado.',
      slug: 'specialist',
    },
    type: {
      name: 'Longo Alcance',
      slug: 'ranged',
    },
    description:
      'Com encantamentos cabalísticos e vestimentas de penas e ossos, o feiticeiro Nazibo evoca espíritos da Terra Nebulosa para auxiliá-lo. Poucos forasteiros encontram um feiticeiro em carne e osso sem perder sua carne... e seus ossos.',
    shortDescription:
      'Um Mago de dano contínuo, que fica mais forte conforme mata Tropas inimigas.',
    difficulty: 'Médio',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/nazeebo/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/nazeebo-075bcb780b.jpg',
    franchise: 'Diablo',
    release: '2014-03-13T00:00:00.000Z',
    isNew: false,
    slug: 'nazeebo',
    trait: {
      name: 'Ritual Vodu',
      description:
        'As habilidades e os Ataques Básicos de Nazibo envenenam os inimigos não Heroicos, causando mais 67 de dano ao longo de 6 s.   Missão: Se uma Tropa morrer estando envenenada pelo Ritual Vodu, Nazibo ganhará permanentemente 6 de Vida e 1 de Mana.',
      displayText:
        'Habilidades e ataques básicos causam dano periódico. Tropas abatidas aumentam Vida e Mana.',
      slug: 'voodoo-ritual',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/nazeebo/traits/icons/voodoo-ritual_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/nazeebo/',
    abilities: [
      {
        name: 'Aranhas Carniceiras',
        description:
          'Lança um jarro de aranhas que causa 50 de dano. Se atingir pelo menos um inimigo, cria 3 Aranhas Carniceiras que causam 38 de dano. As aranhas duram 4 segundos.',
        displayText:
          'Arremessa um jarro com Aranhas que atacarão o inimigo atingido',
        vital: 'Mana: 50',
        cooldown: 'Recarga: 9 segundos',
        slug: 'corpse-spiders',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/nazeebo/abilities/icons/corpse-spiders_square.png',
      },
      {
        name: 'Parede de Zumbis',
        description:
          'Após 1 segundo, cria ao redor da área selecionada um círculo de Zumbis que causa 28 de dano e dura 3 segundos.',
        displayText:
          'Evoca temporariamente um círculo de zumbis que aprisionam e atacam',
        vital: 'Mana: 70',
        cooldown: 'Recarga: 14 segundos',
        slug: 'zombie-wall',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/nazeebo/abilities/icons/zombie-wall_square.png',
      },
      {
        name: 'Praga de Sapos',
        description:
          'Cria uma onda de 3 Sapos que explodem com o contato, causando 119 de dano ao longo de 6 s. Este efeito acumula.  Armazena até 2 cargas.',
        displayText: 'Evoca um bando de sapos explosivos',
        vital: 'Mana: 30',
        cooldown: 'Recarga da carga: 8 segundos',
        slug: 'plague-of-toads',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/nazeebo/abilities/icons/plague-of-toads_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: 'Gargântua',
        description:
          'Evoca um Gargântua que protege a área por 20 segundos e causa 100 de dano ao ser evocado. Os ataques dele causam 140 de dano e ele pode receber ordens para pisotear inimigos próximos.',
        displayText: 'Evoca um Gargântua para proteger uma área',
        vital: 'Mana: 90',
        cooldown: 'Recarga: 70 segundos',
        slug: 'gargantuan',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/nazeebo/abilities/icons/gargantuan_square.png',
      },
      {
        name: 'Espírito Voraz',
        description:
          'Canaliza um Espírito Voraz que causa 230 de dano por segundo. Não é possível se mover durante a canalização. Dura 8 segundos.',
        displayText: 'Canaliza um espírito que se move e causa dano ',
        vital: 'Mana: 100',
        cooldown: 'Recarga: 90 segundos',
        slug: 'ravenous-spirit',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/nazeebo/abilities/icons/ravenous-spirit_square.png',
      },
    ],
    otherAbilities: [
      {
        name: 'Pisada de Gargântua',
        description:
          'Ordena que o Gargântua pisoteie, causando 240 de dano aos inimigos próximos e desacelerando-os em 30% por 2 s.',
        cooldown: 'Recarga: 5 segundos',
        slug: 'gargantuan-stomp',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/nazeebo/abilities/icons/gargantuan-stomp_square.png',
      },
    ],
    expandedRole: {
      name: 'Assassino de Longo Alcance',
      description:
        'Assassino de Longo Alcance Causadores de dano que fazem chover balas, flechas ou feitiços mortíferos sobre os inimigos. Geralmente frágeis, eles se sentem mais seguros mantendo distância dos inimigos.',
      slug: 'ranged-assassin',
    },
    stats: {
      damage: 8,
      utility: 4,
      survivability: 3,
      complexity: 6,
    },
    skin: {
      id: 'WitchDoctorCommon',
      name: {
        en_US: 'Heretic Witch Doctor',
        es_MX: 'Santero hereje',
        pt_BR: 'Feiticeiro Herege',
        de_DE: 'Ketzerischer Hexendoktor',
        en_GB: 'Heretic Witch Doctor',
        es_ES: 'Médico brujo herético',
        fr_FR: 'Féticheur hérétique',
        it_IT: 'Sciamano eretico',
        pl_PL: 'Heretycki Szaman',
        ru_RU: 'Колдун-ренегат',
        ko_KR: '이교도 부두술사',
        zh_TW: '異端巫醫',
        zh_CN: '异端巫医',
      },
      description: {
        en_US: 'Heretic Witch Doctor',
        es_MX: 'Santero hereje',
        pt_BR: 'Feiticeiro Herege',
        de_DE: 'Ketzerischer Hexendoktor',
        en_GB: 'Heretic Witch Doctor',
        es_ES: 'Médico brujo herético',
        fr_FR: 'Féticheur hérétique',
        it_IT: 'Sciamano eretico',
        pl_PL: 'Heretycki Szaman',
        ru_RU: 'Колдун-ренегат',
        ko_KR: '이교도 부두술사',
        zh_TW: '異端巫醫',
        zh_CN: '异端巫医',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/WitchDoctorCommon?namespace=hms_80333',
      },
      slug: 'heretic-witch-doctor',
    },
  },
  {
    name: 'Nova',
    title: 'Fantasma da Supremacia',
    role: {
      name: 'Assassino',
      description: 'Assassino Matadores de heróis e semeadores de sofrimento.',
      slug: 'assassin',
    },
    type: {
      name: 'Longo Alcance',
      slug: 'ranged',
    },
    description:
      'November Terra, ou "Nova", é uma fantasma da Supremacia Terrana e está entre os soldados psiônicos mais poderosos da história. Nova é altamente centrada, determinada e letal. Até Jim Raynor tem medo de sua mira infalível.',
    shortDescription: 'Uma Maga furtiva que causa grandes surtos de dano.',
    difficulty: 'Médio',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/nova/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/nova-c13237db26.jpg',
    franchise: 'StarCraft',
    release: '2014-03-13T00:00:00.000Z',
    isNew: false,
    slug: 'nova',
    trait: {
      name: 'Camuflagem Permanente',
      description:
        'Entra em modo Furtivo automaticamente após permanecer 3 s fora de combate. Receber dano, atacar, usar habilidades ou canalizar quebra a Furtividade. Permanecer imóvel por pelo menos 1.5 s enquanto está Furtivo concede Invisibilidade.  Passivo: Concede 15% de Velocidade de Movimento no modo Furtivo.',
      displayText:
        'Entra em modo Furtivo e ganha Velocidade de Movimento quando não ataca ou recebe dano',
      slug: 'permanent-cloak',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/nova/traits/icons/permanent-cloak_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/nova/',
    abilities: [
      {
        name: 'Tiro de Precisão',
        description:
          'Causa 230 de dano ao primeiro inimigo atingido.  Passivo: Atingir um Herói inimigo com Tiro de Precisão aumenta permanentemente o dano do Tiro de Precisão em 6%, acumulando até 30%. Com o máximo de aplicações, o dano aumenta em mais 25%. Todas as aplicações serão perdidas se o Tiro de Precisão não atingir nenhum inimigo.',
        displayText:
          'Dispara um projétil que causa dano elevado ao primeiro inimigo atingido',
        vital: 'Mana: 50',
        cooldown: 'Recarga: 6 segundos',
        slug: 'snipe',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/nova/abilities/icons/snipe_square.png',
      },
      {
        name: 'Tiro Paralisante',
        description:
          'Causa 100 de dano a um inimigo e o desacelera em 40% por 2.25 s.',
        displayText: 'Desacelera e causa dano a um inimigo',
        vital: 'Mana: 65',
        cooldown: 'Recarga: 12 segundos',
        slug: 'pinning-shot',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/nova/abilities/icons/pinning-shot_square.png',
      },
      {
        name: 'Clone Holográfico',
        description:
          'Cria um Clone por 5 s com 100% da Vida atual de Nova que ataca inimigos, causando 10% do dano básico de Nova. Sempre que um Clone recebe dano, ele causa a mesma quantidade a si mesmo, ou seja, ele recebe o dobro do dano.  Usar essa habilidade não cancela a Furtividade.',
        displayText: 'Cria um clone holográfico de Nova',
        vital: 'Mana: 50',
        cooldown: 'Recarga: 15 segundos',
        slug: 'holo-decoy',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/nova/abilities/icons/holo-decoy_square.png',
      },
      {
        name: 'Protocolo Fantasma',
        description:
          'Ativar concede instantaneamente Furtividade a Nova e gera um Clone Holográfico na posição dela. Nova fica Irrevelável nos primeiros 0.5 s ao ganhar Furtividade com Protocolo Fantasma.',
        displayText:
          'Fica Furtiva instantaneamente e cria um Clone Holográfico onde estiver',
        cooldown: 'Recarga: 60 segundos',
        slug: 'ghost-protocol',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/nova/abilities/icons/ghost-protocol_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: 'Tiro Triplo',
        description:
          'Trava no Herói-alvo e dispara 3 tiros que atingem o primeiro Herói ou Estrutura que tocam, causando 372 de dano cada.',
        displayText: 'Atira 3 vezes no alvo',
        vital: 'Mana: 100',
        cooldown: 'Recarga: 100 segundos',
        slug: 'triple-tap',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/nova/abilities/icons/triple-tap_square.png',
      },
      {
        name: 'Disparo Preciso',
        description:
          'Após um intervalo de 1.5 s, causa 435 de dano aos inimigos em uma área. Alcance ilimitado.',
        displayText: 'Ataque de área com alcance ilimitado',
        vital: 'Mana: 100',
        cooldown: 'Recarga: 60 segundos',
        slug: 'precision-strike',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/nova/abilities/icons/precision-strike_square.png',
      },
    ],
    expandedRole: {
      name: 'Assassino de Longo Alcance',
      description:
        'Assassino de Longo Alcance Causadores de dano que fazem chover balas, flechas ou feitiços mortíferos sobre os inimigos. Geralmente frágeis, eles se sentem mais seguros mantendo distância dos inimigos.',
      slug: 'ranged-assassin',
    },
    stats: {
      damage: 10,
      utility: 4,
      survivability: 2,
      complexity: 5,
    },
    skin: {
      id: 'NovaCommon',
      name: {
        en_US: 'Dominion Ghost',
        es_MX: 'Fantasma del Dominio',
        pt_BR: 'Fantasma da Supremacia',
        de_DE: 'Ghost der Liga',
        en_GB: 'Dominion Ghost',
        es_ES: 'Fantasma del Dominio',
        fr_FR: 'Fantôme du Dominion',
        it_IT: 'Fantasma del Dominio',
        pl_PL: 'Duch Dominium',
        ru_RU: 'Призрак Доминиона',
        ko_KR: '자치령 유령',
        zh_TW: '自治聯盟幽靈特務',
        zh_CN: '帝国幽灵特工',
      },
      description: {
        en_US: 'Dominion Ghost',
        es_MX: 'Fantasma del Dominio',
        pt_BR: 'Fantasma da Supremacia',
        de_DE: 'Ghost der Liga',
        en_GB: 'Dominion Ghost',
        es_ES: 'Fantasma del Dominio',
        fr_FR: 'Fantôme du Dominion',
        it_IT: 'Fantasma del Dominio',
        pl_PL: 'Duch Dominium',
        ru_RU: 'Призрак Доминиона',
        ko_KR: '자치령 유령',
        zh_TW: '自治聯盟幽靈特務',
        zh_CN: '帝国幽灵特工',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/NovaCommon?namespace=hms_80333',
      },
      slug: 'dominion-ghost',
    },
  },
  {
    name: 'Raynor',
    title: 'Comandante Rebelde',
    role: {
      name: 'Assassino',
      description: 'Assassino Matadores de heróis e semeadores de sofrimento.',
      slug: 'assassin',
    },
    type: {
      name: 'Longo Alcance',
      slug: 'ranged',
    },
    description:
      'O ex-delegado confederado James Raynor sobreviveu a tudo o que o universo jogou em seu caminho. Agora, ele se posta como uma luz de esperança entre monstros e alienígenas misteriosos, lutando pela justiça num universo cruel e impiedoso.',
    shortDescription:
      'Um Assassino de Dano Físico, bom para manter os inimigos afastados.',
    difficulty: 'Fácil',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/raynor/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/raynor-55d8b2981e.jpg',
    franchise: 'StarCraft',
    release: '2014-03-13T00:00:00.000Z',
    isNew: false,
    slug: 'raynor',
    trait: {
      name: 'Quebrar Esses Manés',
      description:
        'A cada 4 Ataques Básicos, causa dano colateral em uma pequena área e causa mais 125% de dano ao alvo principal.',
      displayText: 'Potencializa Ataques Básicos periodicamente',
      slug: 'give-em-some-pepper',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/raynor/traits/icons/give-em-some-pepper_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/raynor/',
    abilities: [
      {
        name: 'Disparo Penetrante',
        description:
          'Causa 220 de dano, repele e desacelera em 20% os inimigos em linha reta por 2 s. Os inimigos mais perto de Raynor são repelidos para mais longe.',
        displayText: 'Disparo que causa dano, repele e desacelera os inimigos',
        vital: 'Mana: 65',
        cooldown: 'Recarga: 10 segundos',
        slug: 'penetrating-round',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/raynor/abilities/icons/penetrating-round_square.png',
      },
      {
        name: 'Inspirar',
        description:
          'Raynor e todas as Tropas e Mercenários aliados próximos ganham 30% de Velocidade de Ataque e 10% de Velocidade de Movimento por 4 s.  Usar Inspirar conclui a recarga de Ataque Básico de Raynor.',
        displayText: 'Conclui e potencializa Ataques Básicos',
        vital: 'Mana: 50',
        cooldown: 'Recarga: 12 segundos',
        slug: 'inspire',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/raynor/abilities/icons/inspire_square.png',
      },
      {
        name: 'Injeção de Adrenalina',
        description:
          'Restaura 25% do máximo de Vida de Raynor ao longo de 1 s. Os Ataques Básicos de Raynor reduzem a recarga dessa habilidade em 0.5 s. Reduz em dobro contra Heróis.',
        displayText: 'Ative para curar-se',
        vital: 'Mana: 75',
        cooldown: 'Recarga: 45 segundos',
        slug: 'adrenaline-rush',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/raynor/abilities/icons/adrenaline-rush_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: 'Hipérion',
        description:
          'Ordena que a Hipérion realize um ataque aéreo por 12 s contra até 4 inimigos, causando 66 de dano por segundo. A cada 4 s, ela pode disparar o Canhão Yamato contra uma Estrutura, causando 794 de dano.',
        displayText: 'Evoca um Cruzador de Batalha',
        vital: 'Mana: 100',
        cooldown: 'Recarga: 100 segundos',
        slug: 'hyperion',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/raynor/abilities/icons/hyperion_square.png',
      },
      {
        name: 'Saqueador do Raynor',
        description:
          'Evoca uma Vudu que ajuda Raynor. Ela causa 84 de dano por segundo e recupera 75 de Vida por segundo se ficar sem receber dano por 4 s. Reative para trocar de alvo ou locomovê-la.  Ao ser destruída, a Vudu reaparecerá automaticamente após 45 s. ',
        displayText: 'Evoca uma Vudu de escolta',
        cooldown: 'Recarga: 45 s',
        slug: 'raynors-raider',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/raynor/abilities/icons/raynors-raider_square.png',
      },
    ],
    otherAbilities: [
      {
        name: 'Quebrar Esses Manés',
        description:
          'A cada 4 Ataques Básicos, causa dano colateral em uma pequena área e causa mais 125% de dano ao alvo principal.',
        displayText: 'Causa mais dano a cada 4 Ataques Básicos',
        cooldown: 'Recarga: 40 segundos',
        slug: 'give-em-some-pepper',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/raynor/abilities/icons/give-em-some-pepper_square.png',
      },
    ],
    expandedRole: {
      name: 'Assassino de Longo Alcance',
      description:
        'Assassino de Longo Alcance Causadores de dano que fazem chover balas, flechas ou feitiços mortíferos sobre os inimigos. Geralmente frágeis, eles se sentem mais seguros mantendo distância dos inimigos.',
      slug: 'ranged-assassin',
    },
    stats: {
      damage: 9,
      utility: 1,
      survivability: 6,
      complexity: 3,
    },
    skin: {
      id: 'RaynorCommon',
      name: {
        en_US: 'Renegade Commander',
        es_MX: 'Comandante renegado',
        pt_BR: 'Comandante Rebelde',
        de_DE: 'Abtrünniger Commander',
        en_GB: 'Renegade Commander',
        es_ES: 'Comandante renegado',
        fr_FR: 'Commandant renégat',
        it_IT: 'Comandante rinnegato',
        pl_PL: 'Dowódca Rebeliantów',
        ru_RU: 'Лидер мятежников',
        ko_KR: '반란군 사령관',
        zh_TW: '反抗組織指揮官',
        zh_CN: '起义军指挥官',
      },
      description: {
        en_US: 'Renegade Commander',
        es_MX: 'Comandante renegado',
        pt_BR: 'Comandante Rebelde',
        de_DE: 'Abtrünniger Commander',
        en_GB: 'Renegade Commander',
        es_ES: 'Comandante renegado',
        fr_FR: 'Commandant renégat',
        it_IT: 'Comandante rinnegato',
        pl_PL: 'Dowódca Rebeliantów',
        ru_RU: 'Лидер мятежников',
        ko_KR: '반란군 사령관',
        zh_TW: '反抗組織指揮官',
        zh_CN: '起义军指挥官',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/RaynorCommon?namespace=hms_80333',
      },
      slug: 'renegade-commander',
    },
  },
  {
    name: 'Sgt. Marreta',
    title: 'Operadora de Tanque de Cerco',
    role: {
      name: 'Especialista',
      description:
        'Especialista Quebradores de regras e mestres do combate diferenciado.',
      slug: 'specialist',
    },
    type: {
      name: 'Longo Alcance',
      slug: 'ranged',
    },
    description:
      'A sargento Bama Kowalski, a "Marreta", serviu em alguns dos períodos mais difíceis da guerra no setor Koprulu. O ressoar do canhão de choque do seu tanque de cerco incute medo nos corações dos guerreiros mais corajosos... até mesmo de alguns aliados.',
    shortDescription:
      'Uma Heroína que causa Dano Físico a distância, mas precisa de proteção dos aliados.',
    difficulty: 'Difícil',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/sgt-hammer/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/sgt-hammer-ad3562faf6.jpg',
    franchise: 'StarCraft',
    release: '2014-03-13T00:00:00.000Z',
    isNew: false,
    slug: 'sgt-hammer',
    trait: {
      name: 'Modo de Cerco',
      description:
        'Ative para entrar no Modo de Cerco. Enquanto estiver no Modo de Cerco, Ataques Básicos causam 20% a mais de dano, têm 100% de aumento de alcance e causam dano colateral equivalente a 25% do dano ao redor do alvo.',
      displayText:
        'Torna-se imóvel, aumenta o alcance e potencializa os Ataques Básicos',
      cooldown: 'Recarga: 2 segundos',
      slug: 'siege-mode',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/sgt-hammer/traits/icons/siege-mode_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/sgt-hammer/',
    abilities: [
      {
        name: 'Minas-aranha',
        description:
          'Cria 3 minas que se armam após 1.25 s. As minas explodem quando um inimigo entra no alcance, causando 96 de dano aos inimigos próximos e desacelerando-os em 25% por 1.5 s.  Modo de Cerco: Alcance de lançamento aumentado em 100%.',
        displayText:
          'Cria minas que desaceleram e causam dano aos inimigos ao serem pisadas',
        vital: 'Mana: 50',
        cooldown: 'Recarga: 14 segundos',
        slug: 'spider-mines',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/sgt-hammer/abilities/icons/spider-mines_square.png',
      },
      {
        name: 'Impacto de Concussão',
        description:
          'Causa 141 de dano aos inimigos à frente da Sgt. Marreta e os repele.  Modo de Cerco: Raio aumentado em 50%.',
        displayText: 'Repele e causa dano aos inimigos',
        vital: 'Mana: 80',
        cooldown: 'Recarga: 12 segundos',
        slug: 'concussive-blast',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/sgt-hammer/abilities/icons/concussive-blast_square.png',
      },
      {
        name: 'Blindagem de Novoaço',
        description:
          'Recebe 25 de Armadura por 2 s.  Modo de Cerco: Concede 100% a mais de Armadura.',
        displayText: 'Recebe Armadura temporária',
        vital: 'Mana: 60',
        cooldown: 'Recarga: 16 segundos',
        slug: 'neosteel-plating',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/sgt-hammer/abilities/icons/neosteel-plating_square.png',
      },
      {
        name: 'Propulsores',
        description:
          'Aumenta em 60% sua Velocidade de Movimento por 4 s. Os Propulsores ficam sempre ativos no Salão das Tempestades. Ativar Propulsores cancela o Modo de Cerco.',
        displayText: 'Ative para aumentar a Velocidade de Movimento',
        cooldown: 'Recarga: 30 segundos',
        slug: 'thrusters',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/sgt-hammer/abilities/icons/thrusters_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: 'Arma de Força Bruta',
        description:
          'Dispara um míssil que cruza o campo de batalha, causando 500 de dano aos inimigos no caminho que não forem Estruturas.',
        displayText: 'Dispara um balaço que cruza o mapa',
        vital: 'Mana: 100',
        cooldown: 'Recarga: 70 segundos',
        slug: 'blunt-force-gun',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/sgt-hammer/abilities/icons/blunt-force-gun_square.png',
      },
      {
        name: 'Disparo de Napalm',
        description:
          'Causa 164 de dano no momento do impacto e deixa uma área de napalm que causa 50 de dano por segundo. Dura 4 segundos.',
        displayText: 'Dispara napalm nos inimigos',
        vital: 'Mana: 35',
        cooldown: 'Recarga: 6 segundos',
        slug: 'napalm-strike',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/sgt-hammer/abilities/icons/napalm-strike_square.png',
      },
    ],
    expandedRole: {
      name: 'Assassino de Longo Alcance',
      description:
        'Assassino de Longo Alcance Causadores de dano que fazem chover balas, flechas ou feitiços mortíferos sobre os inimigos. Geralmente frágeis, eles se sentem mais seguros mantendo distância dos inimigos.',
      slug: 'ranged-assassin',
    },
    stats: {
      damage: 9,
      utility: 3,
      survivability: 3,
      complexity: 6,
    },
    skin: {
      id: 'SgtHammerCommon',
      name: {
        en_US: 'Siege Tank Operator',
        es_MX: 'Operadora de tanque de asedio',
        pt_BR: 'Operadora de Tanque de Cerco',
        de_DE: 'Panzerfahrerin',
        en_GB: 'Siege Tank Operator',
        es_ES: 'Operadora de tanques de asedio',
        fr_FR: 'Opératrice de char de siège',
        it_IT: 'Carrista d’assedio',
        pl_PL: 'Czołgistka',
        ru_RU: 'Оператор осадного танка',
        ko_KR: '공성 전차 전차장',
        zh_TW: '攻城坦克駕駛員',
        zh_CN: '攻城坦克驾驶员',
      },
      description: {
        en_US: 'Siege Tank Operator',
        es_MX: 'Operadora de tanque de asedio',
        pt_BR: 'Operadora de Tanque de Cerco',
        de_DE: 'Panzerfahrerin',
        en_GB: 'Siege Tank Operator',
        es_ES: 'Operadora de tanques de asedio',
        fr_FR: 'Opératrice de char de siège',
        it_IT: 'Carrista d’assedio',
        pl_PL: 'Czołgistka',
        ru_RU: 'Оператор осадного танка',
        ko_KR: '공성 전차 전차장',
        zh_TW: '攻城坦克駕駛員',
        zh_CN: '攻城坦克驾驶员',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/SgtHammerCommon?namespace=hms_80333',
      },
      slug: 'siege-tank-operator',
    },
  },
  {
    name: 'Sonya',
    title: 'Bárbara Vagante',
    role: {
      name: 'Guerreiro',
      description: 'Guerreiro Defensores e combatentes da linha de frente.',
      slug: 'warrior',
    },
    type: {
      name: 'Corpo a Corpo',
      slug: 'melee',
    },
    description:
      'Das gélidas Terras do Pavor ao norte vêm os poderosos guerreiros bárbaros. Após sobreviver à destruição do seu lar e à morte da sua tribo, Sonya passou a vagar por Santuário atrás de batalhas e de uma vida melhor para seu povo.',
    shortDescription:
      'Uma Guerreira ótima para capturar Acampamentos Mercenários e se jogar no meio da equipe inimiga.',
    difficulty: 'Médio',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/sonya/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/sonya-b926d6b869.jpg',
    franchise: 'Diablo',
    release: '2014-03-13T00:00:00.000Z',
    isNew: false,
    slug: 'sonya',
    trait: {
      name: 'Fúria',
      description:
        'Usa Fúria em vez de mana. A Fúria é acumulada ao receber dano ou causar dano com Ataques Básicos. Usar uma Habilidade Básica ou Heroica aumenta a Velocidade de Movimento em 10% por 4 s.',
      displayText: 'Gera Fúria em combate. Habilidades dão Vel. de Movimento',
      slug: 'fury',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/sonya/traits/icons/fury_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/sonya/',
    abilities: [
      {
        name: 'Lança Ancestral',
        description:
          'Arremessa uma lança que puxa a Sonya para perto do primeiro inimigo atingido, causando 173 de dano e atordoando-o brevemente. Ao atingir um inimigo, gera 40 de Fúria.',
        displayText:
          'Arremessa uma lança que puxa você para o inimigo atingido, atordoando-o e causando dano ',
        cooldown: 'Recarga: 13 segundos',
        slug: 'ancient-spear',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/sonya/abilities/icons/ancient-spear_square.png',
      },
      {
        name: 'Impacto Sísmico',
        description:
          'Causa 176 de dano ao inimigo-alvo e 44 aos inimigos atrás dele.',
        displayText:
          'Causa dano a um inimigo, gerando dano colateral atrás dele',
        vital: 'Fúria: 25',
        cooldown: 'Recarga: 1 segundo',
        slug: 'seismic-slam',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/sonya/abilities/icons/seismic-slam_square.png',
      },
      {
        name: 'Tornado',
        description:
          'Causa 138 de dano por segundo a inimigos próximos por 3 s, curando  25% do dano causado. Cura triplicada contra Heróis.',
        displayText:
          'Causa dano aos inimigos próximos e realiza uma cura equivalente a uma porcentagem desse dano',
        vital: 'Fúria: 40',
        cooldown: 'Recarga: 5 segundos',
        slug: 'whirlwind',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/sonya/abilities/icons/whirlwind_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: 'Salto',
        description:
          'Salta no ar, causando 135 de dano aos inimigos próximos e atordoando-os por 1.25 segundo.',
        displayText:
          'Salta para o local alvejado, causa dano e atordoa os inimigos',
        cooldown: 'Recarga: 60 segundos',
        slug: 'leap',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/sonya/abilities/icons/leap_square.png',
      },
      {
        name: 'Fúria do Berserker',
        description:
          'Aumenta em 40% o dano causado. Reduz em 50% a duração de efeitos de atordoamento, enraizamento e desaceleração contra Sonya. Dura 15 s e se estende por 1 s a cada 10 pontos de Fúria ganhos.',
        displayText:
          'Aumenta o dano e reduz a duração dos efeitos debilitantes',
        cooldown: 'Recarga: 60 segundos',
        slug: 'wrath-of-the-berserker',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/sonya/abilities/icons/wrath-of-the-berserker_square.png',
      },
    ],
    expandedRole: {
      name: 'Guerreiro',
      description:
        'Guerreiro Guerreiros poderosos e resistentes capazes de causar estragos. Com potencial de tanqueamento limitado, eles contam com mobilidade adicional, controle coletivo ou capacidade de sobrevivência.',
      slug: 'bruiser',
    },
    stats: {
      damage: 7,
      utility: 5,
      survivability: 6,
      complexity: 5,
    },
    skin: {
      id: 'BarbarianBase',
      name: {
        en_US: 'Wandering Barbarian',
        es_MX: 'Bárbara errante',
        pt_BR: 'Bárbara Vagante',
        de_DE: 'Umherziehende Barbarin',
        en_GB: 'Wandering Barbarian',
        es_ES: 'Bárbara nómada',
        fr_FR: 'Barbare errante',
        it_IT: 'Barbara errante',
        pl_PL: 'Wędrowna Barbarzynka',
        ru_RU: 'Странствующий варвар',
        ko_KR: '떠도는 야만용사',
        zh_TW: '流浪野蠻人',
        zh_CN: '迷途野蛮人',
      },
      description: {
        en_US: 'Wandering Barbarian',
        es_MX: 'Bárbara errante',
        pt_BR: 'Bárbara Vagante',
        de_DE: 'Umherziehende Barbarin',
        en_GB: 'Wandering Barbarian',
        es_ES: 'Bárbara nómada',
        fr_FR: 'Barbare errante',
        it_IT: 'Barbara errante',
        pl_PL: 'Wędrowna Barbarzynka',
        ru_RU: 'Странствующий варвар',
        ko_KR: '떠도는 야만용사',
        zh_TW: '流浪野蠻人',
        zh_CN: '迷途野蛮人',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/BarbarianBase?namespace=hms_80333',
      },
      slug: 'wandering-barbarian',
    },
  },
  {
    name: 'Tyrael',
    title: 'Arcanjo da Justiça',
    role: {
      name: 'Guerreiro',
      description: 'Guerreiro Defensores e combatentes da linha de frente.',
      slug: 'warrior',
    },
    type: {
      name: 'Corpo a Corpo',
      slug: 'melee',
    },
    description:
      "O maior defensor da humanidade dentre os anjos é Tyrael, o Arcanjo da Justiça. Se não fosse pela intervenção de Tyrael, que empunhou El'druin, sua espada, para combater o Inferno Ardente, os Males Supremos já teriam escravizado a humanidade há muito tempo.",
    shortDescription:
      'Um Tanque que combina bem com quem gosta de se jogar no meio da equipe inimiga. ',
    difficulty: 'Médio',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/tyrael/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/tyrael-7a403ebc84.jpg',
    franchise: 'Diablo',
    release: '2014-03-13T00:00:00.000Z',
    isNew: false,
    slug: 'tyrael',
    trait: {
      name: 'Ira do Arcanjo',
      description:
        'Ao morrer, fica Invulnerável e explode após 3.5 s, causando 550 de dano. Cada Herói inimigo atingido reduz o tempo de renascimento de Tyrael em 10%.',
      displayText: 'Ao morrer, torna-se Invulnerável e explode',
      slug: 'archangels-wrath',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/tyrael/traits/icons/archangels-wrath_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/tyrael/',
    abilities: [
      {
        name: "Poder de El'druin",
        description:
          "Arremessa El'druin na área-alvo, causando 110 de dano aos inimigos próximos e desacelerando-os em 25% por 2.5 s. Pode ser reativado dentro de 5 s para teleportar Tyrael até a espada e desacelerar novamente os inimigos próximos.",
        displayText:
          'Desacelera e causa dano dentro de uma área. Use de novo para se teleportar para essa área.',
        vital: 'Mana: 45',
        cooldown: 'Recarga: 12 segundos',
        slug: 'eldruins-might',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/tyrael/abilities/icons/eldruins-might_square.png',
      },
      {
        name: 'Retidão',
        description:
          'Tyrael recebe um Escudo que absorve até 336 de dano e protege Tropas e Heróis aliados próximos em 40% desse valor por 4 s.',
        displayText: 'Ganha um escudo temporário',
        vital: 'Mana: 45',
        cooldown: 'Recarga: 9 segundos',
        slug: 'righteousness',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/tyrael/abilities/icons/righteousness_square.png',
      },
      {
        name: 'Castigo',
        description:
          'Golpeia a área-alvo, causando 150 de dano. Aumenta a Velocidade de Movimento dos aliados que passam pela área em 25% por 2 segundos.',
        displayText: 'Causa dano em uma área e acelera os aliados próximos',
        vital: 'Mana: 45',
        cooldown: 'Recarga: 6 segundos',
        slug: 'smite',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/tyrael/abilities/icons/smite_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: 'Julgamento',
        description:
          'Após 0.75 s, investe contra um Herói inimigo, causando 150 de dano e atordoando-o por 1.5 s. Inimigos próximos são repelidos e recebem 75 de dano.',
        displayText: 'Investe contra um Herói inimigo e o atordoa',
        vital: 'Mana: 80',
        cooldown: 'Recarga: 70 segundos',
        slug: 'judgment',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/tyrael/abilities/icons/judgment_square.png',
      },
      {
        name: 'Santificação',
        description:
          'Depois de 0.5 s, cria um campo de energia sagrada que deixa os Heróis aliados invulneráveis. Dura 3 s.',
        displayText: 'Cria zona de Invulnerável',
        vital: 'Mana: 75',
        cooldown: 'Recarga: 100 segundos',
        slug: 'sanctification',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/tyrael/abilities/icons/sanctification_square.png',
      },
    ],
    expandedRole: {
      name: 'Tanque',
      description:
        'Tanque Defensores da linha de frente, capazes de resistir a grandes estragos. Cuidam da proteção dos companheiros mais frágeis.',
      slug: 'tank',
    },
    stats: {
      damage: 6,
      utility: 6,
      survivability: 8,
      complexity: 5,
    },
    skin: {
      id: 'TyraelCommon',
      name: {
        en_US: 'Archangel of Justice',
        es_MX: 'Arcángel de la Justicia',
        pt_BR: 'Arcanjo da Justiça',
        de_DE: 'Erzengel der Gerechtigkeit',
        en_GB: 'Archangel of Justice',
        es_ES: 'Arcángel de la Justicia',
        fr_FR: 'Archange de la Justice',
        it_IT: 'Arcangelo della Giustizia',
        pl_PL: 'Archanioł Sprawiedliwości',
        ru_RU: 'Архангел Справедливости',
        ko_KR: '정의의 대천사',
        zh_TW: '義天使',
        zh_CN: '正义天使',
      },
      description: {
        en_US: 'Archangel of Justice',
        es_MX: 'Arcángel de la Justicia',
        pt_BR: 'Arcanjo da Justiça',
        de_DE: 'Erzengel der Gerechtigkeit',
        en_GB: 'Archangel of Justice',
        es_ES: 'Arcángel de la Justicia',
        fr_FR: 'Archange de la Justice',
        it_IT: 'Arcangelo della Giustizia',
        pl_PL: 'Archanioł Sprawiedliwości',
        ru_RU: 'Архангел Справедливости',
        ko_KR: '정의의 대천사',
        zh_TW: '義天使',
        zh_CN: '正义天使',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/TyraelCommon?namespace=hms_80333',
      },
      slug: 'archangel-of-justice',
    },
  },
  {
    name: 'Tyrande',
    title: 'Alta-sacerdotisa de Eluna',
    role: {
      name: 'Suporte',
      description:
        'Suporte O Suporte concede bônus e outros benefícios aos companheiros.',
      slug: 'support',
    },
    type: {
      name: 'Longo Alcance',
      slug: 'ranged',
    },
    description:
      'Tyrande Murmuréolo inspira medo em todos os que desejam o mal dos Kaldorei. Como sentinela de mais alto posto e alta-sacerdotisa de Eluna, ela não só é a guerreira mais letal dos elfos noturnos, mas também sua líder mais astuta.',
    shortDescription:
      'Uma Curandeira que ajuda no controle e no abate dos inimigos.',
    difficulty: 'Médio',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/tyrande/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/tyrande-6aaebe58de.jpg',
    franchise: 'Warcraft',
    release: '2014-03-13T00:00:00.000Z',
    isNew: false,
    slug: 'tyrande',
    trait: {
      name: 'Marca da Caçadora',
      description:
        'Revela um inimigo que não seja estrutura e reduz a Armadura dele em 15 por 4 s.',
      displayText: 'Reduz Armadura e revela alvo Marcado',
      cooldown: 'Recarga: 20 segundos',
      slug: 'hunters-mark',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/tyrande/traits/icons/hunters-mark_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/tyrande/',
    abilities: [
      {
        name: 'Luz de Eluna',
        description:
          'Cura 255 de Vida de um Herói aliado. A recarga da Luz de Eluna é reduzida em 1.5 s toda vez que Tyrande atinge um inimigo com um Ataque Básico ou causa dano a um Herói inimigo.  Armazena até 2 cargas. A recarga restaura todas as cargas ao mesmo tempo.',
        displayText: 'Cura um Herói aliado',
        vital: 'Mana: 15',
        cooldown: 'Recarga da carga: 16 segundos',
        slug: 'light-of-elune',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/tyrande/abilities/icons/light-of-elune_square.png',
      },
      {
        name: 'Sentinela',
        description:
          'Envia uma Coruja que cruza o campo de batalha, revelando o caminho. Causa 120 de dano ao primeiro Herói atingido, revelando-o por 5 s.',
        displayText:
          'Dispara uma Coruja batedora que revela e causa dano a Heróis inimigos',
        vital: 'Mana: 50',
        cooldown: 'Recarga: 15 segundos',
        slug: 'sentinel',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/tyrande/abilities/icons/sentinel_square.png',
      },
      {
        name: 'Labareda Lunar',
        description:
          'Após 0.75 s, causa 150 de dano e atordoa os inimigos na área selecionada por 0.75 s.',
        displayText: 'Atordoa e causa dano aos inimigos em uma área',
        vital: 'Mana: 60',
        cooldown: 'Recarga: 13 segundos',
        slug: 'lunar-flare',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/tyrande/abilities/icons/lunar-flare_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: 'Espreitadora Sombria',
        description:
          'Concede Furtividade a todos os Heróis aliados por 10 s e os cura em 380 de Vida ao longo de 10 s. Permanecer imóvel por pelo menos 1.5 s com Furtividade concede Invisibilidade.',
        displayText: 'Cura e concede Furtividade a todos os aliados',
        vital: 'Mana: 75',
        cooldown: 'Recarga: 90 segundos',
        slug: 'shadowstalk',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/tyrande/abilities/icons/shadowstalk_square.png',
      },
      {
        name: 'Chuva Estelar',
        description:
          'Causa 92 de dano por segundo e desacelera os inimigos na área-alvo em 20%. Dura 6 s.',
        displayText: 'Causa dano e desacelera os inimigos em uma área',
        vital: 'Mana: 75',
        cooldown: 'Recarga: 80 segundos',
        slug: 'starfall',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/tyrande/abilities/icons/starfall_square.png',
      },
    ],
    expandedRole: {
      name: 'Curandeiro',
      description:
        'Curandeiro Amigos para todas as horas. Sempre presentes para manter os aliados vivos e relativamente saudáveis nas lutas em equipe.',
      slug: 'healer',
    },
    stats: {
      damage: 5,
      utility: 7,
      survivability: 4,
      complexity: 7,
    },
    skin: {
      id: 'TyrandeCommon',
      name: {
        en_US: 'High Priestess of Elune',
        es_MX: 'Suma sacerdotisa de Elune',
        pt_BR: 'Alta-sacerdotisa de Eluna',
        de_DE: 'Hohepriesterin von Elune',
        en_GB: 'High Priestess of Elune',
        es_ES: 'Suma sacerdotisa de Elune',
        fr_FR: 'Grande prêtresse d’Élune',
        it_IT: 'Gran Sacerdotessa di Elune',
        pl_PL: 'Arcykapłanka Eluny',
        ru_RU: 'Верховная жрица Элуны',
        ko_KR: '엘룬의 대여사제',
        zh_TW: '伊露恩的高階女祭司',
        zh_CN: '艾露恩的高阶女祭司',
      },
      description: {
        en_US: 'High Priestess of Elune',
        es_MX: 'Suma sacerdotisa de Elune',
        pt_BR: 'Alta-sacerdotisa de Eluna',
        de_DE: 'Hohepriesterin von Elune',
        en_GB: 'High Priestess of Elune',
        es_ES: 'Suma sacerdotisa de Elune',
        fr_FR: 'Grande prêtresse d’Élune',
        it_IT: 'Gran Sacerdotessa di Elune',
        pl_PL: 'Arcykapłanka Eluny',
        ru_RU: 'Верховная жрица Элуны',
        ko_KR: '엘룬의 대여사제',
        zh_TW: '伊露恩的高階女祭司',
        zh_CN: '艾露恩的高阶女祭司',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/TyrandeCommon?namespace=hms_80333',
      },
      slug: 'high-priestess-of-elune',
    },
  },
  {
    name: 'Uther',
    title: 'O Arauto da Luz',
    role: {
      name: 'Suporte',
      description:
        'Suporte O Suporte concede bônus e outros benefícios aos companheiros.',
      slug: 'support',
    },
    type: {
      name: 'Corpo a Corpo',
      slug: 'melee',
    },
    description:
      'Primeiro paladino e fundador da Ordem do Punho de Prata, Uther, o Arauto da Luz, é um servo devoto da Luz. Distribuindo justiça com seu martelo, Uther é um bastião da verdade e símbolo inabalável da Aliança.',
    shortDescription: 'Um Curandeiro capaz de anular volumes altos de dano.',
    difficulty: 'Fácil',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/uther/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/uther-7a696bccc7.jpg',
    franchise: 'Warcraft',
    release: '2014-03-13T00:00:00.000Z',
    isNew: false,
    slug: 'uther',
    trait: {
      name: 'Devoção, Vanguarda Eterna',
      description:
        'Heróis aliados afetados pelas Habilidades Básicas de Uther recebem 25 de Armadura por 2 s. Esse efeito não acumula.  Ao morrer, Uther se torna um espírito Invulnerável por até 8 s. Na forma de espírito, é possível curar aliados com Fulgor da Luz.',
      displayText:
        'A cura de Uther concede Armadura, e quando ele morre seu espírito permanece',
      slug: 'devotion-eternal-vanguard',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/uther/traits/icons/devotion-eternal-vanguard_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/uther/',
    abilities: [
      {
        name: 'Luz Sagrada',
        description:
          'Cura 362 de Vida do Herói aliado alvo. Quando o alvo não é Uther, também cura 181 de Vida do próprio Uther.',
        displayText: 'Cura um Herói aliado e Uther',
        vital: 'Mana: 80',
        cooldown: 'Recarga: 12 segundos',
        slug: 'holy-light',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/uther/abilities/icons/holy-light_square.png',
      },
      {
        name: 'Resplendor Sagrado',
        description:
          'Cura 177 de Vida de todos os Heróis e Tropas aliados em linha reta e causa 177 de dano aos inimigos.',
        displayText: 'Cura aliados e danifica inimigos em linha reta',
        vital: 'Mana: 70',
        cooldown: 'Recarga: 12 segundos',
        slug: 'holy-radiance',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/uther/abilities/icons/holy-radiance_square.png',
      },
      {
        name: 'Martelo da Justiça',
        description: 'Causa 109 de dano e atordoa o alvo por 1 s.',
        displayText: 'Atordoa e causa dano a um inimigo',
        vital: 'Mana: 40',
        cooldown: 'Recarga: 10 segundos',
        slug: 'hammer-of-justice',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/uther/abilities/icons/hammer-of-justice_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: 'Escudo Divino',
        description:
          'Deixa um Herói aliado invulnerável e aumenta a Velocidade de Movimento dele em 20% por 3 s.',
        displayText:
          'Concede invulnerabilidade e Velocidade de Movimento aumentada a um aliado ',
        vital: 'Mana: 80',
        cooldown: 'Recarga: 90 segundos',
        slug: 'divine-shield',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/uther/abilities/icons/divine-shield_square.png',
      },
      {
        name: 'Tempestade Divina',
        description:
          'Causa 170 de dano e atordoa os inimigos próximos por 1.75 s.',
        displayText: 'Causa dano e atordoa os inimigos próximos ',
        vital: 'Mana: 80',
        cooldown: 'Recarga: 80 segundos',
        slug: 'divine-storm',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/uther/abilities/icons/divine-storm_square.png',
      },
    ],
    otherAbilities: [
      {
        name: 'Luz Sagrada',
        description:
          'Cura 362 de Vida do Herói aliado alvo. Quando o alvo não é Uther, também cura 181 de Vida do próprio Uther.',
        displayText: 'Cura um Herói aliado e Uther',
        vital: 'Mana: 80',
        cooldown: 'Recarga: 12 segundos',
        slug: 'holy-light',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/uther/abilities/icons/holy-light_square.png',
      },
      {
        name: 'Fulgor da Luz',
        description: 'Cura 230 de Vida de um aliado.',
        displayText: 'Cura um aliado',
        cooldown: 'Recarga: 1.5 segundos',
        slug: 'flash-of-light',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/uther/abilities/icons/flash-of-light_square.png',
      },
      {
        name: 'Mão da Proteção',
        description:
          'Ative para tornar o alvo aliado Irrefreável por 1 s. Não pode ser lançado em Uther. Ataques Básicos reduzem a recarga da Mão da Proteção em 5 s.',
        displayText: 'Torna um aliado Irrefreável',
        cooldown: 'Recarga: 90 segundos',
        slug: 'hand-of-protection',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/uther/abilities/icons/hand-of-protection_square.png',
      },
    ],
    expandedRole: {
      name: 'Curandeiro',
      description:
        'Curandeiro Amigos para todas as horas. Sempre presentes para manter os aliados vivos e relativamente saudáveis nas lutas em equipe.',
      slug: 'healer',
    },
    stats: {
      damage: 3,
      utility: 9,
      survivability: 7,
      complexity: 2,
    },
    skin: {
      id: 'UtherCommon',
      name: {
        en_US: 'The Lightbringer',
        es_MX: 'El Iluminado',
        pt_BR: 'O Arauto da Luz',
        de_DE: 'Der Lichtbringer',
        en_GB: 'The Lightbringer',
        es_ES: 'El Iluminado',
        fr_FR: 'Le Porteur de Lumière',
        it_IT: "L'Araldo della Luce",
        pl_PL: 'Światłodzierżca',
        ru_RU: 'Светоносный',
        ko_KR: '빛의 수호자',
        zh_TW: '光明使者',
        zh_CN: '光明使者',
      },
      description: {
        en_US: 'The Lightbringer',
        es_MX: 'El Iluminado',
        pt_BR: 'O Arauto da Luz',
        de_DE: 'Der Lichtbringer',
        en_GB: 'The Lightbringer',
        es_ES: 'El Iluminado',
        fr_FR: 'Le Porteur de Lumière',
        it_IT: "L'Araldo della Luce",
        pl_PL: 'Światłodzierżca',
        ru_RU: 'Светоносный',
        ko_KR: '빛의 수호자',
        zh_TW: '光明使者',
        zh_CN: '光明使者',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/UtherCommon?namespace=hms_80333',
      },
      slug: 'the-lightbringer',
    },
  },
  {
    name: 'Valla',
    title: 'Caçadora de Demônios',
    role: {
      name: 'Assassino',
      description: 'Assassino Matadores de heróis e semeadores de sofrimento.',
      slug: 'assassin',
    },
    type: {
      name: 'Longo Alcance',
      slug: 'ranged',
    },
    description:
      'Valla testemunhou a ferocidade das crias do inferno em primeira mão quando demônios assolaram sua aldeia e a deixaram para morrer. Sem seu povo, só lhe resta uma motivação: libertar Santuário da imundície demoníaca que corrompe seu solo.',
    shortDescription:
      'Uma Assassina ágil e versátil, capaz de causar muito dano contínuo.',
    difficulty: 'Fácil',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/valla/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/valla-1f7aba3e76.jpg',
    franchise: 'Diablo',
    release: '2014-03-13T00:00:00.000Z',
    isNew: false,
    slug: 'valla',
    trait: {
      name: 'Ódio',
      description:
        'Ataques Básicos concedem cargas de Ódio, até um máximo de 10. Cada aplicação de Ódio aumenta o dano de Ataque Básico em 8% e a Velocidade de Movimento em 1%. Dura 6 segundos.',
      displayText:
        'Os Ataques Básicos dão um bônus temporário de Dano de Ataque e Velocidade de Movimento',
      slug: 'hatred',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/valla/traits/icons/hatred_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/valla/',
    abilities: [
      {
        name: 'Flecha Voraz',
        description:
          'Dispara uma flecha que causa 140 de dano ao primeiro alvo que atinge e depois persegue até mais 2 inimigos, priorizando Heróis e causando 80 de dano. Pode atingir várias vezes um mesmo inimigo.',
        displayText: 'Dispara uma flecha que persegue e atinge vários alvos',
        vital: 'Mana: 60',
        cooldown: 'Recarga: 10 segundos',
        slug: 'hungering-arrow',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/valla/abilities/icons/hungering-arrow_square.png',
      },
      {
        name: 'Tiro Múltiplo',
        description: 'Causa 172 de dano aos inimigos na área-alvo.',
        displayText: 'Causa dano aos inimigos em uma área',
        vital: 'Mana: 75',
        cooldown: 'Recarga: 12 segundos',
        slug: 'multishot',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/valla/abilities/icons/multishot_square.png',
      },
      {
        name: 'Salto Mortal',
        description:
          'Dispara rumo à área selecionada. O próximo Ataque Básico da Valla dentro de 2 s causará 6% a mais de dano por aplicação de Ódio.',
        displayText: 'Corre para determinado local',
        vital: 'Mana: 50',
        cooldown: 'Recarga: 10 segundos',
        slug: 'vault',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/valla/abilities/icons/vault_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: 'Saraivada',
        description:
          'Ataca rapidamente os inimigos a 10 m de alcance, causando 60 de dano por acerto, dando prioridade aos Heróis e depois às Tropas. Valla pode mover-se e usar a habilidade Salto Mortal durante a Saraivada. Dura 4 s.',
        displayText: 'Dispara um turbilhão de flechas nos inimigos',
        vital: 'Mana: 80',
        cooldown: 'Recarga: 60 segundos',
        slug: 'strafe',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/valla/abilities/icons/strafe_square.png',
      },
      {
        name: 'Chuva de Vingança',
        description:
          'Lança uma onda de Bestas Sombrias que causa 250 de dano e atordoa os inimigos na área selecionada por 0.5 s.  Acumula até 2 cargas.',
        displayText: 'Ataque de área que atordoa os inimigos',
        vital: 'Mana: 50',
        cooldown: 'Recarga da carga: 50 segundos',
        slug: 'rain-of-vengeance',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/valla/abilities/icons/rain-of-vengeance_square.png',
      },
    ],
    expandedRole: {
      name: 'Assassino de Longo Alcance',
      description:
        'Assassino de Longo Alcance Causadores de dano que fazem chover balas, flechas ou feitiços mortíferos sobre os inimigos. Geralmente frágeis, eles se sentem mais seguros mantendo distância dos inimigos.',
      slug: 'ranged-assassin',
    },
    stats: {
      damage: 9,
      utility: 1,
      survivability: 4,
      complexity: 3,
    },
    skin: {
      id: 'DemonHunterCommon',
      name: {
        en_US: 'Demon Hunter',
        es_MX: 'Cazadora de demonios',
        pt_BR: 'Caçadora de Demônios',
        de_DE: 'Dämonenjägerin',
        en_GB: 'Demon Hunter',
        es_ES: 'Cazadora de demonios',
        fr_FR: 'Chasseuse de démons',
        it_IT: 'Cacciatrice di demoni',
        pl_PL: 'Łowczyni Demonów',
        ru_RU: 'Охотница на демонов',
        ko_KR: '악마사냥꾼',
        zh_TW: '狩魔獵人',
        zh_CN: '猎魔人',
      },
      description: {
        en_US: 'Demon Hunter',
        es_MX: 'Cazadora de demonios',
        pt_BR: 'Caçadora de Demônios',
        de_DE: 'Dämonenjägerin',
        en_GB: 'Demon Hunter',
        es_ES: 'Cazadora de demonios',
        fr_FR: 'Chasseuse de démons',
        it_IT: 'Cacciatrice di demoni',
        pl_PL: 'Łowczyni Demonów',
        ru_RU: 'Охотница на демонов',
        ko_KR: '악마사냥꾼',
        zh_TW: '狩魔獵人',
        zh_CN: '猎魔人',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/DemonHunterCommon?namespace=hms_80333',
      },
      slug: 'demon-hunter',
    },
  },
  {
    name: 'Zeratul',
    title: 'Prelado das Trevas',
    role: {
      name: 'Assassino',
      description: 'Assassino Matadores de heróis e semeadores de sofrimento.',
      slug: 'assassin',
    },
    type: {
      name: 'Corpo a Corpo',
      slug: 'melee',
    },
    description:
      "O enigmático templário das trevas Zeratul serve aos Xel'Naga. Além de empunhar com maestria os poderes do Vazio, sua sabedoria angariou-lhe o respeito dos líderes do setor Koprulu — apesar de sua inclinação para entradas dramáticas.",
    shortDescription:
      'Um Assassino furtivo, capaz de confundir os inimigos com seus teleportes.',
    difficulty: 'Difícil',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/zeratul/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/zeratul-2bd326e313.jpg',
    franchise: 'StarCraft',
    release: '2014-03-13T00:00:00.000Z',
    isNew: false,
    slug: 'zeratul',
    trait: {
      name: 'Camuflagem Permanente',
      description:
        'Entra em modo Furtivo automaticamente após permanecer 3 s fora de combate. Receber dano, atacar, usar habilidades ou canalizar quebra a Furtividade. Permanecer imóvel por pelo menos 1.5 s enquanto está Furtivo concede Invisibilidade.',
      displayText:
        'Entra em modo Furtivo quando não está atacando, usando habilidades ou recebendo dano',
      slug: 'permanent-cloak',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/zeratul/traits/icons/permanent-cloak_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/zeratul/',
    abilities: [
      {
        name: 'Cutilada',
        description: 'Causa 200 de dano aos inimigos próximos.',
        displayText: 'Causa dano a todos os inimigos próximos',
        vital: 'Mana: 40',
        cooldown: 'Recarga: 6 segundos',
        slug: 'cleave',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/zeratul/abilities/icons/cleave_square.png',
      },
      {
        name: 'Espinho de Singularidade',
        description:
          'Atira na direção do alvo um Espinho de Singularidade que gruda no primeiro inimigo atingido. Causa 240 de dano após 1 s e desacelera o inimigo em 40% por 3 s.',
        displayText: 'Desacelera e causa dano ao primeiro inimigo atingido',
        vital: 'Mana: 70',
        cooldown: 'Recarga: 12 segundos',
        slug: 'singularity-spike',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/zeratul/abilities/icons/singularity-spike_square.png',
      },
      {
        name: 'Translação',
        description:
          'Teleporta-se para o local selecionado.  Usar esta habilidade não cancela a Furtividade.',
        displayText:
          'Teleporta para determinado local. A habilidade não cancela a camuflagem',
        vital: 'Mana: 50',
        cooldown: 'Recarga: 10 segundos',
        slug: 'blink',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/zeratul/abilities/icons/blink_square.png',
      },
      {
        name: 'Lâmina Vorpal',
        description:
          'Ative para se teleportar até o último alvo que não seja estrutura atacado por Zeratul nos últimos 3 s. O alvo permanecerá revelado durante esses 3 s.',
        displayText: 'Teleporta-se até o último inimigo atacado',
        cooldown: 'Recarga: 15 segundos',
        slug: 'vorpal-blade',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/zeratul/abilities/icons/vorpal-blade_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: 'Poder dos Nerazim',
        description:
          'Ative para lançar uma versão sem bônus de talento da última Habilidade Básica usada por Zeratul, causando 50% a menos de dano.  Passivo: Depois de usar uma habilidade, o próximo Ataque Básico de Zeratul dentro de 6 s causa 30% a mais de dano.',
        displayText: 'Relança a última Habilidade Básica',
        vital: 'Mana: 30',
        cooldown: 'Recarga: 20 s',
        slug: 'might-of-the-nerazim',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/zeratul/abilities/icons/might-of-the-nerazim_square.png',
      },
      {
        name: 'Prisão Destruidora',
        description:
          'Desacelera o tempo em uma área quase até parar, submetendo aliados e inimigos a Parar o Tempo por 5 s. Zeratul não é afetado.',
        displayText: 'Parar o Tempo tem uma área como alvo',
        vital: 'Mana: 80',
        cooldown: 'Recarga: 100 segundos',
        slug: 'void-prison',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/zeratul/abilities/icons/void-prison_square.png',
      },
    ],
    otherAbilities: [
      {
        name: 'Ataque Sombrio',
        description:
          'Ataques Básicos fazem com que Zeratul invista contra os inimigos e ganhe um aumento de 20% na Velocidade de Ataque. Dura 4 segundos.',
        displayText: 'Ataques Básicos teleportam até o inimigo',
        vital: 'Mana: 50',
        cooldown: 'Recarga: 45 segundos',
        slug: 'shadow-assault',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/zeratul/abilities/icons/shadow-assault_square.png',
      },
      {
        name: 'Ataque Sombrio',
        description:
          'Ataques Básicos fazem com que Zeratul invista contra os inimigos e ganhe um aumento de 20% na Velocidade de Ataque. Dura 4 segundos.',
        displayText: 'Ataques Básicos teleportam até o inimigo',
        vital: 'Mana: 50',
        cooldown: 'Recarga: 45 segundos',
        slug: 'shadow-assault',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/zeratul/abilities/icons/shadow-assault_square.png',
      },
    ],
    expandedRole: {
      name: 'Assassino Corpo a Corpo',
      description:
        'Assassino Corpo a Corpo Matadores de heróis e semeadores de sofrimento. Especialistas em causar dano elevado a alvos únicos e emboscadas.',
      slug: 'melee-assassin',
    },
    stats: {
      damage: 8,
      utility: 6,
      survivability: 6,
      complexity: 5,
    },
    skin: {
      id: 'ZeratulCommon',
      name: {
        en_US: 'Dark Prelate',
        es_MX: 'Prelado Oscuro',
        pt_BR: 'Prelado das Trevas',
        de_DE: 'Dunkler Prälat',
        en_GB: 'Dark Prelate',
        es_ES: 'Prelado tétrico',
        fr_FR: 'Prélat noir',
        it_IT: 'Prelato oscuro',
        pl_PL: 'Mroczny Prałat',
        ru_RU: 'Темный прелат',
        ko_KR: '암흑 정무관',
        zh_TW: '黑暗教長',
        zh_CN: '黑暗教长',
      },
      description: {
        en_US: 'Dark Prelate',
        es_MX: 'Prelado Oscuro',
        pt_BR: 'Prelado das Trevas',
        de_DE: 'Dunkler Prälat',
        en_GB: 'Dark Prelate',
        es_ES: 'Prelado tétrico',
        fr_FR: 'Prélat noir',
        it_IT: 'Prelato oscuro',
        pl_PL: 'Mroczny Prałat',
        ru_RU: 'Темный прелат',
        ko_KR: '암흑 정무관',
        zh_TW: '黑暗教長',
        zh_CN: '黑暗教长',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/ZeratulCommon?namespace=hms_80333',
      },
      slug: 'dark-prelate',
    },
  },
  {
    name: 'C.T.E.',
    title: 'Deus do Rock',
    role: {
      name: 'Guerreiro',
      description: 'Guerreiro Defensores e combatentes da linha de frente.',
      slug: 'warrior',
    },
    type: {
      name: 'Corpo a Corpo',
      slug: 'melee',
    },
    description:
      'O Poder da Horda encarnado no chefe tauren mais cabuloso do pedaço, que manda os riffs e solos de guitarra mais brutais de toda Azeroth. Quando ele toca, todos os cabeludos piram no bate cabeça.',
    shortDescription: 'Um Tanque que oferece muitos auxílios à equipe aliada.',
    difficulty: 'Fácil',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/etc/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/etc-8dda57bbf5.jpg',
    franchise: 'Warcraft',
    release: '2014-01-01T00:00:00.000Z',
    isNew: false,
    slug: 'etc',
    trait: {
      name: 'Estrela do Rock',
      description:
        'Depois de usar uma habilidade Básica ou Heroica, o C.T.E. ganha 25 de Armadura por 2 s. Este efeito não acumula.',
      displayText: 'Após usar uma habilidade, o C.T.E. ganha Armadura',
      slug: 'rockstar',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/etc/traits/icons/rockstar_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/etc/',
    abilities: [
      {
        name: 'Deslizadinha do Rock',
        description:
          'Desliza até um ponto, causando 91 de dano aos inimigos atingidos e atordoando-os por 1.25 segundo.',
        displayText:
          'Dispara até uma área, atordoando e causando dano aos inimigos atingidos',
        vital: 'Mana: 60',
        cooldown: 'Recarga: 12 segundos',
        slug: 'powerslide',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/etc/abilities/icons/powerslide_square.png',
      },
      {
        name: 'Solo Sinistroso',
        description: 'Causa 68 de dano aos inimigos próximos, repelindo-os.',
        displayText: 'Repele e causa dano aos inimigos próximos',
        vital: 'Mana: 50',
        cooldown: 'Recarga: 10 segundos',
        slug: 'face-melt',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/etc/abilities/icons/face-melt_square.png',
      },
      {
        name: 'Solo de Guitarra',
        description: 'Regenera 66 de Vida por segundo durante 4 segundos.',
        displayText: 'Recupera Vida',
        vital: 'Mana: 40',
        cooldown: 'Recarga: 9 segundos',
        slug: 'guitar-solo',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/etc/abilities/icons/guitar-solo_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: 'Roda Punk',
        description:
          'Após 0.75 segundo, canaliza um efeito que atordoa os inimigos por 4 segundos.',
        displayText: 'Os inimigos próximos são forçados a dançar',
        vital: 'Mana: 100',
        cooldown: 'Recarga: 120 segundos',
        slug: 'mosh-pit',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/etc/abilities/icons/mosh-pit_square.png',
      },
      {
        name: 'Pulo do Palco',
        description:
          'Salta no local selecionado e cai após 2,75 segundos, causando 330 de dano aos inimigos em linha reta e desacelerando-os em 50% por 3 segundos.',
        displayText: 'Pula para outro local e causa dano',
        vital: 'Mana: 100',
        cooldown: 'Recarga: 75 segundos',
        slug: 'stage-dive',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/etc/abilities/icons/stage-dive_square.png',
      },
    ],
    expandedRole: {
      name: 'Tanque',
      description:
        'Tanque Defensores da linha de frente, capazes de resistir a grandes estragos. Cuidam da proteção dos companheiros mais frágeis.',
      slug: 'tank',
    },
    stats: {
      damage: 4,
      utility: 6,
      survivability: 9,
      complexity: 3,
    },
    skin: {
      id: 'ETCCommon',
      name: {
        en_US: 'Rock God',
        es_MX: 'Dios del rock',
        pt_BR: 'Deus do Rock',
        de_DE: 'Rocklegende',
        en_GB: 'Rock God',
        es_ES: 'Dios del rock',
        fr_FR: 'Dieu du rock',
        it_IT: 'Dio del Rock',
        pl_PL: 'Bóg Rocka',
        ru_RU: 'Икона рока',
        ko_KR: '록의 신',
        zh_TW: '搖滾之神',
        zh_CN: '摇滚教父',
      },
      description: {
        en_US: 'Rock God',
        es_MX: 'Dios del rock',
        pt_BR: 'Deus do Rock',
        de_DE: 'Rocklegende',
        en_GB: 'Rock God',
        es_ES: 'Dios del rock',
        fr_FR: 'Dieu du rock',
        it_IT: 'Dio del Rock',
        pl_PL: 'Bóg Rocka',
        ru_RU: 'Икона рока',
        ko_KR: '록의 신',
        zh_TW: '搖滾之神',
        zh_CN: '摇滚教父',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/ETCCommon?namespace=hms_80333',
      },
      slug: 'rock-god',
    },
  },
  {
    name: 'Falstad',
    title: 'Thane do Martelo Feroz',
    role: {
      name: 'Assassino',
      description: 'Assassino Matadores de heróis e semeadores de sofrimento.',
      slug: 'assassin',
    },
    type: {
      name: 'Longo Alcance',
      slug: 'ranged',
    },
    description:
      'Falstad é o grão-thane do clã Martelo Feroz e um dos membros fundadores do Conselho dos Três Martelos, que preside Altaforja. Ao contrário dos boatos espalhados pelos mentirosos, Falstad não morreu.',
    shortDescription:
      'Um Assassino que voa por grandes distâncias, ideal para mapas grandes.',
    difficulty: 'Médio',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/falstad/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/falstad-82ad6da7f7.jpg',
    franchise: 'Warcraft',
    release: '2014-01-01T00:00:00.000Z',
    isNew: false,
    slug: 'falstad',
    trait: {
      name: 'Vento de Popa',
      description:
        'Ganha 15% de Velocidade de Movimento se passar 6 s sem receber dano.',
      displayText:
        'Após alguns segundos sem receber dano, sua Velocidade de Movimento aumenta',
      slug: 'tailwind',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/falstad/traits/icons/tailwind_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/falstad/',
    abilities: [
      {
        name: 'Martelorangue',
        description:
          'Atira um Martelo que retorna para Falstad, causando 121 de dano e desacelerando os inimigos em 25% por 2 s.',
        displayText:
          'Arremessa um Martelo que vai e volta. O Martelo causa dano e desacelera os inimigos',
        vital: 'Mana: 60',
        cooldown: 'Recarga: 10 segundos',
        slug: 'hammerang',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/falstad/abilities/icons/hammerang_square.png',
      },
      {
        name: 'Para-raios',
        description:
          'Causa 107 de dano a um inimigo, mais 75 de dano por segundo durante 4 s enquanto você permanecer perto do alvo.',
        displayText:
          'Causa dano ao alvo inimigo enquanto permanecer perto dele',
        vital: 'Mana: 60',
        cooldown: 'Recarga: 13 segundos',
        slug: 'lightning-rod',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/falstad/abilities/icons/lightning-rod_square.png',
      },
      {
        name: 'Tunô Barril',
        description:
          'Dispara para a frente com um Escudo de 171 pontos que dura 3 segundos.',
        displayText:
          'Você corre para um determinado local e ganha um escudo temporário',
        vital: 'Mana: 70',
        cooldown: 'Recarga: 13 segundos',
        slug: 'barrel-roll',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/falstad/abilities/icons/barrel-roll_square.png',
      },
      {
        name: 'Voo',
        description:
          'Em vez de montar, Falstad pode voar por grandes distâncias.',
        displayText:
          'Em vez de montar, Falstad pode voar por grandes distâncias',
        cooldown: 'Recarga: 75 segundos',
        slug: 'flight',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/falstad/abilities/icons/flight_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: 'Golpe das Terras Agrestes',
        description:
          'Após 1 s, causa 475 de dano aos inimigos enfileirados até uma longa distância. A recarga é reduzida em 25 s para cada Herói inimigo atingido.',
        displayText: 'Feixe de dano de longo alcance',
        vital: 'Mana: 100',
        cooldown: 'Recarga: 120 segundos',
        slug: 'hinterland-blast',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/falstad/abilities/icons/hinterland-blast_square.png',
      },
      {
        name: 'Rajada Poderosa',
        description:
          'Empurra os inimigos e reduz em 40% sua velocidade de movimento. O efeito se esvai ao longo de 4 segundos.',
        displayText: 'Repele os inimigos e desacelera',
        vital: 'Mana: 70',
        cooldown: 'Recarga: 60 segundos',
        slug: 'mighty-gust',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/falstad/abilities/icons/mighty-gust_square.png',
      },
    ],
    expandedRole: {
      name: 'Assassino de Longo Alcance',
      description:
        'Assassino de Longo Alcance Causadores de dano que fazem chover balas, flechas ou feitiços mortíferos sobre os inimigos. Geralmente frágeis, eles se sentem mais seguros mantendo distância dos inimigos.',
      slug: 'ranged-assassin',
    },
    stats: {
      damage: 8,
      utility: 4,
      survivability: 4,
      complexity: 5,
    },
    skin: {
      id: 'FalstadCommon',
      name: {
        en_US: 'Wildhammer Thane',
        es_MX: 'Señor feudal de los Martillo Salvaje',
        pt_BR: 'Thane do Martelo Feroz',
        de_DE: 'Than der Wildhämmer',
        en_GB: 'Wildhammer Thane',
        es_ES: 'Señor feudal Martillo Salvaje',
        fr_FR: 'Thane des Marteaux-Hardis',
        it_IT: 'Thane dei Granmartello',
        pl_PL: 'Tan Dzikiego Młota',
        ru_RU: 'Тан клана Громового Молота',
        ko_KR: '와일드해머 영주',
        zh_TW: '蠻鎚領主',
        zh_CN: '蛮锤领主',
      },
      description: {
        en_US: 'Wildhammer Thane',
        es_MX: 'Señor feudal de los Martillo Salvaje',
        pt_BR: 'Thane do Martelo Feroz',
        de_DE: 'Than der Wildhämmer',
        en_GB: 'Wildhammer Thane',
        es_ES: 'Señor feudal Martillo Salvaje',
        fr_FR: 'Thane des Marteaux-Hardis',
        it_IT: 'Thane dei Granmartello',
        pl_PL: 'Tan Dzikiego Młota',
        ru_RU: 'Тан клана Громового Молота',
        ko_KR: '와일드해머 영주',
        zh_TW: '蠻鎚領主',
        zh_CN: '蛮锤领主',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/FalstadCommon?namespace=hms_80333',
      },
      slug: 'wildhammer-thane',
    },
  },
  {
    name: 'Gasganete',
    title: 'Chefe da Vila Catraca',
    role: {
      name: 'Especialista',
      description:
        'Especialista Quebradores de regras e mestres do combate diferenciado.',
      slug: 'specialist',
    },
    type: {
      name: 'Corpo a Corpo',
      slug: 'melee',
    },
    description:
      'Poucos considerariam Gasganete um guerreiro, mas o que lhe falta em estatura ele compensa com seu conhecimento de mecânica. Além disso, ninguém se torna chefe de uma cidade explosiva como a Vila Catraca só sendo simpático, se é que você me entende.',
    shortDescription:
      'Um Evocador especializado em controlar pontos importantes do campo de batalha.',
    difficulty: 'Médio',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/gazlowe/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/gazlowe-de07e3f5cd.jpg',
    franchise: 'Warcraft',
    release: '2014-01-01T00:00:00.000Z',
    isNew: false,
    slug: 'gazlowe',
    trait: {
      name: 'Reciclador',
      description:
        'Estruturas inimigas e Torres Arrebenta!, quando destruídas, deixam cair Sucata. Ao recolher Sucata, restaura 30 de Mana e as habilidades recarregam três vezes mais rápido por 3 s.   Ative o Reciclador para transformar uma Torre Arrebenta! em Sucata.',
      displayText:
        'Torres de Artilharia e estruturas inimigas deixam Sucata que repõe Mana e reduz recargas',
      slug: 'salvager',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/gazlowe/traits/icons/salvager_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/gazlowe/',
    abilities: [
      {
        name: 'Torre Arrebenta!',
        description:
          'Cria uma torreta que causa 62 de dano. Dura 30 s.  Acumula até 2 cargas.',
        displayText: 'Cria uma torreta que dispara contra os inimigos próximos',
        vital: 'Mana: 70',
        cooldown: 'Recarga da carga: 15 segundos',
        slug: 'rock-it-turret',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/gazlowe/abilities/icons/rock-it-turret_square.png',
      },
      {
        name: 'Lêiser Mortau',
        description:
          'Ataque carregado que causa 137 de dano aos inimigos em linha reta. Dano e alcance aumentam proporcionalmente à duração do carregamento, até 100% após 3 s.  O Lêiser Mortau pode ser canalizado por tempo indefinido.',
        displayText:
          'Carrega e dispara um laser. Dano e alcance aumentam proporcionais ao tempo de carga.',
        vital: 'Mana: 60',
        cooldown: 'Recarga: 12 segundos',
        slug: 'deth-lazor',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/gazlowe/abilities/icons/deth-lazor_square.png',
      },
      {
        name: 'Carga de Xplôdio',
        description:
          'Arma uma bomba que causa 233 de dano aos inimigos na área-alvo após 2.5 segundos, atordoando-os por 1.75 segundo.',
        displayText:
          'Arremessa uma bomba-relógio que atordoa e causa dano aos inimigos em uma área',
        vital: 'Mana: 60',
        cooldown: 'Recarga: 14 segundos',
        slug: 'xplodium-charge',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/gazlowe/abilities/icons/xplodium-charge_square.png',
      },
      {
        name: 'Concentrar Torres!',
        description:
          'Ordena que qualquer Torre Arrebenta! próxima se concentre no alvo.',
        displayText: 'Ordena às Torres Arrebenta! que ataquem um alvo.',
        slug: 'focus-turrets',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/gazlowe/abilities/icons/focus-turrets_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: 'Robogoblin',
        description:
          'Ative para ganhar 40 de Armadura e 30% de Velocidade de Movimento por 4 s.   Passivo: Ataques Básicos causam 100% a mais de dano. ',
        displayText:
          'Aumenta Dano de Ataque, Armadura, Velocidade de Movimento',
        cooldown: 'Recarga: 60 segundos',
        slug: 'robo-goblin',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/gazlowe/abilities/icons/robo-goblin_square.png',
      },
      {
        name: 'Gravitabomba 3000',
        description:
          'Após 2 segundos, puxa os inimigos para o centro da área e causa 251 de dano.',
        displayText: 'Atrai os inimigos e causa dano',
        vital: 'Mana: 80',
        cooldown: 'Recarga: 90 segundos',
        slug: 'grav-o-bomb-3000',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/gazlowe/abilities/icons/grav-o-bomb-3000_square.png',
      },
    ],
    expandedRole: {
      name: 'Assassino Corpo a Corpo',
      description:
        'Assassino Corpo a Corpo Matadores de heróis e semeadores de sofrimento. Especialistas em causar dano elevado a alvos únicos e emboscadas.',
      slug: 'melee-assassin',
    },
    stats: {
      damage: 5,
      utility: 6,
      survivability: 5,
      complexity: 6,
    },
    skin: {
      id: 'TinkerCommon',
      name: {
        en_US: 'Boss of Ratchet',
        es_MX: 'Jefe de Trinquete',
        pt_BR: 'Chefe da Vila Catraca',
        de_DE: 'Chef von Ratschet',
        en_GB: 'Boss of Ratchet',
        es_ES: 'Jefe de Trinquete',
        fr_FR: 'Boss de Cabestan',
        it_IT: 'Boss di Porto Paranco',
        pl_PL: 'Szefu Zapadki',
        ru_RU: 'Шеф Кабестана',
        ko_KR: '톱니항 두목',
        zh_TW: '棘齒城的老大',
        zh_CN: '棘齿城老板',
      },
      description: {
        en_US: 'Boss of Ratchet',
        es_MX: 'Jefe de Trinquete',
        pt_BR: 'Chefe da Vila Catraca',
        de_DE: 'Chef von Ratschet',
        en_GB: 'Boss of Ratchet',
        es_ES: 'Jefe de Trinquete',
        fr_FR: 'Boss de Cabestan',
        it_IT: 'Boss di Porto Paranco',
        pl_PL: 'Szefu Zapadki',
        ru_RU: 'Шеф Кабестана',
        ko_KR: '톱니항 두목',
        zh_TW: '棘齒城的老大',
        zh_CN: '棘齿城老板',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/TinkerCommon?namespace=hms_80333',
      },
      slug: 'boss-of-ratchet',
    },
  },
  {
    name: 'Suturino',
    title: 'Horror de Vila Sombria',
    role: {
      name: 'Guerreiro',
      description: 'Guerreiro Defensores e combatentes da linha de frente.',
      slug: 'warrior',
    },
    type: {
      name: 'Corpo a Corpo',
      slug: 'melee',
    },
    description:
      'Tome cuidado ao cruzar as trilhas sombrias da Floresta do Crepúsculo... Desde que Abercrombie, o Embalsamador, soltou sua abominação em Vila Sombria, Suturino vaga sem rumo pelas estradas, devorando os jogadores de nível baixo da Aliança.',
    shortDescription:
      'Um Tanque que tenta isolar inimigos distantes, trazendo-os para longe dos aliados deles.',
    difficulty: 'Médio',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/stitches/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/stitches-6ed3ea85db.jpg',
    franchise: 'Warcraft',
    release: '2014-01-01T00:00:00.000Z',
    isNew: false,
    slug: 'stitches',
    trait: {
      name: 'Cutelo Cruel',
      description:
        'Ataques Básicos espalham Gás Torpe, envenenando inimigos próximos e causando 45 de dano ao longo de 3 s. Reaplicar o Gás Torpe aumenta a duração dele para até 10 s.',
      displayText: 'Ataques Básicos causam dano colateral periódico',
      slug: 'vile-cleaver',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/stitches/traits/icons/vile-cleaver_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/stitches/',
    abilities: [
      {
        name: 'Gancho',
        description:
          'Puxa o primeiro inimigo atingido para perto de Suturino e causa 91 de dano.',
        displayText: 'Puxa o primeiro alvo atingido para perto do Suturino',
        vital: 'Mana: 75',
        cooldown: 'Recarga: 16 segundos',
        slug: 'hook',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/stitches/abilities/icons/hook_square.png',
      },
      {
        name: 'Batida',
        description:
          'Causa 104 de dano aos inimigos na área-alvo. Inimigos na área de impacto interna recebem 40% a mais de dano e são desacelerados em 45% por 1.5 s.',
        displayText: 'Causa dano e desacelera os inimigos em uma área',
        vital: 'Mana: 40',
        cooldown: 'Recarga: 7 segundos',
        slug: 'slam',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/stitches/abilities/icons/slam_square.png',
      },
      {
        name: 'Devorar',
        description:
          'Causa 319 de dano a unidades não Heroicas e 114 de dano a Heróis. Restaura 20% do máximo de Vida de Suturino.',
        displayText: 'Causa dano a um inimigo e recupera vida',
        vital: 'Mana: 55',
        cooldown: 'Recarga: 20 s',
        slug: 'devour',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/stitches/abilities/icons/devour_square.png',
      },
      {
        name: 'Mão Amiga',
        description:
          'Ative para usar um Gancho que pode atingir Heróis aliados. Quando usado para puxar aliados, a recarga é reduzida em 50%.',
        displayText: 'Puxa o primeiro alvo atingido para perto do Suturino',
        vital: 'Mana: 75',
        cooldown: 'Recarga: 16 segundos',
        slug: 'helping-hand',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/stitches/abilities/icons/helping-hand_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: 'Bílis Pútrida',
        description:
          'Libera uma bílis que causa 37 de dano por segundo aos inimigos na área afetada, desacelerando-os em 35% por 1.5 s. Suturino ganha 20% de Velocidade de Movimento enquanto a bílis é expelida. Dura 8 s.',
        displayText: 'Deixa um rastro de bílis que desacelera inimigos',
        vital: 'Mana: 75',
        cooldown: 'Recarga: 75 segundos',
        slug: 'putrid-bile',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/stitches/abilities/icons/putrid-bile_square.png',
      },
      {
        name: 'Engolir',
        description:
          'Engole um Herói inimigo, prendendo-o por 4 segundos. Quando Engolir acaba, o Herói inimigo recebe mais 274 de dano. O Herói preso não consegue andar nem agir e não recebe dano de outras fontes.',
        displayText: 'Devora completamente um Herói inimigo',
        vital: 'Mana: 70',
        cooldown: 'Recarga: 65 segundos',
        slug: 'gorge',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/stitches/abilities/icons/gorge_square.png',
      },
    ],
    otherAbilities: [
      {
        name: 'Peste',
        description:
          'Ative para aplicar Gás Torpe em todos os inimigos próximos. Heróis inimigos atingidos recebem 20% a menos de cura por 5 s.  Passivo: Gás Torpe cura Suturino em 33% do dano causado.',
        displayText: 'Gás Torpe cura; ative para reduzir a cura do inimigo',
        cooldown: 'Recarga: 40 segundos',
        slug: 'blight',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/stitches/abilities/icons/blight_square.png',
      },
    ],
    expandedRole: {
      name: 'Tanque',
      description:
        'Tanque Defensores da linha de frente, capazes de resistir a grandes estragos. Cuidam da proteção dos companheiros mais frágeis.',
      slug: 'tank',
    },
    stats: {
      damage: 6,
      utility: 10,
      survivability: 8,
      complexity: 4,
    },
    skin: {
      id: 'StitchesCommon',
      name: {
        en_US: 'Terror of Darkshire',
        es_MX: 'Terror de Villa Oscura',
        pt_BR: 'Horror de Vila Sombria',
        de_DE: 'Plage von Dunkelhain',
        en_GB: 'Terror of Darkshire',
        es_ES: 'Terror de Villa Oscura',
        fr_FR: 'Terreur de Sombre-Comté',
        it_IT: 'Terrore di Borgoscuro',
        pl_PL: 'Postrach Mrocznych Włości',
        ru_RU: 'Ужас Темнолесья',
        ko_KR: '어둠골의 공포',
        zh_TW: '夜色鎮的夢魘',
        zh_CN: '夜色镇的梦魇',
      },
      description: {
        en_US: 'Terror of Darkshire',
        es_MX: 'Terror de Villa Oscura',
        pt_BR: 'Horror de Vila Sombria',
        de_DE: 'Plage von Dunkelhain',
        en_GB: 'Terror of Darkshire',
        es_ES: 'Terror de Villa Oscura',
        fr_FR: 'Terreur de Sombre-Comté',
        it_IT: 'Terrore di Borgoscuro',
        pl_PL: 'Postrach Mrocznych Włości',
        ru_RU: 'Ужас Темнолесья',
        ko_KR: '어둠골의 공포',
        zh_TW: '夜色鎮的夢魘',
        zh_CN: '夜色镇的梦魇',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/StitchesCommon?namespace=hms_80333',
      },
      slug: 'terror-of-darkshire',
    },
  },
  {
    name: 'Tassadar',
    title: 'Salvador dos Templários',
    role: {
      name: 'Assassino',
      description: 'Assassino Matadores de heróis e semeadores de sofrimento.',
      slug: 'assassin',
    },
    type: {
      name: 'Longo Alcance',
      slug: 'ranged',
    },
    description:
      'Tassadar, um Executor sem igual, lutou incansavelmente para livrar o setor Koprulu da infestação zerg. Só agora, depois de aprender a manusear os poderes do vazio, Tassadar finalmente está pronto para enfrentar a Supermente e seu Enxame devastador.',
    shortDescription: 'Um mago psíquico que causa dano em área à distância.',
    difficulty: 'Médio',
    circleIcon:
      'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/tassadar/circleIcon.png',
    cardPortrait:
      'https://static.heroesofthestorm.com/images/hero-select/card-portraits/tassadar-5c1079ec67.jpg',
    franchise: 'StarCraft',
    release: '2014-01-01T00:00:00.000Z',
    isNew: false,
    slug: 'tassadar',
    trait: {
      name: 'Feixe de Ressonância',
      description:
        'O Ataque Básico de Tassadar se torna um feixe canalizado que desacelera em 15%. Durante a canalização, o dano do seu Ataque Básico e a regeneração de Mana aumentam em 25% por segundo, até um máximo de 100%. Quando a carga está completa, concede 3 de Mana por segundo a mais.  O bônus é perdido após 6 s sem canalizar.',
      displayText: 'Ataques Básicos são canalizados e restauram Mana',
      slug: 'resonance-beam',
      icon:
        'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/tassadar/traits/icons/resonance-beam_square.png',
    },
    href: 'https://heroesofthestorm.com/pt-br/heroes/tassadar/',
    abilities: [
      {
        name: 'Descarga Elétrica',
        description:
          'Cria um feixe de energia Psiônica, causando 280 de dano e desacelerando os inimigos em linha reta em 30% por 2 s.',
        displayText: 'Causa dano e desacelera inimigos em linha reta',
        vital: 'Mana: 55',
        cooldown: 'Recarga: 7 segundos',
        slug: 'shock-ray',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/tassadar/abilities/icons/shock-ray_square.png',
      },
      {
        name: 'Tempestade Psiônica',
        description:
          'Cria por  3 s uma Tempestade Psiônica no local selecionado. Na tempestade, os inimigos recebem  38 de dano a cada 0.5 s, aumentando em 20% a cada instância consecutiva de dano, até um máximo de 100%.',
        displayText: 'Causa dano aos inimigos em uma área',
        vital: 'Mana: 60',
        cooldown: 'Recarga: 8 segundos',
        slug: 'psionic-storm',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/tassadar/abilities/icons/psionic-storm_square.png',
      },
      {
        name: 'Barreira de Energia',
        description:
          'Após 0.5 s, cria uma barreira que bloqueia a passagem de todas as unidades por 2 s.',
        displayText: 'Cria uma barreira intransponível',
        vital: 'Mana: 65',
        cooldown: 'Recarga: 18 segundos',
        slug: 'force-wall',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/tassadar/abilities/icons/force-wall_square.png',
      },
    ],
    heroicAbilities: [
      {
        name: 'Arconte',
        description:
          'Tassadar se transforma em Arconte, ganhando um Escudo equivalente a 40% do máximo de Vida e fortalecendo o Feixe de Ressonância. Dura 12 s.  Feixe de Ressonância: Causa 150 de dano ao alvo e 75 de dano colateral a inimigos próximos. Heróis atingidos têm a Armadura Mágica reduzida em 20 por 2 s. O Feixe de Ressonância fica totalmente carregado quando Arconte está ativo.',
        displayText: 'Torne-se um Arconte',
        vital: 'Mana: 100',
        cooldown: 'Recarga: 90 segundos',
        slug: 'archon',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/tassadar/abilities/icons/archon_square.png',
      },
      {
        name: 'Buraco Negro',
        description:
          'Após 0.5 s de lançamento, cria um Buraco Negro que percorre uma longa trajetória linear. Heróis inimigos dentro da área do Buraco Negro são atraídos rapidamente para o centro dele. Tocar no centro causa 310 de dano e atordoa o alvo por 1.25 s.',
        displayText: 'Causa dano e atordoa Heróis enfileirados',
        vital: 'Mana: 80',
        cooldown: 'Recarga: 70 segundos',
        slug: 'black-hole',
        icon:
          'https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/tassadar/abilities/icons/black-hole_square.png',
      },
    ],
    expandedRole: {
      name: 'Assassino de Longo Alcance',
      description:
        'Assassino de Longo Alcance Causadores de dano que fazem chover balas, flechas ou feitiços mortíferos sobre os inimigos. Geralmente frágeis, eles se sentem mais seguros mantendo distância dos inimigos.',
      slug: 'ranged-assassin',
    },
    stats: {
      damage: 6,
      utility: 7,
      survivability: 7,
      complexity: 4,
    },
    skin: {
      id: 'TassadarCommon',
      name: {
        en_US: 'Savior of the Templar',
        es_MX: 'Salvador de los templarios',
        pt_BR: 'Salvador dos Templários',
        de_DE: 'Retter der Templer',
        en_GB: 'Savior of the Templar',
        es_ES: 'Salvador de los templarios',
        fr_FR: 'Sauveur des templiers',
        it_IT: 'Salvatore dei Templari',
        pl_PL: 'Zbawca Templariuszy',
        ru_RU: 'Спаситель тамплиеров',
        ko_KR: '기사단의 구원자',
        zh_TW: '聖堂救世主',
        zh_CN: '圣堂救世主',
      },
      description: {
        en_US: 'Savior of the Templar',
        es_MX: 'Salvador de los templarios',
        pt_BR: 'Salvador dos Templários',
        de_DE: 'Retter der Templer',
        en_GB: 'Savior of the Templar',
        es_ES: 'Salvador de los templarios',
        fr_FR: 'Sauveur des templiers',
        it_IT: 'Salvatore dei Templari',
        pl_PL: 'Zbawca Templariuszy',
        ru_RU: 'Спаситель тамплиеров',
        ko_KR: '기사단의 구원자',
        zh_TW: '聖堂救世主',
        zh_CN: '圣堂救世主',
      },
      href: {
        href:
          'https://api.blizzard.com/GameDataService/v1/heroes/skin/TassadarCommon?namespace=hms_80333',
      },
      slug: 'savior-of-the-templar',
    },
  },
] as HeroData[];

export default heros;
