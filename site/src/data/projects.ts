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
  text: string
  featured?: boolean
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
    images: ['images/main-upscaled/addoha-hq.jpg'],
    text: '<p>The Addoha Headquarters project represents a bold step in corporate architecture for North Africa, merging contemporary design language with the cultural fabric of Casablanca. The building rises as a geometric composition of intersecting volumes, each calibrated to maximize natural light while providing shading from the intense Moroccan sun.</p><p>The facade system employs a parametric screen inspired by traditional mashrabiya patterns, reinterpreted through computational design methods. Interior spaces flow around a central atrium that serves as the social heart of the complex, connecting the public ground floor with the private executive levels above.</p>',
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
    images: ['images/main-upscaled/an-dong-h-t.jpg'],
    text: '<p>The re-design and expansion of the An Dong highway toll at Hangzhou Bay demanded the creation of an infrastructure element that would transcend its utilitarian purpose. The resulting design stands as both a functional toll station and an architectural landmark introducing travelers to the modernizing bay area.</p><p>Structural steel canopies span the highway lanes with sweeping curves that evoke the motion of traffic below. The integration of photovoltaic panels within the roof structure generates a significant portion of the station\'s energy needs, establishing a precedent for sustainable infrastructure in the region.</p>',
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
    text: '<p>Situated on the sun-drenched hills of Marbella, C4 explores the intersection of Mediterranean vernacular and radical contemporary form. The residence fragments into four interconnected pavilions, each oriented to capture distinct views of the coastline and the Sierra Blanca mountains beyond.</p><p>Material selection grounds the project in its landscape: locally sourced limestone walls emerge from the terrain while expansive glass planes dissolve the boundary between interior refuge and exterior garden.</p>',
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
    images: ['images/main-upscaled/citerion-house.jpg'],
    text: '<p>Citerion House occupies a privileged position overlooking the Mediterranean coast, its form shaped by a rigorous dialogue between site topography and programmatic requirements. The building steps down the hillside in a series of interconnected platforms.</p><p>The architectural language combines clean modernist lines with warm material textures, creating interiors that feel both expansive and intimate. A continuous water feature traces the perimeter of the main living spaces.</p>',
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
    text: '<p>The Desert Automobile Club envisions a new typology for automotive culture in the Arabian Peninsula. Rising from the desert landscape like an eroded geological formation, the complex houses exhibition galleries, a performance driving circuit, and exclusive members\' lounges.</p><p>The building envelope employs a double-skin system with an outer shell of perforated weathering steel that filters the harsh desert light into dappled interior atmospheres. Wind towers integrated into the architecture reference vernacular cooling strategies.</p>',
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
    text: '<p>This competition entry for the Ertaizi Airport expansion proposes a terminal building whose undulating roofline echoes the mountainous terrain of northeastern China. The structural system creates a vast column-free interior.</p><p>The facade incorporates triple-glazed curtain walls with integrated shading fins. A central skylight spine brings natural light to the deepest parts of the terminal, reducing energy consumption while creating an uplifting passenger experience.</p>',
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
    text: '<p>The Phase 4 proposal takes an evolved approach emphasizing modularity and phased construction. The design breaks the terminal into connected pavilions, each capable of independent operation.</p><p>Landscape integration plays a central role: green roofs and planted courtyards visible from the departure lounges bring seasonal change into the travel experience. Exposed timber glulam beams connect the building to the forested landscape of Jilin Province.</p>',
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
    text: '<p>This competition entry reimagines the sports stadium as an urban plaza, dissolving the traditional boundary between sporting venue and public space. The design integrates commercial, cultural, and recreational programs beneath a sweeping canopy.</p><p>The stadium bowl is carved into the landscape, reducing the building\'s visual mass while creating a natural amphitheatre effect. Surrounding terraced gardens connect the venue to the adjacent urban fabric.</p>',
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
    images: ['images/main-upscaled/k-s-villa.jpg'],
    text: '<p>K.S. Villa is organized around a central courtyard that acts as a climatic buffer and the social core of the dwelling, drawing inspiration from the Roman domus tradition reinterpreted through a contemporary lens.</p><p>The material palette is deliberately restrained: white rendered walls, natural stone floors, and dark timber joinery create a calm backdrop against which Mediterranean light becomes the primary decorative element.</p>',
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
    images: ['images/main-upscaled/la-paloma.jpg'],
    text: '<p>The renovation of La Paloma presented the opportunity to revisit a residence originally designed by the TAM studio in the mid-1980s. New programmatic demands required a sensitive intervention respecting the original architectural intentions.</p><p>The project focused on opening the ground floor to create flowing living spaces that connect seamlessly with the exterior terraces and pool area. New interior finishes introduce a refined material palette.</p>',
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
    images: ['images/main-upscaled/linfen-gallery.jpg'],
    text: '<p>The Linfen Gallery establishes a new cultural anchor in a city undergoing rapid transformation. The building\'s form is generated by the intersection of two primary circulation routes, creating galleries of varying proportion and character.</p><p>The facade system of translucent stone panels diffuses daylight into the exhibition spaces while presenting an ethereal presence to the city at night. A rooftop sculpture garden offers panoramic views.</p>',
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
    images: ['images/main-upscaled/linfen-library.jpg'],
    text: '<p>The library is conceived as a landscape of terraced reading platforms that cascade from the entrance level down to a sunken garden, each level offering different atmospheres for study and contemplation.</p><p>A central void connects all levels visually and spatially, allowing natural light to penetrate to the lowest reading rooms. The structural grid is expressed honestly in exposed concrete.</p>',
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
    images: ['images/main-upscaled/mr-z-house.jpg'],
    text: '<p>Mr. Z. House responds to an extensive family program distributed across multiple levels stepping down a steep hillside. The mansion, shaped as an arc that embraces the garden and Mediterranean sea view, allows all living areas direct access to the garden promenade.</p><p>Shared amenities including spa, gymnasium, swimming pool, and landscaped gardens occupy the spaces between private and communal zones, fostering family interaction while respecting individual privacy.</p>',
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
    text: '<p>The Mumbai Towers proposes a pair of hybrid skyscrapers that address the city\'s density challenges through vertical mixed-use programming. The towers interlock at multiple levels through sky bridges housing communal gardens, markets, and recreational spaces.</p><p>The structural system allows floor plates to shift and rotate as they rise, providing optimal solar orientation while generating a dynamic silhouette on the Mumbai skyline.</p>',
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
    images: ['images/main-upscaled/n-h-villa.jpg'],
    text: '<p>One of the studio\'s foundational residential projects. The house negotiates a challenging sloped site through split levels that maintain intimate contact with the terrain at every point.</p><p>The architectural expression is characterized by bold cantilevers and deep recesses. A double-height living room serves as the vertical and social center, connecting upper bedrooms with the pool terrace below.</p>',
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
    images: ['images/main-upscaled/oriental-landscape-hq.jpg'],
    text: '<p>Commissioned to design the headquarters of China\'s largest landscaping company within Beijing\'s prestigious 798 Art District, the interior architecture maintains corporate elegance while reflecting the nature of the landscaping business.</p><p>Living plant walls, interior water features, and natural material surfaces transform the workspace into a curated landscape experience. Meeting rooms are conceived as garden pavilions.</p>',
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
    text: '<p>The Peral Hotel reimagines boutique hospitality in Marbella. The building presents a restrained street elevation of stacked limestone volumes, each slightly offset to create private terraces.</p><p>A rooftop restaurant shaded by a perforated metal canopy offers views across the old town to the sea. The material language emphasizes local stone, handcrafted ceramics, and warm timber.</p>',
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
    images: ['images/main-upscaled/prestigia-hq.jpg'],
    text: '<p>Prestigia commissioned ATB Architecture to design a showroom and headquarters that would stand as a singular architectural statement. Faceted planes of glass and solid wall create a crystalline form that captures light differently throughout the day.</p><p>The interior spatial sequence builds from an expansive ground-floor exhibition space through increasingly intimate upper levels to the executive offices at the apex.</p>',
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
    text: '<p>This project addresses growing demand for high-quality collective housing in Saudi Arabia\'s capital. Units are organized around shared courtyards referencing the traditional urban fabric of the Najd region.</p><p>The building envelope employs a deep-set window system with integrated mashrabiya screens providing solar control and visual privacy without sacrificing views or natural ventilation.</p>',
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
    text: '<p>The Shanghai Arch proposes a monumental gateway marking the entrance to a new urban development zone. The design draws on the symbolic power of the arch as a threshold, reinterpreted at an urban scale through contemporary engineering.</p><p>The structure\'s form is generated by the intersection of two parabolic curves. Integrated observation platforms and exhibition spaces transform the infrastructure into a destination.</p>',
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
    images: ['images/main-upscaled/t-q-plaza.jpg'],
    text: '<p>Standing on the seafront at the confluence of Budva\'s two main avenues, T.Q. Plaza\'s facade is modeled into three blocks shaped as bows, emphasizing the naval character of the building.</p><p>The ground floor is given over entirely to commercial and public program. Upper-level apartments benefit from generous balconies with panoramic views of the Adriatic coastline.</p>',
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
    images: ['images/main-upscaled/tony-jacklin-golf-club.jpg'],
    text: '<p>Winner of the 2012 design competition, the clubhouse is situated near the forest of Bouskoura. The site\'s natural undulations guided a design whose low-slung profile echoes the rolling fairways.</p><p>The clubhouse wraps around a central terrace offering views across the 18th green. Local stone, dark timber, and weathering steel create a palette that ages gracefully alongside the maturing course.</p>',
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
    images: ['images/main-upscaled/urb-sierra-blanca.jpg'],
    text: '<p>The challenge was building within a densely forested plot where ancient trees colonized the entire ground. A rigorous topographical study mapped every significant tree, and the free patches defined the final building forms.</p><p>This site-first approach produced interconnected dwellings that weave between existing tree canopy, preserving the ecosystem while creating a residential community embedded within the forest.</p>',
    description: {
      es: 'El reto principal de este proyecto fue construir sobre una parcela boscosa con árboles milenarios en todo el terreno. Para el proyecto, se realizó un estudio topográfico riguroso en el que se definieron las áreas donde se podía construir respetando el entorno y los árboles de todo el territorio, estas áreas definieron la forma final de las viviendas.',
      en: 'The major challenge of this project was to build on a forested plot, whose dense mass colonized the entire ground. A rigorous topographical study defined the areas to be built. The remaining patches of free space defined the final form of the buildings.'
    }
  },
]

// Kinetic grid configuration
export const gridColumns: string[][] = [
  // Col 0 — DOWN
  ['addoha-hq', 'estadio-plaza-de-marbella', 'an-dong-h-t', 't-q-plaza', 'riyadh-apartments', 'prestigia-hq'],
  // Col 1 — UP
  ['citerion-house', 'oriental-landscape-hq', 'shanghai-arch', 'tony-jacklin-golf-club', 'k-s-villa', 'linfen-gallery'],
  // Col 2 — DOWN
  ['desert-auomobile-club', 'mumbai-towers', 'la-paloma', 'ertaizi-airport-p4', 'c4-marbella', 'linfen-library'],
  // Col 3 — UP
  ['urb-sierra-blanca', 'n-h-villa', 'mr-z-house', 'ertaizi-airport-p2', 'peral-hotel'],
]

export const columnSpeeds = [0.92, 1.05, 0.77, 0.83]
export const columnDirections: ('down' | 'up')[] = ['down', 'up', 'down', 'up']

// Project order for lightbox navigation
export const projectOrder: string[] = [
  'addoha-hq', 'an-dong-h-t', 'c4-marbella', 'citerion-house',
  'desert-auomobile-club', 'ertaizi-airport-p2', 'ertaizi-airport-p4',
  'estadio-plaza-de-marbella', 'k-s-villa', 'la-paloma',
  'linfen-gallery', 'linfen-library', 'mr-z-house', 'mumbai-towers',
  'n-h-villa', 'oriental-landscape-hq', 'peral-hotel', 'prestigia-hq',
  'riyadh-apartments', 'shanghai-arch', 't-q-plaza',
  'tony-jacklin-golf-club', 'urb-sierra-blanca'
]

// Helper to get project by ID
export function getProjectById(id: string): Project | undefined {
  return projects.find(p => p.id === id)
}

// Helper to build client-side PROJECT_DB for lightbox JS
export function buildClientProjectDB(base = '/') {
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
      text: p.text,
    }
  }
  return db
}
