interface Experience {
  title: string;
  company: string;
  year: number;
  location: string;
  description: string;
  skills: string[];
}

const experiences: Experience[] = [
  {
    title: "Core Team Member - SDG",
    company: "COPS IIT BHU",
    year: 2025,
    location: "Onsite",
    description:
      "Selected to work in the Software Development Guild of the Club of Programmers, IIT BHU.",
    skills: ["React", "TailwindCSS", "TypeScript", "MongoDB", "Express"],
  },
];

export default experiences;

// example
//   {
//     title: "Frontend Developer Intern",
//     company: "XYZ Corp",
//     year: "2024",
//     location: "Remote",
//     description:
//       "Worked on a modern dashboard using React and Tailwind CSS, improving user experience by 40%.",
//     skills: ["React", "TypeScript", "Tailwind CSS"],
//   },
//   {
//     title: "CTF Participant",
//     company: "PicoCTF",
//     year: "2023",
//     location: "Online",
//     description:
//       "Solved challenges in web, crypto and binary exploitation. Ranked in top 10% globally.",
//     skills: ["Cybersecurity", "Python", "Linux"],
//   },
//   {
//     title: "Open Source Contributor",
//     company: "Hacktoberfest",
//     year: "2022",
//     location: "Global",
//     description:
//       "Contributed to various JavaScript/TypeScript projects, focusing on performance optimizations.",
//     skills: ["JavaScript", "Git", "Open Source"],
//   },
