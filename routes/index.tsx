import SpinningModel from "../islands/SpinningModel.tsx";
import TypingAnimation from "../islands/TypingAnimation.tsx";
import { Icon, loadIcons } from "@iconify-icon/react";
import Wave from "../components/Wave.tsx";

// preload icons
loadIcons([
  "skill-icons:cs",
    "skill-icons:cpp",
    "logos:java",
    "vscode-icons:file-type-js-official",
    "logos:html-5",
    "logos:css-3",
    "skill-icons:react-dark",
    "skill-icons:tailwindcss-dark",
    "devicon:nodejs",
    "skill-icons:expressjs-dark",
    "skill-icons:wordpress",
    "logos:php",
    "logos:mysql",
    "vscode-icons:file-type-mongo",
    "skill-icons:twitter",
    "skill-icons:premiere",
    "skill-icons:unity-dark",
    "logos:deno",
    "logos:vue",
]);

function Hero() {
  return (
    <section class="p-4 flex justify-evenly items-center flex-wrap">
      <div class="max-w-sm mt-8">
        <h1 class="text-4xl font-bold text-primary">
          <TypingAnimation
            strings={[
              '"Hello, World!"',
              "«¡Hola, Mundo!»",
              "「こんにちは世界！」",
              "I'm a developer.",
              "I'm a communications specialist.",
            ]}
            autoStart={true}
          />
        </h1>
        <p class="text-xl mt-4">
          Sampson Williford is  a recent college grad creating engaging websites and social media content for the people, communities, and companies that need them!
        </p>
      </div>
      <SpinningModel />
    </section>
  );
}

interface Value {
  title: string;
  description: string;
  image: string;
}

function Values() {
  const values: Value[] = [
    {
      title: "Passion for Continuous Learning",
      description:
        "I will never turn down a chance at learning new tools and technologies. Naturally, I keep my ears to the ground concerning the latest news and trends and am always seeking opportunities to show what I know.",
      image: "/img/pexels-pixabay-159711.webp",
    },
    {
      title: "Loves a Challenge",
      description:
        'I pride myself on outputting quality work even under short deadlines and tight restrictions, as the saying goes: "Limitation breeds creativity." I believe in pursuing everything whole-heartedly, because being half-hearted in one\'s efforts cannot take them the whole way.',
      image: "/img/pexels-picjumbo-com-55570-196644.webp",
    },
    {
      title: "Collaboration and Communication",
      description:
        "I thrive in team environments and communicate effectively with my peers. Especially in diverse workspaces, where we can complement each other's strengths and weaknesses.",
      image: "/img/pexels-fauxels-3184418.webp",
    },
  ];

  return (
    <>
      <Wave flip={false} />
      <section class="p-4 flex justify-center items-center gap-4 flex-wrap bg-primary">
        {values.map((value, i) => (
          <div
            class={"card md:h-auto md:max-w-64 bg-base-100 flex-row md:flex-col shadow-lg" +
              (i % 2 ? " md:-translate-y-8" : "")}
          >
            <figure class="w-1/3 md:h-48 md:w-auto rounded-none rounded-l-box md:rounded-none md:rounded-t-box">
              <img
                class="w-full h-full object-cover"
                src={value.image}
                alt={value.title}
              />
            </figure>
            <div class="card-body w-2/3 md:w-auto">
              <h2 class="card-title">{value.title}</h2>
              <p>{value.description}</p>
            </div>
          </div>
        ))}
      </section>
      <Wave flip={true} />
    </>
  );
}

interface Experience {
  title: string;
  company: string;
  timePeriod: string;
  location: string;
}

function Experience() {
  const experiences: Experience[] = [
    {
      title: "Social Media Assistant",
      company: "Washington University in St. Louis - Olin Business School",
      timePeriod: "Jan - May 2024",
      location: "St. Louis, Mo",
    },
    {
      title: "Intern",
      company: "Washington University in St. Louis - Social Policy Institute",
      timePeriod: "Jun - Aug 2022",
      location: "Remote",
    },
    {
      title: "Communications Intern",
      company: "Washington University in St. Louis - University Advancement",
      timePeriod: "Jun - Aug 2021",
      location: "Remote",
    },
    {
      title: "Intern",
      company: "Washington University in St. Louis - School of Law",
      timePeriod: "Jun - Aug 2021",
      location: "Remote",
    },
  ];

  return (
    <section class="p-4 flex flex-wrap-reverse justify-evenly items-center gap-4">
      <div class="flex flex-col">
        {experiences.map((experience, i) => (
          <>
            {i > 0 &&
              (
                <div class="flex flex-col gap-2 ml-8 my-2">
                  {[...Array(3)].map(() => (
                    <span className="w-1 aspect-square bg-gray-500 rounded-full" />
                  ))}
                </div>
              )}

            <div class="card">
              <div class="card-body p-4">
                <h2 class="card-title">{experience.title}</h2>
                <span class="flex items-center gap-2 text-gray">
                  <Icon
                    icon="majesticons:suitcase"
                    width="none"
                    height="none"
                  />
                  {experience.company}
                </span>
                <span class="flex items-center gap-2 text-gray">
                  <Icon
                    icon="tabler:calendar-filled"
                    width="none"
                    height="none"
                  />
                  {experience.timePeriod}
                </span>
                <span class="flex items-center gap-2 text-gray">
                  <Icon
                    icon="carbon:location-filled"
                    width="none"
                    height="none"
                  />
                  {experience.location}
                </span>
              </div>
            </div>
          </>
        ))}
      </div>
      <h1 class="text-3xl font-bold text-primary">Work Experience</h1>
    </section>
  );
}

interface Project {
  title: string;
  description: string;
  link: string;
  type: string;
  icon: string;
}

function Projects() {
  const projects: Project[] = [
    {
      title: "University Advancement Rebrand",
      description:
        "Fresh is a full stack modern web framework for JavaScript and TypeScript developers.",
      link: "https://advancement.wustl.edu/",
      type: "Internship",
      icon: "skill-icons:wordpress",
    },
    {
      title: "Game Development + Design Studio",
      description:
        "Fresh is a full stack modern web framework for JavaScript and TypeScript developers.",
      link: "https://washugdds.itch.io/",
      type: "Extracurricular",
      icon: "skill-icons:unity-dark",
    },
    {
      title: "Rapid Prototyping",
      description:
        "Dogr is a web application I developed to hone my skills in Nuxt and Vue.",
      link: "https://classes.engineering.wustl.edu/cse330/index.php?title=CSE_330_Online_Textbook_-_Table_of_Contents",
      type: "Class",
      icon: "bi:code-slash",
    },
    {
      title: "Dolphin Site Redesign",
      description:
        "Dogr is a web application I developed to hone my skills in Nuxt and Vue.",
      link: "https://wustl-cse204a-sp2024-2.github.io/brand-redesign-Sampson-git/",
      type: "Academic\/Personal",
      icon: "skill-icons:html",
    },
    {
      title: "Dean's Social Media Account",
      description:
        "Dogr is a web application I developed to hone my skills in Nuxt and Vue.",
      link: "https://linkedin.com/michael-mazzeo",
      type: "Internship",
      icon: "skill-icons:linkedin",
    },
  ];

  return (
    <section class="p-4 my-8">
      <h1 class="text-3xl font-bold text-primary text-center mb-4">
        Projects and Classes
      </h1>
      <div class="flex flex-wrap justify-center items-center gap-2">
        {projects.map((project) => (
          <div class="card max-w-96">
            <div class="card-body p-4">
              <h2 class="card-title">
                <Icon
                  class="w-6 h-6"
                  icon={project.icon}
                  width="none"
                  height="none"
                />
                {project.title}
                <span class="badge badge-ghost ml-auto">{project.type}</span>
              </h2>
              <p>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                class="btn btn-primary text-base-100"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Technologies() {
  const technologies = [
    "skill-icons:cs",
    "skill-icons:cpp",
    "logos:java",
    "vscode-icons:file-type-js-official",
    "logos:html-5",
    "logos:css-3",
    "skill-icons:react-dark",
    "skill-icons:tailwindcss-dark",
    "devicon:nodejs",
    "skill-icons:expressjs-dark",
    "skill-icons:wordpress",
    "logos:php",
    "logos:mysql",
    "vscode-icons:file-type-mongo",
    "skill-icons:twitter",
    "skill-icons:premiere",
    "skill-icons:unity-dark",
  ];

  return (
    <section class="my-16">
      <h1 class="text-3xl font-bold text-primary text-center mb-4">
        Technologies
      </h1>
      <div class="p-4 flex justify-center items-center flex-wrap gap-4">
        {technologies.map((technology) => (
          <Icon
            class="w-8 h-8"
            icon={technology}
            width="none"
            height="none"
          />
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Values />
      <Projects />
      <Experience />
      <Technologies />
    </>
  );
}
