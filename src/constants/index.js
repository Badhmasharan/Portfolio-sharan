import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    azure,
    mssql,
    dotnet,
    postgresql,
    reactjs,
    redux,
    tailwind,
    python,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    skcet,
    eygds,
    spagylo,
    tesla,
    shopify,
    carrent,
    jobit,
    linkedin,
    tripguide,
    threejs,
    ecommerce,
    fooddonation,
    cropcredit,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
{
    title: "Full Stack Developer",
    icon: backend,
  },
   {
    title: "AI Enthusiast",
    icon: web,
  },
 {
    title: "Database Developer",
    icon: creator,
  },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
        {
      name: ". NET",
      icon: dotnet,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Microsoft SQL Server",
      icon: mssql,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "PostgreSQL",
      icon: postgresql,
    },
    
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Azure Cloud",
      icon: azure,
    },

    {
      name: "git",
      icon: git,
    },
    {
      name: "python",
      icon: python,
    },
  ];

  
const experiences = [
  {
    company_name: "EY GDS",
    location: "Coimbatore, Tamil Nadu, India",
    icon: eygds,
    iconBg: "#ffffff",
    sub_experiences: [
      {
        title: "Associate Software Engineer",
        type: "Full-time",
        date: "Jun 2026 - Present · 1 mo",
        points: [
          "Continued working as a Full Stack Developer using .NET, React, MSSQL, PostgreSQL and Git.",
          "Transitioned from intern to full-time Associate Software Engineer.",
        ],
      },
      {
        title: "Technical Consultant",
        type: "Internship",
        date: "Jan 2026 - Jun 2026 · 6 mos",
        points: [
          "Worked as a Full Stack Developer using .NET, React, MSSQL, PostgreSQL and Git.",
        ],
      },
    ],
  },

  {
    company_name: "SPAGYLO TECH",
    location: "Coimbatore, Tamil Nadu, India",
    icon: spagylo,
    iconBg: "#E6DEDD",
    sub_experiences: [
      {
        title: "Full Stack Development Intern",
        type: "Internship",
        date: "Jul 2024 - Aug 2024 · 2 mos",
        points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        ],
      },
    ],
  },
];
  
 
  
  const projects = [
    {
      name: "E-COMMERCE PLATFORM",
      description:
        "Web-based platform that allows users to search and purchase from various providers,with a seamless experience.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: ecommerce,
      source_code_link: "https://github.com/Badhmasharan/REACT-PROJECT",
    },
    {
      name: "AGRI-LOAN PLATFORM",
      description:
        "Web platform that allows users to apply and manage their loans also Admin can manage them .",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "MySQL",
          color: "orange-text-gradient",
        },
      ],
      image: cropcredit,
      source_code_link: "https://github.com/Badhmasharan/AGRI-LOAN-MANAGEMENT-PORTAL-CropCredit",
    },
    {
      name: "FOOD DONATION PORTAL",
      description:
        "A platform where food donation is done seamlessly to the needy without any food waste.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "firebase",
          color: "blue-text-gradient",
        },
      ],
      image: fooddonation,
      source_code_link: "https://github.com/Badhmasharan/Food-Donation-portal",
    },
    // {
    //   name: "Job IT",
    //   description:
    //     "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    //   tags: [
    //     {
    //       name: "react",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "restapi",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "scss",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: jobit,
    //   source_code_link: "https://github.com/",
    // },
    // {
    //   name: "Trip Guide",
    //   description:
    //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    //   tags: [
    //     {
    //       name: "nextjs",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "supabase",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "css",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: tripguide,
    //   source_code_link: "https://github.com/",
    // },
  ];
  
  export { services, technologies, experiences, projects };