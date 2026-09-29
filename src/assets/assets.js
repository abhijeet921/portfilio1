import {
  FaCloud,
  FaCode,
  FaCss3,
  FaDatabase,
  FaFire,
  FaLightbulb,
  FaMobile,
  FaNodeJs,
  FaPaintBrush,
  FaReact,
  FaServer,
  FaStripe,
  FaToolbox,
  FaTools,
  FaVuejs,
  FaWeebly,
} from "react-icons/fa";

import profileImg from "../assets/profileImg.png";
import profileImg1 from "../assets/profileImg1.png";
import projectImg1 from "../assets/projectImg1.jpg";
import projectImg2 from "../assets/projectImg2.jpg";
import projectImg3 from "../assets/projectImg3.jpg";

import projectImg4 from "../assets/projectImg4.png";
import projectImg5 from "../assets/projectImg5.png";
import projectImg6 from "../assets/projectImg6.jpg";

export const assets = {
  profileImg,
};
export const assets1 = {
  profileImg1,
};

export const aboutInfo = [
  {
    icon: FaLightbulb,
    title: "Innovative",
    description:
      "I love creating unique solution to complex problems with cutting-edge technologies.",
    color: "text-pink",
  },
  {
    icon: FaPaintBrush,
    tittle: "Design Oriented",
    description:
      "Beautiful designed and user experience are at the heart of everyting I create.",
    color: "text-pink",
  },
  {
    icon: FaCode,
    title: "Clean Code",
    description:
      "I have maintainable efficient code following best practies and modern patterns.",
    color: "text-pink",
  },
];

export const skills = [
  {
    title: "Frontend Developer",
    icon: FaReact,
    description:
      "Building responsive and interactive user interface with modern framework.",
    tags: ["React", "Vue.js", "Angular", "TypeScript"],
  },
  {
    title: "Backend Developer",
    icon: FaServer,
    description: "Creating roboust server-side appliactions and RESTful APIs.",
    tags: ["Node.js", "Express", "Django", "Larvel"],
  },
  {
    title: "Database Management",
    icon: FaDatabase,
    description:
      "Designing and optimizing schemas, queries, and data flows for scalable apps.",
    tags: ["SQL", "MongoDB", "PostgreSQL", "Redis"],
  },
  {
    title: "Mobile Development",
    icon: FaMobile,
    description:
      "Building cross-platform mobile application with modern tools.",
    tags: ["ReactNative", "Flutter", "Ionic", "Swift"],
  },
  {
    title: "Cloud & DevOps",
    icon: FaCloud,
    description: "Deploying and managing applications in cloud environments.",
    tags: ["AWS", "Docker", "Kubernets", "CI/CD"],
  },
  {
    title: "Tools & Technologies",
    icon: FaTools,
    description:
      "Essential tools and technologies I used in my development workflow.",
    tags: ["GitHub", "Webpack", "Figma", "Jest"],
  },
];

export const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured online store with shopping cart, user authentication and paymnet processing.",
    image: projectImg1,
    tech: ["React", "Node.js", "MongoDB", "stripe"],
    icon: [FaReact, FaNodeJs, FaDatabase, FaStripe],
    demo: "#",
    code: "#",
  },
  {
    title: "Task Management App",
    description:
      "Aproductivity application with drag and drop functionality and real-time updates.",
    image: projectImg2,
    tech: ["Vue.js", "Firebase", "Tailwind", "CSS", "WebSockets"],
    icon: [FaVuejs, FaFire, FaCss3, FaWeebly],
    demo: "#",
    code: "#",
  },
  {
    title: "Fitness Tracker",
    description:
      "A mobile app for tracking workouts, nutration and health metrics.",
    image: projectImg3,
    tech: ["React", "Node.js", "GraphQL", "Chart.js"],
    icon: [FaReact, FaNodeJs, FaDatabase, FaStripe],
    demo: "#",
    code: "#",
  },
  {
    title: "Protfolio Website",
    description:
      "A personal protfolio to showcase projects, skills and blogs with dark/light mode support.",
    image: projectImg4,
    tech: ["Next.js", "Tailwind CSS", "farmer Motion", "Markdown"],
    icon: [, FaNodeJs, FaDatabase, FaStripe],
    demo: "#",
    code: "#",
  },
  {
    title: "Chat App",
    description:
      "A real-time chat application with group messaging, emojis, and file sharing.",
    image: projectImg5,
    tech: ["Socket.IO", "Node.js", "MongoDB", "React"],
    icon: [FaReact, FaNodeJs, FaDatabase, FaStripe],
    demo: "#",
    code: "#",
  },
  {
    title: "AI Image Generator",
    description:
      "Generate images using AI prompts powered by OpenAI's DALL.E model and Cloudinary.",
    image: projectImg6,
    tech: ["React", "Node.js", "MongoDB", "OpenAI API"],
    icon: [FaReact, FaNodeJs, FaDatabase, FaStripe],
    demo: "#",
    code: "#",
  },
];

export const workData = [
  {
    role: "Senior Frontend Developer",
    company: "TechCorp Inc",
    duration: "2020 - present",
    description:
      "Leading frontend developer for enterpise clients, implementing modern framework and mentoring junior developer",
    color: "purple",
  },
  {
    role: "Web Developer",
    company: "Digital Solutions",
    duration: "2018 - 2020",
    description:
      "Developed and maintained web application for various clients,focusing on responsive design and performance optimization.",
    color: "purple",
  },
  {
    role: "Junior Developer",
    company: "StartUp Ventures",
    duration: "2017 - 2018",
    description:
      "Stated my career building basic and gradually took on more complex projects as i expanded my skill set.",
    color: "purple",
  },
];
