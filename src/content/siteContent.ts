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
      label: 'Relojoaria',
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
      'Atendimento presencial para joalharia, alianças, gravações e avaliações de relógios.',
    methods: [phone, whatsapp, email] satisfies ContactMethod[],
  },
  home: {
    meta: {
      title: 'Ourivesaria Rinchoa | Joalharia, alianças e relojoaria na Rinchoa',
      description:
        'Loja física na Rinchoa para joalharia, alianças, gravações e reparação de relógios com atendimento personalizado.',
      path: '/',
      image: '/images/social-share.webp',
    } satisfies SeoMeta,
    hero: {
      eyebrow: 'Loja física na Rinchoa',
      title: 'Joalharia, alianças e relojoaria com atendimento em loja',
      description:
        'Na Ourivesaria Rinchoa encontra aconselhamento direto, seleção de peças e serviço de relojoaria para quem valoriza atenção ao detalhe.',
      featureImage: {
        src: '/images/repair_bench.webp',
        alt: 'Banco de trabalho com ferramentas e peça em reparação.',
        caption:
          'Atendimento em loja com apoio na escolha de peças e avaliação de serviços.',
      },
      primaryAction: {
        type: 'route',
        label: 'Pedir marcação',
        to: '/contactos',
      } satisfies LinkAction,
      secondaryAction: {
        type: 'route',
        label: 'Ver alianças e casamentos',
        to: '/casamentos',
      } satisfies LinkAction,
      stats: [
        { value: 'Loja física', label: 'atendimento presencial na Rinchoa' },
        { value: 'Por marcação', label: 'alianças, avaliações e atendimento dedicado' },
        { value: 'WhatsApp', label: 'contacto rápido para dúvidas e visitas' },
      ] satisfies HeroStat[],
    },
    carouselSlides: [
      {
        kicker: 'Loja física',
        title: 'Ourivesaria na Rinchoa, com atendimento presencial',
        description:
          'Montra, entrada e atendimento em loja para joalharia, alianças, gravações e relojoaria.',
        imageSrc: '/images/store_front.webp',
        alt: 'Montra e entrada da Ourivesaria Rinchoa.',
      },
      {
        kicker: 'Relojoaria',
        title: 'Limpeza e manutenção com avaliação em loja',
        description:
          'Recebemos o relógio, avaliamos o estado e explicamos o serviço recomendado antes de avançar.',
        imageSrc: '/images/watch_being_repared.webp',
        alt: 'Relógio a ser reparado no banco de trabalho.',
      },
      {
        kicker: 'Casamentos',
        title: 'Alianças escolhidas com tempo e acompanhamento',
        description:
          'Provas, gravações e apoio ao casal em ambiente reservado e sem pressa.',
        imageSrc: '/images/aliancas.webp',
        alt: 'Conjunto de alianças e joias de cerimónia sobre fundo claro.',
      },
    ] satisfies CarouselSlide[],
    sections: {
      services: {
        eyebrow: 'Serviços',
        title: 'O essencial da loja, com foco no atendimento presencial.',
        description:
          'A Ourivesaria Rinchoa recebe clientes para compra de joias, escolha de alianças, gravações e serviços de relojoaria.',
        items: [
          {
            title: 'Relojoaria',
            description:
              'Limpeza, polimento exterior, troca de braceletes e avaliação do estado geral da peça.',
            accent: 'Avaliação em loja',
          },
          {
            title: 'Alianças',
            description:
              'Acompanhamento ao casal para escolher modelos, medidas, acabamentos e gravações.',
            accent: 'Atendimento por marcação',
          },
          {
            title: 'Joalharia',
            description:
              'Peças para oferta, uso diário e ocasiões especiais, com aconselhamento próximo.',
            accent: 'Seleção presencial',
          },
          {
            title: 'Limpeza e ajustes',
            description:
              'Pequenos cuidados para recuperar apresentação, conforto e brilho.',
            accent: 'Acabamento cuidado',
          },
        ] satisfies ServiceCard[],
      },
      reasons: {
        eyebrow: 'Porque nos visitam',
        title: 'Atendimento direto, explicações claras e tempo para decidir.',
        description:
          'A experiência em loja é pensada para quem prefere ver, comparar e escolher com segurança.',
        items: [
          {
            title: 'Escolha acompanhada',
            description:
              'Explicamos materiais, tamanhos, acabamentos e diferenças entre opções.',
          },
          {
            title: 'Serviço de proximidade',
            description:
              'É fácil ligar, enviar mensagem e combinar a melhor altura para passar na loja.',
          },
          {
            title: 'Confiança no detalhe',
            description:
              'Cada atendimento procura ser claro, discreto e adequado à peça ou ocasião.',
          },
        ] satisfies StepItem[],
      },
      process: {
        eyebrow: 'Como funciona',
        title: 'Um processo simples, do primeiro contacto à entrega.',
        description:
          'Quer procure uma peça, um serviço de relojoaria ou alianças, o atendimento segue etapas claras.',
        items: [
          {
            title: '1. Contacto e marcação',
            description:
              'Ligue, envie mensagem ou passe pela loja para explicar o que procura.',
          },
          {
            title: '2. Visita à loja',
            description:
              'Mostramos opções, avaliamos a peça e esclarecemos o serviço ou produto indicado.',
          },
          {
            title: '3. Entrega ou levantamento',
            description:
              'Confirmamos o resultado final, as gravações ou os cuidados a ter depois do serviço.',
          },
        ] satisfies StepItem[],
      },
    },
  },
  restoration: {
    meta: {
      title: 'Reparação e manutenção de relógios | Ourivesaria Rinchoa',
      description:
        'Serviço de relojoaria na Rinchoa para limpeza, manutenção e avaliação de relógios com atendimento presencial.',
      path: '/reparacao-manutencao-relogios',
      image: '/images/repaired_watch.webp',
    } satisfies SeoMeta,
    hero: {
      eyebrow: 'Relojoaria',
      title: 'Limpeza e manutenção de relógios com atendimento em loja',
      description:
        'Recebemos relógios para avaliação, limpeza exterior e manutenção estética, sempre com explicação clara antes de avançar.',
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
        eyebrow: 'Atendimento especializado',
        description:
          'Antes de qualquer intervenção, observamos o estado da peça e explicamos o trabalho recomendado.',
      },
    },
    comparison: {
      eyebrow: 'Antes e depois',
      title: 'Exemplos de recuperação de apresentação.',
      description:
        'Alguns relógios chegam com desgaste visível e saem com leitura, brilho e acabamento mais cuidados.',
    },
    beforeAfter: [
      {
        stage: 'Antes',
        title: 'Desgaste visível e menor definição',
        description:
          'A acumulação de marcas e sujidade retirava presença à peça e dificultava a leitura do conjunto.',
        imageSrc: '/images/big_watch_to_repare.webp',
        alt: 'Relógio antes da intervenção, com sinais de uso.',
      },
      {
        stage: 'Depois',
        title: 'Acabamento mais limpo e presença renovada',
        description:
          'Com limpeza e acabamento exterior, o relógio recupera brilho, contraste e melhor apresentação.',
        imageSrc: '/images/repaired_watch.webp',
        alt: 'Relógio após intervenção, com brilho recuperado.',
      },
    ] satisfies BeforeAfterItem[],
    highlights: {
      eyebrow: 'O que fazemos',
      title: 'O serviço é ajustado ao estado e ao tipo de peça.',
      description:
        'Cada relógio é observado em loja para perceber o nível de limpeza, acabamento e atenção de que precisa.',
      items: [
        {
          title: 'Avaliação inicial',
          description:
            'Análise visual de caixa, vidro, bracelete, coroa e sinais de desgaste.',
        },
        {
          title: 'Limpeza e acabamento',
          description:
            'Intervenções exteriores pensadas para melhorar apresentação e conforto de uso.',
        },
        {
          title: 'Orientação ao cliente',
          description:
            'Indicações práticas de conservação, utilização e manutenção futura.',
        },
      ] satisfies StepItem[],
    },
    processSection: {
      eyebrow: 'Como tratamos o serviço',
      title: 'Tudo começa com uma observação cuidada da peça.',
      description:
        'O atendimento é direto, com expectativas alinhadas antes de avançar.',
    },
    process: [
      {
        title: 'Receção em loja',
        description:
          'Recebemos o relógio, ouvimos o contexto do cliente e observamos o estado geral da peça.',
      },
      {
        title: 'Avaliação e proposta',
        description:
          'Explicamos o que faz sentido fazer, o resultado esperado e o enquadramento do serviço.',
      },
      {
        title: 'Levantamento',
        description:
          'O relógio é entregue em loja com revisão final do acabamento e indicações de conservação.',
      },
    ] satisfies StepItem[],
    contactPanel: {
      eyebrow: 'Agendar avaliação',
      title: 'Traga o seu relógio à loja para avaliação.',
      description:
        'Na loja observamos a peça, explicamos o que é recomendado e alinhamos o serviço antes de avançar.',
    },
  },
  weddings: {
    meta: {
      title: 'Casamentos | Ourivesaria Rinchoa',
      description:
        'Alianças, gravações e joias de cerimónia com atendimento dedicado em loja na Rinchoa.',
      path: '/casamentos',
      image: '/images/gravacao_aliancas.webp',
    } satisfies SeoMeta,
    hero: {
      eyebrow: 'Casamentos',
      title: 'Alianças e joias de cerimónia escolhidas com calma',
      description:
        'Recebemos o casal em loja para experimentar modelos, comparar acabamentos e tratar gravações com tempo.',
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
      title: 'Atendimento dedicado para uma escolha segura.',
      description:
        'O foco está em orientar o casal presencialmente, com atenção ao conforto, ao estilo e aos prazos.',
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
      title: 'Da marcação à entrega, sem pressa e com acompanhamento.',
      description:
        'Organizamos o processo para que o casal escolha com confiança e receba tudo dentro do prazo.',
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
      title: 'Um atendimento pensado para decisões importantes.',
      description:
        'A loja recebe o casal em ambiente tranquilo, com foco na prova, na comparação e na decisão.',
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
      title: 'Marque um atendimento para noivos.',
      description:
        'Recebemos o casal em loja para experimentar alianças, tratar gravações e fechar tudo com tranquilidade.',
    },
  },
  contactPage: {
    meta: {
      title: 'Contactos | Ourivesaria Rinchoa',
      description:
        'Morada, horários, contactos e indicações para visitar a Ourivesaria Rinchoa.',
      path: '/contactos',
      image: '/images/store_front.webp',
    } satisfies SeoMeta,
    hero: {
      title: 'Visite a Ourivesaria Rinchoa',
      description:
        'Passe pela loja, ligue-nos ou envie mensagem para combinar a sua visita.',
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
      title: 'Loja física',
      description: siteConfig.business.address.display,
      note: 'Atendimento presencial para joalharia, alianças, gravações e avaliações de relógios.',
    },
    methodsTitle: 'Fale connosco',
    hoursTitle: 'Horário',
    map: {
      title: 'Ourivesaria Rinchoa - Street View',
      embedSrc:
        'https://www.google.com/maps/embed?pb=!4v1773858868343!6m8!1m7!1scfpncxQ9hEjq-biBDVo7Kw!2m2!1d38.7869887864636!2d-9.322224050056239!3f100.79303157452686!4f-9.101469032479969!5f2.1088444537067614',
    },
    gallery: {
      title: 'Galeria de trabalhos',
      description:
        'Alguns exemplos de peças e relógios atendidos na loja.',
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
      'Joalharia, alianças e relojoaria com atendimento presencial na Rinchoa.',
    legal: 'Ourivesaria Rinchoa · Calçada da Rinchoa 28 · Rio de Mouro',
  },
} as const
