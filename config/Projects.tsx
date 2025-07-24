interface Project {
  title: string;
  desc: string;
  img: string;
  liveLink: string;
  githubLink: string;
  skills: string[];
}

const projects: Project[] = [
  {
    title: "BeatMeUp",
    desc: "A modern, real-time leaderboard web app for a ZType-inspired typing game. Built as a showcase project for the Induction Program 2025 IIT-BHU.",
    img: "/projects/beatmeup.png",
    liveLink: "https://beat-me-up-mauve.vercel.app/",
    githubLink: "https://github.com/zapwiz22/BeatMeUp",
    skills: ["Next.js", "Prisma", "TailwindCSS"],
  },
  {
    title: "Campus Cart",
    desc: "A secure campus-only marketplace for students to buy and sell items within their institute community. Built as the final project of CSOC Week'25.",
    img: "/projects/campuscart.png",
    liveLink: "https://campus-cart-kohl.vercel.app/",
    githubLink: "https://github.com/zapwiz22/CampusCart",
    skills: ["React", "MongoDB", "TypeScript", "Express", "2FAuth"],
  },
  {
    title: "Snippet Hub",
    desc: "Snippet-Hub is your personal and collaborative code snippet organizer. Store, manage, and share all your snippets in one intuitive platform — whether it's code, links, notes, or even files (client-side only). Great for individuals and teams alike!",
    img: "/projects/snippethub.png",
    liveLink: "https://snippet-hub-full-stack.vercel.app/",
    githubLink: "https://github.com/zapwiz22/CampusCart",
    skills: ["React", "MongoDB", "Express"],
  },
];

export default projects;
