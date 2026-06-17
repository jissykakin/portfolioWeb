export const educationDescription = `
  Ingeniera de Sistemas, egresada de la Corporación de la Costa en convenio con la Fundación Tecnológica Antonio de Arévalo, con especialización en automatización y control de procesos Industriales y especialización tecnológica en Administración de Bases de Datos.
`;

export const experienceDescription = `
  Full Stack Developer with experience in the design and development of enterprise software and applications. I have developed projects in various areas, including order management systems, attendance control, sales commission tracking, and online payment platforms.
`;

export const educationItems = [
  { year: "2019 - 2020", role: "SPECIALIZATION IN AUTOMATION AND CONTROL", company: "UNIVERSIDAD TECNOLÓGICA DE BOLÍVAR" },
  { year: "2017 - 2018", role: "TECHNOLOGICAL SPECIALIZATION IN DATABASE MANAGEMENT AND SECURITY", company: "SENA CARTAGENA" },
  { year: "2006 - 2012", role: "SYSTEMS ENGINEERING", company: "CUC -TECNAR" },
  
];

export const experienceItems = [
  { year: "2024 - Present", role: "FREELANCE WEB DEVELOPER AND TECHNOLOGY CONSULTANT", company: "DSND" },
  { year: "2023 - 2024", role: "IT OPERATIONS COORDINATOR NORTH COAST REGION", company: "H. DECAMERON" },
  { year: "2018 - 2023", role: "TECHNOLOGY & GRAPHIC DESIGN COORDINATOR", company: "EURO STYLE" },
];

export const resumeList = [
  {
    id: 1,
    title: "Experience",
    description: "Full Stack Developer with experience in the design and development of enterprise software and applications. I have developed projects in various areas, including order management systems, attendance control, sales commission tracking, and online payment platforms.",
    image: null,
    color: "text-black",
    list: [ 
      {
        id: 1,
        period: "2024–NOW",
        level: "Senior Developer",
        title: "TechZeitig – Full Stack Developer",
        institution: "Remote / Colombia",
        description:
          "Remote freelance role focused on web application development, UI/UX design, and ongoing platform maintenance for educational digital products",
        skills: ["Next", "React"],
      },
      {
        id: 2,
        period: "2019–2022",
        level: "Software Engineer",
        title: "Freelance & Consultancy Projects",
        institution: "Independent",
        description:
          "Led full-cycle development of systems for order tracking, invoicing, and financial control. Worked with small businesses on automation and system optimization.",
        skills: ["Node.js", "Angular", "SQL Server", "API REST", "JWT"],
      },
      {
        id: 3,
        period: "2012–2019",
        level: "Software Developer",
        title: "Corporación Universitaria de la Costa",
        institution: "Barranquilla, Colombia",
        description:
          "Developed and maintained academic systems, enrollment management, and internal dashboards for reporting and KPI visualization.",
        skills: ["C#", "ASP.NET", "MySQL", "Reports", "Data Visualization"],
      },
    ],
  },
  {
    id: 2,
    title: "Education",
    description: "Systems Engineer with specializations in Automation and Control of Industrial Processes and Database Administration.",
    image: null,
    color: "text-black",
    list: [
      {
        id: 1,
        period: "2019–2020",
        level: "Postgraduate Degree",
        title: "Specialization in Automation and Control of Industrial Processes",
        institution: "Universidad Tecnológica de Bolívar",
        description:
          "Focused on process control, automation, and industrial optimization with PLC and instrumentation systems.",
        skills: ["PLC", "Instrumentation", "Process Design"],
        certificate: "/certificates/postgraduate.pdf",
      },
      {
        id: 2,
        period: "2017–2018",
        level: "Technological Postgraduate Degree",
        title: "Database Management and Security (Oracle)",
        institution: "SENA Cartagena",
        description:
          "Advanced SQL optimization and Oracle database security techniques applied in real production environments.",
        skills: ["Oracle", "SQL", "Data Security"],
        certificate: "/certificates/oracle.pdf",
      },
      {
        id: 3,
        period: "2006–2012",
        level: "Undergraduate Degree",
        title: "Systems Engineering",
        institution: "Corporación Universitaria de la Costa (CUC)",
        description:
          "Software development, systems analysis, and IT project management.",
        skills: ["Java", "Networking", "Software Architecture"],
      },
    ],
  },
  {
    id: 3,
    title: "Courses",
    description: "Complementary training programs focused on strengthening data analytics, backend, and web development skills.",
    image: null,
    color: "text-black",
    list: [
      {
        id: 1,
        period: "2024/2025",
        level: "6 Months Completed",
        title: "Talento Tech: Data Analysis",
        institution: "Universidad Tecnológica de Bolívar",
        description:
          "Data cleaning, exploratory analysis, time series modeling, predictive analytics with machine learning, and dashboard development in SQL Server and Python.",
        skills: [
          "Python",
          "SQL Server",
          "Prophet",
          "Scikit-learn",
          "Plotly",
          "Data Visualization",
        ],
        certificate: "/certificates/data-analysis.pdf",
      },
      {
        id: 2,
        period: "2024",
        level: "6 Months Completed",
        title: "ONE: Web Development – Back-End",
        institution: "Oracle Next Education + Alura Latam",
        description:
          "Intensive web backend training (over 300 hours) with Spring Boot, REST APIs, and automated testing.",
        skills: ["Spring Boot", "API REST", "JUnit", "Oracle Cloud"],
        certificate: "/certificates/one-backend.pdf",
      },
      {
        id: 3,
        period: "2024",
        level: "6 Months Completed",
        title: "Misión TIC 2021 – Web Development",
        institution: "Universidad Industrial de Santander",
        description:
          "Bootcamp in web and backend development using Java, Spring Boot, and RESTful APIs. Focused on project-based learning and automation.",
        skills: ["Java", "Spring Boot", "REST API", "JUnit"],
        certificate: "/certificates/mision-tic.pdf",
      },
    ],
  },
];