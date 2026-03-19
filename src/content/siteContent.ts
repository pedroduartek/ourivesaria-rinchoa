import { siteConfig } from './siteConfig'

export interface SeoMeta {
  title: string
  description: string
  path: string
  image?: string
  noindex?: boolean
}

export type LinkAction =
  | {
      type: 'route'
      label: string
      to: string
    }
  | {
      type: 'external'
      label: string
      href: string
    }
  | {
      type: 'anchor'
      label: string
      href: string
    }

export interface CarouselSlide {
  kicker: string
  title: string
  description: string
  imageSrc: string
  alt: string
}

interface NavigationItem {
  label: string
  path: string
}

interface ContactMethod {
  label: string
  shortLabel: string
  value: string
  href: string
}

interface HeroStat {
  value: string
  label: string
}

interface ServiceCard {
  title: string
  description: string
  accent: string
}

interface StepItem {
  title: string
  description: string
}

interface BeforeAfterItem {
  stage: string
  title: string
  description: string
  imageSrc: string
  alt: string
}

interface GalleryItem {
  src: string
  alt: string
}

const phone: ContactMethod = {
  label: 'Telefone',
  shortLabel: 'Ligar agora',
  value: siteConfig.business.telephone,
  href: siteConfig.business.telephoneHref,
}

const whatsapp: ContactMethod = {
  label: 'WhatsApp',
  shortLabel: 'Falar por WhatsApp',
  value: siteConfig.business.whatsapp,
  href: siteConfig.business.whatsappHref,
}

const email: ContactMethod = {
  label: 'Email',
  shortLabel: 'Enviar email',
  value: siteConfig.business.email,
  href: siteConfig.business.emailHref,
}

export const siteContent = {
  brand: {
    name: siteConfig.siteName,
    shortName: siteConfig.shortName,
    tagline: siteConfig.tagline,
    logoSrc: '/images/rinchoa_logo.webp',
  },
  navigation: [
    { label: 'Início', path: '/' },
    {
      label: 'Reparação e manutenção de relógios',
      path: '/reparacao-manutencao-relogios',
    },
    { label: 'Casamentos', path: '/casamentos' },
  ] satisfies NavigationItem[],
  navigationAction: {
    type: 'route',
    label: 'Contactos',
    to: '/contactos',
  } satisfies LinkAction,
  contacts: {
    phone,
    whatsapp,
    email,
    address: {
      label: 'Morada',
      value: siteConfig.business.address.display,
    },
    hours: siteConfig.business.openingHours.map(({ label, value }) => ({
      label,
      value,
    })),
    appointmentNote:
      'Recebemos clientes na loja física para aconselhamento, provas e entregas com toda a discrição.',
    methods: [phone, whatsapp, email] satisfies ContactMethod[],
  },
  home: {
    meta: {
      title: 'Ourivesaria Rinchoa | Joalharia, alianças e relojoaria em Sintra',
      description:
        'Atelier de joalharia e relojoaria com atendimento presencial, reparação e manutenção de relógios, serviço de casamentos e foco em receber clientes na loja.',
      path: '/',
      image: '/images/social-share.webp',
    } satisfies SeoMeta,
    hero: {
      eyebrow: 'Ourivesaria familiar em Sintra',
      title: 'Visite-nos na Rinchoa perto da estação de Rio de Mouro',
      description:
        'Estamos à sua espera para apresentar peças, serviços e aconselhamento com atendimento presencial dedicado.',
      featureImage: {
        src: '/images/store_front.webp',
        alt: 'Montra e entrada da Ourivesaria Rinchoa.',
        caption:
          'Montra e entrada da loja para atendimento personalizado e visita presencial.',
      },
      primaryAction: {
        type: 'route',
        label: 'Marcar visita',
        to: '/contactos',
      } satisfies LinkAction,
      secondaryAction: {
        type: 'route',
        label: 'Ver serviços de casamento',
        to: '/casamentos',
      } satisfies LinkAction,
      stats: [
        { value: '25+', label: 'anos a acompanhar clientes da zona' },
        { value: '1 atelier', label: 'com atendimento presencial e discreto' },
        { value: '100%', label: 'foco em contacto direto com a loja' },
      ] satisfies HeroStat[],
    },
    carouselSlides: [
      {
        kicker: 'Atelier luminoso',
        title: 'Receção cuidada e apresentação refinada de peças',
        description:
          'A experiência começa no espaço: tons claros, acabamentos metalizados e atendimento sem pressa para explicar cada detalhe.',
        imageSrc: '/images/repair_bench.webp',
        alt: 'Banco de trabalho com ferramentas e peça em reparação.',
      },
      {
        kicker: 'Relojoaria',
        title: 'Limpeza profunda e reparação e manutenção de relógios com precisão',
        description:
          'Avaliamos cada mecanismo, caixa e bracelete para devolver brilho, presença e confiança ao uso diário ou cerimonial.',
        imageSrc: '/images/watch_being_repared.webp',
        alt: 'Relógio a ser reparado no banco de trabalho.',
      },
      {
        kicker: 'Casamentos',
        title: 'Acompanhamento sereno para alianças e joias de cerimónia',
        description:
          'Marcamos visitas dedicadas para casais que procuram atenção ao estilo, ao conforto e à personalização.',
        imageSrc: '/images/aliancas.webp',
        alt: 'Conjunto de alianças e joias de cerimónia sobre fundo claro.',
      },
    ] satisfies CarouselSlide[],
    sections: {
      services: {
        eyebrow: 'Serviços principais',
        title:
          'Uma presença oficial, sem e-commerce, focada em visita, confiança e continuidade.',
        description:
          'O site foi desenhado para apresentar a loja, explicar os serviços e tornar simples o contacto direto por telefone, WhatsApp ou visita presencial.',
        items: [
          {
            title: 'Reparação e manutenção de relógios',
            description:
              'Limpeza, polimento, revisão estética e aconselhamento para preservar peças pessoais ou de família.',
            accent: 'Antes e depois documentado',
          },
          {
            title: 'Casamentos',
            description:
              'Acompanhamento de noivos para alianças, gravações e joias de cerimónia com marcação dedicada.',
            accent: 'Atendimento por marcação',
          },
          {
            title: 'Joalharia de presença',
            description:
              'Peças para ocasiões importantes, ofertas de assinatura e reinterpretação de joias já existentes.',
            accent: 'Estética sofisticada',
          },
          {
            title: 'Limpeza profissional',
            description:
              'Recuperação de brilho, revisão visual e aconselhamento de manutenção para prolongar a elegância.',
            accent: 'Acabamento delicado',
          },
        ] satisfies ServiceCard[],
      },
      reasons: {
        eyebrow: 'Porque visitar a loja',
        title:
          'Mais do que mostrar peças: o objetivo é receber clientes com calma, critério e transparência.',
        description:
          'A comunicação, o ambiente e a estrutura do site foram desenhados para converter interesse em visita à loja física.',
        items: [
          {
            title: 'Consultoria presencial',
            description:
              'Explicamos materiais, proporções, acabamentos e opções sem pressão comercial nem processos de checkout.',
          },
          {
            title: 'Imagem oficial',
            description:
              'O espaço digital valida a presença da loja e transmite estabilidade, detalhe e profissionalismo.',
          },
          {
            title: 'Contactos imediatos',
            description:
              'Os caminhos para a conversa ficam sempre visíveis para facilitar marcações, esclarecimentos e visitas.',
          },
        ] satisfies StepItem[],
      },
      process: {
        eyebrow: 'Como trabalhamos',
        title:
          'Do primeiro contacto até à entrega, o processo mantém-se simples e transparente.',
        description:
          'Organizámos o atendimento para que cada cliente perceba rapidamente o que esperar em loja.',
        items: [
          {
            title: '1. Contacto inicial',
            description:
              'O cliente partilha o que procura por telefone, WhatsApp ou email e marcamos a melhor altura para receber na loja.',
          },
          {
            title: '2. Encontro presencial',
            description:
              'Apresentamos soluções, avaliamos a peça ou definimos o enquadramento do serviço com explicação clara.',
          },
          {
            title: '3. Entrega acompanhada',
            description:
              'Confirmamos acabamentos, cuidados de manutenção e próximos passos para garantir continuidade da relação.',
          },
        ] satisfies StepItem[],
      },
    },
  },
  restoration: {
    meta: {
      title: 'Reparação e manutenção de relógios | Ourivesaria Rinchoa',
      description:
        'Página dedicada à limpeza, reparação e manutenção de relógios com comparação antes e depois, processo explicado e foco em visita presencial.',
      path: '/reparacao-manutencao-relogios',
      image: '/images/repaired_watch.webp',
    } satisfies SeoMeta,
    hero: {
      eyebrow: 'Limpeza, reparação e manutenção',
      title: 'Relógios com nova presença, sem perder a história da peça.',
      description:
        'Trabalhamos limpeza estética, recuperação de brilho e aconselhamento sobre conservação. O objetivo não é mascarar o tempo, mas devolver clareza, leitura e confiança ao relógio.',
      primaryAction: {
        type: 'anchor',
        label: 'Agendar avaliação',
        href: '#contactos',
      } satisfies LinkAction,
      secondaryAction: {
        type: 'external',
        label: 'Falar connosco',
        href: whatsapp.href,
      } satisfies LinkAction,
      resultCard: {
        eyebrow: 'Resultado visível',
        description:
          'Mostramos com clareza como uma intervenção estética bem calibrada devolve leitura, brilho e presença ao relógio sem desrespeitar a identidade da peça.',
      },
    },
    comparison: {
      eyebrow: 'Antes e depois',
      title: 'Comparação direta para explicar o valor do serviço.',
      description:
        'A página de transformação existe para ajudar o cliente a perceber, visualmente, o ganho de clareza e elegância após a limpeza e o restauro.',
    },
    beforeAfter: [
      {
        stage: 'Antes',
        title: 'Superfície opaca e bracelete sem definição',
        description:
          'Acumulação de resíduos, desgaste visual e falta de contraste nas linhas da caixa comprometiam a leitura e a elegância.',
        imageSrc: '/images/big_watch_to_repare.webp',
        alt: 'Relógio antes da intervenção, com sinais de uso.',
      },
      {
        stage: 'Depois',
        title: 'Brilho recuperado e detalhes visuais novamente legíveis',
        description:
          'Após limpeza e polimento controlado, a peça recupera profundidade, reflexo e uma presença muito mais cuidada.',
        imageSrc: '/images/repaired_watch.webp',
        alt: 'Relógio após intervenção, com brilho recuperado.',
      },
    ] satisfies BeforeAfterItem[],
    highlights: {
      eyebrow: 'O que está incluído',
      title: 'Trabalho criterioso para devolver presença sem exagero.',
      description:
        'Cada intervenção é explicada em loja antes do avanço do serviço, para que o cliente saiba o que vai ser feito e com que limite.',
      items: [
        {
          title: 'Avaliação estética',
          description:
            'Observação de caixa, vidro, bracelete, coroa e mostrador para definir o melhor nível de intervenção.',
        },
        {
          title: 'Limpeza técnica exterior',
          description:
            'Remoção de resíduos e marcas superficiais com abordagem ajustada ao material e à idade da peça.',
        },
        {
          title: 'Orientação de manutenção',
          description:
            'Recomendações práticas para transporte, acondicionamento e frequência ideal de revisão estética.',
        },
      ] satisfies StepItem[],
    },
    processSection: {
      eyebrow: 'Processo de atendimento',
      title: 'Explicação clara antes de qualquer avanço.',
      description:
        'Cada relógio chega com uma história diferente, por isso mantemos um processo curto, legível e sempre validado com o cliente.',
    },
    process: [
      {
        title: 'Receção e triagem',
        description:
          'Identificamos o uso, o histórico e o objetivo do cliente antes de qualquer proposta de intervenção.',
      },
      {
        title: 'Proposta transparente',
        description:
          'Explicamos o que vale a pena limpar, o que deve ser preservado e o resultado expectável.',
      },
      {
        title: 'Entrega em loja',
        description:
          'Mostramos o resultado final presencialmente para confirmar brilho, proporção e satisfação.',
      },
    ] satisfies StepItem[],
    contactPanel: {
      eyebrow: 'Agendar avaliação',
      title: 'Traga o relógio à loja e avaliamos a melhor intervenção.',
      description:
        'O serviço foi pensado para começar presencialmente: analisamos o estado da peça, explicamos limites e definimos o caminho com total transparência.',
    },
  },
  weddings: {
    meta: {
      title: 'Casamentos | Ourivesaria Rinchoa',
      description:
        'Serviço de casamentos com acompanhamento para alianças, gravações e joias de cerimónia, sempre com foco em visita à loja.',
      path: '/casamentos',
      image: '/images/gravacao_aliancas.webp',
    } satisfies SeoMeta,
    hero: {
      eyebrow: 'Serviço para noivos',
      title:
        'Um espaço calmo para escolher alianças e joias de cerimónia com tempo e critério.',
      description:
        'Recebemos casais em contexto reservado para alinhar estilo, conforto, gravações e prazos. O foco está no acompanhamento humano e não numa compra apressada.',
      image: {
        src: '/images/gravacao_aliancas.webp',
        alt: 'Alianças em caixa decorativa para cerimónia.',
      },
      primaryAction: {
        type: 'anchor',
        label: 'Marcar visita para noivos',
        href: '#contactos',
      } satisfies LinkAction,
      secondaryAction: {
        type: 'external',
        label: 'Ligar para a loja',
        href: phone.href,
      } satisfies LinkAction,
    },
    offerings: {
      eyebrow: 'Acompanhamento dedicado',
      title: 'Tudo preparado para decisões importantes sem ruído.',
      description:
        'A página de casamentos existe para orientar o casal, explicar o atendimento e gerar uma visita presencial confortável e confiante.',
      items: [
        {
          title: 'Seleção de alianças',
          description:
            'Analisamos largura, perfil, acabamento e equilíbrio entre presença visual e conforto no uso diário.',
          accent: 'Provas em loja',
        },
        {
          title: 'Gravação e personalização',
          description:
            'Definimos inscrições, datas e detalhes visuais que acrescentam significado sem comprometer elegância.',
          accent: 'Detalhe discreto',
        },
        {
          title: 'Joias para cerimónia',
          description:
            'Ajudamos a coordenar peças para noiva, noivo e oferta familiar com linguagem estética coerente.',
          accent: 'Curadoria presencial',
        },
      ] satisfies ServiceCard[],
    },
    journey: {
      eyebrow: 'Etapas do serviço',
      title: 'Um percurso sereno do primeiro encontro até à entrega final.',
      description:
        'A organização do serviço reduz indecisão e permite que o casal chegue ao dia com tudo alinhado.',
      items: [
        {
          title: '1. Marcação',
          description:
            'Reservamos um momento tranquilo na loja para receber o casal sem interrupções.',
        },
        {
          title: '2. Provas e decisão',
          description:
            'Testamos estilos, esclarecemos dúvidas e fechamos opções com confiança.',
        },
        {
          title: '3. Personalização',
          description:
            'Tratamos gravações, ajustes e detalhes finais mantendo o cronograma sob controlo.',
        },
        {
          title: '4. Entrega',
          description:
            'Fazemos a entrega presencial com revisão final do conforto, do acabamento e da apresentação.',
        },
      ] satisfies StepItem[],
    },
    guidanceSection: {
      eyebrow: 'Orientação em loja',
      title: 'Acompanhamento pensado para reduzir indecisão e aumentar conforto.',
      description:
        'Cada visita é organizada para dar espaço à conversa, à prova e à decisão com tempo.',
    },
    guidance: [
      {
        title: 'Atendimento reservado',
        description:
          'Criamos um ambiente sereno para que a decisão seja tomada com clareza, sem filas ou pressão.',
      },
      {
        title: 'Orientação estética',
        description:
          'Ajudamos a traduzir referências, tom de cerimónia e preferências pessoais em escolhas coerentes.',
      },
      {
        title: 'Coordenação de prazos',
        description:
          'Recomendamos calendarização adequada para garantir provas, ajustes e entrega com margem.',
      },
    ] satisfies StepItem[],
    contactPanel: {
      eyebrow: 'Marcação para noivos',
      title: 'Reserve um atendimento dedicado e escolham com calma.',
      description:
        'As decisões de casamento beneficiam de contexto, luz certa e acompanhamento atento. A loja está preparada para receber o casal com tempo, conforto e discrição.',
    },
  },
  contactPage: {
    meta: {
      title: 'Contactos | Ourivesaria Rinchoa',
      description:
        'Contactos, horários, morada e Street View da Ourivesaria Rinchoa para facilitar a visita à loja.',
      path: '/contactos',
      image: '/images/store_front.webp',
    } satisfies SeoMeta,
    hero: {
      title: 'Contactos e loja',
      description:
        'Encontre as formas de contacto e informações de visita à nossa loja.',
      primaryAction: {
        type: 'external',
        label: whatsapp.shortLabel,
        href: whatsapp.href,
      } satisfies LinkAction,
      secondaryAction: {
        type: 'external',
        label: phone.shortLabel,
        href: phone.href,
      } satisfies LinkAction,
    },
    visitCard: {
      title: 'Visita à loja',
      description: siteConfig.business.address.display,
      note: 'Recebemos clientes na loja física para aconselhamento, provas e entregas com toda a discrição.',
    },
    methodsTitle: 'Contactos diretos',
    hoursTitle: 'Horário',
    map: {
      title: 'Ourivesaria Rinchoa - Street View',
      embedSrc:
        'https://www.google.com/maps/embed?pb=!4v1773858868343!6m8!1m7!1scfpncxQ9hEjq-biBDVo7Kw!2m2!1d38.7869887864636!2d-9.322224050056239!3f100.79303157452686!4f-9.101469032479969!5f2.1088444537067614',
    },
    gallery: {
      title: 'Galeria de trabalhos',
      description:
        'Alguns exemplos de relógios antes e depois das intervenções.',
      items: [
        {
          src: '/images/repaired_watch.webp',
          alt: 'Relógio reparado com brilho recuperado.',
        },
        {
          src: '/images/repaired_watch_2.webp',
          alt: 'Segundo exemplo de relógio reparado.',
        },
        {
          src: '/images/repaired_watch_3.webp',
          alt: 'Terceiro exemplo de relógio reparado.',
        },
        {
          src: '/images/medium_watch_repaired.webp',
          alt: 'Relógio reparado com escala média.',
        },
        {
          src: '/images/watch_to_sell.webp',
          alt: 'Relógio apresentado em estado cuidado.',
        },
      ] satisfies GalleryItem[],
    },
  },
  notFound: {
    meta: {
      title: 'Página não encontrada | Ourivesaria Rinchoa',
      description:
        'A página procurada não foi encontrada. Volte à página inicial da Ourivesaria Rinchoa.',
      path: '/404',
      noindex: true,
    } satisfies SeoMeta,
    eyebrow: 'Erro 404',
    title: 'Página não encontrada',
    description:
      'O conteúdo pedido não está disponível. Volte à página principal para conhecer a loja, os serviços de reparação e manutenção e a área de casamentos.',
    action: {
      type: 'route',
      label: 'Voltar ao início',
      to: '/',
    } satisfies LinkAction,
  },
  footer: {
    navigationTitle: 'Navegação',
    contactsTitle: 'Contactos',
    description:
      'Presença institucional criada para apresentar a loja, reforçar credibilidade e incentivar contacto direto com a equipa.',
    legal:
      'Ourivesaria Rinchoa. Atendimento presencial em Rinchoa, Rio de Mouro.',
  },
} as const
