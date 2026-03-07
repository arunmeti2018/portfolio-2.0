export interface Project {
  title: string;
  description: string;
  techStack: string[];
  liveLink?: string;
  githubLink?: string;
  imageSrc?: string;
}

export const PROJECTS: Project[] = [
  {
    title: "Digital Closet",
    description:
      "A platform for users to organize their wardrobe by tracking item usage, offering outfit suggestions, enabling item donation through community exchanges.",
    techStack: ["Node.js", "Express.js", "MongoDB", "HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/arunmeti2018/digital-closet",
    liveLink: "https://digital-closet.onrender.com/",
    imageSrc: "/assets/projects/shopping.svg",
  },
  {
    title: "Disaster Management System",
    description:
      "Platform providing real-time weather updates, disaster alerts, and AI-driven assistance to help users prepare for and respond to emergencies.",
    techStack: ["HTML", "CSS", "JavaScript", "API Integration"],
    githubLink: "https://github.com/arunmeti2018/Disaster-Management-system-",
    liveLink: "https://rescuehub.netlify.app/",
    imageSrc: "/assets/projects/social-media-feed.svg",
  },
  {
    title: "Snake Game",
    description:
      "An action game where the player controls a growing snake-like line and tries to avoid obstacles and its own tail. Gets harder as the snake lengthens.",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/arunmeti2018/Snake-Game",
    liveLink:
      "https://66c38fd934adde11bdce8bcd--eclectic-muffin-fc3b45.netlify.app/",
    imageSrc: "/assets/projects/portfolio.svg",
  },
];
