import { Icon, loadIcon } from "@iconify-icon/react";
import axios from "axios";
import { useEffect, useState } from "preact/hooks";

// preload icons
loadIcon("fa6-brands:dev");
loadIcon("ri:dice-line");

function toggleTheme(themes: string[]) {
  const html = document.querySelector("html");
  const theme = html?.getAttribute("data-theme");
  // assign a random theme except the current one
  const filteredThemes = themes.filter((t) => t !== theme);
  const randomTheme = filteredThemes[Math.floor(Math.random() * themes.length)];

  html?.setAttribute("data-theme", randomTheme);
  localStorage.setItem("theme", randomTheme);
  console.log('Changed theme to', randomTheme); 
}
export default function AppBar() {
  const [themes, setThemes] = useState([]);
  useEffect(() => {
    axios.get("/api/themes").then((res) => {
      setThemes(res.data);
    });
  }, []);

  return (
    <nav class="flex justify-between items-center p-2">
      <a href="/" class="text-xl font-bold flex items-center justify-center">
        <Icon
          icon="fa6-solid:house-chimney"
          width="none"
          height="none"
        />
      </a>
      <ul class="flex gap-2">
        <li>
          <a
            class="btn btn-primary text-base-100"
            href="/Sampson-W-Resume_2024.pdf"
            download
          >
            Download Resume
          </a>
        </li>
        <li>
          <button
            class="btn"
            aria-label="change Theme"
            onClick={() => toggleTheme(themes)}
          >
            <Icon
              class="active:animate-spin"
              icon="ri:dice-line"
              width="none"
              height="none"
            />
          </button>
        </li>
      </ul>
    </nav>
  );
}
