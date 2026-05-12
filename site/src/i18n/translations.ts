export const defaultLocale = 'en'
export const locales = ['en', 'es', 'zh'] as const
export type Locale = (typeof locales)[number]

export const translations = {
  en: {
    // Navigation
    nav: {
      projects: 'Projects',
      present: 'Present',
      studio: 'Studio',
      obra: 'Work',
      videos: 'Videos',
      contact: 'Contact',
    },
    // Home page
    home: {
      title: 'Architecture with Vision',
      subtitle: 'TAM ATB Architecture brings innovative design solutions to Marbella and beyond. With a focus on contemporary aesthetics and sustainable practices, we create spaces that inspire and endure.',
      featuredProjects: 'Featured Projects',
      viewAllProjects: 'View All Projects',
    },
    // Projects page
    projects: {
      title: 'Projects',
      subtitle: 'A selection of our architectural work spanning residential, commercial, and public spaces.',
      backToProjects: 'Back to Projects',
      allProjects: 'All projects',
      gallery: 'Gallery',
    },
    // Studio page
    studio: {
      title: 'Studio',
      intro: 'The TAM ATB Architecture design studio has a professional track record of over 40 years in architecture and urban planning at national and international level. It has been led by architects Angel Taborda and Victoria Gauna, with efficient and enthusiastic collaborators from different areas of the sector.',
      intro2: 'Now, Victoria Gauna and Facundo Taborda continue this legacy together with a team of specialized collaborators.',
      intro3: 'Today, more than ever, it is evident that habitat construction is a multidisciplinary objective. That is why we work with a team of architects, technical architects, builders, interior designers, designers, landscapers, photographers and new technicians in areas that contemporaneity promotes in each of our projects. All of them with extensive experience in the sector.',
      whatWeDo: 'What We Do',
      whatWeDoText: 'We design and build all types of projects and spaces: single-family homes, urbanizations, commercial buildings, singular buildings, towers, hotels, sports facilities, exhibitions and ephemeral installations. We also work on renovations, interior design projects and garden design. We adapt to different budgets and put all our experience and knowledge at the service of our clients.',
      philosophy: 'Our Philosophy',
      philosophyText1: 'For us, aesthetics and high quality design do not compete with functionality, but complement it, and also increase the value of the object and consequently the territory.',
      philosophyText2: 'The characteristics of the Costa del Sol, and especially Marbella -its topography, its landscape- suggest an emotional appropriation of the natural environment, but human intervention also becomes an expression of the landscape.',
      philosophyText3: 'Therefore, the concept of global design of the object becomes essential, including what we call the fifth facade: the roofs of buildings. Singularities that are essential in our studio.',
      team: 'Team',
      architect: 'Architect',
      foundingArchitect: 'Founding Architect',
    },
    // Contact page
    contact: {
      title: 'Contact',
      getInTouch: 'Get in Touch',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Message',
      address: 'Address',
      phone: 'Phone',
      findUs: 'Find Us',
    },
    // Footer
    footer: {
      rights: 'All rights reserved',
    },
    // Work/Obra page
    obra: {
      title: 'Work',
      subtitle: 'Construction projects showcasing our commitment to quality craftsmanship and attention to detail.',
    },
    // Present page
    present: {
      title: 'Present',
      subtitle: 'Current proposals and ongoing design explorations.',
    },
    // Videos page
    videos: {
      title: 'Videos',
      subtitle: 'Watch our architectural projects come to life.',
    },
    // Kinetic homepage
    kinetic: {
      built: 'Built',
      stateBuilt: 'Built',
      stateCompetition: 'Competition',
      stateConcept: 'Concept',
      stateProject: 'Project',
      stateBasicProject: 'Basic Project',
      stateUnderConstruction: 'Under Construction',
      lightboxClose: 'Close',
      lightboxInfo: 'Project info',
    },
  },
  es: {
    nav: {
      projects: 'Proyectos',
      present: 'Presente',
      studio: 'Estudio',
      obra: 'Obra',
      videos: 'Videos',
      contact: 'Contacto',
    },
    home: {
      title: 'Arquitectura con Visión',
      subtitle: 'TAM ATB Architecture aporta soluciones de diseño innovadoras a Marbella y más allá. Con un enfoque en la estética contemporánea y las prácticas sostenibles, creamos espacios que inspiran y perduran.',
      featuredProjects: 'Proyectos Destacados',
      viewAllProjects: 'Ver Todos los Proyectos',
    },
    projects: {
      title: 'Proyectos',
      subtitle: 'Una selección de nuestro trabajo arquitectónico abarcando espacios residenciales, comerciales y públicos.',
      backToProjects: 'Volver a Proyectos',
      allProjects: 'Todos los proyectos',
      gallery: 'Galería',
    },
    studio: {
      title: 'Estudio',
      intro: 'El estudio de diseño TAM ATB Architecture cuenta con una trayectoria profesional de más de 40 años en el campo de la arquitectura y el urbanismo a nivel nacional e internacional. Lo han dirigido los arquitectos Angel Taborda y Victoria Gauna, con eficientes y entusiastas colaboradores de distintas áreas del sector.',
      intro2: 'Ahora, lo continúan haciendo Victoria Gauna y Facundo Taborda junto a un equipo de colaboradores especializados.',
      intro3: 'Hoy, más que nunca, se pone en evidencia que la construcción del hábitat es un objetivo multidisciplinar, por ello trabajamos con un equipo de arquitectos, arquitectos técnicos, constructores, interioristas, diseñadores, paisajistas, fotógrafos y nuevos técnicos en áreas que la contemporaneidad propicia en cada uno de nuestros proyectos. Todos ellos con una amplia experiencia en el sector.',
      whatWeDo: 'Qué Hacemos',
      whatWeDoText: 'Diseñamos y construimos todo tipo de proyectos y espacios: viviendas unifamiliares, urbanizaciones, edificios comerciales, edificios singulares, torres, hoteles, instalaciones deportivas, exposiciones e instalaciones efímeras. También nos dedicamos a las reformas, proyectos de interiorismo y diseño de jardines. Nos adaptamos a distintos presupuestos y ponemos toda nuestra experiencia y conocimiento al servicio de nuestros clientes.',
      philosophy: 'Nuestra Filosofía',
      philosophyText1: 'Para nosotros, la estética y la alta calidad de diseño no compite con la funcionalidad, sino que la complementa, y además aumenta el valor del objeto y en consecuencia el territorio.',
      philosophyText2: 'Las características de La Costa del Sol, y en especial, Marbella -su topografía, su paisaje- sugieren una apropiación emocional del entorno natural, pero también la intervención humana se constituye en expresión del paisaje.',
      philosophyText3: 'Por ello se hace imprescindible el concepto del diseño global del objeto, incluido lo que denominamos la quinta fachada: las cubiertas de los edificios. Singularidades que son imprescindibles en nuestro estudio.',
      team: 'Equipo',
      architect: 'Arquitecta',
      foundingArchitect: 'Arquitecto Fundador',
    },
    contact: {
      title: 'Contacto',
      getInTouch: 'Contáctanos',
      name: 'Nombre',
      email: 'Correo electrónico',
      message: 'Mensaje',
      send: 'Enviar Mensaje',
      address: 'Dirección',
      phone: 'Teléfono',
      findUs: 'Encuéntranos',
    },
    footer: {
      rights: 'Todos los derechos reservados',
    },
    obra: {
      title: 'Obra',
      subtitle: 'Proyectos de construcción que demuestran nuestro compromiso con la artesanía de calidad y la atención al detalle.',
    },
    present: {
      title: 'Presente',
      subtitle: 'Propuestas actuales y exploraciones de diseño en curso.',
    },
    videos: {
      title: 'Videos',
      subtitle: 'Mira cómo cobran vida nuestros proyectos arquitectónicos.',
    },
    kinetic: {
      built: 'Construido',
      stateBuilt: 'Construido',
      stateCompetition: 'Concurso',
      stateConcept: 'Concepto',
      stateProject: 'Proyecto',
      stateBasicProject: 'Anteproyecto',
      stateUnderConstruction: 'En Construcción',
      lightboxClose: 'Cerrar',
      lightboxInfo: 'Info del proyecto',
    },
  },
  zh: {
    nav: {
      projects: '项目',
      present: '现况',
      studio: '工作室',
      obra: '作品',
      videos: '视频',
      contact: '联系',
    },
    home: {
      title: '富有远见的建筑',
      subtitle: 'TAM ATB Architecture 为马贝拉及其他地区提供创新的设计解决方案。我们专注于当代美学和可持续实践，创造激励人心、经久不衰的空间。',
      featuredProjects: '精选项目',
      viewAllProjects: '查看所有项目',
    },
    projects: {
      title: '项目',
      subtitle: '精选住宅、商业和公共空间的建筑作品。',
      backToProjects: '返回项目',
      allProjects: '所有项目',
      gallery: '画廊',
    },
    studio: {
      title: '工作室',
      intro: 'TAM ATB Architecture 设计工作室在建筑和城市规划领域拥有超过40年的专业经验，业务遍及国内外。工作室由建筑师 Angel Taborda 和 Victoria Gauna 领导，拥有来自不同领域的高效热情的合作者。',
      intro2: '现在，Victoria Gauna 和 Facundo Taborda 与专业团队继续传承这一事业。',
      intro3: '今天，栖息地建设是一个多学科目标这一点比以往任何时候都更加明显。因此，我们与建筑师、技术建筑师、建造商、室内设计师、设计师、景观设计师、摄影师和新技术人员团队合作。所有人都在该领域拥有丰富经验。',
      whatWeDo: '我们的服务',
      whatWeDoText: '我们设计和建造各类项目和空间：独栋住宅、城市化项目、商业建筑、独特建筑、塔楼、酒店、体育设施、展览和临时装置。我们还从事翻新、室内设计项目和花园设计。我们适应不同的预算，将所有经验和知识服务于客户。',
      philosophy: '我们的理念',
      philosophyText1: '对我们来说，美学和高品质设计不与功能性竞争，而是相辅相成，同时也提升了建筑物及其所在区域的价值。',
      philosophyText2: '太阳海岸的特点，特别是马贝拉——它的地形、它的景观——暗示着对自然环境的情感占有，但人类干预也成为景观的表达。',
      philosophyText3: '因此，建筑物的整体设计概念变得至关重要，包括我们所说的第五立面：建筑物的屋顶。这些独特性在我们的工作室中至关重要。',
      team: '团队',
      architect: '建筑师',
      foundingArchitect: '创始建筑师',
    },
    contact: {
      title: '联系我们',
      getInTouch: '取得联系',
      name: '姓名',
      email: '电子邮件',
      message: '留言',
      send: '发送消息',
      address: '地址',
      phone: '电话',
      findUs: '找到我们',
    },
    footer: {
      rights: '版权所有',
    },
    obra: {
      title: '作品',
      subtitle: '展示我们对优质工艺和细节关注的建筑项目。',
    },
    present: {
      title: '现况',
      subtitle: '当前提案和正在进行的设计探索。',
    },
    videos: {
      title: '视频',
      subtitle: '观看我们的建筑项目如何栩栩如生。',
    },
    kinetic: {
      built: '已建成',
      stateBuilt: '已建成',
      stateCompetition: '竞赛',
      stateConcept: '概念',
      stateProject: '项目',
      stateBasicProject: '基础项目',
      stateUnderConstruction: '在建',
      lightboxClose: '关闭',
      lightboxInfo: '项目信息',
    },
  },
} as const

export type TranslationKey = keyof typeof translations.en
