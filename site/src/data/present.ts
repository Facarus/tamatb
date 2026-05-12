export interface PresentItem {
  id: string
  title: string
  subtitle: string
  year: string
  description: {
    en: string
    es: string
  }
  collaboration?: string
  images: string[]
}

export const presentItems: PresentItem[] = [
  {
    id: 'benahavis-single-family-homes-b',
    title: 'Benahavis Single Family Homes',
    subtitle: 'Folding Topography',
    year: '2018 - Proposals B',
    description: {
      en: `The program, stratified by its adaptation to the cantilevered terrain, folds upon itself creating a concrete membrane that segments the southern views into a series of frames, describing the Mediterranean panorama as a peaceful narrative. This membrane extends over the windowed openings allowing them to be insolation free whilst visually connected with the surrounding, perforated so as to diffuse direct sunlight thus optimizing natural illumination.

The green heart of the house, a cylindrical vertical circulation space large enough to house a tree, provides a unique experience in the traversing of the different programmatic levels, bringing nature into every functional space. Pierced with openable windows the cylinder acts as an ancient technological prowess, the ventilation chimney, allowing for sunlight to hit and heat the concrete cylinder walls, rising the hot air and creating a current that brings the vegetation cooled air of the mountains of Benahavis to freshen the premises.`,
      es: `El programa, estratificado por su adaptación al terreno en voladizo, se pliega sobre sí mismo creando una membrana de hormigón que segmenta las vistas al sur en una serie de marcos, describiendo el panorama mediterráneo como una narrativa tranquila. Esta membrana se extiende sobre las aberturas de las ventanas permitiendo que estén libres de insolación mientras están visualmente conectadas con el entorno, perforadas para difundir la luz solar directa optimizando así la iluminación natural.

El corazón verde de la casa, un espacio de circulación vertical cilíndrico lo suficientemente grande como para albergar un árbol, proporciona una experiencia única en el recorrido de los diferentes niveles programáticos, llevando la naturaleza a cada espacio funcional. Perforado con ventanas abatibles, el cilindro actúa como una antigua proeza tecnológica, la chimenea de ventilación, permitiendo que la luz del sol golpee y caliente las paredes de hormigón del cilindro, elevando el aire caliente y creando una corriente que trae el aire fresco de la vegetación de las montañas de Benahavís para refrescar el local.`,
    },
    collaboration: 'TAM ATB in collaboration with Monte Mayor Estates',
    images: [
      '/images/present/benahavis-b/Fac_01.jpg',
      '/images/present/benahavis-b/Fac_02.jpg',
      '/images/present/benahavis-b/Fac_03.jpg',
      '/images/present/benahavis-b/Fac_04.jpg',
      '/images/present/benahavis-b/Fac_05.jpg',
      '/images/present/benahavis-b/Fac_12.jpg',
    ],
  },
  // More present items can be added here
]
