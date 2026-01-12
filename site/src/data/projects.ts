export interface Project {
  id: string
  title: string
  location: string
  year: string
  description: {
    es: string
    en: string
  }
  image?: string
}

export const projects: Project[] = [
  {
    id: 'casa-zeid',
    title: 'Casa Zeid',
    location: 'Marbella, Málaga, Spain',
    year: '2002',
    description: {
      es: 'La casa Zeid responde a las necesidades de un amplio programa familiar compuesto por un núcleo paterno que disfruta de la planta alta y la zona central en la planta baja y una extensión para los más jóvenes de la familia, situados en los dúplex adosados a ambos lados. Ambos comparten las zonas comunes de la casa: el salón de la planta baja, el spa, el gimnasio, la piscina y los jardines. La vivienda, en forma de arco alrededor del jardín y la vista al mar Mediterráneo, permite a todas las zonas de vida acceso directo al paseo del jardín.',
      en: 'The house answers to a large family program composed of a paternal nucleus that enjoys the upper floor and the central area in the ground floor. Two younger family branches live in attached duplexes at both sides, sharing common areas of the house with their parents, such as a social area in the ground floor, spa, gym, swimming pool and gardens. The Mansion, shaped as an arch that embraces the garden and the Mediterranean sea view, allows all the living areas direct access to the garden promenade.'
    }
  },
  {
    id: 'sierra-blanca',
    title: 'Sierra Blanca',
    location: 'Marbella, Málaga, Spain',
    year: '2005',
    description: {
      es: 'El reto principal de este proyecto fue construir sobre una parcela boscosa con árboles milenarios en todo el terreno. Para el proyecto, se realizó un estudio topográfico riguroso en el que se definieron las áreas donde se podía construir respetando el entorno y los árboles de todo el territorio, estas áreas definieron la forma final de las viviendas.',
      en: 'The major challenge of this project was to build on a forested plot, whose dense mass colonized the entire ground. A rigorous topographical study defined the areas to be built. The remaining patches of free space defined the final form of the buildings.'
    }
  },
  {
    id: 'showroom-prestigia',
    title: 'Showroom Prestigia',
    location: 'Casablanca, Marruecos',
    year: '2012',
    description: {
      es: 'La empresa inmobiliaria Prestigia invitó a ATB a presentar un proyecto para el diseño de su showroom en Casablanca, Marruecos. Querían un edificio singular, que destacara en el espacio, un desafío que los arquitectos supieron llevar a cabo con maestría, en el que los materiales y la propia forma y ángulos del edificio son los protagonistas.',
      en: 'Prestigia, a leading real estate company, invited ATB Architecture to present a concept for the design of their showroom in Casablanca. They wanted the building to stand out, a challenge to which the architect rose as he created a design in which not only the external angles but the material plays a central role.'
    }
  },
  {
    id: 'oriental-landscape',
    title: 'Sede Oriental Landscape',
    location: 'Beijing, China',
    year: '2016',
    description: {
      es: 'Uno de los proyectos más importantes realizados por ATB Orient, en colaboración con el arquitecto Facundo Taborda Gauna y OUDG, fue la comisión de diseño de la sede corporativa de OL, la mayor empresa de paisajismo de China. La empresa requirió que su sede, ubicada en el prestigioso Distrito Artístico 798 de Pekín, mantuviese la elegancia de su imagen corporativa y a su vez reflejara su negocio de paisajismo.',
      en: 'One of the most important projects realized by ATB Orient, in association with the architect Facundo Taborda Gauna and OUDG, was the commission to design the corporate headquarters of OL, China\'s largest landscaping company.'
    }
  },
  {
    id: 'golf-tony-jacklyn',
    title: 'Club de Golf Tony Jacklyn',
    location: 'Casablanca, Marruecos',
    year: '2012',
    description: {
      es: 'En 2012, ATB Architecture, Ángel Taborda y la firma de su socio Daniela Ritcher, ganaron el concurso de diseño para la creación de una club de golf cerca del aeropuerto internacional de Casablanca en Marruecos. La parcela, situada en el antiguo terreno del ejército cerca del bosque de Bouskoura, está dominada por ondulaciones.',
      en: 'In 2012, ATB Architecture won the design competition for the creation of a golf clubhouse near Casablanca International Airport in Morocco. The site, situated in the former army terrain near the forest of Bouskoura, is dominated by undulating fairways.'
    }
  },
  {
    id: 'casa-nederveen',
    title: 'Casa Nederveen',
    location: 'Marbella, Málaga, Spain',
    year: '1998',
    description: {
      es: 'Esta casa explora la posibilidad de adaptar el azulejo típico árabe, material cuya excelencia de aislamiento térmico se demuestra, a raíces inclinadas hacia una nueva composición arquitectónica que combina eficiencia y fluidez del espacio.',
      en: 'This house explores the possibility of adapting the typical Arabic tile, material whose thermal insulation excellence is proved, to sloping roots towards a new architectural composition that combines efficiency and the fluency of space.'
    }
  },
  {
    id: 'an-dong',
    title: 'An Dong',
    location: 'Hangzhou Bay, China',
    year: '2015',
    description: {
      es: 'El rediseño y la expansión de la autopista de la bahía de An Dong del oeste de la bahía de Hangzhou demandaban la creación de un peaje de la autopista para el proceso del pago de la carretera, un símbolo como introducción a la globalización y a la modernización de la bahía de Hangzhou.',
      en: 'The re-design and expansion of the West AnDong Hangzhou Bay highway toll demanded the creation of a highway toll that would shelter the highway payment process and stand as introduction to Hangzhou Bay\'s globalizing and modernization tendencies.'
    }
  },
  {
    id: 'casa-smith',
    title: 'Casa Smith',
    location: 'Benahavís, Marbella, Málaga',
    year: '2003',
    description: {
      es: 'Esta vivienda aporta espacialmente una nueva experiencia atravesando estándares sin abordar una deconstrucción, pero provoca el descubrimiento de nuevas experiencias estéticas con los elementos complementarios de la misma, como escaleras, terrazas, barandillas, iluminaciones cenitales.',
      en: 'This home spatially provides a new experience crossing standards without addressing a deconstruction, but provokes the discovery of new aesthetic experiences with complementary elements such as stairs, terraces, railings, and skylight illuminations.'
    }
  },
  {
    id: 'casa-schaffer',
    title: 'Casa Schaffer',
    location: 'Marbella, Málaga, Spain',
    year: '2012',
    description: {
      es: 'El cambio de dueño de la Casa La Paloma, diseñado por el estudio TAM hacia 1985, y la necesidad de los nuevos ocupantes de reorganizar funciones y estilos, dio la posibilidad de revisitar esta obra, interactuando tanto con los interiores como con los porches exteriores y zona de piscina.',
      en: 'The change of ownership of Casa La Paloma, designed by TAM studio around 1985, and the need of the new occupants to reorganize functions and styles, gave the possibility to revisit this work, interacting with both interiors and exterior porches and pool area.'
    }
  },
  {
    id: 'tq-city',
    title: 'TQ City',
    location: 'Budva, Montenegro',
    year: '2009',
    description: {
      es: 'Con vistas al mar y situada en la confluencia de las dos avenidas principales de la ciudad de Budva, la fachada del edificio está diseñada como tres bloques en forma de u, con el objetivo de aumentar al máximo la fachada de las unidades de viviendas y oficinas con la mejor orientación.',
      en: 'Standing in the seafront, in the confluence of the two main avenues of Budva, the façade is modeled into three blocks in the form of bows, which emphasize the naval character of the building, thus identifying it with the neighboring marina.'
    }
  }
]
