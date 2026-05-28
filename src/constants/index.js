const navLinks = [
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Achievements",
    link: "#achievements",
  },
];

const words = [
  { text: "Problems", imgPath: "/images/problems.svg" },
  { text: "Creations", imgPath: "/images/creations.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Innovations", imgPath: "/images/innovations.svg" },
  { text: "Theory", imgPath: "/images/theory.svg" },

];

const counterItems = [
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 200, suffix: "+", label: "Satisfied Clients" },
  { value: 108, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/arduino-original.png",
  },
  {
    imgPath: "/images/logos/bash-original.png",
  },
  {
    imgPath: "/images/logos/c-original.png",
  },
  {
    imgPath: "/images/logos/cplusplus-original.png",
  },
  {
    imgPath: "/images/logos/googlecolab-original.png",
  },
  {
    imgPath: "/images/logos/java-original.png",
  },
  {
    imgPath: "/images/logos/kaggle-original.png",
  },
  {
    imgPath: "/images/logos/leetcode-original.png",
  },
  {
    imgPath: "/images/logos/mysql-original.png",
  },
  /*{
    imgPath: "/images/logos/nextjs-original.png",
  },*/
  {
    imgPath: "/images/logos/nodejs-original.png",
  },
  {
    imgPath: "/images/logos/npm-original.png",
  },
  {
    imgPath: "/images/logos/numpy-original.png",
  },
  {
    imgPath: "/images/logos/pandas-original.png",
  },
  {
    imgPath: "/images/logos/pytorch-original.png",
  },
  {
    imgPath: "/images/logos/scikitlearn-original.png",
  },
  {
    imgPath: "/images/logos/react-original.png",
  },
  {
    imgPath: "/images/logos/streamlit-original.png",
  },
  {
    imgPath: "/images/logos/vite-original.png",
  },
  {
    imgPath: "/images/logos/vscode-original.png",
  },
  {
    imgPath: "/images/logos/yaml-original.png",
  },
  {
    imgPath: "/images/logos/canva-original.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
  imgPath: "/images/time.png", // or a 'bolt' icon
  title: "Technical Agility",
  desc: "A rapid learner capable of mastering new tech stacks and frameworks in record time.",
},
  {
  imgPath: "/images/star.png", 
  title: "Sustainable Innovation",
  desc: "Applying AI and engineering to transform waste into high-impact industrial solutions.",
}
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  }
  /*{
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },*/
];

const expCards = [
  {
    //review: "",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.jpg",
    title: "Machine Learning and Computer Vision Intern",
    date: "April 2026 - May 2026",
    responsibilities: [
      "Deconstructed, manipulated, and reconstructed media streams with custom audio integration.",
      "Implemented state-of-the-art object detection and precise semantic segmentation models.",
      "Engineered proprietary datasets to train and deploy specialized neural weights."
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  }
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      ".",
    imgPath: "/images/client1.png",
  }
];

const socialImgs = [
  {
    name: "Github",
    imgPath: "/images/github-origin.png",
    link: "https://www.github.com/mariamfworks"
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    link: "https://www.linkedin.com/in/mariam-f-a85266319/"
  },
];

const achievementscards = [
    {
      title: "Machine Learning and Computer Vision Intern",
      org: "IIIT Hyderabad",
      date: "2026",
      desc: "Attended a 6-months program followed by a 1-month internship. Built end-to-end CV pipelines for real-time object detection and semantic segmentation using YOLO and advanced image processing.",
      img: "/images/iiit-internship.PNG"
    },
    {
      title: "Data Analytics Simulation",
      org: "Tata Group",
      date: "February 2026",
      desc: "Completed the Forage job simulation focusing on financial risk, delinquency modeling, and executive-level data visualization.",
      img: "/images/tata-certificate.png"
    },
    {
      title: "Research Publication",
      org: "BITS Pilani / Technical Paper",
      date: "2025",
      desc: "Authored research on Homomorphic Encryption, exploring secure computation methods for sensitive data in cloud environments.",
      img: "/images/bits-HE.PNG"
    },
    {
      title: "Certificate of Distinction",
      org: "Indian Institute of Technology (IIT), Madras",
      date: "2025",
      desc: "Advanced to the final round of Shaastra Programming Contest hosted by IIT, Madras.",
      img: "/images/shaastra-2025.PNG"
    },
    {
      title: "Research Publication",
      org: "Journal of Emerging Technologies and Innovative Research (JETIR)",
      date: "2025",
      desc: "Authored research on Progress of Education as an SDG\nlink: https://www.jetir.org/view?paper=JETIR2504523",
      img: "/images/sdgppr.PNG"
    }
  ];


export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
  achievementscards
};
