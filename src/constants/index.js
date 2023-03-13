import {
    backend,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    git,
    figma,
    docker,
    meta,
    starbucks,
    carrent,
    jobit,
    tripguide,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
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
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Trainee",
      company_name: "Assej",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2019 - November 2020",
      points: [
        "Scheduling appointments at the health center.",
        "Responsible for the documents of various departments of the City Hall.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Kenzie Academy Brazil - 2,000 hour Full Stack Development course",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - Present",
      points: [
        "Development of web applications using React.js and other related technologies.",
        "Collaborate with teams of junior developers.",
        "Implementing responsive design and integration with APIs.",
        "Participate in dailys and provide constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Netflix Clone",
      description:
        "The famous Netflix clone, looking to improve my knowledge in ReactJs",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "material-ui",
          color: "green-text-gradient",
        },
        {
          name: "responsive CSS",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/jooaogbriel/projeto-netflix",
    },
    {
      name: "Form",
      description:
        "Form made in ReactJs. Using react hook form, Yup, React Router Dom and useHistory",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "yup",
          color: "green-text-gradient",
        },
        {
          name: "react-hook-form",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/jooaogbriel/tela-login",
    },
    {
      name: "Nlw - Setup",
      description:
        "A habit control application that uses the most modern technologies on the market.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "node js",
          color: "green-text-gradient",
        },
        {
          name: "typescript",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/jooaogbriel/nlw-Setup",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };