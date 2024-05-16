<kbd><img src="https://github.com/michael-pfister/deno-portfolio/assets/63919069/68757f25-e530-4e64-ac66-cc2a4861b493" alt="portfolio hero section"/></kbd>

This porfolio uses an open source developer portfolio made using
[ThreeJS](https://threejs.org/) and [denoland fresh](https://fresh.deno.dev/) from this [ template](https://github.com/michael-pfister/deno-portfolio) under an MIT License.

#### Example

To change your Work expierience simply update the provided array found inside of
the `Experience` function under `routes/index.tsx`. The page section should
generate automatically.

```ts
const experiences: Experience[] = [
  {
    title: "Full Stack Web Developer",
    company: "AST Advanced Sales Technologies GmbH",
    timePeriod: "Sep 2023 - Apr 2024",
    location: "Vienna, Austria",
  },
  {
    title: "Junior Web Developer",
    company: "AST Advanced Sales Technologies GmbH",
    timePeriod: "Feb 2023 - Sep 2023",
    location: "Vienna, Austria",
  },
];
```
