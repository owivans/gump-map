
const locations = [
  {
    id:1,
    name: 'Forrest Gump home',
    lat: 33.197280387736896,
    lng: -86.86132974619126,
    routePending: true,
    img: 'https://i.imgur.com/nOK4wNo.jpg',
    indicator: 'Inicio',
    traveled: true,
  },
  {
    id:2,
    name: 'Santa monica Pier',
    lat: 34.01091661431147,
    lng: -118.49794835831294,
    routePending: true,
    img: 'https://i.imgur.com/j842hKq.png',
    indicator: 'Primer parada',
    traveled: true,
  },
  {
    id:3,
    name: 'portClyde',
    lat: 43.917483571777055,
    lng: -69.26120526905665,
    routePending: true,
    indicator: 'Segunda parada',
    img: 'https://i.imgur.com/h2YFbME.jpg',
    traveled: true,
  },
  {
    id:4,
    name: 'forest gum',
    lat: 40.820203118110605,
    lng: -89.83747994964425,
    routePending: true,
    current: true,
    img:'https://i.imgur.com/QjsrXrX.jpg',
    indicator: 'Ubicacion actual',
  },
  {
    id:5,
    name: 'cut Bank',
    lat: 48.63469804074085,
    lng: -112.33124618371835,
    routePending: false,
    img: 'https://i.imgur.com/sC5K4M8.png',
    indicator: 'Tercer parada',
  },
  {
    id:6,
    name: 'Driver Services Bureau',
    lat: 48.63389793673802,
    lng:-112.34342139429161,
    routePending: false,
    img: 'https://i.imgur.com/Ni6T1id.jpg',
    indicator: 'Cuarta parada',
  },
  {
    id:7,
    name: 'Whashington',
    lat:47.07076879771594,
    lng:-124.17234525163032,
    routePending: false,
    img: 'https://i.imgur.com/KjkXHZG.jpg',
    indicator: 'Quinta parada',
  },
  {
    id:8,
    name: 'Hunting island',
    lat:32.364464921667945,
    lng:-80.45097545992861,
    routePending: false,
    img: 'https://i.imgur.com/dKIl8IH.jpg',
    indicator: 'Sexta parada',
  },
  {
    id: 9,
    name: 'English farmastead chesse',
    lat:35.91185116731341,
    lng: -81.93983189608295,
    routePending: false,
    img: 'https://i.imgur.com/vpUnZ9K.jpg',
    indicator: 'Septima parada',
  },
  {
    id:10,
    name: 'Utah',
    lat:37.09698717513109,
    lng:-110.67612765414681,
    routePending: false,
    img: 'https://i.imgur.com/EoZaVVY.jpg',
    indicator: 'Destino',
  },
];

const forestRoute = {
  actualLocation: {
    id:4,
    name: 'forest gum',
    lat: 40.820203118110605,
    lng: -89.83747994964425,
    routePending: true,
    current: true,
    img:'https://i.imgur.com/QjsrXrX.jpg',
    indicator: 'Ubicacion actual',
  },
  traveledRoute: [
    {
      id:1,
      name: 'Forrest Gump home',
      lat: 33.197280387736896,
      lng: -86.86132974619126,
      routePending: true,
      img: 'https://i.imgur.com/nOK4wNo.jpg',
      indicator: 'Inicio',
      traveled: true,
    },
    {
      id:2,
      name: 'Santa monica Pier',
      lat: 34.01091661431147,
      lng: -118.49794835831294,
      routePending: true,
      img: 'https://i.imgur.com/j842hKq.png',
      indicator: 'Primer parada',
      traveled: true,
    },
    {
      id:3,
      name: 'portClyde',
      lat: 43.917483571777055,
      lng: -69.26120526905665,
      routePending: true,
      indicator: 'Segunda parada',
      img: 'https://i.imgur.com/h2YFbME.jpg',
      traveled: true,
    },
  ],
  pendingRoute: [
    {
      id:5,
      name: 'cut Bank',
      lat: 48.63469804074085,
      lng: -112.33124618371835,
      routePending: false,
      img: 'https://i.imgur.com/sC5K4M8.png',
      indicator: 'Tercer parada',
    },
    {
      id:6,
      name: 'Driver Services Bureau',
      lat: 48.63389793673802,
      lng:-112.34342139429161,
      routePending: false,
      img: 'https://i.imgur.com/Ni6T1id.jpg',
      indicator: 'Cuarta parada',
    },
    {
      id:7,
      name: 'Whashington',
      lat:47.07076879771594,
      lng:-124.17234525163032,
      routePending: false,
      img: 'https://i.imgur.com/KjkXHZG.jpg',
      indicator: 'Quinta parada',
    },
    {
      id:8,
      name: 'Hunting island',
      lat:32.364464921667945,
      lng:-80.45097545992861,
      routePending: false,
      img: 'https://i.imgur.com/dKIl8IH.jpg',
      indicator: 'Sexta parada',
    },
    {
      id: 9,
      name: 'English farmastead chesse',
      lat:35.91185116731341,
      lng: -81.93983189608295,
      routePending: false,
      img: 'https://i.imgur.com/vpUnZ9K.jpg',
      indicator: 'Septima parada',
    },
    {
      id:10,
      name: 'Utah',
      lat:37.09698717513109,
      lng:-110.67612765414681,
      routePending: false,
      img: 'https://i.imgur.com/EoZaVVY.jpg',
      indicator: 'Destino',
    },
  ]
}
export default forestRoute;
