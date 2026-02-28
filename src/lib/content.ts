export type Locale = 'pt' | 'en'

export const WHATSAPP =
  'https://api.whatsapp.com/send?phone=351962993794&text=Ol%C3%A1%2C%20vim%20do%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20servi%C3%A7os'

/**
 * TIPOS “WIDE” (strings normais) — evita o TS prender em literais
 */
export type ContentShape = {
  meta: { title: string; description: string }
  nav: { areas: string; about: string; faq: string; contact: string; cta: string }
  loader: { tagline: string }
  hero: { eyebrow: string; headline: string; headline2: string; sub: string; cta1: string; cta2: string }
  insolvency_section: {
    label: string
    title: string
    sub: string
    services: Array<{ icon: string; title: string; desc: string }>
  }
  areas: {
    label: string
    title: string
    sub: string
    list: Array<{
      id: string
      icon: string
      title: string
      headline: string
      desc: string
      items: string[]
    }>
  }
  about: {
    label: string
    title: string
    sub: string
    bio: string
    bio2: string
    values: Array<{ num: string; label: string; desc: string }>
    quote: string
    office_label: string
  }
  gallery: { title: string; sub: string }
  faq: { label: string; title: string; note: string; items: Array<{ q: string; a: string }> }
  contact: {
    label: string
    title: string
    tagline: string
    address_label: string
    address: string
    phone_label: string
    phone: string
    hours_label: string
    hours: string
    whatsapp: string
    map_label: string
  }
  footer: { legal: string; ethics: string }
}

export const content = {
  pt: {
    meta: {
      title:
        'Carla Guerreiro Marques — Advogada em Setúbal | Direito Comercial, Imigração, Imobiliário, Insolvência',
      description:
        'Escritório de advocacia em Setúbal. Especializada em Direito Comercial, Imigração e Vistos, Imobiliário e Insolvência Pessoal. Agende a sua consulta pelo WhatsApp.',
    },
    nav: {
      areas: 'Áreas de Atuação',
      about: 'O Escritório',
      faq: 'FAQ',
      contact: 'Contacto',
      cta: 'Solicitar Avaliação',
    },
    loader: { tagline: 'Rigor · Estratégia · Confiança' },
    hero: {
      eyebrow: 'Escritório de Advocacia · Setúbal, Portugal',
      headline: 'Horizonte Jurídico com',
      headline2: 'Clareza e Estratégia',
      sub: 'Acompanhamento jurídico estruturado para empresas, investidores e particulares em Portugal.',
      cta1: 'Solicitar Avaliação do Caso',
      cta2: 'Conhecer Áreas de Atuação',
    },
    insolvency_section: {
      label: 'Insolvência Pessoal — Serviços Detalhados',
      title: 'Principais Motivos para Iniciar um Processo de Insolvência Pessoal',
      sub:
        'Acompanhamento completo em todas as fases do processo, desde a avaliação inicial até à exoneração do passivo.',
      services: [
        {
          icon: 'scale',
          title: 'Processo de Insolvência Pessoal',
          desc:
            'Apoio total no processo de insolvência pessoal, abrangendo desde a elaboração e envio de pedidos até à representação em audiências e negociações com credores.',
        },
        {
          icon: 'card',
          title: 'Reestruturação de Dívidas',
          desc:
            'Orientação e assistência na renegociação de dívidas para obter condições de pagamento mais vantajosas e sustentáveis.',
        },
        {
          icon: 'calc',
          title: 'Plano de Pagamento a Credores',
          desc:
            'Desenvolvimento de planos de pagamento viáveis dentro do Plano de Pagamento Judicial (PPJ) ou do Processo Especial para Acordo de Pagamentos (PEAP), ajustados às condições do devedor.',
        },
        {
          icon: 'refresh',
          title: 'Exoneração do Passivo Restante',
          desc:
            'Orientação e suporte no processo de exoneração do passivo restante, com o objetivo de obter o perdão das dívidas após a conclusão do processo de insolvência.',
        },
        {
          icon: 'lock',
          title: 'Negociações com Credores',
          desc:
            'Negociação com credores para evitar a insolvência, buscando acordos extrajudiciais que preservem o património do devedor.',
        },
        {
          icon: 'balance',
          title: 'Assessoria em Responsabilidades Legais',
          desc:
            'Informações claras sobre responsabilidades e direitos durante o processo de insolvência, incluindo orientação sobre as implicações legais.',
        },
      ],
    },
    areas: {
      label: 'Especialização Jurídica',
      title: 'Áreas de Atuação',
      sub: 'Serviços jurídicos especializados, prestados com rigor, ética e total dedicação ao cliente.',
      list: [
        {
          id: 'comercial',
          icon: '⚖',
          title: 'Direito Comercial e Societário',
          headline: 'Abrir ou Gerir uma Empresa',
          desc: 'Assessoria jurídica completa para empresas, desde a constituição até à gestão corrente.',
          items: [
            'Constituição e dissolução de sociedades (Lda., SA, Unipessoal)',
            'Elaboração e revisão de contratos comerciais',
            'Fusões, aquisições e due diligence',
            'Contencioso societário e resolução de conflitos',
            'Assessoria jurídica contínua a empresas',
            'Pactos parassociais e acordos de acionistas',
            'Registo e proteção de marcas comerciais',
          ],
        },
        {
          id: 'imigracao',
          icon: '✈',
          title: 'Estrangeiros, Imigração e Vistos',
          headline: 'Viver ou Investir em Portugal',
          desc: 'Apoio jurídico integral para estrangeiros que pretendem residir, trabalhar ou investir em Portugal.',
          items: [
            'Autorização de residência e permanência',
            'Visto D2 (empreendedor) e D7 (rendimentos passivos)',
            'Golden Visa — Autorização de Residência para Investimento',
            'Reagrupamento familiar',
            'Naturalização e cidadania portuguesa',
            'Regularização de situação migratória',
            'Vistos de trabalho, estudo e nómadas digitais',
          ],
        },
        {
          id: 'imobiliario',
          icon: '🏛',
          title: 'Direito Imobiliário e Urbanismo',
          headline: 'Comprar ou Regularizar um Imóvel',
          desc: 'Acompanhamento jurídico especializado em todas as fases das transações imobiliárias.',
          items: [
            'Acompanhamento completo na compra e venda de imóveis',
            'Contratos de promessa, escritura e documentação',
            'Arrendamento residencial e comercial',
            'Licenciamento urbanístico e autorização de obras',
            'Propriedade horizontal e questões de condomínio',
            'Reabilitação urbana e incentivos fiscais (IRS Jovem, etc.)',
            'Defesa em litígios de arrendamento e propriedade',
          ],
        },
        {
          id: 'insolvencia',
          icon: '◈',
          title: 'Insolvência Pessoal e Reestruturação de Dívidas',
          headline: 'Reorganizar as suas Dívidas',
          desc: 'Acompanhamento especializado em processos de insolvência pessoal e reestruturação financeira.',
          items: [
            'Processo especial de revitalização (PER)',
            'Insolvência de pessoas singulares — representação completa',
            'Negociação e renegociação com credores',
            'Plano de Pagamento Judicial (PPJ)',
            'Processo Especial de Acordo de Pagamentos (PEAP)',
            'Exoneração do passivo restante',
            'Assessoria em responsabilidades e direitos do devedor',
          ],
        },
      ],
    },
    about: {
      label: 'O Escritório',
      title: 'Rigor Jurídico ao Serviço do Cliente',
      sub:
        'O escritório de Carla Guerreiro Marques assenta em três pilares fundamentais: rigor técnico, estratégia personalizada e comunicação transparente. Cada cliente recebe a atenção individualizada que o seu caso merece.',
      bio:
        'Advogada inscrita na Ordem dos Advogados Portugueses, Carla Guerreiro Marques desenvolve a sua atividade com foco em áreas de elevada complexidade jurídica, prestando assessoria a particulares, empresas e investidores estrangeiros em Portugal.',
      bio2:
        'Com escritório em Setúbal, atende clientes de todo o país e do estrangeiro, oferecendo acompanhamento jurídico estruturado, ético e orientado para resultados concretos.',
      values: [
        { num: '4', label: 'Áreas Especializadas', desc: 'Expertise concentrada nas áreas de maior complexidade jurídica.' },
        { num: 'OA', label: 'Inscrita na Ordem', desc: 'Exercício ético e responsável da advocacia em Portugal.' },
        { num: '2', label: 'Idiomas', desc: 'Atendimento em Português e Inglês.' },
        { num: '∞', label: 'Acompanhamento', desc: 'Presença constante do início ao fim do processo.' },
      ],
      quote:
        '"A advocacia não é apenas o domínio da lei — é a capacidade de a tornar acessível, estratégica e verdadeiramente útil para quem dela precisa."',
      office_label: 'O Escritório',
    },
    gallery: {
      title: 'O Nosso Espaço',
      sub: 'Um ambiente profissional e acolhedor, pensado para garantir a confidencialidade e o conforto dos nossos clientes.',
    },
    faq: {
      label: 'Questões Frequentes',
      title: 'Perguntas Frequentes',
      note: 'As respostas têm natureza informativa e não substituem análise jurídica do caso concreto.',
      items: [
        {
          q: 'Como posso constituir uma empresa em Portugal sendo estrangeiro?',
          a:
            'É possível constituir uma sociedade em Portugal independentemente da nacionalidade. O processo envolve a escolha do tipo societário, elaboração dos estatutos, registo na Conservatória e obtenção de número de identificação fiscal. A orientação jurídica especializada garante que o processo decorra de forma segura e eficiente.',
        },
        {
          q: 'Quais os documentos necessários para um visto de residência em Portugal?',
          a:
            'Os requisitos variam consoante o tipo de visto. Em regra, incluem passaporte válido, comprovativo de meios de subsistência, seguro de saúde e ausência de antecedentes criminais. Cada situação é analisada individualmente, com orientação detalhada sobre a documentação específica exigida.',
        },
        {
          q: 'O que é a insolvência pessoal e como funciona o processo em Portugal?',
          a:
            'A insolvência pessoal é um processo judicial que permite a pessoas singulares em situação de insolvabilidade proceder à liquidação do seu patrimônio para pagamento de dívidas, com a possibilidade de exoneração do passivo restante. O acompanhamento jurídico é fundamental para garantir os direitos do devedor em todas as fases do processo.',
        },
        {
          q: 'Quais os cuidados a ter na compra de um imóvel em Portugal?',
          a:
            'A compra de imóvel em Portugal exige verificação de caderneta predial, certidão de teor, ausência de ónus e encargos, licença de utilização e conformidade urbanística. A análise jurídica prévia previne problemas futuros e assegura uma transação segura.',
        },
        {
          q: 'Como funciona o reagrupamento familiar para estrangeiros?',
          a:
            'O reagrupamento familiar permite que cidadãos estrangeiros com título de residência em Portugal solicitem a vinda de familiares próximos. O processo implica o cumprimento de requisitos de habitação, meios de subsistência e ausência de impedimentos legais.',
        },
        {
          q: 'O que é o Golden Visa e quem pode beneficiar?',
          a:
            'O Golden Visa (ARI — Autorização de Residência para Investimento) permite a cidadãos de países terceiros obter autorização de residência em Portugal mediante a realização de investimentos qualificados. Os beneficiários podem aceder ao espaço Schengen e, após 5 anos, solicitar a residência permanente ou a cidadania portuguesa.',
        },
      ],
    },
    contact: {
      label: 'Contacto',
      title: 'Fale Connosco',
      tagline: 'Acompanhamento jurídico estruturado para quem constrói o futuro em Portugal.',
      address_label: 'Morada',
      address: 'Praceta Amadeu de Sousa Cardoso 4\n2900-164 Setúbal, Portugal',
      phone_label: 'Telefone',
      phone: '+351 962 993 794',
      hours_label: 'Horário',
      hours: 'Segunda a Sexta · 09h00 – 18h00',
      whatsapp: 'Contactar via WhatsApp',
      map_label: 'Localização',
    },
    footer: {
      legal:
        '© 2025 Carla Guerreiro Marques — Advogada. Inscrita na Ordem dos Advogados Portuguesa. Este sítio tem natureza meramente informativa e não constitui consulta jurídica. A informação aqui prestada não substitui a análise do caso concreto. Não são feitas quaisquer promessas ou garantias de resultado.',
      ethics:
        'Este escritório rege-se pelo Estatuto da Ordem dos Advogados Portugueses e pelo Código Deontológico aplicável.',
    },
  },

  en: {
    meta: {
      title:
        'Carla Guerreiro Marques — Lawyer in Setúbal, Portugal | Commercial Law, Immigration, Real Estate, Insolvency',
      description:
        'Law office in Setúbal, Portugal. Specialised in Commercial Law, Immigration & Visas, Real Estate and Personal Insolvency. Schedule your consultation.',
    },
    nav: {
      areas: 'Practice Areas',
      about: 'The Office',
      faq: 'FAQ',
      contact: 'Contact',
      cta: 'Request Evaluation',
    },
    loader: { tagline: 'Rigour · Strategy · Trust' },
    hero: {
      eyebrow: 'Law Office · Setúbal, Portugal',
      headline: 'Legal Clarity,',
      headline2: 'Strategic Vision',
      sub: 'Structured legal counsel for companies, investors and individuals in Portugal.',
      cta1: 'Request Case Evaluation',
      cta2: 'Explore Practice Areas',
    },
    insolvency_section: {
      label: 'Personal Insolvency — Detailed Services',
      title: 'Main Reasons to Start a Personal Insolvency Process',
      sub: 'Full support at every stage of the process, from initial assessment to discharge of liabilities.',
      services: [
        {
          icon: 'scale',
          title: 'Personal Insolvency Process',
          desc:
            'Full support in the personal insolvency process, covering everything from filing requests to representation at hearings and creditor negotiations.',
        },
        {
          icon: 'card',
          title: 'Debt Restructuring',
          desc:
            'Guidance and assistance in renegotiating debts to obtain more favourable and sustainable payment terms.',
        },
        {
          icon: 'calc',
          title: 'Creditor Payment Plan',
          desc:
            "Development of viable payment plans within the Judicial Payment Plan (PPJ) or the Special Payment Agreement Process (PEAP), tailored to the debtor's financial situation.",
        },
        {
          icon: 'refresh',
          title: 'Discharge of Remaining Liabilities',
          desc:
            'Guidance and support in the process of discharging remaining liabilities, with the goal of obtaining debt forgiveness after the insolvency process concludes.',
        },
        {
          icon: 'lock',
          title: 'Creditor Negotiations',
          desc:
            "Negotiation with creditors to avoid insolvency, seeking out-of-court agreements that preserve the debtor's assets.",
        },
        {
          icon: 'balance',
          title: 'Legal Responsibilities Advisory',
          desc:
            'Clear information on responsibilities and rights during the insolvency process, including guidance on legal implications.',
        },
      ],
    },
    areas: {
      label: 'Legal Specialisation',
      title: 'Practice Areas',
      sub: 'Specialised legal services delivered with rigour, ethics and full dedication to each client.',
      list: [
        {
          id: 'commercial',
          icon: '⚖',
          title: 'Commercial & Corporate Law',
          headline: 'Open or Manage a Company',
          desc: 'Comprehensive legal advisory for businesses, from formation to day-to-day management.',
          items: [
            'Company formation and dissolution (Ltd., SA, sole trader)',
            'Commercial contract drafting and review',
            'Mergers, acquisitions and due diligence',
            'Corporate litigation and dispute resolution',
            'Ongoing legal advisory for businesses',
            'Shareholders agreements and parassocial pacts',
            'Trademark registration and protection',
          ],
        },
        {
          id: 'immigration',
          icon: '✈',
          title: 'Immigration & Visas',
          headline: 'Live or Invest in Portugal',
          desc: 'Full legal support for foreigners wishing to live, work or invest in Portugal.',
          items: [
            'Residence and stay authorisation',
            'D2 visa (entrepreneur) and D7 (passive income)',
            'Golden Visa — Residence Authorisation for Investment',
            'Family reunification',
            'Naturalisation and Portuguese citizenship',
            'Immigration status regularisation',
            'Work, study and digital nomad visas',
          ],
        },
        {
          id: 'realestate',
          icon: '🏛',
          title: 'Real Estate & Urban Planning',
          headline: 'Buy or Regularise a Property',
          desc: 'Specialised legal support at every stage of real estate transactions.',
          items: [
            'Full support in property purchase and sale',
            'Promissory contracts, deeds and documentation',
            'Residential and commercial leasing',
            'Urban planning licences and construction permits',
            'Horizontal property and condominium issues',
            'Urban rehabilitation and tax incentives',
            'Defence in tenancy and property disputes',
          ],
        },
        {
          id: 'insolvency',
          icon: '◈',
          title: 'Personal Insolvency & Debt Restructuring',
          headline: 'Restructure Your Debts',
          desc: 'Specialised support in personal insolvency proceedings and financial restructuring.',
          items: [
            'Special revitalisation process (PER)',
            'Individual insolvency — full representation',
            'Creditor negotiation and renegotiation',
            'Judicial Payment Plan (PPJ)',
            'Special Payment Agreement Process (PEAP)',
            'Discharge of remaining liabilities',
            'Advisory on debtor rights and responsibilities',
          ],
        },
      ],
    },
    about: {
      label: 'The Office',
      title: 'Legal Rigour at the Service of the Client',
      sub:
        "Carla Guerreiro Marques' practice is built on three fundamental pillars: technical rigour, personalised strategy and transparent communication. Each client receives the individual attention their case deserves.",
      bio:
        'A lawyer registered with the Portuguese Bar Association, Carla Guerreiro Marques focuses on areas of high legal complexity, providing advisory services to individuals, companies and foreign investors in Portugal.',
      bio2:
        'Based in Setúbal, she serves clients from across Portugal and abroad, offering structured, ethical and results-oriented legal support.',
      values: [
        { num: '4', label: 'Specialised Areas', desc: 'Expertise concentrated in the most legally complex areas.' },
        { num: 'OA', label: 'Bar Registered', desc: 'Ethical and responsible practice of law in Portugal.' },
        { num: '2', label: 'Languages', desc: 'Services in Portuguese and English.' },
        { num: '∞', label: 'Ongoing Support', desc: 'Constant presence from start to finish.' },
      ],
      quote:
        '"Law is not merely mastery of legislation — it is the ability to make it accessible, strategic and genuinely useful for those who need it."',
      office_label: 'The Office',
    },
    gallery: {
      title: 'Our Space',
      sub: 'A professional and welcoming environment, designed to ensure the confidentiality and comfort of our clients.',
    },
    faq: {
      label: 'Frequently Asked Questions',
      title: 'FAQ',
      note: 'These answers are for informational purposes only and do not replace legal analysis of specific circumstances.',
      items: [
        {
          q: 'Can a foreigner set up a company in Portugal?',
          a:
            'Yes, it is possible to form a company in Portugal regardless of nationality. The process involves choosing the appropriate company type, drafting the articles of association, registration at the Commercial Registry and obtaining a tax identification number.',
        },
        {
          q: 'What documents are needed for a Portuguese residence visa?',
          a:
            'Requirements vary depending on the visa type. Generally, they include a valid passport, proof of means of subsistence, health insurance and a clean criminal record. Each situation is assessed individually.',
        },
        {
          q: 'What is personal insolvency and how does it work in Portugal?',
          a:
            'Personal insolvency is a judicial process that allows individuals to liquidate their assets to pay debts, with the possibility of discharge of remaining liabilities. Legal representation is essential throughout the process.',
        },
        {
          q: 'What should I check when buying property in Portugal?',
          a:
            'Purchasing property in Portugal requires verification of the land registry, absence of encumbrances, usage licence and urban planning compliance. Prior legal analysis ensures a safe transaction.',
        },
        {
          q: 'How does family reunification work for foreigners?',
          a:
            'Family reunification allows foreign nationals with a residence permit in Portugal to bring close family members. The process involves meeting housing and financial requirements.',
        },
        {
          q: 'What is the Golden Visa and who can benefit?',
          a:
            'The Golden Visa (ARI) allows third-country nationals to obtain residence authorisation in Portugal through qualifying investments. Beneficiaries gain access to the Schengen area and, after 5 years, can apply for permanent residence or Portuguese citizenship.',
        },
      ],
    },
    contact: {
      label: 'Contact',
      title: 'Get in Touch',
      tagline: 'Structured legal counsel for those building their future in Portugal.',
      address_label: 'Address',
      address: 'Praceta Amadeu de Sousa Cardoso 4\n2900-164 Setúbal, Portugal',
      phone_label: 'Phone',
      phone: '+351 962 993 794',
      hours_label: 'Hours',
      hours: 'Monday to Friday · 9:00 AM – 6:00 PM',
      whatsapp: 'Contact via WhatsApp',
      map_label: 'Location',
    },
    footer: {
      legal:
        '© 2025 Carla Guerreiro Marques — Lawyer. Registered with the Portuguese Bar Association. This website is for informational purposes only and does not constitute legal advice. No promises or guarantees of outcome are made.',
      ethics: 'This office operates in accordance with the Portuguese Bar Association Statute and applicable Code of Ethics.',
    },
  },
} satisfies Record<Locale, ContentShape>

// ✅ tipos “para fora”
export type Content = ContentShape
export type NavCopy = Content['nav']
export type HeroCopy = Content['hero']
export type AreasCopy = Content['areas']
export type AboutCopy = Content['about']
export type GalleryCopy = Content['gallery']
export type FAQCopy = Content['faq']
export type ContactCopy = Content['contact']
export type FooterCopy = Content['footer']
export type InsolvencyCopy = Content['insolvency_section']