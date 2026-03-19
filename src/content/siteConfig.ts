export const siteConfig = {
  siteName: 'Ourivesaria Rinchoa',
  shortName: 'Rinchoa',
  tagline: 'Joalharia e relógios',
  canonicalOrigin: 'https://ourivesariarinchoa.pt',
  locale: 'pt_PT',
  themeColor: '#feefdb',
  defaultSocialImage: '/images/social-share.webp',
  business: {
    name: 'Ourivesaria Rinchoa',
    type: 'JewelryStore',
    telephone: '+351 219 164 630',
    telephoneHref: 'tel:+351219164630',
    whatsapp: '+351 910 707 091',
    whatsappHref: 'https://wa.me/351910707091',
    email: 'geral@ourivesariarinchoa.pt',
    emailHref: 'mailto:geral@ourivesariarinchoa.pt',
    address: {
      streetAddress: 'Calçada da Rinchoa 28',
      locality: 'Rinchoa, Rio de Mouro',
      region: 'Sintra',
      country: 'PT',
      display: 'Calçada da Rinchoa 28, Rinchoa, Rio de Mouro',
    },
    openingHours: [
      {
        label: 'Segunda a Sexta',
        value: '09h00 às 13h00 e das 15h00 às 19h00',
        specifications: [
          {
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '13:00',
          },
          {
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '15:00',
            closes: '19:00',
          },
        ],
      },
      {
        label: 'Sábado',
        value: '09h00 às 13h00',
        specifications: [
          {
            dayOfWeek: ['Saturday'],
            opens: '09:00',
            closes: '13:00',
          },
        ],
      },
      {
        label: 'Atendimento por marcação',
        value: 'Noivas, alianças e avaliações de relógios',
      },
    ],
  },
} as const
