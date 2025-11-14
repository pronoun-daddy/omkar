import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Omkar More",
  initials: "OM",
  url: "https://github.com/omkar-codehub",
  location: "Hyderabad, Telangana, India",
  locationLink: "https://www.google.com/maps/place/hyderabad",
  description:
    "Computer Science student and aspiring software engineer. I love building AI-powered solutions and solving real-world problems through code.",
  summary:
    "Looking to work on real-world software projects, solve problems, and contribute effectively in a collaborative team environment. I'm currently pursuing my BTech in Computer Science at Keshav Memorial Institute of Technology with a CGPA of 8.1/10. I have experience building [AI-based systems for maritime surveillance](/#projects), [real-time gesture communication platforms](/#projects), and [smart budgeting applications](/#projects). I secured 1st place at TechSurge '25 Hackathon and have a published patent for Hand Sign Language Translation System.",
  avatarUrl: "/image.png",
  skills: [
    "C",
    "Java",
    "Python",
    "JavaScript",
    "HTML",
    "CSS",
    "Node.js",
    "MySQL",
    "MongoDB",
    "Git",
    "PyVips",
    "OpenSeadragon",
    "MediaPipe",
    "WebSockets",
    "Gemini API",
    "Web Speech API",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "moreomkar2005@gmail.com",
    tel: "+919110529892",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/omkar-codehub",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/more-omkar",
        icon: Icons.linkedin,
        navbar: true,
      },
      LeetCode: {
        name: "LeetCode",
        url: "https://leetcode.com/u/omkar-code",
        icon: Icons.globe,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/omkar-codehub",
        icon: Icons.x,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:moreomkar2005@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    // Add work experience when available
  ] as Array<{
    company: string;
    href: string;
    badges?: readonly string[];
    location: string;
    title: string;
    logoUrl: string;
    start: string;
    end: string | undefined;
    description: string;
  }>,

  education: [
    {
      school: "Keshav Memorial Institute of Technology",
      href: "https://kmit.in",
      degree: "BTech in Computer Science",
      logoUrl: "/kmit.png",
      start: "Aug 2024",
      end: "2027",
      description: "CGPA: 8.1/10",
    },
    {
      school: "Government Polytechnic College, Nizamabad",
      href: "#",
      degree: "Diploma in Computer Science",
      logoUrl: "/gpc.png",
      start: "Aug 2021",
      end: "May 2024",
      description: "CGPA: 9.4/10",
    },
  ],

  projects: [
    {
      title: "SAR Marine Surveillance",
      href: "#",
      dates: "2024",
      active: true,
      description:
        "Developed an AI-based system using SAR satellite data to detect ships and identify oil spills for maritime monitoring. Built an interactive high-resolution SAR image viewer using PyVips and OpenSeadragon for efficient zoom and exploration.",
      technologies: [
        "Python",
        "PyVips",
        "OpenSeadragon",
        "AI/ML",
        "Satellite Imagery",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/omkar-codehub",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "ASTRA",
      href: "#",
      dates: "2024",
      active: true,
      description:
        "Built a real-time gesture-based communication platform to assist nonverbal users during video calls. Trained a hand sign language detection model using MediaPipe, converting gestures into text in real time. Patent published for this innovation.",
      technologies: [
        "MediaPipe",
        "WebSockets",
        "Python",
        "JavaScript",
        "Real-time Communication",
        "Computer Vision",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/omkar-codehub/ASTRA",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Pocket Pilot",
      href: "#",
      dates: "2025",
      active: true,
      description:
        "Developed an AI-based smart budgeting application with voice-activated expense logging, spending analysis, and automated micro-savings. Integrated Gemini AI to provide personalized financial insights and a Regret Radar feature to warn users about potentially regretful spending. Won 1st Place at TechSurge '25 Hackathon.",
      technologies: [
        "Gemini API",
        "Web Speech API",
        "JavaScript",
        "Node.js",
        "AI/ML",
      ],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],

  hackathons: [
    {
      title: "TechSurge '25 Hackathon",
      dates: "2025",
      location: "India",
      description:
        "Secured 1st Place for developing Pocket Pilot, an AI-based smart budgeting platform with voice-activated expense logging and personalized financial insights using Gemini AI.",
      image: "",
      win: "1st Place",
      links: [],
    },
  ],
} as const;
