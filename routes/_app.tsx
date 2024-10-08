import { type PageProps } from "$fresh/server.ts";
import AppBar from "../islands/AppBar.tsx";
import { Icon } from "@iconify-icon/react";

function MetaTags(
  { credentials, url }: { credentials: { name: string }; url: string },
) {
  return (
    <>
      {/* Primary Meta Tags */}
      <title>
        ${credentials.name} | Full Portfolio
      </title>
      <meta
        name="title"
        content={`${credentials.name} | Portfolio`}
      />
      <meta
        name="description"
        content={`Explore ${credentials.name}'s portfolio showcasing a diverse range of web development and digital marketing projects. Discover how I can strengthen your online presence and communities!`}
      />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${url}`} />
      <meta
        property="og:title"
        content={`${credentials.name} | Portfolio`}
      />
      <meta
        property="og:description"
        content={`Explore ${credentials.name}'s portfolio showcasing a diverse range of web development and digital marketing projects. Specializing in data-driven approaches with expertise across WordPress, HTML/CSS, Social Media Management, and more. Discover how I can strengthen your online presence and communities!`}
      />
      <meta
        property="og:image"
        content={`${url}meta-image.webp`}
      />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={`${url}`} />
      <meta
        property="twitter:title"
        content={`${credentials.name} | Portfolio`}
      />
      <meta
        property="twitter:description"
        content={`Explore ${credentials.name}'s portfolio showcasing a diverse range of web development and social media projects. Specializing in data-driven approaches with expertise across multiple technologies.`}
      />
      <meta
        property="twitter:image"
        content={`${url}meta-image.webp`}
      />

      {/* Meta Tags Generated with https://metatags.io */}
    </>
  );
}

export default function App({ Component }: PageProps) {
  const socials = [
    {
      name: "GitHub",
      url: "https://github.com/Sampson-git",
      icon: "fa-brands:github",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/sampson-williford-/",
      icon: "fa-brands:linkedin",
    },
    {
      name: "Email",
      url: "mailto:s.w.williford@wustl.edu",
      icon: "mdi:email"
    },
  ];

  const credentials = {
    name: "Sampson Williford",
  };

  const url = "https://sampson-portfolio.deno.dev/";

  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <MetaTags credentials={credentials} url={url} />
        <title>Portfolio | {credentials.name}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Color+Emoji&display=swap" rel="stylesheet"/>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body class="min-h-screen flex flex-col max-w-screen-xl mx-auto">
        <header>
          <AppBar />
        </header>
        <main>
          <Component />
        </main>
        <footer id="portfolio-footer"class="flex flex-col gap-4 items-center mt-auto footer w-auto m-2 p-4 bg-neutral text-neutral-content rounded-lg">
          <nav class="flex flex-col items-center justify-items-center justify-center">
            <h1 class="text-3xl font-bold text-secondary">Contact Me</h1>
            <ul class="flex flex-row gap-4 items-center">
            {socials.map((social) => (
              <li>
              <a
                href={social.url}
                target="_blank"
                aria-label={social.name}
              >
                <Icon icon={social.icon} width="24" height="24" />
              </a>
              </li>
            ))}
            </ul>
          </nav>
          <aside>
            <span id="model-attribution">
              <a class="underline" href="https://skfb.ly/opsP8" target="_blank">"Cat dispenser <span className="noto-color-emoji-regular">🐱</span>"</a> by <a class="underline" href="https://sketchfab.com/CuteLeaf"target="_blank">LeafChan</a> is licensed under <a class="underline" href='http://creativecommons.org/licenses/by/4.0/' target="_blank">Creative Commons Attribution</a>
            </span>
            {/* <span>
              <a class="underline" href="https://github.com/Sampson-git/post-grad-portfolio/blob/main/LICENSE" target="_blank">MIT licensed</a> from Michael Pfister.
            </span> */}
          </aside>
        </footer>
      </body>
    </html>
  );
}
