const dataProjects = [
  {
    title: "Anuario Escolar DSND 2024-2025",
    description: "Diseño editorial completo del anuario escolar del German Embassy School New Delhi, edición 2024-2025. Proyecto de gran escala con 184 páginas que integran diseño editorial, retoque fotográfico, maquetación y elementos gráficos personalizados. Se aplicaron conceptos de identidad institucional, narrativas visuales y estructura editorial en un proyecto ejecutado durante 4 meses.",
    image: "imgs/portfolio/projectGraphicDesign1.png",
    tags: ["InDesign", "Illustrator", "Photoshop"],
    category: "GRAPHIC DESIGN",
    subcategory: "DISEÑO EDITORIAL",
    ano: "2025"
  },
  {
    title: "Diseño de Productos Capilares",
    description: "Desarrollo visual de línea de tratamientos capilares para EuroStyle durante 6 años, incluyendo el diseño y rediseño de etiquetas, envases, cajas y material de embalaje. Se trabajó en la creación de un lenguaje visual coherente, orientado al consumidor y adaptado a las tendencias del mercado cosmético.",
    image: "imgs/portfolio/projectGraphicDesign2.png",
    tags:  ["Illustrator", "Photoshop", "Corel Draw"],
    category: "GRAPHIC DESIGN",
    subcategory: "DISEÑO DE PRODUCTO",
    ano: "2022"
  },
  {
    title: "Diseño de Productos - Tinturas",
    description: "Diseño integral de empaques para productos decolorantes y tinturas capilares de EuroStyle. A lo largo de 6 años se renovó la identidad visual y se desarrollaron nuevos productos enfocados en impacto visual en punto de venta y diferenciación de marca. Se aplicaron criterios técnicos de impresión y composición visual.",
    image: "imgs/portfolio/projectGraphicDesign3.png",
    tags:  ["Illustrator", "Photoshop", "Corel Draw"],
    category: "GRAPHIC DESIGN",
    subcategory: "DISEÑO DE PRODUCTO",
    ano: "2022"
  },
  {
    title: "Diseño de Productos Decolorantes",
    description: "Diseño gráfico de envases, etiquetas y embalajes para líneas de decolorantes y tratamientos capilares en EuroStyle. Se trabajó en el refresh visual de productos existentes y el lanzamiento de nuevas referencias, cuidando la identidad de marca, la jerarquía visual y la funcionalidad del diseño en entornos comerciales.",
    image: "imgs/portfolio/projectGraphicDesign4.png",
    tags:  ["Illustrator", "Photoshop", "Corel Draw"],
    category: "GRAPHIC DESIGN",
    subcategory: "DISEÑO DE PRODUCTO",
    ano: "2021"
  },
  {
    title: "Diseño de Flyers – EuroStyle",
    description: "Creación de flyers publicitarios de una y doble cara para promover tratamientos, tintes y decolorantes capilares. El diseño se adaptó a campañas promocionales específicas, destacando beneficios y branding con una comunicación visual clara y efectiva.",
    image: "imgs/portfolio/projectGraphicDesign5.png",
    tags:  ["Illustrator", "Photoshop", "Corel Draw"],
    category: "GRAPHIC DESIGN",
    subcategory: "DISEÑO PUBLICITARIO",
    ano: "2022"
  },
  {
    title: "Diseño Flyer Single Sided (Nao7)",
    description: "Diseño de flyer de una sola cara para el lanzamiento del kit capilar con proteína de arroz de la marca Nao7. El diseño transmite naturalidad, beneficios del producto y fortalece la identidad visual mediante un enfoque limpio y moderno.",
    image: "imgs/portfolio/projectGraphicDesign6.png",
    tags:  ["Illustrator", "Photoshop", "Corel Draw"],
    category: "GRAPHIC DESIGN",
    subcategory: "DISEÑO PUBLICITARIO",
    ano: "2023"
  },
  {
    title: "Diseño Flyer Double Sided (Nao7)",
    description: "Diseño de flyer informativo doble cara para productos de proteína de arroz (shampoo y acondicionador) de Nao7. El diseño equilibra estética, claridad informativa y elementos visuales para generar impacto comercial.",
    image: "imgs/portfolio/projectGraphicDesign7.png",
    tags:  ["Illustrator", "Photoshop", "Corel Draw"],
    category: "GRAPHIC DESIGN",
    subcategory:"DISEÑO PUBLICITARIO",
    ano: "2023"
  },
  {
    title: "Diseño de Logotipos Creativos",
    description: "Desarrollo de logotipos en diferentes estilos como minimalista, isologo, imagotipo y abstracto para diversas marcas. Cada diseño responde a la identidad, misión y visión de la empresa, asegurando versatilidad y recordación visual.",
    image: "imgs/portfolio/projectGraphicDesign8.png",
    tags:  ["Illustrator"],
    category: "GRAPHIC DESIGN",
    subcategory: "IDENTIDAD VISUAL",
    ano: "2024",
  },
  {
    title: "Brochure – EuroStyle",
    description: "Diseño y maquetación del brochure institucional de EuroStyle. Se propuso un diseño visual sobrio y vanguardista que refuerza la propuesta de valor de la empresa y su portafolio de productos. Incluye tratamiento fotográfico, tipografía limpia y estructura adaptable a medios físicos y digitales.",
    image: "imgs/portfolio/projectGraphicDesign9.png",
    tags:  ["Illustrator", "Photoshop", "Corel Draw"],
    category: "GRAPHIC DESIGN",
    subcategory: "DISEÑO EDITORIAL",
    ano: "2023"
  },
  {
    title: "AgriDash - Análisis Agrícola",
    description: "AgriDash es una aplicación interactiva desarrollada con Python y Dash para el análisis descriptivo y predictivo de datos agrícolas en Colombia. El sistema facilita la exploración de exportaciones agrícolas y evaluaciones agropecuarias municipales mediante visualizaciones dinámicas, modelos de predicción y un diseño modular enfocado en la toma de decisiones.",
    image: "imgs/portfolio/proyectsDataAnalytics3.png",
    tags:  ["Python", "Sql Server", "Dash & Plotly", "Bootstrap", "Prophet", "Statsmodels", "Scikit-learn"],
    category: "DATA ANALYTICS",
    subcategory: "PREDICTIVE ANALYTIC",
    ano: "2025"
  }, 
  {
    title: "Dashboard de Nacimientos Neonatal",
    description: "Desarrollo de un dashboard interactivo utilizando Python, Dash y bases de datos MySQL para analizar el impacto de factores socioeconómicos, condiciones de vida y acceso a servicios médicos en los indicadores de natalidad neonatal en el departamento de Bolívar, Colombia. Se aplicaron técnicas de analítica descriptiva para explorar brechas en salud pública materno-infantil y visualizar patrones críticos que permitan la toma de decisiones informadas para estrategias preventivas.",
    image: "imgs/portfolio/proyectsDataAnalytics1.png",
    tags:  ["Python", "Mysql", "Dash & Plotly", "Pandas", "Bootstrap", "Seaborn", "Statsmodels"],
    category: "DATA ANALYTICS",
    subcategory: "DESCRITIVE ANALYTIC",
    ano: "2024"
  }, 
  {
    title: "Dashboard de Mortalidad Neonatal",
    description: "Creación de un dashboard avanzado en Power BI para visualizar y analizar indicadores de mortalidad neonatal en el departamento de Bolívar, Colombia. A través de la integración de datos socioeconómicos y de salud pública, el panel permite identificar factores de riesgo asociados a la atención prenatal, condiciones de vida y acceso a servicios médicos. Este análisis demográfico apoya la formulación de estrategias educativas y programas de salud materno-infantil, mediante visualizaciones dinámicas, mapas geográficos, gráficos comparativos y segmentaciones por grupo poblacional.",
    image: "imgs/portfolio/proyectsDataAnalytics2.png",
    tags:  ["Power BI", "Mysql", "Excel"],
    category: "DATA ANALYTICS",
    subcategory: "DESCRITIVE ANALYTIC",
    ano: "2024"
  }, 
  {
    title: "Encriptador y Desencriptador - JavaScript",
    description: "Este proyecto web puede encriptar y desencriptar tus mensajes de texto con tres niveles de encriptación",
    image: "imgs/portfolio/proyectswebapp1.png",
    tags: ["JavaScript", "HTML", "CSS"],
    category: "WEB APPLICATIONS",
    subcategory: "",
    ano: "2024"
  },
  {
    title: "NexCognitive - WebApp",
    description: "NexCognitive es una aplicación web diseñada para apoyar a los profesionales, como psicólogos, educadores, médicos y otros especialistas, en la estimulación cognitiva de sus pacientes mediante juegos interactivos. Su objetivo es ofrecer una herramienta accesible y eficiente que permita reforzar habilidades cognitivas de manera personalizada.",
    image: "imgs/portfolio/proyectswebapp2.png",
    tags: ["React", "Typescript", "TailwindCSS", "Java", "Spring Boot", "PostgreSQL"],
    category: "WEB APPLICATIONS",
    subcategory: "",
    ano: "2024"
  },
  {
    title: "SkillLink – Plataforma de Networking",
    description: "Desarrollo de una aplicación web completa con Java y Spring Boot para conectar talentos, facilitar la mentoría y fomentar la colaboración profesional entre usuarios. Incluye creación de perfiles, exploración de habilidades, recomendación de conexiones, e infraestructura Dockerizada para despliegue en entornos productivos.",
    image: "imgs/portfolio/proyectswebapp3.png",
    tags: ["Java", "Spring Boot", "MySQL", "Docker", "Maven", "API REST"],
    category: "WEB APPLICATIONS",
    subcategory: "SOCIAL NETWORKING",
    ano: "2025"
  },
  {
    title: "Módulo de Pedidos",
    description: "Desarrollo de una aplicación web para la gestión de pedidos, integrada con el ERP Zeus. El sistema permite registrar, consultar y administrar pedidos de forma ágil y segura. Se utilizó Angular para el frontend, API REST desarrollada en C# .NET Core y SQL Server con Entity Framework para la persistencia de datos.",
    image: "imgs/portfolio/imagenotfound.png",
    tags: ["Angular", "SQL Server", "Entity Framework", ".NET Core", "API REST"],
    category: "WEB APPLICATIONS",
    subcategory: "SOFTWARE DEVELOPMENT",
    ano: "2022"
  },
  {
    title: "Control de Asistencia Biométrica",
    description: "Sistema web para el control de asistencia del personal, con integración a dispositivos biométricos, generación de alertas por inasistencias y panel administrativo para gestión de horarios. Compatible con sistemas de nómina existentes. Utiliza React para el frontend, Node.js en backend y base de datos MongoDB.",
    image: "imgs/portfolio/imagenotfound.png",
    tags: ["React", "Node.js", "MongoDB", "Biometría", "Gestión de Asistencia"],
    category: "WEB APPLICATIONS",
    subcategory: "HR TECH",
    ano: "2021"
  },
  {
    title: "Sistema de Cálculo de Comisiones y Reportes de Ventas",
    description: "Desarrollo de un motor personalizado para el cálculo de comisiones de ventas y generación de reportes detallados. El sistema permite parametrización de reglas de negocio por vendedor, zona o producto. Implementado con ASP.NET Core y SQL Server para garantizar seguridad y escalabilidad.",
    image: "imgs/portfolio/imagenotfound.png",
    tags: ["ASP.NET Core", "SQL Server", "Cálculo de Comisiones", "Reportes"],
    category: "WEB APPLICATIONS",
    subcategory: "BUSINESS LOGIC ENGINE",
    ano: "2022"
  },
  {
    title: "Software de Nómina y Seguridad Social (VB 6.0)",
    description: "Desarrollo e implementación de un software de escritorio para la gestión completa de nómina, incluyendo liquidación salarial, cálculo y pago de seguridad social. Construido con Visual Basic 6.0 y SQL Server, adaptado a requerimientos empresariales específicos.",
    image: "imgs/portfolio/imagenotfound.png",
    tags: ["Visual Basic 6.0", "SQL Server", "Nómina", "Software a Medida"],
    category: "SOFTWARE DEVELOPMENT",
    subcategory: "DESKTOP APPLICATIONS",
    ano: "2013"
  },
  {
    title: "Sistema Web de Gestión de Cartera y Pagos a Terceros",
    description: "Aplicación web para la administración de cartera, control de pagos de clientes y terceros, y generación de reportes financieros. Desarrollado con PHP, MySQL, HTML, CSS y JavaScript, enfocado en usabilidad, accesibilidad y control financiero.",
    image: "imgs/portfolio/imagenotfound.png",
    tags: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    category: "WEB APPLICATIONS",
    subcategory: "WEB APPLICATIONS",
    ano: "2014"
  },
  {
    title: "Portal Web de Nómina para Empleados",
    description: "Desarrollo de un módulo web para empleados donde pueden descargar certificados laborales, colillas de pago y gestionar solicitudes de permisos. El sistema automatiza tareas del área de RR.HH. y mejora la experiencia del colaborador. Tecnologías utilizadas: PHP, MySQL, HTML, CSS y JavaScript.",
    image: "imgs/portfolio/imagenotfound.png",
    tags: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "RRHH"],
    category: "WEB APPLICATIONS",
    subcategory: "SELF-SERVICE PLATFORMS",
    ano: "2015"
  },
  {
    title: "Diseño UX/UI – Transmaster Express",
    description: "Diseño completo en Figma de la página web corporativa de Transmaster Express, empresa dedicada al transporte de mercancías. El enfoque UX/UI se centró en optimizar la experiencia del usuario mediante una interfaz moderna, intuitiva y adaptable a distintos dispositivos. Se trabajó en la arquitectura de información, flujos de navegación, paleta de colores corporativa y elementos visuales con un estilo profesional. Se utilizaron herramientas como Figma para el prototipado, Illustrator para íconos personalizados y Photoshop para la edición de imágenes de alta calidad.",
    image: "imgs/portfolio/projectuxui1.png",
    tags: ["Figma", "UX/UI Design", "Illustrator", "Photoshop"],
    category: "UX/UI DESIGN",
    subcategory: "WEB DESIGN",
    ano: "2024"
  }

  

  
];

export default dataProjects;