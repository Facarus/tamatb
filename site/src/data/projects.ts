export interface Project {
  id: string
  title: string
  state?: string
  location: string
  typology?: string
  year: string
  description: {
    es: string
    en: string
  }
  image: string
  gridImage: string
  images: string[]
  text: { es: string; en: string }
  featured?: boolean
}

function imgRange(id: string, count: number): string[] {
  return Array.from({ length: count }, (_, i) => `images/projects/${id}/${i + 1}.jpg`)
}

export const projects: Project[] = [
  {
    id: 'addoha-hq',
    title: 'Addoha HQ',
    state: 'Under Construction',
    location: 'Casablanca, Morocco',
    typology: 'Office Building',
    year: '2016',
    image: 'images/main-upscaled/addoha-hq.jpg',
    gridImage: 'images/main-upscaled/addoha-hq.jpg',
    images: imgRange('addoha-hq', 8),
    text: {
      es: '<p>El proyecto de la sede de Addoha representa un paso audaz en la arquitectura corporativa del norte de África, fusionando el lenguaje de diseño contemporáneo con el tejido cultural de Casablanca. El edificio se eleva como una composición geométrica de volúmenes que se intersectan, cada uno calibrado para maximizar la luz natural mientras proporciona sombra del intenso sol marroquí.</p>',
      en: '<p>The Addoha Headquarters project represents a bold step in corporate architecture for North Africa, merging contemporary design language with the cultural fabric of Casablanca. The building rises as a geometric composition of intersecting volumes, each calibrated to maximize natural light while providing shading from the intense Moroccan sun.</p>'
    },
    description: {
      es: 'El proyecto de la sede de Addoha representa un paso audaz en la arquitectura corporativa del norte de África, fusionando el lenguaje de diseño contemporáneo con el tejido cultural de Casablanca.',
      en: 'The Addoha Headquarters project represents a bold step in corporate architecture for North Africa, merging contemporary design language with the cultural fabric of Casablanca.'
    }
  },
  {
    id: 'an-dong-h-t',
    title: 'An Dong H.T.',
    state: 'Built',
    location: 'Hangzhou Bay, China',
    typology: 'Infrastructure',
    year: '2015',
    image: 'images/main-upscaled/an-dong-h-t.jpg',
    gridImage: 'images/main-upscaled/an-dong-h-t.jpg',
    images: imgRange('an-dong-h-t', 10),
    text: {
      es: '<p>El rediseño y la expansión de la autopista de la bahía de An Dong del oeste de la bahía de Hangzhou demandaban la creación de un peaje de la autopista para el proceso del pago de la carretera, un símbolo como introducción a la globalización y a la modernización de la bahía de Hangzhou.</p>',
      en: '<p>The re-design and expansion of the West AnDong Hangzhou Bay highway toll demanded the creation of a highway toll that would shelter the highway payment process and stand as introduction to Hangzhou Bay\'s globalizing and modernization tendencies.</p>'
    },
    description: {
      es: 'El rediseño y la expansión de la autopista de la bahía de An Dong del oeste de la bahía de Hangzhou demandaban la creación de un peaje de la autopista para el proceso del pago de la carretera, un símbolo como introducción a la globalización y a la modernización de la bahía de Hangzhou.',
      en: 'The re-design and expansion of the West AnDong Hangzhou Bay highway toll demanded the creation of a highway toll that would shelter the highway payment process and stand as introduction to Hangzhou Bay\'s globalizing and modernization tendencies.'
    }
  },
  {
    id: 'c4-marbella',
    title: 'C4 Marbella',
    state: 'Basic Project',
    location: 'Marbella, Spain',
    typology: 'Single Family Home',
    year: '2023',
    image: 'images/main-upscaled/c4-marbella.jpg',
    gridImage: 'images/main-upscaled/c4-marbella.jpg',
    images: ['images/main-upscaled/c4-marbella.jpg'],
    text: {
      es: '<p>Situada en las colinas soleadas de Marbella, C4 explora la intersección del vernáculo mediterráneo y la forma contemporánea radical. La residencia se fragmenta en cuatro pabellones interconectados, cada uno orientado para capturar vistas distintas de la costa y las montañas de Sierra Blanca.</p>',
      en: '<p>Situated on the sun-drenched hills of Marbella, C4 explores the intersection of Mediterranean vernacular and radical contemporary form. The residence fragments into four interconnected pavilions, each oriented to capture distinct views of the coastline and the Sierra Blanca mountains beyond.</p>'
    },
    description: {
      es: 'Situada en las colinas soleadas de Marbella, C4 explora la intersección del vernáculo mediterráneo y la forma contemporánea radical.',
      en: 'Situated on the sun-drenched hills of Marbella, C4 explores the intersection of Mediterranean vernacular and radical contemporary form.'
    }
  },
  {
    id: 'citerion-house',
    title: 'Citerion House',
    state: 'Built',
    location: 'Marbella, Spain',
    typology: 'Single Family Home',
    year: '2006',
    image: 'images/main-upscaled/citerion-house.jpg',
    gridImage: 'images/main-upscaled/citerion-house.jpg',
    images: imgRange('citerion-house', 12),
    text: {
      es: '<p>Citerion House ocupa una posición privilegiada con vistas a la costa mediterránea, su forma moldeada por un riguroso diálogo entre la topografía del sitio y los requisitos programáticos. El edificio desciende por la ladera en una serie de plataformas interconectadas, combinando líneas modernistas con texturas materiales cálidas.</p>',
      en: '<p>Citerion House occupies a privileged position overlooking the Mediterranean coast, its form shaped by a rigorous dialogue between site topography and programmatic requirements. The building steps down the hillside in a series of interconnected platforms, combining clean modernist lines with warm material textures.</p>'
    },
    description: {
      es: 'Citerion House ocupa una posición privilegiada con vistas a la costa mediterránea, su forma moldeada por un riguroso diálogo entre la topografía del sitio y los requisitos programáticos.',
      en: 'Citerion House occupies a privileged position overlooking the Mediterranean coast, its form shaped by a rigorous dialogue between site topography and programmatic requirements.'
    }
  },
  {
    id: 'desert-auomobile-club',
    title: 'Desert Automobile Club',
    state: 'Concept',
    location: 'Riyadh, Saudi Arabia',
    typology: 'Automotive Infrastructure',
    year: '2026',
    image: 'images/main-upscaled/desert-auomobile-club.jpg',
    gridImage: 'images/main-upscaled/desert-auomobile-club.jpg',
    images: ['images/main-upscaled/desert-auomobile-club.jpg'],
    text: {
      es: '<p>El Desert Automobile Club propone una nueva tipología para la cultura automovilística en la Península Arábiga. Surgiendo del paisaje desértico como una formación geológica erosionada, el complejo alberga galerías de exhibición, un circuito de conducción y salones exclusivos para miembros.</p>',
      en: '<p>The Desert Automobile Club envisions a new typology for automotive culture in the Arabian Peninsula. Rising from the desert landscape like an eroded geological formation, the complex houses exhibition galleries, a performance driving circuit, and exclusive members\' lounges.</p>'
    },
    description: {
      es: 'El Desert Automobile Club propone una nueva tipología para la cultura automovilística en la Península Arábiga.',
      en: 'The Desert Automobile Club envisions a new typology for automotive culture in the Arabian Peninsula.'
    }
  },
  {
    id: 'ertaizi-airport-p2',
    title: 'Ertaizi Airport P2',
    state: 'Competition',
    location: 'Jilin, P.R. China',
    typology: 'Transportation Infrastructure',
    year: '2015',
    image: 'images/main-upscaled/ertaizi-airport-p2.jpg',
    gridImage: 'images/main-upscaled/ertaizi-airport-p2.jpg',
    images: ['images/main-upscaled/ertaizi-airport-p2.jpg'],
    text: {
      es: '<p>Esta propuesta de concurso para la ampliación del aeropuerto de Ertaizi propone un edificio terminal cuya línea de cubierta ondulante evoca el terreno montañoso del noreste de China. El sistema estructural crea un vasto interior libre de columnas con iluminación natural cenital.</p>',
      en: '<p>This competition entry for the Ertaizi Airport expansion proposes a terminal building whose undulating roofline echoes the mountainous terrain of northeastern China. The structural system creates a vast column-free interior with natural skylight illumination.</p>'
    },
    description: {
      es: 'Esta propuesta de concurso para la ampliación del aeropuerto de Ertaizi propone un edificio terminal cuya línea de cubierta ondulante evoca el terreno montañoso del noreste de China.',
      en: 'This competition entry for the Ertaizi Airport expansion proposes a terminal building whose undulating roofline echoes the mountainous terrain of northeastern China.'
    }
  },
  {
    id: 'ertaizi-airport-p4',
    title: 'Ertaizi Airport P4',
    state: 'Competition',
    location: 'Jilin, P.R. China',
    typology: 'Transportation Infrastructure',
    year: '2015',
    image: 'images/main-upscaled/ertaizi-airport-p4.jpg',
    gridImage: 'images/main-upscaled/ertaizi-airport-p4.jpg',
    images: ['images/main-upscaled/ertaizi-airport-p4.jpg'],
    text: {
      es: '<p>La propuesta de Fase 4 adopta un enfoque evolucionado que enfatiza la modularidad y la construcción por fases. El diseño divide la terminal en pabellones conectados, cada uno capaz de operación independiente, con cubiertas verdes y patios plantados visibles desde las salas de embarque.</p>',
      en: '<p>The Phase 4 proposal takes an evolved approach emphasizing modularity and phased construction. The design breaks the terminal into connected pavilions, each capable of independent operation, with green roofs and planted courtyards visible from the departure lounges.</p>'
    },
    description: {
      es: 'La propuesta de Fase 4 adopta un enfoque evolucionado que enfatiza la modularidad y la construcción por fases.',
      en: 'The Phase 4 proposal takes an evolved approach emphasizing modularity and phased construction.'
    }
  },
  {
    id: 'estadio-plaza-de-marbella',
    title: 'Estadio Plaza de Marbella',
    state: 'Competition',
    location: 'Marbella, Spain',
    typology: 'Sports Infrastructure',
    year: '2023',
    image: 'images/main-upscaled/estadio-plaza-de-marbella.jpg',
    gridImage: 'images/main-upscaled/estadio-plaza-de-marbella.jpg',
    images: ['images/main-upscaled/estadio-plaza-de-marbella.jpg'],
    text: {
      es: '<p>Esta propuesta de concurso reimagina el estadio deportivo como una plaza urbana, disolviendo el límite tradicional entre recinto deportivo y espacio público. El diseño integra programas comerciales, culturales y recreativos bajo una cubierta envolvente, con jardines aterrazados que conectan el recinto con el tejido urbano adyacente.</p>',
      en: '<p>This competition entry reimagines the sports stadium as an urban plaza, dissolving the traditional boundary between sporting venue and public space. The design integrates commercial, cultural, and recreational programs beneath a sweeping canopy, with surrounding terraced gardens connecting the venue to the adjacent urban fabric.</p>'
    },
    description: {
      es: 'Esta propuesta de concurso reimagina el estadio deportivo como una plaza urbana, disolviendo el límite tradicional entre recinto deportivo y espacio público.',
      en: 'This competition entry reimagines the sports stadium as an urban plaza, dissolving the traditional boundary between sporting venue and public space.'
    }
  },
  {
    id: 'k-s-villa',
    title: 'K.S. Villa',
    state: 'Built',
    location: 'Marbella, Spain',
    typology: 'Single Family Home',
    year: '2002',
    image: 'images/main-upscaled/k-s-villa.jpg',
    gridImage: 'images/main-upscaled/k-s-villa.jpg',
    images: imgRange('k-s-villa', 11),
    text: {
      es: '<p>Esta vivienda aporta espacialmente una nueva experiencia atravesando estándares sin abordar una deconstrucción, pero provoca el descubrimiento de nuevas experiencias estéticas con los elementos complementarios de la misma, como escaleras, terrazas, barandillas, iluminaciones cenitales.</p>',
      en: '<p>This home spatially provides a new experience crossing standards without addressing a deconstruction, but provokes the discovery of new aesthetic experiences with complementary elements such as stairs, terraces, railings, and skylight illuminations.</p>'
    },
    description: {
      es: 'Esta vivienda aporta espacialmente una nueva experiencia atravesando estándares sin abordar una deconstrucción, pero provoca el descubrimiento de nuevas experiencias estéticas con los elementos complementarios de la misma, como escaleras, terrazas, barandillas, iluminaciones cenitales.',
      en: 'This home spatially provides a new experience crossing standards without addressing a deconstruction, but provokes the discovery of new aesthetic experiences with complementary elements such as stairs, terraces, railings, and skylight illuminations.'
    }
  },
  {
    id: 'la-paloma',
    title: 'La Paloma',
    state: 'Built',
    location: 'Marbella, Spain',
    typology: 'Single Family Home - Renovation',
    year: '2011',
    image: 'images/main-upscaled/la-paloma.jpg',
    gridImage: 'images/main-upscaled/la-paloma.jpg',
    images: imgRange('la-paloma', 8),
    text: {
      es: '<p>El cambio de dueño de la Casa La Paloma, diseñado por el estudio TAM hacia 1985, y la necesidad de los nuevos ocupantes de reorganizar funciones y estilos, dio la posibilidad de revisitar esta obra, interactuando tanto con los interiores como con los porches exteriores y zona de piscina.</p>',
      en: '<p>The change of ownership of Casa La Paloma, designed by TAM studio around 1985, and the need of the new occupants to reorganize functions and styles, gave the possibility to revisit this work, interacting with both interiors and exterior porches and pool area.</p>'
    },
    description: {
      es: 'El cambio de dueño de la Casa La Paloma, diseñado por el estudio TAM hacia 1985, y la necesidad de los nuevos ocupantes de reorganizar funciones y estilos, dio la posibilidad de revisitar esta obra, interactuando tanto con los interiores como con los porches exteriores y zona de piscina.',
      en: 'The change of ownership of Casa La Paloma, designed by TAM studio around 1985, and the need of the new occupants to reorganize functions and styles, gave the possibility to revisit this work, interacting with both interiors and exterior porches and pool area.'
    }
  },
  {
    id: 'linfen-gallery',
    title: 'Linfen Gallery',
    state: 'Project',
    location: 'Linfen, P.R. China',
    typology: 'Cultural Facilities',
    year: '2014',
    image: 'images/main-upscaled/linfen-gallery.jpg',
    gridImage: 'images/main-upscaled/linfen-gallery.jpg',
    images: imgRange('linfen-gallery', 12),
    text: {
      es: '<p>La Galería de Linfen establece un nuevo ancla cultural en una ciudad en rápida transformación. La forma del edificio se genera por la intersección de dos rutas de circulación principales, creando galerías de proporción y carácter variable, con una fachada de paneles de piedra translúcida que difunde la luz natural.</p>',
      en: '<p>The Linfen Gallery establishes a new cultural anchor in a city undergoing rapid transformation. The building\'s form is generated by the intersection of two primary circulation routes, creating galleries of varying proportion and character, with a facade of translucent stone panels that diffuse natural light.</p>'
    },
    description: {
      es: 'La Galería de Linfen establece un nuevo ancla cultural en una ciudad en rápida transformación.',
      en: 'The Linfen Gallery establishes a new cultural anchor in a city undergoing rapid transformation.'
    }
  },
  {
    id: 'linfen-library',
    title: 'Linfen Library',
    state: 'Project',
    location: 'Linfen, P.R. China',
    typology: 'Cultural Facilities',
    year: '2014',
    image: 'images/main-upscaled/linfen-library.jpg',
    gridImage: 'images/main-upscaled/linfen-library.jpg',
    images: imgRange('linfen-library', 11),
    text: {
      es: '<p>La biblioteca se concibe como un paisaje de plataformas de lectura escalonadas que descienden en cascada desde el nivel de entrada hasta un jardín hundido. Un vacío central conecta todos los niveles visual y espacialmente, permitiendo que la luz natural penetre hasta las salas de lectura más profundas.</p>',
      en: '<p>The library is conceived as a landscape of terraced reading platforms that cascade from the entrance level down to a sunken garden. A central void connects all levels visually and spatially, allowing natural light to penetrate to the lowest reading rooms.</p>'
    },
    description: {
      es: 'La biblioteca se concibe como un paisaje de plataformas de lectura escalonadas que descienden en cascada desde el nivel de entrada hasta un jardín hundido.',
      en: 'The library is conceived as a landscape of terraced reading platforms that cascade from the entrance level down to a sunken garden.'
    }
  },
  {
    id: 'mr-z-house',
    title: 'Mr. Z. House',
    state: 'Built',
    location: 'Marbella, Spain',
    typology: 'Single Family Home',
    year: '2000',
    featured: true,
    image: 'images/main-upscaled/mr-z-house.jpg',
    gridImage: 'images/main-upscaled/mr-z-house.jpg',
    images: imgRange('mr-z-house', 8),
    text: {
      es: '<p>La casa Zeid responde a las necesidades de un amplio programa familiar compuesto por un núcleo paterno que disfruta de la planta alta y la zona central en la planta baja y una extensión para los más jóvenes de la familia, situados en los dúplex adosados a ambos lados. Ambos comparten las zonas comunes de la casa: el salón de la planta baja, el spa, el gimnasio, la piscina y los jardines. La vivienda, en forma de arco alrededor del jardín y la vista al mar Mediterráneo, permite a todas las zonas de vida acceso directo al paseo del jardín.</p>',
      en: '<p>The house answers to a large family program composed of a paternal nucleus that enjoys the upper floor and the central area in the ground floor. Two younger family branches live in attached duplexes at both sides, sharing common areas of the house with their parents, such as a social area in the ground floor, spa, gym, swimming pool and gardens. The Mansion, shaped as an arch that embraces the garden and the Mediterranean sea view, allows all the living areas direct access to the garden promenade.</p>'
    },
    description: {
      es: 'La casa Zeid responde a las necesidades de un amplio programa familiar compuesto por un núcleo paterno que disfruta de la planta alta y la zona central en la planta baja y una extensión para los más jóvenes de la familia, situados en los dúplex adosados a ambos lados. Ambos comparten las zonas comunes de la casa: el salón de la planta baja, el spa, el gimnasio, la piscina y los jardines. La vivienda, en forma de arco alrededor del jardín y la vista al mar Mediterráneo, permite a todas las zonas de vida acceso directo al paseo del jardín.',
      en: 'The house answers to a large family program composed of a paternal nucleus that enjoys the upper floor and the central area in the ground floor. Two younger family branches live in attached duplexes at both sides, sharing common areas of the house with their parents, such as a social area in the ground floor, spa, gym, swimming pool and gardens. The Mansion, shaped as an arch that embraces the garden and the Mediterranean sea view, allows all the living areas direct access to the garden promenade.'
    }
  },
  {
    id: 'mumbai-towers',
    title: 'Mumbai Towers',
    state: 'Competition',
    location: 'Mumbai, India',
    typology: 'Mixed-Use (Hybrid) Skyscrapers',
    year: '2018',
    image: 'images/main-upscaled/mumbai-towers.jpg',
    gridImage: 'images/main-upscaled/mumbai-towers.jpg',
    images: ['images/main-upscaled/mumbai-towers.jpg'],
    text: {
      es: '<p>Las Torres de Bombay proponen un par de rascacielos híbridos que abordan los desafíos de densidad de la ciudad a través de una programación vertical de uso mixto. Las torres se interconectan en múltiples niveles mediante puentes aéreos que albergan jardines comunitarios, mercados y espacios recreativos.</p>',
      en: '<p>The Mumbai Towers proposes a pair of hybrid skyscrapers that address the city\'s density challenges through vertical mixed-use programming. The towers interlock at multiple levels through sky bridges housing communal gardens, markets, and recreational spaces.</p>'
    },
    description: {
      es: 'Las Torres de Bombay proponen un par de rascacielos híbridos que abordan los desafíos de densidad de la ciudad a través de una programación vertical de uso mixto.',
      en: 'The Mumbai Towers proposes a pair of hybrid skyscrapers that address the city\'s density challenges through vertical mixed-use programming.'
    }
  },
  {
    id: 'n-h-villa',
    title: 'N.H. Villa',
    state: 'Built',
    location: 'Marbella, Spain',
    typology: 'Single Family Home',
    year: '1997',
    image: 'images/main-upscaled/n-h-villa.jpg',
    gridImage: 'images/main-upscaled/n-h-villa.jpg',
    images: imgRange('n-h-villa', 2),
    text: {
      es: '<p>Esta casa explora la posibilidad de adaptar el azulejo típico árabe, material cuya excelencia de aislamiento térmico se demuestra, a raíces inclinadas hacia una nueva composición arquitectónica que combina eficiencia y fluidez del espacio.</p>',
      en: '<p>This house explores the possibility of adapting the typical Arabic tile, material whose thermal insulation excellence is proved, to sloping roots towards a new architectural composition that combines efficiency and the fluency of space.</p>'
    },
    description: {
      es: 'Esta casa explora la posibilidad de adaptar el azulejo típico árabe, material cuya excelencia de aislamiento térmico se demuestra, a raíces inclinadas hacia una nueva composición arquitectónica que combina eficiencia y fluidez del espacio.',
      en: 'This house explores the possibility of adapting the typical Arabic tile, material whose thermal insulation excellence is proved, to sloping roots towards a new architectural composition that combines efficiency and the fluency of space.'
    }
  },
  {
    id: 'oriental-landscape-hq',
    title: 'Oriental Landscape HQ',
    state: 'Built',
    location: 'Beijing, China',
    typology: 'Interior Architecture',
    year: '2016',
    featured: true,
    image: 'images/main-upscaled/oriental-landscape-hq.jpg',
    gridImage: 'images/main-upscaled/oriental-landscape-hq.jpg',
    images: imgRange('oriental-landscape-hq', 8),
    text: {
      es: '<p>Uno de los proyectos más importantes realizados por ATB Orient, en colaboración con el arquitecto Facundo Taborda Gauna y OUDG, fue la comisión de diseño de la sede corporativa de OL, la mayor empresa de paisajismo de China. La empresa requirió que su sede, ubicada en el prestigioso Distrito Artístico 798 de Pekín, mantuviese la elegancia de su imagen corporativa y a su vez reflejara su negocio de paisajismo.</p>',
      en: '<p>One of the most important projects realized by ATB Orient, in association with the architect Facundo Taborda Gauna and OUDG, was the commission to design the corporate headquarters of OL, China\'s largest landscaping company. The company required that their headquarters, located in Beijing\'s prestigious 798 Art District, maintain the elegance of their corporate image while reflecting their landscaping business.</p>'
    },
    description: {
      es: 'Uno de los proyectos más importantes realizados por ATB Orient, en colaboración con el arquitecto Facundo Taborda Gauna y OUDG, fue la comisión de diseño de la sede corporativa de OL, la mayor empresa de paisajismo de China. La empresa requirió que su sede, ubicada en el prestigioso Distrito Artístico 798 de Pekín, mantuviese la elegancia de su imagen corporativa y a su vez reflejara su negocio de paisajismo.',
      en: 'One of the most important projects realized by ATB Orient, in association with the architect Facundo Taborda Gauna and OUDG, was the commission to design the corporate headquarters of OL, China\'s largest landscaping company.'
    }
  },
  {
    id: 'peral-hotel',
    title: 'Peral Hotel',
    state: 'Project',
    location: 'Marbella, Spain',
    typology: 'Commercial Building',
    year: '2023',
    image: 'images/main-upscaled/peral-hotel.jpg',
    gridImage: 'images/main-upscaled/peral-hotel.jpg',
    images: ['images/main-upscaled/peral-hotel.jpg'],
    text: {
      es: '<p>El Hotel Peral reimagina la hospitalidad boutique en Marbella. El edificio presenta una fachada contenida de volúmenes de piedra caliza apilados, cada uno ligeramente desplazado para crear terrazas privadas, con un restaurante en la azotea que ofrece vistas al casco antiguo y al mar.</p>',
      en: '<p>The Peral Hotel reimagines boutique hospitality in Marbella. The building presents a restrained street elevation of stacked limestone volumes, each slightly offset to create private terraces, with a rooftop restaurant offering views across the old town to the sea.</p>'
    },
    description: {
      es: 'El Hotel Peral reimagina la hospitalidad boutique en Marbella.',
      en: 'The Peral Hotel reimagines boutique hospitality in Marbella.'
    }
  },
  {
    id: 'prestigia-hq',
    title: 'Prestigia HQ',
    state: 'Built',
    location: 'Casablanca, Morocco',
    typology: 'Commercial Building',
    year: '2012',
    featured: true,
    image: 'images/main-upscaled/prestigia-hq.jpg',
    gridImage: 'images/main-upscaled/prestigia-hq.jpg',
    images: imgRange('prestigia-hq', 11),
    text: {
      es: '<p>La empresa inmobiliaria Prestigia invitó a ATB a presentar un proyecto para el diseño de su showroom en Casablanca, Marruecos. Querían un edificio singular, que destacara en el espacio, un desafío que los arquitectos supieron llevar a cabo con maestría, en el que los materiales y la propia forma y ángulos del edificio son los protagonistas.</p>',
      en: '<p>Prestigia, a leading real estate company, invited ATB Architecture to present a concept for the design of their showroom in Casablanca. They wanted the building to stand out, a challenge to which the architect rose as he created a design in which not only the external angles but the material plays a central role.</p>'
    },
    description: {
      es: 'La empresa inmobiliaria Prestigia invitó a ATB a presentar un proyecto para el diseño de su showroom en Casablanca, Marruecos. Querían un edificio singular, que destacara en el espacio, un desafío que los arquitectos supieron llevar a cabo con maestría, en el que los materiales y la propia forma y ángulos del edificio son los protagonistas.',
      en: 'Prestigia, a leading real estate company, invited ATB Architecture to present a concept for the design of their showroom in Casablanca. They wanted the building to stand out, a challenge to which the architect rose as he created a design in which not only the external angles but the material plays a central role.'
    }
  },
  {
    id: 'riyadh-apartments',
    title: 'Riyadh Apartments',
    state: 'Basic Project',
    location: 'Riyadh, Saudi Arabia',
    typology: 'Collective Housing',
    year: '2024',
    image: 'images/main-upscaled/riyadh-apartments.jpg',
    gridImage: 'images/main-upscaled/riyadh-apartments.jpg',
    images: ['images/main-upscaled/riyadh-apartments.jpg'],
    text: {
      es: '<p>Este proyecto aborda la creciente demanda de vivienda colectiva de alta calidad en la capital de Arabia Saudí. Las unidades se organizan alrededor de patios compartidos que referencian el tejido urbano tradicional de la región de Najd, con pantallas mashrabiya integradas para el control solar y la privacidad visual.</p>',
      en: '<p>This project addresses growing demand for high-quality collective housing in Saudi Arabia\'s capital. Units are organized around shared courtyards referencing the traditional urban fabric of the Najd region, with integrated mashrabiya screens providing solar control and visual privacy.</p>'
    },
    description: {
      es: 'Este proyecto aborda la creciente demanda de vivienda colectiva de alta calidad en la capital de Arabia Saudí.',
      en: 'This project addresses growing demand for high-quality collective housing in Saudi Arabia\'s capital.'
    }
  },
  {
    id: 'shanghai-arch',
    title: 'Shanghai Arch',
    state: 'Concept',
    location: 'Shanghai, P.R. China',
    typology: 'Infrastructure',
    year: '2012',
    image: 'images/main-upscaled/shanghai-arch.jpg',
    gridImage: 'images/main-upscaled/shanghai-arch.jpg',
    images: [
      'images/projects/shanghai-arch/1.jpg',
      'images/projects/shanghai-arch/2.jpg',
      'images/projects/shanghai-arch/3.jpg',
      'images/projects/shanghai-arch/4.jpg'
    ],
    text: {
      es: '<p>El Arco de Shanghái propone una puerta monumental que marca la entrada a una nueva zona de desarrollo urbano. El diseño aprovecha el poder simbólico del arco como umbral, reinterpretado a escala urbana mediante ingeniería contemporánea, con plataformas de observación y espacios de exhibición integrados.</p>',
      en: '<p>The Shanghai Arch proposes a monumental gateway marking the entrance to a new urban development zone. The design draws on the symbolic power of the arch as a threshold, reinterpreted at an urban scale through contemporary engineering, with integrated observation platforms and exhibition spaces.</p>'
    },
    description: {
      es: 'El Arco de Shanghái propone una puerta monumental que marca la entrada a una nueva zona de desarrollo urbano.',
      en: 'The Shanghai Arch proposes a monumental gateway marking the entrance to a new urban development zone.'
    }
  },
  {
    id: 't-q-plaza',
    title: 'T.Q. Plaza',
    state: 'Built',
    location: 'Budva, Montenegro',
    typology: 'Collective Housing',
    year: '2009',
    image: 'images/main-upscaled/t-q-plaza.jpg',
    gridImage: 'images/main-upscaled/t-q-plaza.jpg',
    images: imgRange('t-q-plaza', 8),
    text: {
      es: '<p>Con vistas al mar y situada en la confluencia de las dos avenidas principales de la ciudad de Budva, la fachada del edificio está diseñada como tres bloques en forma de u, con el objetivo de aumentar al máximo la fachada de las unidades de viviendas y oficinas con la mejor orientación.</p>',
      en: '<p>Standing in the seafront, in the confluence of the two main avenues of Budva, the façade is modeled into three blocks in the form of bows, which emphasize the naval character of the building, thus identifying it with the neighboring marina.</p>'
    },
    description: {
      es: 'Con vistas al mar y situada en la confluencia de las dos avenidas principales de la ciudad de Budva, la fachada del edificio está diseñada como tres bloques en forma de u, con el objetivo de aumentar al máximo la fachada de las unidades de viviendas y oficinas con la mejor orientación.',
      en: 'Standing in the seafront, in the confluence of the two main avenues of Budva, the façade is modeled into three blocks in the form of bows, which emphasize the naval character of the building, thus identifying it with the neighboring marina.'
    }
  },
  {
    id: 'tony-jacklin-golf-club',
    title: 'Tony Jacklin Golf Club',
    state: 'Built',
    location: 'Casablanca, Morocco',
    typology: 'Sports Infrastructure',
    year: '2012',
    image: 'images/main-upscaled/tony-jacklin-golf-club.jpg',
    gridImage: 'images/main-upscaled/tony-jacklin-golf-club.jpg',
    images: imgRange('tony-jacklin-golf-club', 8),
    text: {
      es: '<p>En 2012, ATB Architecture, Ángel Taborda y la firma de su socio Daniela Ritcher, ganaron el concurso de diseño para la creación de una club de golf cerca del aeropuerto internacional de Casablanca en Marruecos. La parcela, situada en el antiguo terreno del ejército cerca del bosque de Bouskoura, está dominada por ondulaciones.</p>',
      en: '<p>In 2012, ATB Architecture won the design competition for the creation of a golf clubhouse near Casablanca International Airport in Morocco. The site, situated in the former army terrain near the forest of Bouskoura, is dominated by undulating fairways.</p>'
    },
    description: {
      es: 'En 2012, ATB Architecture, Ángel Taborda y la firma de su socio Daniela Ritcher, ganaron el concurso de diseño para la creación de una club de golf cerca del aeropuerto internacional de Casablanca en Marruecos. La parcela, situada en el antiguo terreno del ejército cerca del bosque de Bouskoura, está dominada por ondulaciones.',
      en: 'In 2012, ATB Architecture won the design competition for the creation of a golf clubhouse near Casablanca International Airport in Morocco. The site, situated in the former army terrain near the forest of Bouskoura, is dominated by undulating fairways.'
    }
  },
  {
    id: 'urb-sierra-blanca',
    title: 'Urb. Sierra Blanca',
    state: 'Built',
    location: 'Marbella, Spain',
    typology: 'Collective Housing',
    year: '2005',
    image: 'images/main-upscaled/urb-sierra-blanca.jpg',
    gridImage: 'images/main-upscaled/urb-sierra-blanca.jpg',
    images: imgRange('urb-sierra-blanca', 8),
    text: {
      es: '<p>El reto principal de este proyecto fue construir sobre una parcela boscosa con árboles milenarios en todo el terreno. Para el proyecto, se realizó un estudio topográfico riguroso en el que se definieron las áreas donde se podía construir respetando el entorno y los árboles de todo el territorio, estas áreas definieron la forma final de las viviendas.</p>',
      en: '<p>The major challenge of this project was to build on a forested plot, whose dense mass colonized the entire ground. A rigorous topographical study defined the areas to be built. The remaining patches of free space defined the final form of the buildings.</p>'
    },
    description: {
      es: 'El reto principal de este proyecto fue construir sobre una parcela boscosa con árboles milenarios en todo el terreno. Para el proyecto, se realizó un estudio topográfico riguroso en el que se definieron las áreas donde se podía construir respetando el entorno y los árboles de todo el territorio, estas áreas definieron la forma final de las viviendas.',
      en: 'The major challenge of this project was to build on a forested plot, whose dense mass colonized the entire ground. A rigorous topographical study defined the areas to be built. The remaining patches of free space defined the final form of the buildings.'
    }
  },
]

export const gridColumns: string[][] = [
  ['addoha-hq', 'estadio-plaza-de-marbella', 'an-dong-h-t', 't-q-plaza', 'riyadh-apartments', 'prestigia-hq'],
  ['citerion-house', 'oriental-landscape-hq', 'shanghai-arch', 'tony-jacklin-golf-club', 'k-s-villa', 'linfen-gallery'],
  ['desert-auomobile-club', 'mumbai-towers', 'la-paloma', 'ertaizi-airport-p4', 'c4-marbella', 'linfen-library'],
  ['urb-sierra-blanca', 'n-h-villa', 'mr-z-house', 'ertaizi-airport-p2', 'peral-hotel'],
]

export const columnSpeeds = [0.92, 1.05, 0.77, 0.83]
export const columnDirections: ('down' | 'up')[] = ['down', 'up', 'down', 'up']

export const projectOrder: string[] = [
  'addoha-hq', 'an-dong-h-t', 'c4-marbella', 'citerion-house',
  'desert-auomobile-club', 'ertaizi-airport-p2', 'ertaizi-airport-p4',
  'estadio-plaza-de-marbella', 'k-s-villa', 'la-paloma',
  'linfen-gallery', 'linfen-library', 'mr-z-house', 'mumbai-towers',
  'n-h-villa', 'oriental-landscape-hq', 'peral-hotel', 'prestigia-hq',
  'riyadh-apartments', 'shanghai-arch', 't-q-plaza',
  'tony-jacklin-golf-club', 'urb-sierra-blanca'
]

export function getProjectById(id: string): Project | undefined {
  return projects.find(p => p.id === id)
}

export function buildClientProjectDB(base = '/', locale: 'en' | 'es' | 'zh' = 'en') {
  const textLocale = locale === 'zh' ? 'en' : locale
  const db: Record<string, {
    title: string
    state: string
    location: string
    typology: string
    date: string
    images: string[]
    text: string
  }> = {}
  for (const p of projects) {
    db[p.id] = {
      title: p.title,
      state: p.state || '',
      location: p.location,
      typology: p.typology || '',
      date: p.year,
      images: p.images.map(img => `${base}${img}`),
      text: p.text[textLocale],
    }
  }
  return db
}

/**
 * Returns the image-quality tier based on viewport width.
 * Used client-side to pick optimized images.
 */
export function getImageTier(): 'sm' | 'md' | 'lg' {
  if (typeof window === 'undefined') return 'lg'
  const w = window.innerWidth
  if (w <= 640) return 'sm'
  if (w <= 1024) return 'md'
  return 'lg'
}

/**
 * Rewrites a base image path to include the tier subfolder.
 * e.g. "/tamatb/images/projects/k-s-villa/1.jpg"
 *   -> "/tamatb/images/projects/k-s-villa/lg/1.jpg"
 *
 * Also handles main-upscaled paths:
 * e.g. "/tamatb/images/main-upscaled/k-s-villa.jpg"
 *   -> "/tamatb/images/main-upscaled/lg/k-s-villa.jpg"
 */
export function tieredImagePath(src: string, tier: 'sm' | 'md' | 'lg'): string {
  // Match: .../projects/{id}/{n}.jpg → .../projects/{id}/{tier}/{n}.jpg
  const projMatch = src.match(/^(.*\/projects\/[^/]+)\/([^/]+)$/)
  if (projMatch) return `${projMatch[1]}/${tier}/${projMatch[2]}`

  // Match: .../main-upscaled/{name}.jpg → .../main-upscaled/{tier}/{name}.jpg
  const mainMatch = src.match(/^(.*\/main-upscaled)\/([^/]+)$/)
  if (mainMatch) return `${mainMatch[1]}/${tier}/${mainMatch[2]}`

  // Fallback: return original (for one-off images like hero etc)
  return src
}
