export default {
  global: {
    componenteFormativo: 'Evaluación de las solicitudes',
    descripcionCurso:
      'En el sistema económico colombiano, muchas personas solicitan créditos para desarrollar sus microempresas. Los negocios en crecimiento buscan recursos económicos de entidades financieras, donde la información del cliente y la evaluación del analista son cruciales para garantizar la recuperación del dinero. Este componente formativo ofrece el contenido necesario para un buen estudio de crédito.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Mercado objetivo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Sistema de administración de riesgo crediticio SARC',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Estrategias de identificación de necesidades de los clientes',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Factores de evaluación para los microcréditos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Métodos de cálculo para créditos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Contabilidad básica',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Manejo de títulos valores',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Flujos de caja',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Capacidad de pago',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Capacidad de endeudamiento',
            hash: 't_6_4',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Cliente microfinanciero',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Tipos de clientes',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Manejo de los momentos de verdad',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'Características',
            hash: 't_7_3',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Bases de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '8.1',
            titulo: 'Minería de datos y confidencialidad',
            hash: 't_8_1',
          },
        ],
      },
      {
        nombreRuta: 'tema9',
        numero: '9',
        titulo: 'Técnicas de comprobación de la información de clientes',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema10',
        numero: '10',
        titulo: 'Análisis financiero',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '10.1',
            titulo: 'Sobreendeudamiento',
            hash: 't_10_1',
          },
          {
            numero: '10.2',
            titulo: 'Capacidad de pago',
            hash: 't_10_2',
          },
        ],
      },
      {
        nombreRuta: 'tema11',
        numero: '11',
        titulo: 'Indicadores de gestión',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '11.1',
            titulo: 'Tipos de indicadores',
            hash: 't_11_1',
          },
          {
            numero: '11.2',
            titulo: 'Parámetros',
            hash: 't_11_2',
          },
        ],
      },
      {
        nombreRuta: 'tema12',
        numero: '12',
        titulo: 'Modelos de informes microfinancieros',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '12.1',
            titulo: 'Comité de crédito (aprobación o negación)',
            hash: 't_12_1',
          },
        ],
      },
      {
        nombreRuta: 'tema13',
        numero: '13',
        titulo: 'Desembolso',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/133302_CF03_DU.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Sistema de administración de riesgo crediticio SARC',
      referencia:
        'Ruza, C. (2013). El riesgo de crédito en perspectiva. UNED - Universidad Nacional de Educación a Distancia.',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/48687',
    },
  ],
  glosario: [
    {
      termino: 'Balance general',
      significado:
        'refleja en un momento determinado la información económica y financiera de una empresa.',
    },
    {
      termino: 'Cruce de información',
      significado:
        'es el cotejo que se obtiene luego de una comparación de dos o más tipos de información para su verificación y análisis.',
    },
    {
      termino: 'Estados financieros',
      significado:
        'son el reflejo de la contabilidad de una empresa y muestran la estructura económica de ésta. En los estados financieros se plasman las actividades económicas que se realizan en la empresa durante un determinado período.',
    },
    {
      termino: 'Flujo unidad familiar',
      significado:
        'informe detallado de los ingresos y egresos de la familia, en el microcrédito es esencial revisar este informe ya que el microempresario en general tiende a mezclar las cuentas de la familia y del negocio.',
    },
    {
      termino: 'Método de cálculo',
      significado:
        'son herramientas que tiene un asesor microfinanciero para determinar o calcular el nivel de ventas y compras que realiza el cliente para poder determinar la viabilidad del crédito de acuerdo al manejo del negocio.',
    },
  ],
  referencias: [
    {
      referencia:
        'Arenal Laza, C. (2018). Técnicas de información y atención al cliente, consumidor, usuario: UF0037. Editorial Tutor Formación. ',
    },
    {
      referencia:
        'Banco de Occidente (2017). Circular externa 026 de 2017. Capítulo II: reglas relativas a la gestión del riesgo crediticio. ',
      link:
        'https://www.bancodeoccidente.com.co/wps/wcm/connect/banco-de-occidente/2d52a212-d27a-4951-8804-ef0ed374a8ed/circular-externa-superfinanciera.pdf?MOD=AJPERES',
    },
    {
      referencia:
        'Espinosa, H. (2016). Características de los clientes de microcréditos. Uniminuto.',
      link: '',
    },
    {
      referencia:
        'Greciet Paredes, P. (2013). Contabilidad básica para micro, pequeña y medianas empresa en Honduras. Ministerio de Educación de España. ',
    },
    {
      referencia:
        'Jaffe, D. y Price, B. (2015). ¡Tú cliente manda!. Grupo Editorial Patria. ',
    },
    {
      referencia:
        'Lavalle Burguete, A. C. (2017). Análisis financiero. Editorial Digital UNID. ',
    },
    {
      referencia:
        'Marqués, M. (2009). Bases de datos. D - Universitat Jaume I. Servei de Comunicació i Publicacions. ',
    },
    {
      referencia:
        'Moldejar, J., Lorenzo, C. & Borja, (2008). Interacción persona-ordenador en la investigación del proceso de decisión del consumidor. ',
    },
    {
      referencia:
        'Morales Castro, J. A. y Castro. Arturo, M. (2015). Crédito y cobranza. Grupo Editorial Patria. ',
    },
    {
      referencia:
        'Prieto Herrera, J. E. (2009). Investigación de mercados. Ecoe Ediciones. ',
    },
    {
      referencia:
        'Ruza, C. (2013). El riesgo de crédito en perspectiva. UNED - Universidad Nacional de Educación a Distancia. ',
    },
    {
      referencia:
        'Superintendencia Bancaria de Colombia (2006). Curso Administración y Recuperación de la Cartera de Créditos. ',
      link: 'https://www.coursehero.com/file/44956137/MATERIAL-DE-APOYO-2doc/',
    },
    {
      referencia:
        'Thompson, H. (2016). ¿¿Quién se ha llevado a mi cliente?? Estrategias clave para fidelizar a los clientes. Grupo Editorial Patria. ',
    },
    {
      referencia:
        'Zapata Martelo, E. Garcí, Z. y Alberti Manzanares, P. (2008). Microfinanciamiento y empoderamiento de mujeres rurales: las cajas de ahorro y crédito en México. Plaza y Valdés, S.A. de C.V. ',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Vilma Andrea Baracaldo Neira',
          cargo: 'Experta temática',
          centro: 'Centro de Servicios Financieros - Regional Distrito Capital',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Andrés Felipe Herrera Roldán',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jhon Jairo Urueta Alvarez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Laura Gisselle Murcia Pardo',
          cargo: 'Animador y productor multimedia',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Andrés Felipe Guevara Ariza',
          cargo: 'Locución',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edgar Mauricio Cortés García',
          cargo: 'Actividad didáctica',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        //{
        //  nombre: 'Luis Gabriel Urueta Alvarez',
        //  cargo: 'Validador de Recursos Educativos Digitales',
        //  centro: 'Centro de Servicios de Salud - Regional Antioquia',
        //},
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
