// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";

import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";

import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import gsapLogo from "./assets/tech_logo/gsap.png";

import nodejsLogo from "./assets/tech_logo/nodejs.png";

import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";

import vercelLogo from "./assets/tech_logo/vercel.png";

import csharpLogo from "./assets/tech_logo/csharp.png";

// Education Section Logo's
import iitLogo from "./assets/education_logo/iit.png";
import rkplogo from "./assets/education_logo/rkp.jpg";
import bmuLogo from "./assets/education_logo/bmu.png";
import jasvlogo from "./assets/education_logo/jasv.png";

// Project Section Logo's
import collage from "./assets/work_logo/collage.png";
import foodDelivery from "./assets/work_logo/foodDelivey.png";
import Ecommerce from "./assets/work_logo/Ecommerce.png";
import Atlas from "./assets/work_logo/Atlas.png";
import SmartBot from "./assets/work_logo/smartbot.png";
import animated from "./assets/work_logo/animated.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },

      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },

      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "GSAP", logo: gsapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },

      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      { name: "C-Sharp", logo: csharpLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },

      { name: "Vercel", logo: vercelLogo },
    ],
  },
];

export const education = [
  {
    id: 0,
    img: bmuLogo,
    school: "Baba Mastnath University, Haryana",
    date: "Sept 2022 - Aug 2025",
    grade: "7.5 SGPA",
    desc: "I completed my Bachelor's degree in Computer Science (BCA) from BMU University, Rohtak. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at BSA College allowed me to work on projects that applied theoretical concepts to real-world problems.",
    degree: "Bachelor of Computer Application - BCA (Computer Science)",
  },
  {
    id: 1,
    img: iitLogo,
    school: "IIT Ropar, Punjab",
    date: "june 2024 - june 2025",
    grade: "Persuing",
    desc: "I am doing Minor in AI  in Computer Science from IIT Ropar , Punjab. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of Artificial Intelligence. Undarstanding the fundamentals of AI, including machine learning, natural language processing, and computer vision.",
    degree: "Minor in AI - Computer Science",
  },
  {
    id: 2,
    img: rkplogo,
    school: "RKP SENIOR SECONDARY SCHOOL, Madina, Rohtak",
    date: "Apr 2017 - March 2018",
    grade: "55%",
    desc: "I completed my class 12 education from RKP SENIOR SECONDARY SCHOOL, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
    degree: "CBSE(XII) - PCM ",
  },
  {
    id: 3,
    img: jasvlogo,
    school: "JASV High School BAINSI, Rohtak",
    date: "Apr 2016 - March 2017",

    grade: "10 CGPA",
    desc: "I completed my class 10 education from Vatsalya Public School, Govardhan, under the CBSE board, where I studied Science with Computer.",
    degree: "CBSE(X)",
  },
];

export const projects = [
  {
    id: 0,
    title: "collage website",
    description:
      "A powerful and user-friendly React.js website designed for educational institutions. It features a dynamic homepage with a hero section, multiple sections showcasing courses, faculty, and student testimonials, and a contact form for inquiries. The website is fully responsive, ensuring a seamless experience across devices.",
    image: collage,
    tags: ["HTML", "CSS", "JavaScript", "React JS"],
    github: "https://github.com/pankajofficial0501/Collage_Website",
    webapp: "https://collage-website-six.vercel.app",
  },
  {
    id: 1,
    title: "Food Delivery Website",
    description:
      "A frontend foodDelivery website built with React.js, featuring a modern design and user-friendly interface. It includes a homepage with a hero section, multiple sections showcasing food items, and a contact form for inquiries. The website is fully responsive, ensuring a seamless experience across devices.",
    image: foodDelivery,
    tags: ["React JS", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/pankajofficial0501/Food_Delivery",
    webapp: "https://food-delivery-2x.vercel.app",
  },
  {
    id: 2,
    title: "ECommerce Website",
    description:
      "A full-stack Ecommerce website built with React.js and Node.js. It features a modern design, user-friendly interface, and robust functionality for managing products, orders, and user accounts. The website is fully responsive, ensuring a seamless experience across devices.",
    image: Ecommerce,
    tags: [
      "React JS",
      "API",
      "HTML",
      "CSS",
      "JavaScript",
      "postman",
      "MongoDB",
      "Tailwind CSS",
    ],
    github: "https://github.com/pankajofficial0501/Reactjs-Ecommerce",
    webapp: "https://reactjs-ecommerce-iota.vercel.app",
  },
  {
    id: 3,
    title: "SmartAi Bot",
    description:
      "A Smart AI Bot for chat and text to image generation, built with React.js and Node.js. It features a user-friendly interface for chatting and generating images from text prompts. The bot uses advanced AI algorithms to provide accurate responses and high-quality images.",
    image: SmartBot,
    tags: ["React JS", "API ", "HTML", "CSS", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/pankajofficial0501/SmartAiBot",
    webapp: "https://smart-ai-bot-zeta.vercel.app/",
  },
  {
    id: 4,
    title: "Atlas ",
    description:
      "A Atlas Website to check the country information, built with React.js . It features a user-friendly interface for searching and viewing country details such as population, area, capital, and more. The website uses an external API to fetch real-time data about countries.",
    image: Atlas,
    tags: ["JavaScript", "API", "HTML", "CSS"],
    github: "https://github.com/pankajofficial0501/Movie",
    webapp: "",
  },
  {
    id: 5,
    title: "Animated website",
    description:
      " A fully Animated website built with React.js and Framer Motion. It features a modern design with smooth animations and transitions, providing an engaging user experience. The website includes multiple sections showcasing various content, all animated for a visually appealing effect.",
    image: animated,
    tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
    github: "https://github.com/pankajofficial0501/Animated-website",
    webapp: "https://animated-website-lemon-three.vercel.app",
  },
];
