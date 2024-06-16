import {
  mobile,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  unipi,
  threejs,
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
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Content Creator",
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
    name: "JavaScript",
    icon: javascript,
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
    name: "Three JS",
    icon: threejs,
  },
];

const istruzione = [
  {
    name: "Università di Pisa",
    icon: unipi,
    iconBg: "#204056",
    date: "Nov 2021 - Present",
    title: "Laurea in Informatica",
    points: [
      "JavaScript Syntax",
      "Fundamentals of HTML",
      "Fundamentals of CSS",
      "Operating Systems",
      "Deploying Websites",
      "React Framework",
      "Service Workers, Manifest.json & Web APIS",
      "PWA",
    ],
  },
  {
    name: "ISTITUTO STATALE ITALIANO OMNICOMPRENSIVO DI ADDIS ABEBA",
    icon: "",
  },
];
const projects = [
  {
    name: "Friday",
  },
];

export { services, technologies, istruzione };
