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

interface HourItem {
  label: string
  value: string
}

interface HeroAction {
  label: string
  href?: string
  to?: string
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

const phone: ContactMethod = {
  label: 'Telefone',
  shortLabel: 'Ligar agora',
  value: '+351 214 321 980',
  href: 'tel:+351214321980',
}

const whatsapp: ContactMethod = {
  label: 'WhatsApp',
  shortLabel: 'Falar por WhatsApp',
  value: '+351 915 240 880',
  href: 'https://wa.me/351915240880',
}

const email: ContactMethod = {
  label: 'Email',
  shortLabel: 'Enviar email',
  value: 'geral@ourivesariarinchoa.pt',
  href: 'mailto:geral@ourivesariarinchoa.pt',
}

export const siteContent = {
  brand: {
    name: 'Ourivesaria Rinchoa',
    shortName: 'Rinchoa',
    tagline: 'Joalharia e relógios',
  },
  navigation: [
    { label: 'Início', path: '/' },
    { label: 'Reparação e manutenção de relógios', path: '/reparacao-manutencao-relogios' },
    { label: 'Casamentos', path: '/casamentos' },
  ] satisfies NavigationItem[],
  contacts: {
    phone,
    whatsapp,
    email,
    address: {
      label: 'Morada',
      value: 'Avenida Dom Afonso Henriques 38, Rinchoa, Rio de Mouro',
    },
    hours: [
      { label: 'Segunda a Sexta', value: '10h00 às 19h00' },
      { label: 'Sábado', value: '10h00 às 13h00' },
      { label: 'Atendimento por marcação', value: 'Noivas, alianças e avaliações de relógios' },
    ] satisfies HourItem[],
    appointmentNote:
      'Recebemos clientes na loja física para aconselhamento, provas e entregas com toda a discrição.',
    methods: [phone, whatsapp, email] satisfies ContactMethod[],
  },
  home: {
    meta: {
      title: 'Ourivesaria Rinchoa | Joalharia, alianças e reparação e manutenção em Sintra',
      description:
        'Atelier de joalharia e relojoaria com atendimento presencial, reparação e manutenção de relógios, serviço de casamentos e foco em receber clientes na loja.',
    },
    hero: {
      eyebrow: 'Ourivesaria familiar em Sintra',
      title: 'Visite-nos na Rinchoa perto da estação de Rio de Mouro',
      description:
        'Estamos à sua espera!',
      primaryAction: { label: 'Marcar visita', href: '/contactos' } satisfies HeroAction,
      secondaryAction: { label: 'Ver serviços de casamento', to: '/casamentos' } satisfies HeroAction,
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
        imageSrc: '/images/repair_bench.jpg',
        alt: 'Banco de trabalho com ferramentas e peça em reparação.',
      },
      {
        kicker: 'Relojoaria',
        title: 'Limpeza profunda e reparação e manutenção de relógios com precisão',
        description:
          'Avaliamos cada mecanismo, caixa e bracelete para devolver brilho, presença e confiança ao uso diário ou cerimonial.',
        imageSrc: '/images/watch_being_repared.jpg',
        alt: 'Relógio a ser reparado no banco de trabalho.',
      },
      {
        kicker: 'Casamentos',
        title: 'Acompanhamento sereno para alianças e joias de cerimónia',
        description:
          'Marcamos visitas dedicadas para casais que procuram atenção ao estilo, ao conforto e à personalização.',
        imageSrc: '/images/aliancas.jpg',
        alt: 'Conjunto de alianças e joias de cerimónia sobre fundo claro.',
      },
    ] satisfies CarouselSlide[],
    sections: {
      services: {
        eyebrow: 'Serviços principais',
        title: 'Uma presença oficial, sem e-commerce, focada em visita, confiança e continuidade.',
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
        title: 'Mais do que mostrar peças: o objetivo é receber clientes com calma, critério e transparência.',
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
        title: 'Do primeiro contacto até à entrega, o processo mantém-se simples e transparente.',
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
    },
    hero: {
      eyebrow: 'Limpeza, reparação e manutenção',
      title: 'Relógios com nova presença, sem perder a história da peça.',
      description:
        'Trabalhamos limpeza estética, recuperação de brilho e aconselhamento sobre conservação. O objetivo não é mascarar o tempo, mas devolver clareza, leitura e confiança ao relógio.',
      primaryAction: { label: 'Agendar avaliação', href: '#contactos' } satisfies HeroAction,
      secondaryAction: { label: 'Falar connosco', href: whatsapp.href } satisfies HeroAction,
    },
    beforeAfter: [
      {
        stage: 'Antes',
        title: 'Superfície opaca e bracelete sem definição',
        description:
          'Acumulação de resíduos, desgaste visual e falta de contraste nas linhas da caixa comprometiam a leitura e a elegância.',
        imageSrc: '/images/big_watch_to_repare.jpg',
        alt: 'Relógio antes da intervenção, com sinais de uso.',
      },
      {
        stage: 'Depois',
        title: 'Brilho recuperado e detalhes visuais novamente legíveis',
        description:
          'Após limpeza e polimento controlado, a peça recupera profundidade, reflexo e uma presença muito mais cuidada.',
        imageSrc: '/images/repaired_watch.jpg',
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
  },
  weddings: {
    meta: {
      title: 'Casamentos | Ourivesaria Rinchoa',
      description:
        'Serviço de casamentos com acompanhamento para alianças, gravações e joias de cerimónia, sempre com foco em visita à loja.',
    },
    hero: {
      eyebrow: 'Serviço para noivos',
      title: 'Um espaço calmo para escolher alianças e joias de cerimónia com tempo e critério.',
      description:
        'Recebemos casais em contexto reservado para alinhar estilo, conforto, gravações e prazos. O foco está no acompanhamento humano e não numa compra apressada.',
      primaryAction: { label: 'Marcar visita para noivos', href: '#contactos' } satisfies HeroAction,
      secondaryAction: { label: 'Ligar para a loja', href: phone.href } satisfies HeroAction,
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
  },
  footer: {
    description:
      'Presença institucional criada para apresentar a loja, reforçar credibilidade e incentivar contacto direto com a equipa.',
    legal: 'Ourivesaria Rinchoa. Atendimento presencial em Rinchoa, Rio de Mouro.',
  },
} as const
