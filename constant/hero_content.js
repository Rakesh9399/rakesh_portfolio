import project1 from "../src/assets/projects/project-1.png";
import project2 from "../src/assets/projects/project-2.png";
import project3 from "../src/assets/projects/project-3.png";
import project4 from "../src/assets/projects/project-4.webp";


// export const HERO_CONTENT = `I am a passionate Full Stack Developer with hands-on experience in building scalable and user-friendly web applications. I specialize in developing modern full stack applications using MongoDB, Express.js, React.js, Node.js, PHP, and MySQL. I have worked on real-time applications, REST APIs, authentication systems, and responsive user interfaces. I enjoy solving real-world problems through clean, optimized, and maintainable code while continuously learning new technologies and best development practices.`;

export const HERO_CONTENT = `Full Stack Developer specializing in MERN stack, PHP, and scalable backend systems. Passionate about building responsive web applications, REST APIs, and real-time experiences with clean and efficient code.`;

export const ABOUT_TEXT = `I am a dedicated Full Stack Developer focused on the MERN stack with experience in developing modern web applications from frontend to backend. I have worked on projects including real-time chat applications, video streaming backends, AI-based interview platforms, e-commerce websites, and travel listing platforms. My expertise includes React.js, Node.js, Express.js, MongoDB, REST APIs, JWT Authentication, Socket.io, and Tailwind CSS. Along with MERN technologies, I also have experience working with PHP, Laravel, Spring Boot, and MySQL. I am passionate about writing clean code, improving application performance, and building practical solutions that provide great user experiences.`;

/* export const ABOUT_TEXT = `I am a passionate Full Stack Developer focused on building scalable and user-friendly web applications using the MERN stack. I have experience developing real-time chat applications, video streaming backends, AI-based interview platforms, and travel listing systems. My expertise includes React.js, Node.js, Express.js, MongoDB, REST APIs, JWT Authentication, Socket.IO, and Tailwind CSS. I also have hands-on experience with PHP, Laravel, Spring Boot, and MySQL. I enjoy solving real-world problems, improving application performance, and writing clean, maintainable code.`; */

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Full Stack Developer",
    company: "ElderberryTech",
    description: `Developed and maintained scalable web applications using React.js, Node.js, Express.js, MongoDB, PHP, and Laravel. Built responsive user interfaces, RESTful APIs, and database-driven applications. Worked closely with clients and team members to deliver high-quality web solutions and improve application performance.`,
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "Tailwind CSS",
      "PHP",
      "Laravel",
      "MySQL",
      "WordPress",
      "Wix Studio"
    ],
  },
];

export const PROJECTS = [

  /* {
    title: "Real Time Chat Application",
    image: project2,
    description:
      "Built a real-time chat application with instant messaging functionality using Socket.io. Implemented authentication, online user status, and real-time communication between users with a responsive React.js frontend and Node.js backend.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "Socket.io",
      "MongoDB",
      "Tailwind CSS"
    ],
    github: "https://github.com/rakesh9399/chat-app", 
    live: "",
  }, */

  {
    title: "ChatSphere - Real Time Chat App",
    image: project2,
    /* description:
      "Developed a full-stack real-time chat application using MERN Stack and Socket.IO with instant messaging, JWT authentication, online user presence, image sharing, and responsive UI. Implemented secure backend APIs and real-time WebSocket communication for seamless user interaction.", */
    description:
      "Developed a full-stack real-time chat application using MERN Stack and Socket.IO with instant messaging, online user presence, image sharing, and responsive UI. Implemented secure backend APIs and real-time WebSocket communication for seamless user interaction.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      // "JWT",
      "Tailwind CSS",
      // "Cloudinary"
    ],
    github: "https://github.com/Rakesh9399/chat-app-frontend",
    live: "https://chat-app-frontend-six-gules.vercel.app/",
  },

  {
    title: "Video Streaming Backend",
    image: project1,
    description:
      "Developed a scalable backend API for a video streaming platform using Node.js, Express.js, and MongoDB. Implemented JWT authentication, secure password hashing, video upload management, subscriptions, and user management features. Integrated Cloudinary for cloud-based media storage and optimization.",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Cloudinary",
      "REST API"
    ],
    github: "https://github.com/rakesh9399/video-streaming-backend",
    live: "",
  },

  {
    title: "VocaHire AI",
    image: project3,
    description:
      "Built an AI-powered mock interview platform where users can practice technical interviews, track responses, and improve communication skills through dynamic interview workflows and authentication systems.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "JWT"
    ],
    github: "https://github.com/Rakesh9399/vocahire_ai",
    live: "",
  },

  {
    title: "Wanderlust Travel Platform",
    image: project4,
    description:
      "Developed a travel listing platform that allows users to explore hotels, villas, apartments, and destinations. Built responsive frontend pages, backend APIs, and database integration for managing travel listings and user interactions.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Bootstrap"
    ],
    github: "https://github.com/rakesh9399/wanderlust-travel-platform",
    live: "",
  },

];

export const CONTACT = {
  address: "Indore, Madhya Pradesh, India",
  phoneNo: "+91 9399063053 ",
  email: "mp966904@gmail.com",
};